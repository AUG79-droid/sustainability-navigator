const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const catalogue = require("../catalogue-data.js");
const pathsData = require("../learning-paths-data.js");
const model = require("../progress-model.js");
const storeApi = require("../progress-store.js");
const serviceApi = require("../progress-service.js");
const selectors = require("../progress-selectors.js");
const root = path.resolve(__dirname, "..");

function harness(overrides = {}) {
  let tick = 0;
  const now = () => `2026-08-27T10:${String(tick++).padStart(2, "0")}:00.000Z`;
  const storage = overrides.storage || storeApi.createMemoryStorage();
  const paths = overrides.pathsData || pathsData;
  const store = storeApi.createLocalStorageStore(storage, { now });
  const service = serviceApi.createProgressService({ catalogue, pathsData: paths, store, now });
  return { storage, store, service, paths };
}

function completeFoundation(service) {
  service.startPath("sustainable-aviation-foundations", "es");
  service.completeResource("sustainable-aviation-essentials", { pathId: "sustainable-aviation-foundations", stepId: "foundations-course", language: "es", source: "manual" });
  service.completeResource("sustainability-systems-escape-room", { pathId: "sustainable-aviation-foundations", stepId: "foundations-systems", language: "es", source: "manual" });
  service.completeResource("tas-sustainability-knowledge-check", { pathId: "sustainable-aviation-foundations", stepId: "foundations-assessment", language: "es", source: "manual" });
}

function completePath(service, pathId, language = "en") {
  const pathItem = pathsData.paths.find(item => item.id === pathId);
  service.startPath(pathId, language);
  pathItem.steps.filter(step => step.requirement === "required" && step.kind !== "knowledge-explore").forEach(step => {
    const resourceId = step.kind === "resource-choice" ? step.resourceIds[0] : step.resourceId;
    service.completeResource(resourceId, { pathId, stepId: step.id, language, source: "manual" });
  });
}

test("uses the approved versioned key and handles empty, corrupt, unsupported and migrated storage", () => {
  assert.equal(model.STORAGE_KEY, "sustainability-navigator.progress");
  const empty = harness();
  assert.deepEqual(empty.service.getState().resources, {});
  const corruptStorage = storeApi.createMemoryStorage({ [model.STORAGE_KEY]: "{" });
  const corrupt = storeApi.createLocalStorageStore(corruptStorage).load(catalogue, pathsData);
  assert.equal(corrupt.reason, "corrupt");
  const futureStorage = storeApi.createMemoryStorage({ [model.STORAGE_KEY]: JSON.stringify({ schemaVersion: 99 }) });
  assert.equal(storeApi.createLocalStorageStore(futureStorage).load(catalogue, pathsData).reason, "unsupported");
  const oldStorage = storeApi.createMemoryStorage({ [model.STORAGE_KEY]: JSON.stringify({ version: 0, resources: { "ethical-armor": true }, updatedAt: "2026-08-20T10:00:00.000Z" }) });
  const migrated = storeApi.createLocalStorageStore(oldStorage).load(catalogue, pathsData);
  assert.equal(migrated.ok, true);
  assert.equal(migrated.state.resources["ethical-armor"].status, "completed");
  assert.equal(migrated.state.resources["ethical-armor"].completionSource, "import");
});

test("reports localStorage failures without losing an in-memory empty state", () => {
  const failing = { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); }, removeItem() { throw new Error("blocked"); } };
  const { service } = harness({ storage: failing });
  assert.equal(service.getStorageStatus(), "storage-unavailable");
  assert.equal(service.startResource("ethical-armor", { language: "en" }).ok, false);
  assert.equal(service.getState().resources["ethical-armor"].status, "in_progress");
});

test("opening starts a resource but never completes it; manual completion and Undo work", () => {
  const { service } = harness();
  service.startResource("ethical-armor", { language: "en" });
  assert.equal(service.getState().resources["ethical-armor"].status, "in_progress");
  assert.ok(service.getState().preferences.pendingLaunch);
  service.completeResource("ethical-armor", { language: "en", source: "manual" });
  assert.equal(service.getState().resources["ethical-armor"].status, "completed");
  assert.equal(service.getState().resources["ethical-armor"].completionSource, "manual");
  assert.equal(service.getState().preferences.pendingLaunch, null);
  service.undoResource("ethical-armor");
  assert.equal(service.getState().resources["ethical-armor"].status, "in_progress");
  service.undoResource("ethical-armor", true);
  assert.equal(selectors.resourceStatus(service.getState(), "ethical-armor"), "not_started");
});

test("keeps global completion separate from every Learning Path context", () => {
  const { service } = harness();
  service.completeResource("airpower-mission-green-2026", { language: "en", source: "manual" });
  service.startPath("evidence-systems-decision-making", "en");
  const path = pathsData.paths.find(item => item.id === "evidence-systems-decision-making");
  assert.equal(selectors.pathSummary(service.getState(), path, catalogue).completedRequired, 0);
  assert.equal(selectors.stepRecord(service.getState(), path.id, "decision-mission"), null);
  service.creditGlobalCompletion(path.id, "decision-mission", "airpower-mission-green-2026");
  assert.equal(selectors.pathSummary(service.getState(), path, catalogue).completedRequired, 1);
  assert.equal(service.getState().resources["airpower-mission-green-2026"].completionSource, "manual", "context credit must not rewrite global evidence");
});

test("counts alternatives as one required step and ignores optional and Recommended Explore", () => {
  const { service } = harness();
  const path = pathsData.paths.find(item => item.id === "sustainable-aviation-foundations");
  service.startPath(path.id, "es");
  service.selectAlternative(path.id, "foundations-course", "sustainable-aviation-essentials");
  service.completeResource("sustainable-aviation-essentials", { pathId: path.id, stepId: "foundations-course", language: "es", source: "manual" });
  let summary = selectors.pathSummary(service.getState(), path, catalogue);
  assert.deepEqual([summary.completedRequired, summary.required, summary.status], [1, 3, "in_progress"]);
  service.visitExplore(path.id, "foundations-explore");
  service.completeResource("tas-sustainability-quest", { pathId: path.id, stepId: "foundations-quest", language: "es", source: "manual" });
  summary = selectors.pathSummary(service.getState(), path, catalogue);
  assert.deepEqual([summary.completedRequired, summary.required], [1, 3]);
  completeFoundation(service);
  summary = selectors.pathSummary(service.getState(), path, catalogue);
  assert.equal(summary.status, "completed");
  assert.equal(summary.completedOptional, 1);
});

test("derives assessments, capstones, current path and next recommendation from definitions", () => {
  const { service } = harness();
  completeFoundation(service);
  const dashboard = selectors.dashboard(service.getState(), catalogue, pathsData);
  assert.equal(dashboard.pathsStarted, 1);
  assert.equal(dashboard.pathsCompleted, 1);
  assert.equal(dashboard.assessmentsCompleted, 1);
  assert.equal(dashboard.capstonesCompleted, 0);
  assert.equal(dashboard.currentPath.id, "sustainable-aviation-foundations");
  assert.equal(dashboard.next.complete, true);
  assert.ok(dashboard.optionalActivities.some(item => item.step.id === "foundations-mission"));
});

test("recommends the first required logical step, respects choices and exposes language limitations", () => {
  const { service } = harness();
  const foundation = pathsData.paths[0];
  service.startPath(foundation.id, "es");
  let next = selectors.nextActivity(service.getState(), foundation, catalogue);
  assert.equal(next.step.id, "foundations-course");
  assert.equal(next.needsChoice, true);
  service.selectAlternative(foundation.id, "foundations-course", "sustainable-aviation-essentials");
  next = selectors.nextActivity(service.getState(), foundation, catalogue);
  assert.equal(next.selectedResource.id, "sustainable-aviation-essentials");
  const supply = pathsData.paths.find(item => item.id === "responsible-supply-chain-compliance");
  service.startPath(supply.id, "es");
  next = selectors.nextActivity(service.getState(), supply, catalogue);
  assert.equal(next.step.id, "supply-foundations");
  assert.equal(next.recommendedResource.id, "responsible-supply-chain-compliance-foundations");
  assert.equal(next.languageLimitation, false, "the new first required step is available in Spanish");
});

test("switches the preferred path language without changing recorded progress", () => {
  const { service } = harness();
  const path = pathsData.paths[0];
  service.startPath(path.id, "es");
  service.completeResource("introduction-sustainability-aviation", { pathId: path.id, stepId: "foundations-course", language: "es", source: "manual" });
  const before = selectors.pathSummary(service.getState(), path, catalogue);
  service.setPathLanguage(path.id, "en");
  const state = service.getState();
  const after = selectors.pathSummary(state, path, catalogue);
  assert.equal(state.paths[path.id].preferredLanguage, "en");
  assert.equal(state.resources["introduction-sustainability-aviation"].language, "es");
  assert.deepEqual([after.completedRequired, after.required], [before.completedRequired, before.required]);
});

test("accepts automatic reports only for verified explicit internal finals", () => {
  for (const id of ["responsible-supply-chain-compliance-foundations", "eco-design-circularity-aerospace-materials", "supply-chain-compliance-decision-review", "ethical-armor", "reach-compliance-challenge", "year-15-challenge"]) {
    const { service } = harness();
    service.startResource(id, { language: "en" });
    service.reportInternalCompletion(id, "en");
    assert.equal(service.getState().resources[id].completionSource, "internal-report");
  }
  const { service } = harness();
  assert.throws(() => service.reportInternalCompletion("phytosanitary-defender", "en"), /not allowed/);
  assert.throws(() => service.reportInternalCompletion("airpower-mission-green-2026", "en"), /not allowed/);
});

test("preserves completion across path revisions and flags a new required step as update_available", () => {
  const original = harness();
  completeFoundation(original.service);
  const saved = original.service.getState();
  const revised = JSON.parse(JSON.stringify(pathsData));
  const path = revised.paths[0];
  path.revision = 2;
  path.steps.push({ id: "foundations-new-required", kind: "resource", resourceId: "bio-inspired-innovation-lab", intention: "practice", requirement: "required", rationale: { es: "Nueva práctica", en: "New practice" } });
  const storage = storeApi.createMemoryStorage({ [model.STORAGE_KEY]: JSON.stringify(saved) });
  const updated = harness({ storage, pathsData: revised });
  const summary = selectors.pathSummary(updated.service.getState(), path, catalogue);
  assert.equal(summary.status, "update_available");
  assert.ok(updated.service.getState().paths[path.id].completionHistory.some(item => item.pathRevision === 1));
  const optionalRevision = JSON.parse(JSON.stringify(pathsData));
  optionalRevision.paths[0].revision = 2;
  optionalRevision.paths[0].steps.push({ id: "new-optional", kind: "resource", resourceId: "bio-inspired-innovation-lab", intention: "practice", requirement: "optional", rationale: { es: "Opcional", en: "Optional" } });
  const optional = harness({ storage: storeApi.createMemoryStorage({ [model.STORAGE_KEY]: JSON.stringify(saved) }), pathsData: optionalRevision });
  assert.equal(selectors.pathSummary(optional.service.getState(), optionalRevision.paths[0], catalogue).status, "completed");
});

test("preserves removed step records as history during reconciliation", () => {
  const original = harness();
  completeFoundation(original.service);
  const changed = JSON.parse(JSON.stringify(pathsData));
  changed.paths[0].revision = 2;
  changed.paths[0].steps = changed.paths[0].steps.filter(step => step.id !== "foundations-assessment");
  const reconciled = model.reconcile(original.service.getState(), catalogue, changed);
  assert.equal(reconciled.paths[changed.paths[0].id].steps["foundations-assessment"], undefined);
  assert.equal(reconciled.paths[changed.paths[0].id].history.steps["foundations-assessment"].status, "completed");
});

test("reconciles a changed alternative group without deleting its prior completion", () => {
  const original = harness();
  original.service.startPath("sustainable-aviation-foundations", "es");
  original.service.completeResource("sustainable-aviation-essentials", { pathId: "sustainable-aviation-foundations", stepId: "foundations-course", language: "es", source: "manual" });
  const changed = JSON.parse(JSON.stringify(pathsData));
  changed.paths[0].revision = 2;
  changed.paths[0].steps.find(step => step.id === "foundations-course").resourceIds = ["introduction-sustainability-aviation"];
  const reconciled = model.reconcile(original.service.getState(), catalogue, changed);
  const record = reconciled.paths["sustainable-aviation-foundations"];
  assert.equal(record.steps["foundations-course"], undefined);
  assert.equal(record.selectedAlternatives["foundations-course"], undefined);
  assert.equal(record.history.steps["foundations-course"].resourceId, "sustainable-aviation-essentials");
  assert.equal(record.history.steps["foundations-course"].status, "completed");
});

test("exports metadata-free progress, previews Replace import and resets only the approved key", () => {
  const { service, storage } = harness();
  storage.setItem("another-application", "keep-me");
  service.completeResource("ethical-armor", { language: "en", source: "manual" });
  const exported = service.exportProgress();
  assert.equal(exported.ok, true);
  assert.doesNotMatch(exported.json, /An intelligence game|Diligencia debida|repositoryUrl|launches|score|answer/i);
  const preview = service.previewImport(exported.json);
  assert.equal(preview.ok, true);
  assert.equal(preview.summary.completedResources, 1);
  service.reset();
  assert.equal(storage.getItem(model.STORAGE_KEY), null);
  assert.equal(storage.getItem("another-application"), "keep-me");
  service.replaceImport(preview);
  assert.equal(service.getState().resources["ethical-armor"].status, "completed");
});

test("preserves all Hub integration points and exposes the bilingual progress destination", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
  assert.match(html, /href="#progress" data-i18n="navProgress"/);
  assert.match(html, /id="progress"/);
  assert.ok(html.indexOf("progress-model.js") < html.indexOf("progress-store.js"));
  assert.ok(html.indexOf("progress-ui.js") < html.indexOf("app.js"));
  assert.match(app, /navProgress: "Mi progreso"/);
  assert.match(app, /navProgress: "My progress"/);
  assert.match(html, /id="applications-grid"/);
  assert.match(html, /id="knowledge"/);
  assert.match(html, /id="learning-paths-grid"/);
  assert.equal(catalogue.resources.length, 29);
  assert.equal(pathsData.paths.length, 6);
  assert.equal(pathsData.paths.find(item => item.id === "responsible-supply-chain-compliance").revision, 3);
  assert.equal(pathsData.paths.find(item => item.id === "eco-design-circularity-materials").revision, 3);
  assert.ok(pathsData.paths.filter(item => !["responsible-supply-chain-compliance", "eco-design-circularity-materials"].includes(item.id)).every(item => item.revision === 1));
});

test("injects the strict bridge only into verified finals and leaves Phytosanitary manual", () => {
  const verified = {
    "responsible-supply-chain-compliance-foundations/index.html": ["responsible-supply-chain-compliance-foundations", "#course-complete.active"],
    "eco-design-circularity-aerospace-materials/index.html": ["eco-design-circularity-aerospace-materials", "#course-complete.active"],
    "supply-chain-compliance-decision-review/index.html": ["supply-chain-compliance-decision-review", "#decision-review-complete.active"],
    "ethical-armor/index.html": ["ethical-armor", "#final.active"],
    "reach-compliance-challenge/index.html": ["reach-compliance-challenge", ".final-score"],
    "year-15-challenge/index.html": ["year-15-challenge", ".final-screen"]
  };
  Object.entries(verified).forEach(([file, [id, selector]]) => {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    assert.match(html, /progress-bridge\.js/);
    assert.match(html, new RegExp(`data-resource-id=["']${id}["']`));
    assert.ok(html.includes(`data-completion-selector=\"${selector}\"`));
  });
  assert.doesNotMatch(fs.readFileSync(path.join(root, "phytosanitary-defender/index.html"), "utf8"), /progress-bridge\.js/);
});

test("migrates schema v1 completion history to private schema v2 records without fabricating evidence", () => {
  const v1 = model.createEmptyState(catalogue.version, pathsData.version);
  v1.schemaVersion = 1;
  v1.paths["sustainable-aviation-foundations"] = {
    definitionRevision: 1, preferredLanguage: "es", startedAt: "2026-08-20T10:00:00.000Z", lastActivityAt: "2026-08-20T11:00:00.000Z",
    selectedAlternatives: {}, steps: {}, completionHistory: [{ revision: 1, completedAt: "2026-08-20T11:00:00.000Z" }], history: { steps: {} }
  };
  const storage = storeApi.createMemoryStorage({ [model.STORAGE_KEY]: JSON.stringify(v1) });
  const loaded = harness({ storage }).service.getState();
  const record = loaded.paths["sustainable-aviation-foundations"].completionHistory[0];
  assert.equal(loaded.schemaVersion, 2);
  assert.equal(record.pathRevision, 1);
  assert.equal(record.verificationState, "local-self-managed");
  assert.equal(record.historicalEvidenceIncomplete, true);
  assert.deepEqual(record.requiredStepEvidence, []);
  assert.equal(record.completedAt, "2026-08-20T11:00:00.000Z");
});

test("imports a schema v1 backup and rejects unsupported future backups", () => {
  const { service } = harness();
  const old = { schemaVersion: 1, preferences: { dashboardLanguage: "es" }, resources: {}, paths: {}, recentActivity: [], history: { resources: {}, paths: {} } };
  const preview = service.previewImport(JSON.stringify({ format: storeApi.EXPORT_FORMAT, exportedAt: "2026-08-20T10:00:00.000Z", progress: old }));
  assert.equal(preview.ok, true);
  assert.equal(preview.state.schemaVersion, 2);
  const future = service.previewImport(JSON.stringify({ format: storeApi.EXPORT_FORMAT, progress: { schemaVersion: 99 } }));
  assert.equal(future.ok, false);
  assert.equal(future.reason, "unsupported");
});

test("creates one self-managed evidence record for each completed path revision", () => {
  const { service } = harness();
  completeFoundation(service);
  let records = service.getState().paths["sustainable-aviation-foundations"].completionHistory;
  assert.equal(records.length, 1);
  const record = records[0];
  assert.equal(record.recordVersion, 1);
  assert.equal(record.pathId, "sustainable-aviation-foundations");
  assert.equal(record.pathRevision, 1);
  assert.equal(record.requiredStepEvidence.length, 3);
  assert.equal(record.optionalStepEvidenceAtCompletion.length, 0);
  assert.equal(record.verificationState, "local-self-managed");
  assert.deepEqual(record.learningOutcomeIds, pathsData.paths[0].outcomeIds);
  assert.deepEqual(Object.keys(record).filter(key => ["title", "description", "launches", "duration", "repositoryUrl", "score", "answers", "learnerName"].includes(key)), []);
  service.completeResource("tas-sustainability-knowledge-check", { pathId: "sustainable-aviation-foundations", stepId: "foundations-assessment", language: "es", source: "manual" });
  records = service.getState().paths["sustainable-aviation-foundations"].completionHistory;
  assert.equal(records.length, 1, "repeating a final step must not duplicate the revision record");
});

test("snapshots optional evidence at completion and appends later optional evidence without changing completion time", () => {
  const { service } = harness();
  service.startPath("sustainable-aviation-foundations", "es");
  service.completeResource("tas-sustainability-quest", { pathId: "sustainable-aviation-foundations", stepId: "foundations-quest", language: "es", source: "manual" });
  completeFoundation(service);
  const before = service.getState().paths["sustainable-aviation-foundations"].completionHistory[0];
  assert.deepEqual(before.optionalStepEvidenceAtCompletion.map(item => item.stepId), ["foundations-quest"]);
  service.completeResource("airpower-mission-green-2026", { pathId: "sustainable-aviation-foundations", stepId: "foundations-mission", language: "en", source: "manual" });
  const after = service.getState().paths["sustainable-aviation-foundations"].completionHistory[0];
  assert.equal(after.completedAt, before.completedAt);
  assert.deepEqual(after.requiredStepEvidence, before.requiredStepEvidence);
  assert.deepEqual(after.optionalStepEvidenceAtCompletion, before.optionalStepEvidenceAtCompletion);
  assert.deepEqual(after.learningOutcomeIds, before.learningOutcomeIds);
  assert.deepEqual(after.optionalStepEvidenceAtCompletion.map(item => item.stepId), ["foundations-quest"]);
  assert.deepEqual(after.supplementalOptionalEvidence.map(item => item.stepId), ["foundations-mission"]);
});

test("records language evidence honestly and labels assessments without a pass claim", () => {
  const { service } = harness();
  service.startPath("sustainable-aviation-foundations", "es");
  service.completeResource("sustainable-aviation-essentials", { pathId: "sustainable-aviation-foundations", stepId: "foundations-course", language: "es", source: "manual" });
  service.completeResource("sustainability-systems-escape-room", { pathId: "sustainable-aviation-foundations", stepId: "foundations-systems", language: "en", source: "manual" });
  service.completeResource("tas-sustainability-knowledge-check", { pathId: "sustainable-aviation-foundations", stepId: "foundations-assessment", language: "en", source: "manual" });
  const record = service.getState().paths["sustainable-aviation-foundations"].completionHistory[0];
  assert.deepEqual(record.languagesUsed.sort(), ["en", "es"]);
  assert.equal(record.overallLanguage, "mixed");
  const assessment = record.requiredStepEvidence.find(item => item.stepId === "foundations-assessment");
  assert.equal(assessment.finalAssessment, true);
  assert.equal(Object.hasOwn(assessment, "passed"), false);
  assert.equal(Object.hasOwn(assessment, "score"), false);
});

test("classifies current, update-available and archived completion records", () => {
  const base = harness(); completeFoundation(base.service); const saved = base.service.getState();
  let records = selectors.completionRecords(saved, catalogue, pathsData);
  assert.equal(records[0].relationship, "current");
  assert.equal(records[0].assessmentCompleted, true);
  const revised = JSON.parse(JSON.stringify(pathsData)); revised.paths[0].revision = 2;
  revised.paths[0].steps.push({ id: "new-required", kind: "resource", resourceId: "bio-inspired-innovation-lab", intention: "practice", requirement: "required", rationale: { es: "Nueva", en: "New" } });
  records = selectors.completionRecords(model.reconcile(saved, catalogue, revised), catalogue, revised);
  assert.equal(records[0].relationship, "update_available");
  const archivedCatalogue = JSON.parse(JSON.stringify(catalogue)); archivedCatalogue.resources.find(item => item.id === "sustainable-aviation-essentials").status = "archived";
  records = selectors.completionRecords(saved, archivedCatalogue, pathsData);
  assert.equal(records[0].relationship, "contains_archived");
});

test("retains revision 1 and creates a distinct revision 2 record after new requirements are completed", () => {
  const original = harness(); completeFoundation(original.service); const first = original.service.getState();
  const revised = JSON.parse(JSON.stringify(pathsData)); const pathItem = revised.paths[0]; pathItem.revision = 2;
  pathItem.steps.push({ id: "foundations-new-required", kind: "resource", resourceId: "bio-inspired-innovation-lab", intention: "practice", requirement: "required", rationale: { es: "Nueva práctica", en: "New practice" } });
  const updated = harness({ storage: storeApi.createMemoryStorage({ [model.STORAGE_KEY]: JSON.stringify(first) }), pathsData: revised });
  updated.service.completeResource("bio-inspired-innovation-lab", { pathId: pathItem.id, stepId: "foundations-new-required", language: "en", source: "manual" });
  const records = updated.service.getState().paths[pathItem.id].completionHistory;
  assert.deepEqual(records.map(item => item.pathRevision), [1, 2]);
  assert.notEqual(records[0].completionId, records[1].completionId);
  assert.equal(records[0].completedAt, first.paths[pathItem.id].completionHistory[0].completedAt);
});

test("distinguishes practice capstones and optional diagnostics from formal assessments", () => {
  const eco = harness(); completePath(eco.service, "eco-design-circularity-materials", "en");
  const ecoRecord = selectors.completionRecords(eco.service.getState(), catalogue, pathsData)[0];
  assert.equal(ecoRecord.capstoneCompleted, true);
  assert.equal(ecoRecord.assessmentCompleted, true);
  const inService = harness(); completePath(inService.service, "sustainable-in-service-operations", "en");
  inService.service.completeResource("sustainability-knowledge-check-evidence", { pathId: "sustainable-in-service-operations", stepId: "in-service-diagnostic", language: "en", source: "manual" });
  const inServiceRecord = selectors.completionRecords(inService.service.getState(), catalogue, pathsData)[0];
  assert.equal(inServiceRecord.diagnosticCompleted, true);
  assert.equal(inServiceRecord.assessmentCompleted, false);
  assert.equal(inServiceRecord.capstoneCompleted, true);
});

test("exports completion history without identity or unsupported achievement claims and reset removes it", () => {
  const { service } = harness(); completeFoundation(service);
  const exported = service.exportProgress();
  assert.equal(JSON.parse(exported.json).progress.schemaVersion, 2);
  assert.doesNotMatch(exported.json, /learnerName|certificate|credential|badge|score|passed/i);
  const preview = service.previewImport(exported.json);
  assert.deepEqual([preview.summary.completedPaths, preview.summary.completionRecords], [1, 1]);
  service.reset();
  assert.deepEqual(service.getState().paths, {});
  assert.deepEqual(service.getState().history.paths, {});
});

test("never upgrades imported completion records beyond local-self-managed verification", () => {
  const source = harness(); completeFoundation(source.service);
  const payload = JSON.parse(source.service.exportProgress().json);
  payload.progress.paths["sustainable-aviation-foundations"].completionHistory[0].verificationState = "externally-verified";
  const target = harness(); const preview = target.service.previewImport(JSON.stringify(payload));
  assert.equal(preview.ok, true);
  assert.equal(preview.state.paths["sustainable-aviation-foundations"].completionHistory[0].verificationState, "local-self-managed");
});

test("loads the completion UI before progress UI and keeps optional print identity out of persistence", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const ui = fs.readFileSync(path.join(root, "completion-ui.js"), "utf8");
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  assert.ok(html.indexOf("completion-ui.js") < html.indexOf("progress-ui.js"));
  assert.match(ui, /Personal Learning Completion Record/);
  assert.match(ui, /not an accredited qualification or proof of professional competence/);
  assert.match(ui, /Final assessment completed — pass result not recorded/);
  assert.match(ui, /Practice capstone completed/);
  assert.match(ui, /Optional diagnostic completed/);
  assert.doesNotMatch(ui, /localStorage|learnerName/);
  assert.match(css, /@media print/);
  assert.match(css, /prefers-reduced-motion/);
});
