(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const requested = params.get("hubLang") || params.get("lang");
  const lang = requested === "en" ? "en" : "es";
  document.documentElement.lang = lang;

  const exact = new Map([
    ["Phytosanitary Defender: The ISPM-15 Challenge","Phytosanitary Defender: El reto ISPM-15"],
    ["In-Service Logistics · Audit Simulator","Logística In-Service · Simulador de auditoría"],
    ["Manage a critical military shipment from Getafe while preventing untreated or suspicious wooden packaging from carrying biological risk across borders. Learn the rule first, inspect the evidence second, and only then decide.","Gestiona un envío militar crítico desde Getafe evitando que embalajes de madera sin tratar o sospechosos transporten riesgos biológicos entre fronteras. Primero aprende la regla, después inspecciona las evidencias y solo entonces decide."],
    ["Score","Puntuación"],["Checks completed","Comprobaciones completadas"],
    ["I am your digital logistics guide. I explain what the player must inspect, why the control matters and how to complete each step without guessing.","Soy tu guía digital de logística. Explico qué debes inspeccionar, por qué importa el control y cómo completar cada paso sin adivinar."],
    ["▶ Hear current guidance","▶ Escuchar orientación actual"],["Review goal:","Objetivo de revisión:"],
    ["keep the game clear for non-specialists. Every practical screen now has a visible guide, explicit actions and corrective feedback when the learner answers incorrectly.","mantener el juego claro para personas no especialistas. Cada pantalla práctica incluye una guía visible, acciones explícitas y feedback correctivo cuando la respuesta es incorrecta."],
    ["Overview","Resumen"],["Theory 01 · ISPM-15 basics","Teoría 01 · Fundamentos de ISPM-15"],["Practical 01 · Mark + wood inspection","Práctica 01 · Inspección de marca y madera"],["Theory 02 · Residual bark rule","Teoría 02 · Regla de corteza residual"],["Practical 02 · Bark tolerance decision","Práctica 02 · Decisión sobre tolerancia de corteza"],["Wrap-up","Cierre"],["Synopsis","Sinopsis"],
    ["Audit the packaging before it becomes a biological incident.","Audita el embalaje antes de que se convierta en un incidente biológico."],
    ["A critical spare-part shipment must leave Getafe for an international operational base. The parts are urgent, but the wooden pallet and crate cannot move unless the phytosanitary controls are credible. If the packaging is treated incorrectly or inspected badly, the shipment can trigger customs blockage, invasive-species transfer and an ISO 14001 nonconformity.","Un envío crítico de repuestos debe salir de Getafe hacia una base operativa internacional. Las piezas son urgentes, pero el palé y la caja de madera no pueden salir si los controles fitosanitarios no son fiables. Un tratamiento o una inspección deficientes pueden provocar bloqueo aduanero, transferencia de especies invasoras y una no conformidad ISO 14001."],
    ["ARIA · What this game is about","ARIA · De qué trata este juego"],
    ["This is not a chemistry or botany exam. It is a guided logistics decision game. First you learn the rule. Then you inspect evidence. Then you decide what happens to the shipment.","No es un examen de química ni de botánica. Es un juego guiado de decisiones logísticas. Primero aprendes la regla, después inspeccionas las evidencias y finalmente decides qué ocurre con el envío."],
    ["▶ Hear Aria","▶ Escuchar a Aria"],["Concept","Concepto"],["Mechanics","Mecánica"],["Learning objective","Objetivo de aprendizaje"],["Support","Apoyo"],
    ["You are auditing wood packaging used in international logistics. The risk is that pests travel hidden in the wood or through poor control of the packaging condition.","Estás auditando embalajes de madera utilizados en logística internacional. El riesgo es que las plagas viajen ocultas en la madera o por un control deficiente del estado del embalaje."],
    ["Each practical screen asks you to inspect a visual case, review evidence and choose the correct logistics decision. You will not advance by blind guessing.","Cada pantalla práctica te pide inspeccionar un caso visual, revisar evidencias y elegir la decisión logística correcta. No avanzarás adivinando."],
    ["Understand that phytosanitary compliance protects ecosystems, customs flow, military readiness and the robustness of an ISO 14001 management system.","Comprender que el cumplimiento fitosanitario protege los ecosistemas, el flujo aduanero, la disponibilidad militar y la solidez de un sistema de gestión ISO 14001."],
    ["ARIA explains every screen. Wrong answers trigger feedback. In the second practical challenge, if the learner fails twice, the game reveals the correct answer so they can continue.","ARIA explica cada pantalla. Las respuestas incorrectas generan feedback. En el segundo reto práctico, si fallas dos veces, el juego muestra la respuesta correcta para que puedas continuar."],
    ["What the player will do","Qué harás"],["Check that the shipping mark is legible and plausible.","Comprobar que la marca del envío sea legible y plausible."],["Inspect physical evidence on the wood rather than trusting the mark blindly.","Inspeccionar evidencias físicas en la madera en lugar de confiar ciegamente en la marca."],["Apply the exact ISPM 15 residual-bark thresholds used in the case.","Aplicar los umbrales exactos de corteza residual de la NIMF 15 utilizados en el caso."],["Decide whether the shipment is released, held or escalated.","Decidir si el envío se libera, se retiene o se escala."],
    ["Why it matters in-service","Por qué importa en In-Service"],
    ["In-service logistics often runs under time pressure. This game shows why “ship fast” is not enough. A single rushed release can move biological risk into another country, block urgent material at customs and create an audit trail showing weak operational control.","La logística In-Service suele trabajar bajo presión de tiempo. Este juego muestra por qué «enviar rápido» no es suficiente. Una liberación precipitada puede trasladar un riesgo biológico a otro país, bloquear material urgente en aduanas y dejar un rastro de auditoría que evidencie un control operacional débil."],
    ["Start with theory 01","Comenzar con teoría 01"],["Skip to practical 01","Ir directamente a práctica 01"],["ISPM-15 basics for non-specialists","Fundamentos de ISPM-15 para no especialistas"],
    ["This page gives you the regulatory foundation needed for the case: what ISPM 15 covers, what the official mark means, which treatments it recognizes, and why current physical findings still require attention.","Esta página te ofrece la base normativa necesaria para el caso: qué abarca la NIMF 15, qué significa la marca oficial, qué tratamientos reconoce y por qué los hallazgos físicos actuales siguen requiriendo atención."],
    ["ARIA · What to retain","ARIA · Qué debes recordar"],["In the next exercise, the mark looks acceptable. Your real task is to decide whether the physical evidence supports release or whether the package must be held for review.","En el siguiente ejercicio la marca parece aceptable. Tu tarea real es decidir si la evidencia física permite liberar el embalaje o si debe retenerse para revisión."],
    ["What the standard tries to prevent","Qué intenta prevenir la norma"],["Wood packaging can carry insects or organisms across borders. Controls such as treatment and marking are meant to reduce that risk before the pallet or crate enters a new ecosystem.","Los embalajes de madera pueden transportar insectos u organismos entre fronteras. Los controles, como el tratamiento y el marcado, pretenden reducir ese riesgo antes de que el palé o la caja entren en un nuevo ecosistema."],
    ["Why the logistics team should care","Por qué debe importarle al equipo de logística"],["If the packaging is suspicious, the shipment can be held, rejected or quarantined. In operational terms, that means delays, customs friction and poor evidence of control.","Si el embalaje es sospechoso, el envío puede retenerse, rechazarse o ponerse en cuarentena. Operativamente, eso significa retrasos, fricción aduanera y evidencias deficientes de control."],
    ["What you inspect in this game","Qué inspeccionas en este juego"],["The mark is legible.","La marca es legible."],["The wood surface does not show evidence that makes release unsafe.","La superficie de la madera no muestra evidencias que hagan insegura la liberación."],["Any doubt is escalated instead of ignored.","Cualquier duda se escala en lugar de ignorarse."],["Decision logic","Lógica de decisión"],["Release","Liberar"],["Hold","Retener"],["Reject","Rechazar"],["only if the evidence supports it.","solo si las evidencias lo respaldan."],["when the mark exists but physical findings create concern.","cuando existe la marca pero los hallazgos físicos generan preocupación."],["only when the case clearly justifies that stronger decision.","solo cuando el caso justifica claramente esa decisión más restrictiva."],
    ["← Back","← Volver"],["Continue to practical 01","Continuar a práctica 01"],["Inspect the mark and the wood before deciding","Inspecciona la marca y la madera antes de decidir"],
    ["This is the first guided case. The package carries a legible mark, but you must not decide on that basis alone. Inspect both highlighted evidence points on the wood, read the findings, and then choose the correct shipment status.","Este es el primer caso guiado. El embalaje lleva una marca legible, pero no debes decidir solo por eso. Inspecciona los dos puntos de evidencia resaltados en la madera, lee los hallazgos y después elige el estado correcto del envío."],
    ["ARIA · Practical 01 instructions","ARIA · Instrucciones de la práctica 01"],["Do these three things in order: 1) click the two yellow inspection points on the wood, 2) read the evidence that appears in the inspection log, 3) choose the shipment status. If you choose incorrectly, I will tell you why and you can try again.","Haz estas tres cosas en orden: 1) pulsa los dos puntos amarillos de inspección de la madera, 2) lee la evidencia que aparece en el registro de inspección, 3) elige el estado del envío. Si te equivocas, te explicaré por qué y podrás intentarlo de nuevo."],
    ["Shipment","Envío"],["Route","Ruta"],["Priority","Prioridad"],["Standard","Estándar"],["Control state","Estado del control"],["Physical inspection","Inspección física"],["1 · Inspect point A → 2 · Inspect point B → 3 · Read the evidence log → 4 · Decide","1 · Inspecciona el punto A → 2 · Inspecciona el punto B → 3 · Lee el registro de evidencias → 4 · Decide"],["🔎 Magnifier","🔎 Lupa"],["🪵 Surface inspection","🪵 Inspección de superficie"],["📌 Evidence log","📌 Registro de evidencias"],
    ["Inspection status","Estado de inspección"],["Mark legibility","Legibilidad de la marca"],["Acceptable","Aceptable"],["Inspection point A","Punto de inspección A"],["Inspection point B","Punto de inspección B"],["Pending","Pendiente"],["Evidence reviewed: 0 / 2","Evidencias revisadas: 0 / 2"],["Evidence A · Suspicious bore holes","Evidencia A · Orificios sospechosos"],["Several small holes are visible in the inspected area of the wood. Their origin cannot be determined from visual inspection alone.","En la zona inspeccionada se observan varios orificios pequeños agrupados en la madera. La inspección visual no permite determinar su origen."],["Evidence B · Suspicious surface anomaly","Evidencia B · Anomalía superficial sospechosa"],["The inspected area shows a surface alteration in the wood, with changes in colour and localised deterioration. There is insufficient information to determine its cause.","En la zona inspeccionada se observa una alteración de la superficie de la madera, con cambios de coloración y deterioro localizado. No se dispone de información suficiente para determinar su origen."],
    ["Decide the shipment status","Decide el estado del envío"],["Inspect both yellow points first. Then use the evidence log above to make the decision.","Inspecciona primero los dos puntos amarillos. Después utiliza el registro de evidencias para tomar la decisión."],["Release shipment","Liberar envío"],["Hold for phytosanitary review","Retener para revisión fitosanitaria"],["Reject immediately","Rechazar inmediatamente"],
    ["Continue to theory 02","Continuar a teoría 02"],["Understand the residual-bark rule before you act","Comprende la regla de corteza residual antes de actuar"],["“Any visible bark means rejection” is incorrect. ISPM 15 requires debarked wood but permits limited residual bark under two exact, measurable conditions. Learn both thresholds before assessing the samples.","«Cualquier corteza visible implica rechazo» es incorrecto. La NIMF 15 exige madera descortezada, pero permite corteza residual limitada conforme a dos condiciones exactas y medibles. Aprende ambos umbrales antes de evaluar las muestras."],
    ["ARIA · What changes in the next challenge","ARIA · Qué cambia en el siguiente reto"],["You will not inspect hotspots in the next practical. Instead, you will activate a bark gauge, read the dimensions of two bark pieces and choose the statement that matches the rule.","En la siguiente práctica no inspeccionarás puntos concretos. Activarás un medidor de corteza, leerás las dimensiones de dos fragmentos y elegirás la afirmación que se ajuste a la regla."],
    ["Main rule in this training case","Regla principal en este caso de entrenamiento"],["A narrow individual piece of residual bark can remain regardless of length. A wider individual piece can remain only if its surface area stays within the permitted limit used in the exercise.","Un fragmento individual estrecho de corteza residual puede permanecer independientemente de su longitud. Un fragmento más ancho solo puede permanecer si su superficie se mantiene dentro del límite permitido utilizado en el ejercicio."],
    ["What the player must do","Qué debes hacer"],["Activate bark gauge","Activar medidor de corteza"],["Why the control matters","Por qué importa el control"],["If the team reads the tolerance rule incorrectly, they either stop acceptable material or release non-compliant packaging. Both outcomes weaken logistics performance and compliance confidence.","Si el equipo interpreta mal la regla de tolerancia, puede detener material aceptable o liberar embalajes no conformes. Ambos resultados debilitan el rendimiento logístico y la confianza en el cumplimiento."],["How the game helps","Cómo ayuda el juego"],["If the learner answers incorrectly, they receive immediate feedback. On the second failed attempt, the correct answer is revealed and the route forward unlocks automatically.","Si respondes incorrectamente, recibirás feedback inmediato. En el segundo intento fallido se muestra la respuesta correcta y se desbloquea automáticamente la continuación."],
    ["Continue to practical 02","Continuar a práctica 02"],["Apply the bark-tolerance rule correctly","Aplica correctamente la regla de tolerancia de corteza"],["This second practical challenge is simpler once you know the rule. Activate the bark gauge, inspect the measurements on both sample boards and choose the correct statement. You get feedback after each attempt.","Este segundo reto práctico es más sencillo cuando conoces la regla. Activa el medidor de corteza, revisa las medidas de ambas muestras y elige la afirmación correcta. Recibirás feedback tras cada intento."],
    ["Welcome. In this game, you protect both logistics and the environment. First read the concept, mechanics and learning objective. Then move through one theory page before each practical challenge. You do not need prior knowledge of ISPM-15.","Bienvenida. En este juego proteges tanto la logística como el medio ambiente. Lee primero el concepto, la mecánica y el objetivo de aprendizaje. Después pasa por una página de teoría antes de cada reto práctico. No necesitas conocimientos previos de ISPM-15."],
    ["Theory page one explains the scope, exemptions, approved treatments, official mark, reuse and repair rules, and inspection logic of ISPM 15. A compliant-looking mark is important evidence, but the standard does not provide continuing protection from later contamination or infestation.","La primera página teórica explica el alcance, las exenciones, los tratamientos aprobados, la marca oficial, las reglas de reutilización y reparación y la lógica de inspección de la NIMF 15. Una marca aparentemente conforme es una evidencia importante, pero la norma no ofrece protección permanente frente a una contaminación o infestación posterior."],
    ["Practical one. Step one: click both yellow inspection points on the crate. Step two: review the evidence found at each point. Step three: decide whether to release, hold for review or reject the shipment based on the findings.","Práctica uno. Primero, pulsa los dos puntos amarillos de la caja. Después, revisa las evidencias de cada punto. Finalmente, decide si debes liberar, retener para revisión o rechazar el envío según los hallazgos."],
    ["Theory page two applies the exact residual-bark tolerance in ISPM 15 Annex 1. An individual piece less than 3 centimetres wide may remain regardless of length. A piece greater than 3 centimetres wide may remain only when its individual surface area is less than 50 square centimetres.","La segunda página teórica aplica la tolerancia exacta de corteza residual del Anexo 1 de la NIMF 15. Un fragmento individual de menos de 3 centímetros de anchura puede permanecer independientemente de su longitud. Un fragmento de más de 3 centímetros de anchura solo puede permanecer cuando su superficie individual es inferior a 50 centímetros cuadrados."],
    ["Practical two. First click Activate bark gauge. Then compare Sample A, which is 22 millimetres wide, and Sample B, which is 41 millimetres wide with a 34 square centimetre area. Finally, choose the correct statement. If you fail twice, I reveal the answer so you can continue.","Práctica dos. Primero pulsa Activar medidor de corteza. Después compara la muestra A, de 22 milímetros de ancho, con la muestra B, de 41 milímetros de ancho y 34 centímetros cuadrados de superficie. Finalmente, elige la afirmación correcta. Si fallas dos veces, mostraré la respuesta para que puedas continuar."],
    ["Wooden export crate with ISPM-15 mark, suspicious boreholes and a surface anomaly at two yellow inspection points","Caja de madera de exportación con marca ISPM-15, orificios sospechosos y anomalía superficial en dos puntos amarillos de inspección"],["Inspect point A","Inspeccionar punto A"],["Inspect point B","Inspeccionar punto B"],["Close magnifier","Cerrar lupa"],["Enlarged wooden crate","Caja de madera ampliada"]
  ]);

  [
    ["1 · Purpose and limits of ISPM 15","1 · Finalidad y límites de la NIMF 15"],
    ["Raw wood can retain insects, nematodes and other pests from living or dead trees. Because pallets, crates and dunnage are traded, reused and repaired worldwide, their true origin and phytosanitary history can be difficult to reconstruct. ISPM 15 therefore establishes internationally accepted measures that","La madera en bruto puede albergar insectos, nematodos y otras plagas procedentes de árboles vivos o muertos. Como los palés, las cajas y la madera de estiba se comercializan, reutilizan y reparan en todo el mundo, puede resultar difícil reconstruir su verdadero origen e historial fitosanitario. Por ello, la NIMF 15 establece medidas aceptadas internacionalmente que"],
    ["significantly reduce","reducen significativamente"],
    ["—but do not claim to eliminate—this pathway for quarantine pests.","—sin afirmar que lo eliminan— este medio de entrada de plagas cuarentenarias."],
    ["Important limit:","Límite importante:"],
    ["an ISPM 15 treatment is not continuing protection. Treated packaging can later be contaminated or infested. A valid-looking mark is evidence that an approved measure was applied under the authority of a national plant protection organization (NPPO); it is not proof that the wood is free from every organism at the time of inspection.","un tratamiento conforme a la NIMF 15 no ofrece protección permanente. Un embalaje tratado puede contaminarse o infestarse posteriormente. Una marca aparentemente válida evidencia que se aplicó una medida aprobada bajo la autoridad de una organización nacional de protección fitosanitaria (ONPF); no demuestra que la madera esté libre de cualquier organismo en el momento de la inspección."],
    ["2 · What is regulated","2 · Qué está regulado"],
    ["The standard covers wood packaging made from raw wood that may provide a pest pathway, including:","La norma abarca los embalajes de madera en bruto que pueden constituir una vía de entrada de plagas, entre ellos:"],
    ["pallets, crates, boxes and packing cases;","palés, cajones, cajas y embalajes;"],
    ["dunnage used to secure or support cargo;","madera de estiba utilizada para sujetar o apoyar la carga;"],
    ["cable drums, spools and reels;","tambores, bobinas y carretes;"],
    ["packaging accompanying consignments that would not otherwise receive a phytosanitary inspection.","embalajes que acompañan envíos que, de otro modo, no se someterían a una inspección fitosanitaria."],
    ["3 · What is normally exempt","3 · Qué suele estar exento"],
    ["Low-risk articles listed by ISPM 15 include:","Entre los artículos de bajo riesgo que la NIMF 15 considera exentos figuran:"],
    ["wood packaging made entirely from wood 6 mm thick or less;","embalajes fabricados íntegramente con madera de 6 mm de espesor o menos;"],
    ["plywood, particle board, oriented strand board and veneer produced using glue, heat or pressure;","contrachapado, tableros de partículas, tableros de virutas orientadas y chapas fabricados con cola, calor o presión;"],
    ["sawdust, shavings and wood wool;","serrín, virutas y lana de madera;"],
    ["certain heated barrels and processed gift boxes;","determinados barriles calentados durante su fabricación y cajas de regalo procesadas;"],
    ["wood components permanently attached to freight vehicles or containers.","componentes de madera fijados de forma permanente a vehículos de carga o contenedores."],
    ["4 · The compliance chain: debark, treat, authorize, mark","4 · Cadena de conformidad: descortezar, tratar, autorizar y marcar"],
    ["Debarked wood:","Madera descortezada:"],
    ["compliant packaging must be made from debarked wood, subject to the limited residual-bark tolerance explained in Theory 02.","los embalajes conformes deben fabricarse con madera descortezada, respetando la tolerancia limitada de corteza residual explicada en la Teoría 02."],
    ["Approved treatment:","Tratamiento aprobado:"],
    ["an authorized provider applies a treatment schedule prescribed or approved by the NPPO.","un proveedor autorizado aplica un programa de tratamiento prescrito o aprobado por la ONPF."],
    ["Official oversight:","Supervisión oficial:"],
    ["treatment and use of the mark remain under the authority of the exporting country's NPPO.","el tratamiento y el uso de la marca permanecen bajo la autoridad de la ONPF del país exportador."],
    ["Traceable mark:","Marca trazable:"],
    ["the internationally recognized mark identifies the country, responsible producer or treatment provider, and treatment code.","la marca reconocida internacionalmente identifica el país, el productor o proveedor de tratamiento responsable y el código del tratamiento."],
    ["The mark replaces a separate phytosanitary certificate for the wood packaging itself","La marca sustituye a un certificado fitosanitario separado para el propio embalaje de madera"],
    ["when the standard applies. It does not certify the goods inside the package and does not override technically justified requirements or official action by the importing country.","cuando se aplica la norma. No certifica la mercancía contenida en el embalaje ni invalida requisitos técnicamente justificados o medidas oficiales del país importador."],
    ["5 · Approved treatment codes","5 · Códigos de tratamientos aprobados"],
    ["HT · Heat treatment","HT · Tratamiento térmico"],
    ["Conventional steam or dry heat: the entire wood profile, including the core, must reach at least 56 °C for 30 continuous minutes.","Calor convencional con vapor o en seco: todo el perfil de la madera, incluido el centro, debe alcanzar al menos 56 °C durante 30 minutos continuos."],
    ["DH · Dielectric heating","DH · Calentamiento dieléctrico"],
    ["Microwave or radio-frequency heating under the schedules and dimensional limits specified by the standard.","Calentamiento por microondas o radiofrecuencia conforme a los programas y límites dimensionales especificados por la norma."],
    ["MB · Methyl bromide","MB · Bromuro de metilo"],
    ["Fumigation according to an approved concentration–time schedule. Methyl bromide depletes the ozone layer, so the IPPC recommends replacement or reduction where alternatives are available.","Fumigación conforme a un programa aprobado de concentración-tiempo. El bromuro de metilo agota la capa de ozono, por lo que la CIPF recomienda sustituirlo o reducir su uso cuando existan alternativas."],
    ["SF · Sulphuryl fluoride","SF · Fluoruro de sulfurilo"],
    ["Fumigation under an approved concentration–time schedule, with restrictions on wood dimensions, moisture and minimum temperature.","Fumigación conforme a un programa aprobado de concentración-tiempo, con restricciones sobre dimensiones de la madera, humedad y temperatura mínima."],
    ["Do not infer the treatment from colour or appearance.","No deduzcas el tratamiento por el color o el aspecto."],
    ["Read the treatment code in the official mark.","Lee el código de tratamiento de la marca oficial."],
    ["6 · How to read the mark","6 · Cómo interpretar la marca"],
    ["A conforming mark contains four required elements:","Una marca conforme contiene cuatro elementos obligatorios:"],
    ["the IPPC symbol on the left;","el símbolo de la CIPF a la izquierda;"],
    ["the two-letter ISO country code;","el código ISO de país de dos letras;"],
    ["a unique producer or treatment-provider code assigned by the NPPO;","un código único del productor o proveedor de tratamiento asignado por la ONPF;"],
    ["the treatment code: HT, DH, MB or SF.","el código del tratamiento: HT, DH, MB o SF."],
    ["It must be legible, durable, non-transferable, not hand drawn and visible in use—preferably on at least two opposite sides. Red and orange should be avoided because they are used for dangerous-goods labels. No extra information belongs inside the mark border.","Debe ser legible, duradera, intransferible, no dibujada a mano y visible durante el uso, preferiblemente en al menos dos lados opuestos. Deben evitarse el rojo y el naranja porque se utilizan en el etiquetado de mercancías peligrosas. No debe incluirse información adicional dentro del borde de la marca."],
    ["7 · Reuse, repair and remanufacture","7 · Reutilización, reparación y refabricación"],
    ["Reuse:","Reutilización:"],
    ["a compliant unit that has not been repaired, remanufactured or otherwise altered does not need routine re-treatment or re-marking during its service life.","una unidad conforme que no haya sido reparada, refabricada ni alterada de otro modo no necesita volver a tratarse o marcarse de forma rutinaria durante su vida útil."],
    ["Repair:","Reparación:"],
    ["when up to about one third of components are replaced, added raw-wood components must be compliant and individually marked. If compliance or origin is doubtful, the NPPO may require re-treatment, destruction or prevention from international movement.","cuando se sustituye hasta aproximadamente un tercio de los componentes, los componentes de madera en bruto añadidos deben ser conformes y estar marcados individualmente. Si existen dudas sobre la conformidad o el origen, la ONPF puede exigir un nuevo tratamiento, la destrucción o impedir su circulación internacional."],
    ["Remanufacture:","Refabricación:"],
    ["replacing more than about one third of components requires old marks to be permanently obliterated, the whole unit to be re-treated and a new mark applied.","si se sustituye más de aproximadamente un tercio de los componentes, deben eliminarse permanentemente las marcas anteriores, tratarse de nuevo toda la unidad y aplicarse una nueva marca."],
    ["8 · Inspection and decision discipline","8 · Disciplina de inspección y decisión"],
    ["First verify that the mark is complete, plausible, legible and physically associated with the unit. Then inspect the wood and joints for live pests or credible signs such as fresh frass, galleries, exit holes or unexplained deterioration. Also check bark and any repairs or mixed components.","Comprueba primero que la marca esté completa, sea plausible y legible y esté físicamente asociada a la unidad. Después inspecciona la madera y las uniones en busca de plagas vivas o indicios fiables, como serrín reciente, galerías, orificios de salida o deterioro inexplicable. Comprueba también la corteza y cualquier reparación o mezcla de componentes."],
    ["Game decision versus legal action:","Decisión del juego frente a actuación legal:"],
    ["in this scenario, suspicious findings trigger a hold and escalation. In real operations, only the competent authority and the applicable national procedure determine whether the material is detained, treated, disposed of, removed from the consignment or refused entry. Do not destroy, fumigate or reject material on your own initiative.","en este escenario, los hallazgos sospechosos implican retener y escalar. En operaciones reales, solo la autoridad competente y el procedimiento nacional aplicable determinan si el material se retiene, trata, elimina, separa del envío o rechaza en frontera. No destruyas, fumigues ni rechaces material por iniciativa propia."],
    ["9 · Why logistics and biodiversity share the same control","9 · Por qué la logística y la biodiversidad comparten el mismo control"],
    ["Forest pests introduced through packaging can affect forest health and biodiversity. The same failure can also stop cargo, create storage and rework, disrupt urgent supply and generate a traceability problem. Good control is therefore preventive environmental management and operational resilience—not paperwork added after the event.","Las plagas forestales introducidas mediante embalajes pueden afectar a la salud de los bosques y a la biodiversidad. El mismo fallo también puede detener la carga, generar almacenaje y retrabajo, interrumpir suministros urgentes y provocar un problema de trazabilidad. Un buen control es, por tanto, gestión ambiental preventiva y resiliencia operativa, no burocracia añadida después del suceso."],
    ["Authoritative sources and further reading","Fuentes autorizadas y lecturas adicionales"],
    ["IPPC · ISPM 15 official publication record","CIPF · Ficha oficial de publicación de la NIMF 15"],
    ["FAO/IPPC · ISPM 15 full official text (English)","FAO/CIPF · Texto oficial completo de la NIMF 15 (inglés)"],
    ["FAO/IPPC · ISPM 15 full official text (Spanish)","FAO/CIPF · Texto oficial completo de la NIMF 15 (español)"],
    ["IPPC · Guide to regulation of wood packaging material (2023, English)","CIPF · Guía para la reglamentación del embalaje de madera (2023, inglés)"],
    ["IPPC · Guide to regulation of wood packaging material (2023, Spanish)","CIPF · Guía para la reglamentación del embalaje de madera (2023, español)"],
    ["This learning page summarizes the official standard for training. Always check the current import requirements, NPPO instructions and organizational procedures for the actual route and country.","Esta página formativa resume la norma oficial. Comprueba siempre los requisitos de importación vigentes, las instrucciones de la ONPF y los procedimientos de la organización aplicables a la ruta y al país reales."],

    ["1 · Start from the correct principle","1 · Parte del principio correcto"],
    ["ISPM 15 requires wood packaging to be made from","La NIMF 15 exige que los embalajes se fabriquen con"],
    ["debarked wood","madera descortezada"],
    [", regardless of which approved treatment is used. “Debarked” does not mean that every microscopic trace of bark must be absent: Annex 1 defines a measurable tolerance for small, visually separate and clearly distinct pieces that remain after debarking.",", con independencia del tratamiento aprobado utilizado. «Descortezada» no significa que deba desaparecer todo rastro microscópico de corteza: el Anexo 1 define una tolerancia medible para pequeños fragmentos visualmente separados y claramente diferenciados que permanecen tras el descortezado."],
    ["This is the actual Annex 1 rule used by the game—not a fictional training threshold.","Esta es la regla real del Anexo 1 utilizada por el juego, no un umbral ficticio de formación."],
    ["Any number of separate residual-bark pieces may remain only when every individual piece meets one of the two conditions below.","Puede permanecer cualquier número de fragmentos separados de corteza residual únicamente cuando cada fragmento cumpla una de las dos condiciones siguientes."],
    ["2 · Condition A: width under 3 cm","2 · Condición A: anchura inferior a 3 cm"],
    ["An individual piece of residual bark may remain when it is","Un fragmento individual de corteza residual puede permanecer cuando mide"],
    ["less than 3 cm wide","menos de 3 cm de anchura"],
    ["—that is, less than 30 mm—regardless of its length.","—es decir, menos de 30 mm—, independientemente de su longitud."],
    ["Measure the greatest relevant width. The wording is “less than 3 cm”: a piece exactly 3 cm wide does not satisfy this first condition.","Mide la mayor anchura pertinente. La redacción dice «menos de 3 cm»: un fragmento de exactamente 3 cm de anchura no cumple esta primera condición."],
    ["3 · Condition B: wider piece under 50 cm²","3 · Condición B: fragmento más ancho con menos de 50 cm²"],
    ["If an individual piece is","Si un fragmento individual tiene"],
    ["greater than 3 cm wide","más de 3 cm de anchura"],
    [", it may remain only when the total surface area of that individual piece is",", solo puede permanecer cuando la superficie total de ese fragmento individual es"],
    ["less than 50 cm²","inferior a 50 cm²"],
    ["Area is assessed piece by piece. Do not add together several clearly separate pieces, and do not reject a wider piece from width alone. The wording is “less than 50 cm²”: exactly 50 cm² is not below the limit.","La superficie se evalúa fragmento a fragmento. No sumes varios fragmentos claramente separados ni rechaces un fragmento más ancho basándote solo en su anchura. La redacción dice «menos de 50 cm²»: exactamente 50 cm² no está por debajo del límite."],
    ["4 · Apply the rule in four steps","4 · Aplica la regla en cuatro pasos"],
    ["Confirm that the bark areas are visually separate and clearly distinct.","Confirma que las zonas de corteza estén visualmente separadas y claramente diferenciadas."],
    ["Measure each individual piece separately.","Mide cada fragmento individual por separado."],
    ["If a piece is under 30 mm wide, it fits Condition A regardless of length.","Si un fragmento mide menos de 30 mm de anchura, cumple la Condición A independientemente de su longitud."],
    ["If it is over 30 mm wide, calculate or measure its individual area and confirm that it is below 50 cm².","Si supera los 30 mm de anchura, calcula o mide su superficie individual y confirma que sea inferior a 50 cm²."],
    ["If a borderline measurement cannot be resolved reliably, do not guess: hold and escalate according to the applicable inspection procedure.","Si una medida límite no puede resolverse de forma fiable, no adivines: retén y escala conforme al procedimiento de inspección aplicable."],
    ["5 · Treatment sequence matters","5 · La secuencia del tratamiento importa"],
    ["For methyl bromide (MB) and sulphuryl fluoride (SF), bark must be removed","Para el bromuro de metilo (MB) y el fluoruro de sulfurilo (SF), la corteza debe retirarse"],
    ["before","antes"],
    ["treatment because bark can affect fumigation efficacy. For heat treatment, bark may be removed before or after treatment. When a heat-treatment method has a dimensional limitation, such as dielectric heating, remaining bark is included in the dimension measurement.","del tratamiento porque puede afectar a la eficacia de la fumigación. En el tratamiento térmico, la corteza puede retirarse antes o después. Cuando un método térmico tiene una limitación dimensional, como el calentamiento dieléctrico, la corteza restante se incluye en la medición de las dimensiones."],
    ["6 · Common errors to avoid","6 · Errores habituales que debes evitar"],
    ["“Any bark means rejection”:","«Cualquier corteza implica rechazo»:"],
    ["false; the standard provides a tolerance.","falso; la norma establece una tolerancia."],
    ["“A treatment mark makes bark irrelevant”:","«La marca de tratamiento hace irrelevante la corteza»:"],
    ["false; debarked wood is required in addition to approved treatment.","falso; se exige madera descortezada además de un tratamiento aprobado."],
    ["“Width over 30 mm always fails”:","«Una anchura superior a 30 mm siempre incumple»:"],
    ["false; check individual area.","falso; comprueba la superficie individual."],
    ["“50 cm² is acceptable”:","«50 cm² es aceptable»:"],
    ["false; the area must be less than 50 cm².","falso; la superficie debe ser inferior a 50 cm²."],
    ["“The game decides legal disposition”:","«El juego decide la actuación legal»:"],
    ["false; actual action follows the competent authority and local procedure.","falso; la actuación real corresponde a la autoridad competente y al procedimiento local."],
    ["7 · Apply it to the next challenge","7 · Aplícala al siguiente reto"],
    ["is 22 mm wide, so it satisfies Condition A regardless of length.","mide 22 mm de anchura, por lo que cumple la Condición A independientemente de su longitud."],
    ["is 41 mm wide, so width alone cannot decide it; its measured area is 34 cm², which is below 50 cm² and therefore satisfies Condition B.","mide 41 mm de anchura, por lo que la anchura por sí sola no permite decidir; su superficie medida es de 34 cm², inferior a 50 cm², y por tanto cumple la Condición B."],
    ["Both samples fit the residual-bark tolerance represented in the exercise. This conclusion addresses bark only; a complete release decision would still consider the mark, treatment evidence, physical condition and route requirements.","Ambas muestras se ajustan a la tolerancia de corteza residual representada en el ejercicio. Esta conclusión solo se refiere a la corteza; una decisión completa de liberación seguiría teniendo en cuenta la marca, las evidencias del tratamiento, el estado físico y los requisitos de la ruta."],
    ["Rule source","Fuente de la regla"],
    ["The thresholds above come directly from ISPM 15, Annex 1, “Use of debarked wood”. Review the official texts from IPPC/FAO:","Los umbrales anteriores proceden directamente de la NIMF 15, Anexo 1, «Utilización de madera descortezada». Consulta los textos oficiales de la CIPF/FAO:"],
    ["ISPM 15 · Annex 1 (English)","NIMF 15 · Anexo 1 (inglés)"],
    ["ISPM 15 · Annex 1 (Spanish)","NIMF 15 · Anexo 1 (español)"],
    ["Practical two. Activate the bark gauge, compare both samples, apply the width-and-area rule and choose the statement supported by the evidence. If you fail twice, ARIA will reveal the correct assessment so you can continue.","Práctica dos. Activa el medidor de corteza, compara ambas muestras, aplica la regla de anchura y superficie y elige la afirmación respaldada por las evidencias. Si fallas dos veces, ARIA mostrará la evaluación correcta para que puedas continuar."],
    ["Activate the bark gauge, inspect both samples and decide whether the visible residual bark fits the training tolerance. Use both width and surface area; do not decide from width alone.","Activa el medidor de corteza, inspecciona ambas muestras y decide si la corteza residual visible cumple la tolerancia del ejercicio. Utiliza tanto la anchura como la superficie; no decidas solo por la anchura."],
    ["ARIA · Practical 02 instructions","ARIA · Instrucciones de la práctica 02"],
    ["Activate the gauge first. Sample A is 22 mm wide. Sample B is 41 mm wide with an area of 34 cm². Apply the rule to each sample, then choose the statement that matches the evidence.","Activa primero el medidor. La muestra A tiene 22 mm de anchura. La muestra B tiene 41 mm de anchura y una superficie de 34 cm². Aplica la regla a cada muestra y después elige la afirmación que coincida con las evidencias."],
    ["Training rule:","Regla del ejercicio:"],
    ["an individual piece of residual bark narrower than 30 mm may remain regardless of length. If it is wider than 30 mm, its individual surface area must stay below 50 cm² in this exercise.","un fragmento individual de corteza residual de menos de 30 mm de anchura puede permanecer independientemente de su longitud. Si supera los 30 mm de anchura, su superficie individual debe mantenerse por debajo de 50 cm² en este ejercicio."],
    ["A long but narrow strip of residual bark.","Una franja larga pero estrecha de corteza residual."],
    ["A wider, short piece whose surface area must also be checked.","Un fragmento más ancho y corto cuya superficie también debe comprobarse."],
    ["Width · 22 mm","Anchura · 22 mm"],["Width · 41 mm","Anchura · 41 mm"],["Area · 34 cm²","Superficie · 34 cm²"],
    ["📏 Activate bark gauge","📏 Activar medidor de corteza"],
    ["Choose the correct assessment","Elige la evaluación correcta"],
    ["Use the measurements and the training rule above.","Utiliza las medidas y la regla del ejercicio indicadas arriba."],
    ["Reject both samples","Rechazar ambas muestras"],
    ["Any visible bark automatically makes the packaging non-compliant.","Cualquier corteza visible hace automáticamente que el embalaje no sea conforme."],
    ["Sample A is acceptable; reject Sample B","La muestra A es aceptable; rechaza la muestra B"],
    ["Sample B is wider than 30 mm, so width alone is enough to reject it.","La muestra B supera los 30 mm de anchura, por lo que la anchura por sí sola bastaría para rechazarla."],
    ["Both samples fit the training tolerance","Ambas muestras cumplen la tolerancia del ejercicio"],
    ["Sample A is narrow; Sample B is wider, but its individual area remains below the exercise limit.","La muestra A es estrecha; la muestra B es más ancha, pero su superficie individual permanece por debajo del límite del ejercicio."],
    ["Activate the bark gauge before answering.","Activa el medidor de corteza antes de responder."],
    ["Continue to wrap-up","Continuar al cierre"],
    ["Final debrief. Review what you practised: inspect the mark and the wood, use evidence instead of assumptions, apply the bark rule correctly, and hold or escalate when findings create doubt.","Cierre final. Revisa lo practicado: inspeccionar la marca y la madera, utilizar evidencias en lugar de suposiciones, aplicar correctamente la regla de corteza y retener o escalar cuando los hallazgos generen dudas."],
    ["Release the spare. Not the pest.","Libera el repuesto. No la plaga."],
    ["Fast logistics and strong phytosanitary control are not competing goals. The point is to release critical material with evidence that the packaging has been checked properly.","Una logística rápida y un control fitosanitario sólido no son objetivos incompatibles. La clave es liberar material crítico con evidencias de que el embalaje se ha comprobado correctamente."],
    ["ARIA · Final debrief","ARIA · Cierre final"],
    ["A mark is evidence, not a substitute for inspection. Residual bark needs the correct rule, not guesswork. Suspicious physical findings should be held and escalated instead of being ignored under schedule pressure.","Una marca es una evidencia, no un sustituto de la inspección. La corteza residual debe evaluarse con la regla correcta, no por intuición. Los hallazgos físicos sospechosos deben retenerse y escalarse en lugar de ignorarse por presión de plazo."],
    ["What you practised","Qué has practicado"],
    ["Mark review, physical inspection, evidence logging, residual-bark assessment and a release-or-hold decision.","Revisión de la marca, inspección física, registro de evidencias, evaluación de corteza residual y decisión de liberar o retener."],
    ["Operational consequence","Consecuencia operativa"],
    ["Credible controls support customs flow and operational availability while reducing the chance of transporting biological risk across borders.","Los controles fiables favorecen el flujo aduanero y la disponibilidad operativa, al tiempo que reducen la posibilidad de transportar riesgo biológico entre fronteras."],
    ["ISO 14001 connection","Relación con ISO 14001"],
    ["Weak operational control can require investigation and corrective action. The game does not automatically classify every mistake as a major nonconformity.","Un control operacional débil puede requerir investigación y acción correctiva. El juego no clasifica automáticamente cada error como una no conformidad mayor."],
    ["Final result","Resultado final"],["practical checks completed","comprobaciones prácticas completadas"],
    ["Independent correct answer: +10 points","Respuesta correcta independiente: +10 puntos"],
    ["ARIA-assisted answer after two failed attempts: +5 points","Respuesta asistida por ARIA tras dos intentos fallidos: +5 puntos"],
    ["Start again","Empezar de nuevo"],
    ["Reviewed","Revisado"],
    ["Click ","Pulsa "],
    [", read the dimensions shown beside each sample and then decide which statement correctly interprets the rule.",", lee las dimensiones mostradas junto a cada muestra y decide qué afirmación interpreta correctamente la regla."]
  ].forEach(([en,es]) => exact.set(en,es));

  const partial = [
    ["Evidence reviewed:","Evidencias revisadas:"],
    ["Back to Sustainability Hub","Volver al Sustainability Hub"],
    ["Loading the ISPM-15 challenge…","Cargando el reto ISPM-15…"],
    ["Loading error","Error de carga"],
    ["Continue to","Continuar a"],
    ["Theory 01","Teoría 01"],["Theory 02","Teoría 02"],["Practical 01","Práctica 01"],["Practical 02","Práctica 02"],
    ["Sample A","Muestra A"],["Sample B","Muestra B"],["Attempt","Intento"],["Correct","Correcto"],["Incorrect","Incorrecto"]
  ];

  function translate(value) {
    if (lang !== "es" || !value) return value;
    const trimmed = value.trim();
    if (exact.has(trimmed)) return value.replace(trimmed, exact.get(trimmed));
    let out = value;
    for (const [from,to] of partial) out = out.split(from).join(to);
    return out;
  }

  function walk(root) {
    if (lang !== "es" || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (!node.parentElement || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(node.parentElement.tagName)) continue;
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
    root.querySelectorAll?.("[title],[aria-label],[alt],[placeholder],[data-guide]").forEach(el => {
      for (const attr of ["title","aria-label","alt","placeholder","data-guide"]) {
        if (el.hasAttribute(attr)) el.setAttribute(attr, translate(el.getAttribute(attr)));
      }
    });
  }

  function languageControl() {
    const box = document.createElement("div");
    box.id = "sn-language-control";
    box.innerHTML = '<button type="button" data-l="es">ES</button><span>|</span><button type="button" data-l="en">EN</button>';
    box.style.cssText = "position:fixed;z-index:2147483647;top:12px;right:12px;display:flex;align-items:center;gap:7px;padding:8px 11px;border-radius:999px;background:#071b33;color:#fff;border:2px solid rgba(255,255,255,.75);font:800 12px/1 system-ui,sans-serif;box-shadow:0 5px 18px rgba(0,0,0,.3)";
    box.querySelectorAll("button").forEach(btn => {
      btn.style.cssText = "border:0;background:transparent;color:#fff;font:inherit;cursor:pointer;padding:2px 4px";
      btn.setAttribute("aria-pressed", btn.dataset.l === lang ? "true" : "false");
      if (btn.dataset.l === lang) btn.style.textDecoration = "underline";
      btn.addEventListener("click", () => {
        const u = new URL(location.href);
        u.searchParams.set("hubLang", btn.dataset.l);
        location.href = u.toString();
      });
    });
    document.body.appendChild(box);
  }

  function apply() { if (lang === "es") document.title = translate(document.title); walk(document.body); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => { languageControl(); apply(); });
  else { languageControl(); apply(); }

  // Static application: translate once after DOM construction.
  // Do not observe the document while it is being parsed; on this image-heavy page
  // that repeatedly re-walked the DOM and could stall the browser.
})();
