(function (root, factory) {
  const catalogue = factory();
  if (typeof module === "object" && module.exports) module.exports = catalogue;
  else root.SN_CATALOGUE = catalogue;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const account = "AUG79-droid";
  const repository = (name, languages) => ({
    repositoryName: name,
    repositoryUrl: `https://github.com/${account}/${name}`,
    languages
  });
  const pages = name => `https://${account.toLowerCase()}.github.io/${name}/`;
  const text = (es, en) => ({ es, en });
  const resource = (id, kind, subtype, title, description, learningTopic, audienceIds, launches, duration, difficulty, pillarIds, provenance, extra = {}) => ({
    id, kind, subtype, title, description, learningTopic, audienceIds, launches,
    duration, difficulty, status: "available", lifecycle: "active",
    languages: Object.keys(launches), intendedLanguages: Object.keys(launches),
    aliases: [], replacedBy: null,
    metadataQuality: {
      duration: duration ? "documented" : "unknown",
      difficulty: difficulty ? "verified" : "unknown",
      languages: "verified", publication: "verified", pairing: Object.keys(launches).length > 1 ? "verified" : "unknown"
    },
    pillarIds, provenance, ...extra
  });

  return {
    version: 2,
    resources: [
      resource("airpower-mission-green-2026", "game", "decision-game",
        text("Airpower Mission Green 2026", "Airpower Mission Green 2026"),
        text("Juego de decisiones sobre misiones aéreas que integra rendimiento operacional, impacto ambiental, resiliencia y responsabilidad.", "A mission decision game integrating operational performance, environmental impact, resilience and responsibility."),
        text("Decisiones de sostenibilidad en misiones aéreas", "Sustainability decisions in air missions"),
        ["operations", "sustainability"],
        { es: pages("airpower-mission-green-2026-es"), en: pages("airpower-mission-green-2026") }, null, null,
        ["P1", "P2", "P5", "P6"], [repository("airpower-mission-green-2026-es", ["es"]), repository("airpower-mission-green-2026", ["en"])]),

      resource("bio-inspired-innovation-lab", "application", "guided-workshop",
        text("Laboratorio de Innovación Bioinspirada", "Bio-Inspired Innovation Lab"),
        text("Taller guiado para observar estrategias de la naturaleza y convertirlas en oportunidades de innovación aplicables a la aviación.", "A guided workshop for observing nature's strategies and turning them into aviation innovation opportunities."),
        text("Biomímesis e innovación", "Biomimicry and innovation"),
        ["innovation", "engineering", "teams"],
        { es: pages("bio-airbus-ignite"), en: pages("bio-airbus-ignite-en") }, null, null,
        ["P2", "P3", "P6"], [repository("bio-airbus-ignite", ["es"]), repository("bio-airbus-ignite-en", ["en"])]),

      resource("bio-radar-runway-prevention", "simulator", "serious-game",
        text("BIO-RADAR · Runway Wildlife Prevention", "BIO-RADAR · Runway Wildlife Prevention"),
        text("Juego serio sobre prevención de fauna en pista y decisiones de gestión de biodiversidad y seguridad operacional.", "A serious game about runway wildlife prevention and biodiversity and operational-safety decisions."),
        text("Gestión de fauna y prevención en pista", "Wildlife management and runway prevention"),
        ["operations", "flight-safety", "environment"], { en: pages("bio-radar-runway-prevention") }, null, null,
        ["P1", "P6"], [repository("bio-radar-runway-prevention", ["en"])]),

      resource("sustainability-evidence-decisions", "course", "advanced-digital-course",
        text("Sostenibilidad aeronáutica: evidencias y decisiones", "Sustainability in Aviation: Evidence & Decisions"),
        text("Curso digital avanzado para evaluar evidencias y tomar decisiones de sostenibilidad en el contexto aeronáutico.", "An advanced digital course for assessing evidence and making sustainability decisions in an aviation context."),
        text("Evaluación de evidencias y toma de decisiones", "Evidence assessment and decision-making"),
        ["general", "engineering", "sustainability"],
        { es: pages("Biodiversidad-y-Sostenibilidad-Real-en-Airbus"), en: pages("Real-Biodiversity-and-Sustainability-at-Airbus_EN") }, null, "advanced",
        ["P1", "P2", "P3", "P4", "P5", "P6"], [repository("Biodiversidad-y-Sostenibilidad-Real-en-Airbus", ["es"]), repository("Real-Biodiversity-and-Sustainability-at-Airbus_EN", ["en"])]),

      resource("sustainability-control-room", "simulator", "timed-decision-simulation",
        text("Sala de Control de Sostenibilidad", "Sustainability Control Room"),
        text("Simulación contrarreloj para practicar decisiones bajo presión en escenarios interdependientes de sostenibilidad.", "A timed simulation for practising decisions under pressure across interconnected sustainability scenarios."),
        text("Decisiones de sostenibilidad bajo presión", "Sustainability decisions under pressure"),
        ["operations", "managers", "sustainability"],
        { es: pages("biodiversity-panic-mode-airbus"), en: pages("biodiversity-panic-mode-airbus-50-blocks-en") }, null, "progressive",
        ["P1", "P2", "P3", "P5", "P6"], [repository("biodiversity-panic-mode-airbus", ["es"]), repository("biodiversity-panic-mode-airbus-50-blocks-en", ["en"])]),

      resource("tas-sustainability-knowledge-check", "quiz", "timed-assessment",
        text("Evaluación de conocimientos de sostenibilidad TAS — edición de 50 preguntas", "TAS Sustainability Knowledge Check — 50-question edition"),
        text("Evaluación cronometrada y multimodo de 50 preguntas sobre sostenibilidad aplicada.", "A timed, multi-mode 50-question assessment of applied sustainability knowledge."),
        text("Conocimientos transversales de sostenibilidad", "Cross-cutting sustainability knowledge"),
        ["general", "teams", "sustainability"],
        { es: pages("biodivertrivial-airbus"), en: pages("biodivertrivial-airbus-en") }, null, null,
        ["P1", "P2", "P3", "P5", "P6"], [repository("biodivertrivial-airbus", ["es"]), repository("biodivertrivial-airbus-en", ["en"])]),

      resource("sustainable-aviation-essentials", "course", "foundation-course",
        text("Fundamentos de Aviación Sostenible", "Sustainable Aviation Essentials"),
        text("Curso breve de fundamentos para comprender y aplicar los principales conceptos de sostenibilidad en aviación.", "A shorter foundation course for understanding and applying core sustainability concepts in aviation."),
        text("Fundamentos de sostenibilidad en aviación", "Sustainable aviation essentials"),
        ["general", "engineering", "operations"],
        { es: pages("curso-biodiversidad-airbus"), en: pages("curso-biodiversidad-airbus-en") }, { min: 180, max: 300, unit: "minutes" }, "foundation",
        ["P1", "P2", "P3", "P5", "P6"], [repository("curso-biodiversidad-airbus", ["es"]), repository("curso-biodiversidad-airbus-en", ["en"])]),

      resource("eco-retrofit-mineral-footprint", "game", "responsible-sourcing-game",
        text("Eco-Retrofit · The Mineral Footprint", "Eco-Retrofit · The Mineral Footprint"),
        text("Juego serio para explorar la huella mineral y las decisiones de aprovisionamiento responsable asociadas al retrofit.", "A serious game exploring mineral footprints and responsible-sourcing decisions in retrofit work."),
        text("Huella mineral y aprovisionamiento responsable", "Mineral footprint and responsible sourcing"),
        ["engineering", "procurement", "sustainability"], { en: pages("eco-retrofit-mineral-footprint") }, null, null,
        ["P2", "P5", "P6"], [repository("eco-retrofit-mineral-footprint", ["en"])]),

      resource("sustainability-systems-escape-room", "game", "escape-room",
        text("Escape Room de Sistemas de Sostenibilidad", "Sustainability Systems Escape Room"),
        text("Escape room colaborativo para resolver retos conectados de sostenibilidad como un sistema.", "A collaborative escape room for solving connected sustainability challenges as a system."),
        text("Pensamiento sistémico en sostenibilidad", "Systems thinking in sustainability"),
        ["teams", "operations", "sustainability"],
        { es: pages("escape-room-biodiversidad"), en: pages("escape-room-biodiversidad-en") }, { min: 45, max: 60, unit: "minutes" }, null,
        ["P1", "P3", "P4", "P6"], [repository("escape-room-biodiversidad", ["es"]), repository("escape-room-biodiversidad-en", ["en"])]),

      resource("sustainable-aviation-learning-library", "knowledge-resource", "technical-storybook-library",
        text("Biblioteca de Aprendizaje de Aviación Sostenible", "Sustainable Aviation Learning Library"),
        text("Biblioteca bilingüe de historias técnicas y recursos de aprendizaje sobre sostenibilidad aplicada a la aviación.", "A bilingual library of technical stories and learning resources about sustainability in aviation."),
        text("Historias técnicas de sostenibilidad aeronáutica", "Technical sustainable-aviation stories"),
        ["general", "environment", "sustainability"],
        { es: pages("factory-biodiversity-library"), en: pages("factory-biodiversity-library") }, null, null,
        ["P1", "P2", "P3", "P6"], [repository("factory-biodiversity-library", ["es", "en"])]),

      resource("introduction-sustainability-aviation", "course", "introductory-course",
        text("Introducción a la sostenibilidad en la aviación", "Introduction to Sustainability in Aviation"),
        text("Curso secuencial de introducción a los fundamentos y aplicaciones de la sostenibilidad en aviación.", "A sequential introduction to sustainability foundations and their application in aviation."),
        text("Introducción a la sostenibilidad en aviación", "Introduction to sustainability in aviation"),
        ["general", "engineering", "operations"],
        { es: pages("Introduction-to-Nature-for-Development"), en: pages("Introduction-to-Nature-for-Development_en") }, { min: 240, max: 240, unit: "minutes" }, "foundation",
        ["P1", "P2", "P3", "P5", "P6"], [repository("Introduction-to-Nature-for-Development", ["es"]), repository("Introduction-to-Nature-for-Development_en", ["en"])]),

      resource("noise-habitat-missions", "course", "mission-based-simulator",
        text("Noise & Habitat — Missions 01–06", "Noise & Habitat — Missions 01–06"),
        text("Curso operacional basado en seis misiones sobre ruido, hábitat y decisiones de servicio bajo presión.", "An operational six-mission course about noise, habitat and in-service decisions under pressure."),
        text("Ruido, hábitat y operaciones", "Noise, habitat and operations"),
        ["in-service", "operations", "environment"], { en: pages("noise-habitat-operations-under-pressure") }, null, "foundation",
        ["P1", "P4", "P6"], [repository("noise-habitat-operations-under-pressure", ["en"])]),

      resource("strategic-soil-footprint-mapper", "simulator", "tactical-mission-simulator",
        text("Strategic Soil & Footprint Mapper", "Strategic Soil & Footprint Mapper"),
        text("Simulador táctico para analizar suelo, huella territorial y decisiones operacionales.", "A tactical simulator for analysing soil, territorial footprint and operational decisions."),
        text("Suelo, huella territorial y planificación", "Soil, territorial footprint and planning"),
        ["in-service", "operations", "environment"], { en: pages("strategic-soil-footprint-mapper") }, null, null,
        ["P1", "P6"], [repository("strategic-soil-footprint-mapper", ["en"])]),

      resource("sustainability-knowledge-check-evidence", "quiz", "evidence-diagnostic",
        text("Sustainability Knowledge Check — Evidence Review", "Sustainability Knowledge Check — Evidence Review"),
        text("Diagnóstico basado en evidencias para comprobar conocimientos transversales de sostenibilidad.", "An evidence-based diagnostic for checking cross-cutting sustainability knowledge."),
        text("Diagnóstico y revisión de evidencias", "Knowledge diagnostic and evidence review"),
        ["general", "managers", "sustainability"], { en: pages("sustainability-knowledge-check") }, { min: 15, max: 20, unit: "minutes" }, null,
        ["P1", "P2", "P3", "P4", "P5", "P6"], [repository("sustainability-knowledge-check", ["en"])]),

      resource("sustainable-aviation-foundations-master", "course", "master-course",
        text("Sustainable Aviation Foundations — Master Course", "Sustainable Aviation Foundations — Master Course"),
        text("Curso master extenso y avanzado sobre los fundamentos, sistemas y decisiones de sostenibilidad en aviación.", "An in-depth advanced master course on sustainable-aviation foundations, systems and decisions."),
        text("Fundamentos avanzados de aviación sostenible", "Advanced sustainable aviation foundations"),
        ["sustainability", "managers", "engineering", "operations"], { en: pages("sustainable-aviation-foundations") }, { min: 420, max: 540, unit: "minutes" }, "advanced",
        ["P1", "P2", "P3", "P4", "P5", "P6"], [repository("sustainable-aviation-foundations", ["en"])]),

      resource("tass-readiness-resilience-simulator", "simulator", "mission-simulator",
        text("TASS Readiness & Resilience Simulator", "TASS Readiness & Resilience Simulator"),
        text("Simulador de misiones para practicar decisiones de preparación y resiliencia en servicios aeronáuticos.", "A mission simulator for practising readiness and resilience decisions in aviation services."),
        text("Preparación y resiliencia operacional", "Operational readiness and resilience"),
        ["in-service", "operations", "engineering"], { en: pages("tass-readiness-resilience-simulator") }, null, null,
        ["P1", "P2", "P5", "P6"], [repository("tass-readiness-resilience-simulator", ["en"])]),

      resource("tassg-composite-guardian", "simulator", "maintenance-game",
        text("TASSG Composite Guardian", "TASSG Composite Guardian"),
        text("Juego serio de mantenimiento In-Service sobre decisiones de protección, reparación y sostenibilidad de materiales compuestos.", "An In-Service maintenance serious game about composite protection, repair and sustainability decisions."),
        text("Mantenimiento sostenible de materiales compuestos", "Sustainable composite maintenance"),
        ["maintenance", "in-service", "environment"], { en: pages("tassg-composite-guardian") }, null, null,
        ["P1", "P2", "P6"], [repository("tassg-composite-guardian", ["en"])]),

      resource("tas-sustainability-quest", "game", "team-quiz-game",
        text("TAS Sustainability Quest", "TAS Sustainability Quest"),
        text("Juego de preguntas por equipos con formato de tablero para explorar retos de sostenibilidad.", "A board-style team quiz for exploring sustainability challenges."),
        text("Aprendizaje colaborativo de sostenibilidad", "Collaborative sustainability learning"),
        ["teams", "general", "sustainability"],
        { es: pages("trivia-airbus-quest"), en: pages("trivia-airbus-quest-en") }, null, null,
        ["P1", "P3", "P5", "P6"], [repository("trivia-airbus-quest", ["es"]), repository("trivia-airbus-quest-en", ["en"])]),

      resource("responsible-supply-chain-compliance-foundations", "course", "foundation-course",
        text("Fundamentos de Cadena de Suministro Responsable y Cumplimiento", "Responsible Supply Chain & Compliance Foundations"),
        text("Curso bilingüe de fundamentos para comprender la visibilidad, la evidencia, la diligencia debida y la gobernanza del cumplimiento en cadenas de suministro aeroespaciales.", "A bilingual foundation course for understanding visibility, evidence, due diligence and compliance governance in aerospace supply chains."),
        text("Cadena de suministro responsable y fundamentos de cumplimiento", "Responsible supply chain and compliance foundations"),
        ["procurement", "quality", "engineering", "managers"],
        { es: "responsible-supply-chain-compliance-foundations/", en: "responsible-supply-chain-compliance-foundations/" },
        { min: 150, max: 150, unit: "minutes" }, "foundation",
        ["P1", "P2", "P4", "P5"], [repository("sustainability-navigator", ["es", "en"])], { internalCourse: true }),

      resource("eco-design-circularity-aerospace-materials", "course", "foundation-course",
        text("Ecodiseño, Circularidad y Materiales Aeronáuticos", "Eco-Design, Circularity & Aerospace Materials"),
        text("Curso bilingüe de fundamentos para comparar decisiones de diseño y materiales mediante pensamiento de ciclo de vida, estrategias de circularidad, requisitos técnicos y evidencia trazable.", "A bilingual foundation course for comparing design and material decisions through life-cycle thinking, circularity strategies, technical requirements and traceable evidence."),
        text("Ecodiseño, circularidad y decisiones sobre materiales aeronáuticos", "Eco-design, circularity and aerospace material decisions"),
        ["engineering", "maintenance", "procurement", "innovation", "sustainability"],
        { es: "eco-design-circularity-aerospace-materials/", en: "eco-design-circularity-aerospace-materials/" },
        { min: 190, max: 190, unit: "minutes" }, "foundation",
        ["P1", "P2", "P3", "P5", "P6"], [repository("sustainability-navigator", ["es", "en"])], { internalCourse: true }),

      resource("supply-chain-compliance-decision-review", "quiz", "scenario-assessment",
        text("Revisión de Decisiones de Cadena de Suministro y Cumplimiento", "Supply Chain & Compliance Decision Review"),
        text("Revisión bilingüe basada en escenarios para practicar decisiones sobre evidencia, diligencia debida, cumplimiento, logística, escalación y gobernanza.", "A bilingual scenario-based review for practising decisions about evidence, due diligence, compliance, logistics, escalation and governance."),
        text("Toma de decisiones aplicada en cadena de suministro y cumplimiento", "Applied supply-chain and compliance decision-making"),
        ["procurement", "quality", "engineering", "managers", "sustainability"],
        { es: "supply-chain-compliance-decision-review/", en: "supply-chain-compliance-decision-review/" },
        { min: 75, max: 75, unit: "minutes" }, "intermediate",
        ["P1", "P2", "P4", "P5"], [repository("sustainability-navigator", ["es", "en"])], { internalAssessment: true }),

      resource("ethical-armor", "application", "interactive-game",
        text("Ethical Armor", "Ethical Armor"),
        text("Juego de inteligencia para practicar diligencia debida, evaluación de riesgos y decisiones responsables en cadenas de suministro de minerales.", "An intelligence game for practising due diligence, risk assessment and responsible decision-making in mineral supply chains."),
        text("Diligencia debida y minerales responsables", "Due diligence and responsible minerals"),
        ["procurement", "managers", "sustainability"], { en: "ethical-armor/" }, { min: 30, max: 30, unit: "minutes" }, "intermediate",
        ["P5", "P4"], [repository("sustainability-navigator", ["en"])], { legacyInternal: true }),

      resource("phytosanitary-defender", "application", "interactive-challenge",
        text("Phytosanitary Defender", "Phytosanitary Defender"),
        text("Reto interactivo para aplicar los fundamentos de ISPM-15 a embalajes de madera y decisiones de cumplimiento fitosanitario.", "An interactive challenge for applying ISPM-15 fundamentals to wood packaging and phytosanitary compliance decisions."),
        text("Cumplimiento fitosanitario ISPM-15", "ISPM-15 phytosanitary compliance"),
        ["operations", "procurement", "quality"], { en: "phytosanitary-defender/" }, { min: 20, max: 20, unit: "minutes" }, "foundation",
        ["P5", "P1"], [repository("sustainability-navigator", ["en"])], { legacyInternal: true }),

      resource("reach-compliance-challenge", "application", "scenario-challenge",
        text("The REACH Compliance Challenge", "The REACH Compliance Challenge"),
        text("Experiencia basada en escenarios para reconocer obligaciones, evidencias y decisiones clave de cumplimiento bajo REACH.", "A scenario-based experience for recognising key REACH obligations, evidence and compliance decisions."),
        text("Cumplimiento químico REACH", "REACH chemicals compliance"),
        ["engineering", "procurement", "sustainability"], { en: "reach-compliance-challenge/" }, { min: 30, max: 30, unit: "minutes" }, "intermediate",
        ["P2", "P5"], [repository("sustainability-navigator", ["en"])], { legacyInternal: true }),

      resource("year-15-challenge", "application", "scenario-challenge",
        text("The Year 15 Challenge", "The Year 15 Challenge"),
        text("Aplicación de ingeniería y ecodiseño para explorar decisiones de ciclo de vida, mantenibilidad y extensión de la vida útil.", "An engineering and eco-design application for exploring life-cycle, maintainability and service-life extension decisions."),
        text("Ingeniería, ecodiseño y ciclo de vida", "Engineering, eco-design and life cycle"),
        ["engineering", "operations", "managers"], { en: "year-15-challenge/" }, { min: 35, max: 35, unit: "minutes" }, "advanced",
        ["P2", "P1"], [repository("sustainability-navigator", ["en"])], { legacyInternal: true })
    ]
  };
});
