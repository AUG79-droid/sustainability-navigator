"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const catalogue = require("../catalogue-data.js");
const pathsData = require("../learning-paths-data.js");
const inventory = require("../governance/inventory-data.cjs");
const { validateCatalogue } = require("../governance/validate-catalogue.cjs");
const { validateLearningPaths } = require("../governance/validate-learning-paths.cjs");
const { compareRevisions } = require("../governance/validate-revisions.cjs");
const { normalizeReport, markdown } = require("../governance/build-health-report.cjs");
const policy = require("../governance/content-policy.cjs");
const model = require("../progress-model.js");
const selectors = require("../progress-selectors.js");
const fs = require("node:fs");

const clone = value => JSON.parse(JSON.stringify(value));
const root = path.resolve(__dirname, "..");
const valid = (overrides = {}) => ({
  id: "fixture-resource", kind: "course", subtype: "fixture", title: { es: "Título", en: "Title" }, description: { es: "Descripción", en: "Description" },
  learningTopic: { es: "Tema", en: "Topic" }, audienceIds: ["general"], launches: { en: "https://example.test/en/" }, duration: null, difficulty: null,
  status: "available", lifecycle: "active", languages: ["en"], intendedLanguages: ["en"], aliases: [], replacedBy: null,
  metadataQuality: { duration: "unknown", difficulty: "unknown", languages: "verified", publication: "verified", pairing: "unknown" },
  pillarIds: ["P1"], provenance: [{ repositoryName: "fixture", repositoryUrl: "https://github.com/example/fixture", languages: ["en"] }], ...overrides
});
const codes = value => validateCatalogue({ resources: value }, { root, checkInternalFiles: false }).map(item => item.code);

test("the governed public catalogue preserves exactly 22 resources and valid metadata", () => {
  const findings = validateCatalogue(catalogue, { root });
  assert.equal(catalogue.resources.length, 22);
  assert.equal(findings.filter(item => item.level === "FAIL").length, 0);
  assert.ok(catalogue.resources.every(resource => resource.lifecycle === "active"));
});

test("accepts EN-only, future ES-only and bilingual resources", () => {
  assert.ok(!codes([valid()]).includes("LANGUAGE_WITHOUT_LAUNCH"));
  assert.ok(!codes([valid({ id: "solo-es", languages: ["es"], intendedLanguages: ["es"], launches: { es: "https://example.test/es/" } })]).includes("LANGUAGE_WITHOUT_LAUNCH"));
  assert.ok(!codes([valid({ id: "bilingual", languages: ["es", "en"], intendedLanguages: ["es", "en"], launches: { es: "https://example.test/es/", en: "https://example.test/en/" } })]).includes("LANGUAGE_WITHOUT_LAUNCH"));
});

test("reports intended bilingual editions that are incomplete without inventing them", () => {
  assert.ok(codes([valid({ intendedLanguages: ["es", "en"] })]).includes("INTENDED_LANGUAGE_MISSING"));
});

test("rejects language-launch mismatches", () => {
  assert.ok(codes([valid({ languages: ["es", "en"] })]).includes("LANGUAGE_WITHOUT_LAUNCH"));
  assert.ok(codes([valid({ languages: [], intendedLanguages: [], launches: { en: "https://example.test/en/" } })]).includes("LAUNCH_WITHOUT_LANGUAGE"));
});

test("rejects duplicate IDs and cross-resource launch destinations", () => {
  assert.ok(codes([valid(), valid()]).includes("DUPLICATE_ID"));
  assert.ok(codes([valid(), valid({ id: "second-resource" })]).includes("DUPLICATE_LAUNCH"));
});

test("rejects malformed external URLs, unsafe paths and missing internal indexes", () => {
  assert.ok(codes([valid({ launches: { en: "http://example.test/" } })]).includes("MALFORMED_EXTERNAL_URL"));
  assert.ok(codes([valid({ launches: { en: "../secret/" } })]).includes("UNSAFE_INTERNAL_PATH"));
  const missing = validateCatalogue({ resources: [valid({ launches: { en: "missing-fixture/" } })] }, { root }).map(item => item.code);
  assert.ok(missing.includes("MISSING_INTERNAL_INDEX"));
});

test("rejects impossible duration and unsupported difficulty", () => {
  assert.ok(codes([valid({ duration: { min: 60, max: 30, unit: "minutes" } })]).includes("INVALID_DURATION"));
  assert.ok(codes([valid({ difficulty: "expert" })]).includes("UNSUPPORTED_DIFFICULTY"));
});

test("supports only the approved lifecycle states and discovery behavior", () => {
  assert.deepEqual(policy.POLICY.lifecycles, ["active", "hold", "temporarily-unavailable", "archived", "replaced"]);
  assert.equal(policy.visibleInDiscovery(valid({ lifecycle: "temporarily-unavailable" })), true);
  assert.equal(policy.launchable(valid({ lifecycle: "temporarily-unavailable" })), false);
  assert.equal(policy.visibleInDiscovery(valid({ lifecycle: "hold" })), false);
});

test("validates alias collisions, identity cycles and replacement cycles", () => {
  assert.ok(codes([valid({ aliases: ["second-resource"] }), valid({ id: "second-resource", launches: { en: "https://example.test/2/" } })]).includes("ALIAS_ID_COLLISION"));
  const replacements = [valid({ id: "first-resource", lifecycle: "replaced", replacedBy: "second-resource" }), valid({ id: "second-resource", lifecycle: "replaced", replacedBy: "first-resource", launches: { en: "https://example.test/2/" } })];
  assert.ok(codes(replacements).includes("IDENTITY_CYCLE"));
});

test("keeps HOLD inventory records outside the public catalogue", () => {
  assert.deepEqual(inventory.records.map(record => record.disposition), ["hold", "hold"]);
  inventory.records.forEach(record => assert.equal(catalogue.resources.some(resource => resource.provenance.some(item => item.repositoryName === record.repositoryName)), false));
});

test("all six Learning Paths pass governed integrity and remain completable", () => {
  const findings = validateLearningPaths(pathsData, catalogue);
  assert.equal(pathsData.paths.length, 6);
  assert.equal(findings.filter(item => item.level === "FAIL").length, 0);
});

test("detects archived required routes and alternatives with no viable option", () => {
  const fixtureCatalogue = clone(catalogue), pathFixture = clone(pathsData);
  const firstStep = pathFixture.paths[0].steps.find(step => step.kind !== "knowledge-explore");
  (firstStep.resourceIds || [firstStep.resourceId]).forEach(id => { fixtureCatalogue.resources.find(resource => resource.id === id).lifecycle = "archived"; });
  assert.ok(validateLearningPaths(pathFixture, fixtureCatalogue).some(item => item.code === "NO_VIABLE_REQUIRED_ROUTE"));
});

test("detects invalid assessment, capstone and diagnostic combinations", () => {
  const fixture = clone(pathsData); const step = fixture.paths[0].steps.find(item => item.kind === "resource");
  step.finalAssessment = true; step.capstone = true; step.optionalDiagnostic = true;
  const found = validateLearningPaths(fixture, catalogue).map(item => item.code);
  assert.ok(found.includes("INVALID_FINAL_ASSESSMENT")); assert.ok(found.includes("INVALID_CAPSTONE")); assert.ok(found.includes("INVALID_DIAGNOSTIC"));
});

test("requires revisions for completion-significant changes but not optional additions", () => {
  const base = clone(pathsData), changed = clone(pathsData); changed.paths[0].steps.reverse();
  assert.ok(compareRevisions(changed, base).some(item => item.code === "PATH_REVISION_REQUIRED"));
  const optional = clone(pathsData); optional.paths[0].steps.push({ id: "optional-fixture", kind: "resource", resourceId: catalogue.resources[0].id, requirement: "optional", intention: "practice" });
  assert.equal(compareRevisions(optional, base).length, 0);
});

test("reconciliation preserves progress and completion evidence for removed identities", () => {
  const state = model.createEmptyState(catalogue.version, pathsData.version);
  state.resources["historical-resource"] = { status: "completed", startedAt: null, completedAt: "2026-01-01T00:00:00.000Z", lastActivityAt: "2026-01-01T00:00:00.000Z", language: "en", completionSource: "manual" };
  state.paths["historical-path"] = { definitionRevision: 1, preferredLanguage: "en", startedAt: null, lastActivityAt: null, selectedAlternatives: {}, steps: {}, completionHistory: [], history: { steps: {} } };
  const next = model.reconcile(state, catalogue, pathsData);
  assert.ok(next.history.resources["historical-resource"]); assert.ok(next.history.paths["historical-path"]);
});

test("temporary outages do not erase progress or recommend an impossible required resource", () => {
  const fixtureCatalogue = clone(catalogue), path = clone(pathsData.paths[0]);
  const assessment = path.steps.find(step => step.finalAssessment);
  const unavailable = fixtureCatalogue.resources.find(resource => resource.id === assessment.resourceId);
  unavailable.lifecycle = "temporarily-unavailable";
  const state = model.createEmptyState(fixtureCatalogue.version, pathsData.version);
  state.resources[unavailable.id] = { status: "completed", startedAt: null, completedAt: "2026-01-01T00:00:00.000Z", lastActivityAt: "2026-01-01T00:00:00.000Z", language: "en", completionSource: "manual" };
  state.paths[path.id] = { definitionRevision: path.revision, preferredLanguage: "en", startedAt: "2026-01-01T00:00:00.000Z", lastActivityAt: "2026-01-01T00:00:00.000Z", selectedAlternatives: {}, steps: {}, completionHistory: [], history: { steps: {} } };
  path.steps.filter(step => step.requirement === "required" && step.id !== assessment.id).forEach(step => { const resourceId = step.resourceId || step.resourceIds[0]; state.paths[path.id].steps[step.id] = { status: "completed", resourceId, language: "en", startedAt: null, completedAt: "2026-01-01T00:00:00.000Z", lastActivityAt: "2026-01-01T00:00:00.000Z", completionSource: "manual" }; });
  const next = selectors.nextActivity(state, path, fixtureCatalogue);
  assert.equal(state.resources[unavailable.id].status, "completed");
  assert.equal(next.recommendedResource, null);
  assert.equal(next.languageLimitation, true);
});

test("Pages uses an explicit learner-file allowlist and excludes governance reports and tests", () => {
  const workflow = fs.readFileSync(path.join(root, ".github", "workflows", "direct-open-pages.yml"), "utf8");
  assert.match(workflow, /site_files=\(/); assert.match(workflow, /site_dirs=\(/);
  assert.doesNotMatch(workflow, /rsync -a/); assert.doesNotMatch(workflow, /cp[^\n]*(?:governance|tests|governance-report)/);
  ["ethical-armor", "phytosanitary-defender", "reach-compliance-challenge", "year-15-challenge"].forEach(directory => assert.match(workflow, new RegExp(directory)));
});

test("reports are normalized, complete and sanitized", () => {
  const report = normalizeReport({ catalogue, pathsData, inventory, health: [], issues: [{ level: "WARNING", code: "REMOTE", message: "<script> token=secret-value", subject: "remote" }] });
  const output = markdown(report);
  assert.equal(report.summary.logicalResources, 22); assert.equal(report.summary.paths, 6);
  assert.doesNotMatch(output, /<script>|secret-value/); assert.match(output, /\[redacted\]/);
});
