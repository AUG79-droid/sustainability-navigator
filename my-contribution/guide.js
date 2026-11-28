(()=>{"use strict";
const lang=new URLSearchParams(location.search).get("lang")==="en"?"en":"es",t=(es,en)=>lang==="es"?es:en,roles=window.SN_CONTRIBUTION_ROLES,catalogue=window.SN_CATALOGUE.resources;
document.documentElement.lang=lang;
const $=id=>document.getElementById(id),el=(tag,txt,cls)=>{const n=document.createElement(tag);if(txt)n.textContent=txt;if(cls)n.className=cls;return n;};
$("back").href="../?lang="+lang;
$("kicker").textContent=t("APRENDIZAJE APLICADO","APPLIED LEARNING");
$("intro").textContent=t("Conecta una actividad profesional con una vulnerabilidad, una decisión y una contribución potencial a la continuidad. Elige tu área y una actividad, y practica con un caso ficticio.","Connect a professional activity with a vulnerability, a decision and a potential contribution to continuity. Choose your area and activity, and practise with a fictional case.");
$("boundary").textContent=t("Ejercicio formativo independiente. No solicita datos de trabajo, no guarda respuestas y no certifica competencias ni resultados operativos.","Independent learning exercise. No work data requested, no answers stored, and no certification of competence or operational outcomes.");
$("role-title").textContent=t("1. ¿En qué área trabajas?","1. Which area do you work in?");
const buttons=[];
const activities=role=>[role,...role.activities];
function selectActivity(role){const s=$("scenario"),r=$("result");s.hidden=false;r.hidden=true;r.replaceChildren();s.replaceChildren(el("h2",t("2. Elige una actividad profesional","2. Choose a professional activity")));const c=el("div",null,"choices");s.append(c);activities(role).forEach((a,i)=>{const b=el("button",a[lang][1]);b.type="button";b.dataset.activity=String(i);b.onclick=()=>show(role,a,i);c.append(b);});s.scrollIntoView({block:"nearest",behavior:"smooth"});}
function show(role,activity,index){
 const a=activity[lang],s=$("scenario"),r=$("result");r.hidden=true;r.replaceChildren();s.hidden=false;s.replaceChildren(el("h2",t("2. Tu actividad","2. Your activity")),el("p",a[1]),el("h3",t("Vulnerabilidad del caso","Case vulnerability")),el("p",a[2]),el("h3",t("¿Qué decisión tomarías?","Which decision would you take?")));
 const c=el("div",null,"choices");const change=el("button",t("Cambiar actividad","Change activity"));change.type="button";change.onclick=()=>selectActivity(role);s.append(c,change);
 const shift=(roles.indexOf(role)+index)%3;
 [0,1,2].map(i=>(i+shift)%3).forEach(i=>{const b=el("button",a[3+i]);b.type="button";b.setAttribute("aria-pressed","false");b.onclick=()=>{[...c.children].forEach(x=>x.setAttribute("aria-pressed",String(x===b)));result(activity,i);};c.append(b);});
}
function result(role,i){
 const a=role[lang],r=$("result");r.hidden=false;r.replaceChildren(el("h2",t("3. Tu contribución potencial","3. Your potential contribution")),el("p",(i===0?t("Decisión mejor fundamentada. ","Better-supported decision. "):t("Revisa esta decisión. ","Reconsider this decision. "))+a[6]+" "+t("La opción mejor fundamentada es: ","The better-supported option is: ")+a[3],"feedback"));
 const chain=el("div",null,"chain");[[t("Actividad","Activity"),a[1]],[t("Vulnerabilidad","Vulnerability"),a[2]],[t("Decisión","Decision"),a[3]],[t("Contribución potencial","Potential contribution"),a[7]],[t("Evidencia necesaria","Evidence needed"),a[8]],[t("Validación","Validation"),a[9]]].forEach(([h,p])=>{const card=el("article");card.append(el("h3",h),el("p",p));chain.append(card);});r.append(chain,el("h2",t("4. Practica con un recurso existente","4. Practise with an existing resource")));
 const resource=catalogue.find(x=>x.id===role.resource);if(resource){const link=el("a",resource.title[lang],"action");link.href=new URL(resource.launches[lang],new URL("../",location.href)).href;link.target="_blank";link.rel="noopener noreferrer";r.append(el("p",resource.description[lang]),link);}
 r.append(el("p",t("Al terminar, utiliza la evaluación y encuesta del recurso cuando estén disponibles. Este ejercicio de orientación no se añade a la consolidación de resultados.","When finished, use the resource assessment and survey where available. This orientation exercise is not included in consolidated results."),"fine"));
 const asri=catalogue.find(x=>x.id==="airbus-strategic-resilience-intelligence");if(asri&&role.resource!==asri.id){const a=el("a",t("Después: traducir el valor con ASRI","Next: translate value with ASRI"),"action");a.href=new URL(asri.launches[lang],new URL("../",location.href)).href;a.target="_blank";a.rel="noopener noreferrer";r.append(a);}
 r.append(el("p",t("Pregunta de transferencia: ¿qué indicador y qué responsable permitirían verificar una contribución semejante en tu trabajo, sin compartir información interna aquí?","Transfer question: which indicator and owner could verify a similar contribution in your work, without sharing internal information here?"),"fine"));
}
roles.forEach(role=>{const b=el("button",role[lang][0]);b.type="button";b.setAttribute("aria-pressed","false");b.onclick=()=>{buttons.forEach(x=>x.setAttribute("aria-pressed",String(x===b)));selectActivity(role);};buttons.push(b);$("roles").append(b);});
})();