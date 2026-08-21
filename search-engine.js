(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNSearch = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const STOPWORDS = new Set([
    "a", "al", "algo", "como", "con", "cual", "cuando", "de", "del", "desde", "donde", "el", "ella", "en", "es", "esta", "este", "esto", "la", "las", "lo", "los", "para", "por", "porque", "que", "se", "sin", "sobre", "su", "sus", "un", "una", "uno", "y",
    "a", "an", "and", "are", "as", "at", "be", "by", "can", "does", "for", "from", "how", "in", "is", "it", "of", "on", "or", "should", "that", "the", "this", "to", "what", "when", "which", "why", "with"
  ]);

  const GROUPS = [
    ["ai", "ia", "inteligencia", "artificial"],
    ["assess", "assessed", "assessment", "evaluate", "evaluation", "evaluar", "evaluacion", "evaluado", "evaluada", "validar", "valida", "validado", "validada", "validacion", "validate", "validated", "validation"],
    ["biodiversity", "biodiversidad"],
    ["circular", "circularidad", "circularity"],
    ["claim", "claims", "afirmacion", "afirmaciones"],
    ["climate", "clima", "climatico", "climatica", "climaticos", "climaticas"],
    ["data", "dato", "datos"],
    ["emission", "emissions", "emision", "emisiones"],
    ["environmental", "environment", "ambiente", "ambiental", "ambientales", "medioambiente", "medioambiental"],
    ["evidence", "evidencia", "evidencias"],
    ["ecosystem", "ecosystems", "ecosistema", "ecosistemas"],
    ["energy", "energia", "energetica", "energetico"],
    ["greenwashing", "ecoblanqueo"],
    ["leadership", "liderazgo"],
    ["learning", "aprendizaje"],
    ["material", "materials", "materiales"],
    ["nature", "naturaleza"],
    ["procurement", "compras", "purchasing"],
    ["repair", "repairs", "repairability", "reparacion", "reparaciones", "reparabilidad"],
    ["reuse", "reutilizacion", "reutilizar", "reutilizado", "reutilizada"],
    ["risk", "risks", "riesgo", "riesgos"],
    ["skill", "skills", "competencia", "competencias", "capacidades"],
    ["species", "especie", "especies"],
    ["supplier", "suppliers", "proveedor", "proveedores", "vendor", "vendors"],
    ["sustainability", "sostenibilidad", "sostenible", "sostenibles", "sustainable"],
    ["traceability", "trazabilidad"],
    ["waste", "residuo", "residuos"],
    ["water", "agua", "hidrica", "hidrico"],
    ["wetland", "wetlands", "humedal", "humedales"],
    ["bat", "bats", "murcielago", "murcielagos"],
    ["keystone", "clave"],
    ["reach"],
    ["ispm15", "ispm", "nimf15", "nimf"],
  ];

  const ALIASES = new Map();
  GROUPS.forEach(group => group.forEach(term => ALIASES.set(term, group[0])));
  const STRICT_TOKENS = new Set(["ai", "reach", "ispm15"]);

  function normalise(value) {
    return (value || "")
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ispm\s*[-–]?\s*15/g, " ispm15 ")
      .replace(/nimf\s*[-–]?\s*15/g, " nimf15 ")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function canonicalToken(token) {
    const value = normalise(token);
    return ALIASES.get(value) || value;
  }

  function tokenise(value, options = {}) {
    const removeStopwords = options.removeStopwords !== false;
    const cleaned = normalise(value)
      .replace(/\bforma parte de\b/g, " ")
      .replace(/\bpart of\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const tokens = cleaned
      .split(" ")
      .map(canonicalToken)
      .filter(token => token && (!removeStopwords || !STOPWORDS.has(token)))
      .filter(token => token.length > 1 || token === "ai");
    return [...new Set(tokens)];
  }

  function entryIndex(entry, context = {}) {
    const pillar = context.pillar || {};
    const audiences = context.audiences || [];
    const fields = {
      title: `${entry.title.es} ${entry.title.en}`,
      body: `${entry.body.es} ${entry.body.en}`,
      keywords: (entry.keywords || []).join(" "),
      pillar: `${pillar.title?.es || ""} ${pillar.title?.en || ""} ${pillar.short?.es || ""} ${pillar.short?.en || ""}`,
      audience: audiences.join(" "),
    };
    const tokens = {};
    Object.entries(fields).forEach(([key, value]) => { tokens[key] = new Set(tokenise(value)); });
    return { fields, tokens, titleSequence: tokenise(fields.title).join(" "), bodySequence: tokenise(fields.body).join(" ") };
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > 1) return 2;
    const row = Array.from({ length: b.length + 1 }, (_, index) => index);
    for (let i = 1; i <= a.length; i += 1) {
      let previous = row[0];
      row[0] = i;
      for (let j = 1; j <= b.length; j += 1) {
        const saved = row[j];
        row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
        previous = saved;
      }
    }
    return row[b.length];
  }

  function matchToken(fieldTokens, queryToken) {
    if (fieldTokens.has(queryToken)) return 1;
    if (STRICT_TOKENS.has(queryToken)) return 0;
    if (queryToken.length >= 4) {
      for (const token of fieldTokens) {
        if ((token.startsWith(queryToken) || queryToken.startsWith(token)) && Math.min(token.length, queryToken.length) >= 4) return 0.72;
      }
    }
    if (queryToken.length >= 5) {
      for (const token of fieldTokens) if (levenshtein(token, queryToken) <= 1) return 0.48;
    }
    return 0;
  }

  function scoreEntry(entry, query, context = {}) {
    const queryTokens = tokenise(query);
    if (!queryTokens.length) return { score: 1, matchedTokens: [], coverage: 1 };
    const index = context.index || entryIndex(entry, context);
    const weights = { title: 20, keywords: 14, body: 8, pillar: 4, audience: 3 };
    const matched = new Set();
    let score = 0;

    queryTokens.forEach(queryToken => {
      let best = 0;
      Object.entries(weights).forEach(([field, weight]) => {
        best = Math.max(best, matchToken(index.tokens[field], queryToken) * weight);
      });
      if (best > 0) {
        matched.add(queryToken);
        score += best;
      }
    });

    const meaningfulPhrase = queryTokens.join(" ");
    if (queryTokens.length > 1 && index.titleSequence.includes(meaningfulPhrase)) score += 45;
    else if (queryTokens.length > 1 && index.bodySequence.includes(meaningfulPhrase)) score += 18;

    const coverage = matched.size / queryTokens.length;
    const requiredMatches = queryTokens.length === 1 ? 1 : Math.ceil(queryTokens.length * 0.6);
    if (matched.size < requiredMatches) return { score: 0, matchedTokens: [...matched], coverage };
    score += coverage * 16;
    if (matched.size === queryTokens.length) score += 10;
    return { score, matchedTokens: [...matched], coverage };
  }

  function rankEntries(entries, query, contextForEntry) {
    if (!normalise(query)) return entries.map(entry => ({ entry, score: 1, matchedTokens: [], coverage: 1 }));
    return entries
      .map(entry => {
        const context = typeof contextForEntry === "function" ? contextForEntry(entry) : (contextForEntry || {});
        return { entry, ...scoreEntry(entry, query, context) };
      })
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score || b.coverage - a.coverage || a.entry.id.localeCompare(b.entry.id));
  }

  function highlightParts(text, query) {
    const queryTokens = new Set(tokenise(query));
    if (!queryTokens.size) return [{ text, match: false }];
    return String(text).split(/(\s+|[.,;:!?¿¡()·/–—-]+)/).filter(Boolean).map(part => {
      const tokens = tokenise(part, { removeStopwords: false });
      return { text: part, match: tokens.some(token => queryTokens.has(token)) };
    });
  }

  function suggestEntries(entries, query, contextForEntry, limit = 4) {
    const queryTokens = tokenise(query);
    if (!queryTokens.length) return [];
    return entries.map(entry => {
      const titleTokens = tokenise(`${entry.title.es} ${entry.title.en}`);
      let closeness = 0;
      queryTokens.forEach(queryToken => {
        titleTokens.forEach(titleToken => {
          if (titleToken.startsWith(queryToken) || queryToken.startsWith(titleToken)) closeness = Math.max(closeness, 3);
          else if (queryToken.length >= 4 && levenshtein(queryToken, titleToken) <= 2) closeness = Math.max(closeness, 2);
        });
      });
      const context = typeof contextForEntry === "function" ? contextForEntry(entry) : (contextForEntry || {});
      const broad = scoreEntry(entry, queryTokens[0], context).score;
      return { entry, score: closeness * 20 + broad };
    }).filter(item => item.score > 0).sort((a, b) => b.score - a.score).slice(0, limit).map(item => item.entry);
  }

  return { normalise, tokenise, entryIndex, scoreEntry, rankEntries, highlightParts, suggestEntries };
});
