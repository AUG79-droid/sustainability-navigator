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
    ["What the player will do","Qué harás"],["Check that the shipping mark is legible and plausible.","Comprobar que la marca del envío sea legible y plausible."],["Inspect physical evidence on the wood rather than trusting the mark blindly.","Inspeccionar evidencias físicas en la madera en lugar de confiar ciegamente en la marca."],["Apply a simplified residual-bark rule.","Aplicar una regla simplificada de corteza residual."],["Decide whether the shipment is released, held or escalated.","Decidir si el envío se libera, se retiene o se escala."],
    ["Why it matters in-service","Por qué importa en In-Service"],
    ["In-service logistics often runs under time pressure. This game shows why “ship fast” is not enough. A single rushed release can move biological risk into another country, block urgent material at customs and create an audit trail showing weak operational control.","La logística In-Service suele trabajar bajo presión de tiempo. Este juego muestra por qué «enviar rápido» no es suficiente. Una liberación precipitada puede trasladar un riesgo biológico a otro país, bloquear material urgente en aduanas y dejar un rastro de auditoría que evidencie un control operacional débil."],
    ["Start with theory 01","Comenzar con teoría 01"],["Skip to practical 01","Ir directamente a práctica 01"],["ISPM-15 basics for non-specialists","Fundamentos de ISPM-15 para no especialistas"],
    ["You do not need to become a phytosanitary expert. For this game, keep one idea in mind: a wood-packaging mark helps, but it does not cancel the need for a physical inspection if the wood condition creates doubt.","No necesitas convertirte en especialista fitosanitario. Para este juego, recuerda una idea: una marca en el embalaje de madera ayuda, pero no elimina la necesidad de una inspección física si el estado de la madera genera dudas."],
    ["ARIA · What to retain","ARIA · Qué debes recordar"],["In the next exercise, the mark looks acceptable. Your real task is to decide whether the physical evidence supports release or whether the package must be held for review.","En el siguiente ejercicio la marca parece aceptable. Tu tarea real es decidir si la evidencia física permite liberar el embalaje o si debe retenerse para revisión."],
    ["What the standard tries to prevent","Qué intenta prevenir la norma"],["Wood packaging can carry insects or organisms across borders. Controls such as treatment and marking are meant to reduce that risk before the pallet or crate enters a new ecosystem.","Los embalajes de madera pueden transportar insectos u organismos entre fronteras. Los controles, como el tratamiento y el marcado, pretenden reducir ese riesgo antes de que el palé o la caja entren en un nuevo ecosistema."],
    ["Why the logistics team should care","Por qué debe importarle al equipo de logística"],["If the packaging is suspicious, the shipment can be held, rejected or quarantined. In operational terms, that means delays, customs friction and poor evidence of control.","Si el embalaje es sospechoso, el envío puede retenerse, rechazarse o ponerse en cuarentena. Operativamente, eso significa retrasos, fricción aduanera y evidencias deficientes de control."],
    ["What you inspect in this game","Qué inspeccionas en este juego"],["The mark is legible.","La marca es legible."],["The wood surface does not show evidence that makes release unsafe.","La superficie de la madera no muestra evidencias que hagan insegura la liberación."],["Any doubt is escalated instead of ignored.","Cualquier duda se escala en lugar de ignorarse."],["Decision logic","Lógica de decisión"],["Release","Liberar"],["Hold","Retener"],["Reject","Rechazar"],["only if the evidence supports it.","solo si las evidencias lo respaldan."],["when the mark exists but physical findings create concern.","cuando existe la marca pero los hallazgos físicos generan preocupación."],["only when the case clearly justifies that stronger decision.","solo cuando el caso justifica claramente esa decisión más restrictiva."],
    ["← Back","← Volver"],["Continue to practical 01","Continuar a práctica 01"],["Inspect the mark and the wood before deciding","Inspecciona la marca y la madera antes de decidir"],
    ["This is the first guided case. The package carries a legible mark, but you must not decide on that basis alone. Inspect both highlighted evidence points on the wood, read the findings, and then choose the correct shipment status.","Este es el primer caso guiado. El embalaje lleva una marca legible, pero no debes decidir solo por eso. Inspecciona los dos puntos de evidencia resaltados en la madera, lee los hallazgos y después elige el estado correcto del envío."],
    ["ARIA · Practical 01 instructions","ARIA · Instrucciones de la práctica 01"],["Do these three things in order: 1) click the two yellow inspection points on the wood, 2) read the evidence that appears in the inspection log, 3) choose the shipment status. If you choose incorrectly, I will tell you why and you can try again.","Haz estas tres cosas en orden: 1) pulsa los dos puntos amarillos de inspección de la madera, 2) lee la evidencia que aparece en el registro de inspección, 3) elige el estado del envío. Si te equivocas, te explicaré por qué y podrás intentarlo de nuevo."],
    ["Shipment","Envío"],["Route","Ruta"],["Priority","Prioridad"],["Standard","Estándar"],["Control state","Estado del control"],["Physical inspection","Inspección física"],["1 · Inspect point A → 2 · Inspect point B → 3 · Read the evidence log → 4 · Decide","1 · Inspecciona el punto A → 2 · Inspecciona el punto B → 3 · Lee el registro de evidencias → 4 · Decide"],["🔎 Magnifier","🔎 Lupa"],["🪵 Surface inspection","🪵 Inspección de superficie"],["📌 Evidence log","📌 Registro de evidencias"],
    ["The yellow circles are the only clickable inspection points in this training case. They sit directly on the crate image and do not move when the window is resized.","Los círculos amarillos son los únicos puntos de inspección interactivos de este caso. Están directamente sobre la imagen de la caja y no se desplazan al cambiar el tamaño de la ventana."],
    ["ISPM-15 training mark","Marca ISPM-15 de entrenamiento"],["Readable training example. In this case the mark itself is acceptable. The shipment decision depends on the physical evidence found on the wood.","Ejemplo de entrenamiento legible. En este caso la marca es aceptable. La decisión sobre el envío depende de las evidencias físicas encontradas en la madera."],
    ["Inspection status","Estado de inspección"],["Mark legibility","Legibilidad de la marca"],["Acceptable","Aceptable"],["Inspection point A","Punto de inspección A"],["Inspection point B","Punto de inspección B"],["Pending","Pendiente"],["Evidence reviewed: 0 / 2","Evidencias revisadas: 0 / 2"],["Evidence A · Suspicious bore holes","Evidencia A · Orificios sospechosos"],["This inspected zone shows suspicious bore-hole evidence. A readable mark does not cancel a physical finding that needs escalation.","Esta zona inspeccionada muestra orificios sospechosos. Una marca legible no anula un hallazgo físico que requiere escalado."],["Evidence B · Suspicious surface anomaly","Evidencia B · Anomalía superficial sospechosa"],["This second finding reinforces the need for a control hold. The case should be reviewed before the packaging is released internationally.","Este segundo hallazgo refuerza la necesidad de retener el embalaje. El caso debe revisarse antes de autorizar su salida internacional."],
    ["Decide the shipment status","Decide el estado del envío"],["Inspect both yellow points first. Then use the evidence log above to make the decision.","Inspecciona primero los dos puntos amarillos. Después utiliza el registro de evidencias para tomar la decisión."],["Release shipment","Liberar envío"],["The mark looks fine, so the package can move immediately.","La marca parece correcta, así que el embalaje puede salir inmediatamente."],["Hold for phytosanitary review","Retener para revisión fitosanitaria"],["The mark is present, but physical evidence creates enough concern to stop release and escalate the case.","La marca está presente, pero la evidencia física genera suficiente preocupación para detener la liberación y escalar el caso."],["Reject immediately","Rechazar inmediatamente"],["Treat the case as automatic hard rejection without escalation.","Tratar el caso como un rechazo automático sin escalado."],
    ["Continue to theory 02","Continuar a teoría 02"],["Understand the residual-bark rule before you act","Comprende la regla de corteza residual antes de actuar"],["People often think “any visible bark means rejection”. This game deliberately teaches a more precise rule. The learner must use the size information shown on the screen instead of deciding by guesswork.","A menudo se piensa que «cualquier corteza visible implica rechazo». Este juego enseña deliberadamente una regla más precisa. Debes utilizar la información de tamaño mostrada en pantalla en lugar de decidir por intuición."],
    ["ARIA · What changes in the next challenge","ARIA · Qué cambia en el siguiente reto"],["You will not inspect hotspots in the next practical. Instead, you will activate a bark gauge, read the dimensions of two bark pieces and choose the statement that matches the rule.","En la siguiente práctica no inspeccionarás puntos concretos. Activarás un medidor de corteza, leerás las dimensiones de dos fragmentos y elegirás la afirmación que se ajuste a la regla."],
    ["Main rule in this training case","Regla principal en este caso de entrenamiento"],["A narrow individual piece of residual bark can remain regardless of length. A wider individual piece can remain only if its surface area stays within the permitted limit used in the exercise.","Un fragmento individual estrecho de corteza residual puede permanecer independientemente de su longitud. Un fragmento más ancho solo puede permanecer si su superficie se mantiene dentro del límite permitido utilizado en el ejercicio."],
    ["What the player must do","Qué debes hacer"],["Activate bark gauge","Activar medidor de corteza"],["Why the control matters","Por qué importa el control"],["If the team reads the tolerance rule incorrectly, they either stop acceptable material or release non-compliant packaging. Both outcomes weaken logistics performance and compliance confidence.","Si el equipo interpreta mal la regla de tolerancia, puede detener material aceptable o liberar embalajes no conformes. Ambos resultados debilitan el rendimiento logístico y la confianza en el cumplimiento."],["How the game helps","Cómo ayuda el juego"],["If the learner answers incorrectly, they receive immediate feedback. On the second failed attempt, the correct answer is revealed and the route forward unlocks automatically.","Si respondes incorrectamente, recibirás feedback inmediato. En el segundo intento fallido se muestra la respuesta correcta y se desbloquea automáticamente la continuación."],
    ["Continue to practical 02","Continuar a práctica 02"],["Apply the bark-tolerance rule correctly","Aplica correctamente la regla de tolerancia de corteza"],["This second practical challenge is simpler once you know the rule. Activate the bark gauge, inspect the measurements on both sample boards and choose the correct statement. You get feedback after each attempt.","Este segundo reto práctico es más sencillo cuando conoces la regla. Activa el medidor de corteza, revisa las medidas de ambas muestras y elige la afirmación correcta. Recibirás feedback tras cada intento."],
    ["Welcome. In this game, you protect both logistics and the environment. First read the concept, mechanics and learning objective. Then move through one theory page before each practical challenge. You do not need prior knowledge of ISPM-15.","Bienvenida. En este juego proteges tanto la logística como el medio ambiente. Lee primero el concepto, la mecánica y el objetivo de aprendizaje. Después pasa por una página de teoría antes de cada reto práctico. No necesitas conocimientos previos de ISPM-15."],
    ["Theory page one explains the basic logic. A compliant-looking mark is helpful, but it does not replace physical inspection. In the next screen, you will inspect two evidence points on the wood and then decide the shipment status.","La primera página teórica explica la lógica básica. Una marca aparentemente conforme ayuda, pero no sustituye la inspección física. En la siguiente pantalla inspeccionarás dos puntos de evidencia en la madera y decidirás el estado del envío."],
    ["Practical one. Step one: click both yellow inspection points placed on the wood. Step two: read the two evidence findings on the right. Step three: choose the shipment status. The correct answer is to hold the shipment for phytosanitary review.","Práctica uno. Paso uno: pulsa los dos puntos amarillos de inspección sobre la madera. Paso dos: lee los dos hallazgos de evidencia de la derecha. Paso tres: elige el estado del envío. La respuesta correcta es retener el envío para revisión fitosanitaria."],
    ["Theory page two explains the residual-bark rule used in the second practical. Bark is not judged by intuition. One narrow piece can remain regardless of length, and a wider piece can still remain if its area stays within the permitted limit used in the exercise.","La segunda página teórica explica la regla de corteza residual utilizada en la segunda práctica. La corteza no se evalúa por intuición. Un fragmento estrecho puede permanecer independientemente de su longitud y uno más ancho puede permanecer si su superficie está dentro del límite permitido del ejercicio."],
    ["Practical two. First click Activate bark gauge. Then compare Sample A, which is 22 millimetres wide, and Sample B, which is 41 millimetres wide with a 34 square centimetre area. Finally, choose the correct statement. If you fail twice, I reveal the answer so you can continue.","Práctica dos. Primero pulsa Activar medidor de corteza. Después compara la muestra A, de 22 milímetros de ancho, con la muestra B, de 41 milímetros de ancho y 34 centímetros cuadrados de superficie. Finalmente, elige la afirmación correcta. Si fallas dos veces, mostraré la respuesta para que puedas continuar."],
    ["Real wooden shipping crate used as a training example","Caja de madera real utilizada como ejemplo de entrenamiento"],["Inspect point A","Inspeccionar punto A"],["Inspect point B","Inspeccionar punto B"],["Close magnifier","Cerrar lupa"],["Enlarged wooden crate","Caja de madera ampliada"]
  ]);

  [
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