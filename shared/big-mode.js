// 「大きく」モード：文字とマスを大きくして、1枚の問題数を減らす。紙は1枚のまま。
// 国語・くらしの各ページで共通。入りきらない問題は、問題の多いまとまりから順に減らす。
// 設定は端末内（localStorage）と URL の big=1 / big=0 に保存する。個人情報は扱わない。
(function () {
  const KEY = "sukkiri-big";
  const ZOOM = 1.3;
  const SHEET = ".sheet, .print-sheet";
  const ROWS = ".rows, .q-grid, .puzzle-grid";

  function readOn() {
    const p = new URLSearchParams(location.search).get("big");
    if (p === "1" || p === "0") {
      try { localStorage.setItem(KEY, p); } catch (e) {}
      return p === "1";
    }
    try { return localStorage.getItem(KEY) === "1"; } catch (e) { return false; }
  }
  const on = readOn();

  // ---- ツールバーに切り替えボタンを足す ----
  function addButton() {
    const bar = document.querySelector(".toolbar-actions, .toolbar-right");
    if (!bar || bar.querySelector(".big-toggle")) return;
    const b = document.createElement("button");
    b.className = "btn big-toggle";
    b.type = "button";
    b.textContent = on ? "文字：大きく" : "文字：ふつう";
    b.title = "文字とマスを大きくして、紙1枚に入る数まで問題を減らします";
    if (on) b.style.cssText = "background:#1c1917;color:#fff;border-color:#1c1917;";
    b.addEventListener("click", () => {
      const next = on ? "0" : "1";
      try { localStorage.setItem(KEY, next); } catch (e) {}
      const url = new URL(location.href);
      url.searchParams.set("big", next);
      location.href = url.toString();
    });
    bar.insertBefore(b, bar.firstChild);
  }

  if (!on) {
    document.addEventListener("DOMContentLoaded", addButton);
    if (document.readyState !== "loading") addButton();
    return;
  }

  const style = document.createElement("style");
  style.textContent = `
    .big-rows { zoom: ${ZOOM}; flex: 0 0 auto !important; }
    @media print { .big-parent { gap: 0 !important; row-gap: 0 !important; } .big-last { page-break-after: auto !important; break-after: auto !important; } }
`;
  document.head.appendChild(style);

  const isHeadingRow = (row) => !!row && !!row.querySelector(".sec-title") && !row.querySelector(".item");

  // 紙の中身の高さ（紙は最低A4の高さがあるので、紙そのものではなく中身を測る）
  function contentHeight(sheet, rows) {
    const top = sheet.getBoundingClientRect().top;
    let h = rows.getBoundingClientRect().bottom - top;
    let el = rows.nextElementSibling;
    while (el) { h += el.getBoundingClientRect().height; el = el.nextElementSibling; }
    return h + parseFloat(getComputedStyle(sheet).paddingBottom || "0") + 8;
  }
  const over = (sheet, rows, limit) => contentHeight(sheet, rows) > limit;

  const isRei = (row) => row.classList.contains("is-rei") || !!row.querySelector(".is-rei, .rei-badge");
  const NUM_RE = /^\s*([(（]?)(\d+)([)）]?)\s*$/;

  // 見出しごとに問題をまとめる（見出しが無ければ全体で1つ）
  function sections(rows) {
    const out = [];
    let cur = { items: [] };
    out.push(cur);
    [...rows.children].forEach((r) => {
      if (isHeadingRow(r)) { cur = { items: [] }; out.push(cur); }
      else if (!isRei(r)) cur.items.push(r);
    });
    return out.filter((x) => x.items.length > 0);
  }

  // 問題番号を 1 から つけ直す（(1)(2)… の形はそのまま）
  function renumber(rows) {
    let n = 0;
    [...rows.children].forEach((r) => {
      if (isRei(r) || isHeadingRow(r)) return;
      const el = [...r.querySelectorAll(".no, .q-num, .q-no, .p-num")].find((e) => NUM_RE.test(e.textContent));
      if (!el) return;
      n++;
      el.textContent = el.textContent.replace(NUM_RE, (m, a, d, b) => `${a}${n}${b}`);
    });
  }

  // 紙1枚に収まるまで、問題を減らす。いちばん問題の多いまとまりの 最後の問題から減らし、
  // どのまとまりも 1問は残す（れい・見出しは消さない）
  function fit(sheet) {
    const rows = sheet.querySelector(ROWS);
    sheet.dataset.bigDone = "1";
    if (!rows) return;
    rows.classList.add("big-rows");
    // 印刷時は画面より少し高くなることがあるので、6% の余白を見ておく
    const limit = (sheet.getBoundingClientRect().width * 297) / 210 * 0.94;
    // 横にはみ出す行（長い答えのマスなど）は、その行だけ少し小さくして紙の幅に収める
    [...rows.children].forEach((r) => {
      if (r.scrollWidth > r.clientWidth + 1) r.style.zoom = String(Math.max(0.7, r.clientWidth / r.scrollWidth));
    });
    let removed = 0, guard = 0;
    while (over(sheet, rows, limit) && guard++ < 60) {
      const secs = sections(rows).filter((x) => x.items.length > 1);
      if (!secs.length) break;
      secs.sort((a, b) => b.items.length - a.items.length);
      secs[0].items[secs[0].items.length - 1].remove();
      removed++;
    }
    if (removed) {
      renumber(rows);
      // 見出しの「○もん」を、残った問題の数に合わせる
      let head = null, cnt = 0;
      const fix = () => { if (head) head.querySelectorAll(".sec-title, .sec-title *").forEach((e) => {
        e.childNodes.forEach((t) => { if (t.nodeType === 3) t.textContent = t.textContent.replace(/(\d+)もん/, `${cnt}もん`); });
      }); };
      [...rows.children].forEach((r) => {
        if (isHeadingRow(r)) { fix(); head = r; cnt = 0; } else if (!isRei(r)) cnt++;
      });
      fix();
      // カレンダーの○印など、消した問題の目印も消す
      const left = new Set([...rows.querySelectorAll(".q-num")].map((e) => e.textContent.trim()));
      sheet.querySelectorAll(".cal td .qtag").forEach((t) => {
        if (t.textContent.trim() !== "れい" && !left.has(t.textContent.trim())) {
          t.parentElement.classList.remove("mark");
          t.remove();
        }
      });
    }
  }

  let busy = false, queued = false;
  function run() {
    queued = false;
    if (busy) return;
    busy = true;
    try {
      document.querySelectorAll(SHEET).forEach((s) => {
        if (!s.dataset.bigDone && s.offsetWidth > 0) fit(s);
      });
      // いちばん最後の紙のあとに白紙のページが出ないようにする
      const all = [...document.querySelectorAll(SHEET)];
      all.forEach((s, i) => {
        s.classList.toggle("big-last", i === all.length - 1);
        if (s.parentElement) s.parentElement.classList.add("big-parent"); // 紙と紙のすき間は印刷しない
      });
    } finally {
      busy = false;
    }
  }
  function queue() {
    if (queued || busy) return;
    queued = true;
    requestAnimationFrame(run);
  }

  function start() {
    addButton();
    run();
    new MutationObserver(queue).observe(document.body, { childList: true, subtree: true });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // フォント読み込み後に高さが変わるので、描き直しを待ってから測り直す
        document.querySelectorAll(SHEET).forEach((s) => {
          const r = s.querySelector(ROWS);
          if (r && s.offsetWidth > 0 && over(s, r, (s.getBoundingClientRect().width * 297) / 210 * 0.94)) {
            s.removeAttribute("data-big-done");
          }
        });
        queue();
      });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
