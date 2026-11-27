(function(){
"use strict";
const m=window.SNPilotModel,params=new URLSearchParams(location.search),lang=params.get("lang")==="en"?"en":"es",id=params.get("resource"),r=m.resource(id),root=document.getElementById("pilot"),es=lang==="es",t=(a,b)=>es?a:b;
document.documentElement.lang=lang;
document.getElementById("home").href="../index.html?lang="+lang+"#applications";
const reports=document.getElementById("reports");reports.href="report.html?lang="+lang;reports.textContent=t("Resultados del piloto","Pilot results");
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
const paragraph=(text,cls)=>el("p",text,cls),button=(label,fn,cls)=>{const b=el("button",label,cls);b.type="button";b.addEventListener("click",fn);return b;};
const link=(label,href,cls)=>{const a=el("a",label,cls);a.href=href;return a;};
const card=()=>el("section",undefined,"card"),metric=(label,value)=>{const d=el("div",undefined,"metric");d.append(el("small",label),el("strong",String(value)));return d;};
const exportFile=(name,data)=>{const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));const a=el("a");a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);};
let sessions=[],storageOK=true;
try{const raw=localStorage.getItem(m.KEY);if(raw)sessions=m.parse(JSON.parse(raw));}catch{storageOK=false;}
if(!r||!m.supported(id)||!r.launches?.[lang]||r.lifecycle!=="active"){root.append(el("h1",t("Recurso no disponible","Resource unavailable")),paragraph(t("Vuelve al catálogo y elige una experiencia disponible.","Return to the catalogue and select an available experience.")));return;}
const isMeasured=m.measured(id);
const newID=()=>crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint32Array(4)),n=>n.toString(16).padStart(8,"0")).join("-");
let session=[...sessions].reverse().find(s=>s.resourceId===id&&s.language===lang)||m.newSession(id,lang,newID());
function save(next){
 session=next;sessions=sessions.filter(s=>s.sessionId!==session.sessionId);sessions.push(session);
 try{if(sessions.length>5000)throw Error("Storage limit");localStorage.setItem(m.KEY,JSON.stringify(m.pack(sessions)));storageOK=true;}catch{storageOK=false;}
}
function change(event){try{save(m.transition(session,event));render();}catch{root.append(paragraph(t("No se pudo guardar ese paso. Revisa las respuestas.","Could not save this step. Check your answers."),"error"));}}
function questions(parent,phase){
 const selected=Array(4).fill(null);
 m.forms(id,lang,phase).forEach((q,i)=>{
   const f=el("fieldset",undefined,"question");f.append(el("legend",(i+1)+". "+q.prompt));
   q.options.forEach(o=>{const label=el("label",undefined,"choice"),radio=el("input");radio.type="radio";radio.name=phase+"-"+i;radio.value=o.id;radio.required=true;radio.addEventListener("change",()=>{selected[i]=o.id;});label.append(radio,el("span",o.text));f.append(label);});parent.append(f);
 });return selected;
}
const fields=[["utility",t("Utilidad para mi trabajo","Usefulness for my work")],["clarity",t("Claridad sin facilitador","Clarity without a facilitator")],["transfer",t("Posibilidad de aplicar lo aprendido","Ability to apply learning")],["confidence",t("Confianza percibida para analizar decisiones","Perceived confidence in analysing decisions")]];
const actionOptions=[["discuss",t("Conversar con mi área o responsable","Discuss with my area or owner")],["seek_evidence",t("Buscar datos, evidencia o requisitos","Seek data, evidence or requirements")],["apply_learning",t("Aplicar el aprendizaje en una actividad autorizada","Apply learning in an authorised activity")],["none",t("No tengo prevista una acción","No planned action")],["not_applicable",t("No aplica","Not applicable")]];
function feedback(parent){
 parent.append(el("h2",t("Utilidad de la experiencia","Experience usefulness")),paragraph(t("Valora tu experiencia, no el resultado de negocio. 1 = muy baja; 5 = muy alta. Puedes indicar no aplica.","Rate your experience, not business outcomes. 1 = very low; 5 = very high. You can select not applicable."),"fine"));
 const grid=el("div",undefined,"feedback"),inputs={};
 const select=(key,label,choices)=>{const lab=el("label",label),s=el("select");s.required=true;const placeholder=el("option",t("Selecciona","Select"));placeholder.value="";s.append(placeholder);choices.forEach(([v,text])=>{const o=el("option",text);o.value=String(v);s.append(o);});lab.append(s);grid.append(lab);inputs[key]=s;};
 fields.forEach(([k,label])=>select(k,label,[[1,"1"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[0,t("No aplica","Not applicable")]]));
 select("action",t("¿Qué siguiente paso te planteas?","What next step are you considering?"),actionOptions);parent.append(grid);
 return ()=>Object.fromEntries(Object.entries(inputs).map(([k,v])=>[k,k==="action"?v.value:v.value===""?null:Number(v.value)]));
}
function download(s){exportFile("sn-pilot-"+s.resourceId+"-"+s.language+".json",m.pack([s]));}
function render(){
 root.replaceChildren();
 root.append(el("p",t("PILOTO · EVIDENCIAS DE APRENDIZAJE","PILOT · LEARNING EVIDENCE"),"eyebrow"),el("h1",r.title[lang]),paragraph(r.description[lang]),paragraph(t("Experiencia individual o de equipo. Las respuestas se guardan localmente en este navegador, sin nombres ni envío automático. Exporta y comparte solo por el canal autorizado. No introduzcas información de trabajo.","Individual or team experience. Responses are stored locally in this browser, without names or automatic transmission. Export and share only through an authorised channel. Do not enter work information."),"fine"));
 const stage=session.outcome!==null?3:session.opened?2:session.pre!==null||!isMeasured?1:0;
 const steps=el("div",undefined,"steps");[t("01 · Antes","01 · Before"),t("02 · Experiencia","02 · Experience"),t("03 · Después","03 · After")].forEach((label,i)=>steps.append(el("div",label,"step "+(i===Math.min(stage,2)?"current":i<stage?"done":""))));root.append(steps);
 if(!storageOK)root.append(paragraph(t("El navegador no ha permitido leer o guardar los datos de forma persistente. Mantén esta pestaña abierta y descarga el resultado; no se garantiza la recuperación.","The browser could not read or save data persistently. Keep this tab open and download your result; recovery is not guaranteed."),"notice"));
 if(!isMeasured)root.append(paragraph(t("La biblioteca es un recurso de consulta libre: se registra utilidad y uso declarado, no una mejora de conocimientos.","The library is a free-exploration resource: usefulness and declared use are recorded, not knowledge gain."),"notice"));
 if(stage===0){
   const c=card();c.append(el("h2",t("Evaluación inicial · 4 preguntas","Initial assessment · 4 questions")),paragraph(t("Responde según tus conocimientos actuales. No se muestra la corrección hasta el final. No hay una nota mínima; si no sabes una respuesta, indícalo. Esta prueba breve no acredita competencia.","Answer using your current knowledge. Corrections are not shown until the end. There is no pass score; indicate when you do not know. This short probe does not certify competence.")));
   const f=el("form"),answers=questions(f,"pre"),b=el("button",t("Guardar y continuar","Save and continue"));b.type="submit";f.append(b);f.addEventListener("submit",e=>{e.preventDefault();if(answers.every(Number.isInteger))change({type:"pre",answers});});c.append(f);root.append(c);
 }else if(stage===1||stage===2){
   const c=card();c.append(el("h2",t("Realiza la experiencia","Complete the experience")),paragraph(t("Abre el recurso en otra pestaña. Completa su recorrido de aprendizaje y vuelve a ESTA pestaña para realizar la evaluación final. Si no puedes acceder o no terminas, puedes registrarlo sin generar una puntuación falsa.","Open the resource in another tab. Complete its learning journey, then return to THIS tab for the final assessment. If you cannot access or finish it, record that without generating a false score.")));
   if(id==="bio-inspired-innovation-lab")c.append(paragraph(t("BioLab puede tener sus propias preguntas y evaluación del taller. Completa sus instrucciones y vuelve aquí para registrar la medición común del piloto.","BioLab may have its own workshop questions and assessment. Follow its instructions and return here to record the common pilot measurement."),"fine"));
   const a=link(t(session.opened?"Volver a abrir el recurso ↗":"Abrir el recurso ↗",session.opened?"Reopen resource ↗":"Open resource ↗"),m.launchURL(id,lang,new URL("../",location.href).href),"button");a.target="_blank";a.rel="noopener noreferrer";a.addEventListener("click",()=>{if(!session.opened){try{save(m.transition(session,{type:"launch"}));setTimeout(render,0);}catch{}}});c.append(a);root.append(c);
   if(session.opened){
      const fcard=card();fcard.append(el("h2",t("Al volver, indica qué ocurrió","On return, indicate what happened")),paragraph(t("La finalización es autodeclarada; abrir una aplicación no significa haberla completado.","Completion is self-reported; opening an application does not mean it was completed."),"fine"));
      const row=el("div",undefined,"actions");
      const displayForm=outcome=>{let previous=fcard.querySelector("form");if(previous)previous.remove();const f=el("form");let answers=null;if(outcome==="completed"&&isMeasured){f.append(el("h2",t("Evaluación final · 4 preguntas","Final assessment · 4 questions")),paragraph(t("Responde tras finalizar. Las preguntas son paralelas a las iniciales; no consultes soluciones externas.","Answer after finishing. Questions parallel the initial form; do not consult external answers."),"fine"));answers=questions(f,"post");}const getFeedback=feedback(f),b=el("button",t("Guardar resultado del piloto","Save pilot result"));b.type="submit";f.append(el("div",undefined,"actions"));f.lastChild.append(b);f.addEventListener("submit",e=>{e.preventDefault();const fb=getFeedback();if(!m.validFeedback(fb))return;if(answers&&!answers.every(Number.isInteger))return;change({type:"finish",outcome,answers,feedback:fb});});fcard.append(f);f.scrollIntoView({block:"start"});};
      row.append(button(t("He completado la experiencia","I completed the experience"),()=>displayForm("completed")),button(t("No la he terminado","I did not finish"),()=>displayForm("partial"),"secondary"),button(t("No he podido acceder","I could not access it"),()=>displayForm("not_accessed"),"secondary"));fcard.append(row);root.append(fcard);
   }
 }else{
   const c=card();c.append(el("h2",t("Resultado registrado","Result recorded")));
   const outcomes={completed:t("Completada (autodeclarada)","Completed (self-reported)"),partial:t("Parcial","Partial"),not_accessed:t("Sin acceso","Could not access")};
   c.append(paragraph(outcomes[session.outcome]));if(isMeasured&&session.post){const metrics=el("div",undefined,"metrics"),pre=m.score(session.pre),post=m.score(session.post);metrics.append(metric(t("Antes","Before"),pre+"/4"),metric(t("Después","After"),post+"/4"),metric(t("Cambio descriptivo","Descriptive change"),(post-pre)*25+" pp"));c.append(metrics,paragraph(t("Son formularios breves no calibrados, con conceptos de respuesta compartidos. El cambio puede reflejar familiaridad, selección o aprendizaje; no acredita competencia ni demuestra efecto causal o retorno económico.","These are short, uncalibrated forms with shared response concepts. Change may reflect familiarity, selection or learning; it neither certifies competence nor establishes a causal effect or economic return."),"fine"));
   const details=el("details");details.append(el("summary",t("Revisar respuestas y conceptos","Review answers and concepts")));["pre","post"].forEach(phase=>{details.append(el("h3",phase==="pre"?t("Antes","Before"):t("Después","After")));m.forms(id,lang,phase).forEach((q,i)=>{details.append(paragraph(q.prompt),paragraph(t("Tu respuesta: ","Your answer: ")+q.options.find(o=>o.id===session[phase][i])?.text,"fine"),paragraph(t("Concepto esperado: ","Expected concept: ")+q.answer));});});c.append(details);
   }else c.append(paragraph(t("No se calcula cambio de conocimientos para una consulta libre, una experiencia incompleta o sin acceso.","Knowledge change is not calculated for free exploration, an incomplete experience or failed access."),"fine"));
   const metrics=el("div",undefined,"metrics");fields.forEach(([k,label])=>metrics.append(metric(label,session.feedback[k]===0?t("N/A","N/A"):session.feedback[k]+"/5")));c.append(metrics,paragraph(t("Siguiente paso declarado: ","Declared next step: ")+actionOptions.find(a=>a[0]===session.feedback.action)?.[1],"fine"));
   const row=el("div",undefined,"actions");row.append(button(t("Descargar resultado JSON","Download result JSON"),()=>download(session)),link(t("Volver al catálogo","Return to catalogue"),"../index.html?lang="+lang+"#applications","button secondary"),button(t("Nueva sesión de este recurso","New session for this resource"),()=>{if(confirm(t("¿Iniciar otra sesión? La anterior seguirá en el registro local y no se contará como una persona distinta automáticamente.","Start another session? The previous one remains in the local record and is not automatically counted as a different person."))){save(m.newSession(id,lang,newID()));render();}},"secondary"));c.append(row);root.append(c);
 }
 if(stage!==3){const a=el("div",undefined,"actions");a.append(button(t("Descargar registro hasta ahora","Download record so far"),()=>download(session),"secondary"),link(t("Continuar más tarde","Continue later"),"../index.html?lang="+lang+"#applications","button secondary"));root.append(a);}
 root.append(el("footer",t("Medición educativa independiente · datos locales · sin verificación de identidad ni aprobación técnica.","Independent educational measurement · local data · no identity verification or technical approval.")));
}
render();
})();