// 「大きく」モード：文字とマスを大きくして、1枚の問題数を減らす（あふれた問題は次の紙へ）。
// 国語・くらしの各ページで共通。問題そのものは減らさず、紙の枚数で調整する。
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
    b.title = "文字とマスを大きくして、1枚の問題数を減らします（問題は次の紙に続きます）";
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
    .big-cont-note { font-size: 0.75rem; font-weight: 700; color: #57534e; margin: 0 0 6px; }
    @media print { .big-cont-note { color: #57534e; } }`;
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

  // 1枚の紙を、はみ出さない所で次の紙に分ける
  function split(sheet) {
    const rows = sheet.querySelector(ROWS);
    sheet.dataset.bigDone = "1";
    if (!rows) return;
    rows.classList.add("big-rows");
    // 印刷時は画面より少し高くなることがあるので、6% の余白を見ておく
    const limit = (sheet.getBoundingClientRect().width * 297) / 210 * 0.94;
    let cur = sheet, curRows = rows, guard = 0;
    while (over(cur, curRows, limit) && curRows.children.length > 1 && guard++ < 20) {
      const next = cur.cloneNode(true);
      next.dataset.bigDone = "1";
      next.querySelectorAll(".kanji-strip, .focus-card, .cal-wrap, .big-cont-note").forEach((el) => el.remove());
      const nextRows = next.querySelector(ROWS);
      nextRows.innerHTML = "";
      const note = document.createElement("div");
      note.className = "big-cont-note";
      note.textContent = "（つづき）";
      nextRows.parentNode.insertBefore(note, nextRows);
      cur.after(next);
      // はみ出さなくなるまで、後ろの問題を次の紙へ送る
      while (over(cur, curRows, limit) && curRows.children.length > 1) {
        nextRows.insertBefore(curRows.lastElementChild, nextRows.firstChild);
      }
      // 見出しだけが紙の最後に残らないようにする
      while (curRows.children.length > 1 && isHeadingRow(curRows.lastElementChild)) {
        nextRows.insertBefore(curRows.lastElementChild, nextRows.firstChild);
      }
      cur = next;
      curRows = nextRows;
    }
  }

  let busy = false, queued = false;
  function run() {
    queued = false;
    if (busy) return;
    busy = true;
    try {
      document.querySelectorAll(SHEET).forEach((s) => {
        if (!s.dataset.bigDone && s.offsetWidth > 0) split(s);
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
