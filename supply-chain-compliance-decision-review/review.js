(function(){"use strict";
const t=(es,en)=>({es,en});
const copy={skip:t("Saltar al contenido","Skip to content"),labBrand:t("Sostenibilidad aeronáutica · Laboratorio formativo","Sustainable Aviation · Learning Lab"),hub:t("Volver al Hub","Return to the Hub"),eyebrow:t("Revisión aplicada · 6 escenarios y 18 decisiones","Applied review · 6 scenarios and 18 decisions"),title:t("Revisión de Decisiones de Cadena de Suministro y Cumplimiento","Supply Chain & Compliance Decision Review"),lead:t("Analiza evidencias, incertidumbre, presiones y autoridad en seis escenarios aeroespaciales conectados.","Analyse evidence, uncertainty, pressure and authority across six connected aerospace scenarios."),notice:t("Indicador personal de aprendizaje. No es una calificación formal, certificación ni prueba de competencia profesional.","Personal learning indicator. This is not a formal grade, certification or proof of professional competence."),prev:t("Anterior","Previous"),next:t("Siguiente escenario","Next scenario"),final:t("Ir a revisión final","Go to final review"),context:t("Contexto operacional","Operational context"),evidence:t("Evidencia disponible","Available evidence"),missing:t("Información ausente o incierta","Missing or uncertain information"),pressure:t("Presiones en conflicto","Competing pressures"),decide:t("Revisar decisiones","Review decisions"),answer:t("Responde las tres decisiones antes de continuar.","Answer all three decisions before continuing."),strong:t("Decisión más sólida. ","Stronger decision. "),weak:t("Decisión más débil. ","Weaker decision. "),reviewTitle:t("Revisión temática final","Final thematic review"),reviewIntro:t("Has intentado las 18 decisiones. Revisa patrones, fortalezas y áreas que conviene reforzar antes de cerrar.","You attempted all 18 decisions. Review patterns, strengths and areas to revisit before closing."),strengths:t("Fortalezas","Strengths"),areas:t("Áreas a revisar","Areas to revisit"),none:t("Ninguna todavía; revisa el feedback de los escenarios.","None yet; revisit the scenario feedback."),reviewAction:t("Revisar resultado y completar","Review result and complete"),completed:t("Revisión completada","Review completed"),limitation:t("Este resultado es un indicador personal y autogestionado. No acredita identidad, participación, aprobación, competencia profesional, cualificación jurídica ni certificación.","This result is a personal, self-managed indicator. It does not verify identity, participation, passing, professional competence, legal qualification or certification."),revisit:t("Recursos recomendados para revisar","Recommended resources to revisit")};
const d=(q,theme,opts)=>({q:t(q[0],q[1]),theme,opts:opts.map(o=>({text:t(o[0],o[1]),strong:o[2],feedback:t(o[3],o[4])}))});
const scenarios=[
{id:"origin",title:t("Retrofit urgente: origen aguas arriba desconocido","Urgent retrofit: unknown upstream origin"),context:t("Un proveedor directo ofrece placas electrónicas para una modernización urgente de aviónica en una aeronave inmovilizada (AOG). Puede entregarlas a tiempo y declara cumplir los requisitos, pero no identifica la instalación donde se procesó o refinó el tantalio de los componentes.","A Tier 1 offers boards for an AOG avionics retrofit. It can deliver on time and declares compliance, but does not identify the tantalum processor or smelter."),evidence:t("Contrato con el proveedor directo, declaración genérica, lista de materiales parcial y certificado del sistema de gestión.","Tier 1 contract, generic declaration, partial bill of materials and management-system certificate."),missing:t("Origen aguas arriba, cadena de custodia, alcance de la declaración y método de verificación.","Upstream origin, chain of custody, declaration scope and verification method."),pressure:t("Disponibilidad de flota, coste de parada y proveedor único.","Fleet availability, downtime cost and single-source supply."),decisions:[
d(["¿Cómo clasificas el dato desconocido?","How do you classify the unknown datum?"],"traceability",[["Como incumplimiento confirmado","As confirmed non-compliance",false,"Desconocer el origen es una falta de información importante, pero no demuestra por sí solo un daño ni un incumplimiento. Registra lo que falta e investígalo.","Missing origin is a serious gap, but does not itself prove harm or non-compliance. Record the limitation and investigate."],["Como falta de evidencias que exige trazabilidad adicional","As an evidence gap requiring additional traceability",true,"Distingue entre información desconocida y un incumplimiento demostrado. Solicita el nombre de la instalación de procesamiento o refinado, el alcance de las declaraciones y la trazabilidad; establece cuándo revisar los resultados.","This separates uncertainty from a finding. Request processor/smelter, scope and chain, and define when to reassess."],["Como irrelevante por conocer al Tier 1","As irrelevant because Tier 1 is known",false,"Conocer al contratista directo no revela el origen aguas arriba ni controla el riesgo material.","Knowing the direct contractor does not reveal upstream origin or control material risk."]]),
d(["¿Qué acción inicial es proporcional?","Which initial action is proportionate?"],"evidence",[["Aceptar la declaración sin límites","Accept the declaration without limits",false,"Una declaración limitada no cubre información no observada. Documenta alcance y pide evidencia dirigida.","A limited declaration does not cover unobserved information. Document its scope and request targeted evidence."],["Separar la autorización técnica de la diligencia debida, escalar la falta de información y definir controles temporales","Separate technical release from due diligence, escalate the gap and define temporary controls",true,"Evita que la urgencia mezcle autoridades. Cada decisión conserva responsable, evidencia pendiente, condición y fecha.","This prevents urgency from mixing authorities. Each decision retains an owner, pending evidence, condition and date."],["Cancelar automáticamente","Automatically cancel",false,"Puede ser necesario detener, pero primero caracteriza gravedad, exposición, alternativas y autoridad; la ausencia de datos no dicta una respuesta única.","A stop may be needed, but first characterise severity, exposure, alternatives and authority; missing data does not dictate one response."]]),
d(["¿Qué debe constar en el registro de auditoría?","What belongs in the audit trail?"],"governance",[["Solo el precio final","Final price only",false,"No permite reconstruir riesgo, autoridad ni condiciones.","It cannot reconstruct risk, authority or conditions."],["Fuentes, información pendiente, hipótesis, responsables, decisión condicionada y motivo de revisión","Sources, gaps, assumptions, owners, conditional decision and review trigger",true,"Permite reconstrucción y reapertura si cambia origen, proveedor o evidencia.","This supports reconstruction and reopening if origin, supplier or evidence changes."],["Solo correos del proveedor","Supplier emails only",false,"Los correos son una fuente, no la decisión gobernada ni sus límites.","Emails are one source, not the governed decision or its limits."]])]},
{id:"rights",title:t("Material crítico: señales de derechos y comunidad","Critical material: human-rights and community signals"),context:t("Una fuente de cobalto ofrece menor coste. Informes creíbles señalan conflicto de tierras, posible trabajo precario y protestas comunitarias, pero no existe resolución judicial.","A cobalt source offers lower cost. Credible reports flag land conflict, possible precarious labour and community protests, but there is no court ruling."),evidence:t("Informes externos, respuesta parcial del proveedor, localización aproximada y trazabilidad incompleta.","Third-party reports, partial supplier response, approximate location and incomplete traceability."),missing:t("Vínculo exacto con la operación, personas afectadas, controles y eficacia de remediación.","Exact link to the operation, affected people, controls and remediation effectiveness."),pressure:t("Ahorro, plazo de rediseño y elevada dependencia del material.","Savings, redesign schedule and high material dependency."),decisions:[
d(["¿Cómo priorizas el riesgo?","How do you prioritise the risk?"],"due",[["Solo por probabilidad estadística","By statistical likelihood only",false,"Daños graves pueden requerir prioridad aunque la probabilidad sea incierta.","Severe harm may require priority even when likelihood is uncertain."],["Por gravedad, alcance, reversibilidad, vínculo y probabilidad con incertidumbre explícita","By severity, scale, reversibility, linkage and likelihood with explicit uncertainty",true,"La priorización no confunde ausencia de certeza con ausencia de riesgo.","Prioritisation does not confuse lack of certainty with lack of risk."],["Solo por coste","By cost only",false,"El coste no representa impacto sobre personas ni obligaciones de diligencia.","Cost does not represent impacts on people or due-diligence duties."]]),
d(["¿Cuándo escalas?","When do you escalate?"],"escalation",[["Solo después de daño probado","Only after harm is proven",false,"Esperar certeza puede agravar un impacto severo. Escala señales creíbles según autoridad y gravedad.","Waiting for certainty may worsen severe impact. Escalate credible signals according to authority and severity."],["Ahora, aportando hechos, incertidumbres, capacidad de influencia y opciones de control","Now, with facts, uncertainties, leverage and control options",true,"La dirección puede decidir investigación, diálogo con las partes implicadas, condiciones, suspensión o desvinculación responsable sin convertir indicios en acusaciones.","Management can decide investigation, engagement, conditions, pause or responsible exit without turning signals into accusations."],["Nunca si el proveedor ofrece un precio bajo","Never if the supplier is cheap",false,"Urgencia y coste no eliminan el riesgo humano ni la responsabilidad de decisión.","Urgency and cost do not remove human risk or decision responsibility."]]),
d(["¿Qué acción correctiva está suficientemente justificada?","Which corrective action is defensible?"],"governance",[["Una promesa sin fecha","An undated promise",false,"No define implementación ni eficacia.","It defines neither implementation nor effectiveness."],["Acciones con responsable, plazo, evidencias, participación apropiada y criterio de eficacia","Actions with owner, deadline, evidence, appropriate engagement and effectiveness criterion",true,"El cierre exige demostrar cambio, no solo actividad o recepción documental.","Closure requires evidence of change, not merely activity or document receipt."],["Cambiar de proveedor sin evaluar impactos","Switch supplier without assessing impacts",false,"La salida puede desplazar o agravar daños; puede ser adecuada, pero requiere análisis y transición responsable.","Exit may shift or worsen harm; it may be appropriate, but requires analysis and responsible transition."]])]},
{id:"chemical",title:t("Sustitución de recubrimiento por cambio de proveedor","Coating substitution after supplier change"),context:t("Un proveedor propone un tratamiento superficial alternativo por obsolescencia. Aporta declaración química, pero no datos completos de corrosión ni aprobación de ingeniería.","A supplier proposes an alternative surface treatment due to obsolescence. It provides a chemical declaration, but not full corrosion data or engineering approval."),evidence:t("Composición parcial, ficha de datos de seguridad (FDS), declaración REACH y ensayo de laboratorio poco representativo.","Partial composition, SDS, REACH declaration and a non-representative laboratory test."),missing:t("Aplicabilidad exacta, cualificación, durabilidad, interfaces y autoridad técnica.","Exact applicability, qualification, durability, interfaces and technical authority."),pressure:t("Riesgo de parada de línea y stock del tratamiento anterior casi agotado.","Line-stop risk and near-exhausted stock of the previous treatment."),decisions:[
d(["¿Qué distingue las evidencias?","What distinguishes the evidence?"],"regulatory",[["La declaración química confirma el rendimiento técnico","The chemical declaration approves performance",false,"Evidencia química y cualificación técnica responden preguntas distintas.","Chemical evidence and technical qualification answer different questions."],["El cumplimiento químico y la aprobación de ingeniería requieren evidencias distintas pero relacionadas","Chemical compliance and engineering approval require connected but separate evidence",true,"Ningún documento único sustituye ambos juicios.","No single document replaces both judgements."],["La ficha de datos de seguridad confirma la aeronavegabilidad","The SDS confirms airworthiness",false,"Una SDS comunica peligros y manejo; no cualifica el tratamiento para la función.","An SDS communicates hazards and handling; it does not qualify the treatment for function."]]),
d(["¿Qué puede proceder?","What may proceed?"],"evidence",[["Sustitución en flota completa","Fleet-wide substitution",false,"Faltan aplicabilidad, cualificación y autoridad.","Applicability, qualification and authority are missing."],["Investigación y ensayos controlados y autorizados; no liberar producto sin superar los requisitos obligatorios","Controlled investigation/testing under authority; no product release without gates",true,"Permite generar evidencia sin presentar la alternativa como aprobada.","This generates evidence without presenting the alternative as approved."],["Nada, ni siquiera análisis","Nothing, including analysis",false,"Detener liberación no impide investigar una solución controlada.","Stopping release does not prevent controlled investigation."]]),
d(["¿Qué cambio obliga a revisar de nuevo la decisión?","What trigger reopens the decision?"],"governance",[["Cambio de composición, proceso, proveedor, uso o resultado de ensayo","Change in composition, process, supplier, use or test result",true,"Cada cambio puede invalidar hipótesis químicas o técnicas.","Each change may invalidate chemical or technical assumptions."],["Solo cierre anual","Year end only",false,"La revisión debe seguir cambios relevantes, no solo calendario.","Review should follow relevant changes, not calendar alone."],["Ninguno tras la primera firma","None after first signature",false,"Una aprobación tiene alcance y configuración; no es universal ni permanente.","An approval has scope and configuration; it is neither universal nor permanent."]])]},
{id:"packaging",title:t("Embalaje para despliegue internacional","Packaging for international deployment"),context:t("Un repuesto debe viajar a una base exterior. La madera muestra una marca borrosa; el certificado PDF parece correcto, pero la inspección encuentra corteza y reparación reciente.","A spare must travel to an overseas base. The wood has a blurred mark; the PDF certificate looks correct, but inspection finds bark and a recent repair."),evidence:t("PDF, fotografías parciales, inspección física y ruta aduanera.","PDF, partial photographs, physical inspection and customs route."),missing:t("Autenticidad y legibilidad de marca, tratamiento de la pieza reparada y requisitos del destino.","Mark authenticity and legibility, treatment of the repaired piece and destination requirements."),pressure:t("Vuelo de salida en horas, AOG y coste de reembalaje.","Flight departure in hours, AOG and repacking cost."),decisions:[
d(["¿Qué evidencia pesa más?","Which evidence carries more weight?"],"logistics",[["El PDF por sí solo","The PDF alone",false,"El documento no invalida señales físicas contradictorias.","The document does not override contradictory physical signals."],["Conjunto de documento, marca, condición física, reparación y requisito de destino","Document, mark, physical condition, repair and destination requirement together",true,"La conformidad del embalaje depende del objeto real y su ruta.","Packaging compliance depends on the actual object and its route."],["Solo la urgencia","Urgency alone",false,"La urgencia no prueba tratamiento y puede aumentar riesgo fronterizo.","Urgency does not prove treatment and may increase border risk."]]),
d(["¿Qué decisión es defendible?","Which decision is defensible?"],"logistics",[["Enviar y explicar después","Ship and explain later",false,"Traslada riesgo a aduana, misión y receptor.","This shifts risk to customs, mission and recipient."],["Retener ese embalaje, verificar o reembalar con material conforme y registrar impacto","Hold that packaging, verify or repack with compliant material and record impact",true,"La señal física y la incertidumbre justifican control antes del cruce fronterizo.","The physical signal and uncertainty justify control before border crossing."],["Cancelar toda la misión","Cancel the entire mission",false,"Puede haber alternativas proporcionadas como reembalaje o verificación acelerada.","Proportionate alternatives may exist, such as repacking or accelerated verification."]]),
d(["¿Quién puede autorizar una excepción?","Who decides an exception?"],"governance",[["Cualquier expedidor","Any shipper",false,"Una excepción necesita autoridad definida y puede no ser legalmente disponible.","An exception needs defined authority and may not be legally available."],["La autoridad designada, tras confirmar si existe una vía legal y documentar condiciones","The designated authority, after confirming whether a lawful route exists and documenting conditions",true,"No se inventan excepciones por presión operativa.","Exceptions are not invented under operational pressure."],["El proveedor de madera","The wood supplier",false,"Puede aportar evidencia, pero no sustituye la autoridad del envío y destino.","It may provide evidence, but does not replace shipment and destination authority."]])]},
{id:"obsolescence",title:t("Rediseño por obsolescencia y origen incompleto","Obsolescence redesign and incomplete origin"),context:t("Un componente electrónico obsoleto se sustituye por otro más barato con material crítico de origen parcial y nuevas subcontratas.","An obsolete electronic component is replaced by a cheaper one with partially sourced critical material and new subcontractors."),evidence:t("Equivalencia funcional preliminar, lista de proveedores directos, coste y plazos.","Preliminary functional equivalence, Tier 1 list, cost and schedule."),missing:t("Subcontratistas de niveles posteriores, condiciones laborales, origen de materiales, ensayos y control de configuración.","Lower tiers, labour conditions, material origin, tests and configuration control."),pressure:t("Última compra antes de la retirada del producto, continuidad de las reparaciones y presupuesto.","Last-time buy, repair continuity and budget."),decisions:[
d(["¿Cómo estructuras la revisión?","How do you structure the review?"],"evidence",[["Una única puntuación de coste","One cost score",false,"Oculta umbrales técnicos y riesgos no comparables.","It hides technical thresholds and non-comparable risks."],["Requisitos técnicos obligatorios y evaluación diferenciada del suministro, las personas y la continuidad","Mandatory technical gates plus separate sourcing, people and continuity assessment",true,"Integra sin permitir que una ventaja económica compense un fallo obligatorio.","This integrates without allowing an economic benefit to offset a mandatory failure."],["Aprobación comercial automática","Automatic commercial approval",false,"Compras no sustituye cualificación, diligencia ni configuración.","Commercial approval does not replace qualification, diligence or configuration."]]),
d(["¿Qué haces con el origen parcial?","What do you do with partial origin?"],"traceability",[["Lo completas con una suposición","Complete it with an assumption",false,"Fabricaría trazabilidad y debilitaría el audit trail.","This would fabricate traceability and weaken the audit trail."],["Registra qué se conoce, qué falta, fuente, confianza y plan de cierre","Record what is known, missing, source, confidence and closure plan",true,"Permite decidir proporcionalmente sin convertir incertidumbre en certeza.","This enables proportionate decisions without turning uncertainty into certainty."],["Lo declaras conforme","Declare it compliant",false,"Una declaración sin alcance no cierra el gap.","A declaration without scope does not close the gap."]]),
d(["¿Cuándo se debe escalar a la dirección?","When does this escalate to management?"],"escalation",[["Cuando riesgos graves, dependencia o excepciones exceden autoridad operativa","When severe risks, dependency or exceptions exceed operational authority",true,"La escalación lleva opciones, impactos, incertidumbres y recomendación, no solo alarma.","Escalation carries options, impacts, uncertainties and recommendation, not merely alarm."],["Nunca, porque es rediseño","Never, because it is redesign",false,"El rediseño puede concentrar riesgo de suministro, humano y técnico.","Redesign may concentrate supply, human and technical risk."],["Solo si aumenta el precio","Only if price rises",false,"La autoridad depende también de severidad, continuidad y cumplimiento.","Authority also depends on severity, continuity and compliance."]])]},
{id:"conditional",title:t("Liberación condicional bajo presión operacional","Conditional release under operational pressure"),context:t("Para una campaña Air Power convergen un coating pendiente, origen mineral incompleto y embalaje revalidado. Distintas funciones poseen partes de la decisión.","For an Air Power campaign, a pending coating, incomplete mineral origin and revalidated packaging converge. Different functions own parts of the decision."),evidence:t("Ensayos parciales, nueva inspección de embalaje, supplier action plan y registro de riesgos.","Partial tests, new packaging inspection, supplier action plan and risk register."),missing:t("Ensayo final de coating y verificación upstream independiente.","Final coating test and independent upstream verification."),pressure:t("Ventana de despliegue, disponibilidad y coste contractual.","Deployment window, availability and contractual cost."),decisions:[
d(["¿Qué puede ser condicional?","What may be conditional?"],"governance",[["Cualquier requisito","Any requirement",false,"Un requisito obligatorio sin vía autorizada no se vuelve opcional por documentarlo.","A mandatory requirement without an authorised route does not become optional through documentation."],["Solo lo autorizado, indicando riesgo residual, controles, responsable, vencimiento y evidencias pendientes","Only what is authorised, with residual risk, controls, owner, expiry and pending evidence explicit",true,"Condicional no significa indefinido ni aprobado por completo.","Conditional does not mean indefinite or fully approved."],["Nada puede documentarse","Nothing can be documented",false,"Incluso una parada necesita rationale, autoridad y criterio de reapertura.","Even a stop needs rationale, authority and reopening criteria."]]),
d(["¿Qué debe detenerse?","What must stop?"],"regulatory",[["Una liberación que no cumple un requisito obligatorio ni dispone de excepción válida","A release that fails a mandatory gate with no authorised exception",true,"La urgencia no crea autoridad técnica o regulatoria.","Urgency does not create technical or regulatory authority."],["Toda investigación","All investigation",false,"Puede continuar trabajo controlado para cerrar evidencia.","Controlled work may continue to close evidence."],["Solo lo costoso","Only expensive work",false,"La parada se basa en requisitos y riesgo, no coste.","A stop is based on requirements and risk, not cost."]]),
d(["¿Cómo cierras la revisión?","How do you close the review?"],"governance",[["Con la palabra aprobado","With the word approved",false,"No muestra el alcance, las condiciones ni los motivos para revisar la decisión.","It shows neither scope, conditions nor triggers."],["Con decisiones por autoridad competente, evidencias, información pendiente, acciones, fechas, eficacia y motivos de revisión","With decisions by authority, evidence, gaps, actions, dates, effectiveness and triggers",true,"El registro de auditoría permite reconstruir la decisión y evita aplicar una aprobación parcial fuera de su alcance.","The audit trail supports reconstruction and prevents partial approval being used out of scope."],["Borrando borradores anteriores","By deleting earlier drafts",false,"El control de versiones debe conservar evolución y rationale según gobernanza aplicable.","Version control should retain evolution and rationale under applicable governance."]])]}];
const themes={traceability:t("Trazabilidad","Traceability"),evidence:t("Evidencia","Evidence"),due:t("Diligencia debida","Due diligence"),regulatory:t("Cumplimiento regulatorio/producto","Regulatory/product compliance"),logistics:t("Logística","Logistics"),escalation:t("Escalación","Escalation"),governance:t("Gobernanza","Governance")};
let lang=new URLSearchParams(location.search).get("hubLang")==="en"?"en":"es",current=0,view="scenario",state={answers:{},reviewed:[],studied:[],final:false};const key="sn-assessment-supply-chain-compliance-decision-review-v1";try{state={...state,...JSON.parse(localStorage.getItem(key)||"{}")};}catch(_){}state.studied=Array.isArray(state.studied)?state.studied:[];state.reviewed=Array.isArray(state.reviewed)?state.reviewed:[];state.answers=state.answers&&typeof state.answers==="object"?state.answers:{};const $=s=>document.querySelector(s),save=()=>{try{localStorage.setItem(key,JSON.stringify(state));}catch(_){}},attempted=s=>s.decisions.every((_,i)=>state.answers[`${s.id}-${i}`]!==undefined),allAttempted=()=>scenarios.every(attempted);
function applyCopy(){document.documentElement.lang=lang;document.title=copy.title[lang];document.querySelectorAll("[data-copy]").forEach(n=>n.textContent=copy[n.dataset.copy][lang]);document.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===lang)));$("#hub").href=`../?hubLang=${lang}#learning-paths`;document.querySelector("nav")?.setAttribute("aria-label",lang==="es"?"Escenarios":"Scenarios");}
const chapterLabels={
 es:{open:"Ver página completa de teoría →",short:"Teoría",chapter:"CAPÍTULO DE APRENDIZAJE",subtitle:"Explicación completa tras las tres decisiones",intro:"Has terminado las preguntas del escenario. Ahora puedes estudiar el tema con calma, relacionar conceptos y ver cómo se aplican en la práctica.",relevance:"POR QUÉ IMPORTA",caseTitle:"EL CASO EXPLICADO",example:"EJEMPLO APLICADO",glossary:"GLOSARIO",checklist:"COMPROBACIONES ANTES DE DECIDIR",takeaway:"IDEA CLAVE",reviewAnswers:"LO APRENDIDO EN LAS TRES DECISIONES",sources:"FUENTES PARA PROFUNDIZAR",next:"Continuar al siguiente escenario",last:"Continuar a la revisión final",back:"Volver a las preguntas",notice:"Material de aprendizaje general. Ante un caso real hay que comprobar la legislación, los procedimientos internos y las personas autorizadas que correspondan."},
 en:{open:"Open full theory chapter →",short:"Theory",chapter:"LEARNING CHAPTER",subtitle:"Complete explanation after the three decisions",intro:"You have answered the scenario's questions. Now study the topic in depth, connect the concepts and see how they apply in practice.",relevance:"WHY IT MATTERS",caseTitle:"UNDERSTANDING THE CASE",example:"WORKED EXAMPLE",glossary:"GLOSSARY",checklist:"CHECK BEFORE DECIDING",takeaway:"KEY TAKEAWAY",reviewAnswers:"WHAT THE THREE DECISIONS TAUGHT",sources:"FURTHER READING",next:"Continue to next scenario",last:"Continue to final review",back:"Back to questions",notice:"General learning material. For real cases, check the applicable laws, internal procedures and competent decision-makers."}
};
function nav(){
 const unlocked=scenarios.findIndex(s=>!state.studied.includes(s.id));
 const max=unlocked<0?6:unlocked;
 const lesson=chapterLabels[lang];
 $("#nav").innerHTML=[...scenarios,{title:copy.reviewTitle}].map(function(s,i){
   const allowed=i<=max,seen=i<6&&state.reviewed.includes(s.id)&&attempted(s);
   const selected=i===current&&(view==="scenario"||view==="chapter");
   return '<li class="nav-entry"><button data-go="'+i+'" '+(allowed?'':'disabled')+' '+(selected&&view==="scenario"?'aria-current="step"':'')+'>'+(i<6?(i+1)+'. ':'')+safeText(s.title[lang])+'</button>'
     +(seen?'<button class="nav-theory" data-chapter="'+i+'" '+(selected&&view==="chapter"?'aria-current="step"':'')+'>'+safeText(lesson.short)+'</button>':'')+'</li>';
 }).join("");
 document.querySelectorAll("[data-go]:not(:disabled)").forEach(b=>b.onclick=()=>show(+b.dataset.go));
 document.querySelectorAll("[data-chapter]").forEach(b=>b.onclick=()=>showChapter(+b.dataset.chapter));
 const count=state.studied.filter(id=>scenarios.some(s=>s.id===id)).length+(state.final?1:0);
 $("#progress").textContent=count+" / 7";$("#bar").value=count;
}
function renderChapter(s){
 const page=window.SCReviewChapters?.[s.id]?.[lang],l=chapterLabels[lang];
 if(!page){$("#content").innerHTML="<h2>"+safeText(l.chapter)+"</h2><p>"+safeText(l.intro)+"</p>";return;}
 const paragraphs=xs=>xs.map(x=>'<p>'+safeText(x)+'</p>').join("");
 const sectionHTML=page.sections.map(function(x,i){
   return '<section class="chapter-section"><h3>'+safeText(x[0])+'</h3>'+paragraphs(x[1])+'</section>';
 }).join("");
 const glossary=page.glossary.map(x=>'<div class="glossary-entry"><dt>'+safeText(x[0])+'</dt><dd>'+safeText(x[1])+'</dd></div>').join("");
 const checklist=page.checklist.map(x=>'<li>'+safeText(x)+'</li>').join("");
 const lessons=s.decisions.map(function(x,i){
   const choice=x.opts.find(o=>o.strong),explanation=window.SCReviewTheory?.[s.id]?.[i];
   return '<li><strong>'+safeText(x.q[lang])+'</strong><p>'+safeText(choice.text[lang])+'</p>'+(explanation?'<small>'+safeText(explanation.title[lang])+'</small>':'')+'</li>';
 }).join("");
 const refs=(window.SCReviewTheoryReferences?.[s.id]||[]).map(function(ref){
    const url=lang==="en"&&ref.url==="https://ippc.int/es/publications/92080/"?"https://ippc.int/en/publications/92080/":ref.url;
    return '<li><a href="'+safeText(url)+'" target="_blank" rel="noopener noreferrer">'+safeText(ref.name)+'</a></li>';
 }).join("");
 $("#content").innerHTML='<div class="chapter-page"><header class="chapter-heading"><p class="chapter-eyebrow">'+safeText(l.chapter)+' · '+(current+1)+' / 6</p><h2>'+safeText(s.title[lang])+'</h2><p class="chapter-subtitle">'+safeText(page.subtitle)+'</p><p class="chapter-overview">'+safeText(l.intro)+'</p></header>'
  +'<section class="chapter-intro">'+paragraphs(page.intro)+'</section>'
  +'<section class="chapter-case"><h3>'+safeText(l.caseTitle)+'</h3><p>'+safeText(s.context[lang])+'</p><div class="case-facts"><div><h4>'+safeText(copy.evidence[lang])+'</h4><p>'+safeText(s.evidence[lang])+'</p></div><div><h4>'+safeText(copy.missing[lang])+'</h4><p>'+safeText(s.missing[lang])+'</p></div><div><h4>'+safeText(copy.pressure[lang])+'</h4><p>'+safeText(s.pressure[lang])+'</p></div></div></section>'
  +sectionHTML
  +'<section class="chapter-example"><h3>'+safeText(l.example)+'</h3><p>'+safeText(page.example)+'</p></section>'
  +'<section class="chapter-glossary"><h3>'+safeText(l.glossary)+'</h3><dl>'+glossary+'</dl></section>'
  +'<section class="chapter-checklist"><h3>'+safeText(l.checklist)+'</h3><ul>'+checklist+'</ul></section>'
  +'<section class="chapter-answers"><h3>'+safeText(l.reviewAnswers)+'</h3><ol>'+lessons+'</ol></section>'
  +'<section class="chapter-takeaway"><h3>'+safeText(l.takeaway)+'</h3><p>'+safeText(page.conclusion)+'</p></section>'
  +(refs?'<section class="chapter-references"><h3>'+safeText(l.sources)+'</h3><ul>'+refs+'</ul></section>':'')
  +'<p class="chapter-disclaimer">'+safeText(l.notice)+'</p>'
  +'<div class="chapter-bottom-actions"><button type="button" class="chapter-back" id="chapter-back">'+safeText(l.back)+'</button><button type="button" class="chapter-continue" id="chapter-continue">'+safeText(current===5?l.last:l.next)+' →</button></div></div>';
 $("#chapter-back").onclick=()=>show(current);
 $("#chapter-continue").onclick=()=>advanceChapter();
}
function showChapter(index){
 if(index<0||index>5||!attempted(scenarios[index])||!state.reviewed.includes(scenarios[index].id))return;
 current=index;view="chapter";state.active={index,view};save();applyCopy();nav();renderChapter(scenarios[index]);buttons();$("#content").focus();window.scrollTo?.({top:0,behavior:"instant"});
}
function advanceChapter(){
 if(view!=="chapter"||current>=6)return;
 const id=scenarios[current].id;
 if(!state.studied.includes(id))state.studied.push(id);
 save();show(current+1);
}
const lessonLabels={
 es:{
   correct:"SOLUCIÓN CORRECTA Y JUSTIFICACIÓN",your:"Tu elección y su resultado",theory:"EXPLICACIÓN TEÓRICA",why:"Por qué es correcta",principle:"Principio o criterio aplicable",
   actions:"Cómo aplicarlo paso a paso",limits:"Qué límites o precauciones debes recordar",practical:"Para llevarlo a tu trabajo",
   other:"Por qué no son adecuadas las otras opciones",references:"Fuentes oficiales para profundizar",
   education:"Explicación formativa general. En una decisión real deben comprobarse la norma aplicable, los procedimientos internos y la autoridad competente.",
   change:"Puedes cambiar tus respuestas y pulsar «Revisar decisiones» otra vez.",again:"Volver a revisar decisiones",
   reviewed:"Revisión de las tres decisiones completada. Lee las explicaciones antes de continuar."
 },
 en:{
   correct:"CORRECT ANSWER AND REASONING",your:"Your choice and its outcome",theory:"DETAILED LEARNING EXPLANATION",why:"Why this is correct",principle:"Applicable principle or decision criterion",
   actions:"How to apply it step by step",limits:"Limits and precautions to remember",practical:"Apply this at work",
   other:"Why the other options are not appropriate",references:"Official resources for further reading",
   education:"General educational explanation. In a real decision, check applicable rules, internal procedures and the competent authority.",
   change:"You can change your answers and select 'Review decisions' again.",again:"Review decisions again",
   reviewed:"Review of all three decisions complete. Read the explanations before continuing."
 }
};
function safeText(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function displayDecisionFeedback(s,i,chosenIndex){
 const decision=s.decisions[i],selected=decision.opts[chosenIndex],correct=decision.opts.find(o=>o.strong);
 const target=document.getElementById("f"+i);
 if(!target||!selected||!correct)return;
 target.hidden=false;
 target.className="feedback "+(selected.strong?"stronger":"weaker");
 const verdict=(selected.strong?copy.strong:copy.weak)[lang].trim();
 let message='<div class="feedback-summary feedback-brief" role="status"><p><strong>'+safeText(verdict)+'</strong> '+safeText(selected.feedback[lang])+'</p>';
 if(!selected.strong){
   message+='<p class="brief-correct"><strong>'+safeText(lang==="es"?"Alternativa más sólida:":"Stronger option:")+'</strong> '+safeText(correct.text[lang])+'</p>';
 }
 target.innerHTML=message+'</div>';
}
function renderScenario(s){
 const complete=attempted(s);
 if(complete&&!state.reviewed.includes(s.id)){state.reviewed.push(s.id);save();}
 $("#content").innerHTML='<p class="scenario-index">'+(current+1)+' / 6</p><h2>'+safeText(s.title[lang])+'</h2>'
  +'<h3>'+safeText(copy.context[lang])+'</h3><p>'+safeText(s.context[lang])+'</p>'
  +'<div class="evidence"><h3>'+safeText(copy.evidence[lang])+'</h3><p>'+safeText(s.evidence[lang])+'</p>'
  +'<h3>'+safeText(copy.missing[lang])+'</h3><p>'+safeText(s.missing[lang])+'</p></div>'
  +'<div class="pressure"><h3>'+safeText(copy.pressure[lang])+'</h3><p>'+safeText(s.pressure[lang])+'</p></div>'
  +s.decisions.map(function(x,i){
     return '<fieldset class="decision"><legend>'+(i+1)+'. '+safeText(x.q[lang])+'</legend>'
      +x.opts.map(function(o,j){
        return '<label class="option"><input type="radio" name="d'+i+'" value="'+j+'" '+(state.answers[s.id+"-"+i]===j?'checked':'')+'><span>'+safeText(o.text[lang])+'</span></label>';
       }).join("")
      +'<div id="f'+i+'" class="feedback" aria-live="polite" hidden></div></fieldset>';
    }).join("")
  +'<p id="status" role="status"></p>'
  +'<button class="submit" '+(complete?'':'disabled')+'>'+safeText(chapterLabels[lang].open)+'</button>';
 const refreshStatus=function(){
    const answered=s.decisions.filter((_,i)=>state.answers[s.id+"-"+i]!==undefined).length;
    const all=answered===s.decisions.length;
    $(".submit").disabled=!all;
    $("#status").textContent=all
      ?(lang==="es"?"Las tres respuestas están revisadas. Continúa con la teoría del tema.":"All three answers have feedback. Continue to the topic's full theory chapter.")
      :(lang==="es"?"Respuestas completadas: "+answered+" de 3. Al elegir cada respuesta verás una explicación breve.":"Answers completed: "+answered+" of 3. Selecting an answer shows brief feedback.");
 };
 $(".submit").onclick=function(){reviewScenario(s);};
 s.decisions.forEach(function(d,i){
    const chosen=state.answers[s.id+"-"+i];
    if(Number.isInteger(chosen)&&chosen>=0&&chosen<d.opts.length)displayDecisionFeedback(s,i,chosen);
 });
 document.querySelectorAll('.decision input[type="radio"]').forEach(function(input){
   input.addEventListener("change",function(){
     const index=Number(input.name.slice(1)),choice=Number(input.value);
     state.answers[s.id+"-"+index]=choice;
     displayDecisionFeedback(s,index,choice);
     if(attempted(s)&&!state.reviewed.includes(s.id))state.reviewed.push(s.id);
     save();nav();buttons();refreshStatus();
   });
 });
 refreshStatus();
}
function reviewScenario(s){
 if(!attempted(s)){
   $("#status").textContent=copy.answer[lang];
   return;
 }
 if(!state.reviewed.includes(s.id))state.reviewed.push(s.id);
 save();showChapter(current);
}
function renderFinal(){const score={},total={};scenarios.forEach(s=>s.decisions.forEach((x,i)=>{total[x.theme]=(total[x.theme]||0)+1;const selected=x.opts[state.answers[`${s.id}-${i}`]];if(selected?.strong)score[x.theme]=(score[x.theme]||0)+1;}));const rows=Object.keys(themes).map(k=>`<li><strong>${themes[k][lang]}</strong>: ${score[k]||0}/${total[k]||0}</li>`).join(""),strength=Object.keys(themes).filter(k=>(score[k]||0)===total[k]),areas=Object.keys(themes).filter(k=>(score[k]||0)<total[k]),labels=items=>items.length?items.map(k=>`<li>${themes[k][lang]}</li>`).join(""):`<li>${copy.none[lang]}</li>`;$("#content").innerHTML=`<h2>${copy.reviewTitle[lang]}</h2><p>${copy.reviewIntro[lang]}</p><ul>${rows}</ul><h3>${copy.strengths[lang]}</h3><ul>${labels(strength)}</ul><h3>${copy.areas[lang]}</h3><ul>${labels(areas)}</ul><div class="review"><p>${copy.limitation[lang]}</p><h3>${copy.revisit[lang]}</h3><ul><li><a href="../responsible-supply-chain-compliance-foundations/?hubLang=${lang}">Responsible Supply Chain & Compliance Foundations</a></li><li><a href="../ethical-armor/?hubLang=en">Ethical Armor</a></li><li><a href="../reach-compliance-challenge/?hubLang=en">The REACH Compliance Challenge</a></li><li><a href="../phytosanitary-defender/?hubLang=en">Phytosanitary Defender</a></li></ul></div><button class="submit final-review">${copy.reviewAction[lang]}</button>${state.final?complete():""}`;$(".final-review").onclick=finish;}
function complete(){return `<section id="decision-review-complete" class="complete active" tabindex="-1"><h3>${copy.completed[lang]}</h3><p>${copy.limitation[lang]}</p></section>`;}function finish(){if(!state.studied.every(id=>scenarios.some(s=>s.id===id))||state.studied.length<6||!allAttempted())return;state.final=true;save();if(!$("#decision-review-complete"))$("#content").insertAdjacentHTML("beforeend",complete());nav();$("#decision-review-complete").focus();}
function buttons(){
 $("#prev").disabled=current===0&&view!=="chapter";
 $("#next").hidden=current===6;
 if(current<6){
   $("#next").disabled=view==="scenario"&&(!attempted(scenarios[current])||!state.reviewed.includes(scenarios[current].id));
   $("#next").textContent=view==="chapter"?(current===5?chapterLabels[lang].last:chapterLabels[lang].next):chapterLabels[lang].open;
 }
}
function show(i){
 const target=Math.max(0,Math.min(6,i)),firstUnstudied=scenarios.findIndex(s=>!state.studied.includes(s.id));
 const max=firstUnstudied<0?6:firstUnstudied;
 current=Math.min(target,max);view="scenario";state.active={index:current,view};save();
 applyCopy();nav();current<6?renderScenario(scenarios[current]):renderFinal();buttons();$("#content").focus();window.scrollTo?.({top:0,behavior:"instant"});
}
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{
 lang=b.dataset.lang;const u=new URL(location.href);u.searchParams.set("hubLang",lang);history.replaceState(null,"",u);
 if(view==="chapter")showChapter(current);else show(current);
});
$("#prev").onclick=()=>{
 if(view==="chapter"){show(current);return;}
 if(current===0)return;
 if(current===6){showChapter(5);return;}
 if(state.studied.includes(scenarios[current-1].id))showChapter(current-1);else show(current-1);
};
$("#next").onclick=()=>{
 if(current===6)return;
 if(view==="chapter"){advanceChapter();return;}
 showChapter(current);
};
const active=state.active;
if(active&&active.view==="chapter"&&Number.isInteger(active.index)&&active.index>=0&&active.index<6&&attempted(scenarios[active.index])&&state.reviewed.includes(scenarios[active.index].id)){showChapter(active.index);}
else if(active&&Number.isInteger(active.index)){show(active.index);}
else show(0);
})();
