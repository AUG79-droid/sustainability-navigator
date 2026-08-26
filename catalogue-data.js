(function (root, factory) {
  const catalogue = factory();
  if (typeof module === "object" && module.exports) module.exports = catalogue;
  else root.SN_CATALOGUE = catalogue;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  return {
    version: 1,
    resources: [
      {
        id: "ethical-armor",
        kind: "application",
        title: { es: "Ethical Armor", en: "Ethical Armor" },
        description: {
          es: "Juego de inteligencia para practicar diligencia debida, evaluación de riesgos y decisiones responsables en cadenas de suministro de minerales.",
          en: "An intelligence game for practising due diligence, risk assessment and responsible decision-making in mineral supply chains."
        },
        learningTopic: { es: "Diligencia debida y minerales responsables", en: "Due diligence and responsible minerals" },
        targetAudience: {
          es: ["Compras y supply chain", "Managers", "Sostenibilidad"],
          en: ["Procurement & supply chain", "Managers", "Sustainability"]
        },
        languages: ["EN"],
        estimatedDuration: { value: 30, unit: "minutes" },
        difficulty: "intermediate",
        type: "interactive-game",
        status: "available",
        launchUrl: "ethical-armor/",
        pillarIds: ["P5", "P4"]
      },
      {
        id: "phytosanitary-defender",
        kind: "application",
        title: { es: "Phytosanitary Defender", en: "Phytosanitary Defender" },
        description: {
          es: "Reto interactivo para aplicar los fundamentos de ISPM-15 a embalajes de madera y decisiones de cumplimiento fitosanitario.",
          en: "An interactive challenge for applying ISPM-15 fundamentals to wood packaging and phytosanitary compliance decisions."
        },
        learningTopic: { es: "Cumplimiento fitosanitario ISPM-15", en: "ISPM-15 phytosanitary compliance" },
        targetAudience: {
          es: ["Operaciones", "Compras y supply chain", "Calidad"],
          en: ["Operations", "Procurement & supply chain", "Quality"]
        },
        languages: ["EN"],
        estimatedDuration: { value: 20, unit: "minutes" },
        difficulty: "foundation",
        type: "interactive-challenge",
        status: "available",
        launchUrl: "phytosanitary-defender/",
        pillarIds: ["P5", "P1"]
      },
      {
        id: "reach-compliance-challenge",
        kind: "application",
        title: { es: "The REACH Compliance Challenge", en: "The REACH Compliance Challenge" },
        description: {
          es: "Experiencia basada en escenarios para reconocer obligaciones, evidencias y decisiones clave de cumplimiento bajo REACH.",
          en: "A scenario-based experience for recognising key REACH obligations, evidence and compliance decisions."
        },
        learningTopic: { es: "Cumplimiento químico REACH", en: "REACH chemicals compliance" },
        targetAudience: {
          es: ["Ingeniería", "Compras y supply chain", "Sostenibilidad"],
          en: ["Engineering", "Procurement & supply chain", "Sustainability"]
        },
        languages: ["EN"],
        estimatedDuration: { value: 30, unit: "minutes" },
        difficulty: "intermediate",
        type: "scenario-challenge",
        status: "available",
        launchUrl: "reach-compliance-challenge/",
        pillarIds: ["P2", "P5"]
      },
      {
        id: "year-15-challenge",
        kind: "application",
        title: { es: "The Year 15 Challenge", en: "The Year 15 Challenge" },
        description: {
          es: "Aplicación de ingeniería y ecodiseño para explorar decisiones de ciclo de vida, mantenibilidad y extensión de la vida útil.",
          en: "An engineering and eco-design application for exploring life-cycle, maintainability and service-life extension decisions."
        },
        learningTopic: { es: "Ingeniería, ecodiseño y ciclo de vida", en: "Engineering, eco-design and life cycle" },
        targetAudience: {
          es: ["Ingeniería", "Operaciones", "Managers"],
          en: ["Engineering", "Operations", "Managers"]
        },
        languages: ["EN"],
        estimatedDuration: { value: 35, unit: "minutes" },
        difficulty: "advanced",
        type: "scenario-challenge",
        status: "available",
        launchUrl: "year-15-challenge/",
        pillarIds: ["P2", "P1"]
      }
    ]
  };
});
