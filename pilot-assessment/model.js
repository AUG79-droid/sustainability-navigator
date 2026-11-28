(function(root,factory){
 if(typeof module==="object"&&module.exports)module.exports=factory(require("./practice-bank.js"),require("./learning-bank.js"),require("../catalogue-data.js"));
 else root.SNPilotModel=factory(root.SNPilotPracticeBank,root.SNPilotLearningBank,root.SN_CATALOGUE);
})(typeof globalThis!=="undefined"?globalThis:this,function(practice,learning,catalogue){
 "use strict";
 const VERSION="sn-pilot-v1", LIBRARY="sustainable-aviation-learning-library", KEY="sn.pilot.sessions.v1";
 const bank=Object.assign(Object.create(null),practice,learning);
 const common={es:["Un resultado del recurso se basa en un caso ficticio. ¿Qué puedes concluir?","Tras una actividad, una alternativa obtiene un resultado favorable en la simulación. ¿Qué comunica correctamente ese resultado?","Aprendizaje o hipótesis condicionada; hace falta evidencia real para afirmar un beneficio operativo","El resultado demuestra una mejora real del negocio","El resultado autoriza a aplicar la decisión"],
 en:["A resource outcome is based on a fictional case. What can you conclude?","After an activity, an alternative achieves a favourable simulation outcome. What is the correct way to communicate it?","Learning or a conditional hypothesis; real evidence is needed to claim operational benefit","The result demonstrates a real business improvement","The result authorises application of the decision"]};
 const resources=new Map(catalogue.resources.map(r=>[r.id,r]));
 // An assessed edition of the existing game, not a new catalogue application.
 const quest=resources.get("tas-sustainability-quest");
 if(quest)resources.set("climate-adaptation-quest",{...quest,id:"climate-adaptation-quest",title:{es:"Sustainability Quest · Adaptación climática",en:"Sustainability Quest · Climate adaptation"},launches:Object.fromEntries(Object.entries(quest.launches).map(([lang,raw])=>{const url=new URL(raw);url.searchParams.set("track","climate");return [lang,url.href];}))});
 const resource=id=>resources.get(id);
 const supported=id=>Object.hasOwn(bank,id)||id===LIBRARY;
 const measured=id=>Object.hasOwn(bank,id);
 const forms=(id,lang,phase)=>{
   if(!measured(id)||!["es","en"].includes(lang)||!["pre","post"].includes(phase))return [];
   const hash=[...id].reduce((n,c)=>n+c.charCodeAt(0),0);
   return [...bank[id],common].map((pair,i)=>{
     const v=pair[lang];const shift=(hash+i+(phase==="post"?1:0))%3;
     const options=[0,1,2].map(j=>{const k=(j+shift)%3;return {id:k,text:v[k+2]};});
     options.push({id:3,text:lang==="es"?"No lo sé todavía":"I do not know yet"});
     return {id:i+1,prompt:v[phase==="pre"?0:1],options,answer:v[2]};
   });
 };
 const validAnswers=(a,id)=>measured(id)?Array.isArray(a)&&a.length===4&&a.every(n=>Number.isInteger(n)&&n>=0&&n<=3):a===null;
 const score=a=>Array.isArray(a)?a.filter(n=>n===0).length:null;
 const outcomes=["completed","partial","not_accessed"];
 const actions=["discuss","seek_evidence","apply_learning","none","not_applicable"];
 const validFeedback=f=>!!f&&["utility","clarity","transfer","confidence"].every(k=>Number.isInteger(f[k])&&f[k]>=0&&f[k]<=5)&&actions.includes(f.action);
 const validId=id=>typeof id==="string"&&/^[a-zA-Z0-9-]{12,100}$/.test(id);
 const newSession=(id,lang,sessionId)=>{
   if(!supported(id)||!resource(id)?.launches?.[lang]||!validId(sessionId))throw Error("Invalid session");
   return {instrument:VERSION,sessionId,resourceId:id,language:lang,pre:null,opened:false,outcome:null,post:null,feedback:null};
 };
 const validTransfer=v=>!!v&&["operations","maintenance","procurement","environment"].includes(v.role)&&Array.isArray(v.answers)&&v.answers.length===3&&v.answers.every(n=>Number.isInteger(n)&&n>=0&&n<=2);
 function validate(s){
   if(!s||s.instrument!==VERSION||!validId(s.sessionId)||!supported(s.resourceId)||!resource(s.resourceId)?.launches?.[s.language]||typeof s.opened!=="boolean")return false;
   if(s.revision!==undefined&&(!["energy-v2","energy-v3"].includes(s.revision)||s.resourceId!=="mission-energy"))return false;
   if(["energy-v2","energy-v3"].includes(s.revision)&&s.outcome==="completed"? !validTransfer(s.transferEvidence):s.transferEvidence!==undefined)return false;
   if(s.pre!==null&&!validAnswers(s.pre,s.resourceId))return false;
   if(!measured(s.resourceId)&&s.pre!==null)return false;
   if(s.opened&&measured(s.resourceId)&&!validAnswers(s.pre,s.resourceId))return false;
   if(s.outcome===null)return s.post===null&&s.feedback===null;
   if(!s.opened||!outcomes.includes(s.outcome)||!validFeedback(s.feedback))return false;
   return s.outcome==="completed"&&measured(s.resourceId)?validAnswers(s.post,s.resourceId):s.post===null;
 }
 function transition(s,event){
   if(!validate(s)||s.outcome!==null)throw Error("Invalid or closed session");
   let next;
   if(event.type==="pre"&&measured(s.resourceId)&&s.pre===null&&!s.opened&&validAnswers(event.answers,s.resourceId))next={...s,pre:[...event.answers]};
   else if(event.type==="launch"&&!s.opened&&(!measured(s.resourceId)||validAnswers(s.pre,s.resourceId)))next={...s,opened:true};
   else if(event.type==="finish"&&s.opened&&outcomes.includes(event.outcome)&&validFeedback(event.feedback)){
     const needsPost=event.outcome==="completed"&&measured(s.resourceId);
     if(needsPost&&!validAnswers(event.answers,s.resourceId))throw Error("Post answers required");
     next={...s,outcome:event.outcome,post:needsPost?[...event.answers]:null,feedback:{utility:event.feedback.utility,clarity:event.feedback.clarity,transfer:event.feedback.transfer,confidence:event.feedback.confidence,action:event.feedback.action}};
   }else throw Error("Invalid transition");
   if(!validate(next))throw Error("Invalid result");return next;
 }
 const clean=s=>({instrument:VERSION,...(s.revision?{revision:s.revision}:{}),...(s.transferEvidence?{transferEvidence:{role:s.transferEvidence.role,answers:[...s.transferEvidence.answers]}}:{}),sessionId:s.sessionId,resourceId:s.resourceId,language:s.language,pre:s.pre===null?null:[...s.pre],opened:s.opened,outcome:s.outcome,post:s.post===null?null:[...s.post],feedback:s.feedback===null?null:{utility:s.feedback.utility,clarity:s.feedback.clarity,transfer:s.feedback.transfer,confidence:s.feedback.confidence,action:s.feedback.action}});
 const pack=sessions=>({schema:1,instrument:VERSION,records:sessions.filter(validate).map(clean)});
 function parse(data){
   if(!data||data.schema!==1||data.instrument!==VERSION||!Array.isArray(data.records)||data.records.length>5000)throw Error("Invalid file");
   if(data.records.some(s=>!validate(s)))throw Error("Invalid record");return data.records.map(clean);
 }
 function merge(input){
   const map=new Map(), conflicts=new Set();
   for(const s of input){if(!validate(s))continue;const c=clean(s),old=map.get(c.sessionId);
     if(old&&JSON.stringify(old)!==JSON.stringify(c)){
       // An exact in-progress prefix may be replaced by the completed version, never a conflicting outcome.
       const older=old.outcome===null?old:c.outcome===null?c:null;
       const newer=older===old?c:old;
       const same=older&&newer.outcome!==null&&older.resourceId===newer.resourceId&&older.language===newer.language&&older.revision===newer.revision&&JSON.stringify(older.pre)===JSON.stringify(newer.pre)&&older.opened===newer.opened;
       if(same)map.set(c.sessionId,newer);else conflicts.add(c.sessionId);
     }else map.set(c.sessionId,c);
   }
   return {records:[...map.values()].filter(s=>!conflicts.has(s.sessionId)),conflicts:conflicts.size};
 }
 function aggregate(input){
   const merged=merge(input),groups=new Map();
   for(const s of merged.records){const k=s.resourceId+"|"+s.language+"|"+(s.revision||"v1");const a=groups.get(k)||[];a.push(s);groups.set(k,a);}
   const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
   const rows=[...groups.values()].map(a=>{
     const pairs=a.filter(s=>s.outcome==="completed"&&measured(s.resourceId)&&validAnswers(s.pre,s.resourceId)&&validAnswers(s.post,s.resourceId));
     const completed=a.filter(s=>s.outcome==="completed"), ratings={};
     for(const k of ["utility","clarity","transfer","confidence"]){const v=completed.map(s=>s.feedback[k]).filter(n=>n>0);ratings[k]={n:v.length,mean:mean(v)};}
     const actionCounts=Object.fromEntries(actions.map(k=>[k,completed.filter(s=>s.feedback.action===k).length]));
     const transfer=completed.filter(s=>validTransfer(s.transferEvidence));const transferPassed=transfer.filter(s=>s.transferEvidence.answers[2]===0&&score(s.transferEvidence.answers)>=2).length;
     return {resourceId:a[0].resourceId,language:a[0].language,revision:a[0].revision||null,transferN:transfer.length,transferPassed,received:a.length,opened:a.filter(s=>s.opened).length,completed:completed.length,partial:a.filter(s=>s.outcome==="partial").length,notAccessed:a.filter(s=>s.outcome==="not_accessed").length,pending:a.filter(s=>s.outcome===null).length,paired:pairs.length,prePct:mean(pairs.map(s=>score(s.pre)*25)),postPct:mean(pairs.map(s=>score(s.post)*25)),gainPp:mean(pairs.map(s=>(score(s.post)-score(s.pre))*25)),ratings,actionCounts};
   }).sort((a,b)=>a.resourceId.localeCompare(b.resourceId)||a.language.localeCompare(b.language));
   return {rows,conflicts:merged.conflicts,records:merged.records.length};
 }
 function launchURL(id,lang,rootURL){
   const raw=resource(id)?.launches?.[lang];if(!raw||!supported(id))throw Error("Unknown resource");
   const url=new URL(raw,rootURL);if(!["https:","http:"].includes(url.protocol))throw Error("Unsafe launch");
   if(id==="airbus-strategic-resilience-intelligence")url.searchParams.set("hubLang",lang);
   return url.href;
 }
 return {VERSION,KEY,LIBRARY,resources,resource,supported,measured,forms,newSession,validate,transition,score,validFeedback,pack,parse,merge,aggregate,launchURL};
});