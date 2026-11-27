"use strict";
const {chromium}=require("playwright"),assert=require("node:assert/strict"),m=require("../../pilot-assessment/model.js");
const root="https://aug79-droid.github.io/sustainability-navigator/";
const targets=[...m.resources.values()].filter(r=>r.id!=="airbus-strategic-resilience-intelligence"&&r.lifecycle==="active").flatMap(r=>["es","en"].map(lang=>({r,lang,url:m.launchURL(r.id,lang,root)})));
(async()=>{const browser=await chromium.launch({headless:true});const failed=[];let passed=0;
async function check({r,lang,url}){
const context=await browser.newContext();try{const page=await context.newPage();const res=await page.goto(url,{waitUntil:"domcontentloaded",timeout:45000});assert.ok(res?.ok(),"HTTP "+res?.status());
if(r.id==="bio-inspired-innovation-lab"){
await page.getByRole("button",{name:lang==="es"?"Empezar adaptación climática":"Start climate adaptation",exact:true}).click({timeout:20000});
await page.getByRole("button",{name:lang==="es"?"Formar los equipos":"Form teams",exact:true}).click();
await page.locator('input[type="text"]').fill("Synthetic QA team");
await page.getByRole("button",{name:lang==="es"?"Añadir":"Add",exact:true}).click();
await page.getByRole("button",{name:lang==="es"?"Asignar retos":"Assign challenges",exact:true}).click();
await page.getByRole("heading",{name:lang==="es"?"Antes del reto · 4 preguntas":"Before the challenge · 4 questions",exact:true}).waitFor();
assert.equal(await page.locator('fieldset').count(),4);
}else{
const d=page.locator("#sn-native-learning-evidence dialog");await d.waitFor({state:"visible",timeout:20000});assert.equal(await d.getAttribute("lang"),lang);assert.equal(await d.locator("fieldset").count(),m.measured(r.id)?4:0);
}
console.log("LIVE PASS",r.id,lang,url);passed++;
}catch(e){failed.push({id:r.id,lang,url,error:String(e).slice(0,500)});console.error("LIVE FAIL",r.id,lang,String(e).slice(0,250));}finally{await context.close();}}
try{
for(let i=0;i<targets.length;i+=4)await Promise.all(targets.slice(i,i+4).map(check));
const p=await browser.newPage();const res=await p.goto(root+"pilot-assessment/report.html?lang=es",{waitUntil:"domcontentloaded"});assert.ok(res?.ok());await p.getByRole("heading",{name:"Consolidación del piloto",exact:true}).waitFor();console.log("LIVE PASS results dashboard");
console.log("Public entries:",passed+"/"+targets.length);if(failed.length)throw Error(JSON.stringify(failed));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
