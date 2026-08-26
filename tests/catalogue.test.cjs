const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const catalogue = require("../catalogue-data.js");
const catalogueApi = require("../catalogue.js");
const root = path.resolve(__dirname, "..");

function knowledgeData() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), context);
  return context.window.SN_DATA;
}

test("registers the four current applications with unique stable ids", () => {
  assert.equal(catalogue.version, 1);
  assert.deepEqual(
    catalogue.resources.map(resource => resource.id).sort(),
    ["ethical-armor", "phytosanitary-defender", "reach-compliance-challenge", "year-15-challenge"]
  );
  assert.ok(catalogue.resources.every(resource => resource.kind === "application"));
  assert.deepEqual(catalogueApi.validateCatalogue(catalogue), []);
});

test("each application has complete bilingual metadata and valid sustainability pillars", () => {
  const pillarIds = new Set(knowledgeData().pillars.map(pillar => pillar.id));
  catalogue.resources.forEach(resource => {
    catalogueApi.REQUIRED_FIELDS.forEach(field => assert.notEqual(resource[field], undefined, `${resource.id}.${field}`));
    ["title", "description", "learningTopic", "targetAudience"].forEach(field => {
      assert.ok(resource[field].es.length, `${resource.id}.${field}.es`);
      assert.ok(resource[field].en.length, `${resource.id}.${field}.en`);
    });
    assert.ok(resource.pillarIds.every(id => pillarIds.has(id)), `${resource.id} has an unknown pillar`);
  });
});

test("all launch URLs resolve to an application index within the repository", () => {
  catalogue.resources.forEach(resource => {
    assert.ok(!resource.launchUrl.startsWith("/"), `${resource.id} must use a relative URL`);
    const target = path.resolve(root, resource.launchUrl, "index.html");
    assert.equal(fs.existsSync(target), true, `${resource.id} launch target is missing`);
    assert.equal(target.startsWith(root), true, `${resource.id} launch target escapes the Hub`);
  });
});

test("the homepage loads the data-driven catalogue before the Hub controller", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /id="applications-grid"/);
  assert.ok(html.indexOf("catalogue-data.js") < html.indexOf("catalogue.js"));
  assert.ok(html.indexOf("catalogue.js") < html.indexOf("app.js"));
  catalogue.resources.forEach(resource => assert.doesNotMatch(html, new RegExp(`data-resource-id=["']${resource.id}`)));
});

test("every application loader injects an accessible return to the Hub", () => {
  catalogue.resources.forEach(resource => {
    const html = fs.readFileSync(path.resolve(root, resource.launchUrl, "index.html"), "utf8");
    assert.match(html, /withHubReturn/);
    assert.match(html, /#applications/);
    assert.match(html, /aria-label/);
    const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
    assert.ok(scripts.length, `${resource.id} loader has no inline script`);
    scripts.forEach(script => assert.doesNotThrow(() => new vm.Script(script), `${resource.id} loader script must parse`));
  });
});
