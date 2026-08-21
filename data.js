window.SN_DATA = (() => {
  const reviewDate = "2026-08-21";

  const sources = {
    "icao-env": { name: "ICAO · Environmental Protection", url: "https://www.icao.int/environmental-protection" },
    "easa-2025": { name: "EASA · European Aviation Environmental Report 2025", url: "https://www.easa.europa.eu/en/domains/environment/eaer" },
    "easa-resilience": { name: "EASA · Aviation adaptation and resilience", url: "https://www.easa.europa.eu/en/domains/environment/eaer/aviation-environmental-impacts/aviation-adaptation-and-resilience-climate" },
    "ghg-corporate": { name: "GHG Protocol · Corporate Standard", url: "https://ghgprotocol.org/corporate-standard" },
    "ghg-scope3": { name: "GHG Protocol · Scope 3 Standard", url: "https://ghgprotocol.org/corporate-value-chain-scope-3-standard" },
    "eu-circular": { name: "European Commission · Circular Economy", url: "https://environment.ec.europa.eu/strategy/circular-economy_en" },
    "eu-claims": { name: "European Commission · Green Claims", url: "https://environment.ec.europa.eu/topics/circular-economy-topics/green-claims_en" },
    "oecd-ai": { name: "OECD · AI Principles", url: "https://legalinstruments.oecd.org/en/instruments/oecd-legal-0449" },
    "esa-eo": { name: "ESA · Observing the Earth", url: "https://www.esa.int/Applications/Observing_the_Earth" },
    "ilo-transition": { name: "ILO · Just Transition", url: "https://www.ilo.org/topics-and-sectors/just-transition-towards-environmentally-sustainable-economies-and-societies" },
    "un-sdgs": { name: "United Nations · Sustainable Development Goals", url: "https://sdgs.un.org/goals" },
    "oecd-dd": { name: "OECD · Due diligence for responsible business conduct", url: "https://www.oecd.org/en/topics/due-diligence-for-responsible-business-conduct.html" },
    "ipcc-ar6": { name: "IPCC · AR6 Synthesis Report", url: "https://www.ipcc.ch/report/ar6/syr/" },
    "cbd-gbf": { name: "Convention on Biological Diversity · Global Biodiversity Framework", url: "https://www.cbd.int/gbf" },
    "tnfd": { name: "TNFD · Recommendations", url: "https://tnfd.global/recommendations/" }
  };

  const pillars = [
    { id: "P1", color: "#1689c9", title: { es: "Operaciones y rendimiento sostenibles", en: "Sustainable Operations & Performance" }, short: { es: "Rendimiento", en: "Performance" }, description: { es: "Energía, agua, emisiones, ruido y mejora operacional.", en: "Energy, water, emissions, noise and operational improvement." } },
    { id: "P2", color: "#168c87", title: { es: "Circularidad y materiales", en: "Circularity & Materials" }, short: { es: "Circularidad", en: "Circularity" }, description: { es: "Ciclo de vida, reparación, reutilización y materiales.", en: "Life cycle, repair, reuse and materials." } },
    { id: "P3", color: "#665ac7", title: { es: "Innovación y digital responsable", en: "Responsible Innovation & Digital" }, short: { es: "Innovación", en: "Innovation" }, description: { es: "IA, datos, evidencia, geointeligencia y límites.", en: "AI, data, evidence, geo-intelligence and limits." } },
    { id: "P4", color: "#c98228", title: { es: "Personas, capacidades y cultura", en: "People, Skills & Culture" }, short: { es: "Personas", en: "People" }, description: { es: "Competencias, liderazgo, inclusión y aprendizaje.", en: "Skills, leadership, inclusion and learning." } },
    { id: "P5", color: "#526c86", title: { es: "Cadena de valor resiliente", en: "Resilient Value Chain" }, short: { es: "Cadena de valor", en: "Value chain" }, description: { es: "Proveedores, diligencia debida, trazabilidad y riesgos.", en: "Suppliers, due diligence, traceability and risk." } },
    { id: "P6", color: "#4f824d", title: { es: "Clima, naturaleza y biodiversidad", en: "Climate, Nature & Biodiversity" }, short: { es: "Clima y naturaleza", en: "Climate & nature" }, description: { es: "Mitigación, adaptación, ecosistemas y dependencias.", en: "Mitigation, adaptation, ecosystems and dependencies." } }
  ];

  const owners = {
    P1: { es: "Operaciones / Calidad", en: "Operations / Quality" },
    P2: { es: "Ingeniería / Materiales", en: "Engineering / Materials" },
    P3: { es: "Digital / Innovación", en: "Digital / Innovation" },
    P4: { es: "Learning / Personas", en: "Learning / People" },
    P5: { es: "Compras / Riesgos", en: "Procurement / Risk" },
    P6: { es: "Sostenibilidad / Medioambiente", en: "Sustainability / Environment" }
  };

  const glossary = {
    P1: [
      ["Eficiencia operacional", "Operational efficiency", "Relación entre el resultado útil de una operación y los recursos, tiempo o energía empleados para obtenerlo.", "The relationship between the useful output of an operation and the resources, time or energy used to achieve it.", ["operations", "managers"], ["easa-2025"]],
      ["Intensidad energética", "Energy intensity", "Energía consumida por una unidad de actividad, producción o servicio. Debe leerse junto al consumo absoluto.", "Energy consumed per unit of activity, production or service. It should be read alongside absolute consumption.", ["operations", "engineering"], ["easa-2025"]],
      ["Eficiencia hídrica", "Water efficiency", "Uso del agua que reduce consumos y pérdidas manteniendo la función, la seguridad y la calidad requeridas.", "Water use that reduces consumption and losses while maintaining required function, safety and quality.", ["operations", "engineering"], ["eu-circular"]],
      ["Desempeño ambiental", "Environmental performance", "Resultado medible de la gestión de aspectos ambientales, expresado mediante indicadores y tendencias comparables.", "A measurable result of managing environmental aspects, expressed through comparable indicators and trends.", ["operations", "sustainability"], ["easa-2025"]],
      ["Inventario de gases de efecto invernadero", "Greenhouse-gas inventory", "Relación estructurada de fuentes y emisiones de gases de efecto invernadero dentro de límites definidos.", "A structured account of greenhouse-gas sources and emissions within defined boundaries.", ["operations", "sustainability"], ["ghg-corporate"]],
      ["Emisiones de alcance 1", "Scope 1 emissions", "Emisiones directas procedentes de fuentes que una organización posee o controla.", "Direct emissions from sources that an organisation owns or controls.", ["operations", "sustainability"], ["ghg-corporate"]],
      ["Emisiones de alcance 2", "Scope 2 emissions", "Emisiones indirectas asociadas a la generación de electricidad, vapor, calor o frío adquiridos.", "Indirect emissions associated with the generation of purchased electricity, steam, heat or cooling.", ["operations", "sustainability"], ["ghg-corporate"]],
      ["Calidad del aire local", "Local air quality", "Condición del aire en un área concreta, afectada por contaminantes y por las características del entorno y la actividad.", "The condition of air in a specific area, influenced by pollutants and by local environmental and activity patterns.", ["operations", "sustainability"], ["icao-env"]],
      ["Ruido aeronáutico", "Aircraft noise", "Sonido asociado a operaciones de aeronaves que se evalúa por exposición, contexto y efectos sobre las comunidades.", "Sound associated with aircraft operations, assessed through exposure, context and effects on communities.", ["operations", "engineering"], ["icao-env"]],
      ["Impacto absoluto", "Absolute impact", "Cantidad total de un impacto en un periodo. Puede aumentar aunque mejore un indicador de eficiencia relativa.", "The total amount of an impact over a period. It may rise even when a relative efficiency indicator improves.", ["operations", "managers"], ["easa-2025"]]
    ],
    P2: [
      ["Economía circular", "Circular economy", "Modelo que busca prevenir residuos y conservar el valor de productos, componentes y materiales durante más tiempo.", "A model that seeks to prevent waste and preserve the value of products, components and materials for longer.", ["engineering", "procurement"], ["eu-circular"]],
      ["Pensamiento de ciclo de vida", "Life-cycle thinking", "Enfoque que considera impactos y decisiones desde la extracción de recursos hasta el fin de vida.", "An approach that considers impacts and decisions from resource extraction through end of life.", ["engineering", "procurement"], ["eu-circular"]],
      ["Reparabilidad", "Repairability", "Capacidad de recuperar una función mediante diagnóstico, acceso, sustitución o reparación de elementos.", "The ability to restore function through diagnosis, access, replacement or repair of elements.", ["engineering", "operations"], ["eu-circular"]],
      ["Reutilización", "Reuse", "Nuevo uso de un producto o componente sin transformarlo en materia prima.", "The use of a product or component again without turning it into raw material.", ["engineering", "operations"], ["eu-circular"]],
      ["Remanufactura", "Remanufacturing", "Proceso industrial que devuelve un producto usado a una condición funcional definida mediante desmontaje y reacondicionamiento.", "An industrial process that returns a used product to a defined functional condition through disassembly and reconditioning.", ["engineering", "operations"], ["eu-circular"]],
      ["Reciclaje", "Recycling", "Transformación de residuos en materiales o sustancias para nuevos usos; no equivale por sí solo a circularidad.", "The transformation of waste into materials or substances for new uses; it does not by itself equal circularity.", ["operations", "procurement"], ["eu-circular"]],
      ["Material secundario", "Secondary material", "Material recuperado de residuos o productos usados y preparado para sustituir materia prima virgen.", "Material recovered from waste or used products and prepared to replace virgin raw material.", ["engineering", "procurement"], ["eu-circular"]],
      ["Pasaporte de materiales", "Material passport", "Registro estructurado de composición, procedencia y características relevantes para uso, reparación y fin de vida.", "A structured record of composition, origin and characteristics relevant to use, repair and end of life.", ["engineering", "digital"], ["eu-circular"]],
      ["Jerarquía de residuos", "Waste hierarchy", "Orden de preferencia que prioriza prevención, preparación para reutilización y reciclaje frente a eliminación.", "An order of preference that prioritises prevention, preparation for reuse and recycling over disposal.", ["operations", "procurement"], ["eu-circular"]],
      ["Materia prima crítica", "Critical raw material", "Recurso con importancia económica y riesgo de suministro elevados que requiere una gestión específica.", "A resource with high economic importance and supply risk that requires specific management.", ["engineering", "procurement"], ["eu-circular"]]
    ],
    P3: [
      ["Innovación responsable", "Responsible innovation", "Innovación que incorpora propósito, evidencia, riesgos, personas afectadas y consecuencias durante todo el ciclo de decisión.", "Innovation that considers purpose, evidence, risks, affected people and consequences throughout the decision cycle.", ["digital", "managers"], ["oecd-ai"]],
      ["Sistema de inteligencia artificial", "AI system", "Sistema basado en máquinas que produce predicciones, contenidos, recomendaciones o decisiones a partir de entradas.", "A machine-based system that produces predictions, content, recommendations or decisions from inputs.", ["digital", "engineering"], ["oecd-ai"]],
      ["Riesgo de IA", "AI risk", "Combinación de probabilidad y consecuencia de resultados adversos derivados del diseño, uso o contexto de un sistema de IA.", "The combination of likelihood and consequence of adverse outcomes arising from the design, use or context of an AI system.", ["digital", "managers"], ["oecd-ai"]],
      ["Gobernanza de datos", "Data governance", "Reglas, funciones y controles para gestionar calidad, acceso, seguridad, uso y ciclo de vida de los datos.", "Rules, roles and controls for managing data quality, access, security, use and life cycle.", ["digital", "managers"], ["oecd-ai"]],
      ["Supervisión humana", "Human oversight", "Capacidad real de personas competentes para comprender, cuestionar, detener o corregir el funcionamiento de un sistema.", "The real ability of competent people to understand, challenge, stop or correct how a system operates.", ["digital", "managers"], ["oecd-ai"]],
      ["Trazabilidad", "Traceability", "Capacidad de reconstruir la procedencia, cambios, supuestos y decisiones asociados a un dato o resultado.", "The ability to reconstruct the origin, changes, assumptions and decisions associated with data or an outcome.", ["digital", "engineering"], ["oecd-ai"]],
      ["Sobriedad digital", "Digital sobriety", "Diseño y uso de servicios digitales que busca limitar recursos, energía y complejidad sin perder la función necesaria.", "The design and use of digital services that seeks to limit resources, energy and complexity without losing necessary function.", ["digital", "engineering"], ["oecd-ai"]],
      ["Observación de la Tierra", "Earth observation", "Obtención de información sobre el planeta mediante sensores espaciales, aéreos o terrestres y su análisis.", "The collection of information about the planet through spaceborne, airborne or ground sensors and its analysis.", ["digital", "engineering"], ["esa-eo"]],
      ["Incertidumbre de modelo", "Model uncertainty", "Limitación asociada a datos, supuestos, estructura y contexto que condiciona la confianza en un resultado.", "A limitation associated with data, assumptions, structure and context that affects confidence in an outcome.", ["digital", "engineering"], ["oecd-ai"]],
      ["Afirmación basada en evidencia", "Evidence-based claim", "Mensaje cuyo alcance, método, datos, fecha y limitaciones permiten comprobar lo que realmente sostiene.", "A statement whose scope, method, data, date and limitations allow others to verify what it actually supports.", ["managers", "sustainability"], ["eu-claims"]]
    ],
    P4: [
      ["Competencia en sostenibilidad", "Sustainability competence", "Combinación de conocimientos, habilidades y actitudes para integrar impactos y consecuencias en una decisión.", "A combination of knowledge, skills and attitudes used to integrate impacts and consequences into a decision.", ["learning", "managers"], ["ilo-transition"]],
      ["Transición justa", "Just transition", "Cambio hacia una economía ambientalmente sostenible que busca inclusión, empleo digno y participación social.", "A shift towards an environmentally sustainable economy that seeks inclusion, decent work and social participation.", ["learning", "managers"], ["ilo-transition"]],
      ["Competencias verdes", "Green skills", "Capacidades necesarias para adaptar tareas, profesiones y decisiones a objetivos ambientales y sociales.", "Capabilities needed to adapt tasks, professions and decisions to environmental and social goals.", ["learning", "managers"], ["ilo-transition"]],
      ["Seguridad psicológica", "Psychological safety", "Condición de equipo en la que se pueden plantear dudas, errores o riesgos sin temor improcedente a represalias.", "A team condition in which doubts, mistakes or risks can be raised without undue fear of retaliation.", ["managers", "learning"], ["ilo-transition"]],
      ["Diálogo social", "Social dialogue", "Intercambio y negociación entre partes relevantes para comprender impactos y acordar cambios practicables.", "Exchange and negotiation among relevant parties to understand impacts and agree workable changes.", ["managers", "learning"], ["ilo-transition"]],
      ["Gestión del cambio", "Change management", "Disciplina para preparar, acompañar y consolidar cambios en comportamientos, procesos y responsabilidades.", "The discipline of preparing, supporting and sustaining changes in behaviour, processes and responsibilities.", ["managers", "learning"], ["ilo-transition"]],
      ["Transferencia del aprendizaje", "Learning transfer", "Aplicación efectiva en el trabajo de conocimientos o habilidades adquiridos durante una experiencia formativa.", "The effective application at work of knowledge or skills gained during a learning experience.", ["learning", "managers"], ["ilo-transition"]],
      ["Diseño inclusivo", "Inclusive design", "Diseño que incorpora diversidad de capacidades, contextos y necesidades para reducir barreras de participación.", "Design that includes diverse abilities, contexts and needs to reduce barriers to participation.", ["learning", "digital"], ["un-sdgs"]],
      ["Parte interesada", "Stakeholder", "Persona o grupo que afecta, puede verse afectado o tiene interés legítimo en una decisión o actividad.", "A person or group that affects, may be affected by, or has a legitimate interest in a decision or activity.", ["managers", "operations"], ["un-sdgs"]],
      ["Comunidad de práctica", "Community of practice", "Grupo que aprende y mejora una práctica compartiendo preguntas, experiencia, herramientas y resultados.", "A group that learns and improves a practice by sharing questions, experience, tools and results.", ["learning", "managers"], ["ilo-transition"]]
    ],
    P5: [
      ["Cadena de valor", "Value chain", "Conjunto de actividades y relaciones que crean un producto o servicio desde los recursos iniciales hasta su uso y fin de vida.", "The activities and relationships that create a product or service from initial resources through use and end of life.", ["procurement", "managers"], ["oecd-dd"]],
      ["Resiliencia de suministro", "Supply resilience", "Capacidad de anticipar, absorber, adaptarse y recuperarse ante interrupciones manteniendo funciones críticas.", "The ability to anticipate, absorb, adapt to and recover from disruption while maintaining critical functions.", ["procurement", "operations"], ["oecd-dd"]],
      ["Diligencia debida", "Due diligence", "Proceso continuo basado en riesgos para identificar, prevenir, mitigar y explicar cómo se abordan impactos adversos.", "An ongoing risk-based process to identify, prevent, mitigate and account for how adverse impacts are addressed.", ["procurement", "managers"], ["oecd-dd"]],
      ["Impacto", "Impact", "Cambio positivo o negativo sobre personas o medioambiente al que una actividad contribuye o con el que está vinculada.", "A positive or negative change affecting people or the environment to which an activity contributes or is linked.", ["procurement", "sustainability"], ["oecd-dd"]],
      ["Dependencia", "Dependency", "Recurso, servicio o condición externa que una actividad necesita para funcionar o mantener su valor.", "An external resource, service or condition that an activity needs to operate or retain value.", ["procurement", "sustainability"], ["tnfd"]],
      ["Enfoque basado en riesgos", "Risk-based approach", "Priorización proporcional a la gravedad y probabilidad del impacto, no solo al gasto o proximidad contractual.", "Prioritisation proportionate to severity and likelihood of impact, not only spend or contractual proximity.", ["procurement", "managers"], ["oecd-dd"]],
      ["Trazabilidad de proveedor", "Supplier traceability", "Capacidad de identificar actores, lugares, materiales y evidencias relevantes a lo largo de niveles de suministro.", "The ability to identify relevant actors, locations, materials and evidence across supply tiers.", ["procurement", "digital"], ["oecd-dd"]],
      ["Doble materialidad", "Double materiality", "Lectura conjunta de cómo la sostenibilidad afecta a la organización y de cómo la organización impacta en personas y planeta.", "A combined view of how sustainability affects the organisation and how the organisation affects people and planet.", ["managers", "sustainability"], ["oecd-dd"]],
      ["Emisiones de alcance 3", "Scope 3 emissions", "Emisiones indirectas de la cadena de valor no incluidas en el alcance 2, tanto aguas arriba como aguas abajo.", "Indirect value-chain emissions not included in scope 2, both upstream and downstream.", ["procurement", "sustainability"], ["ghg-scope3"]],
      ["Continuidad de negocio", "Business continuity", "Capacidad de mantener o recuperar actividades prioritarias dentro de niveles y plazos aceptables tras una interrupción.", "The ability to maintain or restore priority activities within acceptable levels and timeframes after disruption.", ["managers", "operations"], ["oecd-dd"]]
    ],
    P6: [
      ["Mitigación climática", "Climate mitigation", "Intervención orientada a reducir emisiones de gases de efecto invernadero o aumentar sus sumideros.", "An intervention aimed at reducing greenhouse-gas emissions or enhancing their sinks.", ["sustainability", "engineering"], ["ipcc-ar6"]],
      ["Adaptación climática", "Climate adaptation", "Ajuste a condiciones climáticas observadas o previstas para reducir daños o aprovechar oportunidades.", "Adjustment to observed or expected climate conditions to reduce harm or take advantage of opportunities.", ["operations", "sustainability"], ["ipcc-ar6", "easa-resilience"]],
      ["Biodiversidad", "Biodiversity", "Variabilidad de la vida en genes, especies y ecosistemas, junto con sus interacciones.", "The variability of life across genes, species and ecosystems, together with their interactions.", ["sustainability", "learning"], ["cbd-gbf"]],
      ["Ecosistema", "Ecosystem", "Conjunto dinámico de organismos y componentes físicos que interactúan como una unidad funcional.", "A dynamic complex of organisms and physical components interacting as a functional unit.", ["sustainability", "learning"], ["cbd-gbf"]],
      ["Servicios ecosistémicos", "Ecosystem services", "Contribuciones de los ecosistemas al bienestar y a la actividad humana, como regulación del agua o formación de suelo.", "Contributions of ecosystems to human well-being and activity, such as water regulation or soil formation.", ["sustainability", "procurement"], ["cbd-gbf"]],
      ["Dependencia de la naturaleza", "Nature-related dependency", "Aspecto de los servicios ecosistémicos del que dependen una organización, su cadena o sus activos.", "An aspect of ecosystem services on which an organisation, its value chain or its assets depend.", ["sustainability", "procurement"], ["tnfd"]],
      ["Impacto sobre la naturaleza", "Nature-related impact", "Cambio en el estado de la naturaleza causado o favorecido por una actividad, directa o indirectamente.", "A change in the state of nature caused or enabled by an activity, directly or indirectly.", ["sustainability", "operations"], ["tnfd"]],
      ["Conectividad ecológica", "Ecological connectivity", "Movimiento y flujo de organismos, genes y procesos entre áreas de hábitat.", "The movement and flow of organisms, genes and processes between habitat areas.", ["sustainability", "operations"], ["cbd-gbf"]],
      ["Solución basada en la naturaleza", "Nature-based solution", "Acción para proteger, gestionar o restaurar ecosistemas que aborda un reto social y aporta beneficios para personas y biodiversidad.", "Action to protect, manage or restore ecosystems that addresses a societal challenge and benefits people and biodiversity.", ["sustainability", "engineering"], ["cbd-gbf"]],
      ["Límites planetarios", "Planetary boundaries", "Marco científico sobre procesos del sistema Tierra y zonas de riesgo; no es una norma legal ni un cuadro de mando empresarial por sí solo.", "A scientific framework about Earth-system processes and risk zones; it is not by itself a legal standard or a corporate scorecard.", ["sustainability", "learning"], ["ipcc-ar6"]]
    ]
  };

  const faqs = {
    P1: [
      ["¿Puede la sostenibilidad mejorar el rendimiento operacional?", "Can sustainability improve operational performance?", "Puede revelar pérdidas de energía, agua, materiales, tiempo o calidad y orientar mejoras. El beneficio no debe suponerse: hay que definir una línea base, medir resultados y comprobar posibles desplazamientos de impacto.", "It can reveal losses in energy, water, materials, time or quality and guide improvement. Benefits should not be assumed: define a baseline, measure outcomes and check for impact shifting.", ["operations", "managers"], ["easa-2025"]],
      ["¿Con qué indicadores debería empezar un equipo?", "Which indicators should a team start with?", "Con pocos indicadores conectados a su proceso: actividad, consumo absoluto, intensidad, residuos, emisiones relevantes, calidad y seguridad. Cada indicador necesita alcance, unidad, fuente de datos, frecuencia y responsable.", "Start with a small set linked to the process: activity, absolute consumption, intensity, waste, relevant emissions, quality and safety. Each indicator needs scope, unit, data source, frequency and owner.", ["operations", "managers"], ["easa-2025"]],
      ["¿Por qué no basta con mejorar la eficiencia?", "Why is efficiency improvement not enough?", "Porque una mejora por unidad puede coexistir con un aumento del impacto total si crece la actividad. Conviene seguir intensidad y valores absolutos, además de calidad, seguridad y efectos secundarios.", "Because improvement per unit can coexist with higher total impact when activity grows. Track intensity and absolute values, as well as quality, safety and side effects.", ["operations", "managers"], ["easa-2025"]],
      ["¿Cómo se plantea una mejora operacional sostenible?", "How should a sustainable operational improvement be framed?", "Define el problema y los límites, identifica recursos e impactos, establece línea base, prueba a pequeña escala, revisa seguridad y calidad, y documenta resultado, incertidumbre y decisión.", "Define the problem and boundaries, identify resources and impacts, set a baseline, test at small scale, review safety and quality, and document outcome, uncertainty and decision.", ["operations", "engineering"], ["easa-2025"]],
      ["¿Qué impactos ambientales se consideran en aviación?", "Which environmental impacts are considered in aviation?", "Los marcos sectoriales tratan, entre otros, clima y emisiones, ruido y calidad del aire local. El alcance concreto depende de la actividad, la ubicación y la decisión analizada.", "Sector frameworks cover, among other areas, climate and emissions, noise and local air quality. The specific scope depends on the activity, location and decision being assessed.", ["operations", "sustainability"], ["icao-env", "easa-2025"]]
    ],
    P2: [
      ["¿Por qué reciclar no equivale a circularidad?", "Why is recycling not the same as circularity?", "La circularidad empieza por prevenir y diseñar para conservar valor. Reparar, reutilizar o remanufacturar puede mantener más función y valor que recuperar únicamente el material al final.", "Circularity starts with prevention and design for value retention. Repair, reuse or remanufacturing can preserve more function and value than recovering material only at the end.", ["engineering", "operations"], ["eu-circular"]],
      ["¿Cómo aplicar circularidad en un sector certificado?", "How can circularity be applied in a certified sector?", "Integrando requisitos de seguridad, calidad y certificación desde el inicio. Una opción circular solo es viable cuando su configuración, evidencia, trazabilidad y responsabilidades cumplen los requisitos aplicables.", "By integrating safety, quality and certification requirements from the start. A circular option is viable only when its configuration, evidence, traceability and responsibilities meet applicable requirements.", ["engineering", "managers"], ["eu-circular"]],
      ["¿Cómo priorizar una familia de materiales?", "How should a material family be prioritised?", "Combina volumen, criticidad, impacto, riesgo de suministro, posibilidad técnica de sustitución o recuperación y calidad de los datos. Declara los criterios y evita una clasificación basada en un único indicador.", "Combine volume, criticality, impact, supply risk, technical potential for substitution or recovery, and data quality. State the criteria and avoid ranking on a single indicator.", ["engineering", "procurement"], ["eu-circular"]],
      ["¿Qué debería medirse en un proyecto circular?", "What should be measured in a circular project?", "Además de masa desviada de residuo: vida útil, función conservada, contenido secundario, reparabilidad, consumo de recursos, calidad, coste, riesgos y destino final real.", "Beyond waste mass diverted: service life, function retained, secondary content, repairability, resource use, quality, cost, risks and actual final destination.", ["engineering", "operations"], ["eu-circular"]],
      ["¿Cómo gestionar un trade-off entre circularidad y seguridad?", "How should a circularity and safety trade-off be managed?", "La seguridad es una condición de diseño, no una variable para compensar. Compara alternativas dentro de requisitos no negociables y conserva evidencia de supuestos, ensayos, aprobaciones y límites de uso.", "Safety is a design condition, not a variable to trade away. Compare alternatives within non-negotiable requirements and retain evidence of assumptions, tests, approvals and limits of use.", ["engineering", "managers"], ["eu-circular"]]
    ],
    P3: [
      ["¿Qué hace responsable a una aplicación de IA?", "What makes an AI application responsible?", "Un propósito legítimo, datos adecuados, evaluación de riesgos, supervisión humana, seguridad, trazabilidad y seguimiento durante el uso. El nivel de control debe ser proporcional al contexto y las consecuencias.", "A legitimate purpose, suitable data, risk assessment, human oversight, security, traceability and monitoring in use. The level of control should match the context and consequences.", ["digital", "managers"], ["oecd-ai"]],
      ["¿Para qué sirve la observación de la Tierra en sostenibilidad?", "How can Earth observation support sustainability?", "Puede aportar medidas repetibles sobre territorio, agua, vegetación o cambios. Su utilidad depende de resolución, frecuencia, método, validación de terreno, incertidumbre y adecuación a la decisión.", "It can provide repeatable measurements of land, water, vegetation or change. Usefulness depends on resolution, frequency, method, ground validation, uncertainty and fitness for the decision.", ["digital", "engineering"], ["esa-eo"]],
      ["¿Cómo se evita el greenwashing en una herramienta digital?", "How can greenwashing be avoided in a digital tool?", "Vinculando cada afirmación a datos y fuente, delimitando alcance y periodo, explicando el método, mostrando límites y separando resultados observados de objetivos o estimaciones.", "Link each claim to data and a source, define scope and period, explain the method, show limitations and separate observed results from goals or estimates.", ["digital", "sustainability"], ["eu-claims"]],
      ["¿Qué debe definir un experimento de innovación sostenible?", "What should a sustainable innovation experiment define?", "Hipótesis, usuarios afectados, indicadores de función e impacto, límites, datos necesarios, criterio de parada, revisión de riesgos y decisión que se tomará con el resultado.", "A hypothesis, affected users, function and impact indicators, boundaries, required data, stop criteria, risk review and the decision the result will inform.", ["digital", "engineering"], ["oecd-ai"]],
      ["¿Cómo se valida una afirmación de sostenibilidad digital?", "How should a digital sustainability claim be validated?", "Comprueba qué sistema y ciclo de vida cubre, qué métrica usa, la calidad y fecha de los datos, el escenario de comparación y si se han incluido efectos indirectos o desplazamientos.", "Check the system and life cycle covered, the metric used, data quality and date, comparison scenario, and whether indirect effects or impact shifting are included.", ["digital", "sustainability"], ["eu-claims", "oecd-ai"]]
    ],
    P4: [
      ["¿Qué valor aporta una comunidad de sostenibilidad?", "What value can a sustainability community provide?", "Conecta preguntas con experiencia, comparte herramientas, acelera aprendizaje y hace visibles casos y límites. Su valor aumenta cuando tiene alcance, reglas, responsables y resultados verificables.", "It connects questions with experience, shares tools, accelerates learning and makes cases and limitations visible. Its value grows when it has scope, rules, owners and verifiable outcomes.", ["learning", "managers"], ["ilo-transition"]],
      ["¿Qué comportamientos de liderazgo ayudan?", "Which leadership behaviours help?", "Pedir evidencia, reconocer incertidumbre, escuchar a personas afectadas, proteger la posibilidad de plantear riesgos, asignar responsables y conectar objetivos con decisiones cotidianas.", "Ask for evidence, acknowledge uncertainty, listen to affected people, protect the ability to raise risks, assign owners and connect goals with everyday decisions.", ["managers", "learning"], ["ilo-transition"]],
      ["¿Qué competencias necesita un equipo técnico?", "Which skills does a technical team need?", "Pensamiento sistémico, alfabetización de datos, ciclo de vida, gestión de riesgos, colaboración interdisciplinar y capacidad para explicar supuestos y trade-offs, además de su especialidad técnica.", "Systems thinking, data literacy, life-cycle thinking, risk management, cross-disciplinary collaboration and the ability to explain assumptions and trade-offs, alongside technical expertise.", ["learning", "engineering"], ["ilo-transition"]],
      ["¿Cuándo una acción de voluntariado es creíble?", "When is a volunteering action credible?", "Cuando responde a una necesidad acordada, no sustituye obligaciones, cuenta con conocimiento adecuado, protege a participantes y entorno, y comunica resultados sin exagerar su escala.", "When it responds to an agreed need, does not replace obligations, has suitable expertise, protects participants and the environment, and communicates results without overstating scale.", ["learning", "sustainability"], ["un-sdgs"]],
      ["¿Cómo se mide el impacto del aprendizaje?", "How should learning impact be measured?", "Distingue participación, comprensión, aplicación y resultado. Combina evidencias como evaluación, observación de prácticas, calidad de entregables y cambios en indicadores del proceso.", "Distinguish participation, understanding, application and outcome. Combine evidence such as assessment, observation of practice, quality of deliverables and changes in process indicators.", ["learning", "managers"], ["ilo-transition"]]
    ],
    P5: [
      ["¿Cuál es el primer paso para entender una cadena de valor?", "What is the first step in understanding a value chain?", "Delimita el producto o servicio, mapea actividades, materiales, actores y ubicaciones, e identifica dónde faltan datos. Después analiza impactos, dependencias y riesgos prioritarios.", "Define the product or service, map activities, materials, actors and locations, and identify data gaps. Then assess priority impacts, dependencies and risks.", ["procurement", "managers"], ["oecd-dd"]],
      ["¿Cómo puede Compras contribuir a la sostenibilidad?", "How can Procurement contribute to sustainability?", "Integrando criterios verificables en requisitos, selección y seguimiento; pidiendo trazabilidad proporcional al riesgo; colaborando en mejoras; y documentando excepciones y decisiones.", "By integrating verifiable criteria into requirements, selection and monitoring; requesting risk-proportionate traceability; collaborating on improvement; and documenting exceptions and decisions.", ["procurement", "managers"], ["oecd-dd"]],
      ["¿Qué evidencia debería aportar un proveedor?", "What evidence should a supplier provide?", "Depende del riesgo y del requisito: alcance, datos, método, periodo, controles, cadena de custodia, certificaciones pertinentes y plan de corrección. Una declaración genérica no sustituye evidencia.", "It depends on the risk and requirement: scope, data, method, period, controls, chain of custody, relevant certification and corrective plan. A generic declaration is not a substitute for evidence.", ["procurement", "engineering"], ["oecd-dd"]],
      ["¿Cómo se relacionan resiliencia y sostenibilidad?", "How are resilience and sustainability related?", "Comprender dependencias, impactos y concentración de suministro puede revelar vulnerabilidades compartidas. No son equivalentes: una solución resiliente debe comprobar también sus efectos ambientales y sociales.", "Understanding dependencies, impacts and supply concentration can reveal shared vulnerabilities. They are not identical: a resilient solution must also be checked for environmental and social effects.", ["procurement", "managers"], ["oecd-dd"]],
      ["¿Cómo se priorizan riesgos de la cadena de valor?", "How should value-chain risks be prioritised?", "Considera gravedad, escala, alcance, posibilidad de reparación y probabilidad, además de criticidad para el negocio y calidad de información. La prioridad no debería depender solo del volumen de compra.", "Consider severity, scale, scope, remediability and likelihood, alongside business criticality and information quality. Priority should not depend only on purchasing volume.", ["procurement", "sustainability"], ["oecd-dd"]]
    ],
    P6: [
      ["¿Por qué la biodiversidad forma parte de la sostenibilidad?", "Why is biodiversity part of sustainability?", "Porque las actividades humanas dependen de sistemas vivos y también los modifican. Integrarla permite entender impactos, dependencias, resiliencia y trade-offs junto a clima, recursos y personas.", "Because human activities depend on living systems and also change them. Integrating biodiversity helps explain impacts, dependencies, resilience and trade-offs alongside climate, resources and people.", ["sustainability", "learning"], ["cbd-gbf", "tnfd"]],
      ["¿Cómo se relacionan clima y naturaleza?", "How are climate and nature connected?", "El cambio climático altera ecosistemas y la degradación de ecosistemas puede reducir resiliencia y capacidad de regulación. Las decisiones deben analizar ambas dimensiones y evitar soluciones que desplacen impactos.", "Climate change alters ecosystems, while ecosystem degradation can reduce resilience and regulation capacity. Decisions should assess both dimensions and avoid solutions that shift impacts.", ["sustainability", "engineering"], ["ipcc-ar6", "cbd-gbf"]],
      ["¿Qué acciones de centro pueden ser relevantes?", "Which site actions may be relevant?", "Según el contexto: reducir consumos y contaminación, gestionar agua y suelo, revisar iluminación, evitar especies invasoras, conservar hábitats y medir resultados. Una acción local necesita línea base y autorización aplicable.", "Depending on context: reduce resource use and pollution, manage water and soil, review lighting, avoid invasive species, conserve habitats and measure results. Local action needs a baseline and applicable approval.", ["operations", "sustainability"], ["cbd-gbf"]],
      ["¿Cómo se formula una afirmación segura sobre naturaleza?", "How should a robust nature claim be framed?", "Indica el lugar, periodo, métrica, línea base, método, resultado y límites. Evita expresiones como “positivo” o “restaurado” si no existe evidencia suficiente y validación competente.", "State the location, period, metric, baseline, method, outcome and limitations. Avoid terms such as ‘positive’ or ‘restored’ without sufficient evidence and competent validation.", ["sustainability", "managers"], ["eu-claims", "tnfd"]],
      ["¿Por qué es relevante la naturaleza para la aeronáutica?", "Why is nature relevant to aviation?", "Por las relaciones con energía, agua, suelo, materiales, infraestructuras, emisiones y cadenas de suministro. La relevancia concreta debe evaluarse por actividad y ubicación, sin atribuir automáticamente un impacto o una posición corporativa.", "Because of links with energy, water, soil, materials, infrastructure, emissions and supply chains. Specific relevance must be assessed by activity and location, without automatically attributing an impact or corporate position.", ["sustainability", "procurement"], ["icao-env", "tnfd"]]
    ]
  };

  const learningProfiles = {
    P1: {
      why: {
        es: "El rendimiento sostenible exige observar conjuntamente función, seguridad, calidad, recursos e impactos. Una mejora relativa puede ocultar un aumento del impacto total, por lo que conviene leer tendencias, valores absolutos e intensidad dentro del mismo límite operacional.",
        en: "Sustainable performance requires function, safety, quality, resources and impacts to be considered together. A relative improvement can hide an increase in total impact, so trends, absolute values and intensity should be read within the same operational boundary."
      },
      application: {
        es: "Define la operación —mantenimiento, ensayo, actividad de hangar, logística o uso de instalaciones—, fija una línea base y vincula cada indicador ambiental con una unidad de actividad y un resultado operacional. Revisa después si el cambio desplaza el impacto a otro turno, centro, proveedor o fase del ciclo de vida.",
        en: "Define the operation—maintenance, testing, hangar activity, logistics or facility use—set a baseline, and link each environmental indicator to an activity unit and an operational outcome. Then check whether the change shifts impact to another shift, site, supplier or life-cycle stage."
      },
      example: {
        es: "Un equipo compara dos formas de planificar una actividad de mantenimiento. Además del tiempo de ejecución, registra consumo absoluto, intensidad por orden de trabajo, calidad, incidencias y posibles efectos locales antes de recomendar una opción.",
        en: "A team compares two ways of scheduling a maintenance activity. Alongside completion time, it records absolute consumption, intensity per work order, quality, incidents and potential local effects before recommending an option."
      },
      checks: {
        es: ["¿El límite y la unidad de actividad están definidos?", "¿Se comparan valores absolutos e intensidad?", "¿La opción mantiene seguridad, calidad y cumplimiento?"],
        en: ["Are the boundary and activity unit defined?", "Are absolute values and intensity compared?", "Does the option maintain safety, quality and compliance?"]
      },
      limits: {
        es: "No extrapoles un resultado puntual a toda la organización. Separa medición de estimación, documenta cambios de actividad y confirma los requisitos locales aplicables.",
        en: "Do not extrapolate a one-off result to the whole organisation. Separate measurement from estimation, document activity changes and confirm applicable local requirements."
      }
    },
    P2: {
      why: {
        es: "La circularidad conserva función y valor durante más tiempo, pero en aeronáutica solo es defendible cuando incorpora aeronavegabilidad, configuración, calidad, trazabilidad y fin de vida. Reciclar es una opción; prevenir, reparar, reutilizar o remanufacturar pueden retener más valor.",
        en: "Circularity retains function and value for longer, but in aviation it is defensible only when airworthiness, configuration, quality, traceability and end of life are integrated. Recycling is one option; prevention, repair, reuse or remanufacturing may retain more value."
      },
      application: {
        es: "Delimita componente, material y función; identifica requisitos no negociables; compara alternativas a lo largo del ciclo de vida; y conserva evidencia sobre composición, procedencia, ensayos, aprobaciones, reparabilidad y destino final real.",
        en: "Define the component, material and function; identify non-negotiable requirements; compare alternatives across the life cycle; and retain evidence on composition, origin, tests, approvals, repairability and actual end destination."
      },
      example: {
        es: "Ante un retrofit, el equipo compara sustituir un conjunto completo, reparar módulos o recuperar componentes. La decisión considera vida útil, función conservada, masa, sustancias, disponibilidad, certificación, coste y trazabilidad, no solo residuo evitado.",
        en: "For a retrofit, the team compares replacing a complete assembly, repairing modules or recovering components. The decision considers service life, retained function, mass, substances, availability, certification, cost and traceability—not only avoided waste."
      },
      checks: {
        es: ["¿Qué función y valor se conservan?", "¿Qué evidencia demuestra composición y trazabilidad?", "¿Se han revisado certificación, seguridad y fin de vida?"],
        en: ["What function and value are retained?", "What evidence demonstrates composition and traceability?", "Have certification, safety and end of life been reviewed?"]
      },
      limits: {
        es: "No presentes una opción como circular basándote únicamente en porcentaje reciclado o masa desviada. Declara compromisos, pérdidas de calidad, transportes, tratamientos y límites de reutilización.",
        en: "Do not present an option as circular based only on recycled content or diverted mass. State trade-offs, quality losses, transport, treatments and reuse limits."
      }
    },
    P3: {
      why: {
        es: "Una solución digital no es sostenible ni responsable por defecto. Su valor depende del propósito, la calidad de los datos, la proporcionalidad del sistema, la supervisión humana y la capacidad de explicar incertidumbre, límites y consecuencias.",
        en: "A digital solution is not sustainable or responsible by default. Its value depends on purpose, data quality, system proportionality, human oversight and the ability to explain uncertainty, limitations and consequences."
      },
      application: {
        es: "Formula la decisión que la herramienta debe apoyar, identifica usuarios y personas afectadas, define datos y métricas, prueba con un caso limitado y establece controles humanos, criterios de parada, trazabilidad y seguimiento posterior al despliegue.",
        en: "State the decision the tool should support, identify users and affected people, define data and metrics, test a bounded use case, and establish human controls, stop criteria, traceability and post-deployment monitoring."
      },
      example: {
        es: "Un prototipo prioriza inspecciones mediante datos históricos. Antes de usarlo, el equipo comprueba representatividad, falsos positivos y negativos, explicabilidad, seguridad de la información, consumo de recursos y quién puede anular la recomendación.",
        en: "A prototype prioritises inspections using historical data. Before use, the team checks representativeness, false positives and negatives, explainability, information security, resource use and who can override the recommendation."
      },
      checks: {
        es: ["¿Qué decisión concreta mejora la herramienta?", "¿Los datos son adecuados, actuales y trazables?", "¿Existe supervisión humana y un criterio de parada?"],
        en: ["What specific decision does the tool improve?", "Are the data suitable, current and traceable?", "Is there human oversight and a stop criterion?"]
      },
      limits: {
        es: "No confundas correlación con causalidad ni una predicción con un hecho. Separa resultados observados, estimaciones y objetivos; evita automatizar una decisión de alto impacto sin control proporcional.",
        en: "Do not confuse correlation with causation or a prediction with a fact. Separate observed results, estimates and targets; avoid automating a high-impact decision without proportionate control."
      }
    },
    P4: {
      why: {
        es: "El conocimiento solo genera valor cuando cambia la calidad de una decisión o una práctica. La cultura de sostenibilidad necesita lenguaje común, seguridad para plantear riesgos, colaboración entre funciones y mecanismos que conviertan aprendizaje en comportamiento verificable.",
        en: "Knowledge creates value only when it changes the quality of a decision or practice. A sustainability culture needs shared language, safety to raise risks, cross-functional collaboration and mechanisms that turn learning into verifiable behaviour."
      },
      application: {
        es: "Define la conducta o decisión que debe mejorar, identifica el público y sus barreras, combina teoría con una práctica cercana al trabajo y verifica transferencia mediante observación, calidad del entregable o cambio en un indicador del proceso.",
        en: "Define the behaviour or decision to improve, identify the audience and its barriers, combine theory with work-relevant practice, and verify transfer through observation, deliverable quality or a change in a process indicator."
      },
      example: {
        es: "Tras una sesión sobre sostenibilidad, un equipo aplica una lista de comprobación a una decisión real y documenta supuestos, impactos y responsables. La evaluación distingue asistencia, comprensión, aplicación y resultado.",
        en: "After a sustainability session, a team applies a checklist to a real decision and documents assumptions, impacts and owners. Evaluation distinguishes attendance, understanding, application and outcome."
      },
      checks: {
        es: ["¿Qué comportamiento debe cambiar?", "¿La práctica reproduce una decisión laboral real?", "¿Cómo se comprobará la transferencia al puesto?"],
        en: ["What behaviour should change?", "Does the practice reproduce a real work decision?", "How will transfer to the job be verified?"]
      },
      limits: {
        es: "Participación y satisfacción no demuestran impacto por sí solas. Evita atribuir cambios organizativos a una única acción formativa y protege inclusión, voluntariedad y confidencialidad cuando corresponda.",
        en: "Participation and satisfaction do not demonstrate impact on their own. Avoid attributing organisational change to a single learning action, and protect inclusion, voluntariness and confidentiality where relevant."
      }
    },
    P5: {
      why: {
        es: "Los impactos, dependencias y riesgos pueden aparecer lejos del comprador directo. Una cadena resiliente requiere visibilidad proporcional al riesgo, requisitos verificables, capacidad de corrección y decisiones documentadas, no una declaración genérica del proveedor.",
        en: "Impacts, dependencies and risks may occur far beyond the direct supplier. A resilient chain requires risk-proportionate visibility, verifiable requirements, corrective capacity and documented decisions—not a generic supplier declaration."
      },
      application: {
        es: "Mapea materiales, procesos, actores y ubicaciones; identifica vacíos de información; prioriza por gravedad y posibilidad de reparación; solicita evidencia proporcionada; y define seguimiento, escalado, corrección y tratamiento de excepciones.",
        en: "Map materials, processes, actors and locations; identify information gaps; prioritise by severity and remediability; request proportionate evidence; and define monitoring, escalation, correction and exception handling."
      },
      example: {
        es: "Para un material crítico, Compras e Ingeniería revisan origen, cadena de custodia, sustancias, concentración de suministro, controles y alternativas. Si faltan datos, registran el vacío, el riesgo y la acción antes de aprobar una excepción.",
        en: "For a critical material, Procurement and Engineering review origin, chain of custody, substances, supply concentration, controls and alternatives. If data are missing, they record the gap, risk and action before approving an exception."
      },
      checks: {
        es: ["¿Hasta qué nivel de la cadena llega la evidencia?", "¿La exigencia es proporcional a gravedad y riesgo?", "¿Existen corrección, escalado y decisión documentada?"],
        en: ["How far down the chain does the evidence reach?", "Is the requirement proportionate to severity and risk?", "Are correction, escalation and the decision documented?"]
      },
      limits: {
        es: "Una certificación puede apoyar la diligencia debida, pero no sustituye el análisis del riesgo ni la responsabilidad de actuar. Declara alcance, fecha, organismo, exclusiones y límites de la evidencia.",
        en: "Certification can support due diligence, but it does not replace risk analysis or the responsibility to act. State its scope, date, body, exclusions and evidence limitations."
      }
    },
    P6: {
      why: {
        es: "Clima y naturaleza están conectados, pero no son intercambiables. Las decisiones deben considerar ubicación, estado ecológico, dependencias, impactos directos e indirectos y posibles desplazamientos entre carbono, agua, suelo, especies y personas.",
        en: "Climate and nature are connected, but they are not interchangeable. Decisions should consider location, ecological condition, dependencies, direct and indirect impacts, and potential shifts across carbon, water, soil, species and people."
      },
      application: {
        es: "Define la actividad y su área de influencia, consulta datos del lugar, identifica hábitats, especies, servicios ecosistémicos y personas afectadas, aplica la jerarquía evitar–minimizar–restaurar–compensar y establece línea base, indicador, seguimiento y responsabilidad.",
        en: "Define the activity and its area of influence, review location data, identify habitats, species, ecosystem services and affected people, apply the avoid–minimise–restore–offset hierarchy, and establish a baseline, indicator, monitoring and accountability."
      },
      example: {
        es: "Al evaluar una ampliación o cambio operativo, el equipo compara alternativas de ubicación y calendario antes de diseñar mitigaciones. Registra sensibilidad del hábitat, conectividad, iluminación, ruido, suelo, agua, incertidumbre y seguimiento.",
        en: "When assessing an expansion or operational change, the team compares location and timing alternatives before designing mitigation. It records habitat sensitivity, connectivity, lighting, noise, soil, water, uncertainty and monitoring."
      },
      checks: {
        es: ["¿La línea base es específica del lugar y la temporada?", "¿Se ha priorizado evitar antes que compensar?", "¿El resultado tiene indicador, seguimiento y límites declarados?"],
        en: ["Is the baseline specific to the place and season?", "Has avoidance been prioritised before offsetting?", "Does the outcome have an indicator, monitoring and stated limitations?"]
      },
      limits: {
        es: "No uses una acción local para afirmar un resultado neto o global sin método y evidencia suficientes. Evita extrapolar entre lugares, especies o periodos y confirma permisos y competencia técnica.",
        en: "Do not use a local action to claim a net or global outcome without sufficient method and evidence. Avoid extrapolating across places, species or periods, and confirm permits and technical competence."
      }
    }
  };

  const useGuide = {
    glossary: {
      es: "Utiliza el concepto para alinear el lenguaje del equipo y conviértelo después en un criterio observable: alcance, dato, requisito, responsable o evidencia. Una definición compartida es el punto de partida, no la decisión final.",
      en: "Use the concept to align team language, then translate it into an observable criterion: scope, data, requirement, owner or evidence. A shared definition is the starting point, not the final decision."
    },
    faq: {
      es: "Trata la respuesta como una hipótesis de trabajo. Contrástala con el contexto, los requisitos aplicables y la evidencia disponible; documenta qué cambia, qué permanece incierto y quién valida la decisión.",
      en: "Treat the answer as a working hypothesis. Test it against context, applicable requirements and available evidence; document what changes, what remains uncertain and who validates the decision."
    }
  };

  const pillarKeywords = {
    P1: ["operaciones", "operations", "mantenimiento", "maintenance", "hangar", "base", "ensayo", "testing", "rendimiento", "performance"],
    P2: ["ecodiseño", "ecodesign", "diseño", "design", "retrofit", "ciclo de vida", "life cycle", "componentes", "components"],
    P3: ["digital", "innovación", "innovation", "algoritmo", "algorithm", "modelo", "model", "decisiones", "decisions"],
    P4: ["personas", "people", "cultura", "culture", "formación", "training", "comunidad", "community"],
    P5: ["cadena de suministro", "supply chain", "logística", "logistics", "compras", "procurement", "proveedores", "suppliers"],
    P6: ["hábitat", "habitat", "fauna", "wildlife", "especies", "species", "territorio", "land", "naturaleza", "nature"]
  };

  const entryKeywords = {
    G018: ["REACH", "sustancias", "chemicals", "hazardous substances", "SCIP", "declaración de materiales"],
    F068: ["REACH", "sustancias peligrosas", "hazardous substances", "cumplimiento químico", "chemical compliance"],
    G021: ["biomímesis", "biomimicry", "bioinspiración", "bioinspiration"],
    G047: ["REACH", "ISPM-15", "NIMF-15", "embalajes", "packaging", "cadena de custodia", "chain of custody"],
    F083: ["REACH", "ISPM-15", "NIMF-15", "certificado fitosanitario", "phytosanitary certificate", "sustancias", "substances"],
    G053: ["especie clave", "keystone species", "murciélago", "bat", "polinizadores", "pollinators"],
    G054: ["humedal", "wetland", "especie clave", "keystone species", "murciélago", "bat"],
    G055: ["humedal", "wetland", "regulación hídrica", "water regulation", "polinización", "pollination"],
    G058: ["corredor ecológico", "ecological corridor", "rutas migratorias", "migration routes"],
    F088: ["bird strike", "riesgo de fauna", "wildlife hazard", "iluminación", "lighting", "invasoras", "invasive species"]
  };

  const entries = [];
  let sequence = 1;
  const addRows = (type, collection) => {
    for (const pillar of pillars) {
      collection[pillar.id].forEach(([titleEs, titleEn, bodyEs, bodyEn, audiences, sourceIds]) => {
        entries.push({
          id: `${type === "faq" ? "F" : "G"}${String(sequence++).padStart(3, "0")}`,
          type,
          pillar: pillar.id,
          title: { es: titleEs, en: titleEn },
          body: { es: bodyEs, en: bodyEn },
          audiences,
          sourceIds,
          owner: owners[pillar.id],
          reviewDate,
          status: { es: "Borrador · validar", en: "Draft · validate" }
        });
      });
    }
  };
  addRows("glossary", glossary);
  addRows("faq", faqs);

  entries.forEach(entry => {
    const profile = learningProfiles[entry.pillar];
    entry.keywords = [...pillarKeywords[entry.pillar], ...(entryKeywords[entry.id] || [])];
    entry.learning = {
      why: profile.why,
      application: profile.application,
      method: useGuide[entry.type],
      example: {
        es: `Ejemplo para «${entry.title.es}»: ${profile.example.es}`,
        en: `Example for “${entry.title.en}”: ${profile.example.en}`
      },
      checks: profile.checks,
      limits: profile.limits
    };
  });

  return { pillars, sources, entries, reviewDate };
})();
