/* Year 15 · sustainability for everyone · native bilingual content; no runtime translation. */
(function () {
  "use strict";
  var params=new URLSearchParams(location.search);
  var lang=params.get("hubLang")==="en"?"en":"es";
  document.documentElement.lang=lang;
  var root=document.getElementById("app");
  if(!root)return;
  var chapters=[
    {
      es:{
        kicker:"MISIÓN 01 · INVESTIGA",title:"¿Hace falta cambiarlo todo?",
        intro:"Han pasado 15 años. Un equipo quiere actualizar un ordenador de misión de una aeronave ficticia. El proveedor propone sustituir todo el conjunto.",
        theoryTitle:"Primero, comprender antes de sustituir",
        theory:"Un equipo puede seguir funcionando aunque otro componente haya quedado obsoleto. Antes de retirar materiales, conviene distinguir qué necesita cambiar, qué puede conservarse y qué comprobaciones son obligatorias.",
        factsTitle:"Lo que sabemos",facts:["El ordenador actual no cumple el nuevo requisito de capacidad.","La alimentación eléctrica y la refrigeración funcionaban en la última revisión.","Todavía no hay un análisis documentado de todas las alternativas."],
        question:"¿Cuál debería ser tu primera decisión?",options:[
          {title:"Aceptar la sustitución completa",desc:"El proveedor se encargaría de un único paquete de trabajo.",feedback:"Puede resultar necesario sustituir todo, pero aún no existen evidencias suficientes para descartar otras opciones. La comodidad de gestión no demuestra que sea la mejor solución.",effects:["Más componentes podrían retirarse de lo necesario.","La seguridad exige evaluar igualmente la solución.","Falta justificar la decisión con evidencias."]},
          {title:"Pedir un diagnóstico y comparar alternativas",desc:"Aclarar qué falla, qué sigue funcionando y qué autorizaciones requiere cada opción.",feedback:"Es el punto de partida adecuado. No estás aprobando la reutilización ni una modificación: estás pidiendo la información necesaria para decidir con seguridad y utilizar los recursos con criterio.",effects:["Podrían conservarse componentes que sigan siendo útiles.","Las verificaciones técnicas siguen siendo imprescindibles.","La comparación deja una decisión trazable."]},
          {title:"Mantener todo como está",desc:"Evitar cambios para que no se generen residuos.",feedback:"Evitar residuos no justifica ignorar un requisito de capacidad. La sostenibilidad no debe utilizarse como argumento para omitir una actualización necesaria.",effects:["No se resuelve la necesidad del cliente.","La capacidad y la seguridad deben verificarse.","No hay una alternativa documentada."]}
        ],
        afterTitle:"Lo aprendido: evitar sustituciones innecesarias",
        after:"No se trata de conservarlo todo a cualquier precio. Se trata de evitar retiradas innecesarias después de comprobar las necesidades y los requisitos técnicos.",
        transfer:"En tu trabajo: antes de solicitar un cambio, ¿puedes pedir datos que permitan comparar opciones?"
      },
      en:{
        kicker:"MISSION 01 · INVESTIGATE",title:"Does everything need replacing?",
        intro:"Fifteen years have passed. A team needs to upgrade a mission computer on a fictional aircraft. The supplier proposes replacing the entire assembly.",
        theoryTitle:"Understand the problem before replacing parts",
        theory:"Some equipment can remain functional even when another component is obsolete. Before removing materials, identify what needs to change, what might remain in service and which checks are mandatory.",
        factsTitle:"What we know",facts:["The current computer no longer meets a new capability requirement.","Power and cooling were working at the last review.","There is no documented assessment of all available options yet."],
        question:"What should you do first?",options:[
          {title:"Accept the complete replacement",desc:"The supplier could manage the work as a single package.",feedback:"Complete replacement may prove necessary, but the evidence is not yet sufficient to rule out other options. Ease of coordination does not establish that it is the best solution.",effects:["More components may be removed than necessary.","Safety checks are still required.","The decision is not yet supported by evidence."]},
          {title:"Request a diagnosis and compare options",desc:"Clarify what failed, what still works and what approvals each option requires.",feedback:"A sound starting point. You are not authorising reuse or modification: you are gathering the evidence needed to decide safely and use resources responsibly.",effects:["Serviceable parts may be retained.","Technical checks remain mandatory.","The comparison creates a traceable decision."]},
          {title:"Keep everything unchanged",desc:"Avoid the work to prevent waste.",feedback:"Avoiding waste does not justify ignoring a capability requirement. Sustainability cannot be a reason to skip a necessary upgrade.",effects:["The customer's need remains unresolved.","Capability and safety must be verified.","No documented alternative is available."]}
        ],
        afterTitle:"Takeaway: avoid unnecessary replacement",
        after:"The goal is not to preserve everything at any cost. It is to avoid unnecessary removals after checking requirements and technical suitability.",
        transfer:"At work: before requesting a replacement, can you ask for evidence to compare alternatives?"
      },
      correct:1
    },
    {
      es:{
        kicker:"MISIÓN 02 · ELIGE",title:"Una actualización, dos caminos",
        intro:"El diagnóstico ya está disponible. Solo el ordenador requiere actualización. El resto del conjunto sigue funcionando y existe una opción de sustitución localizada que puede validarse.",
        theoryTitle:"Conservar el valor de lo que funciona",
        theory:"Mantener piezas útiles puede evitar consumo de materias primas, fabricación y residuos innecesarios. Pero la conservación solo tiene sentido cuando se confirma la compatibilidad y se siguen las aprobaciones aplicables.",
        factsTitle:"Evidencias del diagnóstico",facts:["La refrigeración y la alimentación cumplen los requisitos actuales.","Existe una opción de sustitución del ordenador con interfaces documentadas.","Toda intervención requiere pruebas y autorización técnica antes de volver al servicio."],
        question:"¿Qué plan recomendarías evaluar y aprobar?",options:[
          {title:"Sustituir el ordenador y conservar lo que sea válido",desc:"Realizar las verificaciones de compatibilidad y seguridad exigidas.",feedback:"Esta opción mantiene el cambio centrado en la necesidad real. Preserva equipos operativos cuando se confirma que pueden seguir usándose de forma segura.",effects:["Es posible evitar la retirada de piezas operativas.","La compatibilidad y la seguridad se verifican.","El alcance del trabajo queda documentado."]},
          {title:"Sustituir todo igualmente",desc:"La solución completa podría resultar más sencilla de contratar.",feedback:"Puede haber casos en los que sea necesario hacerlo, pero en este escenario existen evidencias y una alternativa viable que deben valorarse antes de retirar equipos operativos.",effects:["Se retirarían componentes que podrían conservarse.","El nuevo conjunto también exige validaciones.","Habría que justificar las sustituciones adicionales."]},
          {title:"Improvisar conexiones para ahorrar material",desc:"Instalar el nuevo ordenador sin verificar la compatibilidad.",feedback:"No es aceptable omitir verificaciones técnicas. El uso eficiente de recursos nunca justifica comprometer la seguridad, el funcionamiento o el control de configuración.",effects:["El posible ahorro no está validado.","Se introduciría un riesgo técnico inaceptable.","No existe una base documental adecuada."]}
        ],
        afterTitle:"Lo aprendido: mantener, cuando sea adecuado",
        after:"Alargar la vida útil de componentes válidos puede ser una estrategia de sostenibilidad. La clave es combinar conservación de recursos con requisitos técnicos y evidencias.",
        transfer:"En tu trabajo: ¿se distingue lo que realmente debe cambiar de lo que sigue siendo útil?"
      },
      en:{
        kicker:"MISSION 02 · CHOOSE",title:"One upgrade, two paths",
        intro:"The diagnosis is complete. Only the computer needs upgrading. The rest of the assembly still works, and a local replacement option is available for validation.",
        theoryTitle:"Preserve the value of working equipment",
        theory:"Retaining usable parts can avoid unnecessary raw material use, manufacturing and waste. But retention makes sense only when compatibility is demonstrated and the required approvals are completed.",
        factsTitle:"Diagnostic evidence",facts:["Cooling and power still meet their applicable requirements.","A replacement option exists with documented interfaces.","All interventions require testing and technical authorisation before returning to service."],
        question:"Which plan would you recommend for assessment and approval?",options:[
          {title:"Replace the computer, retain suitable parts",desc:"Complete the required compatibility and safety checks.",feedback:"This approach focuses the change on the actual need. It retains working equipment where evidence confirms that continued use is safe and suitable.",effects:["Serviceable parts may avoid premature removal.","Compatibility and safety are verified.","The scope of work is documented."]},
          {title:"Replace the entire assembly anyway",desc:"A complete package could be easier to contract.",feedback:"Full replacement can sometimes be necessary, but in this case the evidence and viable alternative should be assessed before removing serviceable equipment.",effects:["Parts that might remain in use would be removed.","The new assembly still requires validation.","Additional removals require justification."]},
          {title:"Improvise connections to save material",desc:"Install the computer without verifying compatibility.",feedback:"Skipping technical checks is not acceptable. Efficient resource use must never compromise safety, function or configuration control.",effects:["Any claimed saving is unverified.","An unacceptable technical risk is introduced.","There is no adequate evidence trail."]}
        ],
        afterTitle:"Takeaway: retain parts when appropriate",
        after:"Extending the life of suitable components can support sustainability. The key is to combine resource conservation with technical requirements and evidence.",
        transfer:"At work: have you distinguished what really needs replacing from what is still useful?"
      },
      correct:0
    },
    {
      es:{
        kicker:"MISIÓN 03 · RECUPERA",title:"¿Un componente retirado es un residuo?",
        intro:"El ordenador antiguo se ha retirado. Ya no cumple las necesidades de esta aeronave, pero funciona. Hay documentación y se ha sugerido un posible uso para formación.",
        theoryTitle:"Retirado no significa automáticamente desechado",
        theory:"Antes del reciclaje de materiales pueden existir otras posibilidades: reutilización, reparación o remanufactura. Ninguna se autoriza por defecto; depende del estado, la seguridad, la trazabilidad y de que exista un uso adecuado.",
        factsTitle:"Pasaporte del componente",facts:["El componente funciona, aunque su capacidad ya no es suficiente para la misión original.","La configuración y el historial están documentados.","Hay un posible uso para formación, pero todavía no se ha evaluado ni aprobado."],
        question:"¿Qué vía estudiarías primero?",options:[
          {title:"Enviar directamente a reciclaje",desc:"Recuperar los materiales sin estudiar otros destinos.",feedback:"El reciclaje puede ser adecuado, pero conviene comprobar antes si existen opciones técnicamente viables de mayor valor. Un componente operativo no es necesariamente un residuo inmediato.",effects:["Podría perderse una oportunidad de uso adicional.","La clasificación y gestión deben ser correctas.","No se documentó la comparación de alternativas."]},
          {title:"Reutilizar inmediatamente en formación",desc:"Como todavía funciona, no hacen falta más comprobaciones.",feedback:"Que funcione no significa que esté aprobado para otro uso. Hay que comprobar seguridad, configuración, idoneidad y necesidad real antes de autorizar la reutilización.",effects:["No se han confirmado las condiciones de uso.","Faltan verificaciones y autorizaciones.","La buena intención no sustituye las evidencias."]},
          {title:"Evaluar la reutilización con pruebas y autorización",desc:"Si no es viable, valorar otras vías antes del reciclaje y la eliminación.",feedback:"Es una secuencia razonable. Primero se comprueba si existe una segunda aplicación segura y útil; si no, se evalúan otras posibilidades según el estado y las normas aplicables.",effects:["Puede mantenerse el valor funcional del componente.","La seguridad y el uso adecuado se verifican.","Las alternativas quedan justificadas."]}
        ],
        afterTitle:"Lo aprendido: circularidad con evidencias",
        after:"Reutilizar no es siempre mejor, ni reciclar es siempre incorrecto. La elección depende de las condiciones reales del componente y de una evaluación completa.",
        transfer:"En tu trabajo: ¿se estudian los destinos posibles antes de declarar algo como residuo?"
      },
      en:{
        kicker:"MISSION 03 · RECOVER",title:"Is a removed part automatically waste?",
        intro:"The old computer has been removed. It no longer meets this aircraft's needs, but it still works. Records are available and a possible training use has been suggested.",
        theoryTitle:"Removed does not automatically mean discarded",
        theory:"Before material recycling, alternatives may exist: reuse, repair or remanufacture. None is automatically approved; the right route depends on condition, safety, traceability and a suitable intended use.",
        factsTitle:"Component passport",facts:["The component works, but its capability no longer meets the original mission requirement.","Its configuration and history are documented.","A potential training use exists but has not been assessed or approved."],
        question:"Which route would you assess first?",options:[
          {title:"Send it straight to recycling",desc:"Recover its materials without assessing any other use.",feedback:"Recycling may ultimately be appropriate, but first assess whether technically suitable higher-value routes are available. A working component is not necessarily immediate waste.",effects:["An additional use opportunity might be lost.","Classification and handling still need to be correct.","There is no documented comparison."]},
          {title:"Use it in training immediately",desc:"It still works, so no additional checks are needed.",feedback:"Working equipment is not automatically approved for a new use. Safety, configuration, suitability and actual demand must be checked first.",effects:["Conditions of use have not been established.","Checks and approvals are missing.","Good intentions do not replace evidence."]},
          {title:"Assess reuse with checks and approval",desc:"If unsuitable, consider other recovery routes before recycling or disposal.",feedback:"A reasonable sequence. First establish whether a safe and useful second application exists; otherwise assess other routes against actual conditions and applicable rules.",effects:["Functional value may be retained.","Safety and suitability are verified.","Alternatives are documented."]}
        ],
        afterTitle:"Takeaway: evidence-based circularity",
        after:"Reuse is not always better, and recycling is not always wrong. The right route follows the component's actual condition and a complete assessment.",
        transfer:"At work: are possible uses assessed before declaring an item waste?"
      },
      correct:2
    },
    {
      es:{
        kicker:"MISIÓN 04 · DEMUESTRA",title:"¿Podemos decir que hemos reducido el impacto?",
        intro:"El equipo ha terminado la modernización. Se conservaron varias piezas, pero nadie ha calculado sus masas ni el impacto de las alternativas. Quieren comunicar el resultado.",
        theoryTitle:"Una decisión prometedora no es una cifra demostrada",
        theory:"Conservar equipos puede reducir ciertos impactos, pero no podemos afirmar cuántos kilogramos de residuos o emisiones se han evitado sin un método, datos y alcance adecuados. La sostenibilidad también exige transparencia.",
        factsTitle:"Información disponible",facts:["Se conoce qué elementos permanecieron en servicio y cuáles se retiraron.","Existen registros de las decisiones y verificaciones.","No hay una comparación validada de masas, consumo de recursos ni emisiones."],
        question:"¿Qué comunicarías sobre el proyecto?",options:[
          {title:"«Hemos reducido un 60 % las emisiones»",desc:"Una cifra llamativa, aunque no esté respaldada por cálculos.",feedback:"No podemos atribuir porcentajes de emisiones sin datos verificables y un alcance definido. Sería una afirmación ambiental no sustentada.",effects:["El impacto real sigue sin cuantificarse.","La afirmación puede inducir a error.","Faltan evidencias para respaldar el mensaje."]},
          {title:"Explicar lo conservado y lo que falta por medir",desc:"Registrar evidencias, delimitar el alcance y cuantificar solo cuando sea posible.",feedback:"Correcto. Puedes informar de los hechos documentados y explicar las limitaciones. Si se cuantifican impactos posteriormente, deberán utilizarse datos y una metodología adecuados.",effects:["Se comunica lo que realmente se conoce.","No se prometen ahorros no demostrados.","Los registros permiten mejorar decisiones futuras."]},
          {title:"No documentar nada",desc:"Evitar el riesgo de equivocarse y pasar al siguiente trabajo.",feedback:"Evitar afirmaciones injustificadas es importante, pero no registrar las decisiones hace perder aprendizaje y trazabilidad. La solución es comunicar de forma precisa y documentada.",effects:["Se pierde información sobre los recursos utilizados.","La comunicación se vuelve difícil de verificar.","Se desaprovecha el aprendizaje del proyecto."]}
        ],
        afterTitle:"Lo aprendido: hechos antes que promesas",
        after:"La comunicación ambiental responsable distingue hechos, estimaciones e incertidumbres. Documentar decisiones también ayuda a prevenir residuos y mejorar futuros proyectos.",
        transfer:"En tu trabajo: ¿puedes explicar con evidencias qué mejoró y qué todavía no sabemos?"
      },
      en:{
        kicker:"MISSION 04 · EVIDENCE",title:"Can we claim a lower impact?",
        intro:"The team has completed the upgrade. Several parts were retained, but no one has calculated their mass or compared the environmental impacts of the options. The team wants to share the result.",
        theoryTitle:"A promising choice is not a proven number",
        theory:"Keeping equipment in use may avoid some impacts, but we cannot claim particular amounts of avoided waste or emissions without suitable data, methods and scope. Sustainability also requires transparency.",
        factsTitle:"Information available",facts:["Records identify the parts retained and those removed.","The decisions and required checks were documented.","There is no validated comparison of mass, resource use or emissions."],
        question:"What would you communicate about the project?",options:[
          {title:"“We cut emissions by 60%”",desc:"A striking number even without a calculation.",feedback:"An emissions percentage cannot be claimed without verifiable data and a defined scope. It would be an unsupported environmental statement.",effects:["Actual impacts have not been quantified.","The claim may mislead readers.","Evidence is missing."]},
          {title:"Explain what was retained and what remains unmeasured",desc:"Record evidence, define the scope and quantify only when justified.",feedback:"Correct. Describe the documented facts and their limitations. Any future impact calculation needs appropriate data and methods.",effects:["Known facts can be communicated clearly.","No unproven savings are promised.","Records support future improvements."]},
          {title:"Document nothing",desc:"Avoid making a mistake and move on to the next job.",feedback:"Avoiding unsupported claims matters, but skipping records loses learning and traceability. The answer is accurate, documented communication.",effects:["Information about resource use is lost.","Claims become harder to check.","Learning opportunities are missed."]}
        ],
        afterTitle:"Takeaway: facts before promises",
        after:"Responsible environmental communication separates facts, estimates and uncertainty. Recording decisions also helps prevent waste and improve future projects.",
        transfer:"At work: can you show evidence for what improved and identify what is still unknown?"
      },
      correct:1
    }
  ];
  var labels={
    es:{
      brand:"SOSTENIBILIDAD EN AIR POWER SERVICES",name:"AÑO 15",hub:"Volver al Sustainability Navigator",
      home:"Inicio",back:"Atrás",next:"Siguiente misión",start:"Empezar",how:"Cómo se juega",
      scenario:"CASO FICTICIO · AERONAVE MILITAR",guide:"ARIA · GUÍA DEL RETO",
      listen:"Escuchar a ARIA",stop:"Detener audio",show:"Mostrar instrucciones",hide:"Ocultar instrucciones",
      coverKicker:"UNA HISTORIA. CUATRO DECISIONES. CONSECUENCIAS REALES QUE COMPRENDER.",
      coverTitle:"AÑO 15",coverTitle2:"El valor de lo que conservamos.",
      coverLead:"Un equipo tiene que modernizar una aeronave que lleva 15 años en servicio. ¿Hay que sustituirlo todo? Tú decides qué investigar, cómo aprovechar los recursos y qué podemos afirmar con evidencias.",
      coverLearn:"Qué aprenderás",coverLearnList:["Evitar sustituciones innecesarias.","Valorar la reutilización y otras opciones responsables.","Entender por qué la seguridad y las evidencias son esenciales.","Distinguir hechos de afirmaciones ambientales sin verificar."],
      coverDisclaimer:"Caso educativo ficticio. No describe una actuación real de Airbus ni autoriza cambios técnicos, reutilización o decisiones de cumplimiento.",
      timelinePast:"AÑO 0",timelineNow:"AÑO 15",timelineFuture:"TU DECISIÓN",
      timelinePastDesc:"Se diseñó y fabricó",timelineNowDesc:"Hace falta actualizar",timelineFutureDesc:"¿Qué conviene hacer?",
      howTitle:"Cómo funciona el juego",howLead:"No tienes que conocer ingeniería. Leerás los hechos, elegirás una opción y descubrirás sus posibles consecuencias antes de avanzar.",
      howSteps:[["01","Lee el contexto","Toda la información necesaria aparece dentro del caso."],["02","Toma una decisión","Elige entre tres alternativas y confirma tu elección."],["03","Descubre por qué","Recibirás una explicación, podrás reintentar y verás el aprendizaje."],["04","Aplica lo aprendido","Al final relacionarás las cuatro decisiones con tu propio trabajo."]],
      howRule:"No hay cifras ambientales inventadas ni decisiones técnicas reales. Las consecuencias son cualitativas y se explican con sus condiciones.",
      goMission:"Comenzar misión 1",mission:"Misión",of:"de",evidence:"EVIDENCIAS",learnFirst:"ANTES DE DECIDIR",choose:"TU DECISIÓN",confirm:"Confirmar decisión",pickFirst:"Selecciona una alternativa para continuar.",
      result:"RESULTADO DE TU DECISIÓN",good:"Decisión bien fundamentada",needs:"Hay una alternativa mejor respaldada por las evidencias",effects:"Qué supone esta opción",rethink:"Probar otra opción",continue:"Continuar",lesson:"QUÉ NOS LLEVAMOS",apply:"Llévalo a tu trabajo",
      finish:"REVISIÓN FINAL",finishTitle:"¿Qué cambia cuando pensamos en sostenibilidad?",finishIntro:"Has recorrido cuatro situaciones habituales: sustituir, conservar, recuperar y comunicar. No se trata de elegir siempre la opción que parece más «verde», sino de decidir con evidencias.",
      scoreLabel:"Decisiones fundamentadas",scoreSuffix:"de 4",scoreNote:"Esta puntuación solo refleja las elecciones de este ejercicio, no un impacto ambiental real.",
      finishLessons:["Antes de sustituir, comprobar qué es necesario.","Conservar lo que sigue siendo adecuado y seguro.","Evaluar opciones para los componentes retirados.","Comunicar resultados con datos y limitaciones."],
      reflectionTitle:"Una pregunta para mañana",reflection:"En mi trabajo, ¿qué decisión podría mejorar si primero comprobara qué recursos ya tenemos, qué alternativas existen y qué evidencias faltan?",
      restart:"Volver a jugar",review:"Revisar mis decisiones",saved:"El progreso se guarda únicamente en este navegador.",status:"Progreso",complete:"Juego completado",
      voiceFail:"El navegador no dispone de voz. Puedes leer las instrucciones en pantalla.",
      guideCover:"Bienvenido. No necesitas conocimientos técnicos. Verás cuatro decisiones sencillas para comprender la sostenibilidad durante la vida útil de un producto.",
      guideHow:"Lee las instrucciones y comienza. Podrás revisar las decisiones anteriores sin perder las respuestas.",
      guideMission:"Lee las evidencias, elige una alternativa y confirma. Después podrás cambiar tu respuesta o pasar a la siguiente misión.",
      guideResult:"Lee las consecuencias y el aprendizaje. Puedes probar otra alternativa antes de avanzar.",
      guideFinal:"Has terminado. Observa las cuatro ideas que puedes aplicar a cualquier puesto de trabajo."
    },
    en:{
      brand:"SUSTAINABILITY IN AIR POWER SERVICES",name:"YEAR 15",hub:"Back to Sustainability Navigator",
      home:"Home",back:"Back",next:"Next mission",start:"Start",how:"How to play",
      scenario:"FICTIONAL CASE · MILITARY AIRCRAFT",guide:"ARIA · CHALLENGE GUIDE",
      listen:"Hear ARIA",stop:"Stop audio",show:"Show instructions",hide:"Hide instructions",
      coverKicker:"ONE STORY. FOUR DECISIONS. CONSEQUENCES WORTH UNDERSTANDING.",
      coverTitle:"YEAR 15",coverTitle2:"The value of what we retain.",
      coverLead:"A team needs to upgrade an aircraft that has been in service for 15 years. Does everything need replacing? You decide what to investigate, how to use resources wisely and what the evidence allows us to claim.",
      coverLearn:"What you will learn",coverLearnList:["Avoid unnecessary replacement.","Assess reuse and other responsible options.","Understand why safety and evidence matter.","Distinguish facts from unsupported environmental claims."],
      coverDisclaimer:"Fictional educational case. It does not describe real Airbus work or authorise technical modifications, reuse or compliance decisions.",
      timelinePast:"YEAR 0",timelineNow:"YEAR 15",timelineFuture:"YOUR CHOICE",
      timelinePastDesc:"Designed and built",timelineNowDesc:"An upgrade is needed",timelineFutureDesc:"What should be done?",
      howTitle:"How the game works",howLead:"No engineering knowledge required. Read the facts, choose an option and see its possible consequences before moving on.",
      howSteps:[["01","Read the context","All the information you need is included in the case."],["02","Make a choice","Choose one of three alternatives and confirm your choice."],["03","Understand why","Read the explanation, retry if you wish and take away the lesson."],["04","Apply the lesson","Connect the four decisions to your own work at the end."]],
      howRule:"No invented environmental numbers or real engineering approvals. The consequences are qualitative and include their conditions.",
      goMission:"Start mission 1",mission:"Mission",of:"of",evidence:"EVIDENCE",learnFirst:"BEFORE YOU DECIDE",choose:"YOUR DECISION",confirm:"Confirm choice",pickFirst:"Select an option to continue.",
      result:"YOUR DECISION REVIEW",good:"Well-supported decision",needs:"Another option is better supported by the evidence",effects:"What this choice means",rethink:"Try another option",continue:"Continue",lesson:"KEY TAKEAWAY",apply:"Apply it at work",
      finish:"FINAL REVIEW",finishTitle:"What changes when we think sustainably?",finishIntro:"You have explored four familiar situations: replacing, retaining, recovering and communicating. The aim is not always to select what looks 'greener', but to make evidence-based choices.",
      scoreLabel:"Evidence-based decisions",scoreSuffix:"out of 4",scoreNote:"This score reflects choices in this exercise only, not actual environmental impact.",
      finishLessons:["Before replacing anything, check what is actually necessary.","Retain parts that are suitable and safe.","Assess options for removed components.","Communicate results with data and limitations."],
      reflectionTitle:"One question for tomorrow",reflection:"At work, which decision could I improve by first checking the resources we have, the alternatives available and the evidence still missing?",
      restart:"Play again",review:"Review my choices",saved:"Progress is stored only in this browser.",status:"Progress",complete:"Game completed",
      voiceFail:"Speech is unavailable in this browser. You can read the on-screen instructions.",
      guideCover:"Welcome. You do not need technical knowledge. Four straightforward decisions will help you understand sustainability across a product's working life.",
      guideHow:"Read the instructions, then begin. You can revisit earlier decisions without losing your answers.",
      guideMission:"Read the evidence, choose an alternative and confirm. You can then change your answer or continue.",
      guideResult:"Read the consequences and takeaway. You can try another choice before moving on.",
      guideFinal:"You have finished. Review four ideas that apply to any job."
    }
  };
  var t=labels[lang],storageKey="sn-year15-for-everyone-v1",state={page:-2,answers:[null,null,null,null],confirmed:[false,false,false,false],showGuide:false};
  function restore(){try{var raw=JSON.parse(localStorage.getItem(storageKey));if(!raw||!Array.isArray(raw.answers)||raw.answers.length!==4)return;state.page=Number.isInteger(raw.page)&&raw.page>=-2&&raw.page<=4?raw.page:-2;state.answers=raw.answers.map(function(x){return Number.isInteger(x)&&x>=0&&x<=2?x:null;});state.confirmed=Array.isArray(raw.confirmed)&&raw.confirmed.length===4?raw.confirmed.map(Boolean):[false,false,false,false];if(state.page===4&&!state.confirmed.every(Boolean))state.page=-2;}catch(e){}}
  function save(){try{localStorage.setItem(storageKey,JSON.stringify({page:state.page,answers:state.answers,confirmed:state.confirmed}));}catch(e){}}
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
  function html(s){return esc(s);}
  function speakerStop(){if("speechSynthesis" in window)window.speechSynthesis.cancel();}
  function go(p){speakerStop();state.page=p;state.showGuide=false;save();render();window.scrollTo({top:0,behavior:"instant"});}
  function score(){return state.confirmed.reduce(function(total,x,i){return total+(x&&state.answers[i]===chapters[i].correct?1:0);},0);}
  function guideText(){if(state.page===-2)return t.guideCover;if(state.page===-1)return t.guideHow;if(state.page===4)return t.guideFinal;return state.confirmed[state.page]?t.guideResult:t.guideMission;}
  function guideBox(){
    var text=guideText();
    return '<aside class="guide" aria-label="'+html(t.guide)+'"><img class="guide-photo" src="../ethical-armor/aria-original.jpg" alt="" onerror="this.style.display=\'none\'"><div class="guide-copy"><small>'+html(t.guide)+'</small><p>'+html(text)+'</p>'+(state.showGuide?'<div class="guide-more">'+html(state.page>=0&&state.page<4?chapters[state.page][lang].theory:"")+'</div>':"")+'</div><div class="guide-actions"><button class="button button-solid" data-action="speak" type="button" aria-label="'+html(t.listen)+'">'+html(t.listen)+'</button><button class="button button-outline" data-action="guide" aria-expanded="'+state.showGuide+'" type="button">'+html(state.showGuide?t.hide:t.show)+'</button></div></aside>';
  }
  function header(){
    var completed=state.confirmed.filter(Boolean).length;
    return '<header class="topbar"><div class="top-inner"><a class="hub-link" href="../?lang='+lang+'#applications">'+html(t.hub)+'</a><div class="brand"><small>'+html(t.brand)+'</small><strong>'+html(t.name)+'</strong></div><div class="progress-area" aria-label="'+html(t.status)+' '+completed+' '+html(t.of)+' 4"><span>'+html(t.status)+'</span><div class="progress-track"><div class="progress-fill" style="width:'+(completed/4*100)+'%"></div></div><b>'+completed+'/4</b></div><div class="toolbar"><button type="button" data-action="home" class="button button-ghost">'+html(t.home)+'</button><div class="locale-switch" aria-label="Language"><button data-action="lang-es" class="'+(lang==="es"?"active":"")+'" aria-pressed="'+(lang==="es")+'" type="button">ES</button><button data-action="lang-en" class="'+(lang==="en"?"active":"")+'" aria-pressed="'+(lang==="en")+'" type="button">EN</button></div></div></div></header>';
  }
  function cover(){
    var points=t.coverLearnList.map(function(x){return '<li>'+html(x)+'</li>';}).join("");
    return '<section class="cover-view"><div class="cover-main"><p class="eyebrow">'+html(t.coverKicker)+'</p><h1 tabindex="-1" id="screen-heading">'+html(t.coverTitle)+'<span>'+html(t.coverTitle2)+'</span></h1><p class="lead">'+html(t.coverLead)+'</p><div class="button-row"><button class="button button-primary" data-action="start" type="button">'+html(t.start)+' <span aria-hidden="true">→</span></button><button class="button button-outline" data-action="how" type="button">'+html(t.how)+'</button></div><div class="learning-list"><strong>'+html(t.coverLearn)+'</strong><ul>'+points+'</ul></div></div><aside class="story-panel"><div class="story-ribbon">'+html(t.scenario)+'</div><div class="story-number">15 <small>'+html(lang==="es"?"AÑOS EN SERVICIO":"YEARS IN SERVICE")+'</small></div><div class="timeline"><div><span>01</span><strong>'+html(t.timelinePast)+'</strong><small>'+html(t.timelinePastDesc)+'</small></div><div><span>02</span><strong>'+html(t.timelineNow)+'</strong><small>'+html(t.timelineNowDesc)+'</small></div><div><span>03</span><strong>'+html(t.timelineFuture)+'</strong><small>'+html(t.timelineFutureDesc)+'</small></div></div></aside></section><p class="disclaimer">'+html(t.coverDisclaimer)+'</p>';
  }
  function how(){
    var steps=t.howSteps.map(function(a){return '<article class="how-step"><span>'+html(a[0])+'</span><div><h3>'+html(a[1])+'</h3><p>'+html(a[2])+'</p></div></article>';}).join("");
    return '<section class="view"><p class="eyebrow">'+html(t.how)+'</p><h1 tabindex="-1" id="screen-heading">'+html(t.howTitle)+'</h1><p class="sublead">'+html(t.howLead)+'</p><div class="how-grid">'+steps+'</div><p class="notice">'+html(t.howRule)+'</p><div class="button-row"><button type="button" data-action="back" class="button button-outline">← '+html(t.back)+'</button><button type="button" data-action="mission-start" class="button button-primary">'+html(t.goMission)+' →</button></div></section>';
  }
  function mission(){
    var i=state.page,m=chapters[i],d=m[lang],reviewed=state.confirmed[i],sel=state.answers[i];
    var facts=d.facts.map(function(s,n){return '<li><span aria-hidden="true">'+(n+1)+'</span>'+html(s)+'</li>';}).join("");
    var opts=d.options.map(function(o,n){
      var chosen=sel===n;
      return '<button class="choice'+(chosen?' selected':'')+'" type="button" data-action="choose" data-index="'+n+'" '+(reviewed?'disabled':'')+' aria-pressed="'+chosen+'"><span class="choice-letter">'+String.fromCharCode(65+n)+'</span><span><strong>'+html(o.title)+'</strong><small>'+html(o.desc)+'</small></span><span class="choice-dot" aria-hidden="true"></span></button>';
    }).join("");
    var output="";
    if(reviewed&&sel!==null){
      var o=d.options[sel],correct=sel===m.correct;
      output='<section class="feedback '+(correct?'positive':'caution')+'" aria-live="polite"><p class="eyebrow">'+html(t.result)+'</p><h3>'+(correct?html(t.good):html(t.needs))+'</h3><p>'+html(o.feedback)+'</p><strong>'+html(t.effects)+'</strong><ul>'+o.effects.map(function(e){return '<li>'+html(e)+'</li>';}).join("")+'</ul><div class="takeaway"><p class="eyebrow">'+html(t.lesson)+'</p><h4>'+html(d.afterTitle)+'</h4><p>'+html(d.after)+'</p></div><p class="transfer"><strong>'+html(t.apply)+':</strong> '+html(d.transfer)+'</p></section>';
    }
    return '<section class="view mission-view"><div class="step-top"><div><p class="eyebrow">'+html(d.kicker)+' · '+(i+1)+'/4</p><h1 tabindex="-1" id="screen-heading">'+html(d.title)+'</h1><p class="sublead">'+html(d.intro)+'</p></div><div class="chapter-index">'+String(i+1).padStart(2,"0")+' <span>/ 04</span></div></div><div class="mission-grid"><section class="evidence-card"><p class="eyebrow">'+html(t.learnFirst)+'</p><h2>'+html(d.theoryTitle)+'</h2><p>'+html(d.theory)+'</p><div class="facts"><strong>'+html(d.factsTitle)+'</strong><ol>'+facts+'</ol></div></section><section class="decision-card"><p class="eyebrow">'+html(t.choose)+'</p><h2>'+html(d.question)+'</h2><div class="choices" role="group" aria-label="'+html(d.question)+'">'+opts+'</div>'+(!reviewed?'<p class="decision-note" aria-live="polite">'+(sel===null?html(t.pickFirst):"")+'</p><button class="button button-primary confirm" type="button" data-action="confirm" '+(sel===null?'disabled':'')+'>'+html(t.confirm)+' →</button>':"")+'</section></div>'+output+'<div class="bottom-nav"><button type="button" class="button button-outline" data-action="back">← '+html(t.back)+'</button>'+(reviewed?'<div class="forward"><button class="button button-ghost" type="button" data-action="retry">'+html(t.rethink)+'</button><button class="button button-primary" type="button" data-action="next">'+html(i===3?t.finish:t.next)+' →</button></div>':"")+'</div></section>';
  }
  function finalPage(){
    var rows=chapters.map(function(m,i){var answered=state.answers[i],ok=answered===m.correct;return '<div class="recap-item"><span>'+(i+1)+'</span><div><strong>'+html(m[lang].title)+'</strong><p>'+html(m[lang].afterTitle)+'</p></div><b class="'+(ok?"ok":"review")+'">'+(ok?'✓':'↻')+'</b></div>';}).join("");
    return '<section class="view final-screen"><p class="eyebrow">'+html(t.finish)+'</p><h1 tabindex="-1" id="screen-heading">'+html(t.finishTitle)+'</h1><p class="sublead">'+html(t.finishIntro)+'</p><div class="finish-grid"><div class="finish-score"><span class="score-number">'+score()+' <small>/ 4</small></span><h2>'+html(t.scoreLabel)+'</h2><p>'+html(t.scoreNote)+'</p><div class="finish-message">'+html(t.complete)+'</div></div><div class="recap">'+rows+'</div></div><div class="reflection"><p class="eyebrow">'+html(t.reflectionTitle)+'</p><h2>'+html(t.reflection)+'</h2><ul>'+t.finishLessons.map(function(x){return '<li>'+html(x)+'</li>';}).join("")+'</ul></div><div class="button-row"><button type="button" class="button button-outline" data-action="review">'+html(t.review)+'</button><button type="button" class="button button-primary" data-action="restart">'+html(t.restart)+' →</button></div></section>';
  }
  function render(){
    document.title=(lang==="es"?"Año 15 · El valor de lo que conservamos":"Year 15 · The value of what we retain");
    var body=state.page===-2?cover():state.page===-1?how():state.page===4?finalPage():mission();
    root.innerHTML=header()+'<main class="app-frame">'+guideBox()+body+'<footer class="footnote">'+html(t.saved)+' · '+html(t.coverDisclaimer)+'</footer></main>';
    var heading=document.getElementById("screen-heading");
    if(heading&&state.page!==-2){heading.focus({preventScroll:true});}
  }
  function speak(){
    if(!("speechSynthesis" in window)||!("SpeechSynthesisUtterance" in window)){window.alert(t.voiceFail);return;}
    if(window.speechSynthesis.speaking){speakerStop();return;}
    var text=guideText();
    if(state.page>=0&&state.page<4){text+=" "+chapters[state.page][lang].intro;}
    var u=new SpeechSynthesisUtterance(text);u.lang=lang==="es"?"es-ES":"en-GB";u.rate=.95;
    var voices=window.speechSynthesis.getVoices();
    var voice=voices.find(function(v){return v.lang.toLowerCase().startsWith(lang==="es"?"es":"en");});
    if(voice)u.voice=voice;
    window.speechSynthesis.cancel();window.speechSynthesis.speak(u);
  }
  root.addEventListener("click",function(e){
    var button=e.target.closest("[data-action]");if(!button||button.disabled)return;
    var action=button.dataset.action,i=state.page;
    if(action==="lang-es"||action==="lang-en"){speakerStop();var u=new URL(location.href);u.searchParams.set("hubLang",action.slice(-2));location.href=u.toString();return;}
    if(action==="home"){go(-2);return;}
    if(action==="speak"){speak();return;}
    if(action==="guide"){state.showGuide=!state.showGuide;render();return;}
    if(action==="start"){go(0);return;}
    if(action==="how"){go(-1);return;}
    if(action==="mission-start"){go(0);return;}
    if(action==="back"){go(i===-1?-2:i===0?-1:i===4?3:i-1);return;}
    if(action==="choose"&&i>=0&&i<4&&!state.confirmed[i]){state.answers[i]=Number(button.dataset.index);save();render();return;}
    if(action==="confirm"&&i>=0&&i<4&&state.answers[i]!==null){state.confirmed[i]=true;save();render();return;}
    if(action==="retry"&&i>=0&&i<4){state.answers[i]=null;state.confirmed[i]=false;save();render();return;}
    if(action==="next"&&i>=0&&i<4&&state.confirmed[i]){go(i===3?4:i+1);return;}
    if(action==="review"){go(0);return;}
    if(action==="restart"){state={page:-2,answers:[null,null,null,null],confirmed:[false,false,false,false],showGuide:false};save();go(-2);}
  });
  restore();
  render();
})();
