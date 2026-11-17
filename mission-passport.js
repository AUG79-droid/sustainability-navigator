(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNMissionPassport = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  // XP in v1 describes self-managed participation. It is NOT assessment verification.
  const XP_BY_KIND = Object.freeze({ course: 25, quiz: 40, game: 40, simulator: 55, application: 50, "knowledge-resource": 20 });
  const PATH_XP = 100;
  const LEVELS = [
    { min: 0, es: "Explorer", en: "Explorer" },
    { min: 150, es: "Investigator", en: "Investigator" },
    { min: 350, es: "Practitioner", en: "Practitioner" },
    { min: 650, es: "Systems Thinker", en: "Systems Thinker" },
    { min: 1000, es: "Resilience Strategist", en: "Resilience Strategist" },
    { min: 1500, es: "Mission Integrator", en: "Mission Integrator" }
  ];
  const BADGES = [
    { id: "energy", color: "#00bfff", es: "Resiliencia Energética", en: "Energy Resilience", esHelp: "Completa Mission Energy.", enHelp: "Complete Mission Energy.", any: ["mission-energy"] },
    { id: "fuel", color: "#e5a04b", es: "Soberanía del Combustible", en: "Fuel Sovereignty", esHelp: "Completa Fuel Sovereignty.", enHelp: "Complete Fuel Sovereignty.", any: ["fuel-sovereignty"] },
    { id: "materials", color: "#71d8ee", es: "Soberanía de Materiales", en: "Material Sovereignty", esHelp: "Completa Material Sovereignty.", enHelp: "Complete Material Sovereignty.", any: ["material-sovereignty"] },
    { id: "eco", color: "#f1bf60", es: "Ecodiseño Circular", en: "Circular Eco-design", esHelp: "Completa una actividad de ecodiseño.", enHelp: "Complete an eco-design activity.", any: ["eco-design-circularity-aerospace-materials", "eco-retrofit-mineral-footprint", "the-modularity-matrix"] },
    { id: "nature", color: "#96d6be", es: "Naturaleza y Hábitat", en: "Nature & Habitat", esHelp: "Completa una actividad sobre naturaleza u operaciones.", enHelp: "Complete a nature or operations activity.", any: ["noise-habitat-missions", "bio-radar-runway-prevention", "biodiversity-panic-mode-airbus"] },
    { id: "systems", color: "#7ea7ff", es: "Pensamiento Sistémico", en: "Systems Thinking", esHelp: "Completa ASRI o Foundations.", enHelp: "Complete ASRI or Foundations.", any: ["airbus-strategic-resilience-intelligence", "sustainable-aviation-foundations"] },
    { id: "evidence", color: "#f08ebd", es: "Decisión Defendible", en: "Defensible Decision", esHelp: "Completa ASRI y una evaluación del catálogo.", enHelp: "Complete ASRI and one catalogue assessment.", custom: "evidence" },
    { id: "mission", color: "#f1ce7a", es: "Integrador de Misión", en: "Mission Integrator", esHelp: "Consigue tres insignias temáticas y completa una ruta.", enHelp: "Earn three topic badges and complete a path.", custom: "mission" }
  ];
  const COPY = {
    es: {
      eyebrow: "SUSTAINABILITY IN-SERVICE HUB · EXPERIENCIA PERSONAL", title: "Sustainability Mission Passport",
      lead: "Tu recorrido de aprendizaje, tus misiones y los logros que vas explorando.",
      xpMeaning: "XP significa Experience Points (puntos de experiencia).",
      level: "Nivel", totalXP: "XP acumulados", weekly: "Esta semana", previous: "Semana anterior",
      badges: "Insignias de misión", earned: "Conseguida", locked: "Por descubrir",
      all: "Ver rutas de aprendizaje", next: "Tu próxima misión", nextDefault: "Explora una ruta del Hub",
      nextDone: "Has explorado los pasos obligatorios de las rutas disponibles.",
      week: "Tu evolución semanal", weeklyNote: "Compara tus puntos de esta semana con los de la anterior.",
      more: "Cómo funcionan los XP, las insignias y el ranking", howXp: "XP por actividad completada",
      howPaths: "XP por ruta completada", rulesTitle: "Reglas del pasaporte",
      rules: [
        "Los XP se calculan a partir de recursos registrados como completados; cada recurso cuenta una sola vez, aunque lo repitas.",
        "Los XP por tipo de actividad son: curso 25; cuestionario 40; juego 40; simulador 55; aplicación 50; recurso de conocimiento 20. Una ruta completada aporta 100 XP adicionales.",
        "Las insignias temáticas se desbloquean cuando registras las actividades indicadas. Se conservan al cambiar de semana.",
        "El progreso semanal cuenta los XP asociados a actividades fechadas dentro de la semana actual. El lunes empieza una semana nueva, pero los XP acumulados y las insignias se mantienen.",
        "El progreso se guarda en este navegador y puede exportarse desde Mi progreso."
      ],
      note: "Reconocimiento didáctico local: no es una certificación Airbus ni una evaluación verificada.",
      none: "Aún no hay actividades completadas. Empieza una ruta para conseguir tu primera insignia.",
      advance: "para el siguiente nivel", max: "Nivel máximo alcanzado", count: "insignias",
      breakdown: "Puntos orientativos; los resultados no están autenticados ni compartidos."
    },
    en: {
      eyebrow: "SUSTAINABILITY IN-SERVICE HUB · PERSONAL EXPERIENCE", title: "Sustainability Mission Passport",
      lead: "Your learning journey, missions and the achievements you are exploring.",
      xpMeaning: "XP stands for Experience Points.",
      level: "Level", totalXP: "Total XP", weekly: "This week", previous: "Previous week",
      badges: "Mission badges", earned: "Earned", locked: "To discover",
      all: "Explore Learning Paths", next: "Your next mission", nextDefault: "Explore a Hub learning path",
      nextDone: "You have explored the required steps in the available paths.",
      week: "Your weekly progress", weeklyNote: "Compare points earned this week with last week.",
      more: "How XP, badges and rankings work", howXp: "XP per completed activity",
      howPaths: "XP per completed Learning Path", rulesTitle: "Passport rules",
      rules: [
        "XP is calculated from resources recorded as completed; each resource only counts once even if you repeat it.",
        "XP by activity type: course 25; quiz 40; game 40; simulator 55; application 50; knowledge resource 20. Completing a Learning Path adds 100 XP.",
        "Topic badges unlock when you record the specified activities. Badges remain unlocked between weeks.",
        "Weekly progress counts XP from dated completions within the current week. A new week starts on Monday, but total XP and badges are retained.",
        "Progress is stored in this browser and can be exported from My progress."
      ],
      note: "Local learning recognition: not an Airbus certification or a verified assessment.",
      none: "No completed activities yet. Start a path to unlock your first badge.",
      advance: "to next level", max: "Highest level reached", count: "badges",
      breakdown: "Illustrative points; results are not authenticated or shared."
    }
  };
  function safeDate(s) { const d = typeof s === "string" ? new Date(s) : new Date(NaN); return Number.isFinite(d.getTime()) ? d : null; }
  function monday(date) { const d = new Date(date.getFullYear(), date.getMonth(), date.getDate()); d.setDate(d.getDate() - (d.getDay()+6)%7); return d.getTime(); }
  function levelFor(xp) {
    let level = 0;
    LEVELS.forEach((entry, i) => { if (xp >= entry.min) level = i; });
    const current = LEVELS[level], next = LEVELS[level+1] || null;
    return { index: level+1, current, next, progress: next ? Math.min(100,Math.round(100 * (xp-current.min) / (next.min-current.min))) : 100, remaining: next ? next.min-xp : 0 };
  }
  function completedPathIds(state, pathsData) {
    const result = new Set();
    for (const path of pathsData.paths || []) {
      const record = state.paths && state.paths[path.id];
      if (record && Array.isArray(record.completionHistory) && record.completionHistory.some(item=>item && item.completedAt)) result.add(path.id);
    }
    return result;
  }
  function evaluate(state, catalogue, pathsData, now = new Date()) {
    const resources = new Map((catalogue.resources || []).map(item=>[item.id,item]));
    const done = new Set();
    const datedAwards = [];
    let resourceXP = 0;
    for (const [id, record] of Object.entries(state.resources || {})) {
      if (!record || record.status !== "completed" || !resources.has(id)) continue;
      const value = XP_BY_KIND[resources.get(id).kind] || 20;
      done.add(id);
      resourceXP += value;
      const date = safeDate(record.completedAt);
      if (date) datedAwards.push({ at: date.getTime(), xp: value });
    }
    let pathXP = 0;
    const pathIds = completedPathIds(state,pathsData);
    for (const id of pathIds) {
      pathXP += PATH_XP;
      const record = state.paths[id];
      const dates = record.completionHistory.map(c=>safeDate(c.completedAt)).filter(Boolean);
      if (dates.length) datedAwards.push({ at: Math.min(...dates.map(d=>d.getTime())), xp: PATH_XP });
    }
    const unlocked = [];
    for (const badge of BADGES) {
      let earned = false;
      if (badge.any) earned = badge.any.some(id=>done.has(id));
      else if (badge.custom === "evidence") earned = done.has("airbus-strategic-resilience-intelligence") && [...done].some(id=>resources.get(id)?.kind === "quiz");
      else if (badge.custom === "mission") earned = unlocked.filter(b=>b.earned).length >= 3 && pathIds.size >= 1;
      unlocked.push({ ...badge, earned });
    }
    const total = resourceXP + pathXP;
    const start = monday(now), last = start - 7*86400000;
    const weeklyXP = datedAwards.filter(item=>item.at >= start && item.at < start+7*86400000).reduce((a,b)=>a+b.xp,0);
    const previousXP = datedAwards.filter(item=>item.at >= last && item.at < start).reduce((a,b)=>a+b.xp,0);
    return { xp: total, resourceXP, pathXP, weeklyXP, previousXP, completed:done.size, badges:unlocked, badgeCount:unlocked.filter(b=>b.earned).length, level:levelFor(total), pathCount:pathIds.size };
  }
  function escapeHtml(value) { return String(value).replace(/[&<>"']/g,c=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" })[c]); }
  // Detailed original shield illustration: chrome rim, illuminated enamel, themed relief.
  const ICONS = {
    energy: '<rect x="62" y="67" width="76" height="83" rx="12" fill="#07243f" stroke="#75d5ff" stroke-width="4"/><rect x="86" y="57" width="28" height="11" rx="4" fill="#acdfff"/><path d="M109 78 83 116h19l-10 29 30-44h-21z" fill="#ffdb77" stroke="#fff2b0" stroke-width="2"/><path d="M43 88v55m114-55v55M34 108h26m80 0h26M48 88l-13 26h25zM151 88l-12 26h26z" stroke="#8fb9de" fill="none" stroke-width="2"/>',
    fuel: '<rect x="55" y="95" width="90" height="56" rx="8" fill="#442e20" stroke="#ffce76" stroke-width="4"/><path d="M55 113h90M69 95V82h62v13M64 128h-14v20h-13M137 128h16v-28h15" fill="none" stroke="#ecb45b" stroke-width="6"/><path d="M100 59C91 77 78 89 78 106a22 22 0 0044 0c0-17-13-29-22-47Z" fill="#ffbc43" stroke="#fff0b1" stroke-width="3"/><path d="M94 103c0-8 5-17 9-23" fill="none" stroke="#fff5cc" stroke-width="5" stroke-linecap="round"/>',
    materials: '<path d="m62 143 18-38 20 9 19-19 24 48z" fill="#aab8cf" stroke="#e6f1ff" stroke-width="3"/><path d="m76 115 24-55 21 43-20 30z" fill="#66dbea" stroke="#e4faff" stroke-width="3"/><path d="m100 60 3 55-27 0m45-12-20 30" stroke="#c6ffff" stroke-width="2" opacity=".85"/><path d="M59 144h82l12 15H47Z" fill="#bbc7d2" stroke="#fff" stroke-width="3"/><path d="M65 150h68" stroke="#5f7c96" stroke-width="5"/>',
    eco: '<rect x="57" y="74" width="85" height="81" rx="6" fill="#123756" stroke="#8bd3ec" stroke-width="3"/><path d="M71 93h58m-58 13h58m-58 13h45" stroke="#40799c" stroke-width="3"/><circle cx="101" cy="117" r="16" fill="none" stroke="#ffc468" stroke-width="5" stroke-dasharray="8 4"/><path d="M147 94a50 50 0 00-85-9l-11 5 2-21M52 140a50 50 0 0086 2l10-5-2 21" fill="none" stroke="#ffcc79" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>',
    nature: '<path d="M44 130 78 80l19 29 21-43 44 64z" fill="#7bb8bc" stroke="#ddfaff" stroke-width="3"/><path d="m63 112 16-25 11 18m18-17 10-19 14 24" fill="none" stroke="#fff" stroke-width="5"/><path d="M45 143c30-23 52 17 82-3 12-8 21-8 36-1" fill="none" stroke="#64bddd" stroke-width="13"/><path d="M54 140v-24m-9 14 9-25 11 25M148 143v-25m-10 13 10-31 12 31" fill="#0c615d" stroke="#9ed4aa" stroke-width="3"/>',
    systems: '<circle cx="100" cy="118" r="47" fill="#0b3760" stroke="#8ebdff" stroke-width="3"/><path d="M60 118h80m-40-47c-20 17-21 78 0 94m0-94c20 17 21 78 0 94M68 94h64M68 140h64" stroke="#5783b0" fill="none" stroke-width="2"/><path d="M65 85 100 63l35 22M65 85l-4 61m74-61 4 61m-78 0 39 25 39-25" fill="none" stroke="#83d4ff" stroke-width="3"/><g fill="#c4f5ff" stroke="#3789c2" stroke-width="2"><circle cx="65" cy="85" r="8"/><circle cx="100" cy="63" r="8"/><circle cx="135" cy="85" r="8"/><circle cx="61" cy="146" r="8"/><circle cx="139" cy="146" r="8"/><circle cx="100" cy="171" r="8"/></g>',
    evidence: '<rect x="61" y="68" width="80" height="100" rx="8" fill="#37243d" stroke="#f8b1cf" stroke-width="4"/><path d="M81 66h38v11H81Z" fill="#ecd3db"/><path d="m77 103 7 7 12-15m-19 31 7 7 12-15" fill="none" stroke="#74e5b5" stroke-width="6" stroke-linecap="round"/><path d="M106 107h22m-22 23h22" stroke="#d5b2d4" stroke-width="4"/><path d="M145 93v48m-24-34h48m-38 0-10 17h20z m28 0-10 17h20z" fill="none" stroke="#ffd992" stroke-width="3"/>',
    mission: '<circle cx="100" cy="115" r="48" fill="none" stroke="#78cfff" stroke-width="3"/><circle cx="100" cy="115" r="27" fill="#103f65" stroke="#ffd37c" stroke-width="3"/><path d="M100 52v24m0 77v24M37 115h29m68 0h29" stroke="#d0eaff" stroke-width="4"/><circle cx="100" cy="52" r="10" fill="#ffc269"/><circle cx="163" cy="115" r="10" fill="#8cd9ff"/><circle cx="100" cy="177" r="10" fill="#8cf0dc"/><circle cx="37" cy="115" r="10" fill="#e8acd8"/><path d="m100 92 9 17 19 6-19 6-9 17-9-17-19-6 19-6z" fill="#e9effe" stroke="#ffdf8c" stroke-width="2"/>'
  };
  function svgArt(id, accent) {
    return '<svg class="mp-art" viewBox="0 0 200 210" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">'+
      '<defs><linearGradient id="mp-edge-'+id+'" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7f8ff"/><stop offset=".23" stop-color="#5f7a9c"/><stop offset=".51" stop-color="#f6d99b"/><stop offset=".78" stop-color="#526886"/><stop offset="1" stop-color="#f5f3e8"/></linearGradient>'+
      '<radialGradient id="mp-core-'+id+'" cx=".5" cy=".37" r=".7"><stop stop-color="'+accent+'" stop-opacity=".36"/><stop offset=".68" stop-color="#0a2342"/><stop offset="1" stop-color="#030f25"/></radialGradient>'+
      '<filter id="mp-glow-'+id+'" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="'+accent+'" flood-opacity=".34"/></filter></defs>'+
      '<path d="M100 8 172 35v90c-7 39-32 63-72 77-40-14-65-38-72-77V35Z" fill="url(#mp-edge-'+id+')" stroke="#deedff" stroke-width="2"/>'+
      '<path d="M100 18 161 42v81c-8 31-28 52-61 65-33-13-53-34-61-65V42Z" fill="url(#mp-core-'+id+')" stroke="'+accent+'" stroke-width="2"/>'+
      '<path d="M100 28 150 46" stroke="#fff" stroke-opacity=".46" stroke-width="3" fill="none"/>'+
      '<g filter="url(#mp-glow-'+id+')">'+(ICONS[id]||"")+'</g></svg>';
  }
  function recommend(state, catalogue, pathsData, lang) {
    const paths = pathsData.paths || [];
    let path = paths.find(item=>item.id === state.preferences?.currentPathId);
    if (!path) path = paths.find(item=>!(state.paths?.[item.id]?.completionHistory||[]).length) || paths[0];
    if (!path) return null;
    return { title: path.title?.[lang] || path.id, id: path.id };
  }
  function render(options) {
    const container = options && options.container;
    if (!container) return;
    const lang = options.lang === "en" ? "en" : "es", c = COPY[lang];
    const model = evaluate(options.state || {}, options.catalogue || {resources:[]}, options.pathsData || {paths:[]});
    const level = model.level;
    const next = recommend(options.state||{}, options.catalogue||{}, options.pathsData||{},lang);
    const old = container.querySelector(".mission-passport");
    if (old) old.remove();
    const box = document.createElement("section");
    box.className = "mission-passport";
    box.setAttribute("aria-labelledby","mission-passport-title");
    const badgeMarkup = model.badges.map(b=>'<li class="mp-badge'+(b.earned?' is-earned':' is-locked')+'" style="--mp-accent:'+b.color+'">'+
      svgArt(b.id,b.color)+'<span class="mp-badge-name">'+escapeHtml(b[lang])+'</span>'+
      '<span class="mp-badge-state">'+escapeHtml(b.earned?c.earned:c.locked)+'</span>'+
      '<span class="mp-badge-help">'+escapeHtml(b[lang+"Help"])+'</span></li>').join("");
    const rules = c.rules.map(s=>'<li>'+escapeHtml(s)+'</li>').join("");
    box.innerHTML = '<div class="mp-head"><div class="mp-passport-mark" aria-hidden="true"><span class="mp-mark-lines">✦</span><span>MISSION<br>PASSPORT</span></div><div class="mp-head-copy">'+
      '<p class="mp-kicker">'+c.eyebrow+'</p><h2 id="mission-passport-title">'+c.title+'</h2><p class="mp-lead">'+c.lead+'</p></div></div>'+
      '<p class="mp-xp-definition">'+c.xpMeaning+'</p><div class="mp-summary"><div class="mp-level"><span class="mp-overline">'+c.level+' '+level.index+'</span><h3>'+escapeHtml(level.current[lang])+'</h3>'+
      '<div class="mp-track" role="progressbar" aria-label="'+escapeHtml(c.level)+'" aria-valuenow="'+level.progress+'" aria-valuemin="0" aria-valuemax="100"><span style="width:'+level.progress+'%"></span></div>'+
      '<small>'+(level.next ? level.remaining+' XP '+c.advance : c.max)+'</small></div>'+
      '<div class="mp-stat"><strong>'+model.xp+'</strong><span>'+c.totalXP+'</span></div>'+
      '<div class="mp-stat"><strong>'+model.badgeCount+' / '+BADGES.length+'</strong><span>'+c.count+'</span></div>'+
      '<div class="mp-stat"><strong>'+model.pathCount+'</strong><span>'+(lang==="es"?"Rutas completadas":"Completed paths")+'</span></div></div>'+
      '<div class="mp-badges-head"><h3>'+c.badges+'</h3><span>'+model.badgeCount+' / '+BADGES.length+'</span></div>'+
      '<ul class="mp-badges">'+badgeMarkup+'</ul>'+
      '<div class="mp-lower"><div class="mp-next"><span class="mp-overline">'+c.next+'</span><h3>'+escapeHtml(next?.title||c.nextDone)+'</h3>'+
      '<a href="#learning-paths" class="mp-primary-link">'+c.all+'</a></div>'+
      '<div class="mp-week"><h3>'+c.week+'</h3><div class="mp-week-grid"><div><strong>'+model.weeklyXP+' XP</strong><span>'+c.weekly+'</span></div><div><strong>'+model.previousXP+' XP</strong><span>'+c.previous+'</span></div></div><p>'+c.weeklyNote+'</p></div></div>'+
      '<details class="mp-rules"><summary>'+c.more+'</summary><div class="mp-rules-body"><p><strong>'+c.rulesTitle+'</strong></p><ol>'+rules+'</ol><p>'+c.breakdown+'</p></div></details>'+
      '<p class="mp-disclaimer">'+c.note+'</p>';
    container.prepend(box);
  }
  return { XP_BY_KIND, PATH_XP, LEVELS, BADGES, evaluate, levelFor, render };
});
