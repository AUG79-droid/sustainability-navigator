"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const catalogue = require("../catalogue-data.js");
const paths = require("../learning-paths-data.js");
const pathApi = require("../learning-paths.js");
const serviceSource = fs.readFileSync(require.resolve("../progress-service.js"), "utf8");
const bridgeSource = fs.readFileSync(require.resolve("../progress-bridge.js"), "utf8");
const inventory = require("../governance/inventory-data.cjs");

const id = "noise-habitat-missions";
const resource = catalogue.resources.find(item => item.id === id);

test("keeps one bilingual Noise & Habitat identity in catalogue 27", () => {
  assert.equal(catalogue.resources.length, 27);
  assert.equal(catalogue.resources.filter(item => item.id === id).length, 1);
  assert.deepEqual(resource.languages, ["es", "en"]);
  assert.deepEqual(resource.launches, {
    es: "https://aug79-droid.github.io/noise-habitat-operations-under-pressure/?hubLang=es",
    en: "https://aug79-droid.github.io/noise-habitat-operations-under-pressure/?hubLang=en"
  });
  assert.deepEqual(resource.provenance[0].languages, ["es", "en"]);
  assert.equal(catalogue.resources.filter(item => item.languages.includes("es") && item.languages.includes("en")).length, 16);
  const reach = catalogue.resources.find(item => item.id === "reach-compliance-challenge");
  assert.deepEqual(reach.languages, ["es", "en"]);
  assert.ok(reach.launches.es && reach.launches.en);
});

test("recalculates only the real Spanish path coverage and preserves revisions", () => {
  assert.equal(paths.paths.length, 6);
  assert.deepEqual(Object.fromEntries(paths.paths.map(item => [item.id, item.revision])), {
    "sustainable-aviation-foundations": 1,
    "eco-design-circularity-materials": 3,
    "responsible-supply-chain-compliance": 3,
    "sustainable-in-service-operations": 1,
    "nature-habitat-operational-risk": 1,
    "evidence-systems-decision-making": 1
  });
  const inService = paths.paths.find(item => item.id === "sustainable-in-service-operations");
  const nature = paths.paths.find(item => item.id === "nature-habitat-operational-risk");
  assert.deepEqual(pathApi.languageAvailability(inService, catalogue, "es"), { language: "es", status: "partial", availableRequired: 2, totalRequired: 5 });
  assert.deepEqual(pathApi.languageAvailability(nature, catalogue, "es"), { language: "es", status: "partial", availableRequired: 2, totalRequired: 4 });
});

test("keeps Noise manual and preserves completion bridge boundaries", () => {
  assert.doesNotMatch(serviceSource, /AUTOMATIC_INTERNAL_IDS[^\n]*noise-habitat-missions/);
  assert.doesNotMatch(bridgeSource, /noise-habitat-missions/);
  assert.match(serviceSource, /AUTOMATIC_INTERNAL_IDS/);
  assert.doesNotMatch(serviceSource, /AUTOMATIC_INTERNAL_IDS[^\n]*phytosanitary-defender/);
  const holdRepositories = inventory.records.filter(item => item.disposition === "hold").map(item => item.repositoryName);
  assert.equal(catalogue.resources.filter(item => item.provenance.some(source => holdRepositories.includes(source.repositoryName))).length, 0);
});
