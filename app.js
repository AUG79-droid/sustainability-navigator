(() => {
  "use strict";

  const data = window.SN_DATA;
  const state = { lang: "es", query: "", pillar: "all", type: "all", audience: "all", sort: "relevance" };

  const ui = {
    es: {
      prototype: "Prototipo MVP", eyebrow: "Descubrir · Comprender · Decidir",
      heroLead: "Encuentra conceptos, preguntas frecuentes y referencias para conectar sostenibilidad con decisiones aeronáuticas.",
      searchLabel: "Buscar en el Navigator", searchButton: "Buscar", tryLabel: "Prueba:",
      sixPillars: "Seis perspectivas, una visión de sistema", entries: "fichas", sources: "fuentes", bilingual: "bilingüe",
      architecture: "Arquitectura", explorePillars: "Explora los seis pilares", showAll: "Ver todo", filters: "Filtros", clear: "Limpiar",
      contentType: "Tipo de contenido", all: "Todo", glossary: "Glosario", audience: "Audiencia",
      governanceTitle: "Gobernanza del contenido", governanceBody: "Cada ficha muestra fuente, fecha y responsable propuesto. El contenido sigue en validación funcional.",
      knowledgeBase: "Base de conocimiento", results: "resultados", sort: "Ordenar", relevance: "Relevancia", byPillar: "Por pilar",
      noResults: "No hay coincidencias", noResultsBody: "Prueba una palabra más amplia o elimina algún filtro.",
      internalContext: "Contexto interno", internalTitle: "¿La pregunta afecta a un centro, producto, proceso o política interna?",
      internalBody: "Usa la ficha como orientación inicial y confirma la respuesta con la referencia corporativa aprobada y el responsable funcional correspondiente.",
      ruleOne: "Define el alcance", ruleTwo: "Comprueba la evidencia", ruleThree: "Documenta límites y decisión",
      signature: "From knowledge to better decisions", disclaimer: "Prototipo educativo. No constituye una publicación corporativa oficial ni sustituye procedimientos, normas o validaciones internas.",
      traceability: "Trazabilidad", owner: "Responsable propuesto", lastReview: "Última revisión", source: "Fuente",
      faq: "FAQ", glossaryLabel: "Glosario", allAudiences: "Todas las audiencias", draft: "Borrador · validar",
      activeSearch: "Búsqueda", activePillar: "Pilar", activeAudience: "Audiencia", activeType: "Tipo",
      audience_all: "General", audience_operations: "Operaciones", audience_engineering: "Ingeniería", audience_digital: "Digital e innovación",
      audience_learning: "Learning y personas", audience_procurement: "Compras y supply chain", audience_managers: "Managers", audience_sustainability: "Sostenibilidad"
    },
    en: {
      prototype: "MVP prototype", eyebrow: "Discover · Understand · Decide",
      heroLead: "Find concepts, frequently asked questions and references that connect sustainability with aviation decisions.",
      searchLabel: "Search the Navigator", searchButton: "Search", tryLabel: "Try:",
      sixPillars: "Six perspectives, one systems view", entries: "entries", sources: "sources", bilingual: "bilingual",
      architecture: "Architecture", explorePillars: "Explore the six pillars", showAll: "Show all", filters: "Filters", clear: "Clear",
      contentType: "Content type", all: "All", glossary: "Glossary", audience: "Audience",
      governanceTitle: "Content governance", governanceBody: "Every entry shows a source, date and proposed owner. Content is pending functional validation.",
      knowledgeBase: "Knowledge base", results: "results", sort: "Sort", relevance: "Relevance", byPillar: "By pillar",
      noResults: "No matches found", noResultsBody: "Try a broader word or remove a filter.",
      internalContext: "Internal context", internalTitle: "Does the question concern a site, product, process or internal policy?",
      internalBody: "Use the entry as initial orientation, then confirm the answer against an approved corporate reference and the relevant functional owner.",
      ruleOne: "Define the scope", ruleTwo: "Check the evidence", ruleThree: "Document limits and decision",
      signature: "From knowledge to better decisions", disclaimer: "Educational prototype. It is not an official corporate publication and does not replace internal procedures, standards or validation.",
      traceability: "Traceability", owner: "Proposed owner", lastReview: "Last review", source: "Source",
      faq: "FAQ", glossaryLabel: "Glossary", allAudiences: "All audiences", draft: "Draft · validate",
      activeSearch: "Search", activePillar: "Pillar", activeAudience: "Audience", activeType: "Type",
      audience_all: "General", audience_operations: "Operations", audience_engineering: "Engineering", audience_digital: "Digital & innovation",
      audience_learning: "Learning & people", audience_procurement: "Procurement & supply chain", audience_managers: "Managers", audience_sustainability: "Sustainability"
    }
  };

  const el = {
    form: document.querySelector("#search-form"), input: document.querySelector("#search-input"),
    pillarGrid: document.querySelector("#pillar-grid"), results: document.querySelector("#results"),
    empty: document.querySelector("#empty-state"), resultCount: document.querySelector("#result-count"),
    audience: document.querySelector("#audience-filter"), sort: document.querySelector("#sort-select"),
    clear: document.querySelector("#clear-filters"), showAll: document.querySelector("#show-all-pillars"),
    activeFilters: document.querySelector("#active-filters"), template: document.querySelector("#result-template")
  };

  const t = key => ui[state.lang][key] || key;
  const normalise = value => (value || "").toLocaleLowerCase(state.lang)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  const pillarById = id => data.pillars.find(pillar => pillar.id === id);
  const audienceLabel = id => t(`audience_${id}`);

  function translateStaticUi() {
    document.documentElement.lang = state.lang;
    document.title = state.lang === "es"
      ? "Sustainability Navigator · Sustainable Aviation Learning Lab"
      : "Sustainability Navigator · Sustainable Aviation Learning Lab";
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = ui[state.lang][node.dataset.i18n];
      if (value) node.textContent = value;
    });
    el.input.placeholder = el.input.dataset[`placeholder${state.lang === "es" ? "Es" : "En"}`];
    document.querySelectorAll(".lang-button").forEach(button => {
      const active = button.dataset.lang === state.lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    buildAudienceOptions();
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

  function entrySearchText(entry) {
    return normalise([entry.title.es, entry.title.en, entry.body.es, entry.body.en,
      ...entry.audiences.map(audienceLabel), pillarById(entry.pillar).title.es,
      pillarById(entry.pillar).title.en].join(" "));
  }

  function relevance(entry) {
    const query = normalise(state.query);
    if (!query) return 1;
    const title = normalise(`${entry.title[state.lang]} ${entry.title[state.lang === "es" ? "en" : "es"]}`);
    const body = entrySearchText(entry);
    const tokens = query.split(" ").filter(token => token.length > 1);
    let score = title.includes(query) ? 20 : body.includes(query) ? 9 : 0;
    tokens.forEach(token => {
      if (title.includes(token)) score += 5;
      if (body.includes(token)) score += 1;
    });
    return score;
  }

  function filteredEntries() {
    const hasQuery = Boolean(normalise(state.query));
    const filtered = data.entries.filter(entry => {
      if (state.pillar !== "all" && entry.pillar !== state.pillar) return false;
      if (state.type !== "all" && entry.type !== state.type) return false;
      if (state.audience !== "all" && !entry.audiences.includes(state.audience)) return false;
      return !hasQuery || relevance(entry) > 0;
    });
    return filtered.sort((a, b) => {
      if (state.sort === "pillar") return a.pillar.localeCompare(b.pillar) || a.title[state.lang].localeCompare(b.title[state.lang], state.lang);
      if (state.sort === "az") return a.title[state.lang].localeCompare(b.title[state.lang], state.lang);
      return relevance(b) - relevance(a) || a.pillar.localeCompare(b.pillar);
    });
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
      const count = data.entries.filter(entry => entry.pillar === pillar.id).length;
      button.innerHTML = `<span class="pillar-number">${pillar.id}</span><div><h3>${pillar.title[state.lang]}</h3><p>${pillar.description[state.lang]}</p><p class="pillar-count">${count} ${t("entries")}</p></div>`;
      button.addEventListener("click", () => {
        state.pillar = state.pillar === pillar.id ? "all" : pillar.id;
        render();
        document.querySelector("#catalog-title").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      el.pillarGrid.append(button);
    });
  }

  function buildTraceability(card, entry) {
    card.querySelector("details summary span").textContent = t("traceability");
    const terms = card.querySelectorAll("dt");
    terms[0].textContent = t("owner");
    terms[1].textContent = t("lastReview");
    card.querySelector(".owner").textContent = `${entry.owner[state.lang]} · ${t("draft")}`;
    card.querySelector(".review-date").textContent = entry.reviewDate;
    const list = card.querySelector(".source-list");
    entry.sourceIds.forEach(id => {
      const source = data.sources[id];
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${t("source")}: ${source.name}`;
      list.append(link);
    });
  }

  function buildResults() {
    const entries = filteredEntries();
    el.results.replaceChildren();
    entries.forEach(entry => {
      const fragment = el.template.content.cloneNode(true);
      const card = fragment.querySelector(".result-card");
      const pillar = pillarById(entry.pillar);
      card.id = `entry-${entry.id}`;
      card.style.setProperty("--card-pillar", pillar.color);
      card.querySelector(".type-badge").textContent = entry.type === "faq" ? t("faq") : t("glossaryLabel");
      card.querySelector(".pillar-badge").textContent = `${entry.pillar} · ${pillar.short[state.lang]}`;
      card.querySelector(".status-badge").textContent = entry.status[state.lang];
      card.querySelector("h3").textContent = entry.title[state.lang];
      card.querySelector(".result-summary").textContent = entry.body[state.lang];
      const tags = card.querySelector(".audience-tags");
      entry.audiences.forEach(id => {
        const tag = document.createElement("span");
        tag.textContent = audienceLabel(id);
        tags.append(tag);
      });
      buildTraceability(card, entry);
      el.results.append(fragment);
    });
    el.resultCount.textContent = entries.length;
    el.empty.hidden = entries.length !== 0;
    el.results.hidden = entries.length === 0;
  }

  function buildActiveFilters() {
    el.activeFilters.replaceChildren();
    const chips = [];
    if (state.query) chips.push({ key: "query", label: `${t("activeSearch")}: ${state.query}` });
    if (state.pillar !== "all") chips.push({ key: "pillar", label: `${t("activePillar")}: ${state.pillar}` });
    if (state.audience !== "all") chips.push({ key: "audience", label: `${t("activeAudience")}: ${audienceLabel(state.audience)}` });
    if (state.type !== "all") chips.push({ key: "type", label: `${t("activeType")}: ${state.type === "faq" ? "FAQ" : t("glossaryLabel")}` });
    chips.forEach(chip => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-chip";
      button.textContent = chip.label;
      button.addEventListener("click", () => {
        if (chip.key === "query") { state.query = ""; el.input.value = ""; }
        else state[chip.key] = "all";
        syncInputs(); render();
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
    document.querySelector("#count-all").textContent = data.entries.length;
    document.querySelector("#count-faq").textContent = data.entries.filter(entry => entry.type === "faq").length;
    document.querySelector("#count-glossary").textContent = data.entries.filter(entry => entry.type === "glossary").length;
  }

  function render() {
    translateStaticUi();
    syncInputs();
    updateMetrics();
    buildPillars();
    buildResults();
    buildActiveFilters();
  }

  el.form.addEventListener("submit", event => {
    event.preventDefault();
    state.query = el.input.value.trim();
    render();
    document.querySelector("#catalog-title").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  el.input.addEventListener("input", () => {
    state.query = el.input.value.trim();
    window.clearTimeout(el.input.searchTimer);
    el.input.searchTimer = window.setTimeout(() => { buildResults(); buildActiveFilters(); }, 180);
  });
  document.querySelectorAll(".quick-searches button").forEach(button => button.addEventListener("click", () => {
    const suffix = state.lang === "es" ? "Es" : "En";
    el.input.value = button.dataset[`query${suffix}`];
    state.query = el.input.value;
    render();
    document.querySelector("#catalog-title").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.querySelectorAll(".lang-button").forEach(button => button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    render();
  }));
  document.querySelectorAll('input[name="type"]').forEach(input => input.addEventListener("change", () => {
    state.type = input.value;
    render();
  }));
  el.audience.addEventListener("change", () => { state.audience = el.audience.value; render(); });
  el.sort.addEventListener("change", () => { state.sort = el.sort.value; render(); });
  el.clear.addEventListener("click", () => {
    Object.assign(state, { query: "", pillar: "all", type: "all", audience: "all", sort: "relevance" });
    syncInputs(); render();
  });
  el.showAll.addEventListener("click", () => { state.pillar = "all"; render(); });

  render();
})();
