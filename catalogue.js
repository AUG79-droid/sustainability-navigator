(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNCatalogue = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const REQUIRED_FIELDS = [
    "id", "kind", "title", "description", "learningTopic", "targetAudience", "languages",
    "estimatedDuration", "difficulty", "type", "status", "launchUrl", "pillarIds"
  ];

  const labels = {
    es: {
      topic: "Tema", audience: "Audiencia", language: "Idioma", duration: "Duración estimada",
      difficulty: "Dificultad", type: "Tipo", status: "Estado", pillars: "Pilares relacionados",
      launch: "Iniciar aplicación", minutes: "min", available: "Disponible",
      foundation: "Inicial", intermediate: "Intermedia", advanced: "Avanzada",
      "interactive-game": "Juego interactivo", "interactive-challenge": "Reto interactivo", "scenario-challenge": "Reto por escenarios"
    },
    en: {
      topic: "Topic", audience: "Audience", language: "Language", duration: "Estimated duration",
      difficulty: "Difficulty", type: "Type", status: "Status", pillars: "Related pillars",
      launch: "Launch application", minutes: "min", available: "Available",
      foundation: "Foundation", intermediate: "Intermediate", advanced: "Advanced",
      "interactive-game": "Interactive game", "interactive-challenge": "Interactive challenge", "scenario-challenge": "Scenario challenge"
    }
  };

  function validateResource(resource) {
    const errors = [];
    REQUIRED_FIELDS.forEach(field => {
      if (resource[field] === undefined || resource[field] === null || resource[field] === "") errors.push(`Missing ${field}`);
    });
    ["title", "description", "learningTopic", "targetAudience"].forEach(field => {
      if (!resource[field]?.es || !resource[field]?.en) errors.push(`${field} must contain es and en`);
    });
    if (!Array.isArray(resource.languages) || !resource.languages.length) errors.push("languages must be a non-empty array");
    if (!Array.isArray(resource.pillarIds) || !resource.pillarIds.length) errors.push("pillarIds must be a non-empty array");
    if (!Number.isFinite(resource.estimatedDuration?.value) || resource.estimatedDuration.value <= 0) errors.push("estimatedDuration.value must be positive");
    if (resource.estimatedDuration?.unit !== "minutes") errors.push("estimatedDuration.unit must be minutes");
    if (typeof resource.launchUrl !== "string" || /^(?:https?:)?\/\//.test(resource.launchUrl) || resource.launchUrl.startsWith("/")) {
      errors.push("launchUrl must be a relative Hub URL");
    }
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

  function addDefinition(list, term, value) {
    const wrapper = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = value;
    wrapper.append(dt, dd);
    list.append(wrapper);
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
    kind.textContent = l[resource.type] || resource.type;
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
    addDefinition(metadata, l.audience, resource.targetAudience[lang].join(" · "));
    addDefinition(metadata, l.language, resource.languages.join(" / "));
    addDefinition(metadata, l.duration, `${resource.estimatedDuration.value} ${l.minutes}`);
    addDefinition(metadata, l.difficulty, l[resource.difficulty] || resource.difficulty);
    addDefinition(metadata, l.pillars, resource.pillarIds.map(id => pillarLabel(id, lang)).join(" · "));

    const launch = document.createElement("a");
    launch.className = "application-launch";
    launch.href = `${resource.launchUrl}?hubLang=${lang}`;
    launch.textContent = l.launch;
    launch.setAttribute("aria-label", `${l.launch}: ${resource.title[lang]}`);

    card.append(top, title, topic, description, metadata, launch);
    return card;
  }

  function render(catalogue, options) {
    const container = options?.container;
    const lang = options?.lang === "en" ? "en" : "es";
    const kind = options?.kind || "application";
    if (!container) return;
    const errors = validateCatalogue(catalogue);
    if (errors.length) throw new Error(`Invalid catalogue: ${errors.join("; ")}`);
    const resources = catalogue.resources.filter(resource => resource.kind === kind);
    container.replaceChildren(...resources.map(resource => renderCard(resource, lang, options.pillarLabel)));
  }

  return { REQUIRED_FIELDS, validateResource, validateCatalogue, render };
});
