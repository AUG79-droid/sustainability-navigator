(function (root, factory) {
  const api = factory(root.SNProgressSelectors);
  if (typeof module === "object" && module.exports) module.exports = factory(require("./progress-selectors.js"));
  else root.SNProgressUI = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (selectors) {
  "use strict";

  const copy = {
    es: {
      not_started: "No iniciado", in_progress: "En curso", completed: "Completado", update_available: "Actualización disponible",
      markProgress: "Marcar en curso", markComplete: "Marcar como completado", undo: "Deshacer finalización", applyPrevious: "Aplicar finalización anterior a esta ruta",
      startPath: "Iniciar ruta", currentPath: "Ruta actual", makeCurrent: "Establecer como ruta actual", pathProgress: "Progreso obligatorio",
      requiredText: (done, total) => `${done} de ${total} pasos obligatorios completados.`, preferredLanguage: "Idioma preferido",
      explored: "Exploración registrada", markExplored: "Marcar como explorado", completedPreviously: "Ya completaste este recurso fuera de esta ruta.",
      localTitle: "Mi progreso", localIntro: "Tu progreso se guarda únicamente en este navegador. No se transmite ni se sincroniza.",
      privacy: "Otras personas con este perfil del navegador podrían verlo. Al borrar los datos del navegador puede desaparecer y la navegación privada puede no conservarlo. Exportar crea una copia de seguridad.",
      resources: "Recursos completados", startedPaths: "Rutas iniciadas", completedPaths: "Rutas completadas", assessments: "Evaluaciones completadas", capstones: "Capstones completados",
      next: "Siguiente actividad recomendada", noCurrent: "Inicia una ruta para recibir una recomendación contextual.", routeComplete: "Has completado todos los pasos obligatorios de esta ruta.",
      optional: "Actividades opcionales disponibles", recent: "Completado recientemente", none: "Todavía no hay actividad registrada.",
      export: "Exportar progreso", import: "Importar progreso", reset: "Restablecer progreso", replace: "Reemplazar con esta copia", cancel: "Cancelar",
      importTitle: "Vista previa de importación", importInvalid: "El archivo no contiene un progreso válido.", importSummary: s => `${s.completedResources} recursos completados y ${s.paths} rutas iniciadas.`,
      resetTitle: "¿Restablecer todo el progreso?", resetBody: "Solo se eliminará el progreso del Sustainability Hub. Esta acción no se puede deshacer.", confirmReset: "Sí, restablecer progreso",
      pendingTitle: "¿Terminaste esta actividad?", continueLater: "Continuar más tarde", storedWarning: "El almacenamiento local no está disponible; los cambios no podrán conservarse.",
      limitation: "El siguiente recurso no está disponible en el idioma preferido.", chooseAlternative: "Elige una de las alternativas antes de continuar.", available: "disponible",
      imported: "Progreso restaurado correctamente.", resetDone: "Progreso restablecido.", exported: "Copia de progreso preparada.", changed: "Progreso actualizado."
    },
    en: {
      not_started: "Not started", in_progress: "In progress", completed: "Completed", update_available: "Update available",
      markProgress: "Mark in progress", markComplete: "Mark as completed", undo: "Undo completion", applyPrevious: "Apply previous completion to this path",
      startPath: "Start path", currentPath: "Current path", makeCurrent: "Set as current path", pathProgress: "Required progress",
      requiredText: (done, total) => `${done} of ${total} required steps completed.`, preferredLanguage: "Preferred language",
      explored: "Exploration recorded", markExplored: "Mark as explored", completedPreviously: "You already completed this resource outside this path.",
      localTitle: "My progress", localIntro: "Your progress is stored only in this browser. It is not transmitted or synchronised.",
      privacy: "Other people using this browser profile may see it. Clearing browser data can remove it and private browsing may not preserve it. Export creates a backup.",
      resources: "Resources completed", startedPaths: "Paths started", completedPaths: "Paths completed", assessments: "Assessments completed", capstones: "Capstones completed",
      next: "Next recommended activity", noCurrent: "Start a path to receive a contextual recommendation.", routeComplete: "You have completed every required step in this path.",
      optional: "Optional activities available", recent: "Recently completed", none: "No activity has been recorded yet.",
      export: "Export progress", import: "Import progress", reset: "Reset progress", replace: "Replace with this backup", cancel: "Cancel",
      importTitle: "Import preview", importInvalid: "The file does not contain valid progress data.", importSummary: s => `${s.completedResources} completed resources and ${s.paths} started paths.`,
      resetTitle: "Reset all progress?", resetBody: "Only Sustainability Hub progress will be deleted. This action cannot be undone.", confirmReset: "Yes, reset progress",
      pendingTitle: "Did you finish this activity?", continueLater: "Continue later", storedWarning: "Local storage is unavailable; changes cannot be preserved.",
      limitation: "The next resource is not available in the preferred language.", chooseAlternative: "Choose one alternative before continuing.", available: "available",
      imported: "Progress restored successfully.", resetDone: "Progress reset.", exported: "Progress backup prepared.", changed: "Progress updated."
    }
  };

  const button = (text, className = "progress-action") => { const item = document.createElement("button"); item.type = "button"; item.className = className; item.textContent = text; return item; };
  const resourceTitle = (resource, lang) => resource?.title?.[lang] || resource?.id || "";

  function create(options) {
    const { service, catalogue, pathsData } = options;
    let refresh = options.onChange || (() => {});
    const announce = message => options.liveRegion && (options.liveRegion.textContent = message);
    const changed = lang => { announce(copy[lang].changed); refresh(); };

    function bindLaunch(link, resource, lang, context = {}) {
      link.addEventListener("click", () => service.startResource(resource.id, { ...context, language: context.language || lang }));
    }

    function resourceControl(resource, lang, context = {}) {
      const l = copy[lang], state = service.getState();
      const globalStatus = selectors.resourceStatus(state, resource.id);
      const pathStep = context.pathId && context.stepId ? selectors.stepRecord(state, context.pathId, context.stepId) : null;
      const wrapper = document.createElement("div");
      wrapper.className = "progress-resource-control";
      const status = document.createElement("span");
      status.className = `progress-status status-${globalStatus}`;
      status.textContent = l[globalStatus];
      wrapper.append(status);
      if (context.pathId && globalStatus === "completed" && pathStep?.status !== "completed") {
        const note = document.createElement("p"); note.textContent = l.completedPreviously;
        const apply = button(l.applyPrevious);
        apply.addEventListener("click", () => { service.creditGlobalCompletion(context.pathId, context.stepId, resource.id); changed(lang); });
        wrapper.append(note, apply);
      } else if (globalStatus === "completed") {
        const undo = button(l.undo, "progress-action progress-action-secondary");
        undo.setAttribute("aria-label", `${l.undo}: ${resourceTitle(resource, lang)}`);
        undo.addEventListener("click", () => { service.undoResource(resource.id); changed(lang); });
        wrapper.append(undo);
      } else {
        if (globalStatus === "not_started") {
          const start = button(l.markProgress, "progress-action progress-action-secondary");
          start.addEventListener("click", () => { service.startResource(resource.id, { ...context, language: lang }); service.clearPendingLaunch(); changed(lang); });
          wrapper.append(start);
        }
        const complete = button(l.markComplete);
        complete.addEventListener("click", () => { service.completeResource(resource.id, { ...context, language: lang, source: "manual" }); changed(lang); });
        wrapper.append(complete);
      }
      return wrapper;
    }

    function pathCard(path, lang) {
      const l = copy[lang], summary = selectors.pathSummary(service.getState(), path, catalogue);
      const wrapper = document.createElement("div"); wrapper.className = "path-progress-card";
      const label = document.createElement("p"); label.textContent = l.requiredText(summary.completedRequired, summary.required);
      const progress = document.createElement("progress"); progress.max = summary.required; progress.value = summary.completedRequired; progress.setAttribute("aria-label", l.pathProgress);
      const action = button(summary.started ? l.makeCurrent : l.startPath, "progress-action progress-path-action");
      if (service.getState().preferences.currentPathId === path.id) { action.textContent = l.currentPath; action.disabled = true; }
      action.addEventListener("click", () => { summary.started ? service.setCurrentPath(path.id) : service.startPath(path.id, lang); changed(lang); });
      wrapper.append(progress, label, action); return wrapper;
    }

    function pathOverview(path, lang) {
      const l = copy[lang], summary = selectors.pathSummary(service.getState(), path, catalogue);
      const wrapper = document.createElement("div"); wrapper.className = "path-progress-overview";
      const progress = document.createElement("progress"); progress.max = summary.required; progress.value = summary.completedRequired;
      progress.setAttribute("aria-label", l.pathProgress);
      const text = document.createElement("strong"); text.textContent = l.requiredText(summary.completedRequired, summary.required);
      const languageLabel = document.createElement("label"); languageLabel.textContent = l.preferredLanguage;
      const select = document.createElement("select");
      [["es", `ES · ${summary.languages.es.status}`], ["en", `EN · ${summary.languages.en.status}`]].forEach(([value, textValue]) => { const option = document.createElement("option"); option.value = value; option.textContent = textValue; select.append(option); });
      select.value = summary.preferredLanguage;
      select.addEventListener("change", () => { service.setPathLanguage(path.id, select.value); changed(lang); });
      languageLabel.append(select); wrapper.append(progress, text, languageLabel); return wrapper;
    }

    function exploreControl(path, step, lang) {
      const l = copy[lang], record = selectors.stepRecord(service.getState(), path.id, step.id);
      const control = document.createElement("div"); control.className = "path-step-progress-control";
      const stateText = document.createElement("span"); stateText.className = "progress-status"; stateText.textContent = record ? l.explored : l.not_started;
      const action = button(record ? l.explored : l.markExplored); action.disabled = Boolean(record);
      action.addEventListener("click", () => { service.visitExplore(path.id, step.id); changed(lang); });
      control.append(stateText, action); return control;
    }

    function pathStepControl(path, step, lang) {
      const l = copy[lang], record = selectors.stepRecord(service.getState(), path.id, step.id);
      const control = document.createElement("div"); control.className = "path-step-progress-control";
      const stateText = document.createElement("span"); stateText.className = `progress-status status-${record?.status || "not_started"}`; stateText.textContent = l[record?.status || "not_started"] || l.not_started;
      control.append(stateText);
      if (record?.status === "completed") {
        const undo = button(l.undo, "progress-action progress-action-secondary");
        undo.addEventListener("click", () => { service.undoPathStep(path.id, step.id); changed(lang); }); control.append(undo);
      }
      return control;
    }

    function renderDashboard(container, lang) {
      const l = copy[lang], state = service.getState(), data = selectors.dashboard(state, catalogue, pathsData);
      const title = document.createElement("h2"); title.id = "progress-title"; title.textContent = l.localTitle;
      const intro = document.createElement("p"); intro.className = "progress-intro"; intro.textContent = l.localIntro;
      const privacy = document.createElement("p"); privacy.className = "progress-privacy"; privacy.textContent = l.privacy;
      const metrics = document.createElement("div"); metrics.className = "progress-metrics";
      [[l.resources, `${data.completedResources} / ${data.totalResources}`], [l.startedPaths, data.pathsStarted], [l.completedPaths, data.pathsCompleted], [l.assessments, data.assessmentsCompleted], [l.capstones, data.capstonesCompleted]].forEach(([label, value]) => {
        const item = document.createElement("div"); item.innerHTML = `<strong>${value}</strong><span>${label}</span>`; metrics.append(item);
      });
      const pending = state.preferences.pendingLaunch;
      const pendingBox = document.createElement("div"); pendingBox.className = "progress-pending"; pendingBox.hidden = !pending;
      if (pending) {
        const resource = catalogue.resources.find(item => item.id === pending.resourceId);
        const heading = document.createElement("strong"); heading.textContent = `${l.pendingTitle} ${resourceTitle(resource, lang)}`;
        const complete = button(l.markComplete); complete.addEventListener("click", () => { service.completeResource(pending.resourceId, { pathId: pending.pathId, stepId: pending.stepId, language: pending.language || lang, source: "manual" }); changed(lang); });
        const later = button(l.continueLater, "progress-action progress-action-secondary"); later.addEventListener("click", () => { service.clearPendingLaunch(); changed(lang); });
        pendingBox.append(heading, complete, later);
      }
      const current = document.createElement("article"); current.className = "progress-current";
      const currentHeading = document.createElement("h3"); currentHeading.textContent = l.next;
      const currentCopy = document.createElement("p");
      if (!data.currentPath) currentCopy.textContent = l.noCurrent;
      else if (data.next?.complete) currentCopy.textContent = `${data.currentPath.title[lang]} · ${l.routeComplete}`;
      else {
        const nextResource = data.next?.selectedResource || data.next?.recommendedResource;
        currentCopy.textContent = `${data.currentPath.title[lang]} · ${data.next?.needsChoice && !nextResource ? l.chooseAlternative : resourceTitle(nextResource, lang)}`;
        if (data.next?.languageLimitation) { const warning = document.createElement("p"); warning.className = "progress-language-warning"; warning.textContent = l.limitation; current.append(warning); }
      }
      current.append(currentHeading, currentCopy);
      if (data.currentSummary) current.append(pathOverview(data.currentPath, lang));
      const recent = document.createElement("section"); recent.className = "progress-list"; recent.innerHTML = `<h3>${l.recent}</h3>`;
      const recentList = document.createElement("ul");
      if (!data.recent.length) recentList.innerHTML = `<li>${l.none}</li>`;
      data.recent.forEach(item => { const li = document.createElement("li"); li.textContent = resourceTitle(item.resource, lang); recentList.append(li); }); recent.append(recentList);
      const optional = document.createElement("section"); optional.className = "progress-list"; optional.innerHTML = `<h3>${l.optional}</h3>`;
      const optionalList = document.createElement("ul");
      if (!data.optionalActivities.length) optionalList.innerHTML = `<li>${l.none}</li>`;
      data.optionalActivities.slice(0, 6).forEach(item => { const li = document.createElement("li"); li.textContent = `${resourceTitle(item.resource, lang)} · ${item.path.title[lang]}`; optionalList.append(li); }); optional.append(optionalList);
      const management = document.createElement("div"); management.className = "progress-management";
      const exportButton = button(l.export); exportButton.dataset.progressAction = "export";
      exportButton.addEventListener("click", () => {
        const result = service.exportProgress(); if (!result.ok) return;
        const url = URL.createObjectURL(new Blob([result.json], { type: "application/json" }));
        const link = document.createElement("a"); link.href = url; link.download = result.filename; link.hidden = true;
        document.body.append(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 0); announce(l.exported);
      });
      const importLabel = document.createElement("label"); importLabel.className = "progress-file-label"; importLabel.textContent = l.import;
      const importInput = document.createElement("input"); importInput.type = "file"; importInput.accept = "application/json,.json"; importInput.dataset.progressImport = ""; importLabel.append(importInput);
      const resetButton = button(l.reset, "progress-action progress-danger"); resetButton.dataset.progressAction = "reset";
      management.append(exportButton, importLabel, resetButton);
      if (service.getStorageStatus() !== "available") { const warning = document.createElement("p"); warning.className = "progress-storage-warning"; warning.textContent = l.storedWarning; container.replaceChildren(title, intro, warning, privacy, metrics, pendingBox, current, recent, optional, management); }
      else container.replaceChildren(title, intro, privacy, metrics, pendingBox, current, recent, optional, management);
      wireDialogs(container, lang, importInput, resetButton);
    }

    function wireDialogs(container, lang, importInput, resetButton) {
      const l = copy[lang];
      resetButton.addEventListener("click", () => {
        const dialog = document.createElement("dialog"); dialog.className = "progress-dialog"; dialog.innerHTML = `<form method="dialog"><h2>${l.resetTitle}</h2><p>${l.resetBody}</p><div class="progress-dialog-actions"><button value="cancel">${l.cancel}</button><button class="progress-danger" value="confirm">${l.confirmReset}</button></div></form>`;
        document.body.append(dialog); dialog.addEventListener("close", () => { if (dialog.returnValue === "confirm") { service.reset(); announce(l.resetDone); refresh(); } dialog.remove(); resetButton.focus(); }); dialog.showModal();
      });
      importInput.addEventListener("change", async () => {
        const file = importInput.files?.[0]; if (!file) return; const preview = service.previewImport(await file.text());
        const dialog = document.createElement("dialog"); dialog.className = "progress-dialog";
        dialog.innerHTML = preview.ok ? `<form method="dialog"><h2>${l.importTitle}</h2><p>${l.importSummary(preview.summary)}</p><div class="progress-dialog-actions"><button value="cancel">${l.cancel}</button><button value="replace">${l.replace}</button></div></form>` : `<form method="dialog"><h2>${l.importTitle}</h2><p>${l.importInvalid}</p><button value="cancel">${l.cancel}</button></form>`;
        document.body.append(dialog); dialog.addEventListener("close", () => { if (dialog.returnValue === "replace") { service.replaceImport(preview); announce(l.imported); refresh(); } dialog.remove(); importInput.value = ""; importInput.focus(); }); dialog.showModal();
      });
    }

    return { setRefresh: value => { refresh = value; }, bindLaunch, resourceControl, pathCard, pathOverview, exploreControl, pathStepControl, renderDashboard };
  }

  return { copy, create };
});
