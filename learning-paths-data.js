(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) module.exports = data;
  else root.SN_LEARNING_PATHS = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const text = (es, en) => ({ es, en });
  const explore = (id, pillarIds, rationale) => ({
    id, kind: "knowledge-explore", intention: "explore", requirement: "recommended-explore", pillarIds, rationale
  });
  const resource = (id, resourceId, intention, requirement, rationale, extra = {}) => ({
    id, kind: "resource", resourceId, intention, requirement, rationale, ...extra
  });
  const choice = (id, resourceIds, intention, rationale) => ({
    id, kind: "resource-choice", resourceIds, choiceGroupId: id, intention, requirement: "required", rationale
  });

  return {
    version: 1,
    paths: [
      {
        id: "sustainable-aviation-foundations",
        title: text("Fundamentos de Aviación Sostenible", "Sustainable Aviation Foundations"),
        purpose: text(
          "Construir una base común para reconocer los seis pilares de la sostenibilidad aeronáutica y sus principales interdependencias.",
          "Build a shared foundation for recognising the six sustainable-aviation pillars and their main interdependencies."
        ),
        audienceIds: ["general", "engineering", "operations", "managers", "sustainability"],
        startingLevel: "foundation",
        pillarIds: ["P1", "P2", "P3", "P4", "P5", "P6"],
        outcomes: text(
          ["Reconocer el alcance de los seis pilares.", "Explicar conceptos fundamentales de sostenibilidad en aviación.", "Aplicar los fundamentos a una decisión colaborativa o de misión.", "Comprobar conocimientos transversales."],
          ["Recognise the scope of the six pillars.", "Explain core sustainability concepts in aviation.", "Apply the foundations to a collaborative or mission decision.", "Check cross-cutting knowledge."]
        ),
        steps: [
          explore("foundations-explore", ["P1", "P2", "P3", "P4", "P5", "P6"], text(
            "Explora vocabulario y preguntas clave antes del curso. Esta recomendación no bloquea el progreso mientras el contenido siga pendiente de validación editorial.",
            "Explore key vocabulary and questions before the course. This recommendation does not block progress while the content awaits editorial validation."
          )),
          choice("foundations-course", ["introduction-sustainability-aviation", "sustainable-aviation-essentials"], "learn", text(
            "Elige una de las dos experiencias de fundamentos según el formato que mejor se adapte a tus necesidades.",
            "Choose one of the two foundation experiences according to the format that best fits your needs."
          )),
          resource("foundations-systems", "sustainability-systems-escape-room", "practice", "required", text(
            "Convierte la base conceptual en resolución colaborativa de problemas interdependientes.",
            "Turn the conceptual foundation into collaborative resolution of interconnected problems."
          )),
          resource("foundations-quest", "tas-sustainability-quest", "practice", "optional", text(
            "Consolida vocabulario y retos de sostenibilidad como actividad de equipo.",
            "Consolidate sustainability vocabulary and challenges as a team activity."
          )),
          resource("foundations-mission", "airpower-mission-green-2026", "apply", "optional", text(
            "Amplía la práctica con compromisos entre misión, rendimiento, resiliencia y responsabilidad.",
            "Extend practice through trade-offs between mission, performance, resilience and responsibility."
          )),
          resource("foundations-assessment", "tas-sustainability-knowledge-check", "assess", "required", text(
            "Comprueba los conocimientos transversales al finalizar la ruta.",
            "Check cross-cutting knowledge at the end of the path."
          ), { finalAssessment: true })
        ]
      },
      {
        id: "eco-design-circularity-materials",
        title: text("Ecodiseño, Circularidad y Materiales", "Eco-Design, Circularity & Materials"),
        purpose: text(
          "Recorrer el ciclo de decisión desde la inspiración y el diseño hasta los materiales, el cumplimiento, el mantenimiento y la extensión de vida.",
          "Follow the decision cycle from inspiration and design through materials, compliance, maintenance and life extension."
        ),
        audienceIds: ["engineering", "procurement", "maintenance", "sustainability", "innovation"],
        startingLevel: "intermediate",
        pillarIds: ["P2", "P1", "P3", "P5", "P6"],
        outcomes: text(
          ["Aplicar pensamiento de ciclo de vida.", "Relacionar innovación con materiales y trazabilidad.", "Reconocer obligaciones químicas relevantes.", "Comparar reparación, sustitución y extensión de vida."],
          ["Apply life-cycle thinking.", "Connect innovation with materials and traceability.", "Recognise relevant chemicals obligations.", "Compare repair, replacement and life extension."]
        ),
        steps: [
          explore("eco-design-explore", ["P2", "P3", "P5"], text(
            "Consulta conceptos de circularidad, ciclo de vida, materiales críticos y trazabilidad como apoyo opcional.",
            "Consult circularity, life-cycle, critical-material and traceability concepts as optional support."
          )),
          resource("eco-design-bio", "bio-inspired-innovation-lab", "practice", "required", text(
            "Comienza con observación e ideación antes de aplicar restricciones técnicas.",
            "Start with observation and ideation before applying technical constraints."
          )),
          resource("eco-design-minerals", "eco-retrofit-mineral-footprint", "practice", "required", text(
            "Traslada la idea al análisis de huella mineral y aprovisionamiento en retrofit.",
            "Move from the idea to mineral-footprint and sourcing analysis in retrofit work."
          )),
          resource("eco-design-reach", "reach-compliance-challenge", "apply", "required", text(
            "Introduce obligaciones y evidencia química antes de las decisiones In-Service.",
            "Introduce chemicals obligations and evidence before In-Service decisions."
          )),
          resource("eco-design-composites", "tassg-composite-guardian", "apply", "required", text(
            "Aplica materiales y cumplimiento a protección, reparación y mantenimiento de composites.",
            "Apply materials and compliance to composite protection, repair and maintenance."
          )),
          resource("eco-design-year-15", "year-15-challenge", "apply", "required", text(
            "Cierra la ruta con una decisión avanzada de ecodiseño, mantenibilidad y ciclo de vida.",
            "Close the path with an advanced eco-design, maintainability and life-cycle decision."
          ), { capstone: true })
        ]
      },
      {
        id: "responsible-supply-chain-compliance",
        title: text("Cadena de Suministro Responsable y Cumplimiento", "Responsible Supply Chain & Compliance"),
        purpose: text(
          "Progresar desde requisitos concretos hasta diligencia debida, análisis de riesgos y decisiones responsables sobre materiales y proveedores.",
          "Progress from specific requirements to due diligence, risk analysis and responsible decisions about materials and suppliers."
        ),
        audienceIds: ["procurement", "quality", "engineering", "managers", "sustainability"],
        startingLevel: "foundation",
        pillarIds: ["P5", "P1", "P2", "P4"],
        outcomes: text(
          ["Diferenciar evidencia, trazabilidad y diligencia debida.", "Aplicar un enfoque proporcional al riesgo.", "Reconocer fundamentos de ISPM-15 y REACH.", "Documentar vacíos, excepciones y acciones correctivas."],
          ["Distinguish evidence, traceability and due diligence.", "Apply a risk-proportionate approach.", "Recognise ISPM-15 and REACH foundations.", "Document gaps, exceptions and corrective actions."]
        ),
        steps: [
          explore("supply-explore", ["P5", "P1", "P2"], text(
            "Consulta cadena de valor, diligencia debida, riesgo y evidencia de proveedor como orientación recomendada.",
            "Consult value-chain, due-diligence, risk and supplier-evidence content as recommended orientation."
          )),
          resource("supply-phytosanitary", "phytosanitary-defender", "practice", "required", text(
            "Empieza con una obligación acotada y evidencia observable de nivel foundation.",
            "Start with a bounded obligation and observable foundation-level evidence."
          )),
          resource("supply-reach", "reach-compliance-challenge", "apply", "required", text(
            "Aumenta la complejidad mediante obligaciones y decisiones de cumplimiento químico.",
            "Increase complexity through chemicals obligations and compliance decisions."
          )),
          resource("supply-ethical", "ethical-armor", "apply", "required", text(
            "Amplía el foco hacia diligencia debida, minerales y gravedad del riesgo en la cadena.",
            "Broaden the focus to due diligence, minerals and severity of value-chain risk."
          ), { capstone: true }),
          resource("supply-minerals", "eco-retrofit-mineral-footprint", "apply", "optional", text(
            "Añade una decisión de aprovisionamiento y huella mineral vinculada al retrofit.",
            "Add a sourcing and mineral-footprint decision linked to retrofit work."
          )),
          resource("supply-resilience", "tass-readiness-resilience-simulator", "apply", "optional", text(
            "Conecta el suministro con preparación, continuidad y resiliencia operacional.",
            "Connect supply decisions with readiness, continuity and operational resilience."
          ))
        ]
      },
      {
        id: "sustainable-in-service-operations",
        title: text("Operaciones Sostenibles en Servicio", "Sustainable In-Service Operations"),
        purpose: text(
          "Integrar impactos locales, materiales, resiliencia y decisiones bajo presión durante la fase In-Service.",
          "Integrate local impacts, materials, resilience and decisions under pressure during the In-Service phase."
        ),
        audienceIds: ["in-service", "operations", "maintenance", "engineering", "flight-safety"],
        startingLevel: "foundation",
        pillarIds: ["P1", "P2", "P4", "P5", "P6"],
        outcomes: text(
          ["Interpretar ruido, hábitat, suelo y huella operacional.", "Integrar sostenibilidad con seguridad y continuidad.", "Evaluar mantenimiento y reparación de composites.", "Tomar decisiones interdependientes bajo presión."],
          ["Interpret noise, habitat, soil and operational footprint.", "Integrate sustainability with safety and continuity.", "Evaluate composite maintenance and repair.", "Make interconnected decisions under pressure."]
        ),
        steps: [
          explore("in-service-explore", ["P1", "P2", "P5", "P6"], text(
            "Consulta rendimiento, ruido, reparación, resiliencia y naturaleza como apoyo recomendado.",
            "Consult performance, noise, repair, resilience and nature content as recommended support."
          )),
          resource("in-service-noise", "noise-habitat-missions", "learn", "required", text(
            "Establece la base aplicada sobre ruido, hábitat y operaciones de servicio.",
            "Establish the applied foundation for noise, habitat and service operations."
          )),
          resource("in-service-composites", "tassg-composite-guardian", "practice", "required", text(
            "Introduce una decisión concreta de mantenimiento, reparación y vida útil.",
            "Introduce a concrete maintenance, repair and service-life decision."
          )),
          resource("in-service-soil", "strategic-soil-footprint-mapper", "practice", "required", text(
            "Amplía la unidad de análisis desde el componente al emplazamiento.",
            "Expand the unit of analysis from the component to the site."
          )),
          resource("in-service-readiness", "tass-readiness-resilience-simulator", "apply", "required", text(
            "Añade preparación, interdependencias y resiliencia de servicios.",
            "Add readiness, interdependencies and service resilience."
          )),
          resource("in-service-control", "sustainability-control-room", "apply", "required", text(
            "Integra la progresión en escenarios interdependientes y contrarreloj.",
            "Integrate the progression through interconnected, time-pressured scenarios."
          ), { capstone: true }),
          resource("in-service-diagnostic", "sustainability-knowledge-check-evidence", "assess", "optional", text(
            "Comprueba evidencia transversal sin presentarse como evaluación específica In-Service.",
            "Check cross-cutting evidence without presenting it as an In-Service-specific assessment."
          ))
        ]
      },
      {
        id: "nature-habitat-operational-risk",
        title: text("Naturaleza, Hábitat y Riesgo Operacional", "Nature, Habitat & Operational Risk"),
        purpose: text(
          "Conectar biodiversidad y naturaleza con decisiones sobre emplazamientos, hábitats, fauna, ruido, suelo y misiones.",
          "Connect biodiversity and nature with decisions about sites, habitats, wildlife, noise, soil and missions."
        ),
        audienceIds: ["environment", "operations", "flight-safety", "engineering", "sustainability"],
        startingLevel: "foundation",
        pillarIds: ["P6", "P1", "P3"],
        outcomes: text(
          ["Diferenciar clima, naturaleza, impacto y dependencia.", "Utilizar información específica del lugar.", "Relacionar hábitat, suelo y fauna con decisiones operacionales.", "Integrar naturaleza y seguridad en decisiones de misión."],
          ["Distinguish climate, nature, impact and dependency.", "Use location-specific information.", "Connect habitat, soil and wildlife with operational decisions.", "Integrate nature and safety into mission decisions."]
        ),
        steps: [
          explore("nature-explore", ["P6", "P1"], text(
            "Consulta biodiversidad, ecosistemas, conectividad, adaptación y ruido como exploración recomendada.",
            "Consult biodiversity, ecosystems, connectivity, adaptation and noise as recommended exploration."
          )),
          resource("nature-library", "sustainable-aviation-learning-library", "explore", "required", text(
            "Añade historias técnicas existentes antes de pasar a decisiones operacionales.",
            "Add existing technical stories before moving to operational decisions."
          )),
          resource("nature-bio", "bio-inspired-innovation-lab", "practice", "optional", text(
            "Estudia la naturaleza como fuente de estrategias además de como receptor de impactos.",
            "Study nature as a source of strategies as well as a receiver of impacts."
          )),
          resource("nature-noise", "noise-habitat-missions", "learn", "required", text(
            "Introduce progresivamente ruido, hábitat y operaciones de servicio.",
            "Progressively introduce noise, habitat and service operations."
          )),
          resource("nature-soil", "strategic-soil-footprint-mapper", "practice", "required", text(
            "Lleva el análisis a suelo, emplazamiento y huella territorial.",
            "Move the analysis to soil, site and territorial footprint."
          )),
          resource("nature-wildlife", "bio-radar-runway-prevention", "apply", "required", text(
            "Aplica la base a fauna en pista y seguridad operacional.",
            "Apply the foundation to runway wildlife and operational safety."
          ), { capstone: true }),
          resource("nature-mission", "airpower-mission-green-2026", "apply", "optional", text(
            "Amplía el análisis hacia compromisos ambientales y operacionales de misión.",
            "Extend the analysis to environmental and operational mission trade-offs."
          ))
        ]
      },
      {
        id: "evidence-systems-decision-making",
        title: text("Evidencia, Sistemas y Toma de Decisiones", "Evidence, Systems & Sustainability Decision-Making"),
        purpose: text(
          "Desarrollar la capacidad avanzada de evaluar evidencia, comprender sistemas y tomar decisiones de sostenibilidad bajo presión.",
          "Develop advanced capability to assess evidence, understand systems and make sustainability decisions under pressure."
        ),
        audienceIds: ["managers", "sustainability", "engineering", "operations"],
        startingLevel: "intermediate",
        pillarIds: ["P1", "P2", "P3", "P4", "P5", "P6"],
        outcomes: text(
          ["Evaluar alcance, método y límites de la evidencia.", "Analizar interdependencias y consecuencias no intencionadas.", "Incorporar incertidumbre y trazabilidad.", "Tomar y comprobar decisiones bajo presión."],
          ["Assess the scope, method and limits of evidence.", "Analyse interdependencies and unintended consequences.", "Incorporate uncertainty and traceability.", "Make and check decisions under pressure."]
        ),
        steps: [
          resource("decision-diagnostic", "sustainability-knowledge-check-evidence", "assess", "optional", text(
            "Detecta brechas antes de comenzar; es un diagnóstico, no la evaluación final.",
            "Identify gaps before starting; this is a diagnostic, not the final assessment."
          )),
          resource("decision-master", "sustainable-aviation-foundations-master", "learn", "required", text(
            "Aporta amplitud avanzada sobre fundamentos, sistemas y decisiones.",
            "Provide advanced breadth across foundations, systems and decisions."
          )),
          resource("decision-evidence", "sustainability-evidence-decisions", "learn", "required", text(
            "Profundiza en evaluación de evidencia y justificación de decisiones.",
            "Go deeper into evidence assessment and decision justification."
          )),
          resource("decision-systems", "sustainability-systems-escape-room", "practice", "required", text(
            "Practica la resolución colaborativa de conexiones sistémicas.",
            "Practise collaborative resolution of system connections."
          )),
          resource("decision-mission", "airpower-mission-green-2026", "apply", "required", text(
            "Aplica los principios a compromisos entre misión, rendimiento y responsabilidad.",
            "Apply the principles to trade-offs between mission, performance and responsibility."
          )),
          resource("decision-control", "sustainability-control-room", "apply", "required", text(
            "Añade interdependencia y presión temporal como culminación de la práctica.",
            "Add interdependence and time pressure as the culmination of practice."
          ), { capstone: true }),
          resource("decision-assessment", "tas-sustainability-knowledge-check", "assess", "required", text(
            "Comprueba los conocimientos transversales al finalizar la progresión.",
            "Check cross-cutting knowledge at the end of the progression."
          ), { finalAssessment: true })
        ]
      }
    ]
  };
});
