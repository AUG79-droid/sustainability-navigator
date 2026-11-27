"use strict";
const {chromium}=require("playwright"),assert=require("node:assert/strict"),http=require("node:http"),fs=require("node:fs"),path=require("node:path");
const m=require("../../pilot-assessment/model.js"),bio=require("../../pilot-assessment/biolab-results.js");
const root=path.resolve(__dirname,"../.."),mime={".html":"text/html",".js":"application/javascript",".css":"text/css",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".txt":"text/plain",".json":"application/json"};
const server=http.createServer((req,res)=>{try{const f=path.resolve(root,"."+decodeURIComponent(new URL(req.url,"http://localhost").pathname));if(!f.startsWith(root+path.sep))throw Error("path");const target=fs.statSync(f).isDirectory()?path.join(f,"index.html"):f;res.setHeader("Content-Type",mime[path.extname(target)]||"application/octet-stream");res.end(fs.readFileSync(target));}catch{res.writeHead(404);res.end();}});
const feedback={utility:5,clarity:4,transfer:0,confidence:3,action:"seek_evidence"};
const nativeId="airbus-strategic-resilience-intelligence",bioId="bio-inspired-innovation-lab";
async function fill(page,selector){const fields=await page.locator(selector).all();assert.ok(fields.length);for(const f of fields)await f.locator('input[type=radio]').first().check();}
async function course(p){const total=await p.locator("#module-list [data-module]").count();assert.ok(total>1);for(let i=0;i<total-1;i++){await fill(p,"#module-content fieldset");await p.locator("[data-check]").click();await p.locator("#next-module").click();}await fill(p,"#module-content .final-card");await p.locator(".final-submit").click();await p.locator("#course-complete").waitFor();}
async function review(p,eco){for(let i=0;i<6;i++){await fill(p,"fieldset.decision");await p.locator(".submit").click();await p.locator(eco?"#lesson-continue":"#chapter-continue").click();}await p.locator(eco?".final-action":".final-review").click();await p.locator(eco?"#eco-design-assessment-complete":"#decision-review-complete").waitFor();}
async function year(p){await p.locator('[data-action="start"]').click();for(let i=0;i<4;i++){await p.locator('[data-action="choose"]').first().click();await p.locator('[data-action="confirm"]').click();await p.locator('[data-action="next"]').click();}await p.locator(".final-screen").waitFor();}
async function ethical(p){const click=async s=>p.locator(s).filter({visible:true}).first().click();await click('[data-go="briefing"]');await click('[data-go="p1"]');await click('[data-p1="trace"]');await click("#p1next");await click('[data-go="p2"]');for(let i=0;i<5;i++)await click('[data-node="'+i+'"]');await click("#flagContradiction");await click("#p2next");await click('[data-go="p3"]');for(const v of ["audit","origin","owner"])await p.locator('#redFlags input[value="'+v+'"]').check();await click("#checkRedFlags");await click("#p3next");await click('[data-go="p4"]');for(const [k,v] of [["hr1","mitigate"],["hr2","monitor"],["hr3","freeze"]])await p.locator("#"+k).selectOption(v);await click("#checkHR");await click("#p4next");await click('[data-go="p5"]');await click('[data-pay="security"]');await click("#p5next");await click('[data-go="p6"]');for(const v of ["dual","intensity","module"])await p.locator('#designOptions input[value="'+v+'"]').check();await click("#checkDesign");await click("#p6next");await click('[data-go="final"]');await p.locator("#final.active").waitFor();}
async function phyto(p){const click=async s=>p.locator(s).filter({visible:true}).first().click();await click('.goto[data-target="theory1"]');await click('.goto[data-target="practice1"]');await click("#spotA");await click("#spotB");await click('#choices1 [data-answer="hold"]');await click("#toTheory2");await click('.goto[data-target="practice2"]');await click("#barkGauge");await click('#choices2 [data-answer="accept-both"]');await p.locator('[data-sn-pilot-complete="true"]').waitFor();}
const journeys=[
["responsible-supply-chain-compliance-foundations","responsible-supply-chain-compliance-foundations",course],
["eco-design-circularity-aerospace-materials","eco-design-circularity-aerospace-materials",course],
["supply-chain-compliance-decision-review","supply-chain-compliance-decision-review",p=>review(p,false)],
["eco-design-lifecycle-decision-assessment","eco-design-lifecycle-decision-assessment",p=>review(p,true)],
["year-15-challenge","year-15-challenge",year],
["ethical-armor","ethical-armor-bilingual",ethical],
["phytosanitary-defender","phytosanitary-defender-bilingual",phyto]
];
async function actual(browser,origin,id,dir,journey,lang){
 const c=await browser.newContext({acceptDownloads:true,viewport:{width:1440,height:1000},reducedMotion:"reduce"}),p=await c.newPage(),errors=[];
 try{
 p.setDefaultTimeout(12000);
 await c.route("**/*",r=>r.request().url().startsWith(origin)?r.continue():r.abort());p.on("pageerror",e=>errors.push(e.message));
 await p.goto(origin+"/"+dir+"/?hubLang="+lang,{waitUntil:"domcontentloaded"});const native=p.locator("#sn-native-learning-evidence"),d=native.locator("dialog"),t=(es,en)=>lang==="es"?es:en;
 await d.waitFor({state:"visible"});assert.equal(await d.getAttribute("lang"),lang);
 for(const [i,f] of (await d.locator("fieldset").all()).entries())await f.locator('input[value="'+[0,1,3,0][i]+'"]').check();
 await d.getByRole("button",{name:t("Guardar y empezar","Save and start"),exact:true}).click();await d.waitFor({state:"hidden"});
 await native.locator(".dock button").click();assert.equal(await d.getByRole("button",{name:t("He terminado · evaluación final","I finished · final assessment"),exact:true}).count(),0);
 await d.getByRole("button",{name:t("Volver a la actividad","Return to activity"),exact:true}).click();await journey(p);
 await d.waitFor({state:"visible",timeout:20000});await d.getByRole("button",{name:t("He terminado · evaluación final","I finished · final assessment"),exact:true}).click();
 for(const f of await d.locator("fieldset").all())await f.locator('input[value="0"]').check();
 for(const s of await d.locator(".ratings select").all()){const opts=await s.locator("option").evaluateAll(o=>o.map(v=>v.value));await s.selectOption(opts.includes("5")?"5":"seek_evidence");}
 await d.getByRole("button",{name:t("Guardar resultado","Save result"),exact:true}).click();
 const event=p.waitForEvent("download");await d.getByRole("button",{name:t("Descargar resultado JSON","Download JSON result"),exact:true}).click();
 const record=m.parse(JSON.parse(fs.readFileSync(await (await event).path(),"utf8")))[0];assert.equal(record.resourceId,id);assert.equal(record.language,lang);assert.equal(record.outcome,"completed");assert.equal(m.score(record.pre),2);assert.equal(m.score(record.post),4);assert.deepEqual(errors,[]);
 console.log("REAL JOURNEY PASS",id,lang);return record;
 }finally{await c.close();}
}
async function dashboard(browser,origin,actualRecords){
 const resources=[...m.resources.values()].filter(r=>r.lifecycle==="active"&&r.id!==nativeId&&r.id!==bioId);
 assert.ok(resources.every(r=>m.supported(r.id)),"Unsupported catalogue resource");
 const native=[];let n=0;for(const r of resources)for(const lang of ["es","en"]){let s=m.newSession(r.id,lang,"synthetic-native-"+String(++n).padStart(4,"0"));if(m.measured(r.id))s=m.transition(s,{type:"pre",answers:[0,1,3,0]});s=m.transition(s,{type:"launch"});s=m.transition(s,{type:"finish",outcome:"completed",answers:[0,0,0,0],feedback});native.push(s);}
 const b=[];for(const lang of ["es","en"])for(const [track,challengeId] of [["general","c1"],["climate","c9"],["resilience","r1"]])b.push({schema:1,assessmentVersion:bio.VERSION,resourceId:bioId,language:lang,unit:"session/team",sessionKey:"synthetic-bio-"+lang+"-"+track,track,challengeId,preScore:2,postScore:4,maxScore:4,...feedback});
 assert.equal(m.parse(m.pack(native)).length,native.length);assert.equal(bio.parse(bio.pack(b)).length,b.length);
 const expected=m.aggregate([...native,...actualRecords]).rows.length+bio.aggregate(b).rows.length;
 for(const lang of ["es","en"]){const c=await browser.newContext({acceptDownloads:true}),p=await c.newPage();try{
 await p.goto(origin+"/pilot-assessment/report.html?lang="+lang);
 const file=(name,x)=>({name,mimeType:"application/json",buffer:Buffer.from(JSON.stringify(x))});
 const files=[file("synthetic-native.json",m.pack(native)),file("synthetic-biolab.json",bio.pack(b)),file("real-browser-test-records.json",m.pack(actualRecords)),file("duplicate.json",m.pack(native)),file("invalid.json",{invalid:true})];
 await p.locator('input[type=file]').setInputFiles(files);
 await p.getByText(lang==="es"?"Archivos importados: 4":"Imported files: 4",{exact:false}).waitFor();
 assert.equal(await p.locator("tbody tr").count(),expected);
 const received=native.length+b.length+actualRecords.length;await p.getByText((lang==="es"?"Sesiones válidas recibidas: ":"Valid sessions received: ")+received,{exact:true}).waitFor();
 const event=p.waitForEvent("download");await p.getByRole("button",{name:lang==="es"?"Exportar resumen CSV":"Export summary CSV",exact:true}).click();
 const csv=fs.readFileSync(await (await event).path(),"utf8").trim().split("\n");assert.equal(csv.length,expected+1);
 const ids=new Set(csv.slice(1).map(row=>row.split(",")[0]));assert.equal(ids.size,resources.length+1);assert.ok(!ids.has(nativeId));
 console.log("CONSOLIDATION PASS",lang,"resources",ids.size,"rows",expected,"synthetic fixtures",native.length+b.length,"actual test exports",actualRecords.length);
 }finally{await c.close();}}
}
(async()=>{await new Promise(r=>server.listen(0,"127.0.0.1",r));const origin="http://127.0.0.1:"+server.address().port,browser=await chromium.launch(),failed=[],records=[];
try{for(const [id,dir,journey] of journeys)for(const lang of ["es","en"]){try{records.push(await actual(browser,origin,id,dir,journey,lang));}catch(e){failed.push(id+" "+lang+": "+e.message);console.error("REAL JOURNEY FAIL",id,lang,e.message);}}
try{await dashboard(browser,origin,records);}catch(e){failed.push("dashboard: "+e.message);console.error("CONSOLIDATION FAIL",e);}
console.log("REAL JOURNEYS",records.length+"/"+(journeys.length*2));if(failed.length)throw Error(failed.join("\n"));
}finally{await browser.close();server.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
