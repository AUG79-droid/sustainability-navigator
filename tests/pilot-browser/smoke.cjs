"use strict";
const {chromium}=require("playwright"),assert=require("node:assert/strict"),http=require("node:http"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"../.."),mime={".html":"text/html",".js":"application/javascript",".css":"text/css",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"};
const server=http.createServer((req,res)=>{try{const p=new URL(req.url,"http://localhost").pathname;const file=path.resolve(root,"."+p);if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}const target=fs.statSync(file).isDirectory()?path.join(file,"index.html"):file;res.setHeader("Content-Type",mime[path.extname(target)]||"application/octet-stream");res.end(fs.readFileSync(target));}catch{res.writeHead(404);res.end();}});
(async()=>{
 await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
 const origin="http://127.0.0.1:"+server.address().port;
 const browser=await chromium.launch({headless:true});const errors=[];
 const context=await browser.newContext({acceptDownloads:true});
 await context.route("https://aug79-droid.github.io/**",route=>route.fulfill({status:200,contentType:"text/html",body:"<html><body>Mock resource for launch transition test</body></html>"}));
 try{
 const page=await context.newPage();page.on("pageerror",e=>errors.push(e.message));
 await page.goto(origin+"/index.html?lang=es#applications");
 const card=page.locator('[data-resource-id="mission-energy"] .pilot-assessed-launch').first();await card.waitFor({state:"visible"});assert.match(await card.getAttribute("href"),/resource=mission-energy/);
 await card.click();await page.waitForURL("**/pilot-assessment/index.html?resource=mission-energy&lang=es");assert.equal(await page.locator("fieldset.question").count(),4);
 assert.equal(await page.getByRole("link",{name:"Abrir el recurso ↗",exact:true}).count(),0);
 for(const field of await page.locator("fieldset.question").all())await field.locator('input[value="0"]').check();
 await page.getByRole("button",{name:"Guardar y continuar"}).click();
 await page.reload();await page.getByRole("link",{name:"Abrir el recurso ↗",exact:true}).waitFor();
 const popup=page.waitForEvent("popup");await page.getByRole("link",{name:"Abrir el recurso ↗",exact:true}).click();const resource=await popup;await resource.close();
 await page.getByRole("button",{name:"He completado la experiencia"}).click();
 for(const field of await page.locator("fieldset.question").all())await field.locator('input[value="0"]').check();
 for(const s of await page.locator(".feedback select").all()){const values=await s.locator("option").evaluateAll(os=>os.map(o=>o.value));await s.selectOption(values.includes("5")?"5":"seek_evidence");}
 await page.getByRole("button",{name:"Guardar resultado del piloto"}).click();await page.getByRole("heading",{name:"Resultado registrado"}).waitFor();
 assert.ok((await page.locator(".metric strong").allTextContents()).includes("0 pp"));
 const download=page.waitForEvent("download");await page.getByRole("button",{name:"Descargar resultado JSON"}).click();const f=await download;const downloaded=await f.path();const data=JSON.parse(fs.readFileSync(downloaded,"utf8"));assert.equal(data.records.length,1);assert.equal(data.records[0].outcome,"completed");
 await page.goto(origin+"/pilot-assessment/report.html?lang=es");await page.locator('input[type=file]').setInputFiles(downloaded);await page.getByText("Archivos importados: 1",{exact:false}).waitFor();assert.match(await page.locator("tbody").innerText(),/Mission Energy/);assert.equal(await page.locator("tbody tr").count(),1);
 await page.goto(origin+"/pilot-assessment/index.html?resource=sustainable-aviation-learning-library&lang=en");assert.equal(await page.locator("fieldset.question").count(),0);await page.getByRole("link",{name:"Open resource ↗",exact:true}).waitFor();
 await page.goto(origin+"/pilot-assessment/index.html?resource=material-sovereignty&lang=en");assert.equal(await page.locator("fieldset.question").count(),4);assert.equal(await page.locator("html").getAttribute("lang"),"en");
 assert.deepEqual(errors,[]);console.log("Chromium pilot smoke passed: catalogue entry, baseline gate, persistence, launch, post-assessment, survey, JSON export/import, deduplication, library and English.");
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
