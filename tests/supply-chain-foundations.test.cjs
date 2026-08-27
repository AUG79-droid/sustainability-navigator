"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const catalogue = require("../catalogue-data.js");
const pathsData = require("../learning-paths-data.js");
const progressModel = require("../progress-model.js");
const progressStore = require("../progress-store.js");
const progressService = require("../progress-service.js");
const progressSelectors = require("../progress-selectors.js");
const courseRoot = path.join(root, "responsible-supply-chain-compliance-foundations");

test("registers one bilingual internal foundation course with documented metadata", () => {
  const resource = catalogue.resources.find(item => item.id === "responsible-supply-chain-compliance-foundations");
  assert.ok(resource);
  assert.equal(resource.kind, "course");
  assert.equal(resource.subtype, "foundation-course");
  assert.deepEqual(resource.languages, ["es", "en"]);
  assert.deepEqual(resource.launches, { es: "responsible-supply-chain-compliance-foundations/", en: "responsible-supply-chain-compliance-foundations/" });
  assert.deepEqual(resource.duration, { min: 150, max: 150, unit: "minutes" });
  assert.equal(resource.difficulty, "foundation");
  assert.equal(resource.internalCourse, true);
});

test("places the course first among required Supply Chain steps and increments only that path revision", () => {
  const supply = pathsData.paths.find(item => item.id === "responsible-supply-chain-compliance");
  const required = supply.steps.filter(step => step.requirement === "required");
  assert.equal(required[0].id, "supply-foundations");
  assert.equal(required[0].resourceId, "responsible-supply-chain-compliance-foundations");
  assert.equal(required[0].intention, "learn");
  assert.equal(supply.revision, 2);
  assert.ok(pathsData.paths.filter(item => item.id !== supply.id).every(item => item.revision === 1));
});

test("course provides six progressive modules, checks, cases, explainers and an explicit final state", () => {
  const html = fs.readFileSync(path.join(courseRoot, "index.html"), "utf8");
  const script = fs.readFileSync(path.join(courseRoot, "course.js"), "utf8");
  const styles = fs.readFileSync(path.join(courseRoot, "styles.css"), "utf8");
  assert.doesNotThrow(() => new vm.Script(script));
  assert.equal((script.match(/id:\s*"(?:map|evidence|due-diligence|supplier-action|requirements|governance)"/g) || []).length, 6);
  assert.ok((script.match(/questions:\s*\[/g) || []).length >= 6);
  assert.ok((script.match(/caseTitle:/g) || []).length >= 6);
  assert.match(script, /finalExercise/);
  assert.match(script, /#course-complete/);
  assert.match(script, /firstIncomplete/);
  assert.match(html, /data-completion-selector="#course-complete\.active"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /Saltar al contenido \/ Skip to content/);
  assert.match(styles, /@media\(max-width:520px\)/);
  assert.match(styles, /focus-visible/);
  assert.match(styles, /prefers-reduced-motion/);
});

test("course contains the approved curriculum in both language editions", () => {
  const script = fs.readFileSync(path.join(courseRoot, "course.js"), "utf8");
  ["Tier mapping", "chain of custody", "evidence", "due diligence", "Responsible minerals", "Human rights", "Escalation", "Corrective action", "REACH", "ISPM-15", "Governance", "Air Power"].forEach(term => assert.match(script, new RegExp(term, "i"), term));
  ["trazabilidad", "evidencia", "diligencia debida", "minerales responsables", "derechos humanos", "acción correctiva", "cumplimiento", "embalaje", "gobernanza"].forEach(term => assert.match(script, new RegExp(term, "i"), term));
});

test("preserves a completed revision 1 Supply Chain record and recommends the new foundation step", () => {
  const previousPaths = JSON.parse(JSON.stringify(pathsData));
  const previousSupply = previousPaths.paths.find(item => item.id === "responsible-supply-chain-compliance");
  previousSupply.revision = 1;
  previousSupply.steps = previousSupply.steps.filter(step => step.id !== "supply-foundations");
  const storage = progressStore.createMemoryStorage();
  const oldService = progressService.createBrowserService(catalogue, previousPaths, storage, () => "2026-08-27T10:00:00.000Z");
  oldService.startPath(previousSupply.id, "en");
  for (const step of previousSupply.steps.filter(step => step.requirement === "required")) {
    oldService.completeResource(step.resourceId, { pathId: previousSupply.id, stepId: step.id, language: "en", source: "manual" });
  }
  const currentService = progressService.createBrowserService(catalogue, pathsData, storage, () => "2026-08-27T11:00:00.000Z");
  const currentSupply = pathsData.paths.find(item => item.id === previousSupply.id);
  const state = currentService.getState();
  const summary = progressSelectors.pathSummary(state, currentSupply, catalogue);
  const next = progressSelectors.nextActivity(state, currentSupply, catalogue);
  assert.equal(summary.status, "update_available");
  assert.equal(next.step.id, "supply-foundations");
  assert.ok(state.paths[previousSupply.id].completionHistory.some(record => record.pathRevision === 1));
});
