(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNLearningPaths = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const INTENTIONS = ["explore", "learn", "practice", "apply", "assess"];
  const REQUIREMENTS = ["required", "optional", "recommended-explore"];
  const STEP_KINDS = ["resource", "resource-choice", "knowledge-explore"];
  const RESOURCE_METADATA_FIELDS = ["title", "description", "learningTopic", "launches", "duration", "difficulty", "languages", "language", "provenance", "status", "subtype"];

  const labels = {
    es: {
      paths: "rutas", steps: "pasos", startingLevel: "Nivel inicial", audience: "Audiencia", pillars: "Pilares",
      languages: "Disponibilidad por idioma", duration: "Duración", outcomes: "Resultados de aprendizaje", progression: "Progresión recomendada",
      foundation: "Inicial", intermediate: "Intermedio", advanced: "Avanzado", progressive: "Progresivo",
      complete: "Completa", partial: "Parcial", unavailable: "No disponible", openPath: "Ver ruta", closePath: "Volver a las seis rutas",
      explore: "Explorar", learn: "Aprender", practice: "Practicar", apply: "Aplicar", assess: "Evaluar",
      required: "Obligatorio", optional: "Opcional", "recommended-explore": "Exploración recomendada",
      alternative: "Elige una alternativa", capstone: "Capstone práctico", assessment: "Evaluación final", diagnostic: "Diagnóstico opcional",
      knowledgeTitle: "Knowledge Navigator", knowledgeAction: "Explorar conocimiento recomendado",
      launch_es: "Abrir en español", launch_en: "Abrir en inglés", availableIn: "Disponible en", unknown: "No documentada", minutes: "min",
      total: "Total", documentedSubtotal: "Subtotal documentado", totalUnavailable: "duración total aún no disponible",
      noDocumentedDuration: "Duración total aún no disponible; ningún paso obligatorio tiene duración documentada.",
      maintenanceRequired: "Esta ruta está temporalmente afectada por mantenimiento. Tu progreso se conserva y no se sustituirá ningún recurso automáticamente.", unavailableResource: "Temporalmente no disponible; el progreso previo se conserva.",
      requiredCoverage: "pasos obligatorios disponibles", chooseOne: "Completa una de estas alternativas",
      general: "Público general", engineering: "Ingeniería", operations: "Operaciones", managers: "Managers", sustainability: "Sostenibilidad",
      procurement: "Compras y supply chain", maintenance: "Mantenimiento", innovation: "Innovación", quality: "Calidad", "in-service": "In-Service",
      "flight-safety": "Seguridad de vuelo", environment: "Medio ambiente", teams: "Equipos"
    },
    en: {
      paths: "paths", steps: "steps", startingLevel: "Starting level", audience: "Audience", pillars: "Pillars",
      languages: "Language availability", duration: "Duration", outcomes: "Learning outcomes", progression: "Recommended progression",
      foundation: "Foundation", intermediate: "Intermediate", advanced: "Advanced", progressive: "Progressive",
      complete: "Complete", partial: "Partial", unavailable: "Unavailable", openPath: "View path", closePath: "Back to all six paths",
      explore: "Explore", learn: "Learn", practice: "Practice", apply: "Apply", assess: "Assess",
      required: "Required", optional: "Optional", "recommended-explore": "Recommended Explore",
      alternative: "Choose an alternative", capstone: "Practice capstone", assessment: "Final assessment", diagnostic: "Optional diagnostic",
      knowledgeTitle: "Knowledge Navigator", knowledgeAction: "Explore recommended knowledge",
      launch_es: "Open in Spanish", launch_en: "Open in English", availableIn: "Available in", unknown: "Not documented", minutes: "min",
      total: "Total", documentedSubtotal: "Documented subtotal", totalUnavailable: "total duration not yet available",
      noDocumentedDuration: "Total duration is not yet available; no required step has a documented duration.",
      maintenanceRequired: "This path is temporarily affected by maintenance. Your progress is preserved and no resource will be substituted automatically.", unavailableResource: "Temporarily unavailable; previous progress is preserved.",
      requiredCoverage: "required steps available", chooseOne: "Complete one of these alternatives",
      general: "General audience", engineering: "Engineering", operations: "Operations", managers: "Managers", sustainability: "Sustainability",
      procurement: "Procurement & supply chain", maintenance: "Maintenance", innovation: "Innovation", quality: "Quality", "in-service": "In-Service",
      "flight-safety": "Flight safety", environment: "Environment", teams: "Teams"
    }
  };

  const resourceIdsForStep = step => step.kind === "resource-choice" ? step.resourceIds : step.kind === "resource" ? [step.resourceId] : [];
  const resourceMap = catalogue => new Map((catalogue?.resources || []).map(resource => [resource.id, resource]));
  const requiredResourceSteps = path => path.steps.filter(step => step.requirement === "required" && step.kind !== "knowledge-explore");
  const languageStatus = (available, total) => total > 0 && available === total ? "complete" : available > 0 ? "partial" : "unavailable";
  const usable = resource => resource && resource.status !== "archived" && !["hold", "temporarily-unavailable", "archived", "replaced"].includes(resource.lifecycle || "active");

  function validateLearningPaths(data, catalogue) {
    const errors = [];
    if (!data || !Array.isArray(data.paths)) return ["Learning Paths must contain a paths array"];
    const resources = resourceMap(catalogue);
    const pathIds = new Set();
    data.paths.forEach((path, pathIndex) => {
      const prefix = `paths[${pathIndex}] (${path?.id || "unknown"})`;
      if (!path?.id) errors.push(`${prefix}: missing id`);
      if (!Number.isInteger(path?.revision) || path.revision < 1) errors.push(`${prefix}: revision must be a positive integer`);
      if (pathIds.has(path?.id)) errors.push(`${prefix}: duplicate path id`);
      pathIds.add(path?.id);
      ["title", "purpose"].forEach(field => {
        if (!path?.[field]?.es || !path?.[field]?.en) errors.push(`${prefix}: ${field} must contain es and en`);
      });
      if (!Array.isArray(path.outcomeIds) || path.outcomeIds.length !== path.outcomes?.es?.length || path.outcomeIds.length !== path.outcomes?.en?.length) errors.push(`${prefix}: outcomeIds must map one-to-one to bilingual outcomes`);
      else if (new Set(path.outcomeIds).size !== path.outcomeIds.length || path.outcomeIds.some(id => typeof id !== "string" || !id)) errors.push(`${prefix}: outcomeIds must be unique non-empty strings`);
      if (!Array.isArray(path?.outcomes?.es) || !path.outcomes.es.length || !Array.isArray(path?.outcomes?.en) || !path.outcomes.en.length) {
        errors.push(`${prefix}: outcomes must contain non-empty es and en arrays`);
      }
      if (!Array.isArray(path?.audienceIds) || !path.audienceIds.length) errors.push(`${prefix}: audienceIds must be non-empty`);
      if (!Array.isArray(path?.pillarIds) || !path.pillarIds.length) errors.push(`${prefix}: pillarIds must be non-empty`);
      if (!Array.isArray(path?.steps) || !path.steps.length) {
        errors.push(`${prefix}: steps must be non-empty`);
        return;
      }
      const stepIds = new Set();
      path.steps.forEach((step, stepIndex) => {
        const stepPrefix = `${prefix}.steps[${stepIndex}]`;
        if (!step.id || stepIds.has(step.id)) errors.push(`${stepPrefix}: missing or duplicate step id`);
        stepIds.add(step.id);
        if (!STEP_KINDS.includes(step.kind)) errors.push(`${stepPrefix}: unsupported kind ${step.kind}`);
        if (!INTENTIONS.includes(step.intention)) errors.push(`${stepPrefix}: unsupported intention ${step.intention}`);
        if (!REQUIREMENTS.includes(step.requirement)) errors.push(`${stepPrefix}: unsupported requirement ${step.requirement}`);
        RESOURCE_METADATA_FIELDS.forEach(field => {
          if (Object.prototype.hasOwnProperty.call(step, field)) errors.push(`${stepPrefix}: duplicates resource metadata field ${field}`);
        });
        if (!step.rationale?.es || !step.rationale?.en) errors.push(`${stepPrefix}: rationale must contain es and en`);
        if (step.kind === "knowledge-explore") {
          if (step.requirement !== "recommended-explore") errors.push(`${stepPrefix}: Knowledge Navigator must be recommended-explore`);
          if (!Array.isArray(step.pillarIds) || !step.pillarIds.length) errors.push(`${stepPrefix}: knowledge exploration needs pillarIds`);
          if (resourceIdsForStep(step).length) errors.push(`${stepPrefix}: knowledge exploration cannot reference catalogue resources`);
        } else {
          const ids = resourceIdsForStep(step);
          if (step.kind === "resource-choice" && (!step.choiceGroupId || ids.length < 2)) errors.push(`${stepPrefix}: choice steps need a choiceGroupId and at least two resources`);
          if (step.kind === "resource" && ids.length !== 1) errors.push(`${stepPrefix}: resource steps need one resourceId`);
          ids.forEach(id => { if (!resources.has(id)) errors.push(`${stepPrefix}: unknown resourceId ${id}`); });
        }
        if (step.finalAssessment) {
          if (step.intention !== "assess") errors.push(`${stepPrefix}: final assessment must use assess intention`);
          resourceIdsForStep(step).forEach(id => { if (resources.get(id)?.kind !== "quiz") errors.push(`${stepPrefix}: final assessment must reference a quiz`); });
        }
        if (step.capstone && step.finalAssessment) errors.push(`${stepPrefix}: a practice capstone cannot be a formal assessment`);
      });
    });
    return errors;
  }

  function languageAvailability(path, catalogue, language) {
    const resources = resourceMap(catalogue);
    const required = requiredResourceSteps(path);
    const available = required.filter(step => resourceIdsForStep(step).some(id => usable(resources.get(id)) && Boolean(resources.get(id)?.launches?.[language]))).length;
    return { language, status: languageStatus(available, required.length), availableRequired: available, totalRequired: required.length };
  }

  function languageAvailabilityForPath(path, catalogue) {
    return { es: languageAvailability(path, catalogue, "es"), en: languageAvailability(path, catalogue, "en") };
  }

  function pathMaintenance(path, catalogue) {
    const resources = resourceMap(catalogue);
    const unavailableResourceIds = requiredResourceSteps(path).flatMap(step => {
      const ids = resourceIdsForStep(step);
      const unavailable = ids.filter(id => !usable(resources.get(id)));
      return unavailable.length === ids.length ? unavailable : [];
    });
    return { required: unavailableResourceIds.length > 0, unavailableResourceIds: [...new Set(unavailableResourceIds)] };
  }

  function durationSummary(path, catalogue) {
    const resources = resourceMap(catalogue);
    const required = requiredResourceSteps(path);
    let min = 0;
    let max = 0;
    let knownRequired = 0;
    let unknownRequired = 0;
    required.forEach(step => {
      const durations = resourceIdsForStep(step).map(id => resources.get(id)?.duration || null);
      if (durations.length && durations.every(Boolean)) {
        min += step.kind === "resource-choice" ? Math.min(...durations.map(item => item.min)) : durations[0].min;
        max += step.kind === "resource-choice" ? Math.max(...durations.map(item => item.max)) : durations[0].max;
        knownRequired += 1;
      } else unknownRequired += 1;
    });
    return { complete: required.length > 0 && unknownRequired === 0, min, max, knownRequired, unknownRequired, totalRequired: required.length };
  }

  function durationText(summary, lang) {
    const l = labels[lang];
    const amount = summary.min === summary.max ? `${summary.min} ${l.minutes}` : `${summary.min}–${summary.max} ${l.minutes}`;
    if (summary.complete) return `${l.total}: ${amount}`;
    if (summary.knownRequired) return `${l.documentedSubtotal}: ${amount} · ${l.totalUnavailable}`;
    return l.noDocumentedDuration;
  }

  function addDefinition(list, term, value) {
    const wrapper = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = value;
    wrapper.append(dt, dd);
    list.append(wrapper);
  }

  function statusBadge(language, result, l) {
    const badge = document.createElement("span");
    badge.className = `path-language-status status-${result.status}`;
    badge.dataset.language = language;
    badge.dataset.status = result.status;
    badge.textContent = `${language.toUpperCase()} · ${l[result.status]}`;
    badge.title = `${result.availableRequired}/${result.totalRequired} ${l.requiredCoverage}`;
    return badge;
  }

  function durationLabel(duration, l) {
    if (!duration) return l.unknown;
    return duration.min === duration.max ? `${duration.min} ${l.minutes}` : `${duration.min}–${duration.max} ${l.minutes}`;
  }

  function launchLinks(resource, lang, catalogueApi, progressUi, context) {
    const l = labels[lang];
    const wrapper = document.createElement("div");
    wrapper.className = "path-resource-launches";
    if (!usable(resource)) {
      wrapper.classList.add("is-unavailable");
      const notice = document.createElement("p"); notice.className = "path-resource-unavailable"; notice.setAttribute("role", "status"); notice.textContent = l.unavailableResource; wrapper.append(notice);
      return wrapper;
    }
    Object.keys(resource.launches).filter(language => ["es", "en"].includes(language)).forEach(language => {
      const link = document.createElement("a");
      link.className = "path-resource-launch";
      link.href = catalogueApi.launchHref(resource.launches[language], lang);
      link.textContent = l[`launch_${language}`];
      link.setAttribute("aria-label", `${l[`launch_${language}`]}: ${resource.title[lang]}`);
      if (/^https?:\/\//i.test(resource.launches[language])) link.rel = "noopener";
      progressUi?.bindLaunch(link, resource, language, context);
      wrapper.append(link);
    });
    return wrapper;
  }

  function renderResource(resource, lang, catalogueApi, progressUi, context) {
    const l = labels[lang];
    const wrapper = document.createElement("div");
    wrapper.className = "path-resource-option";
    wrapper.dataset.resourceId = resource.id;
    const heading = document.createElement("h4");
    heading.textContent = resource.title[lang];
    const topic = document.createElement("p");
    topic.className = "path-resource-topic";
    topic.textContent = resource.learningTopic[lang];
    const metadata = document.createElement("p");
    metadata.className = "path-resource-meta";
    metadata.textContent = `${l.availableIn}: ${Object.keys(resource.launches).map(item => item.toUpperCase()).join(" / ")} · ${l.duration}: ${durationLabel(resource.duration, l)}`;
    wrapper.append(heading, topic, metadata, launchLinks(resource, lang, catalogueApi, progressUi, context));
    if (progressUi) wrapper.append(progressUi.resourceControl(resource, lang, context));
    return wrapper;
  }

  function renderStep(step, index, resources, lang, options) {
    const l = labels[lang];
    const item = document.createElement("li");
    item.className = `learning-path-step intention-${step.intention}`;
    item.dataset.stepId = step.id;
    item.dataset.requirement = step.requirement;

    const rail = document.createElement("div");
    rail.className = "path-step-rail";
    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    rail.append(number);

    const body = document.createElement("div");
    body.className = "path-step-body";
    const badges = document.createElement("div");
    badges.className = "path-step-badges";
    const intention = document.createElement("span");
    intention.className = "path-intention-badge";
    intention.textContent = l[step.intention];
    const requirement = document.createElement("span");
    requirement.className = `path-requirement-badge requirement-${step.requirement}`;
    requirement.textContent = l[step.requirement];
    badges.append(intention, requirement);
    if (step.kind === "resource-choice") {
      const alternative = document.createElement("span");
      alternative.className = "path-role-badge";
      alternative.textContent = l.alternative;
      badges.append(alternative);
    }
    if (step.capstone) {
      const capstone = document.createElement("span");
      capstone.className = "path-role-badge role-capstone";
      capstone.textContent = l.capstone;
      badges.append(capstone);
    }
    if (step.finalAssessment) {
      const assessment = document.createElement("span");
      assessment.className = "path-role-badge role-assessment";
      assessment.textContent = l.assessment;
      badges.append(assessment);
    } else if (step.intention === "assess" && step.requirement === "optional") {
      const diagnostic = document.createElement("span");
      diagnostic.className = "path-role-badge";
      diagnostic.textContent = l.diagnostic;
      badges.append(diagnostic);
    }

    const rationale = document.createElement("p");
    rationale.className = "path-step-rationale";
    rationale.textContent = step.rationale[lang];
    body.append(badges);
    if (options.progressUi) body.append(options.progressUi.pathStepControl(options.path, step, lang));

    if (step.kind === "knowledge-explore") {
      const heading = document.createElement("h3");
      heading.textContent = l.knowledgeTitle;
      const pillars = document.createElement("p");
      pillars.className = "path-resource-meta";
      pillars.textContent = step.pillarIds.map(id => options.pillarLabel(id, lang)).join(" · ");
      const link = document.createElement("a");
      link.className = "path-resource-launch path-knowledge-launch";
      link.href = "#knowledge";
      link.textContent = l.knowledgeAction;
      body.append(heading, rationale, pillars, link);
      if (options.progressUi) body.append(options.progressUi.exploreControl(options.path, step, lang));
    } else {
      if (step.kind === "resource-choice") {
        const choiceHint = document.createElement("p");
        choiceHint.className = "path-choice-hint";
        choiceHint.textContent = l.chooseOne;
        body.append(choiceHint);
      }
      body.append(rationale);
      const resourceOptions = document.createElement("div");
      resourceOptions.className = step.kind === "resource-choice" ? "path-resource-options is-choice" : "path-resource-options";
      resourceIdsForStep(step).forEach(id => resourceOptions.append(renderResource(resources.get(id), lang, options.catalogueApi, options.progressUi, {
        pathId: options.path.id, stepId: step.id
      })));
      body.append(resourceOptions);
    }
    item.append(rail, body);
    return item;
  }

  function renderPathDetail(path, catalogue, lang, options) {
    const l = labels[lang];
    const resources = resourceMap(catalogue);
    const detail = options.detailContainer;
    const availability = languageAvailabilityForPath(path, catalogue);
    const summary = durationSummary(path, catalogue);
    const header = document.createElement("div");
    header.className = "learning-path-detail-header";
    const headerCopy = document.createElement("div");
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = l.progression;
    const title = document.createElement("h2");
    title.id = "active-learning-path-title";
    title.tabIndex = -1;
    title.textContent = path.title[lang];
    const purpose = document.createElement("p");
    purpose.textContent = path.purpose[lang];
    headerCopy.append(eyebrow, title, purpose);
    const close = document.createElement("button");
    close.type = "button";
    close.className = "path-close-button";
    close.textContent = `← ${l.closePath}`;
    close.addEventListener("click", () => options.onClose());
    header.append(headerCopy, close);

    const overview = document.createElement("div");
    overview.className = "learning-path-overview";
    const languages = document.createElement("div");
    languages.className = "path-language-list";
    languages.append(statusBadge("es", availability.es, l), statusBadge("en", availability.en, l));
    const duration = document.createElement("p");
    duration.className = "path-duration-summary";
    duration.textContent = durationText(summary, lang);
    const outcomes = document.createElement("div");
    outcomes.className = "path-outcomes";
    const outcomesTitle = document.createElement("h3");
    outcomesTitle.textContent = l.outcomes;
    const outcomesList = document.createElement("ul");
    path.outcomes[lang].forEach(value => {
      const item = document.createElement("li");
      item.textContent = value;
      outcomesList.append(item);
    });
    outcomes.append(outcomesTitle, outcomesList);
    overview.append(languages, duration, outcomes);
    const maintenance = pathMaintenance(path, catalogue);
    if (maintenance.required) { const warning = document.createElement("p"); warning.className = "path-maintenance-warning"; warning.textContent = l.maintenanceRequired; overview.append(warning); }
    if (options.progressUi) overview.append(options.progressUi.pathOverview(path, lang));

    const progressionTitle = document.createElement("h3");
    progressionTitle.className = "path-progression-title";
    progressionTitle.textContent = l.progression;
    const progression = document.createElement("ol");
    progression.className = "learning-path-progression";
    path.steps.forEach((step, index) => progression.append(renderStep(step, index, resources, lang, { ...options, path })));
    detail.replaceChildren(header, overview, progressionTitle, progression);
    detail.hidden = false;
    return title;
  }

  function renderCard(path, catalogue, lang, options, onOpen) {
    const l = labels[lang];
    const card = document.createElement("article");
    card.className = "learning-path-card";
    card.dataset.pathId = path.id;
    const availability = languageAvailabilityForPath(path, catalogue);
    const heading = document.createElement("h3");
    heading.textContent = path.title[lang];
    const purpose = document.createElement("p");
    purpose.className = "learning-path-purpose";
    purpose.textContent = path.purpose[lang];
    const languageList = document.createElement("div");
    languageList.className = "path-language-list";
    languageList.setAttribute("aria-label", l.languages);
    languageList.append(statusBadge("es", availability.es, l), statusBadge("en", availability.en, l));
    const metadata = document.createElement("dl");
    metadata.className = "learning-path-metadata";
    addDefinition(metadata, l.startingLevel, l[path.startingLevel] || path.startingLevel);
    addDefinition(metadata, l.audience, path.audienceIds.map(id => l[id] || id).join(" · "));
    addDefinition(metadata, l.pillars, path.pillarIds.map(id => options.pillarLabel(id, lang)).join(" · "));
    addDefinition(metadata, l.steps, String(path.steps.length));
    addDefinition(metadata, l.duration, durationText(durationSummary(path, catalogue), lang));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "learning-path-open";
    button.textContent = `${l.openPath} →`;
    button.setAttribute("aria-controls", options.detailContainer.id);
    button.setAttribute("aria-expanded", String(options.selectedPathId === path.id));
    button.addEventListener("click", () => onOpen(path.id));
    card.append(languageList, heading, purpose, metadata, button);
    const maintenance = pathMaintenance(path, catalogue);
    if (maintenance.required) { const warning = document.createElement("p"); warning.className = "path-maintenance-warning"; warning.textContent = l.maintenanceRequired; card.insertBefore(warning, button); }
    if (options.progressUi) card.append(options.progressUi.pathCard(path, lang));
    return card;
  }

  function render(data, catalogue, options) {
    const container = options?.container;
    const detailContainer = options?.detailContainer;
    const lang = options?.lang === "en" ? "en" : "es";
    if (!container || !detailContainer) return null;
    const errors = validateLearningPaths(data, catalogue);
    if (errors.length) throw new Error(`Invalid Learning Paths: ${errors.join("; ")}`);
    let selectedPathId = data.paths.some(path => path.id === options.selectedPathId) ? options.selectedPathId : null;

    const syncExpanded = () => container.querySelectorAll(".learning-path-open").forEach(button => {
      button.setAttribute("aria-expanded", String(button.closest(".learning-path-card")?.dataset.pathId === selectedPathId));
    });
    const close = () => {
      selectedPathId = null;
      detailContainer.hidden = true;
      detailContainer.replaceChildren();
      syncExpanded();
      options.onSelect?.(null);
      container.querySelector(".learning-path-open")?.focus();
    };
    const open = (pathId, focus = true) => {
      const path = data.paths.find(item => item.id === pathId);
      if (!path) return;
      selectedPathId = pathId;
      const title = renderPathDetail(path, catalogue, lang, {
        detailContainer, catalogueApi: options.catalogueApi, pillarLabel: options.pillarLabel, progressUi: options.progressUi, onClose: close
      });
      syncExpanded();
      options.onSelect?.(pathId);
      if (focus) {
        detailContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => title.focus(), 250);
      }
    };

    const cards = data.paths.map(path => renderCard(path, catalogue, lang, {
      pillarLabel: options.pillarLabel,
      detailContainer,
      selectedPathId,
      progressUi: options.progressUi
    }, open));
    container.replaceChildren(...cards);
    if (selectedPathId) open(selectedPathId, false);
    else {
      detailContainer.hidden = true;
      detailContainer.replaceChildren();
    }
    return { open, close, getSelectedPathId: () => selectedPathId };
  }

  return {
    INTENTIONS, REQUIREMENTS, STEP_KINDS, RESOURCE_METADATA_FIELDS,
    resourceIdsForStep, requiredResourceSteps, validateLearningPaths,
    languageAvailability, languageAvailabilityForPath, pathMaintenance, durationSummary, durationText, render
  };
});
