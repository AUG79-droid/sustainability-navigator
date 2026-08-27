(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNProgressSelectors = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const idsForStep = step => step.kind === "resource-choice" ? step.resourceIds : step.kind === "resource" ? [step.resourceId] : [];
  const resourceStatus = (state, resourceId) => state.resources[resourceId]?.status || "not_started";
  const pathRecord = (state, pathId) => state.paths[pathId] || null;
  const stepRecord = (state, pathId, stepId) => pathRecord(state, pathId)?.steps?.[stepId] || null;
  const stepIsComplete = (state, path, step) => {
    const record = stepRecord(state, path.id, step.id);
    if (record?.status !== "completed") return false;
    const ids = idsForStep(step);
    return !ids.length || ids.includes(record.resourceId);
  };

  function languageAvailability(path, catalogue, language) {
    const resources = new Map(catalogue.resources.map(resource => [resource.id, resource]));
    const required = path.steps.filter(step => step.requirement === "required" && step.kind !== "knowledge-explore");
    const available = required.filter(step => idsForStep(step).some(id => resources.get(id)?.launches?.[language])).length;
    return { language, status: available === required.length ? "complete" : available > 0 ? "partial" : "unavailable", available, total: required.length };
  }

  function pathSummary(state, path, catalogue) {
    const record = pathRecord(state, path.id);
    const required = path.steps.filter(step => step.requirement === "required" && step.kind !== "knowledge-explore");
    const completedRequired = required.filter(step => stepIsComplete(state, path, step)).length;
    const optional = path.steps.filter(step => step.requirement === "optional");
    const completedOptional = optional.filter(step => stepIsComplete(state, path, step)).length;
    const currentComplete = required.length > 0 && completedRequired === required.length;
    const currentRevision = path.revision || 1;
    const earlierCompletion = record?.completionHistory?.some(item => item.revision < currentRevision);
    const status = !record ? "not_started" : currentComplete ? "completed" : earlierCompletion ? "update_available" : "in_progress";
    return {
      pathId: path.id, status, started: Boolean(record), required: required.length, completedRequired,
      percent: required.length ? Math.round(completedRequired / required.length * 100) : 0,
      optional: optional.length, completedOptional, preferredLanguage: record?.preferredLanguage || "es",
      lastActivityAt: record?.lastActivityAt || null,
      languages: { es: languageAvailability(path, catalogue, "es"), en: languageAvailability(path, catalogue, "en") }
    };
  }

  function currentPath(state, pathsData) {
    const explicit = state.preferences.currentPathId;
    if (explicit && state.paths[explicit]) return pathsData.paths.find(path => path.id === explicit) || null;
    const latest = Object.entries(state.paths).sort((a, b) => Date.parse(b[1].lastActivityAt || 0) - Date.parse(a[1].lastActivityAt || 0))[0];
    return latest ? pathsData.paths.find(path => path.id === latest[0]) || null : null;
  }

  function nextActivity(state, path, catalogue) {
    if (!path) return null;
    const resources = new Map(catalogue.resources.map(resource => [resource.id, resource]));
    const record = pathRecord(state, path.id);
    const preferredLanguage = record?.preferredLanguage || "es";
    const required = path.steps.filter(step => step.requirement === "required" && step.kind !== "knowledge-explore");
    const next = required.find(step => !stepIsComplete(state, path, step));
    const explore = path.steps.find(step => step.requirement === "recommended-explore" && !stepRecord(state, path.id, step.id));
    const optional = path.steps.find(step => step.requirement === "optional" && !stepIsComplete(state, path, step));
    if (!next) return { complete: true, recommendedExplore: explore || null, optional: optional || null };
    const chosen = next.kind === "resource-choice" ? record?.selectedAlternatives?.[next.id] || null : next.resourceId;
    const candidates = idsForStep(next).map(id => resources.get(id)).filter(Boolean);
    const selectedResource = chosen ? resources.get(chosen) : null;
    const matchingLanguage = candidates.filter(resource => resource.launches?.[preferredLanguage]);
    const recommendation = selectedResource || (matchingLanguage.length === 1 ? matchingLanguage[0] : null);
    return {
      complete: false, step: next, alternatives: candidates, selectedResource, recommendedResource: recommendation,
      needsChoice: next.kind === "resource-choice" && !chosen,
      preferredLanguage,
      languageLimitation: recommendation ? !recommendation.launches?.[preferredLanguage] : matchingLanguage.length === 0,
      recommendedExplore: explore || null, optional: optional || null
    };
  }

  function dashboard(state, catalogue, pathsData) {
    const resourceMap = new Map(catalogue.resources.map(resource => [resource.id, resource]));
    const completedResources = Object.entries(state.resources).filter(([id, value]) => resourceMap.has(id) && value.status === "completed");
    const summaries = pathsData.paths.map(path => pathSummary(state, path, catalogue));
    const started = summaries.filter(item => item.started);
    const completed = summaries.filter(item => item.status === "completed");
    const activePath = currentPath(state, pathsData);
    let assessments = 0, capstones = 0;
    pathsData.paths.forEach(path => path.steps.forEach(step => {
      if (!stepIsComplete(state, path, step)) return;
      if (step.finalAssessment) assessments += 1;
      if (step.capstone) capstones += 1;
    }));
    const recent = completedResources.sort((a, b) => Date.parse(b[1].completedAt || 0) - Date.parse(a[1].completedAt || 0)).slice(0, 5).map(([id, progress]) => ({ resource: resourceMap.get(id), progress }));
    const optionalActivities = [];
    pathsData.paths.forEach(path => {
      if (!state.paths[path.id]) return;
      path.steps.filter(step => step.requirement === "optional" && !stepIsComplete(state, path, step)).forEach(step => {
        idsForStep(step).forEach(id => optionalActivities.push({ path, step, resource: resourceMap.get(id) }));
      });
    });
    return {
      completedResources: completedResources.length, totalResources: catalogue.resources.length,
      pathsStarted: started.length, pathsCompleted: completed.length, assessmentsCompleted: assessments, capstonesCompleted: capstones,
      currentPath: activePath, currentSummary: activePath ? pathSummary(state, activePath, catalogue) : null,
      next: activePath ? nextActivity(state, activePath, catalogue) : null, recent, optionalActivities
    };
  }

  return { idsForStep, resourceStatus, pathRecord, stepRecord, stepIsComplete, languageAvailability, pathSummary, currentPath, nextActivity, dashboard };
});
