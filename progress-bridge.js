(function () {
  "use strict";

  const APPROVED = {
    "responsible-supply-chain-compliance-foundations": "#course-complete.active",
    "eco-design-circularity-aerospace-materials": "#course-complete.active",
    "supply-chain-compliance-decision-review": "#decision-review-complete.active",
    "ethical-armor": "#final.active",
    "reach-compliance-challenge": ".final-score",
    "year-15-challenge": ".final-screen"
  };
  const script = document.currentScript;
  const resourceId = script?.dataset.resourceId;
  const expectedSelector = APPROVED[resourceId];
  if (!resourceId || !expectedSelector || script.dataset.completionSelector !== expectedSelector) return;
  if (!window.SNProgressService || !window.SN_CATALOGUE || !window.SN_LEARNING_PATHS) return;

  const language = new URLSearchParams(location.search).get("hubLang") === "es" ? "es" : "en";
  const service = window.SNProgressService.createBrowserService(window.SN_CATALOGUE, window.SN_LEARNING_PATHS, window.localStorage);
  let reported = service.getState().resources[resourceId]?.status === "completed";

  function showConfirmation() {
    let notice = document.querySelector(".sn-progress-confirmation");
    if (!notice) {
      notice = document.createElement("div");
      notice.className = "sn-progress-confirmation";
      notice.setAttribute("role", "status");
      notice.setAttribute("aria-live", "polite");
      notice.innerHTML = `<strong></strong><button type="button"></button>`;
      const style = document.createElement("style");
      style.textContent = ".sn-progress-confirmation{position:fixed;z-index:2147483647;right:12px;bottom:12px;max-width:360px;padding:15px 17px;border:2px solid #63d4b2;border-radius:14px;background:#071b33;color:#fff;font:700 13px/1.45 system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.35)}.sn-progress-confirmation strong{display:block}.sn-progress-confirmation button{min-height:44px;margin-top:9px;border:1px solid #fff;border-radius:9px;background:transparent;color:#fff;padding:8px 12px;font-weight:800}.sn-progress-confirmation button:focus-visible{outline:3px solid #63d4e7;outline-offset:3px}";
      document.head.append(style); document.body.append(notice);
    }
    notice.querySelector("strong").textContent = language === "es" ? "Actividad completada y guardada en este navegador." : "Activity completed and saved in this browser.";
    const undo = notice.querySelector("button"); undo.textContent = language === "es" ? "Deshacer" : "Undo";
    undo.onclick = () => { service.undoResource(resourceId); reported = false; notice.remove(); };
  }

  function inspect() {
    if (reported || !document.querySelector(expectedSelector)) return;
    const pending = service.getState().preferences.pendingLaunch;
    const result = service.reportInternalCompletion(resourceId, language);
    if (result.ok) {
      reported = true; showConfirmation(); observer.disconnect();
      const undo = document.querySelector(".sn-progress-confirmation button");
      undo.onclick = () => {
        if (pending?.pathId && pending?.stepId) service.undoPathStep(pending.pathId, pending.stepId);
        service.undoResource(resourceId); reported = false; document.querySelector(".sn-progress-confirmation")?.remove();
      };
    }
  }
  const observer = new MutationObserver(inspect);
  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  inspect();
})();
