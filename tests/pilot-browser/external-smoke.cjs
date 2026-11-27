"use strict";
const {chromium}=require("playwright"),assert=require("node:assert/strict"),http=require("node:http"),fs=require("node:fs"),path=require("node:path");
const manifest=require("../native-integrations.json"),model=require("../../pilot-assessment/model.js");
const entry=manifest.external.find(e=>e.repo===process.env.APP_REPO);
if(!entry)throw Error("Unknown repository");
const root=path.resolve(process.env.APP_SITE),prefix="/"+entry.repo+"/",mime={".html":"text/html",".js":"application/javascript",".mjs":"application/javascript",".css":"text/css",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".json":"application/json",".txt":"text/plain",".woff2":"font/woff2",".wasm":"application/wasm"};
const server=http.createServer((req,res)=>{try{let p=decodeURIComponent(new URL(req.url,"http://localhost").pathname);if(p.startsWith(prefix))p="/"+p.slice(prefix.length);const file=path.resolve(root,"."+p);if(file!==root&&!file.startsWith(root+path.sep))throw Error("path");let f;try{f=fs.statSync(file).isDirectory()?path.join(file,"index.html"):file;}catch{if(path.extname(file))throw Error("missing");f=path.join(root,"index.html");}res.setHeader("Content-Type",mime[path.extname(f)]||"application/octet-stream");res.end(fs.readFileSync(f));}catch{res.writeHead(404);res.end();}});
async function finish(page,dialog,lang){
 const t=(es,en)=>lang==="es"?es:en;
 await dialog.waitFor({state:"visible",timeout:20000});
 await dialog.getByRole("button",{name:t("He terminado · evaluación final","I finished · final assessment"),exact:true}).click();
 for(const f of await dialog.locator("fieldset").all())await f.locator('input[value="0"]').check();
 for(const s of await dialog.locator(".ratings select").all()){const opts=await s.locator("option").evaluateAll(o=>o.map(v=>v.value));await s.selectOption(opts.includes("5")?"5":"seek_evidence");}
 await dialog.getByRole("button",{name:t("Guardar resultado","Save result"),exact:true}).click();
 await dialog.getByRole("heading",{name:t("Tu resultado de aprendizaje","Your learning result")}).waitFor();
 const download=page.waitForEvent("download");await dialog.getByRole("button",{name:t("Descargar resultado JSON","Download JSON result")}).click();
 const record=model.parse(JSON.parse(fs.readFileSync(await (await download).path(),"utf8")))[0];
 assert.equal(record.resourceId,entry.id);assert.equal(record.language,lang);assert.equal(record.outcome,"completed");
 if(model.measured(entry.id)){assert.equal(model.score(record.pre),2);assert.equal(model.score(record.post),4);}
 console.log("Native result exported and validated",entry.repo,lang);
}
(async()=>{
 await new Promise(r=>server.listen(0,"127.0.0.1",r));
 const origin="http://127.0.0.1:"+server.address().port,browser=await chromium.launch();
 try{
 const script=entry.kind==="biolab"?null:fs.readFileSync(path.resolve(process.env.APP_SOURCE,entry.script),"utf8");
 const config=script?JSON.parse(script.match(/const config=(\{[^\n]*?\});/)[1]):null;
 const languages=config?.fixedLanguage?[config.fixedLanguage]:entry.kind==="biolab"?[entry.repo.endsWith("-en")?"en":"es"]:["es","en"];
 for(const lang of languages){
 const context=await browser.newContext({acceptDownloads:true,viewport:{width:1280,height:900}});
 await context.route("**/*",r=>r.request().url().startsWith(origin)?r.continue():r.abort());
 const page=await context.newPage(),errors=[];
 page.on("pageerror",e=>errors.push(e.message));
 await page.goto(origin+prefix+"?hubLang="+lang,{waitUntil:"domcontentloaded"});
 if(entry.kind==="biolab"){
 await context.close();
 const bio=require("../../pilot-assessment/biolab-results.js");
 const t=(es,en)=>lang==="es"?es:en;
 for(const track of ["general","climate","resilience"]){
   const c=await browser.newContext({acceptDownloads:true,viewport:{width:1440,height:1000},reducedMotion:"reduce"}),p=await c.newPage(),errs=[];
   try{
     await c.route("**/*",r=>r.request().url().startsWith(origin)?r.continue():r.abort());p.on("pageerror",e=>errs.push(e.message));
     await p.goto(origin+prefix+"?hubLang="+lang);
     const button=async name=>p.getByRole("button",{name,exact:true}).first().click({timeout:20000});
     if(track==="general")await p.locator("button.biolab-btn-accent").last().click();
     else await button(track==="climate"?t("Empezar adaptación climática","Start climate adaptation"):t("Empezar resiliencia estratégica","Start strategic resilience"));
     await button(t("Formar los equipos","Form teams"));await p.getByRole("textbox").first().fill("Synthetic QA team");
     await button(t("Añadir","Add"));await button(t("Asignar retos","Assign challenges"));
     const pre=p.locator("fieldset");await pre.first().waitFor();assert.equal(await pre.count(),4);for(const f of await pre.all())await f.locator('input[type="radio"]').first().check();
     await button(t("Guardar evaluación","Save assessment"));
     if(track==="general")await p.locator(".biolab-wheel-panel .biolab-btn-accent").click();
     else await p.locator('button[aria-pressed].biolab-btn-ghost').filter({visible:true}).nth(2).click();
     await button(t("Confirmar reto","Confirm challenge"));
     await p.getByRole("button",{name:t("Elegir este modelo","Choose this model"),exact:true}).first().click();
     await button(t("Ir al paso 4: conectar reto y principio","Go to step 4: connect challenge and principle"));
     await button(t("Ir al paso 5: abrir el lienzo","Go to step 5: open the canvas"));
     const fields=p.locator("textarea");await fields.first().waitFor();assert.equal(await fields.count(),6);
     const answers=["The fictional system is exposed to recurring environmental pressure, so we need to identify the physical mechanism and the service function at risk.","The selected living organism offers a functional analogy that must be examined rather than copied merely for appearance or assumed performance.","A bounded design principle is to modify the interface to manage exposure while maintaining the function, and compare the mechanism against a reference.","A candidate prototype would be assessed against an unmodified reference through controlled tests, including degradation, maintenance and failure modes.","The anticipated benefit is reduced vulnerability, not a proven performance improvement; define a measurable baseline and compare under identical conditions.","Establish technical ownership, applicable requirements and independent review before any implementation; record uncertainties and test results."];
     for(let i=0;i<6;i++)await fields.nth(i).fill(answers[i]);
     await button(t("Ya he redactado los seis apartados · Preparar presentación →","I have written all six sections · Prepare my pitch →"));
     await p.getByRole("textbox").first().fill("Bounded biomimetic prototype evaluation");
     await p.locator("textarea").fill("This fictional proposal compares a natural functional mechanism with a reference design. We would test environmental exposure, durability and maintainability using bounded measurements, document the uncertainties and obtain authorised technical review before implementation.");
     await button(t("Ir al paso 7: revisar propuestas","Go to step 7: review proposals"));
     await button(t("Ver mi resultado y compararlo con la solución de referencia","See results and compare with a reference"));
     const post=p.locator("fieldset");await post.first().waitFor();assert.equal(await post.count(),4);for(const f of await post.all())await f.locator('input[type="radio"]').first().check();
     for(const sel of await p.locator("select").all()){const values=await sel.locator("option").evaluateAll(os=>os.map(o=>o.value));await sel.selectOption(values.includes("4")?"4":"seek_evidence");}
     await button(t("Guardar evaluación","Save assessment"));
     const pending=p.waitForEvent("download");await button(t("Exportar resultados sin nombre (JSON)","Export unnamed results (JSON)"));
     const record=bio.parse(JSON.parse(fs.readFileSync(await (await pending).path(),"utf8")))[0];assert.equal(record.track,track);assert.equal(record.language,lang);assert.equal(record.maxScore,4);assert.ok(record.challengeId);assert.deepEqual(errs,[]);
     console.log("REAL COMPLETE BIOLAB JOURNEY",track,lang,record.challengeId);
   }finally{await c.close();}
 }
 continue;
 }
 const native=page.locator("#sn-native-learning-evidence"),dialog=native.locator("dialog");
 await dialog.waitFor({state:"visible",timeout:45000});
 assert.equal(await dialog.getAttribute("lang"),lang);
 assert.equal(await dialog.locator("fieldset").count(),model.measured(entry.id)?4:0);
 const t=(es,en)=>lang==="es"?es:en;
 for(const [i,f] of (await dialog.locator("fieldset").all()).entries())await f.locator('input[value="'+[0,1,3,0][i]+'"]').check();
 await dialog.getByRole("button",{name:t("Guardar y empezar","Save and start"),exact:true}).click();
 await dialog.waitFor({state:"hidden"});await native.locator(".dock").waitFor({state:"visible"});
 console.log("Direct baseline gate passed",entry.repo,lang);
 if(["mission-energy","material-sovereignty"].includes(entry.repo)){
 const click=async a=>page.locator('[data-action="'+a+'"]').first().click({timeout:10000});
 await click("start");
 for(let i=0;i<5;i++){await click("after-theory");await click("begin");for(let j=0;j<10;j++){await click("answer");await click("next-question");}await click("next-mission");}
 await page.locator('[data-sn-pilot-complete="true"]').waitFor();await finish(page,dialog,lang);
 console.log("REAL COMPLETE JOURNEY: five missions / fifty decisions",entry.repo,lang);
 }else if(entry.repo==="fuel-sovereignty"){
 const click=async a=>page.locator('[data-cmd="'+a+'"]').first().click({timeout:10000});
 await click("start");for(let i=0;i<6;i++){await click("endStudy");await page.locator('button[data-select]:enabled').first().click();await click("commit");await click("next");}
 await page.locator(".report-head").waitFor();await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY: six crises",entry.repo,lang);
 }else if(entry.repo==="tassg-composite-guardian"){
 await page.locator('#home [data-go="briefing"]').click();
 await page.locator('#briefing [data-go="mission1"]').click();
 for(let stage=1;stage<=4;stage++){
   await page.locator('#mission'+stage+' [data-option="'+stage+'B"]').click();
   await page.locator('#eval'+stage).click();
   await page.locator('#fb'+stage+' button').click();
   await page.locator('#theory'+stage+' [data-go="mission'+(stage+1)+'"]').click();
 }
 await page.locator('#mission5 [data-audit="B"]').click();
 await page.locator('#finishBtn').click();
 await page.locator('#finalizeBtn').click();
 await page.locator('#results.active').waitFor();
 await finish(page,dialog,lang);
 console.log("REAL COMPLETE JOURNEY: five stages and theory checkpoints",entry.repo,lang);
 }else if(entry.repo==="eco-retrofit-mineral-footprint"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click('#home [data-go="briefing"]');await click('#briefing [data-go="mission1"]');
 for(const v of ["tantalum","tin","gold","tungsten","ree","cobalt"])await click('[data-mineral="'+v+'"]');
 await click("#eval1");await click("#fb1 button");await click('#theory1 [data-go="mission2"]');
 for(let stage=2;stage<=6;stage++){await click('#mission'+stage+' [data-option="'+stage+'B"]');await click("#eval"+stage);await click("#fb"+stage+" button");if(stage<6)await click('#theory'+stage+' [data-go="mission'+(stage+1)+'"]');}
 await page.locator("#results.active").waitFor();await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY: six mineral sourcing stages",entry.repo,lang);
 }else if(entry.repo==="sustainability-knowledge-check"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click('[data-action="start"]');let questions=0;
 while(!(await page.locator(".results-page").isVisible())){
   assert.ok(questions++<100,"Quiz did not reach its own result");
   const submit=page.locator('[data-action="submit"]');await submit.waitFor({state:"visible"});
   let choices=0;
   while(!(await submit.isEnabled())){
     assert.ok(choices++<20,"Unable to complete response through controls");
     const opts=page.locator('[data-action="sequence-add"],[data-action="select"][aria-pressed="false"]');
     await opts.first().click({timeout:10000});
   }
   await submit.click();await click('[data-action="next"]');
 }
 assert.ok(questions>0);await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY:",questions,"diagnostic questions",entry.repo,lang);
 }else if(entry.repo==="tass-readiness-resilience-simulator"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click("#playNowBtn");let missions=0;
 while(!(await page.locator(".final-learning-recap").isVisible())){
   assert.ok(missions++<12,"Simulation did not reach recap");
   await click('[data-opt]:enabled');await click("#confirmOperational");await click("#nextPhase");
   await click('[data-evidence]:enabled');await click("#confirmInvestigation");await click("#nextPhase");
   const available=page.locator('[data-invest]:enabled').filter({visible:true});await available.first().waitFor();
   // Pick the least expensive displayed option; retain normal budget constraints.
   const options=await available.allTextContents();const costs=options.map(v=>Number((v.match(/€\s*(\d+)/)||[])[1]||999999));await available.nth(costs.indexOf(Math.min(...costs))).click();
   await click("#confirmInvestment");await click("#nextIncident");await click("#missionDebriefNext");
 }
 await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY:",missions,"readiness missions",entry.repo,lang);
 }else if(entry.id==="tas-sustainability-knowledge-check"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click('[data-mode="full"]');let questions=0;
 while(!(await page.locator(".results-summary.panel").isVisible())){
   assert.ok(questions++<55,"Assessment did not reach its result");
   await click('[data-answer]');await click('[data-action="next"]');
   if(await page.locator('[data-action="continue-block"]').isVisible())await click('[data-action="continue-block"]');
 }
 assert.equal(questions,50);await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY: full 50-question assessment",entry.repo,lang);
 }else if(entry.id==="sustainability-control-room"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 const modes=page.locator("#modeGrid [data-decisions]");await modes.first().waitFor();const counts=(await modes.evaluateAll(a=>a.map(x=>Number(x.dataset.decisions))));const count=Math.max(...counts);await click('[data-decisions="'+count+'"]');await click("#startMissionBtn");
 for(let i=0;i<count;i++){await click("#answers .answer");await click("#confirmBtn");await click("#nextBtn");}
 await page.locator("#resultScreen.active").waitFor();await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY:",count,"timed decisions",entry.repo,lang);
 }else if(entry.id==="sustainable-aviation-essentials"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click('[data-open="m1"]');
 for(let i=1;i<=8;i++){
   const section=page.locator('#m'+i+'.active');await section.waitFor();
   const qs=await section.locator(".activity .question").all();assert.ok(qs.length);
   for(const q of qs)await q.locator('.choice[data-correct="true"]').click();
   await section.locator(".completeModule").click();
   await section.locator(".completion.show").waitFor();
   if(i<8)await section.locator('[data-open="m'+(i+1)+'"]').click();
 }
 await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY: eight modules and final war room",entry.repo,lang);
 }else if(entry.id==="sustainability-evidence-decisions"){
 await page.locator("#nav-program").click();
 const total=await page.locator("#program-view .open-btn").count();assert.ok(total>0);
 for(let i=0;i<total;i++){
   await page.locator("#program-view .open-btn").nth(i).click();
   const groups=page.locator("#module-view .choice-wrap");await groups.first().waitFor();
   const count=await groups.count();assert.ok(count>=2);
   for(let j=0;j<count;j++){
     const g=groups.nth(j),opts=g.locator(".choice-option");let solved=false;
     for(let k=0;k<await opts.count();k++){
       await opts.nth(k).click();await g.locator(".choice-submit").click();
       if(await g.locator(".choice-feedback.correct").isVisible()){solved=true;break;}
     }
     assert.ok(solved,"No correct response in module "+i+" exercise "+j);
   }
   if(i<total-1)await page.locator("#nav-program").click();
 }
 await page.locator('[data-sn-pilot-complete="true"]').waitFor();await finish(page,dialog,lang);
 console.log("REAL COMPLETE JOURNEY:",total,"modules including practical cases and quizzes",entry.repo,lang);
 }else if(entry.id==="introduction-sustainability-aviation"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click("#overviewBtn");let modules=0;
 while(!(await page.locator('[data-go="assessment"]').filter({visible:true}).count())){
   assert.ok(modules++<10,"Course failed to unlock assessment");
   const current=page.locator('.route-card.current [data-go^="module-"]');await current.first().click();
   for(const attr of ["data-case-option","data-check-option"]){
     const opts=page.locator('['+attr+']');await opts.first().waitFor();let solved=false;
     for(let k=0;k<await opts.count();k++){await opts.nth(k).click();if(await page.locator('['+attr+'].correct').isVisible()){await page.locator('['+attr+'].correct').click();solved=true;break;}}
     assert.ok(solved,"No correct answer for "+attr);
   }
   await click("#completeModule");
   await page.locator(".route-card").first().waitFor();
 }
 assert.equal(modules,8);await click('[data-go="assessment"]');
 const answers=[0,0,1,1,1,1,0,1,1,1];for(let i=0;i<answers.length;i++)await click('[data-final-q="'+i+'"][data-final-option="'+answers[i]+'"]');
 await click("#submitFinal");await page.locator("#printCertificate").waitFor();await finish(page,dialog,lang);
 console.log("REAL COMPLETE JOURNEY: eight milestones and ten-question final exam",entry.repo,lang);
 }else if(entry.id==="sustainability-systems-escape-room"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click("#briefBtn");await click("#beginBtn");
 // Read the existing exercise answer key, then solve exclusively through its normal input controls.
 const rooms=await page.evaluate(()=>ROOMS.map(r=>({clue:r.clue,answers:r.rows.map(x=>x.answer)})));
 assert.equal(rooms.length,10);
 for(let i=0;i<rooms.length;i++){
   const sels=page.locator("#puzzleRows select");await sels.first().waitFor();
   assert.equal(await sels.count(),rooms[i].answers.length);
   for(let j=0;j<rooms[i].answers.length;j++)await sels.nth(j).selectOption(String(rooms[i].answers[j]));
   await click("#validateBtn");await page.locator("#debrief.show").waitFor();
   if(i<rooms.length-1)await click("#nextRoomBtn");
 }
 await page.locator("#finalCodeInput").fill(rooms.map(r=>r.clue).join(""));await click("#unlockBtn");
 await page.locator("#resultsScreen.active").waitFor();await finish(page,dialog,lang);
 console.log("REAL COMPLETE JOURNEY: ten rooms and final code",entry.repo,lang);
 }else if(entry.id==="strategic-soil-footprint-mapper"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click("#start");await click("#begin");
 for(let i=0;i<5;i++){await click(".choice[data-id]");await click("#confirm");await click("#learn");await click("#next");}
 await page.locator(".screen.auditLayout").waitFor();await finish(page,dialog,lang);
 console.log("REAL COMPLETE JOURNEY: five soil missions and final audit",entry.repo,lang);
 }else if(entry.id==="bio-radar-runway-prevention"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click('#home [data-go="briefing"]');await click('#briefing [data-go="mission1"]');
 const spots=page.locator("#mission1 [data-location-id]");assert.equal(await spots.count(),6);
 for(let i=0;i<6;i++){await spots.nth(i).click();await click("#stage1Decision button[data-action]");}
 await click('[data-option="1B"]');await click("#eval1");await click("#fb1 button");await click('#theory1 [data-go="mission2"]');
 for(const key of ["drain","grass","waste","roof"])await click('[data-key="'+key+'"]');
 await click("#eval2");await click("#fb2 button");await click('#theory2 [data-go="mission3"]');
 for(let stage=3;stage<=5;stage++){await click('[data-option="'+stage+'B"]');await click("#eval"+stage);await click("#fb"+stage+" button");await click('#theory'+stage+' [data-go="mission'+(stage+1)+'"]');}
 for(const k of ["data","roles","habitat","tools","thresholds","protected","metrics"])await click('[data-plan="'+k+'"]');
 await click("#eval6");await click("#fb6 button");await page.locator("#results.active").waitFor();await finish(page,dialog,lang);
 console.log("REAL COMPLETE JOURNEY: six wildlife-risk stages",entry.repo,lang);
 }else if(entry.id==="airpower-mission-green-2026"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 await click(".launch-button");await click(".briefing-modal .primary-button");
 for(let i=0;i<6;i++){
   await click(".mission-card:not(.complete) button");
   await click(".learning-actions .primary-button");
   for(let j=0;j<5;j++){await click(".choice-list .choice-card");await click(".decision-main .primary-button");}
   await click(".learning-actions .primary-button");await click(".debrief-actions .primary-button");
 }
 await click(".map-footer .secondary-button");await page.locator(".final-screen").waitFor();
 await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY: six missions, 30 decisions and pre/post theory",entry.repo,lang);
 }else if(entry.id==="sustainable-aviation-foundations-master"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:15000});
 // Read the course's existing content model; never write to its progress or dispatch completion.
 const course=await page.evaluate(()=>{const d=window.FOUNDATIONS_ACTIVE_DATA||window.FOUNDATIONS_DATA;return {modules:d.modules.map(m=>({id:m.id,lessons:m.lessons.length,lab:m.lab.questions.map(q=>q.correct),assessment:m.assessmentQuestions.map(q=>q.correct)})),final:d.finalAssessment.questions.map(q=>q.correct)};});
 assert.equal(course.modules.length,6);
 const nav=async hash=>{await page.goto(origin+prefix+"?hubLang="+lang+"#"+hash);await page.waitForURL(u=>u.hash==="#"+hash);};
 for(const m of course.modules){
   await nav("course");await nav("module/"+m.id);
   const paths=Array.from({length:m.lessons},(_,i)=>"lesson/"+m.id+"/"+i);
   for(const path of paths){await nav(path);await page.locator(".lesson-header").waitFor();}
   await nav("visuals/"+m.id);const tabs=page.locator('[data-action="visual-step"]');for(let i=0;i<await tabs.count();i++)await tabs.nth(i).click();
   await nav("case/"+m.id);await nav("lab/"+m.id);
   for(let i=0;i<m.lab.length;i++)await click('[data-action="lab-answer"][data-question="'+i+'"][data-index="'+m.lab[i]+'"]');
   await nav("assessment/"+m.id);
   for(let i=0;i<m.assessment.length;i++)await click('[data-action="assessment-answer"][data-question="'+i+'"][data-index="'+m.assessment[i]+'"]');
   await page.locator(".result-banner.passed").waitFor();assert.equal(await dialog.isVisible(),false,"Final assessment must not open after an individual module");
 }
 await nav("capstone");const notes=page.locator("textarea[data-note]");for(const n of await notes.all())await n.fill("Synthetic browser test: evaluate a bounded decision using evidence, trade-offs and authorised review.");
 await nav("final-check");
 for(let i=0;i<course.final.length;i++)await click('[data-action="final-answer"][data-question="'+i+'"][data-index="'+course.final[i]+'"]');
 await page.locator(".result-banner.passed").waitFor();await finish(page,dialog,lang);
 console.log("REAL COMPLETE JOURNEY: six full modules, lessons, labs, assessments, capstone and final exam",entry.repo,lang);
 }else if(entry.id==="tas-sustainability-quest"){
 const click=async s=>page.locator(s).filter({visible:true}).first().click({timeout:20000});
 const key="sustainability-quest-"+lang+"-v3";
 const read=()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)||"null"),key);
 const graph=Array.from({length:43},()=>[]),link=(a,b)=>{graph[a].push(b);graph[b].push(a);};
 for(let i=0;i<6;i++){link(0,1+i*3);link(1+i*3,2+i*3);link(2+i*3,3+i*3);link(3+i*3,19+i);link(19+i,25+i*3);link(25+i*3,26+i*3);link(26+i*3,27+i*3);link(27+i*3,19+((i+1)%6));}
 const dist=(start,targets)=>{const q=[[start,0]],seen=new Set([start]);while(q.length){const [n,d]=q.shift();if(targets.includes(n))return d;for(const v of graph[n])if(!seen.has(v)){seen.add(v);q.push([v,d+1]);}}return 999;};
 await click(".start-button");await page.waitForFunction(k=>!!localStorage.getItem(k),key);
 let rolls=0,answers=0,iterations=0;
 while(!(await page.locator(".victory-page").isVisible())){
   assert.ok(iterations++<700,"Game did not reach victory through normal moves");
   const st=await read();assert.ok(st);const player=st.players[st.currentPlayerIndex];
   if(st.phase==="rolling"){
     if(await page.locator(".final-button").isVisible())await click(".final-button");
     else{rolls++;await click(".roll-button");await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)||"{}").phase!=="rolling",key,{timeout:20000});}
   }else if(st.phase==="selectingMove"){
     const targets=player.wedges.every(Boolean)?[0]:player.wedges.flatMap((w,i)=>w?[]:[19+i]);
     const ids=Object.keys(st.validDestinations).map(Number);assert.ok(ids.length);
     let idx=0;for(let i=1;i<ids.length;i++)if(dist(ids[i],targets)<dist(ids[idx],targets))idx=i;
     await page.locator("g.destination").nth(idx).click({timeout:20000});
     await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)||"{}").phase!=="selectingMove",key,{timeout:20000});
   }else if(st.phase==="selectingCategory"){
     await page.locator(".category-grid button").nth(Math.max(0,player.wedges.indexOf(false))).click();
   }else if(st.phase==="answering"){
     assert.ok(st.currentQuestion);await page.locator(".answer-button").nth(st.currentQuestion.correctIndex).click();answers++;
   }else if(st.phase==="feedback"){await click(".feedback-card .primary-button");}
   else if(st.phase==="victory"){break;}
   else throw Error("Unexpected game phase "+st.phase);
   await page.waitForTimeout(80);
 }
 const won=await read();assert.equal(won.phase,"victory");assert.ok(won.players[0].wedges.every(Boolean));
 await finish(page,dialog,lang);console.log("REAL COMPLETE JOURNEY: six badges and final challenge",entry.repo,lang,"rolls",rolls,"answers",answers);
 }else if(config.manual){
 await native.locator(".dock button").click();await finish(page,dialog,lang);
 console.log("Manual consultation feedback completed",entry.repo,lang);
 }else{
 // Exercise the actual embedded component against its declared final signal, but
 // do not misrepresent this controlled signal as playing the original game.
 await native.locator(".dock button").click();
 assert.equal(await dialog.getByRole("button",{name:t("He terminado · evaluación final","I finished · final assessment")}).count(),0);
 await dialog.getByRole("button",{name:t("Volver a la actividad","Return to activity"),exact:true}).click();
 await page.evaluate(()=>document.dispatchEvent(new Event("sn-pilot:completed")));
 await finish(page,dialog,lang);
 console.log("CONTROLLED final-signal integration only; original journey not played",entry.repo,lang);
 }
 assert.deepEqual(errors,[],entry.repo+" "+lang+" uncaught JS errors");await context.close();
 }
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});