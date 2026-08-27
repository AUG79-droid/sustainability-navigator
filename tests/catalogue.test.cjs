const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const catalogue = require("../catalogue-data.js");
const api = require("../catalogue.js");
const root = path.resolve(__dirname, "..");
const legacyIds = ["ethical-armor", "phytosanitary-defender", "reach-compliance-challenge", "year-15-challenge"];

function knowledgeData() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), context);
  return context.window.SN_DATA;
}

test("registers 23 logical resources in the version 2 catalogue", () => {
  assert.equal(catalogue.version, 2);
  assert.equal(catalogue.resources.length, 23);
  assert.equal(new Set(catalogue.resources.map(resource => resource.id)).size, 23);
  assert.deepEqual(api.validateCatalogue(catalogue), []);
  assert.deepEqual(catalogue.resources.filter(resource => resource.legacyInternal).map(resource => resource.id).sort(), legacyIds);
});

test("uses supported resource kinds and verified nullable metadata", () => {
  const pillarIds = new Set(knowledgeData().pillars.map(pillar => pillar.id));
  catalogue.resources.forEach(resource => {
    api.REQUIRED_FIELDS.forEach(field => assert.notEqual(resource[field], undefined, `${resource.id}.${field}`));
    ["title", "description", "learningTopic"].forEach(field => {
      assert.ok(resource[field].es.length, `${resource.id}.${field}.es`);
      assert.ok(resource[field].en.length, `${resource.id}.${field}.en`);
    });
    assert.ok(api.KINDS.includes(resource.kind), resource.id);
    assert.ok(resource.pillarIds.every(id => pillarIds.has(id)), `${resource.id} has an unknown pillar`);
    assert.ok(resource.duration === null || resource.duration.unit === "minutes", `${resource.id} duration`);
    assert.ok(resource.difficulty === null || api.DIFFICULTIES.includes(resource.difficulty), `${resource.id} difficulty`);
  });
});

test("groups confirmed Spanish and English counterparts into one card", () => {
  const bilingual = catalogue.resources.filter(resource => resource.launches.es && resource.launches.en);
  assert.equal(bilingual.length, 11);
  const essentials = catalogue.resources.find(resource => resource.id === "sustainable-aviation-essentials");
  assert.equal(essentials.title.es, "Fundamentos de Aviación Sostenible");
  assert.equal(essentials.title.en, "Sustainable Aviation Essentials");
  assert.match(essentials.launches.es, /curso-biodiversidad-airbus\/$/);
  assert.match(essentials.launches.en, /curso-biodiversidad-airbus-en\/$/);
  const library = catalogue.resources.find(resource => resource.id === "sustainable-aviation-learning-library");
  assert.equal(library.provenance.length, 1, "one bilingual repository remains one logical resource");
});

test("keeps the master course separate and omits excluded or held repositories", () => {
  const master = catalogue.resources.find(resource => resource.id === "sustainable-aviation-foundations-master");
  assert.equal(master.title.en, "Sustainable Aviation Foundations — Master Course");
  assert.deepEqual(Object.keys(master.launches), ["en"]);
  const repositories = catalogue.resources.flatMap(resource => resource.provenance.map(item => item.repositoryName));
  assert.ok(!repositories.includes("advanced-sustainability-air-power-services"));
  assert.ok(!repositories.includes("aero-skills-launchpad"));
});

test("catalogue filters compose without inventing unknown values", () => {
  assert.equal(api.filterResources(catalogue.resources, { kind: "course" }).length, 6);
  assert.ok(api.filterResources(catalogue.resources, { language: "es" }).every(resource => resource.launches.es));
  assert.ok(api.filterResources(catalogue.resources, { difficulty: "unknown" }).every(resource => resource.difficulty === null));
  assert.ok(api.filterResources(catalogue.resources, { duration: "unknown" }).every(resource => resource.duration === null));
  assert.deepEqual(api.filterResources(catalogue.resources, { query: "aviación", kind: "course", language: "es" }).map(resource => resource.id).sort(), [
    "introduction-sustainability-aviation", "sustainable-aviation-essentials"
  ]);
  assert.equal(api.durationBucket({ min: 45, max: 60, unit: "minutes" }), "medium");
  assert.equal(api.durationBucket(null), "unknown");
});

test("derives the four learner intentions from the single catalogue", () => {
  assert.deepEqual(api.intentionCounts(catalogue.resources), {
    learn: 6,
    practice: 14,
    assess: 2,
    explore: 1
  });
  const groupedIds = api.LEARNING_INTENTIONS.flatMap(intention =>
    api.resourcesForIntention(catalogue.resources, intention.id).map(resource => resource.id)
  );
  assert.equal(groupedIds.length, catalogue.resources.length);
  assert.equal(new Set(groupedIds).size, catalogue.resources.length, "a resource must belong to exactly one intention");
  assert.deepEqual(
    api.filterResources(catalogue.resources, { intention: "practice", kind: "simulator" }).map(resource => resource.kind),
    Array(5).fill("simulator")
  );
});

test("homepage provides data-driven learner navigation without duplicate cards", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
  assert.match(html, /id="learning-intentions"/);
  assert.match(html, /data-catalogue-intention="learn"/);
  assert.match(html, /id="knowledge-section-title"/);
  assert.doesNotMatch(html, /class="learning-intention-card/);
  assert.match(app, /SNCatalogue\.renderIntentions/);
  assert.match(app, /initialIntention: state\.catalogueIntent/);
  assert.match(html, /<a href="#learning-paths" data-i18n="navPaths">/);
});

test("external launches stay external and internal launches preserve Hub language", () => {
  catalogue.resources.forEach(resource => {
    Object.values(resource.launches).forEach(url => {
      if (resource.legacyInternal || resource.internalCourse) assert.ok(!/^https?:\/\//.test(url), `${resource.id} should stay internal`);
      else assert.match(url, /^https:\/\/aug79-droid\.github\.io\//, `${resource.id} should launch its public site`);
    });
  });
  assert.equal(api.launchHref("ethical-armor/", "es"), "ethical-armor/?hubLang=es");
  assert.equal(api.launchHref("responsible-supply-chain-compliance-foundations/", "en"), "responsible-supply-chain-compliance-foundations/?hubLang=en");
  assert.equal(api.launchHref("https://example.test/resource/", "en"), "https://example.test/resource/");
});

test("the homepage loads the data-driven catalogue before the Hub controller", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /id="applications-grid"/);
  assert.ok(html.indexOf("catalogue-data.js") < html.indexOf("catalogue.js"));
  assert.ok(html.indexOf("catalogue.js") < html.indexOf("app.js"));
  catalogue.resources.forEach(resource => assert.doesNotMatch(html, new RegExp(`data-resource-id=["']${resource.id}`)));
});

test("every legacy application loader retains an accessible return to the Hub", () => {
  legacyIds.forEach(id => {
    const resource = catalogue.resources.find(item => item.id === id);
    const url = resource.launches.en;
    const target = path.resolve(root, url, "index.html");
    assert.equal(fs.existsSync(target), true, `${id} launch target is missing`);
    assert.equal(target.startsWith(root), true, `${id} launch target escapes the Hub`);
    const html = fs.readFileSync(target, "utf8");
    assert.match(html, /withHubReturn/);
    assert.match(html, /#applications/);
    assert.match(html, /aria-label/);
    const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
    assert.ok(scripts.length, `${id} loader has no inline script`);
    scripts.forEach(script => assert.doesNotThrow(() => new vm.Script(script), `${id} loader script must parse`));
  });
});
