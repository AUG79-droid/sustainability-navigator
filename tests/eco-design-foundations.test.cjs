"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const catalogue = require("../catalogue-data.js");
const pathsData = require("../learning-paths-data.js");
const progressStore = require("../progress-store.js");
const progressService = require("../progress-service.js");
const progressSelectors = require("../progress-selectors.js");
const courseRoot = path.join(root, "eco-design-circularity-aerospace-materials");

test("registers one bilingual internal Eco-Design foundation course", () => {
  const resource = catalogue.resources.find(item => item.id === "eco-design-circularity-aerospace-materials");
  assert.ok(resource);
  assert.equal(resource.kind, "course");
  assert.equal(resource.subtype, "foundation-course");
  assert.deepEqual(resource.languages, ["es", "en"]);
  assert.deepEqual(resource.intendedLanguages, ["es", "en"]);
  assert.deepEqual(resource.launches, { es: "eco-design-circularity-aerospace-materials/", en: "eco-design-circularity-aerospace-materials/" });
  assert.deepEqual(resource.duration, { min: 190, max: 190, unit: "minutes" });
  assert.equal(resource.difficulty, "foundation");
  assert.equal(resource.internalCourse, true);
  assert.equal(resource.provenance[0].repositoryName, "sustainability-navigator");
});

test("makes the new course the first required Learn step and increments only approved revisions", () => {
  const eco = pathsData.paths.find(item => item.id === "eco-design-circularity-materials");
  const required = eco.steps.filter(step => step.requirement === "required");
  assert.equal(eco.steps[0].requirement, "recommended-explore");
  assert.equal(required[0].id, "eco-design-foundations");
  assert.equal(required[0].resourceId, "eco-design-circularity-aerospace-materials");
  assert.equal(required[0].intention, "learn");
  assert.equal(eco.revision, 2);
  assert.equal(pathsData.paths.find(item => item.id === "responsible-supply-chain-compliance").revision, 3);
  assert.ok(pathsData.paths.filter(item => ![eco.id, "responsible-supply-chain-compliance"].includes(item.id)).every(item => item.revision === 1));
  for (const id of ["bio-inspired-innovation-lab", "eco-retrofit-mineral-footprint", "reach-compliance-challenge", "tassg-composite-guardian", "year-15-challenge"]) {
    assert.ok(eco.steps.some(step => step.resourceId === id), `${id} remains in the path`);
  }
});

test("course contains six substantive modules, bilingual checks and explicit final completion", () => {
  const html = fs.readFileSync(path.join(courseRoot, "index.html"), "utf8");
  const script = fs.readFileSync(path.join(courseRoot, "course.js"), "utf8");
  const styles = fs.readFileSync(path.join(courseRoot, "styles.css"), "utf8");
  assert.doesNotThrow(() => new vm.Script(script));
  for (const id of ["life-cycle", "circularity", "requirements", "materials", "service-design", "evidence"]) assert.match(script, new RegExp(`id:\\"${id}\\"`));
  assert.ok((script.match(/questions:\[/g) || []).length >= 6);
  assert.ok((script.match(/caseTitle:/g) || []).length >= 6);
  assert.match(script, /finalExercise/);
  assert.match(script, /firstIncomplete/);
  assert.match(script, /state\.finalReviewed=true/);
  assert.match(script, /#course-complete/);
  assert.match(html, /data-resource-id="eco-design-circularity-aerospace-materials"/);
  assert.match(html, /data-completion-selector="#course-complete\.active"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(styles, /@media\(max-width:520px\)/);
  assert.match(styles, /focus-visible/);
  assert.match(styles, /prefers-reduced-motion/);
});

test("course teaches the approved ES and EN curriculum without absolute green claims", () => {
  const script = fs.readFileSync(path.join(courseRoot, "course.js"), "utf8");
  ["Life-cycle", "system boundaries", "burden shifting", "Maintain", "remanufacture", "airworthiness", "critical materials", "composites", "coatings", "modularity", "disassembly", "evidence", "review gates"].forEach(term => assert.match(script, new RegExp(term, "i"), term));
  ["ciclo de vida", "límites del sistema", "transferencia de cargas", "reacondicionar", "aeronavegabilidad", "materiales críticos", "trazabilidad", "reparación", "desmontaje", "incertidumbre", "evidencia"].forEach(term => assert.match(script, new RegExp(term, "i"), term));
  assert.match(script, /No material is sustainable in itself/);
  assert.match(script, /Ningún material es sostenible por sí mismo/);
  assert.match(script, /not a grade, certification or accreditation/);
});

test("preserves Eco-Design revision 1 completion and recommends the new foundation step", () => {
  const previousPaths = JSON.parse(JSON.stringify(pathsData));
  const previousEco = previousPaths.paths.find(item => item.id === "eco-design-circularity-materials");
  previousEco.revision = 1;
  previousEco.steps = previousEco.steps.filter(step => step.id !== "eco-design-foundations");
  const storage = progressStore.createMemoryStorage();
  const oldService = progressService.createBrowserService(catalogue, previousPaths, storage, () => "2026-08-27T12:00:00.000Z");
  oldService.startPath(previousEco.id, "en");
  for (const step of previousEco.steps.filter(step => step.requirement === "required")) oldService.completeResource(step.resourceId, { pathId: previousEco.id, stepId: step.id, language: "en", source: "manual" });
  const currentService = progressService.createBrowserService(catalogue, pathsData, storage, () => "2026-08-27T13:00:00.000Z");
  const currentEco = pathsData.paths.find(item => item.id === previousEco.id);
  const state = currentService.getState();
  const summary = progressSelectors.pathSummary(state, currentEco, catalogue);
  const next = progressSelectors.nextActivity(state, currentEco, catalogue);
  assert.equal(summary.status, "update_available");
  assert.equal(next.step.id, "eco-design-foundations");
  assert.equal(next.recommendedResource.id, "eco-design-circularity-aerospace-materials");
  assert.ok(state.paths[previousEco.id].completionHistory.some(record => record.pathRevision === 1));
});

test("strict bridge approves completion only for the explicit final selector", () => {
  const bridge = fs.readFileSync(path.join(root, "progress-bridge.js"), "utf8");
  const service = fs.readFileSync(path.join(root, "progress-service.js"), "utf8");
  assert.match(bridge, /"eco-design-circularity-aerospace-materials": "#course-complete\.active"/);
  assert.match(service, /AUTOMATIC_INTERNAL_IDS[^\n]+eco-design-circularity-aerospace-materials/);
  assert.doesNotMatch(bridge, /eco-design-circularity-aerospace-materials[^\n]+(?:module|question|unlock|visited)/i);
});
