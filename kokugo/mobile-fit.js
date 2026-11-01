// スマホ・タブレットでは A4 紙面（210mm ≒ 794px）を画面幅いっぱいに縮小して中央に表示する。
// 国語の各ページ・くらしで共通。紙面が描き直されるたびに自動で倍率を合わせ直す。
// 印刷では紙の高さを A4 より少し低くして、白紙の2ページ目が出ないようにする。
(function () {
  const SHEET = '.sheet, .print-sheet';
  const SHEET_PX = 794;
  const MOBILE = '(max-width: 900px)';

  const style = document.createElement('style');
  style.textContent = `
    @media screen and ${MOBILE} {
      .preview-workspace, .content-area { padding-left: 8px !important; padding-right: 8px !important; overflow-x: hidden !important; }
      .content-area { flex-direction: column; }
      ${SHEET} { width: 210mm !important; min-width: 0 !important; min-height: 0 !important; flex-shrink: 0;
        margin-left: auto !important; margin-right: auto !important; }
      /* ツールバー：ステップ名は短く1行に、ボタンは折り返して全部見せる */
      .pill-sub { display: none !important; }
      .step-pills, .level-tabs { display: flex; width: 100%; }
      .step-pill, .level-tab { flex: 1; padding: 6px 4px; white-space: nowrap; }
      .top-toolbar { flex-wrap: wrap; padding: 10px; }
      .toolbar-left { flex-wrap: wrap; width: 100%; gap: 8px; }
      .toolbar-right { display: flex; flex-wrap: wrap; gap: 6px; width: 100%; }
      .toolbar-right > *, .toolbar-actions > * { flex: 1 1 auto; justify-content: center; white-space: nowrap; }
      .drawer-toggle { white-space: nowrap; }
    }
    @media print {
      ${SHEET} { zoom: 1 !important; }
    }`;
  document.head.appendChild(style);

  // 余白0で印刷するページ（紙そのものが A4 の大きさ）では、紙の高さが 297mm ちょうどだと
  // 端末によって わずかに はみ出し、2ページ目に白紙が出る。印刷では少しだけ低くして 1枚に収める。
  // （余白つきで印刷するページは、紙の高さが自動なので対象外）
  function pageMarginIsZero() {
    let found = false, zero = true;
    for (const sh of document.styleSheets) {
      let rules; try { rules = sh.cssRules; } catch (e) { continue; }
      const walk = (list) => { for (const r of list) {
        if (r.type === CSSRule.PAGE_RULE) { found = true; if (!/^0(px|mm)?$/.test((r.style.marginTop || "0").trim())) zero = false; }
        else if (r.cssRules) walk(r.cssRules);
      } };
      walk(rules);
    }
    return found && zero;
  }
  function addPrintFit() {
    if (!pageMarginIsZero() || document.getElementById("print-fit-style")) return;
    const st = document.createElement("style");
    st.id = "print-fit-style";
    st.textContent = `@media print {
      html, body { height: auto !important; min-height: 0 !important; }
      ${SHEET} { box-sizing: border-box !important; height: 295mm !important; min-height: 0 !important;
        max-height: 295mm !important; overflow: hidden !important; }
    }`;
    document.head.appendChild(st);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addPrintFit); else addPrintFit();

  function fitSheets() {
    const mobile = window.matchMedia(MOBILE).matches;
    document.querySelectorAll(SHEET).forEach(s => {
      let zoom = '';
      if (mobile && s.parentElement) {
        const box = s.parentElement;
        const cs = getComputedStyle(box);
        const avail = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        zoom = String(Math.min(1, avail / SHEET_PX));
      }
      if (s.style.zoom !== zoom) s.style.zoom = zoom;
    });
  }

  let queued = false;
  function queueFit() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; fitSheets(); });
  }

  window.addEventListener('resize', queueFit);
  new MutationObserver(queueFit).observe(document.body, { childList: true, subtree: true });
  queueFit();
})();
