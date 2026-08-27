const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const catalogue = require("../catalogue-data.js");
const pathsData = require("../learning-paths-data.js");
const api = require("../learning-paths.js");
const root = path.resolve(__dirname, "..");

const expectedIds = [
  "sustainable-aviation-foundations",
  "eco-design-circularity-materials",
  "responsible-supply-chain-compliance",
  "sustainable-in-service-operations",
  "nature-habitat-operational-risk",
  "evidence-systems-decision-making"
];

test("defines six unique and valid Learning Paths", () => {
  assert.equal(pathsData.version, 1);
  assert.equal(pathsData.paths.length, 6);
  assert.deepEqual(pathsData.paths.map(item => item.id), expectedIds);
  assert.equal(new Set(pathsData.paths.map(item => item.id)).size, 6);
  assert.deepEqual(api.validateLearningPaths(pathsData, catalogue), []);
  pathsData.paths.forEach(pathItem => {
    assert.equal(pathItem.outcomeIds.length, pathItem.outcomes.es.length);
    assert.equal(pathItem.outcomeIds.length, pathItem.outcomes.en.length);
    assert.equal(new Set(pathItem.outcomeIds).size, pathItem.outcomeIds.length);
  });
});

test("references existing catalogue resources without duplicating their metadata", () => {
  const catalogueIds = new Set(catalogue.resources.map(resource => resource.id));
  pathsData.paths.forEach(pathItem => pathItem.steps.forEach(step => {
    api.resourceIdsForStep(step).forEach(resourceId => assert.ok(catalogueIds.has(resourceId), `${pathItem.id}: ${resourceId}`));
    api.RESOURCE_METADATA_FIELDS.forEach(field => assert.equal(Object.hasOwn(step, field), false, `${pathItem.id}.${step.id} duplicates ${field}`));
  }));
});

test("supports required, optional and non-blocking recommended exploration", () => {
  const requirements = new Set(pathsData.paths.flatMap(pathItem => pathItem.steps.map(step => step.requirement)));
  assert.deepEqual([...requirements].sort(), ["optional", "recommended-explore", "required"]);
  pathsData.paths.forEach(pathItem => {
    const knowledgeSteps = pathItem.steps.filter(step => step.kind === "knowledge-explore");
    if (knowledgeSteps.length) assert.ok(knowledgeSteps.every(step => step.requirement === "recommended-explore"));
    assert.ok(api.requiredResourceSteps(pathItem).every(step => step.kind !== "knowledge-explore"));
  });
});

test("models the foundation course as one required alternative-choice group", () => {
  const foundation = pathsData.paths.find(item => item.id === "sustainable-aviation-foundations");
  const choice = foundation.steps.find(step => step.kind === "resource-choice");
  assert.ok(choice);
  assert.equal(choice.requirement, "required");
  assert.equal(choice.choiceGroupId, "foundations-course");
  assert.deepEqual(choice.resourceIds, ["introduction-sustainability-aviation", "sustainable-aviation-essentials"]);
  assert.equal(api.requiredResourceSteps(foundation).length, 3, "the two alternatives count as one required step");
});

test("derives ES and EN completeness only from required catalogue launches", () => {
  const expected = {
    "sustainable-aviation-foundations": ["complete", "complete"],
    "eco-design-circularity-materials": ["partial", "complete"],
    "responsible-supply-chain-compliance": ["partial", "complete"],
    "sustainable-in-service-operations": ["partial", "complete"],
    "nature-habitat-operational-risk": ["partial", "complete"],
    "evidence-systems-decision-making": ["partial", "complete"]
  };
  pathsData.paths.forEach(pathItem => {
    const availability = api.languageAvailabilityForPath(pathItem, catalogue);
    assert.deepEqual([availability.es.status, availability.en.status], expected[pathItem.id], pathItem.id);
  });
});

test("reports documented subtotals without estimating unknown required durations", () => {
  const expected = {
    "sustainable-aviation-foundations": [225, 360, 1],
    "eco-design-circularity-materials": [345, 345, 3],
    "responsible-supply-chain-compliance": [305, 305, 0],
    "sustainable-in-service-operations": [0, 0, 5],
    "nature-habitat-operational-risk": [0, 0, 4],
    "evidence-systems-decision-making": [465, 600, 4]
  };
  pathsData.paths.forEach(pathItem => {
    const summary = api.durationSummary(pathItem, catalogue);
    assert.equal(summary.complete, pathItem.id === "responsible-supply-chain-compliance");
    assert.deepEqual([summary.min, summary.max, summary.unknownRequired], expected[pathItem.id], pathItem.id);
  });
});

test("flags archived required resources for path maintenance without substituting them", () => {
  const archived = JSON.parse(JSON.stringify(catalogue));
  archived.resources.find(item => item.id === "sustainability-systems-escape-room").status = "archived";
  const result = api.pathMaintenance(pathsData.paths[0], archived);
  assert.equal(result.required, true);
  assert.deepEqual(result.unavailableResourceIds, ["sustainability-systems-escape-room"]);
});

test("activates Learning Paths navigation and data-driven rendering", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
  assert.match(html, /<a href="#learning-paths" data-i18n="navPaths">/);
  assert.match(html, /id="learning-paths-grid"/);
  assert.match(html, /id="learning-path-detail"/);
  assert.ok(html.indexOf("catalogue.js") < html.indexOf("learning-paths-data.js"));
  assert.ok(html.indexOf("learning-paths-data.js") < html.indexOf("learning-paths.js"));
  assert.ok(html.indexOf("learning-paths.js") < html.indexOf("app.js"));
  assert.doesNotMatch(html, /class="learning-path-card"/);
  assert.match(app, /SNLearningPaths\.render/);
  assert.equal(typeof api.render, "function");
});

test("preserves the catalogue and Knowledge Navigator integration points", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /id="learning-intentions"/);
  assert.match(html, /id="applications-grid"/);
  assert.match(html, /id="knowledge"/);
  assert.match(html, /src="search-engine\.js"/);
  assert.equal(catalogue.resources.length, 26);
});
