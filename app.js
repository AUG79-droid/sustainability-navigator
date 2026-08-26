(() => {
  "use strict";

  const data = window.SN_DATA;
  const search = window.SNSearch;
  const PAGE_SIZE = 12;
  const state = {
    lang: "es", query: "", pillar: "all", type: "all", audience: "all", sort: "relevance", visible: PAGE_SIZE,
    catalogueIntent: "all", learningPathId: null
  };

  const ui = {
    es: {
      prototype: "Hub de aprendizaje", eyebrow: "Explorar · Aprender · Practicar · Evaluar",
      heroLead: "Busca conocimiento o elige una experiencia de aprendizaje para avanzar en sostenibilidad aeronáutica.",
      searchLabel: "Buscar en el Navigator", searchButton: "Buscar", tryLabel: "Prueba:",
      sixPillars: "Seis perspectivas, una visión de sistema", entries: "fichas", sources: "fuentes", learningResources: "recursos", bilingual: "bilingüe",
      architecture: "Arquitectura", explorePillars: "Explora los seis pilares", showAll: "Ver todo", filters: "Filtros", clear: "Limpiar",
      contentType: "Tipo de contenido", all: "Todo", glossary: "Glosario", audience: "Audiencia",
      governanceTitle: "Gobernanza del contenido", governanceBody: "Cada ficha muestra fuente, fecha y responsable propuesto. El contenido sigue en validación funcional.",
      knowledgeBase: "Base de conocimiento", results: "resultados", sort: "Ordenar", relevance: "Relevancia", byPillar: "Por pilar",
      noResults: "No hay coincidencias", noResultsBody: "Prueba uno de estos conceptos relacionados o elimina algún filtro.",
      internalContext: "Contexto interno", internalTitle: "¿La pregunta afecta a un centro, producto, proceso o política interna?",
      internalBody: "Usa la ficha como orientación inicial y confirma la respuesta con la referencia corporativa aprobada y el responsable funcional correspondiente.",
      ruleOne: "Define el alcance", ruleTwo: "Comprueba la evidencia", ruleThree: "Documenta límites y decisión",
      signature: "Del conocimiento a mejores decisiones", disclaimer: "Prototipo educativo. No constituye una publicación corporativa oficial ni sustituye procedimientos, normas o validaciones internas.",
      traceability: "Trazabilidad y fuentes", owner: "Responsable propuesto", lastReview: "Revisión editorial", source: "Fuente primaria",
      faq: "FAQ", glossaryLabel: "Glosario", allAudiences: "Todas las audiencias", draft: "Borrador · validar",
      activeSearch: "Búsqueda", activePillar: "Pilar", activeAudience: "Audiencia", activeType: "Tipo",
      audience_all: "General", audience_operations: "Operaciones", audience_engineering: "Ingeniería", audience_digital: "Digital e innovación",
      audience_learning: "Learning y personas", audience_procurement: "Compras y supply chain", audience_managers: "Managers", audience_sustainability: "Sostenibilidad",
      openLearning: "Abrir ficha completa", closeLearning: "Cerrar ficha completa", whyItMatters: "Por qué importa",
      aviationApplication: "Aplicación aeronáutica", howToUse: "Cómo utilizar esta ficha", appliedExample: "Ejemplo aplicado",
      decisionChecks: "Preguntas para decidir", limits: "Límites y precauciones", loadMore: "Mostrar más",
      showing: "Mostrando", of: "de", copySearch: "Copiar búsqueda", copied: "Enlace copiado",
      relatedMatch: "Coincidencia por contenido y términos relacionados", meaningfulTerms: "términos relevantes", suggestions: "Quizá buscabas",
      searchReady: "La búsqueda reconoce sinónimos, plurales, tildes y términos en español o inglés.",
      skipToKnowledge: "Saltar al conocimiento", primaryNavigation: "Navegación principal", languageLabel: "Idioma",
      navHome: "Inicio", navKnowledge: "Conocimiento", navApplications: "Catálogo", navCourses: "Cursos",
      navPaths: "Rutas de aprendizaje", navAbout: "Acerca de", learningStart: "Empieza aquí",
      learningIntentionsTitle: "¿Cómo quieres aprender hoy?",
      learningIntentionsIntro: "Elige una intención para ver una selección del catálogo o utiliza los filtros avanzados para explorar los 22 recursos.",
      learningPathsEyebrow: "Progresiones guiadas", learningPathsTitle: "Rutas de aprendizaje",
      learningPathsIntro: "Compara seis progresiones construidas exclusivamente con los recursos existentes y abre la secuencia que mejor encaje con tu objetivo.",
      interactiveLearning: "Catálogo completo", applicationsTitle: "Todos los recursos de aprendizaje",
      applicationsIntro: "Combina la vista por intención con filtros de tipo, pilar, audiencia, idioma, dificultad y duración.",
      knowledgeExplorer: "Explorar conocimiento", knowledgeTitle: "Knowledge Navigator",
      knowledgeIntro: "Busca conceptos, preguntas frecuentes y referencias conectadas con los mismos seis pilares del catálogo de aprendizaje."
    },
    en: {
      prototype: "Learning Hub", eyebrow: "Explore · Learn · Practice · Assess",
      heroLead: "Search knowledge or choose a learning experience to advance your understanding of sustainability in aviation.",
      searchLabel: "Search the Navigator", searchButton: "Search", tryLabel: "Try:",
      sixPillars: "Six perspectives, one systems view", entries: "entries", sources: "sources", learningResources: "resources", bilingual: "bilingual",
      architecture: "Architecture", explorePillars: "Explore the six pillars", showAll: "Show all", filters: "Filters", clear: "Clear",
      contentType: "Content type", all: "All", glossary: "Glossary", audience: "Audience",
      governanceTitle: "Content governance", governanceBody: "Every entry shows a source, date and proposed owner. Content is pending functional validation.",
      knowledgeBase: "Knowledge base", results: "results", sort: "Sort", relevance: "Relevance", byPillar: "By pillar",
      noResults: "No matches found", noResultsBody: "Try one of these related concepts or remove a filter.",
      internalContext: "Internal context", internalTitle: "Does the question concern a site, product, process or internal policy?",
      internalBody: "Use the entry as initial orientation, then confirm the answer against an approved corporate reference and the relevant functional owner.",
      ruleOne: "Define the scope", ruleTwo: "Check the evidence", ruleThree: "Document limits and decision",
      signature: "From knowledge to better decisions", disclaimer: "Educational prototype. It is not an official corporate publication and does not replace internal procedures, standards or validation.",
      traceability: "Traceability and sources", owner: "Proposed owner", lastReview: "Editorial review", source: "Primary source",
      faq: "FAQ", glossaryLabel: "Glossary", allAudiences: "All audiences", draft: "Draft · validate",
      activeSearch: "Search", activePillar: "Pillar", activeAudience: "Audience", activeType: "Type",
      audience_all: "General", audience_operations: "Operations", audience_engineering: "Engineering", audience_digital: "Digital & innovation",
      audience_learning: "Learning & people", audience_procurement: "Procurement & supply chain", audience_managers: "Managers", audience_sustainability: "Sustainability",
      openLearning: "Open full learning entry", closeLearning: "Close full learning entry", whyItMatters: "Why it matters",
      aviationApplication: "Aviation application", howToUse: "How to use this entry", appliedExample: "Applied example",
      decisionChecks: "Decision checks", limits: "Limitations and precautions", loadMore: "Show more",
      showing: "Showing", of: "of", copySearch: "Copy search", copied: "Link copied",
      relatedMatch: "Matched through content and related terms", meaningfulTerms: "meaningful terms", suggestions: "You may be looking for",
      searchReady: "Search recognises synonyms, plurals, accents and terms in English or Spanish.",
      skipToKnowledge: "Skip to knowledge", primaryNavigation: "Primary navigation", languageLabel: "Language",
      navHome: "Home", navKnowledge: "Knowledge", navApplications: "Catalogue", navCourses: "Courses",
      navPaths: "Learning Paths", navAbout: "About", learningStart: "Start here",
      learningIntentionsTitle: "How do you want to learn today?",
      learningIntentionsIntro: "Choose an intention to see a catalogue selection, or use advanced filters to explore all 22 resources.",
      learningPathsEyebrow: "Guided progressions", learningPathsTitle: "Learning Paths",
      learningPathsIntro: "Compare six progressions built exclusively from existing resources and open the sequence that best fits your goal.",
      interactiveLearning: "Complete catalogue", applicationsTitle: "All learning resources",
      applicationsIntro: "Combine the intention view with filters for type, pillar, audience, language, difficulty and duration.",
      knowledgeExplorer: "Explore knowledge", knowledgeTitle: "Knowledge Navigator",
      knowledgeIntro: "Search concepts, frequently asked questions and references connected to the same six pillars as the learning catalogue."
    }
  };

  const el = {
    form: document.querySelector("#search-form"), input: document.querySelector("#search-input"), searchAssist: document.querySelector("#search-assist"),
    suggestionsList: document.querySelector("#search-suggestions-list"), pillarGrid: document.querySelector("#pillar-grid"),
    results: document.querySelector("#results"), empty: document.querySelector("#empty-state"), emptySuggestions: document.querySelector("#empty-suggestions"),
    resultCount: document.querySelector("#result-count"), resultStatus: document.querySelector("#result-status"),
    audience: document.querySelector("#audience-filter"), sort: document.querySelector("#sort-select"), clear: document.querySelector("#clear-filters"),
    showAll: document.querySelector("#show-all-pillars"), activeFilters: document.querySelector("#active-filters"), template: document.querySelector("#result-template"),
    pagination: document.querySelector("#pagination"), loadMore: document.querySelector("#load-more"), loadMoreStatus: document.querySelector("#load-more-status"),
    copySearch: document.querySelector("#copy-search"), applications: document.querySelector("#applications-grid"),
    learningIntentions: document.querySelector("#learning-intentions"), learningPaths: document.querySelector("#learning-paths-grid"),
    learningPathDetail: document.querySelector("#learning-path-detail")
  };

  const t = key => ui[state.lang][key] || key;
  const pillarById = id => data.pillars.find(pillar => pillar.id === id);
  const audienceLabel = (id, lang = state.lang) => ui[lang][`audience_${id}`] || id;
  const entryContext = entry => ({
    pillar: pillarById(entry.pillar),
    sources: entry.sourceIds.map(id => data.sources[id]).filter(Boolean),
    audiences: entry.audiences.flatMap(id => [audienceLabel(id, "es"), audienceLabel(id, "en")])
  });

  function readUrlState() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    const pillar = params.get("pillar");
    const type = params.get("type");
    const audience = params.get("audience");
    const sort = params.get("sort");
    if (["es", "en"].includes(lang)) state.lang = lang;
    state.query = params.get("q") || "";
    if (["all", ...data.pillars.map(item => item.id)].includes(pillar)) state.pillar = pillar;
    if (["all", "faq", "glossary"].includes(type)) state.type = type;
    if (["all", ...new Set(data.entries.flatMap(entry => entry.audiences))].includes(audience)) state.audience = audience;
    if (["relevance", "pillar", "az"].includes(sort)) state.sort = sort;
  }

  function syncUrl() {
    if (window.location.protocol === "file:") return;
    const params = new URLSearchParams();
    if (state.query) params.set("q", state.query);
    if (state.pillar !== "all") params.set("pillar", state.pillar);
    if (state.type !== "all") params.set("type", state.type);
    if (state.audience !== "all") params.set("audience", state.audience);
    if (state.sort !== "relevance") params.set("sort", state.sort);
    if (state.lang !== "es") params.set("lang", state.lang);
    const query = params.toString();
    history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  }

  function translateStaticUi() {
    document.documentElement.lang = state.lang;
    document.title = state.lang === "es"
      ? "Sustainability Navigator · Conocimiento para decisiones aeronáuticas"
      : "Sustainability Navigator · Knowledge for aviation decisions";
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = ui[state.lang][node.dataset.i18n];
      if (value) node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(node => {
      const value = ui[state.lang][node.dataset.i18nAriaLabel];
      if (value) node.setAttribute("aria-label", value);
    });
    el.input.placeholder = el.input.dataset[`placeholder${state.lang === "es" ? "Es" : "En"}`];
    document.querySelectorAll(".lang-button").forEach(button => {
      const active = button.dataset.lang === state.lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".quick-searches button").forEach(button => {
      button.textContent = button.dataset[`label${state.lang === "es" ? "Es" : "En"}`];
    });
    buildAudienceOptions();
    buildSuggestionsList();
  }

  function buildAudienceOptions() {
    const audiences = ["all", ...new Set(data.entries.flatMap(entry => entry.audiences))];
    el.audience.replaceChildren();
    audiences.forEach(id => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = id === "all" ? t("allAudiences") : audienceLabel(id);
      el.audience.append(option);
    });
    el.audience.value = state.audience;
  }

  function buildSuggestionsList() {
    el.suggestionsList.replaceChildren();
    data.entries.forEach(entry => {
      const option = document.createElement("option");
      option.value = entry.title[state.lang];
      el.suggestionsList.append(option);
    });
  }

  function filteredBase(overrides = {}) {
    const filters = { pillar: state.pillar, type: state.type, audience: state.audience, query: state.query, ...overrides };
    return data.entries.filter(entry => {
      if (filters.pillar !== "all" && entry.pillar !== filters.pillar) return false;
      if (filters.type !== "all" && entry.type !== filters.type) return false;
      if (filters.audience !== "all" && !entry.audiences.includes(filters.audience)) return false;
      return true;
    });
  }

  function rankedEntries(overrides = {}) {
    const query = Object.prototype.hasOwnProperty.call(overrides, "query") ? overrides.query : state.query;
    const base = filteredBase(overrides);
    let ranked = search.rankEntries(base, query, entryContext);
    ranked.sort((a, b) => {
      if (state.sort === "pillar") return a.entry.pillar.localeCompare(b.entry.pillar) || a.entry.title[state.lang].localeCompare(b.entry.title[state.lang], state.lang);
      if (state.sort === "az") return a.entry.title[state.lang].localeCompare(b.entry.title[state.lang], state.lang);
      return b.score - a.score || a.entry.pillar.localeCompare(b.entry.pillar);
    });
    return ranked;
  }

  function resetVisible() {
    state.visible = PAGE_SIZE;
  }

  function buildPillars() {
    el.pillarGrid.replaceChildren();
    data.pillars.forEach(pillar => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pillar-card";
      button.dataset.pillar = pillar.id;
      button.style.setProperty("--pillar", pillar.color);
      button.classList.toggle("is-active", state.pillar === pillar.id);
      button.setAttribute("aria-pressed", String(state.pillar === pillar.id));
      const count = rankedEntries({ pillar: pillar.id }).length;
      button.innerHTML = `<span class="pillar-number">${pillar.id}</span><div><h3>${pillar.title[state.lang]}</h3><p>${pillar.description[state.lang]}</p><p class="pillar-count">${count} ${t("entries")}</p></div>`;
      button.addEventListener("click", () => {
        state.pillar = state.pillar === pillar.id ? "all" : pillar.id;
        resetVisible();
        render();
        document.querySelector("#catalog-title").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      el.pillarGrid.append(button);
    });
  }

  function appendHighlighted(node, value) {
    node.replaceChildren();
    search.highlightParts(value, state.query).forEach(part => {
      if (part.match) {
        const mark = document.createElement("mark");
        mark.textContent = part.text;
        node.append(mark);
      } else node.append(document.createTextNode(part.text));
    });
  }

  function fillLearning(card, entry) {
    const details = card.querySelector(".learning-details");
    const summaryLabel = details.querySelector("summary span");
    summaryLabel.textContent = t("openLearning");
    details.addEventListener("toggle", () => { summaryLabel.textContent = t(details.open ? "closeLearning" : "openLearning"); });
    card.querySelector(".learning-kicker").textContent = t("whyItMatters");
    card.querySelector("[data-i18n='aviationApplication']").textContent = t("aviationApplication");
    card.querySelector("[data-i18n='howToUse']").textContent = t("howToUse");
    card.querySelector("[data-i18n='appliedExample']").textContent = t("appliedExample");
    card.querySelector("[data-i18n='decisionChecks']").textContent = t("decisionChecks");
    card.querySelector("[data-i18n='limits']").textContent = t("limits");
    card.querySelector(".learning-why").textContent = entry.learning.why[state.lang];
    card.querySelector(".learning-application").textContent = entry.learning.application[state.lang];
    card.querySelector(".learning-method").textContent = entry.learning.method[state.lang];
    card.querySelector(".learning-example").textContent = entry.learning.example[state.lang];
    card.querySelector(".learning-limits p").textContent = entry.learning.limits[state.lang];
    const checks = card.querySelector(".learning-checks ul");
    entry.learning.checks[state.lang].forEach(value => {
      const item = document.createElement("li");
      item.textContent = value;
      checks.append(item);
    });
  }

  function buildTraceability(card, entry) {
    const details = card.querySelector(".traceability-details");
    details.querySelector("summary span").textContent = t("traceability");
    const terms = details.querySelectorAll("dt");
    terms[0].textContent = t("owner");
    terms[1].textContent = t("lastReview");
    details.querySelector(".owner").textContent = `${entry.owner[state.lang]} · ${t("draft")}`;
    details.querySelector(".review-date").textContent = entry.reviewDate;
    const list = details.querySelector(".source-list");
    entry.sourceIds.forEach(id => {
      const source = data.sources[id];
      if (!source) return;
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${t("source")}: ${source.name}`;
      list.append(link);
    });
  }

  function buildResults() {
    const ranked = rankedEntries();
    const visible = ranked.slice(0, state.visible);
    el.results.replaceChildren();
    visible.forEach(result => {
      const entry = result.entry;
      const fragment = el.template.content.cloneNode(true);
      const card = fragment.querySelector(".result-card");
      const pillar = pillarById(entry.pillar);
      const titleId = `title-${entry.id}`;
      card.id = `entry-${entry.id}`;
      card.setAttribute("aria-labelledby", titleId);
      card.style.setProperty("--card-pillar", pillar.color);
      card.querySelector(".type-badge").textContent = entry.type === "faq" ? t("faq") : t("glossaryLabel");
      card.querySelector(".pillar-badge").textContent = `${entry.pillar} · ${pillar.short[state.lang]}`;
      card.querySelector(".status-badge").textContent = entry.status[state.lang];
      const title = card.querySelector("h3");
      title.id = titleId;
      appendHighlighted(title, entry.title[state.lang]);
      appendHighlighted(card.querySelector(".result-summary"), entry.body[state.lang]);
      const reason = card.querySelector(".match-reason");
      const queryTermCount = search.tokenise(state.query).length;
      reason.textContent = queryTermCount ? `${t("relatedMatch")} · ${result.matchedTokens.length}/${queryTermCount}` : "";
      reason.hidden = !queryTermCount;
      const tags = card.querySelector(".audience-tags");
      entry.audiences.forEach(id => {
        const tag = document.createElement("span");
        tag.textContent = audienceLabel(id);
        tags.append(tag);
      });
      fillLearning(card, entry);
      buildTraceability(card, entry);
      el.results.append(fragment);
    });

    el.resultCount.textContent = ranked.length;
    el.resultStatus.textContent = ranked.length ? `${t("showing")} ${visible.length} ${t("of")} ${ranked.length}` : "";
    el.empty.hidden = ranked.length !== 0;
    el.results.hidden = ranked.length === 0;
    el.pagination.hidden = visible.length >= ranked.length || ranked.length === 0;
    el.loadMoreStatus.textContent = `${visible.length} / ${ranked.length}`;
    buildEmptySuggestions(ranked.length);
    buildSearchAssist(ranked.length);
  }

  function buildEmptySuggestions(resultTotal) {
    el.emptySuggestions.replaceChildren();
    if (resultTotal || !state.query) return;
    const candidates = search.suggestEntries(filteredBase({ query: "" }), state.query, entryContext, 4);
    if (!candidates.length) return;
    const label = document.createElement("strong");
    label.textContent = `${t("suggestions")}:`;
    el.emptySuggestions.append(label);
    candidates.forEach(entry => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = entry.title[state.lang];
      button.addEventListener("click", () => {
        state.query = entry.title[state.lang];
        el.input.value = state.query;
        resetVisible();
        render();
      });
      el.emptySuggestions.append(button);
    });
  }

  function buildSearchAssist(resultTotal) {
    if (!state.query) {
      el.searchAssist.textContent = t("searchReady");
      el.searchAssist.hidden = false;
      return;
    }
    const terms = search.tokenise(state.query);
    el.searchAssist.textContent = `${terms.length} ${t("meaningfulTerms")} · ${resultTotal} ${t("results")}`;
    el.searchAssist.hidden = false;
  }

  function buildActiveFilters() {
    el.activeFilters.replaceChildren();
    const chips = [];
    if (state.query) chips.push({ key: "query", label: `${t("activeSearch")}: ${state.query}` });
    if (state.pillar !== "all") chips.push({ key: "pillar", label: `${t("activePillar")}: ${pillarById(state.pillar).short[state.lang]}` });
    if (state.audience !== "all") chips.push({ key: "audience", label: `${t("activeAudience")}: ${audienceLabel(state.audience)}` });
    if (state.type !== "all") chips.push({ key: "type", label: `${t("activeType")}: ${state.type === "faq" ? "FAQ" : t("glossaryLabel")}` });
    chips.forEach(chip => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-chip";
      button.textContent = chip.label;
      button.setAttribute("aria-label", `${t("clear")}: ${chip.label}`);
      button.addEventListener("click", () => {
        if (chip.key === "query") { state.query = ""; el.input.value = ""; }
        else state[chip.key] = "all";
        resetVisible();
        render();
      });
      el.activeFilters.append(button);
    });
  }

  function syncInputs() {
    const selected = document.querySelector(`input[name="type"][value="${state.type}"]`);
    if (selected) selected.checked = true;
    el.audience.value = state.audience;
    el.sort.value = state.sort;
    el.input.value = state.query;
  }

  function updateMetrics() {
    document.querySelector("#metric-items").textContent = data.entries.length;
    document.querySelector("#metric-sources").textContent = Object.keys(data.sources).length;
    document.querySelector("#metric-learning-resources").textContent = window.SN_CATALOGUE.resources.length;
    const withoutType = rankedEntries({ type: "all" });
    document.querySelector("#count-all").textContent = withoutType.length;
    document.querySelector("#count-faq").textContent = withoutType.filter(result => result.entry.type === "faq").length;
    document.querySelector("#count-glossary").textContent = withoutType.filter(result => result.entry.type === "glossary").length;
  }

  let catalogueController;

  function openCatalogueIntention(intentionId) {
    state.catalogueIntent = intentionId;
    catalogueController?.applyIntention(intentionId);
    document.querySelector("#applications").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function buildLearningExperience() {
    window.SNCatalogue.renderIntentions(window.SN_CATALOGUE, {
      container: el.learningIntentions,
      lang: state.lang,
      activeIntention: state.catalogueIntent,
      onSelect: openCatalogueIntention
    });
    catalogueController = window.SNCatalogue.render(window.SN_CATALOGUE, {
      container: el.applications,
      lang: state.lang,
      initialIntention: state.catalogueIntent,
      intentionsContainer: el.learningIntentions,
      onIntentionChange: intentionId => { state.catalogueIntent = intentionId; },
      pillarLabel: (id, lang) => {
        const pillar = pillarById(id);
        return pillar ? `${id} · ${pillar.short[lang]}` : id;
      }
    });
    window.SNLearningPaths.render(window.SN_LEARNING_PATHS, window.SN_CATALOGUE, {
      container: el.learningPaths,
      detailContainer: el.learningPathDetail,
      lang: state.lang,
      selectedPathId: state.learningPathId,
      catalogueApi: window.SNCatalogue,
      onSelect: pathId => { state.learningPathId = pathId; },
      pillarLabel: (id, lang) => {
        const pillar = pillarById(id);
        return pillar ? `${id} · ${pillar.short[lang]}` : id;
      }
    });
  }

  function render(options = {}) {
    translateStaticUi();
    syncInputs();
    updateMetrics();
    buildPillars();
    buildLearningExperience();
    buildResults();
    buildActiveFilters();
    if (options.syncUrl !== false) syncUrl();
  }

  el.form.addEventListener("submit", event => {
    event.preventDefault();
    state.query = el.input.value.trim();
    resetVisible();
    render();
    document.querySelector("#catalog-title").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  el.input.addEventListener("input", () => {
    state.query = el.input.value.trim();
    resetVisible();
    window.clearTimeout(el.input.searchTimer);
    el.input.searchTimer = window.setTimeout(render, 180);
  });
  document.querySelectorAll(".quick-searches button").forEach(button => button.addEventListener("click", () => {
    const suffix = state.lang === "es" ? "Es" : "En";
    el.input.value = button.dataset[`query${suffix}`];
    state.query = el.input.value;
    resetVisible();
    render();
    document.querySelector("#catalog-title").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.querySelectorAll(".lang-button").forEach(button => button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    resetVisible();
    render();
  }));
  document.querySelectorAll("[data-catalogue-intention]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    openCatalogueIntention(link.dataset.catalogueIntention);
  }));
  document.querySelectorAll('input[name="type"]').forEach(input => input.addEventListener("change", () => {
    state.type = input.value;
    resetVisible();
    render();
  }));
  el.audience.addEventListener("change", () => { state.audience = el.audience.value; resetVisible(); render(); });
  el.sort.addEventListener("change", () => { state.sort = el.sort.value; resetVisible(); render(); });
  el.clear.addEventListener("click", () => {
    Object.assign(state, { query: "", pillar: "all", type: "all", audience: "all", sort: "relevance", visible: PAGE_SIZE });
    render();
  });
  el.showAll.addEventListener("click", () => { state.pillar = "all"; resetVisible(); render(); });
  el.loadMore.addEventListener("click", () => { state.visible += PAGE_SIZE; buildResults(); });
  el.copySearch.addEventListener("click", async () => {
    syncUrl();
    try {
      await navigator.clipboard.writeText(window.location.href);
      el.copySearch.textContent = t("copied");
      window.setTimeout(() => { el.copySearch.textContent = t("copySearch"); }, 1600);
    } catch (_error) {
      window.prompt(t("copySearch"), window.location.href);
    }
  });
  window.addEventListener("popstate", () => {
    Object.assign(state, { lang: "es", query: "", pillar: "all", type: "all", audience: "all", sort: "relevance", visible: PAGE_SIZE });
    readUrlState();
    render({ syncUrl: false });
  });

  readUrlState();
  render({ syncUrl: false });
})();
