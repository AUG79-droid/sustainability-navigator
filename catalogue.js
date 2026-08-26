(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNCatalogue = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const REQUIRED_FIELDS = [
    "id", "kind", "subtype", "title", "description", "learningTopic", "audienceIds",
    "launches", "duration", "difficulty", "status", "pillarIds", "provenance"
  ];
  const KINDS = ["application", "course", "quiz", "simulator", "game", "knowledge-resource"];
  const DIFFICULTIES = ["foundation", "intermediate", "advanced", "progressive"];
  const FILTER_KEYS = ["query", "kind", "pillar", "audience", "language", "difficulty", "duration"];
  const LEARNING_INTENTIONS = [
    { id: "learn", kinds: ["course"], number: "01" },
    { id: "practice", kinds: ["game", "simulator", "application"], number: "02" },
    { id: "assess", kinds: ["quiz"], number: "03" },
    { id: "explore", kinds: ["knowledge-resource"], number: "04", knowledgeTarget: "#knowledge" }
  ];

  const labels = {
    es: {
      search: "Buscar en el catálogo", searchPlaceholder: "Busca por título, tema o descripción…",
      filters: "Filtrar recursos", allTypes: "Todos los tipos", allPillars: "Todos los pilares",
      allAudiences: "Todas las audiencias", allLanguages: "Todos los idiomas", allDifficulties: "Todas las dificultades",
      allDurations: "Cualquier duración", clear: "Limpiar filtros", result: "recurso", results: "recursos", noResults: "No hay recursos que coincidan con estos filtros.",
      kind: "Tipo de recurso", topic: "Tema", audience: "Audiencia", language: "Idioma", duration: "Duración estimada",
      difficulty: "Dificultad", status: "Estado", pillars: "Pilares relacionados", available: "Disponible",
      unknown: "No documentada", minutes: "min", short: "Hasta 30 min", medium: "31–60 min", long: "Más de 60 min",
      foundation: "Inicial", intermediate: "Intermedia", advanced: "Avanzada", progressive: "Progresiva",
      application: "Aplicación", course: "Curso", quiz: "Quiz", simulator: "Simulador", game: "Juego", "knowledge-resource": "Recurso de conocimiento",
      launch_es: "Abrir en español", launch_en: "Abrir en inglés",
      general: "Público general", operations: "Operaciones", engineering: "Ingeniería", procurement: "Compras y supply chain",
      sustainability: "Sostenibilidad", managers: "Managers", innovation: "Innovación", quality: "Calidad", learning: "Learning y personas",
      "in-service": "In-Service", environment: "Medio ambiente", "flight-safety": "Seguridad de vuelo", teams: "Equipos", maintenance: "Mantenimiento",
      intentionActive: "Modo de aprendizaje", showAllResources: "Mostrar todos los recursos",
      learnEyebrow: "Aprender", learnTitle: "Cursos", learnDescription: "Construye una base sólida o profundiza con experiencias formativas estructuradas.", learnAction: "Ver cursos",
      practiceEyebrow: "Practicar", practiceTitle: "Juegos y simuladores", practiceDescription: "Aplica lo aprendido mediante decisiones, misiones y retos interactivos.", practiceAction: "Ver recursos prácticos",
      assessEyebrow: "Evaluarme", assessTitle: "Quizzes y evaluaciones", assessDescription: "Comprueba tu comprensión e identifica temas que necesitas reforzar.", assessAction: "Ver evaluaciones",
      exploreEyebrow: "Explorar conocimiento", exploreTitle: "Recursos de conocimiento", exploreDescription: "Consulta recursos de referencia o busca conceptos y evidencias en el Navigator.", exploreAction: "Ver recursos de conocimiento",
      openKnowledgeNavigator: "Abrir Knowledge Navigator"
    },
    en: {
      search: "Search the catalogue", searchPlaceholder: "Search by title, topic or description…",
      filters: "Filter resources", allTypes: "All resource types", allPillars: "All pillars",
      allAudiences: "All audiences", allLanguages: "All languages", allDifficulties: "All difficulties",
      allDurations: "Any duration", clear: "Clear filters", result: "resource", results: "resources", noResults: "No resources match these filters.",
      kind: "Resource type", topic: "Topic", audience: "Audience", language: "Language", duration: "Estimated duration",
      difficulty: "Difficulty", status: "Status", pillars: "Related pillars", available: "Available",
      unknown: "Not documented", minutes: "min", short: "Up to 30 min", medium: "31–60 min", long: "More than 60 min",
      foundation: "Foundation", intermediate: "Intermediate", advanced: "Advanced", progressive: "Progressive",
      application: "Application", course: "Course", quiz: "Quiz", simulator: "Simulator", game: "Game", "knowledge-resource": "Knowledge resource",
      launch_es: "Open in Spanish", launch_en: "Open in English",
      general: "General audience", operations: "Operations", engineering: "Engineering", procurement: "Procurement & supply chain",
      sustainability: "Sustainability", managers: "Managers", innovation: "Innovation", quality: "Quality", learning: "Learning & people",
      "in-service": "In-Service", environment: "Environment", "flight-safety": "Flight safety", teams: "Teams", maintenance: "Maintenance",
      intentionActive: "Learning mode", showAllResources: "Show all resources",
      learnEyebrow: "Learn", learnTitle: "Courses", learnDescription: "Build a strong foundation or go deeper through structured learning experiences.", learnAction: "View courses",
      practiceEyebrow: "Practice", practiceTitle: "Games & simulators", practiceDescription: "Apply learning through decisions, missions and interactive challenges.", practiceAction: "View practice resources",
      assessEyebrow: "Assess myself", assessTitle: "Quizzes & assessments", assessDescription: "Check your understanding and identify topics that need reinforcement.", assessAction: "View assessments",
      exploreEyebrow: "Explore knowledge", exploreTitle: "Knowledge resources", exploreDescription: "Consult reference resources or search concepts and evidence in the Navigator.", exploreAction: "View knowledge resources",
      openKnowledgeNavigator: "Open Knowledge Navigator"
    }
  };

  const normalise = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const languagesOf = resource => Object.keys(resource.launches || {}).filter(language => ["es", "en"].includes(language));
  const intentionById = id => LEARNING_INTENTIONS.find(intention => intention.id === id);

  function resourcesForIntention(resources, intentionId) {
    const intention = intentionById(intentionId);
    return intention ? resources.filter(resource => intention.kinds.includes(resource.kind)) : [...resources];
  }

  function intentionCounts(resources) {
    return Object.fromEntries(LEARNING_INTENTIONS.map(intention => [intention.id, resourcesForIntention(resources, intention.id).length]));
  }

  function validateResource(resource) {
    const errors = [];
    REQUIRED_FIELDS.forEach(field => {
      if (resource[field] === undefined) errors.push(`Missing ${field}`);
    });
    ["title", "description", "learningTopic"].forEach(field => {
      if (!resource[field]?.es || !resource[field]?.en) errors.push(`${field} must contain es and en`);
    });
    if (!KINDS.includes(resource.kind)) errors.push(`Unsupported kind: ${resource.kind}`);
    if (!Array.isArray(resource.audienceIds) || !resource.audienceIds.length) errors.push("audienceIds must be a non-empty array");
    if (!Array.isArray(resource.pillarIds) || !resource.pillarIds.length) errors.push("pillarIds must be a non-empty array");
    if (!Array.isArray(resource.provenance) || !resource.provenance.length) errors.push("provenance must be a non-empty array");
    const launchLanguages = languagesOf(resource);
    if (!launchLanguages.length) errors.push("launches must contain es and/or en");
    launchLanguages.forEach(language => {
      const url = resource.launches[language];
      if (typeof url !== "string" || !url.trim()) errors.push(`launches.${language} must be a URL`);
    });
    if (resource.duration !== null) {
      if (!Number.isFinite(resource.duration?.min) || resource.duration.min <= 0) errors.push("duration.min must be positive");
      if (!Number.isFinite(resource.duration?.max) || resource.duration.max < resource.duration.min) errors.push("duration.max must be at least duration.min");
      if (resource.duration?.unit !== "minutes") errors.push("duration.unit must be minutes");
    }
    if (resource.difficulty !== null && !DIFFICULTIES.includes(resource.difficulty)) errors.push(`Unsupported difficulty: ${resource.difficulty}`);
    return errors;
  }

  function validateCatalogue(catalogue) {
    const errors = [];
    if (!catalogue || !Array.isArray(catalogue.resources)) return ["Catalogue resources must be an array"];
    const ids = new Set();
    catalogue.resources.forEach((resource, index) => {
      validateResource(resource).forEach(error => errors.push(`resources[${index}] (${resource.id || "unknown"}): ${error}`));
      if (ids.has(resource.id)) errors.push(`Duplicate resource id: ${resource.id}`);
      ids.add(resource.id);
    });
    return errors;
  }

  function durationBucket(duration) {
    if (!duration) return "unknown";
    if (duration.max <= 30) return "short";
    if (duration.max <= 60) return "medium";
    return "long";
  }

  function filterResources(resources, filters = {}) {
    const selected = Object.fromEntries(FILTER_KEYS.map(key => [key, filters[key] || "all"]));
    const query = normalise(filters.query);
    return resources.filter(resource => {
      const searchable = normalise([
        resource.title.es, resource.title.en, resource.description.es, resource.description.en,
        resource.learningTopic.es, resource.learningTopic.en
      ].join(" "));
      return (!filters.intention || filters.intention === "all" || resourcesForIntention([resource], filters.intention).length === 1)
        && (!query || searchable.includes(query))
        && (selected.kind === "all" || resource.kind === selected.kind)
        && (selected.pillar === "all" || resource.pillarIds.includes(selected.pillar))
        && (selected.audience === "all" || resource.audienceIds.includes(selected.audience))
        && (selected.language === "all" || languagesOf(resource).includes(selected.language))
        && (selected.difficulty === "all" || (selected.difficulty === "unknown" ? resource.difficulty === null : resource.difficulty === selected.difficulty))
        && (selected.duration === "all" || durationBucket(resource.duration) === selected.duration);
    });
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

  function durationLabel(duration, l) {
    if (!duration) return l.unknown;
    return duration.min === duration.max ? `${duration.min} ${l.minutes}` : `${duration.min}–${duration.max} ${l.minutes}`;
  }

  function launchHref(url, uiLanguage) {
    if (/^https?:\/\//i.test(url)) return url;
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}hubLang=${uiLanguage}`;
  }

  function renderCard(resource, lang, pillarLabel) {
    const l = labels[lang];
    const card = document.createElement("article");
    card.className = "application-card";
    card.dataset.resourceId = resource.id;

    const top = document.createElement("div");
    top.className = "application-card-top";
    const kind = document.createElement("span");
    kind.className = "application-kind";
    kind.textContent = l[resource.kind] || resource.kind;
    const status = document.createElement("span");
    status.className = "application-status";
    status.textContent = l[resource.status] || resource.status;
    top.append(kind, status);

    const title = document.createElement("h3");
    title.textContent = resource.title[lang];
    const topic = document.createElement("p");
    topic.className = "application-topic";
    topic.textContent = resource.learningTopic[lang];
    const description = document.createElement("p");
    description.className = "application-description";
    description.textContent = resource.description[lang];

    const metadata = document.createElement("dl");
    metadata.className = "application-metadata";
    addDefinition(metadata, l.audience, resource.audienceIds.map(id => l[id] || id).join(" · "));
    addDefinition(metadata, l.language, languagesOf(resource).map(id => id.toUpperCase()).join(" / "));
    addDefinition(metadata, l.duration, durationLabel(resource.duration, l));
    addDefinition(metadata, l.difficulty, resource.difficulty ? (l[resource.difficulty] || resource.difficulty) : l.unknown);
    addDefinition(metadata, l.pillars, resource.pillarIds.map(id => pillarLabel(id, lang)).join(" · "));

    const launches = document.createElement("div");
    launches.className = "application-launches";
    languagesOf(resource).forEach(language => {
      const launch = document.createElement("a");
      launch.className = "application-launch";
      launch.href = launchHref(resource.launches[language], lang);
      launch.textContent = l[`launch_${language}`];
      launch.setAttribute("aria-label", `${l[`launch_${language}`]}: ${resource.title[lang]}`);
      if (/^https?:\/\//i.test(resource.launches[language])) launch.rel = "noopener";
      launches.append(launch);
    });

    card.append(top, title, topic, description, metadata, launches);
    return card;
  }

  function option(value, label) {
    const node = document.createElement("option");
    node.value = value;
    node.textContent = label;
    return node;
  }

  function selectFilter(name, accessibleLabel, values, current) {
    const label = document.createElement("label");
    label.className = "catalogue-filter";
    const caption = document.createElement("span");
    caption.textContent = accessibleLabel;
    const select = document.createElement("select");
    select.name = name;
    values.forEach(([value, text]) => select.append(option(value, text)));
    select.value = current || "all";
    label.append(caption, select);
    return label;
  }

  function syncIntentionButtons(container, activeIntention) {
    if (!container) return;
    container.querySelectorAll("[data-learning-intention]").forEach(button => {
      const active = button.dataset.learningIntention === activeIntention;
      button.setAttribute("aria-pressed", String(active));
      button.closest(".learning-intention-card")?.classList.toggle("is-active", active);
    });
  }

  function renderIntentions(catalogue, options) {
    const container = options?.container;
    const lang = options?.lang === "en" ? "en" : "es";
    if (!container) return;
    const errors = validateCatalogue(catalogue);
    if (errors.length) throw new Error(`Invalid catalogue: ${errors.join("; ")}`);
    const l = labels[lang];
    const counts = intentionCounts(catalogue.resources);
    const cards = LEARNING_INTENTIONS.map(intention => {
      const card = document.createElement("article");
      card.className = `learning-intention-card intention-${intention.id}`;
      card.dataset.intentionId = intention.id;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "learning-intention-primary";
      button.dataset.learningIntention = intention.id;
      button.setAttribute("aria-pressed", String(options.activeIntention === intention.id));

      const header = document.createElement("span");
      header.className = "learning-intention-header";
      const number = document.createElement("span");
      number.className = "learning-intention-number";
      number.textContent = intention.number;
      const eyebrow = document.createElement("span");
      eyebrow.className = "learning-intention-eyebrow";
      eyebrow.textContent = l[`${intention.id}Eyebrow`];
      header.append(number, eyebrow);

      const title = document.createElement("strong");
      title.className = "learning-intention-title";
      title.textContent = l[`${intention.id}Title`];
      const description = document.createElement("span");
      description.className = "learning-intention-description";
      description.textContent = l[`${intention.id}Description`];

      const footer = document.createElement("span");
      footer.className = "learning-intention-footer";
      const count = document.createElement("strong");
      count.textContent = `${counts[intention.id]} ${counts[intention.id] === 1 ? l.result : l.results}`;
      const action = document.createElement("span");
      action.textContent = `${l[`${intention.id}Action`]} →`;
      footer.append(count, action);
      button.setAttribute("aria-label", `${l[`${intention.id}Action`]} · ${count.textContent}`);
      button.append(header, title, description, footer);
      button.addEventListener("click", () => options.onSelect?.(intention.id));
      card.append(button);

      if (intention.knowledgeTarget) {
        const knowledgeLink = document.createElement("a");
        knowledgeLink.className = "learning-intention-knowledge-link";
        knowledgeLink.href = intention.knowledgeTarget;
        knowledgeLink.textContent = l.openKnowledgeNavigator;
        card.append(knowledgeLink);
      }
      return card;
    });
    container.replaceChildren(...cards);
    syncIntentionButtons(container, options.activeIntention || "all");
  }

  function render(catalogue, options) {
    const container = options?.container;
    const lang = options?.lang === "en" ? "en" : "es";
    if (!container) return;
    const errors = validateCatalogue(catalogue);
    if (errors.length) throw new Error(`Invalid catalogue: ${errors.join("; ")}`);
    const l = labels[lang];
    const state = {
      query: "", kind: "all", pillar: "all", audience: "all", language: "all", difficulty: "all", duration: "all",
      intention: intentionById(options?.initialIntention) ? options.initialIntention : "all"
    };
    const resources = catalogue.resources;

    const discovery = document.createElement("div");
    discovery.className = "catalogue-discovery";
    discovery.setAttribute("aria-label", l.filters);
    const searchLabel = document.createElement("label");
    searchLabel.className = "catalogue-search";
    const searchCaption = document.createElement("span");
    searchCaption.textContent = l.search;
    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.name = "query";
    searchInput.placeholder = l.searchPlaceholder;
    searchLabel.append(searchCaption, searchInput);

    const intentionContext = document.createElement("div");
    intentionContext.className = "catalogue-intention-context";
    const intentionContextLabel = document.createElement("span");
    intentionContextLabel.textContent = l.intentionActive;
    const intentionContextValue = document.createElement("strong");
    const showAll = document.createElement("button");
    showAll.type = "button";
    showAll.textContent = l.showAllResources;
    intentionContext.append(intentionContextLabel, intentionContextValue, showAll);

    const unique = key => [...new Set(resources.flatMap(resource => resource[key]))].sort();
    const filters = document.createElement("div");
    filters.className = "catalogue-filters";
    filters.append(
      selectFilter("kind", l.kind, [["all", l.allTypes], ...KINDS.map(id => [id, l[id]])], state.kind),
      selectFilter("pillar", l.pillars, [["all", l.allPillars], ...unique("pillarIds").map(id => [id, options.pillarLabel(id, lang)])], state.pillar),
      selectFilter("audience", l.audience, [["all", l.allAudiences], ...unique("audienceIds").map(id => [id, l[id] || id])], state.audience),
      selectFilter("language", l.language, [["all", l.allLanguages], ["es", "ES"], ["en", "EN"]], state.language),
      selectFilter("difficulty", l.difficulty, [["all", l.allDifficulties], ...DIFFICULTIES.map(id => [id, l[id]]), ["unknown", l.unknown]], state.difficulty),
      selectFilter("duration", l.duration, [["all", l.allDurations], ["short", l.short], ["medium", l.medium], ["long", l.long], ["unknown", l.unknown]], state.duration)
    );
    const summary = document.createElement("div");
    summary.className = "catalogue-summary";
    summary.setAttribute("aria-live", "polite");
    const count = document.createElement("strong");
    const clear = document.createElement("button");
    clear.type = "button";
    clear.textContent = l.clear;
    summary.append(count, clear);
    discovery.append(intentionContext, searchLabel, filters, summary);

    const grid = document.createElement("div");
    grid.className = "applications-grid";
    const empty = document.createElement("p");
    empty.className = "catalogue-empty";
    empty.textContent = l.noResults;

    function update() {
      const matches = filterResources(resources, state);
      count.textContent = `${matches.length} ${matches.length === 1 ? l.result : l.results}`;
      grid.replaceChildren(...matches.map(resource => renderCard(resource, lang, options.pillarLabel)));
      empty.hidden = matches.length > 0;
      const activeIntention = intentionById(state.intention);
      intentionContext.hidden = !activeIntention;
      intentionContextValue.textContent = activeIntention ? l[`${activeIntention.id}Title`] : "";
      syncIntentionButtons(options?.intentionsContainer, state.intention);
    }

    function resetFilterControls() {
      Object.assign(state, { query: "", kind: "all", pillar: "all", audience: "all", language: "all", difficulty: "all", duration: "all" });
      searchInput.value = "";
      filters.querySelectorAll("select").forEach(select => { select.value = "all"; });
    }

    function applyIntention(intentionId, applyOptions = {}) {
      state.intention = intentionById(intentionId) ? intentionId : "all";
      if (applyOptions.resetFilters !== false) resetFilterControls();
      update();
      options?.onIntentionChange?.(state.intention);
    }
    discovery.addEventListener("input", event => {
      if (!FILTER_KEYS.includes(event.target.name)) return;
      state[event.target.name] = event.target.value;
      update();
    });
    discovery.addEventListener("change", event => {
      if (!FILTER_KEYS.includes(event.target.name)) return;
      state[event.target.name] = event.target.value;
      update();
    });
    clear.addEventListener("click", () => {
      resetFilterControls();
      state.intention = "all";
      update();
      options?.onIntentionChange?.("all");
      searchInput.focus();
    });
    showAll.addEventListener("click", () => applyIntention("all", { resetFilters: false }));

    container.replaceChildren(discovery, grid, empty);
    update();
    return { applyIntention, getState: () => ({ ...state }) };
  }

  return {
    REQUIRED_FIELDS, KINDS, DIFFICULTIES, LEARNING_INTENTIONS,
    validateResource, validateCatalogue, durationBucket, filterResources, resourcesForIntention, intentionCounts,
    launchHref, syncIntentionButtons, renderIntentions, render
  };
});
