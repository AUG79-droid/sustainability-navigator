const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const search = require("../search-engine.js");

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(new URL("../data.js", `file://${__filename}`), "utf8"), context);
const data = context.window.SN_DATA;

const entryContext = entry => ({
  pillar: data.pillars.find(pillar => pillar.id === entry.pillar),
  sources: entry.sourceIds.map(id => data.sources[id]).filter(Boolean),
  audiences: entry.audiences,
});

const results = query => search.rankEntries(data.entries, query, entryContext);

test("ignores question stopwords and ranks the exact circular-economy concept first", () => {
  const ranked = results("¿Qué es la economía circular?");
  assert.equal(ranked[0].entry.id, "G011");
  assert.ok(ranked.length < 10);
});

test("ranks evidence and claim validation ahead of broad environmental content", () => {
  const ranked = results("¿Cómo evaluar una afirmación ambiental?");
  assert.equal(ranked[0].entry.id, "F075");
  assert.ok(ranked.length <= 6);
});

test("keeps the suggested biodiversity question focused on the nature pillar", () => {
  const ranked = results("¿Por qué la biodiversidad forma parte de la sostenibilidad?");
  assert.equal(ranked[0].entry.id, "F086");
  assert.ok(ranked.length <= 15);
  assert.ok(ranked.every(result => result.entry.pillar === "P6"));
});

test("recognises plurals and bilingual supplier terminology", () => {
  assert.equal(results("proveedores")[0].entry.id, "F083");
  assert.equal(results("suppliers")[0].entry.id, "F083");
});

test("recognises specialist aliases without fuzzy false positives", () => {
  const reachIds = Array.from(results("REACH"), result => result.entry.id).sort();
  assert.equal(reachIds.join(","), ["F068", "F083", "G018", "G047"].sort().join(","));
  assert.ok(results("murciélago").some(result => result.entry.id === "G053"));
  assert.ok(results("wetland").some(result => result.entry.id === "G055"));
});

test("all entries contain the expanded bilingual learning structure", () => {
  assert.equal(data.entries.length, 90);
  data.entries.forEach(entry => {
    assert.deepEqual(Object.keys(entry.learning), ["why", "application", "method", "example", "checks", "limits"]);
    assert.ok(entry.learning.why.es.length > 120);
    assert.ok(entry.learning.why.en.length > 120);
    assert.equal(entry.learning.checks.es.length, 3);
    assert.equal(entry.learning.checks.en.length, 3);
  });
});
