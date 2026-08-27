"use strict";

const { issue } = require("./content-policy.cjs");

const idsFor = step => step.kind === "resource-choice" ? step.resourceIds || [] : step.kind === "resource" ? [step.resourceId] : [];
const usable = resource => resource && !["hold", "temporarily-unavailable", "archived", "replaced"].includes(resource.lifecycle);

function validateLearningPaths(pathsData, catalogue) {
  const issues = [], resources = new Map(), aliases = new Map();
  (catalogue?.resources || []).forEach(resource => { resources.set(resource.id, resource); (resource.aliases || []).forEach(alias => aliases.set(alias, resource.id)); });
  const resolve = id => resources.get(id) || resources.get(aliases.get(id));
  const pathIds = new Set();
  if (!Array.isArray(pathsData?.paths)) return [issue("FAIL", "PATHS_SHAPE", "Learning Paths must be an array.")];
  pathsData.paths.forEach(path => {
    if (pathIds.has(path.id)) issues.push(issue("FAIL", "DUPLICATE_PATH_ID", `Duplicate Learning Path ID: ${path.id}.`, path.id));
    pathIds.add(path.id);
    if (!Number.isInteger(path.revision) || path.revision < 1) issues.push(issue("FAIL", "MISSING_PATH_REVISION", "Learning Path requires a positive revision.", path.id));
    if (!Array.isArray(path.outcomeIds) || !path.outcomeIds.length || new Set(path.outcomeIds).size !== path.outcomeIds.length) issues.push(issue("FAIL", "INVALID_OUTCOME_IDS", "Learning outcomes require stable unique IDs.", path.id));
    const stepIds = new Set(), requiredKeys = new Set();
    (path.steps || []).forEach((step, index) => {
      const subject = `${path.id}/${step.id || index}`;
      if (!step.id || stepIds.has(step.id)) issues.push(issue("FAIL", "DUPLICATE_STEP_ID", `Step ID is missing or duplicated: ${step.id || "(missing)"}.`, subject));
      stepIds.add(step.id);
      const ids = idsFor(step);
      if (step.kind === "resource-choice" && (!step.choiceGroupId || ids.length < 2 || new Set(ids).size !== ids.length)) issues.push(issue("FAIL", "INVALID_CHOICE_GROUP", "Alternative choice requires a group ID and at least two unique resources.", subject));
      ids.forEach(id => { if (!resolve(id)) issues.push(issue("FAIL", "UNKNOWN_RESOURCE_REFERENCE", `Unknown resource reference: ${id}.`, subject)); });
      if (step.requirement === "required") {
        const key = ids.slice().sort().join("|");
        if (key && requiredKeys.has(key)) issues.push(issue("FAIL", "DUPLICATE_LOGICAL_REQUIREMENT", `Required resource or alternative is repeated: ${key}.`, subject));
        requiredKeys.add(key);
        if (ids.length && !ids.some(id => usable(resolve(id)))) issues.push(issue("FAIL", "NO_VIABLE_REQUIRED_ROUTE", "Required step has no active alternative; this is a maintenance issue, not learner failure.", subject));
      }
      if (step.finalAssessment && (step.capstone || step.optionalDiagnostic || step.intention !== "assess" || ids.some(id => resolve(id)?.kind !== "quiz"))) issues.push(issue("FAIL", "INVALID_FINAL_ASSESSMENT", "Final assessment must be an assessment-only quiz step.", subject));
      if (step.capstone && (step.finalAssessment || step.optionalDiagnostic || !["practice", "apply"].includes(step.intention))) issues.push(issue("FAIL", "INVALID_CAPSTONE", "Capstone must be a practice/apply step and cannot be an assessment or diagnostic.", subject));
      if (step.optionalDiagnostic && (step.requirement !== "optional" || step.finalAssessment || step.capstone || step.intention !== "assess")) issues.push(issue("FAIL", "INVALID_DIAGNOSTIC", "Diagnostic must be optional, assess-intention, and not final/capstone.", subject));
    });
    ["es", "en"].forEach(language => {
      const required = (path.steps || []).filter(step => step.requirement === "required" && idsFor(step).length);
      const complete = required.every(step => idsFor(step).some(id => usable(resolve(id)) && resolve(id).launches?.[language]));
      const partial = required.some(step => idsFor(step).some(id => usable(resolve(id)) && resolve(id).launches?.[language]));
      issues.push(issue("INFO", `PATH_LANGUAGE_${complete ? "COMPLETE" : partial ? "PARTIAL" : "UNAVAILABLE"}`, `${language.toUpperCase()} route is ${complete ? "complete" : partial ? "partial" : "unavailable"}.`, path.id));
    });
  });
  return issues;
}

module.exports = { validateLearningPaths, idsFor, usable };
