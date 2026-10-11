"use strict";

const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");

const root=path.resolve(__dirname,"..","ethical-armor-bilingual");
const context={window:{}};
vm.createContext(context);
for(const file of ["translations-es-01.js","translations-es-02.js","translations-es-03.js","translations-es-04.js","translations-es-05.js","translations-es-extra.js"]){
  vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),context,{filename:file});
}
const exact=new Map(context.window.ETHICAL_ARMOR_ES);
const partial=[
  ["YOUR NEXT ACTION → OPEN","TU SIGUIENTE ACCIÓN → ABRIR"],
  ["TIER ","NIVEL "],
  ["Tier ","Nivel "],
  ["REFINER","REFINADOR"],
  ["EXTRACTION","EXTRACCIÓN"]
];
function tr(value){
  const trimmed=value.trim();
  let output=exact.has(trimmed)?value.replace(trimmed,exact.get(trimmed)):value;
  for(const [source,target] of partial)output=output.split(source).join(target);
  return output;
}

test("translates every variable next-action heading",()=>{
  assert.equal(tr("YOUR NEXT ACTION → OPEN TIER 2"),"TU SIGUIENTE ACCIÓN → ABRIR NIVEL 2");
  assert.equal(tr("YOUR NEXT ACTION → OPEN REFINER"),"TU SIGUIENTE ACCIÓN → ABRIR REFINADOR");
  assert.equal(tr("YOUR NEXT ACTION → OPEN EXTRACTION"),"TU SIGUIENTE ACCIÓN → ABRIR EXTRACCIÓN");
});

test("translates feedback text split from its strong heading",()=>{
  const fragments=[
    "Trace one tier at a time so the evidence trail remains auditable.",
    "The next step is to flag the contradiction in the Evidence Desk.",
    "Tier 1 claimed complete upstream traceability, but the extraction record cannot tie the batch to one source. The issue is evidence quality, not a claim that either possible source is automatically unacceptable.",
    "The unverified armed intermediary and unexplained security facilitation fee create a serious due-diligence concern requiring investigation and escalation. This is a risk signal, not a criminal finding by the game.",
    "You reduced material intensity, preserved a qualified alternate route and isolated the material-intensive subassembly for future replacement. Technical qualification remains non-negotiable."
  ];
  for(const fragment of fragments){
    const translated=tr(fragment);
    assert.notEqual(translated,fragment,fragment);
    assert.doesNotMatch(translated,/\b(?:the|this|tier|trace|evidence|source|risk|supply)\b/i,fragment);
  }
});

test("normalises Tier terminology inside exact Spanish translations",()=>{
  assert.match(tr("Tier 2 opened"),/^Nivel 2 /);
  assert.doesNotMatch(tr("Tier 1 verified"),/\bTier\b/);
});
