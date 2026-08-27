(function () {
  "use strict";

  const t = (es, en) => ({ es, en });
  const copy = {
    hub: t("Volver al Hub", "Return to the Hub"),
    eyebrow: t("Curso de fundamentos · 150 min", "Foundation course · 150 min"),
    title: t("Fundamentos de Cadena de Suministro Responsable y Cumplimiento", "Responsible Supply Chain & Compliance Foundations"),
    lead: t("Aprende a convertir una cadena compleja en una secuencia visible de evidencias, riesgos, decisiones y responsabilidades.", "Learn to turn a complex supply chain into a visible sequence of evidence, risks, decisions and responsibilities."),
    map: t("Mapear", "Map"), verify: t("Verificar", "Verify"), prioritise: t("Priorizar", "Prioritise"), act: t("Actuar", "Act"), govern: t("Gobernar", "Govern"),
    beforeStart: t("Antes de comenzar", "Before you start"), objectivesTitle: t("Objetivos de aprendizaje", "Learning objectives"),
    scopeNote: t("Este curso ofrece fundamentos educativos. No sustituye asesoramiento jurídico, requisitos contractuales, procedimientos aprobados ni la evaluación de especialistas.", "This course provides educational foundations. It does not replace legal advice, contractual requirements, approved procedures or specialist assessment."),
    progress: t("módulos visitados", "modules visited"), previous: t("Anterior", "Previous"), next: t("Siguiente módulo", "Next module"), finish: t("Ir al ejercicio final", "Go to final exercise"),
    module: t("Módulo", "Module"), final: t("Ejercicio final", "Final exercise"), concepts: t("Conceptos esenciales", "Essential concepts"), miniCase: t("Mini-caso aplicado", "Applied mini-case"), analysis: t("Análisis guiado", "Guided analysis"),
    check: t("Comprobación breve", "Short knowledge check"), checkAction: t("Comprobar respuestas", "Check answers"), answerAll: t("Responde las dos preguntas para continuar.", "Answer both questions to continue."),
    result: t((n) => `${n} de 2 respuestas correctas. Revisa el feedback y continúa: esto es práctica, no una calificación.`, (n) => `${n} of 2 answers correct. Review the feedback and continue: this is practice, not a grade.`),
    correct: t("Correcto. ", "Correct. "), review: t("Revisar. ", "Review. "), finalAction: t("Revisar el ejercicio integrado", "Review the integrated exercise"),
    finalIncomplete: t("Responde todas las decisiones antes de revisar el ejercicio.", "Answer every decision before reviewing the exercise."),
    completedTitle: t("Curso completado", "Course completed"),
    completedBody: t("Has recorrido los fundamentos y completado el ejercicio integrado. La finalización se guardará en este navegador; no representa una calificación ni asesoramiento jurídico.", "You have worked through the foundations and completed the integrated exercise. Completion will be stored in this browser; it is not a grade or legal advice."),
    revisit: t("Puedes volver a cualquier módulo para revisar los conceptos.", "You can return to any module to review the concepts.")
  };

  const objectives = t([
    "Representar una cadena multinivel y distinguir visibilidad de trazabilidad.",
    "Evaluar la calidad y los límites de la evidencia de cumplimiento.",
    "Aplicar diligencia debida proporcional al riesgo a minerales y derechos humanos.",
    "Escalar riesgos y definir acciones correctivas verificables.",
    "Distinguir REACH, requisitos de producto e ISPM-15.",
    "Asignar responsabilidades y conservar una gobernanza auditable."
  ], [
    "Map a multi-tier chain and distinguish visibility from traceability.",
    "Assess the quality and limits of compliance evidence.",
    "Apply risk-based due diligence to minerals and human-rights risks.",
    "Escalate risks and define verifiable corrective action.",
    "Distinguish REACH, product requirements and ISPM-15.",
    "Assign responsibilities and maintain auditable governance."
  ]);

  const modules = [
    {
      id: "map", title: t("Ver la cadena más allá del Tier 1", "See beyond Tier 1"),
      intro: t("Un proveedor directo no es toda la cadena. El primer control es representar quién suministra qué, dónde ocurre la transformación y qué información falta.", "A direct supplier is not the whole chain. The first control is to show who supplies what, where transformation occurs and what information is missing."),
      sections: t([
        ["Tier mapping", "Tier 1 contrata directamente con tu organización. Tier 2 suministra al Tier 1; los niveles posteriores pueden incluir distribuidores, smelters, minas, productores químicos, fabricantes de madera o subcontratistas. El número de tier describe una relación contractual, no la gravedad del riesgo."],
        ["Visibilidad, trazabilidad y chain of custody", "Visibilidad significa saber qué actores y lugares pueden intervenir. Trazabilidad conecta material, lote o declaración con pasos concretos. Chain of custody documenta cómo se transfiere la identidad o un atributo a través de esos pasos. Una lista de proveedores da visibilidad parcial; no prueba origen ni custodia."],
        ["Mapear para decidir", "Empieza por el producto y su función, identifica materiales, sustancias y embalajes críticos, dibuja actores y transformaciones, añade ubicaciones y registra huecos. Prioriza los nodos que podrían afectar airworthiness, continuidad, personas o medio ambiente."]
      ], [
        ["Tier mapping", "Tier 1 contracts directly with your organisation. Tier 2 supplies Tier 1; later tiers may include distributors, smelters, mines, chemical producers, timber manufacturers or subcontractors. Tier number describes a contractual relationship, not risk severity."],
        ["Visibility, traceability and chain of custody", "Visibility means knowing which actors and locations may be involved. Traceability connects material, batch or declaration to specific steps. Chain of custody records how identity or an attribute is transferred through those steps. A supplier list offers partial visibility; it does not prove origin or custody."],
        ["Map to decide", "Start with the product and its function, identify critical materials, substances and packaging, draw actors and transformations, add locations and record gaps. Prioritise nodes that could affect airworthiness, continuity, people or the environment."]
      ]),
      flow: t([["Need", "Mission computer retrofit"],["Tier 1", "Equipment integrator"],["Tier 2", "Board manufacturer"],["Tier 3", "Smelter / chemical formulator"],["Source", "Mine / raw-material producer"]], [["Need", "Mission computer retrofit"],["Tier 1", "Equipment integrator"],["Tier 2", "Board manufacturer"],["Tier 3", "Smelter / chemical formulator"],["Source", "Mine / raw-material producer"]]),
      caseTitle: t("Un conector crítico con origen desconocido", "A critical connector with unknown origin"),
      case: t("El integrador confirma el país de montaje y entrega una lista de Tier 1, pero no identifica el smelter del estaño. El programa tiene visibilidad del montaje, no trazabilidad suficiente del mineral.", "The integrator confirms the assembly country and provides a Tier 1 list, but does not identify the tin smelter. The programme has assembly visibility, not sufficient mineral traceability."),
      analysis: t("No se debe asumir incumplimiento ni cerrar el asunto. Registra el gap, solicita la cadena relevante y prioriza según severidad, exposición y capacidad de influencia.", "Do not assume non-compliance or close the matter. Record the gap, request the relevant chain and prioritise according to severity, exposure and leverage."),
      questions: [
        { q:t("¿Qué demuestra por sí sola una lista de Tier 1?","What does a Tier 1 list prove by itself?"), options:t(["El origen del mineral","Visibilidad de los proveedores directos","Una chain of custody completa"],["Mineral origin","Visibility of direct suppliers","A complete chain of custody"]), correct:1, feedback:t("Identifica relaciones directas, pero no demuestra los pasos upstream.","It identifies direct relationships but does not prove upstream steps.") },
        { q:t("¿Qué debe conservar el mapa además de actores conocidos?","What should the map retain as well as known actors?"), options:t(["Solo precios","Huecos y supuestos","Solo países de montaje"],["Prices only","Gaps and assumptions","Assembly countries only"]), correct:1, feedback:t("Los huecos visibles permiten decidir qué evidencia pedir y dónde escalar.","Visible gaps support decisions about evidence requests and escalation.") }
      ]
    },
    {
      id:"evidence", title:t("Construir evidencia que responda a la pregunta", "Build evidence that answers the question"),
      intro:t("Un documento puede ser auténtico y aun así no responder a la decisión. La calidad depende del propósito, alcance, identidad, fecha, método y posibilidad de verificación.", "A document can be authentic and still fail to answer the decision. Quality depends on purpose, scope, identity, date, method and verifiability."),
      sections:t([
        ["Evidencia no es volumen documental", "Una declaración de proveedor, un certificado de sistema, un resultado de ensayo, una SDS y un registro de lote responden a preguntas diferentes. Ninguno debe usarse fuera de su alcance."],
        ["Prueba de calidad", "Comprueba: quién emitió la evidencia; qué producto, instalación, lote y periodo cubre; qué método se utilizó; qué exclusiones existen; si puede relacionarse con la pieza o envío; y quién la revisó."],
        ["Cadena de evidencia", "Una conclusión defendible conecta requisito → objeto afectado → evidencia → revisión → decisión → acción. Guarda versión y fecha: una evidencia correcta hoy puede quedar desactualizada tras un cambio de material, proveedor o proceso."]
      ],[
        ["Evidence is not document volume", "A supplier declaration, management-system certificate, test result, SDS and batch record answer different questions. None should be used outside its scope."],
        ["Quality test", "Check who issued the evidence; which product, facility, batch and period it covers; which method was used; what is excluded; whether it connects to the part or shipment; and who reviewed it."],
        ["Evidence chain", "A defensible conclusion connects requirement → affected object → evidence → review → decision → action. Retain version and date: evidence that is correct today may become outdated after a material, supplier or process change."]
      ]),
      flow:t([["Requirement","What must be shown?"],["Object","Which part, material or shipment?"],["Evidence","What is the source and scope?"],["Review","Who checked limitations?"],["Decision","What can be concluded?"]],[["Requirement","What must be shown?"],["Object","Which part, material or shipment?"],["Evidence","What is the source and scope?"],["Review","Who checked limitations?"],["Decision","What can be concluded?"]]),
      caseTitle:t("Un certificado ISO para una pregunta de producto", "An ISO certificate for a product question"),
      case:t("El proveedor responde a una solicitud de composición de una pieza con su certificado de sistema de gestión. El certificado puede apoyar confianza en el proceso, pero no demuestra la composición de esa pieza.", "The supplier answers a part-composition request with its management-system certificate. The certificate may support process confidence, but it does not prove the composition of that part."),
      analysis:t("Pide evidencia vinculada al producto y al requisito: declaración de material, ensayo, registro de lote u otra prueba apropiada. Conserva el certificado solo para la pregunta que realmente responde.", "Request evidence linked to the product and requirement: material declaration, test, batch record or other appropriate proof. Retain the certificate only for the question it actually answers."),
      questions:[
        {q:t("¿Qué hace fuerte una evidencia?","What makes evidence strong?"),options:t(["Que tenga muchas páginas","Que su alcance y método respondan a la pregunta","Que use un logotipo conocido"],["Many pages","Scope and method that answer the question","A familiar logo"]),correct:1,feedback:t("La pertinencia y la trazabilidad importan más que la apariencia.","Relevance and traceability matter more than appearance.")},
        {q:t("¿Qué cambio exige revisar evidencia existente?","Which change requires existing evidence to be reviewed?"),options:t(["Un nuevo proveedor o proceso","Un nuevo color de presentación","Un cambio de reunión interna"],["A new supplier or process","A new presentation colour","A change to an internal meeting"]),correct:0,feedback:t("Un cambio material en la cadena puede invalidar alcance, fecha o correspondencia.","A material chain change can invalidate scope, date or correspondence.")}
      ]
    },
    {
      id:"due-diligence", title:t("Priorizar riesgos y ejercer diligencia debida", "Prioritise risk and conduct due diligence"),
      intro:t("Diligencia debida no es una colección anual de formularios. Es un proceso continuo para identificar, prevenir, mitigar, seguir y comunicar impactos y riesgos.", "Due diligence is not an annual collection of forms. It is an ongoing process to identify, prevent, mitigate, track and communicate impacts and risks."),
      sections:t([
        ["Enfoque basado en riesgo", "No todos los gaps merecen la misma respuesta. Considera gravedad del posible impacto, probabilidad o exposición, capacidad de influencia, urgencia y reversibilidad. La ausencia de evidencia aumenta incertidumbre; no demuestra automáticamente que ocurrió un daño."],
        ["Minerales responsables", "El análisis sigue el material hasta smelters, refinadores y origen cuando sea relevante. Busca riesgos como abusos graves de derechos humanos, apoyo a grupos armados, fraude de origen, corrupción o pagos indebidos. Una etiqueta ‘conflict-free’ no reemplaza una cadena de evidencia."],
        ["Derechos humanos", "Incluye trabajadores directos y contratados, comunidades, pueblos indígenas y personas afectadas por tierra, recursos o seguridad. Prioriza la severidad del impacto sobre la facilidad de cerrar una acción administrativa."]
      ],[
        ["Risk-based approach", "Not every gap requires the same response. Consider severity of potential impact, likelihood or exposure, leverage, urgency and reversibility. Missing evidence increases uncertainty; it does not automatically prove harm."],
        ["Responsible minerals", "Analysis follows material to smelters, refiners and origin where relevant. Look for risks such as serious human-rights abuses, support to armed groups, origin fraud, corruption or improper payments. A ‘conflict-free’ label does not replace an evidence chain."],
        ["Human rights", "Include direct and contracted workers, communities, Indigenous Peoples and people affected by land, resources or security. Prioritise impact severity over the ease of closing an administrative action."]
      ]),
      flow:t([["Identify","Impacts, red flags, gaps"],["Prioritise","Severity, exposure, urgency"],["Act","Prevent, mitigate, cease"],["Track","Evidence of implementation and outcome"],["Communicate","Accurate, bounded conclusion"]],[["Identify","Impacts, red flags, gaps"],["Prioritise","Severity, exposure, urgency"],["Act","Prevent, mitigate, cease"],["Track","Evidence of implementation and outcome"],["Communicate","Accurate, bounded conclusion"]]),
      caseTitle:t("Smelter declarado, pago inexplicado", "Declared smelter, unexplained payment"),
      case:t("El origen declarado parece permitido, pero una factura incluye un pago a un intermediario sin función clara en una región de alto riesgo.", "The declared origin appears permitted, but an invoice includes a payment to an intermediary with no clear function in a high-risk region."),
      analysis:t("No basta con validar el país. Preserva la evidencia, escala el red flag, investiga el flujo económico y ajusta la compra según la gravedad y el resultado. No acuses sin evidencia.", "Validating the country is not enough. Preserve evidence, escalate the red flag, investigate the economic flow and adjust purchasing according to severity and findings. Do not accuse without evidence."),
      questions:[
        {q:t("¿Qué debe guiar primero la priorización de impactos de derechos humanos?","What should first guide prioritisation of human-rights impacts?"),options:t(["La facilidad de cerrar la acción","La severidad para las personas","El valor del contrato únicamente"],["Ease of closing the action","Severity for people","Contract value only"]),correct:1,feedback:t("La diligencia debida prioriza los impactos más graves, sin ignorar probabilidad y contexto.","Due diligence prioritises the most severe impacts while considering likelihood and context.")},
        {q:t("¿Qué significa un gap de trazabilidad?","What does a traceability gap mean?"),options:t(["Prueba automática de abuso","Incertidumbre que debe evaluarse","Aprobación automática"],["Automatic proof of abuse","Uncertainty to assess","Automatic approval"]),correct:1,feedback:t("El gap modifica el nivel de confianza y la respuesta; no establece por sí solo el hecho.","The gap changes confidence and response; it does not establish the fact by itself.")}
      ]
    },
    {
      id:"supplier-action", title:t("Escalar y corregir sin ocultar el riesgo", "Escalate and correct without hiding risk"),
      intro:t("Una escalada eficaz conecta el hallazgo con una decisión, un responsable, una fecha y evidencia de cierre. Cambiar de proveedor no siempre elimina el impacto.", "Effective escalation connects a finding to a decision, owner, date and closure evidence. Changing supplier does not always remove the impact."),
      sections:t([
        ["Escalation ladder", "Aclara primero un gap menor; eleva a quality, compliance, engineering, procurement o legal según el requisito y la severidad; activa dirección cuando el riesgo excede autoridad, tolerancia o plazo. Las responsabilidades deben definirse antes de una crisis."],
        ["Acción correctiva", "Una acción robusta define causa raíz, contención inmediata, corrección, prevención de recurrencia, responsable, fecha, evidencia y criterio de eficacia. ‘Proveedor informado’ no es cierre."],
        ["Leverage y disengagement", "Usa especificaciones, contratos, desarrollo de proveedor, volumen y colaboración para mejorar. La suspensión o salida puede ser necesaria ante riesgos graves, pero debe evaluar si desplaza el daño a trabajadores o comunidades."]
      ],[
        ["Escalation ladder", "Clarify a minor gap first; elevate to quality, compliance, engineering, procurement or legal according to requirement and severity; involve leadership when risk exceeds authority, tolerance or timing. Responsibilities should be defined before a crisis."],
        ["Corrective action", "A robust action defines root cause, immediate containment, correction, recurrence prevention, owner, due date, evidence and effectiveness criterion. ‘Supplier informed’ is not closure."],
        ["Leverage and disengagement", "Use specifications, contracts, supplier development, volume and collaboration to improve. Suspension or exit may be necessary for severe risks, but assess whether it displaces harm to workers or communities."]
      ]),
      flow:t([["Finding","What failed or is unknown?"],["Contain","Protect product, people and mission"],["Correct","Remove immediate nonconformity"],["Prevent","Address root cause"],["Verify","Did the control work?"]],[["Finding","What failed or is unknown?"],["Contain","Protect product, people and mission"],["Correct","Remove immediate nonconformity"],["Prevent","Address root cause"],["Verify","Did the control work?"]]),
      caseTitle:t("Cambio de acabado antes del retrofit", "Finish change before retrofit"),
      case:t("Quality detecta que el proveedor cambió un acabado sin actualizar la declaración química. La pieza cumple dimensiones, pero composición, cualificación y requisitos de sustancia no están demostrados.", "Quality finds that a supplier changed a finish without updating the chemical declaration. The part meets dimensions, but composition, qualification and substance requirements are not demonstrated."),
      analysis:t("Contén el lote, evalúa airworthiness y exposición, solicita evidencia actualizada, determina causa raíz y verifica la eficacia antes de liberar. Procurement no debe cerrar unilateralmente un asunto técnico-regulatorio.", "Contain the batch, assess airworthiness and exposure, request updated evidence, determine root cause and verify effectiveness before release. Procurement should not close a technical-regulatory issue alone."),
      questions:[
        {q:t("¿Cuál es una evidencia válida de cierre?","What is valid closure evidence?"),options:t(["Un correo que dice ‘resuelto’","Prueba de implementación y eficacia frente al criterio","El paso del tiempo"],["An email saying ‘resolved’","Evidence of implementation and effectiveness against the criterion","Passage of time"]),correct:1,feedback:t("El cierre debe poder verificarse contra el requisito y el resultado esperado.","Closure must be verifiable against the requirement and expected outcome.")},
        {q:t("¿Quién debe decidir un cambio químico con posible efecto en airworthiness?","Who should decide a chemical change with potential airworthiness impact?"),options:t(["Procurement en solitario","Las funciones técnicas y de cumplimiento definidas","El proveedor sin informar"],["Procurement alone","Defined technical and compliance functions","The supplier without notification"]),correct:1,feedback:t("La gobernanza debe reunir la autoridad y competencia adecuadas.","Governance must bring together appropriate authority and competence.")}
      ]
    },
    {
      id:"requirements", title:t("Distinguir REACH, producto e ISPM-15", "Distinguish REACH, product requirements and ISPM-15"),
      intro:t("‘Cumplimiento’ no es una pregunta única. Sustancias, prestaciones del producto y embalajes de madera tienen objetos, evidencias y responsables diferentes.", "‘Compliance’ is not one question. Substances, product performance and wood packaging have different objects, evidence and owners."),
      sections:t([
        ["REACH", "REACH aborda sustancias químicas y obligaciones que dependen del rol, sustancia, concentración, uso y cadena. Una restricción, una obligación de información o una autorización no equivalen automáticamente a prohibir una pieza. Verifica el requisito y el uso concreto con especialistas."],
        ["Requisitos de producto", "Airworthiness, especificación, configuración, ensayo, proceso aprobado y requisitos contractuales pueden exigir prestaciones adicionales. Una alternativa química ‘más segura’ no puede introducir un fallo técnico; tampoco una aprobación técnica elimina obligaciones químicas."],
        ["ISPM-15", "ISPM-15 se aplica a determinados embalajes de madera en comercio internacional y busca reducir la propagación de plagas. Revisa alcance, material, marca legible, código de país/productor, tratamiento y signos físicos. No confundas una marca con un certificado fitosanitario ni la regla con todo producto de madera."]
      ],[
        ["REACH", "REACH addresses chemical substances and obligations that depend on role, substance, concentration, use and supply chain. A restriction, information duty or authorisation does not automatically mean a part is banned. Verify the specific requirement and use with specialists."],
        ["Product requirements", "Airworthiness, specification, configuration, testing, approved process and contractual requirements may demand additional performance. A ‘safer’ chemical alternative must not introduce technical failure; equally, technical approval does not remove chemical obligations."],
        ["ISPM-15", "ISPM-15 applies to certain wood packaging in international trade and aims to reduce pest spread. Review scope, material, legible mark, country/producer code, treatment and physical signs. Do not confuse a mark with a phytosanitary certificate or apply the rule to every wood product."]
      ]),
      flow:t([["Chemical substance","REACH role and obligation"],["Part / process","Technical and airworthiness requirements"],["Wood packaging","ISPM-15 scope and mark"],["Shipment","Customs, contract and destination controls"]],[["Chemical substance","REACH role and obligation"],["Part / process","Technical and airworthiness requirements"],["Wood packaging","ISPM-15 scope and mark"],["Shipment","Customs, contract and destination controls"]]),
      caseTitle:t("Pieza conforme, caja no conforme", "Compliant part, non-compliant crate"),
      case:t("Una unidad reparada tiene documentación técnica y química aceptada. Llega en una caja de madera internacional con marca ilegible y corteza visible.", "A repaired unit has accepted technical and chemical documentation. It arrives in an international wood crate with an illegible mark and visible bark."),
      analysis:t("La conformidad de la pieza no resuelve el riesgo del embalaje. Segrega la decisión: protege el material, detén o controla la caja según procedimiento, verifica alcance y evidencia ISPM-15 y coordina con logística/calidad.", "Part compliance does not resolve the packaging risk. Separate the decision: protect the material, hold or control the crate under procedure, verify ISPM-15 scope and evidence, and coordinate with logistics/quality."),
      questions:[
        {q:t("¿Una aprobación técnica prueba automáticamente cumplimiento REACH?","Does technical approval automatically prove REACH compliance?"),options:t(["Sí","No, responden a preguntas diferentes","Solo si la pieza es cara"],["Yes","No, they answer different questions","Only if the part is expensive"]),correct:1,feedback:t("La evidencia técnica y la química deben conectarse, pero no son intercambiables.","Technical and chemical evidence must connect, but they are not interchangeable.")},
        {q:t("¿Qué objeto controla principalmente ISPM-15 en este caso?","Which object does ISPM-15 primarily control in this case?"),options:t(["El software de la unidad","El embalaje de madera","La factura"],["Unit software","Wood packaging","The invoice"]),correct:1,feedback:t("El alcance se determina por el material y uso del embalaje, no por el producto transportado.","Scope is determined by packaging material and use, not by the transported product.")}
      ]
    },
    {
      id:"governance", title:t("Gobernar decisiones y conservar una pista auditable", "Govern decisions and retain an audit trail"),
      intro:t("La gobernanza convierte controles individuales en un sistema repetible: define quién decide, con qué criterio, qué se conserva y cuándo se vuelve a revisar.", "Governance turns individual controls into a repeatable system: it defines who decides, against which criterion, what is retained and when review happens again."),
      sections:t([
        ["Roles", "Procurement gestiona relación y palancas comerciales; supply chain aporta flujo y continuidad; quality controla conformidad; engineering evalúa función, configuración y airworthiness; compliance/legal interpreta obligaciones; sustainability y human-rights specialists aportan debida diligencia; managers aceptan riesgos dentro de autoridad."],
        ["Decision record", "Conserva requisito, alcance, evidencia revisada, gaps, hipótesis, personas consultadas, opciones, decisión, responsable, fecha, condiciones, acciones y siguiente revisión. Evita conclusiones absolutas cuando la evidencia solo apoya un alcance limitado."],
        ["Change and monitoring", "Reabre la decisión ante cambios de material, fuente, instalación, proceso, regulación, ruta logística o contexto de riesgo. Usa indicadores de proceso y resultado: documentos recibidos no equivalen a riesgo reducido."]
      ],[
        ["Roles", "Procurement manages relationships and commercial leverage; supply chain provides flow and continuity; quality controls conformity; engineering assesses function, configuration and airworthiness; compliance/legal interprets obligations; sustainability and human-rights specialists support due diligence; managers accept risk within authority."],
        ["Decision record", "Retain requirement, scope, evidence reviewed, gaps, assumptions, consultees, options, decision, owner, date, conditions, actions and next review. Avoid absolute conclusions when evidence supports only a limited scope."],
        ["Change and monitoring", "Reopen the decision after changes to material, source, facility, process, regulation, logistics route or risk context. Use process and outcome indicators: documents received do not equal risk reduced."]
      ]),
      flow:t([["RACI","Who owns, approves, supports?"],["Gate","What evidence is sufficient?"],["Record","Why was the decision made?"],["Monitor","Did action change the risk?"],["Review","What change reopens it?"]],[["RACI","Who owns, approves, supports?"],["Gate","What evidence is sufficient?"],["Record","Why was the decision made?"],["Monitor","Did action change the risk?"],["Review","What change reopens it?"]]),
      caseTitle:t("Presión por liberar una pieza AOG", "Pressure to release an AOG part"),
      case:t("La pieza es necesaria para recuperar disponibilidad. Falta una declaración actualizada después de un cambio de sub-tier. El manager pide ‘aceptar el riesgo’ sin definir alcance ni autoridad.", "The part is needed to restore availability. An updated declaration is missing after a sub-tier change. The manager asks to ‘accept the risk’ without defining scope or authority."),
      analysis:t("La urgencia cambia el plazo, no elimina los gates. Define qué riesgo está abierto, quién tiene autoridad, qué controles temporales son posibles, qué evidencia falta y cuándo expira cualquier decisión condicionada.", "Urgency changes timing, not the gates. Define which risk remains open, who has authority, what temporary controls are possible, which evidence is missing and when any conditional decision expires."),
      questions:[
        {q:t("¿Qué debe activar una nueva revisión?","What should trigger a new review?"),options:t(["Un cambio relevante de material, fuente o requisito","Solo el cierre anual","Nada tras la aprobación inicial"],["A relevant material, source or requirement change","Year end only","Nothing after initial approval"]),correct:0,feedback:t("La decisión es válida para un alcance y condiciones concretos.","A decision is valid for a specific scope and conditions.")},
        {q:t("¿Qué indica mejor eficacia?","What better indicates effectiveness?"),options:t(["Número de correos enviados","Evidencia de que el riesgo o causa cambió","Número de diapositivas"],["Number of emails sent","Evidence that the risk or cause changed","Number of slides"]),correct:1,feedback:t("Los indicadores de actividad deben conectarse con resultados verificables.","Activity indicators should connect to verifiable outcomes.")}
      ]
    }
  ];

  const finalExercise = {
    id:"final", title:t("Ejercicio integrado · Retrofit urgente de aviónica", "Integrated exercise · Urgent avionics retrofit"),
    intro:t("Un retrofit para una flota Air Power requiere una placa electrónica de nueva configuración. El Tier 1 puede cumplir el calendario, pero existen cuatro señales: smelter no identificado, cambio de acabado, embalaje de madera con marca dudosa y presión AOG. Decide cómo construir una liberación defendible.", "An Air Power fleet retrofit requires a newly configured electronic board. Tier 1 can meet schedule, but four signals exist: unidentified smelter, finish change, wood packaging with a doubtful mark and AOG pressure. Decide how to build a defensible release."),
    decisions:[
      {q:t("1. ¿Cuál es el primer movimiento sistémico?","1. What is the first system move?"),options:t(["Aceptar porque Tier 1 es conocido","Separar producto, sustancias, mineral y embalaje; mapear actores, requisitos y gaps","Cancelar automáticamente el contrato"],["Accept because Tier 1 is known","Separate product, substances, mineral and packaging; map actors, requirements and gaps","Automatically cancel the contract"]),correct:1,feedback:t("Separar objetos y preguntas evita que un documento o decisión oculte los demás riesgos.","Separating objects and questions prevents one document or decision from hiding other risks.")},
      {q:t("2. ¿Cómo tratar el smelter desconocido?","2. How should the unknown smelter be treated?"),options:t(["Como prueba automática de abuso","Como gap que exige investigación y priorización proporcional","Como detalle sin relevancia"],["As automatic proof of abuse","As a gap requiring investigation and proportionate prioritisation","As an irrelevant detail"]),correct:1,feedback:t("La incertidumbre se investiga sin convertirla prematuramente en acusación o aprobación.","Uncertainty is investigated without prematurely turning it into accusation or approval.")},
      {q:t("3. ¿Qué evidencia permite decidir sobre el acabado?","3. What evidence supports a finish decision?"),options:t(["Solo certificado ISO","Composición y obligación química, más cualificación y requisitos técnicos aplicables","Solo promesa comercial"],["ISO certificate only","Chemical composition and obligation plus applicable qualification and technical requirements","Commercial promise only"]),correct:1,feedback:t("REACH y performance/airworthiness requieren evidencias distintas y una decisión conectada.","REACH and performance/airworthiness require different evidence and a connected decision.")},
      {q:t("4. ¿Cómo cerrar la acción?","4. How should the action be closed?"),options:t(["Con ‘proveedor avisado’","Con responsables, fechas, evidencia, criterio de eficacia y revisión tras cambios","Al recibir cualquier documento"],["With ‘supplier notified’","With owners, dates, evidence, effectiveness criteria and review after changes","When any document arrives"]),correct:1,feedback:t("El cierre defendible demuestra implementación y eficacia dentro de un alcance definido.","Defensible closure demonstrates implementation and effectiveness within a defined scope.")}
    ]
  };

  const stateKey = "sn-course-responsible-supply-chain-compliance-foundations-v1";
  let language = new URLSearchParams(location.search).get("hubLang") === "en" ? "en" : "es";
  let current = 0;
  let state = { visited: [], attempted: [], finalReviewed: false };
  try { state = { ...state, ...JSON.parse(localStorage.getItem(stateKey) || "{}") }; } catch (_) {}
  const all = [...modules, finalExercise];
  const $ = selector => document.querySelector(selector);
  const value = item => typeof item === "function" ? item : item?.[language];
  const save = () => { try { localStorage.setItem(stateKey, JSON.stringify(state)); } catch (_) {} };
  const announce = message => { $("#course-live").textContent = ""; requestAnimationFrame(() => { $("#course-live").textContent = message; }); };

  function applyCopy() {
    document.documentElement.lang = language;
    document.title = copy.title[language];
    document.querySelectorAll("[data-copy]").forEach(node => { const item = copy[node.dataset.copy]; if (item && typeof item[language] === "string") node.textContent = item[language]; });
    document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
    $("#hub-link").href = `../?hubLang=${language}#learning-paths`;
    $("#objectives-list").innerHTML = objectives[language].map(item => `<li>${item}</li>`).join("");
  }

  function nav() {
    const firstIncomplete = modules.findIndex(module => !state.attempted.includes(module.id));
    const lastUnlocked = firstIncomplete === -1 ? modules.length : firstIncomplete;
    $("#module-list").innerHTML = all.map((item,index) => `<li><button type="button" data-module="${index}" class="${state.visited.includes(item.id) ? "visited" : ""}" ${index===current?'aria-current="step"':''} ${index > lastUnlocked ? "disabled" : ""}><span>${index < modules.length ? `${copy.module[language]} ${index+1}` : copy.final[language]}</span><br><small>${item.title[language]}</small></button></li>`).join("");
    const count = new Set(state.visited).size;
    $("#progress-label").textContent = `${count} / ${all.length}`;
    $("#course-progress").value = count;
    $("#course-progress").setAttribute("aria-label", `${copy.progress[language]}: ${count} / ${all.length}`);
    document.querySelectorAll("[data-module]:not(:disabled)").forEach(button => button.addEventListener("click", () => show(Number(button.dataset.module))));
  }

  function visual(items) { return `<div class="visual-explainer"><div class="visual-flow">${items.map((item,index) => `${index ? '<b aria-hidden="true">→</b>' : ''}<div><strong>${item[0]}</strong><span>${item[1]}</span></div>`).join("")}</div></div>`; }
  function questions(module,index) {
    return `<section class="knowledge-check" aria-labelledby="check-title-${index}"><h3 id="check-title-${index}">${copy.check[language]}</h3>${module.questions.map((q,qi) => `<fieldset><legend>${q.q[language]}</legend>${q.options[language].map((option,oi) => `<label class="option"><input type="radio" name="m${index}q${qi}" value="${oi}"> ${option}</label>`).join("")}<div id="feedback-${index}-${qi}" class="check-feedback" hidden></div></fieldset>`).join("")}<button type="button" data-check="${index}">${copy.checkAction[language]}</button><p id="check-summary-${index}" role="status"></p></section>`;
  }

  function renderModule(module,index) {
    const sections = module.sections[language];
    $("#module-content").innerHTML = `<p class="module-number">${copy.module[language]} ${index+1} · ${index < modules.length ? 20 : 30} min</p><h2>${module.title[language]}</h2><p class="module-intro">${module.intro[language]}</p><section class="learning-block"><h3>${copy.concepts[language]}</h3>${sections.map(section => `<h4>${section[0]}</h4><p>${section[1]}</p>`).join("")}</section>${visual(module.flow[language])}<section class="case"><h3>${copy.miniCase[language]} · ${module.caseTitle[language]}</h3><p>${module.case[language]}</p><p class="case-analysis"><strong>${copy.analysis[language]}:</strong> ${module.analysis[language]}</p></section>${questions(module,index)}`;
    $("[data-check]").addEventListener("click", () => checkModule(module,index));
  }

  function checkModule(module,index) {
    const answers = module.questions.map((_,qi) => document.querySelector(`input[name="m${index}q${qi}"]:checked`));
    if (answers.some(answer => !answer)) { $("#check-summary-"+index).textContent = copy.answerAll[language]; return; }
    let correct = 0;
    module.questions.forEach((q,qi) => { const ok = Number(answers[qi].value) === q.correct; if(ok) correct++; const box=$("#feedback-"+index+"-"+qi); box.hidden=false; box.className=`check-feedback ${ok?'correct':'review'}`; box.textContent=`${ok?copy.correct[language]:copy.review[language]}${q.feedback[language]}`; });
    if (!state.attempted.includes(module.id)) state.attempted.push(module.id);
    save(); $("#check-summary-"+index).textContent = copy.result[language](correct); announce($("#check-summary-"+index).textContent); buttons(); nav();
  }

  function renderFinal() {
    $("#module-content").innerHTML = `<p class="module-number">${copy.final[language]} · 30 min</p><h2>${finalExercise.title[language]}</h2><p class="module-intro">${finalExercise.intro[language]}</p><div class="final-grid">${finalExercise.decisions.map((d,di)=>`<fieldset class="final-card"><legend>${d.q[language]}</legend>${d.options[language].map((o,oi)=>`<label class="option"><input type="radio" name="final${di}" value="${oi}"> ${o}</label>`).join("")}<div id="final-feedback-${di}" class="check-feedback" hidden></div></fieldset>`).join("")}</div><button type="button" class="final-submit">${copy.finalAction[language]}</button><p id="final-status" role="status"></p>${state.finalReviewed?completionMarkup():''}`;
    $(".final-submit").addEventListener("click", reviewFinal);
  }

  function completionMarkup(){ return `<section id="course-complete" class="completion active" tabindex="-1"><h3>${copy.completedTitle[language]}</h3><p>${copy.completedBody[language]}</p><p>${copy.revisit[language]}</p></section>`; }
  function reviewFinal(){
    const answers=finalExercise.decisions.map((_,di)=>document.querySelector(`input[name="final${di}"]:checked`));
    if(answers.some(a=>!a)){ $("#final-status").textContent=copy.finalIncomplete[language]; announce(copy.finalIncomplete[language]); return; }
    finalExercise.decisions.forEach((d,di)=>{const ok=Number(answers[di].value)===d.correct,box=$("#final-feedback-"+di);box.hidden=false;box.className=`check-feedback ${ok?'correct':'review'}`;box.textContent=`${ok?copy.correct[language]:copy.review[language]}${d.feedback[language]}`;});
    state.finalReviewed=true;save(); if(!$("#course-complete")) $("#module-content").insertAdjacentHTML("beforeend",completionMarkup()); nav(); $("#course-complete").focus(); announce(copy.completedTitle[language]);
  }

  function buttons(){
    $("#previous-module").disabled=current===0;
    $("#next-module").hidden=current===all.length-1;
    if(current<modules.length){const attempted=state.attempted.includes(modules[current].id);$("#next-module").disabled=!attempted;$("#next-module").textContent=current===modules.length-1?copy.finish[language]:copy.next[language];}
  }
  function show(index){
    current=Math.max(0,Math.min(index,all.length-1)); const item=all[current]; if(!state.visited.includes(item.id)) state.visited.push(item.id);save();applyCopy();nav();if(current<modules.length)renderModule(modules[current],current);else renderFinal();buttons();$("#module-content").focus();
  }

  document.querySelectorAll("[data-language]").forEach(button=>button.addEventListener("click",()=>{language=button.dataset.language;const url=new URL(location.href);url.searchParams.set("hubLang",language);history.replaceState(null,"",url);show(current);}));
  $("#previous-module").addEventListener("click",()=>show(current-1));
  $("#next-module").addEventListener("click",()=>show(current+1));
  show(0);
})();
