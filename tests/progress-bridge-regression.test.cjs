"use strict";
const test=require("node:test"),assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const bridge=fs.readFileSync(path.resolve(__dirname,"..","progress-bridge.js"),"utf8");
const approved={
  "responsible-supply-chain-compliance-foundations":"#course-complete.active",
  "eco-design-circularity-aerospace-materials":"#course-complete.active",
  "supply-chain-compliance-decision-review":"#decision-review-complete.active",
  "eco-design-lifecycle-decision-assessment":"#eco-design-assessment-complete.active",
  "ethical-armor":"#final.active",
  "reach-compliance-challenge":".final-score",
  "year-15-challenge":".final-screen"
};

function harness(resourceId,selector,{readyState="complete",active=false,collision=null}={}){
  let current=active?selector:collision,domReady,observerCallback,notice=null;const reports=[];
  const button={textContent:"",onclick:null};const strong={textContent:""};
  const makeElement=()=>({className:"",setAttribute(){},remove(){notice=null},querySelector(query){return query==="strong"?strong:button},append(){},set innerHTML(value){this._html=value},get innerHTML(){return this._html}});
  const document={readyState,currentScript:{dataset:{resourceId,completionSelector:selector}},documentElement:{nodeType:1},head:{append(){}},body:{append(element){notice=element}},createElement:makeElement,addEventListener(name,callback){if(name==="DOMContentLoaded")domReady=callback},querySelector(query){if(query===".sn-progress-confirmation")return notice;if(query===".sn-progress-confirmation button")return notice?button:null;return query===current?{nodeType:1}:null}};
  class MutationObserver{constructor(callback){observerCallback=callback}observe(){}disconnect(){}}
  const service={getState:()=>({resources:{},preferences:{pendingLaunch:null}}),reportInternalCompletion(id,language){reports.push({id,language});return {ok:true}},undoResource(){},undoPathStep(){}};
  const window={SNProgressService:{createBrowserService:()=>service},SN_CATALOGUE:{},SN_LEARNING_PATHS:{},localStorage:{}};
  vm.runInNewContext(bridge,{window,document,location:{search:""},MutationObserver,URLSearchParams,setTimeout});
  return {reports,fireDomReady(){domReady?.()},activate(value=selector){current=value;observerCallback?.()},selector};
}

for(const [resourceId,selector] of Object.entries(approved)){
  test(`${resourceId} bridge is isolated and exact after DOM completion`,()=>{const h=harness(resourceId,selector);assert.equal(h.reports.length,0,"opening must not complete");h.activate(Object.values(approved).find(value=>value!==selector));assert.equal(h.reports.length,0,"another selector must not collide");h.activate();assert.deepEqual(h.reports,[{id:resourceId,language:"en"}]);h.activate();assert.equal(h.reports.length,1,"must not duplicate completion");});
  test(`${resourceId} catches an exact final present before DOMContentLoaded`,()=>{const h=harness(resourceId,selector,{readyState:"loading",active:true});assert.equal(h.reports.length,0);h.fireDomReady();assert.deepEqual(h.reports,[{id:resourceId,language:"en"}]);});
  test(`${resourceId} catches an exact final when bridge loads after DOMContentLoaded`,()=>{const h=harness(resourceId,selector,{readyState:"complete",active:true});assert.deepEqual(h.reports,[{id:resourceId,language:"en"}]);});
}

test("Phytosanitary Defender remains outside every automatic bridge allowlist",()=>{assert.doesNotMatch(bridge,/"phytosanitary-defender"\s*:/);const service=fs.readFileSync(path.resolve(__dirname,"..","progress-service.js"),"utf8");assert.doesNotMatch(service,/AUTOMATIC_INTERNAL_IDS[^\n]*phytosanitary-defender/);});
