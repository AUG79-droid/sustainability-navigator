(function (root, factory) {
  const model = typeof module === "object" && module.exports ? require("./progress-model.js") : root.SNProgressModel;
  const storeApi = typeof module === "object" && module.exports ? require("./progress-store.js") : root.SNProgressStore;
  const api = factory(model, storeApi);
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNProgressService = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (model, storeApi) {
  "use strict";

  const INTERNAL_IDS = new Set(["ethical-armor", "phytosanitary-defender", "reach-compliance-challenge", "year-15-challenge"]);
  const AUTOMATIC_INTERNAL_IDS = new Set(["ethical-armor", "reach-compliance-challenge", "year-15-challenge"]);
  const resourceIdsForStep = step => step?.kind === "resource-choice" ? step.resourceIds : step?.kind === "resource" ? [step.resourceId] : [];

  function createProgressService(options) {
    const catalogue = options.catalogue;
    const pathsData = options.pathsData;
    const store = options.store;
    const now = options.now || (() => new Date().toISOString());
    const resources = new Map(catalogue.resources.map(resource => [resource.id, resource]));
    const paths = new Map(pathsData.paths.map(path => [path.id, path]));
    const listeners = new Set();
    const loaded = store.load(catalogue, pathsData);
    let state = loaded.state;
    let storageStatus = loaded.ok ? "available" : loaded.reason;

    const getState = () => model.clone(state);
    const findPath = pathId => paths.get(pathId) || null;
    const findStep = (pathId, stepId) => findPath(pathId)?.steps.find(step => step.id === stepId) || null;
    const emit = event => listeners.forEach(listener => listener(getState(), event));
    const subscribe = listener => { listeners.add(listener); return () => listeners.delete(listener); };
    const activity = (type, values = {}) => {
      state.recentActivity.push({ type, resourceId: values.resourceId || null, pathId: values.pathId || null, stepId: values.stepId || null, occurredAt: now() });
      state.recentActivity = state.recentActivity.slice(-model.MAX_RECENT_ACTIVITY);
    };
    const persist = event => {
      const result = store.save(state);
      if (result.ok) { state = result.state; storageStatus = "available"; emit(event); }
      else storageStatus = result.reason;
      return result;
    };
    const ensurePath = (pathId, language = "es") => {
      const path = findPath(pathId);
      if (!path) throw new Error(`Unknown Learning Path: ${pathId}`);
      if (!state.paths[pathId]) state.paths[pathId] = {
        definitionRevision: path.revision || 1, preferredLanguage: ["es", "en"].includes(language) ? language : "es",
        startedAt: now(), lastActivityAt: now(), selectedAlternatives: {}, steps: {}, completionHistory: []
      };
      state.paths[pathId].lastActivityAt = now();
      state.preferences.currentPathId = pathId;
      return state.paths[pathId];
    };
    const stepCompleted = (record, step) => {
      const value = record.steps[step.id];
      if (value?.status !== "completed") return false;
      const ids = resourceIdsForStep(step);
      return !ids.length || ids.includes(value.resourceId);
    };
    const recordPathCompletion = pathId => {
      const path = findPath(pathId), record = state.paths[pathId];
      if (!path || !record) return;
      const required = path.steps.filter(step => step.requirement === "required" && step.kind !== "knowledge-explore");
      if (!required.length || !required.every(step => stepCompleted(record, step))) return;
      const revision = path.revision || 1;
      if (!record.completionHistory.some(item => item.revision === revision)) record.completionHistory.push({ revision, completedAt: now() });
    };
    const setGlobal = (resourceId, status, language, source) => {
      if (!resources.has(resourceId)) throw new Error(`Unknown resource: ${resourceId}`);
      const previous = state.resources[resourceId] || {};
      const time = now();
      state.resources[resourceId] = {
        status,
        startedAt: previous.startedAt || time,
        completedAt: status === "completed" ? time : null,
        lastActivityAt: time,
        language: ["es", "en"].includes(language) ? language : previous.language || null,
        completionSource: status === "completed" ? source : null
      };
    };

    function startPath(pathId, language = "es") {
      ensurePath(pathId, language);
      activity("path-started", { pathId });
      return persist({ type: "path-started", pathId });
    }

    function setCurrentPath(pathId) {
      if (pathId !== null && !findPath(pathId)) throw new Error(`Unknown Learning Path: ${pathId}`);
      state.preferences.currentPathId = pathId;
      if (pathId) ensurePath(pathId, state.paths[pathId]?.preferredLanguage || "es");
      return persist({ type: "current-path-changed", pathId });
    }

    function setPathLanguage(pathId, language) {
      if (!["es", "en"].includes(language)) throw new Error("Unsupported language");
      ensurePath(pathId, language).preferredLanguage = language;
      return persist({ type: "path-language-changed", pathId });
    }

    function startResource(resourceId, context = {}) {
      if (state.resources[resourceId]?.status !== "completed") setGlobal(resourceId, "in_progress", context.language, null);
      if (context.pathId && context.stepId) {
        const step = findStep(context.pathId, context.stepId);
        if (!step || !resourceIdsForStep(step).includes(resourceId)) throw new Error("Resource does not belong to this path step");
        const record = ensurePath(context.pathId, context.language);
        if (step.kind === "resource-choice") record.selectedAlternatives[step.id] = resourceId;
        if (record.steps[step.id]?.status !== "completed") record.steps[step.id] = {
          status: "in_progress", resourceId, language: context.language || null, startedAt: record.steps[step.id]?.startedAt || now(),
          completedAt: null, lastActivityAt: now(), completionSource: null
        };
      }
      state.preferences.pendingLaunch = { resourceId, pathId: context.pathId || null, stepId: context.stepId || null, language: context.language || null, launchedAt: now() };
      activity("resource-started", { resourceId, pathId: context.pathId, stepId: context.stepId });
      return persist({ type: "resource-started", resourceId });
    }

    function completeResource(resourceId, context = {}) {
      const source = context.source || "manual";
      if (!model.COMPLETION_SOURCES.includes(source)) throw new Error("Unsupported completion source");
      setGlobal(resourceId, "completed", context.language, source);
      if (context.pathId && context.stepId) {
        const step = findStep(context.pathId, context.stepId);
        if (!step || !resourceIdsForStep(step).includes(resourceId)) throw new Error("Resource does not belong to this path step");
        const record = ensurePath(context.pathId, context.language);
        if (step.kind === "resource-choice") record.selectedAlternatives[step.id] = resourceId;
        record.steps[step.id] = {
          status: "completed", resourceId, language: context.language || state.resources[resourceId].language,
          startedAt: record.steps[step.id]?.startedAt || state.resources[resourceId].startedAt || now(), completedAt: now(),
          lastActivityAt: now(), completionSource: source
        };
        recordPathCompletion(context.pathId);
      }
      if (state.preferences.pendingLaunch?.resourceId === resourceId) state.preferences.pendingLaunch = null;
      activity("resource-completed", { resourceId, pathId: context.pathId, stepId: context.stepId });
      return persist({ type: "resource-completed", resourceId });
    }

    function reportInternalCompletion(resourceId, language) {
      const resource = resources.get(resourceId);
      if (!AUTOMATIC_INTERNAL_IDS.has(resourceId) || !INTERNAL_IDS.has(resourceId) || !resource?.legacyInternal) throw new Error("Automatic report is not allowed for this resource");
      const pending = state.preferences.pendingLaunch;
      const context = pending?.resourceId === resourceId ? { pathId: pending.pathId, stepId: pending.stepId } : {};
      return completeResource(resourceId, { ...context, language, source: "internal-report" });
    }

    function creditGlobalCompletion(pathId, stepId, resourceId) {
      if (state.resources[resourceId]?.status !== "completed") throw new Error("Resource has not been completed globally");
      const step = findStep(pathId, stepId);
      if (!step || !resourceIdsForStep(step).includes(resourceId)) throw new Error("Resource does not belong to this path step");
      const record = ensurePath(pathId, state.resources[resourceId].language || "es");
      if (step.kind === "resource-choice") record.selectedAlternatives[step.id] = resourceId;
      record.steps[step.id] = {
        status: "completed", resourceId, language: state.resources[resourceId].language,
        startedAt: state.resources[resourceId].startedAt || now(), completedAt: now(), lastActivityAt: now(), completionSource: "previous-completion"
      };
      recordPathCompletion(pathId);
      activity("previous-completion-applied", { resourceId, pathId, stepId });
      return persist({ type: "previous-completion-applied", resourceId, pathId, stepId });
    }

    function visitExplore(pathId, stepId) {
      const step = findStep(pathId, stepId);
      if (!step || step.kind !== "knowledge-explore" || step.requirement !== "recommended-explore") throw new Error("Not a Recommended Explore step");
      const record = ensurePath(pathId);
      record.steps[stepId] = { status: "visited", resourceId: null, language: null, startedAt: now(), completedAt: null, lastActivityAt: now(), completionSource: null };
      activity("knowledge-explored", { pathId, stepId });
      return persist({ type: "knowledge-explored", pathId, stepId });
    }

    function selectAlternative(pathId, stepId, resourceId) {
      const step = findStep(pathId, stepId);
      if (!step || step.kind !== "resource-choice" || !step.resourceIds.includes(resourceId)) throw new Error("Invalid alternative");
      ensurePath(pathId).selectedAlternatives[stepId] = resourceId;
      return persist({ type: "alternative-selected", pathId, stepId, resourceId });
    }

    function undoResource(resourceId, toNotStarted = false) {
      if (!resources.has(resourceId)) throw new Error(`Unknown resource: ${resourceId}`);
      if (toNotStarted) delete state.resources[resourceId];
      else setGlobal(resourceId, "in_progress", state.resources[resourceId]?.language, null);
      activity("resource-completion-undone", { resourceId });
      return persist({ type: "resource-completion-undone", resourceId });
    }

    function undoPathStep(pathId, stepId) {
      const record = state.paths[pathId];
      if (!record?.steps[stepId]) return { ok: true, state: getState() };
      const previous = record.steps[stepId];
      record.steps[stepId] = { ...previous, status: previous.resourceId ? "in_progress" : "visited", completedAt: null, completionSource: null, lastActivityAt: now() };
      activity("path-step-undone", { pathId, stepId, resourceId: previous.resourceId });
      return persist({ type: "path-step-undone", pathId, stepId });
    }

    function clearPendingLaunch() {
      state.preferences.pendingLaunch = null;
      return persist({ type: "pending-launch-cleared" });
    }

    function exportProgress() { return store.exportProgress(state); }
    function previewImport(text) { return store.previewImport(text, catalogue, pathsData); }
    function replaceImport(preview) {
      const result = store.replaceImport(preview);
      if (result.ok) { state = model.reconcile(result.state, catalogue, pathsData); emit({ type: "progress-imported" }); }
      return result;
    }
    function reset() {
      const result = store.reset();
      if (result.ok) { state = model.createEmptyState(catalogue.version, pathsData.version); emit({ type: "progress-reset" }); }
      return result;
    }

    return {
      getState, getStorageStatus: () => storageStatus, subscribe, startPath, setCurrentPath, setPathLanguage,
      startResource, completeResource, reportInternalCompletion, creditGlobalCompletion, visitExplore, selectAlternative,
      undoResource, undoPathStep, clearPendingLaunch, exportProgress, previewImport, replaceImport, reset
    };
  }

  function createBrowserService(catalogue, pathsData, storage) {
    const store = storeApi.createLocalStorageStore(storage || window.localStorage);
    return createProgressService({ catalogue, pathsData, store });
  }

  return { INTERNAL_IDS, AUTOMATIC_INTERNAL_IDS, createProgressService, createBrowserService };
});
