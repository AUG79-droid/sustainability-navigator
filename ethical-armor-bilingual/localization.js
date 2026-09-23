(function(){
  "use strict";
  const params=new URLSearchParams(location.search);
  const requested=params.get("hubLang")||params.get("lang");
  const lang=requested==="en"?"en":"es";
  document.documentElement.lang=lang;
  const pairs=window.ETHICAL_ARMOR_ES||[];
  const exact=new Map(pairs);
  const partial=[
    ["Back to Sustainability Hub","Volver al Sustainability Hub"],["5 tiers","5 niveles"],
    ["Continue to Milestone","Continuar al Hito"],
    ["Milestone ","Hito "],
    ["Theory after","Teoría después de"],
    ["Theory","Teoría"],
    ["Knowledge check","Comprobación de conocimientos"],
    ["Evidence","Evidencia"],
    ["Supplier","Proveedor"],
    ["Route ","Ruta "],
    ["Lead time","Plazo"],
    ["Score","Puntuación"],
    ["Retry","Reintentar"],
    ["Continue","Continuar"],
    ["Back","Volver"]
  ];
  function tr(v){
    if(lang!=="es"||!v)return v;
    const t=v.trim();
    if(exact.has(t))return v.replace(t,exact.get(t));
    let out=v;
    for(const [a,b] of partial)out=out.split(a).join(b);
    return out;
  }
  function walk(root){
    if(lang!=="es"||!root)return;
    if(root.nodeType===3){
      const x=tr(root.nodeValue); if(x!==root.nodeValue)root.nodeValue=x; return;
    }
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(w.nextNode())nodes.push(w.currentNode);
    for(const n of nodes){
      if(!n.parentElement||/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(n.parentElement.tagName))continue;
      const x=tr(n.nodeValue); if(x!==n.nodeValue)n.nodeValue=x;
    }
    root.querySelectorAll?.("[title],[aria-label],[alt],[placeholder],[data-guide]").forEach(el=>{
      for(const a of ["title","aria-label","alt","placeholder","data-guide"]){
        if(el.hasAttribute(a))el.setAttribute(a,tr(el.getAttribute(a)));
      }
    });
  }
  function control(){
    if(document.getElementById("sn-language-control"))return;
    const box=document.createElement("div");
    box.id="sn-language-control";
    box.setAttribute("role","group");
    box.setAttribute("aria-label",lang==="es"?"Idioma":"Language");
    box.innerHTML='<button type="button" data-l="es">ES</button><span>|</span><button type="button" data-l="en">EN</button>';
    box.style.cssText="position:fixed;z-index:2147483647;top:12px;right:12px;display:flex;align-items:center;gap:7px;padding:8px 11px;border-radius:999px;background:#071b33;color:#fff;border:2px solid rgba(255,255,255,.75);font:800 12px/1 system-ui,sans-serif;box-shadow:0 5px 18px rgba(0,0,0,.3)";
    box.querySelectorAll("button").forEach(b=>{
      b.style.cssText="border:0;background:transparent;color:#fff;font:inherit;cursor:pointer;padding:2px 4px";
      b.setAttribute("aria-pressed",b.dataset.l===lang?"true":"false");
      if(b.dataset.l===lang)b.style.textDecoration="underline";
      b.onclick=()=>{const u=new URL(location.href);u.searchParams.set("hubLang",b.dataset.l);location.href=u.toString();};
    });
    document.body.appendChild(box);
  }
  function init(){
    if(lang==="es"){document.title=tr(document.title);walk(document.body);}
    control();
    if(lang==="es"){
      const target=document.querySelector(".app")||document.body;
      let queued=false; const pending=new Set();
      const flush=()=>{queued=false;const nodes=[...pending];pending.clear();nodes.forEach(walk);};
      const obs=new MutationObserver(ms=>{
        for(const m of ms){
          if(m.type==="characterData"&&m.target)pending.add(m.target);
          for(const n of m.addedNodes)pending.add(n);
        }
        if(!queued){queued=true;queueMicrotask(flush);}
      });
      obs.observe(target,{subtree:true,childList:true,characterData:true});
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();