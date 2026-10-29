// スマホ・タブレットでは A4 紙面（210mm ≒ 794px）を画面幅いっぱいに縮小して中央に表示する。
// 国語の各ページで共通。紙面が描き直されるたびに自動で倍率を合わせ直す。
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
