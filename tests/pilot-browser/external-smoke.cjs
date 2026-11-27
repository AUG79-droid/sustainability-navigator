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
 await page.locator("body").waitFor();await page.waitForTimeout(700);
 assert.ok((await page.locator("body").innerText()).length>100);assert.deepEqual(errors,[]);
 console.log("BioLab built entry loaded; track assessment covered by its own integration tests",entry.repo);await context.close();continue;
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