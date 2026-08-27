(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNProgressModel = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const SCHEMA_VERSION = 2;
  const COMPLETION_RECORD_VERSION = 1;
  const VERIFICATION_STATE = "local-self-managed";
  const STORAGE_KEY = "sustainability-navigator.progress";
  const RESOURCE_STATUSES = ["in_progress", "completed"];
  const STEP_STATUSES = ["in_progress", "completed", "visited"];
  const COMPLETION_SOURCES = ["manual", "internal-report", "import", "previous-completion"];
  const MAX_RECENT_ACTIVITY = 50;

  const isObject = value => Boolean(value) && typeof value === "object" && !Array.isArray(value);
  const clone = value => JSON.parse(JSON.stringify(value));
  const validDate = value => typeof value === "string" && !Number.isNaN(Date.parse(value));
  const cleanDate = value => validDate(value) ? value : null;
  const cleanLanguage = value => ["es", "en"].includes(value) ? value : null;
  const cleanSource = value => COMPLETION_SOURCES.includes(value) ? value : "manual";

  function createEmptyState(catalogueVersion = null, learningPathsVersion = null) {
    return {
      schemaVersion: SCHEMA_VERSION,
      updatedAt: null,
      definitionVersions: { catalogue: catalogueVersion, learningPaths: learningPathsVersion },
      preferences: { currentPathId: null, dashboardLanguage: "es", pendingLaunch: null },
      resources: {},
      paths: {},
      recentActivity: [],
      history: { resources: {}, paths: {} }
    };
  }

  function migrateV0(raw) {
    const next = createEmptyState();
    const resources = isObject(raw.resources) ? raw.resources : isObject(raw.progress) ? raw.progress : {};
    Object.entries(resources).forEach(([resourceId, value]) => {
      const status = value === true || value === "completed" || value?.status === "completed" ? "completed" : "in_progress";
      const completedAt = cleanDate(value?.completedAt || raw.updatedAt);
      next.resources[resourceId] = {
        status,
        startedAt: cleanDate(value?.startedAt),
        completedAt: status === "completed" ? completedAt : null,
        lastActivityAt: completedAt || cleanDate(value?.lastActivityAt),
        language: cleanLanguage(value?.language),
        completionSource: status === "completed" ? "import" : null
      };
    });
    next.updatedAt = cleanDate(raw.updatedAt);
    return next;
  }

  function migratedCompletionId(pathId, revision, completedAt) {
    return `migrated:${pathId}:r${revision}:${completedAt}`;
  }

  function migrateV1(raw) {
    const next = clone(raw);
    next.schemaVersion = 2;
    const upgradePaths = paths => Object.entries(isObject(paths) ? paths : {}).forEach(([pathId, path]) => {
      if (!isObject(path)) return;
      path.completionHistory = (Array.isArray(path.completionHistory) ? path.completionHistory : []).filter(isObject).map(item => {
        if (item.recordVersion) return item;
        const revision = Number.isInteger(item.revision) && item.revision > 0 ? item.revision : 1;
        const completedAt = cleanDate(item.completedAt);
        return {
          completionId: migratedCompletionId(pathId, revision, completedAt || "unknown"),
          recordVersion: COMPLETION_RECORD_VERSION,
          pathId,
          pathRevision: revision,
          completedAt,
          requiredStepEvidence: [],
          optionalStepEvidenceAtCompletion: [],
          supplementalOptionalEvidence: [],
          languagesUsed: [],
          overallLanguage: null,
          learningOutcomeIds: [],
          verificationState: VERIFICATION_STATE,
          historicalEvidenceIncomplete: true
        };
      });
    });
    upgradePaths(next.paths);
    if (isObject(next.history)) upgradePaths(next.history.paths);
    return next;
  }

  function migrate(raw) {
    if (!isObject(raw)) return { ok: false, reason: "invalid", errors: ["Progress data must be an object"] };
    let working = clone(raw);
    let version = Number.isInteger(working.schemaVersion) ? working.schemaVersion : 0;
    if (version > SCHEMA_VERSION) return { ok: false, reason: "unsupported", version, errors: [`Unsupported progress schema ${version}`] };
    if (version === 0) {
      working = migrateV0(working);
      version = 1;
    }
    if (version === 1) {
      working = migrateV1(working);
      version = 2;
    }
    return { ok: true, state: working, migrated: version !== raw.schemaVersion };
  }

  function sanitiseResource(value) {
    if (!isObject(value) || !RESOURCE_STATUSES.includes(value.status)) return null;
    const status = value.status;
    return {
      status,
      startedAt: cleanDate(value.startedAt),
      completedAt: status === "completed" ? cleanDate(value.completedAt) : null,
      lastActivityAt: cleanDate(value.lastActivityAt),
      language: cleanLanguage(value.language),
      completionSource: status === "completed" ? cleanSource(value.completionSource) : null
    };
  }

  function sanitiseStep(value) {
    if (!isObject(value) || !STEP_STATUSES.includes(value.status)) return null;
    return {
      status: value.status,
      resourceId: typeof value.resourceId === "string" ? value.resourceId : null,
      language: cleanLanguage(value.language),
      startedAt: cleanDate(value.startedAt),
      completedAt: value.status === "completed" ? cleanDate(value.completedAt) : null,
      lastActivityAt: cleanDate(value.lastActivityAt),
      completionSource: value.status === "completed" ? cleanSource(value.completionSource) : null
    };
  }

  function sanitiseEvidence(value) {
    if (!isObject(value) || typeof value.stepId !== "string") return null;
    const requirement = ["required", "optional"].includes(value.requirement) ? value.requirement : null;
    const intention = ["explore", "learn", "practice", "apply", "assess"].includes(value.intention) ? value.intention : null;
    return {
      stepId: value.stepId,
      resourceId: typeof value.resourceId === "string" ? value.resourceId : null,
      requirement,
      intention,
      completedAt: cleanDate(value.completedAt),
      language: cleanLanguage(value.language),
      completionSource: value.completionSource ? cleanSource(value.completionSource) : null,
      finalAssessment: value.finalAssessment === true,
      capstone: value.capstone === true,
      optionalDiagnostic: value.optionalDiagnostic === true
    };
  }

  function sanitiseEvidenceList(value) {
    if (!Array.isArray(value)) return [];
    return value.map(sanitiseEvidence).filter(Boolean);
  }

  function sanitiseCompletionRecord(item, fallbackPathId = null) {
    if (!isObject(item)) return null;
    const pathId = typeof item.pathId === "string" ? item.pathId : fallbackPathId;
    const revision = Number.isInteger(item.pathRevision) && item.pathRevision > 0 ? item.pathRevision : Number.isInteger(item.revision) && item.revision > 0 ? item.revision : 1;
    const completedAt = cleanDate(item.completedAt);
    if (!pathId || !completedAt) return null;
    const completionId = typeof item.completionId === "string" && item.completionId ? item.completionId : migratedCompletionId(pathId, revision, completedAt);
    const languagesUsed = Array.isArray(item.languagesUsed) ? [...new Set(item.languagesUsed.map(cleanLanguage).filter(Boolean))] : [];
    const overallLanguage = ["es", "en", "mixed"].includes(item.overallLanguage) ? item.overallLanguage : null;
    return {
      completionId,
      recordVersion: Number.isInteger(item.recordVersion) && item.recordVersion > 0 ? item.recordVersion : COMPLETION_RECORD_VERSION,
      pathId,
      pathRevision: revision,
      completedAt,
      requiredStepEvidence: sanitiseEvidenceList(item.requiredStepEvidence),
      optionalStepEvidenceAtCompletion: sanitiseEvidenceList(item.optionalStepEvidenceAtCompletion),
      supplementalOptionalEvidence: sanitiseEvidenceList(item.supplementalOptionalEvidence),
      languagesUsed,
      overallLanguage,
      learningOutcomeIds: Array.isArray(item.learningOutcomeIds) ? [...new Set(item.learningOutcomeIds.filter(id => typeof id === "string" && id))] : [],
      verificationState: VERIFICATION_STATE,
      historicalEvidenceIncomplete: item.historicalEvidenceIncomplete === true
    };
  }

  function sanitiseCompletionHistory(value, pathId = null) {
    if (!Array.isArray(value)) return [];
    const seen = new Set();
    return value.map(item => sanitiseCompletionRecord(item, pathId)).filter(item => {
      if (!item || seen.has(item.completionId)) return false;
      seen.add(item.completionId);
      return true;
    });
  }

  function sanitisePath(value, pathId = null) {
    if (!isObject(value)) return null;
    const steps = {};
    Object.entries(isObject(value.steps) ? value.steps : {}).forEach(([stepId, step]) => {
      const clean = sanitiseStep(step);
      if (clean) steps[stepId] = clean;
    });
    const alternatives = {};
    Object.entries(isObject(value.selectedAlternatives) ? value.selectedAlternatives : {}).forEach(([stepId, resourceId]) => {
      if (typeof resourceId === "string") alternatives[stepId] = resourceId;
    });
    const history = isObject(value.history) ? clone(value.history) : { steps: {} };
    return {
      definitionRevision: Number.isInteger(value.definitionRevision) && value.definitionRevision > 0 ? value.definitionRevision : 1,
      preferredLanguage: cleanLanguage(value.preferredLanguage) || "es",
      startedAt: cleanDate(value.startedAt),
      lastActivityAt: cleanDate(value.lastActivityAt),
      selectedAlternatives: alternatives,
      steps,
      completionHistory: sanitiseCompletionHistory(value.completionHistory, pathId),
      history
    };
  }

  function sanitiseActivity(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(isObject).map(item => ({
      type: typeof item.type === "string" ? item.type : "activity",
      resourceId: typeof item.resourceId === "string" ? item.resourceId : null,
      pathId: typeof item.pathId === "string" ? item.pathId : null,
      stepId: typeof item.stepId === "string" ? item.stepId : null,
      occurredAt: cleanDate(item.occurredAt)
    })).filter(item => item.occurredAt).slice(-MAX_RECENT_ACTIVITY);
  }

  function sanitise(raw) {
    const state = createEmptyState();
    state.updatedAt = cleanDate(raw.updatedAt);
    state.definitionVersions = {
      catalogue: Number.isInteger(raw.definitionVersions?.catalogue) ? raw.definitionVersions.catalogue : null,
      learningPaths: Number.isInteger(raw.definitionVersions?.learningPaths) ? raw.definitionVersions.learningPaths : null
    };
    state.preferences.currentPathId = typeof raw.preferences?.currentPathId === "string" ? raw.preferences.currentPathId : null;
    state.preferences.dashboardLanguage = cleanLanguage(raw.preferences?.dashboardLanguage) || "es";
    const pending = raw.preferences?.pendingLaunch;
    if (isObject(pending) && typeof pending.resourceId === "string") {
      state.preferences.pendingLaunch = {
        resourceId: pending.resourceId,
        pathId: typeof pending.pathId === "string" ? pending.pathId : null,
        stepId: typeof pending.stepId === "string" ? pending.stepId : null,
        language: cleanLanguage(pending.language),
        launchedAt: cleanDate(pending.launchedAt)
      };
    }
    Object.entries(isObject(raw.resources) ? raw.resources : {}).forEach(([resourceId, value]) => {
      const clean = sanitiseResource(value);
      if (clean) state.resources[resourceId] = clean;
    });
    Object.entries(isObject(raw.paths) ? raw.paths : {}).forEach(([pathId, value]) => {
      const clean = sanitisePath(value, pathId);
      if (clean) state.paths[pathId] = clean;
    });
    state.recentActivity = sanitiseActivity(raw.recentActivity);
    if (isObject(raw.history)) {
      state.history.resources = isObject(raw.history.resources) ? clone(raw.history.resources) : {};
      state.history.paths = {};
      Object.entries(isObject(raw.history.paths) ? raw.history.paths : {}).forEach(([pathId, value]) => {
        const clean = sanitisePath(value, pathId);
        if (clean) state.history.paths[pathId] = clean;
      });
    }
    return state;
  }

  function reconcile(rawState, catalogue, pathsData) {
    const state = sanitise(rawState);
    const resourceIds = new Set((catalogue?.resources || []).map(resource => resource.id));
    const paths = new Map((pathsData?.paths || []).map(path => [path.id, path]));
    state.definitionVersions = { catalogue: catalogue?.version ?? null, learningPaths: pathsData?.version ?? null };
    state.history = isObject(state.history) ? state.history : { resources: {}, paths: {} };
    state.history.resources = isObject(state.history.resources) ? state.history.resources : {};
    state.history.paths = isObject(state.history.paths) ? state.history.paths : {};

    Object.keys(state.resources).forEach(resourceId => {
      if (!resourceIds.has(resourceId)) {
        state.history.resources[resourceId] = state.resources[resourceId];
        delete state.resources[resourceId];
      }
    });

    Object.keys(state.paths).forEach(pathId => {
      const definition = paths.get(pathId);
      if (!definition) {
        state.history.paths[pathId] = state.paths[pathId];
        delete state.paths[pathId];
        return;
      }
      const record = state.paths[pathId];
      const validSteps = new Map(definition.steps.map(step => [step.id, step]));
      record.history = isObject(record.history) ? record.history : { steps: {} };
      record.history.steps = isObject(record.history.steps) ? record.history.steps : {};
      Object.keys(record.steps).forEach(stepId => {
        const step = validSteps.get(stepId);
        const stored = record.steps[stepId];
        const allowedIds = step?.kind === "resource-choice" ? step.resourceIds : step?.kind === "resource" ? [step.resourceId] : [];
        const valid = step && (step.kind === "knowledge-explore" || !stored.resourceId || allowedIds.includes(stored.resourceId));
        if (!valid) {
          record.history.steps[stepId] = stored;
          delete record.steps[stepId];
        }
      });
      Object.entries(record.selectedAlternatives).forEach(([stepId, resourceId]) => {
        const step = validSteps.get(stepId);
        if (!step || step.kind !== "resource-choice" || !step.resourceIds.includes(resourceId)) delete record.selectedAlternatives[stepId];
      });
      record.definitionRevision = definition.revision || 1;
    });

    if (state.preferences.currentPathId && !paths.has(state.preferences.currentPathId)) state.preferences.currentPathId = null;
    if (state.preferences.pendingLaunch && !resourceIds.has(state.preferences.pendingLaunch.resourceId)) state.preferences.pendingLaunch = null;
    return state;
  }

  function validateState(state) {
    const errors = [];
    if (!isObject(state)) return ["Progress state must be an object"];
    if (state.schemaVersion !== SCHEMA_VERSION) errors.push(`schemaVersion must be ${SCHEMA_VERSION}`);
    if (!isObject(state.resources)) errors.push("resources must be an object");
    if (!isObject(state.paths)) errors.push("paths must be an object");
    if (!isObject(state.preferences)) errors.push("preferences must be an object");
    Object.entries(isObject(state.resources) ? state.resources : {}).forEach(([id, value]) => {
      if (!sanitiseResource(value)) errors.push(`Invalid resource progress: ${id}`);
    });
    Object.entries(isObject(state.paths) ? state.paths : {}).forEach(([id, value]) => {
      if (!sanitisePath(value, id)) errors.push(`Invalid path progress: ${id}`);
    });
    return errors;
  }

  return {
    SCHEMA_VERSION, COMPLETION_RECORD_VERSION, VERIFICATION_STATE, STORAGE_KEY, RESOURCE_STATUSES, STEP_STATUSES, COMPLETION_SOURCES, MAX_RECENT_ACTIVITY,
    clone, createEmptyState, migrate, sanitise, reconcile, validateState, sanitiseCompletionRecord
  };
});
