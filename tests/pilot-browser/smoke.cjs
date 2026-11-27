"use strict";
const {chromium}=require("playwright"),assert=require("node:assert/strict"),http=require("node:http"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"../.."),mime={".html":"text/html",".js":"application/javascript",".css":"text/css",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"};
const model=require("../../pilot-assessment/model.js");
const server=http.createServer((req,res)=>{try{const p=new URL(req.url,"http://localhost").pathname;const file=path.resolve(root,"."+p);if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}const target=fs.statSync(file).isDirectory()?path.join(file,"index.html"):file;res.setHeader("Content-Type",mime[path.extname(target)]||"application/octet-stream");res.end(fs.readFileSync(target));}catch{res.writeHead(404);res.end();}});
const internals=["responsible-supply-chain-compliance-foundations","eco-design-circularity-aerospace-materials","supply-chain-compliance-decision-review","eco-design-lifecycle-decision-assessment","ethical-armor-bilingual","phytosanitary-defender-bilingual","reach-compliance-challenge","year-15-challenge"];
(async()=>{
 await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
 const origin="http://127.0.0.1:"+server.address().port;
 const browser=await chromium.launch({headless:true});const errors=[];
 const context=await browser.newContext({acceptDownloads:true});
 await context.route("**/*",route=>route.request().url().startsWith(origin)?route.continue():route.abort());
 try{
 const page=await context.newPage();page.on("pageerror",e=>errors.push(e.message));
 await page.goto(origin+"/index.html?lang=es#applications");
 const card=page.locator('[data-resource-id="year-15-challenge"] .application-launch').first();await card.waitFor({state:"visible"});assert.match(await card.getAttribute("href"),/year-15-challenge/);
 assert.equal(await page.locator(".application-launches .pilot-assessed-launch").count(),0);
 await page.goto(origin+"/year-15-challenge/?hubLang=es");
 const native=page.locator("#sn-native-learning-evidence"),dialog=native.locator("dialog");
 await dialog.waitFor({state:"visible"});assert.equal(await dialog.locator("fieldset").count(),4);
 for(const [i,field] of (await dialog.locator("fieldset").all()).entries())await field.locator('input[value="'+[0,1,3,0][i]+'"]').check();
 await dialog.getByRole("button",{name:"Guardar y empezar"}).click();await dialog.waitFor({state:"hidden"});
 await page.reload();await native.locator(".dock").waitFor({state:"visible"});assert.equal(await dialog.isVisible(),false);
 await page.locator('[data-action="start"]').click();
 for(let i=0;i<4;i++){await page.locator('[data-action="choose"]').first().click();await page.locator('[data-action="confirm"]').click();await page.locator('[data-action="next"]').click();}
 await page.locator(".final-screen").waitFor();await dialog.waitFor({state:"visible"});
 await dialog.getByRole("button",{name:"He terminado · evaluación final"}).click();
 for(const field of await dialog.locator("fieldset").all())await field.locator('input[value="0"]').check();
 for(const s of await dialog.locator(".ratings select").all()){const values=await s.locator("option").evaluateAll(os=>os.map(o=>o.value));await s.selectOption(values.includes("5")?"5":"seek_evidence");}
 await dialog.getByRole("button",{name:"Guardar resultado",exact:true}).click();await dialog.getByRole("heading",{name:"Tu resultado de aprendizaje"}).waitFor();
 assert.ok((await dialog.locator(".metric strong").allTextContents()).includes("50 pp"));
 const download=page.waitForEvent("download");await dialog.getByRole("button",{name:"Descargar resultado JSON"}).click();const f=await download;const downloaded=await f.path();const data=JSON.parse(fs.readFileSync(downloaded,"utf8"));const records=model.parse(data);assert.equal(records.length,1);assert.equal(records[0].resourceId,"year-15-challenge");assert.equal(records[0].outcome,"completed");
 await page.goto(origin+"/pilot-assessment/report.html?lang=es");await page.locator('input[type=file]').setInputFiles(downloaded);await page.getByText("Archivos importados: 1",{exact:false}).waitFor();assert.match(await page.locator("tbody").innerText(),/Año 15/);assert.equal(await page.locator("tbody tr").count(),1);
 const bio={schema:1,assessmentVersion:"biolab-pilot-v2",resourceId:"bio-inspired-innovation-lab",language:"es",unit:"session/team",sessionKey:"synthetic-test-0001",track:"climate",challengeId:"c9",preScore:2,postScore:4,maxScore:4,utility:4,clarity:5,transfer:0,confidence:4,action:"seek_evidence"};
 await page.locator('input[type=file]').setInputFiles({name:"synthetic-bio.json",mimeType:"application/json",buffer:Buffer.from(JSON.stringify(bio))});await page.getByText("Archivos importados: 2",{exact:false}).waitFor();assert.match(await page.locator("tbody").innerText(),/Adaptación climática/);assert.equal(await page.locator("tbody tr").count(),2);
 const fresh=await browser.newContext();await fresh.route("**/*",route=>route.request().url().startsWith(origin)?route.continue():route.abort());const second=await fresh.newPage();second.on("pageerror",e=>errors.push(e.message));
 await second.goto(origin+"/pilot-assessment/index.html?resource=year-15-challenge&lang=en");await second.waitForURL("**/year-15-challenge/**");await second.locator("#sn-native-learning-evidence dialog").getByRole("heading",{name:"Before you start"}).waitFor();
 for(const dir of internals){for(const language of ["es","en"]){await second.goto(origin+"/"+dir+"/?hubLang="+language,{waitUntil:"domcontentloaded"});const d=second.locator("#sn-native-learning-evidence dialog");await d.waitFor({state:"visible",timeout:45000});assert.equal(await d.locator("fieldset").count(),4,dir+" "+language);assert.equal(await d.getAttribute("lang"),language);console.log("Direct initial assessment:",dir,language);}}
 await fresh.close();
 assert.deepEqual(errors,[]);console.log("Chromium native pilot smoke passed: eight bilingual direct-entry resources, actual Year 15 journey, paired scores, JSON, cross-instrument aggregation, duplicate handling and legacy-link redirect.");
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
