(function (root, factory) {
  const selectors = typeof module === "object" && module.exports ? require("./progress-selectors.js") : root.SNProgressSelectors;
  const learningPaths = typeof module === "object" && module.exports ? require("./learning-paths.js") : root.SNLearningPaths;
  const api = factory(selectors, learningPaths);
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNCompletionUI = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (selectors, learningPaths) {
  "use strict";

  const copy = {
    es: {
      completedTitle: "Ruta de aprendizaje completada", completedBody: "La secuencia obligatoria de esta revisión se ha registrado como completada.",
      view: "Ver resumen de finalización", continueOptional: "Continuar con actividades opcionales", print: "Imprimir / Guardar como PDF", returnProgress: "Volver a Mi progreso",
      history: "Rutas completadas", noHistory: "Todavía no hay rutas completadas.", revision: "Revisión completada", currentRevision: "Revisión actual", requiredSteps: "Pasos obligatorios completados",
      assessment: "Evaluación final completada — no se registra un resultado de aprobado", capstone: "Capstone práctico completado", diagnostic: "Diagnóstico opcional completado",
      current: "Actual", update_available: "Actualización disponible", historical: "Revisión histórica", contains_archived: "Contiene un recurso archivado",
      summaryTitle: "Resumen de finalización de la ruta", recordTitle: "Registro personal de finalización del aprendizaje", close: "Cerrar", language: "Idioma de la ruta", languages: "Idiomas utilizados",
      es: "ES", en: "EN", mixed: "Mixto ES/EN", unavailable: "No disponible", completionDate: "Fecha de finalización", verification: "Estado de verificación", localVerification: "Local y autogestionado",
      requiredEvidence: "Evidencia obligatoria", optionalAtCompletion: "Actividades opcionales completadas al finalizar", supplemental: "Actividades opcionales completadas posteriormente", supplementalLabel: "Completada después de la finalización inicial",
      noOptional: "Ninguna actividad opcional registrada.", outcomes: "Resultados de aprendizaje abordados", pillars: "Pilares de sostenibilidad", duration: "Duración documentada", role: "Función en la ruta", completedOn: "Completado el",
      finalAssessment: "Evaluación final", practiceCapstone: "Capstone práctico", optionalDiagnostic: "Diagnóstico opcional", required: "Obligatorio", optional: "Opcional",
      nameLabel: "Nombre opcional para el registro impreso", nameHint: "Se utiliza solo en esta vista de impresión, no se guarda ni se transmite.", nameNotice: "Nombre introducido por la persona que aprende; identidad no verificada.",
      limitation: "Generado localmente a partir del progreso autogestionado del Sustainability Hub. La identidad, la participación, el rendimiento en evaluaciones y la autenticidad del documento no han sido verificados de forma independiente. Este registro no es una cualificación acreditada ni una prueba de competencia profesional.",
      machineBackup: "La copia JSON sirve para restaurar progreso. Este registro es una representación local legible para personas; ninguno de los dos artefactos está verificado de forma independiente.",
      incompleteHistory: "Este registro procede de una versión anterior del Hub. La evidencia histórica que no estaba disponible se mantiene como no disponible.", archived: "Recurso archivado posteriormente o no disponible actualmente", generated: "Preparado para impresión local", status: "Estado", noEvidence: "Evidencia histórica no disponible."
    },
    en: {
      completedTitle: "Learning Path completed", completedBody: "The required sequence for this revision has been recorded as completed.",
      view: "View completion summary", continueOptional: "Continue with optional activities", print: "Print / Save as PDF", returnProgress: "Return to My progress",
      history: "Completed Learning Paths", noHistory: "No Learning Paths have been completed yet.", revision: "Completed revision", currentRevision: "Current revision", requiredSteps: "Required steps completed",
      assessment: "Final assessment completed — pass result not recorded", capstone: "Practice capstone completed", diagnostic: "Optional diagnostic completed",
      current: "Current", update_available: "Update available", historical: "Historical revision", contains_archived: "Contains an archived resource",
      summaryTitle: "Learning Path completion summary", recordTitle: "Personal Learning Completion Record", close: "Close", language: "Route language", languages: "Languages used",
      es: "ES", en: "EN", mixed: "Mixed ES/EN", unavailable: "Unavailable", completionDate: "Completion date", verification: "Verification state", localVerification: "Local self-managed",
      requiredEvidence: "Required evidence", optionalAtCompletion: "Optional activities completed at completion", supplemental: "Optional activities completed later", supplementalLabel: "Completed after initial path completion",
      noOptional: "No optional activity recorded.", outcomes: "Learning outcomes addressed", pillars: "Sustainability pillars", duration: "Documented duration", role: "Role in path", completedOn: "Completed on",
      finalAssessment: "Final assessment", practiceCapstone: "Practice capstone", optionalDiagnostic: "Optional diagnostic", required: "Required", optional: "Optional",
      nameLabel: "Optional name for the printed record", nameHint: "Used only in this print view; it is not stored or transmitted.", nameNotice: "Name entered by the learner; identity not verified.",
      limitation: "Generated locally from self-managed Sustainability Hub progress. Identity, participation, assessment performance and document authenticity have not been independently verified. This record is not an accredited qualification or proof of professional competence.",
      machineBackup: "The JSON backup restores machine-readable progress. This record is a human-readable local artifact; neither artifact is independently verified.",
      incompleteHistory: "This record was migrated from an earlier Hub version. Historical evidence that was not available remains unavailable.", archived: "Resource subsequently archived or currently unavailable", generated: "Prepared for local printing", status: "Status", noEvidence: "Historical evidence unavailable."
    }
  };

  const element = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
  const action = (text, className = "progress-action") => { const node = element("button", className, text); node.type = "button"; return node; };
  const formatDate = (value, lang) => value ? new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-GB", { dateStyle: "long" }).format(new Date(value)) : copy[lang].unavailable;

  function create(options) {
    const { service, catalogue, pathsData, liveRegion } = options;
    const resources = new Map(catalogue.resources.map(resource => [resource.id, resource]));
    let activeCompletionId = null;
    let refresh = options.onChange || (() => {});
    const announce = message => { if (liveRegion) liveRegion.textContent = message; };
    const titleFor = (resourceId, lang) => resources.get(resourceId)?.title?.[lang] || resourceId || copy[lang].unavailable;
    const detailFor = completionId => selectors.completionRecord(service.getState(), catalogue, pathsData, completionId);
    const relationshipText = (detail, lang) => copy[lang][detail.relationship] || copy[lang].historical;

    function handleResult(result, lang) {
      if (result?.event?.type !== "path-completed") return false;
      activeCompletionId = result.event.completionId;
      announce(`${copy[lang].completedTitle}. ${copy[lang].completedBody}`);
      return true;
    }

    function renderCompletionPanel(lang) {
      const detail = activeCompletionId ? detailFor(activeCompletionId) : null;
      if (!detail) return null;
      const l = copy[lang], panel = element("section", "completion-panel");
      panel.setAttribute("aria-labelledby", "completion-panel-title");
      const heading = element("h3", null, l.completedTitle); heading.id = "completion-panel-title"; heading.tabIndex = -1;
      panel.append(heading, element("p", null, l.completedBody));
      const actions = element("div", "completion-panel-actions");
      const view = action(l.view, "progress-action completion-primary"); view.addEventListener("click", () => openSummary(detail.record.completionId, lang));
      const optional = document.createElement("a"); optional.className = "progress-action progress-action-secondary"; optional.href = "#learning-paths"; optional.textContent = l.continueOptional;
      const print = action(l.print, "progress-action progress-action-secondary"); print.addEventListener("click", () => openSummary(detail.record.completionId, lang, true));
      const back = document.createElement("a"); back.className = "progress-action progress-action-secondary"; back.href = "#progress"; back.textContent = l.returnProgress;
      actions.append(view, optional, print, back); panel.append(actions);
      window.setTimeout(() => heading.focus(), 0);
      return panel;
    }

    function markerList(detail, lang) {
      const l = copy[lang], list = element("ul", "completion-marker-list");
      if (detail.assessmentCompleted) list.append(element("li", "completion-marker", l.assessment));
      if (detail.capstoneCompleted) list.append(element("li", "completion-marker", l.capstone));
      if (detail.diagnosticCompleted) list.append(element("li", "completion-marker", l.diagnostic));
      return list;
    }

    function renderHistory(lang) {
      const l = copy[lang], wrapper = element("section", "completion-history");
      wrapper.setAttribute("aria-labelledby", "completion-history-title");
      const heading = element("h3", null, l.history); heading.id = "completion-history-title"; wrapper.append(heading);
      const records = selectors.completionRecords(service.getState(), catalogue, pathsData);
      if (!records.length) { wrapper.append(element("p", null, l.noHistory)); return wrapper; }
      const list = element("div", "completion-history-list");
      records.forEach(detail => {
        const record = detail.record, card = element("article", "completion-history-card");
        const title = element("h4", null, detail.path?.title?.[lang] || record.pathId); card.append(title);
        const meta = element("dl", "completion-history-meta");
        const add = (term, value, timeValue = null) => { meta.append(element("dt", null, term)); const dd = element("dd"); if (timeValue) { const time = element("time", null, value); time.dateTime = timeValue; dd.append(time); } else dd.textContent = value; meta.append(dd); };
        add(l.completionDate, formatDate(record.completedAt, lang), record.completedAt);
        add(l.revision, String(record.pathRevision)); add(l.language, l[record.overallLanguage] || l.unavailable); add(l.requiredSteps, String(detail.requiredCount));
        add(l.currentRevision, detail.currentRevision ? String(detail.currentRevision) : l.unavailable); add(l.status, relationshipText(detail, lang));
        card.append(meta, markerList(detail, lang));
        const actions = element("div", "completion-history-actions");
        const view = action(l.view, "progress-action completion-primary"); view.addEventListener("click", () => openSummary(record.completionId, lang));
        const print = action(l.print, "progress-action progress-action-secondary"); print.addEventListener("click", () => openSummary(record.completionId, lang, true));
        actions.append(view, print); card.append(actions); list.append(card);
      });
      wrapper.append(list); return wrapper;
    }

    function evidenceSection(title, evidence, detail, lang, supplemental = false) {
      const l = copy[lang], section = element("section", "completion-evidence-section"), heading = element("h3", null, title); section.append(heading);
      if (!evidence.length) { section.append(element("p", null, title === l.requiredEvidence ? l.noEvidence : l.noOptional)); return section; }
      const list = element("ol", "completion-evidence-list");
      evidence.forEach(item => {
        const li = element("li", "completion-evidence-item"), top = element("div", "completion-evidence-heading");
        top.append(element("strong", null, titleFor(item.resourceId, lang)));
        if (supplemental) top.append(element("span", "completion-supplemental", l.supplementalLabel));
        li.append(top);
        const facts = element("ul", "completion-evidence-facts");
        facts.append(element("li", null, `${l.role}: ${item.requirement === "required" ? l.required : l.optional}`));
        facts.append(element("li", null, `${l.language}: ${item.language ? l[item.language] : l.unavailable}`));
        const dateItem = element("li"); dateItem.append(`${l.completedOn}: `); const time = element("time", null, formatDate(item.completedAt, lang)); if (item.completedAt) time.dateTime = item.completedAt; dateItem.append(time); facts.append(dateItem);
        if (item.finalAssessment) facts.append(element("li", "completion-marker", l.assessment));
        if (item.capstone) facts.append(element("li", "completion-marker", l.capstone));
        if (item.optionalDiagnostic) facts.append(element("li", "completion-marker", l.diagnostic));
        if (detail.unavailableResourceIds.includes(item.resourceId)) facts.append(element("li", "completion-archived", l.archived));
        li.append(facts); list.append(li);
      });
      section.append(list); return section;
    }

    function summaryContent(detail, lang) {
      const l = copy[lang], record = detail.record, path = detail.path;
      const article = element("article", "completion-record"); article.setAttribute("aria-labelledby", "completion-record-title");
      article.append(element("p", "completion-record-eyebrow", l.summaryTitle));
      const title = element("h2", null, l.recordTitle); title.id = "completion-record-title"; title.tabIndex = -1; article.append(title);
      article.append(element("h3", "completion-path-title", path?.title?.[lang] || record.pathId));
      const limitation = element("p", "completion-limitation", l.limitation); article.append(limitation);
      article.append(element("p", "completion-backup-distinction", l.machineBackup));
      if (record.historicalEvidenceIncomplete) article.append(element("p", "completion-history-warning", l.incompleteHistory));
      const name = element("div", "completion-name-field"); name.hidden = true; const label = element("label", null, l.nameLabel); label.htmlFor = "completion-print-name";
      const input = document.createElement("input"); input.id = "completion-print-name"; input.type = "text"; input.autocomplete = "off"; input.value = "";
      const printedName = element("p", "completion-print-name-value"); printedName.hidden = true;
      const hint = element("p", "completion-name-hint", l.nameHint); const notice = element("p", "completion-name-notice", l.nameNotice); notice.hidden = true;
      input.addEventListener("input", () => { const value = input.value.trim(); notice.hidden = !value; printedName.hidden = !value; printedName.textContent = value ? `${l.nameLabel}: ${value}` : ""; }); label.append(input); name.append(label, printedName, hint, notice); article.append(name);
      const metadata = element("dl", "completion-record-meta");
      const add = (term, value, dateTime = null) => { metadata.append(element("dt", null, term)); const dd = element("dd"); if (dateTime) { const time = element("time", null, value); time.dateTime = dateTime; dd.append(time); } else dd.textContent = value; metadata.append(dd); };
      add(l.completionDate, formatDate(record.completedAt, lang), record.completedAt); add(l.revision, String(record.pathRevision)); add(l.currentRevision, detail.currentRevision ? String(detail.currentRevision) : l.unavailable);
      add(l.language, l[record.overallLanguage] || l.unavailable); add(l.languages, record.languagesUsed.length ? record.languagesUsed.map(value => l[value]).join(" / ") : l.unavailable); add(l.verification, l.localVerification); add(l.status, relationshipText(detail, lang));
      if (path && record.pathRevision === detail.currentRevision) add(l.duration, learningPaths.durationText(learningPaths.durationSummary(path, catalogue), lang));
      else add(l.duration, l.unavailable);
      article.append(metadata, markerList(detail, lang));
      article.append(evidenceSection(l.requiredEvidence, record.requiredStepEvidence, detail, lang));
      article.append(evidenceSection(l.optionalAtCompletion, record.optionalStepEvidenceAtCompletion, detail, lang));
      article.append(evidenceSection(l.supplemental, record.supplementalOptionalEvidence, detail, lang, true));
      const outcomes = element("section", "completion-outcomes"), outcomesTitle = element("h3", null, l.outcomes), outcomeList = element("ul"); outcomes.append(outcomesTitle);
      if (path && record.learningOutcomeIds.length) record.learningOutcomeIds.forEach(id => { const index = path.outcomeIds.indexOf(id); if (index >= 0) outcomeList.append(element("li", null, path.outcomes[lang][index])); });
      if (!outcomeList.children.length) outcomeList.append(element("li", null, l.unavailable)); outcomes.append(outcomeList); article.append(outcomes);
      const pillars = element("section", "completion-pillars"); pillars.append(element("h3", null, l.pillars), element("p", null, path?.pillarIds?.join(" · ") || l.unavailable)); article.append(pillars);
      article.append(element("p", "completion-generated", l.generated));
      return { article, title, input, name };
    }

    function openSummary(completionId, lang, preparePrint = false) {
      const detail = detailFor(completionId); if (!detail) return;
      const l = copy[lang], dialog = element("dialog", "completion-dialog"), content = summaryContent(detail, lang), actions = element("div", "completion-dialog-actions");
      const close = action(l.close, "progress-action progress-action-secondary"); close.addEventListener("click", () => dialog.close());
      const print = action(l.print, "progress-action"); print.addEventListener("click", () => {
        if (!preparePrint) { dialog.close(); openSummary(completionId, lang, true); return; }
        dialog.classList.add("is-printing"); window.print(); window.setTimeout(() => dialog.classList.remove("is-printing"), 0);
      });
      actions.append(close, print); dialog.append(content.article, actions); document.body.append(dialog);
      dialog.addEventListener("close", () => dialog.remove(), { once: true }); dialog.showModal(); content.title.focus();
      if (preparePrint) { content.name.hidden = false; content.input.focus(); }
    }

    return { setRefresh: value => { refresh = value; }, handleResult, renderCompletionPanel, renderHistory, openSummary, getActiveCompletionId: () => activeCompletionId };
  }

  return { copy, create };
});
