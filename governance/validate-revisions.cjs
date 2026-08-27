"use strict";

const { execFileSync } = require("node:child_process");
const { issue } = require("./content-policy.cjs");

const significantStep = step => ({
  id: step.id, kind: step.kind, resourceId: step.resourceId || null,
  resourceIds: step.resourceIds || null, requirement: step.requirement,
  intention: step.intention, finalAssessment: step.finalAssessment === true,
  capstone: step.capstone === true, optionalDiagnostic: step.optionalDiagnostic === true
});
const signature = path => JSON.stringify({ outcomeIds: path.outcomeIds || [], steps: (path.steps || []).filter(step => step.requirement !== "optional").map(significantStep) });

function compareRevisions(current, base) {
  const issues = [], basePaths = new Map((base?.paths || []).map(path => [path.id, path]));
  (current?.paths || []).forEach(path => {
    const before = basePaths.get(path.id); if (!before) return;
    if (signature(path) !== signature(before) && path.revision <= before.revision) issues.push(issue("FAIL", "PATH_REVISION_REQUIRED", `Completion-significant structure changed but revision did not increase above ${before.revision}. Required order, alternatives, roles, assessment/capstone or outcome IDs changed.`, path.id));
  });
  return issues;
}

function loadBaseFromGit(ref = process.env.GOVERNANCE_BASE_REF || "origin/main", file = "learning-paths-data.js") {
  try {
    const source = execFileSync("git", ["show", `${ref}:${file}`], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    const module = { exports: {} }; Function("module", "exports", source)(module, module.exports); return { ok: true, data: module.exports };
  } catch (error) {
    return { ok: false, issue: issue(process.env.CI ? "FAIL" : "WARNING", "REVISION_BASE_UNAVAILABLE", `Learning Path revision comparison could not run against ${ref}. Fetch or provide a valid GOVERNANCE_BASE_REF.`, file, String(error.message).split("\n")[0]) };
  }
}

module.exports = { significantStep, signature, compareRevisions, loadBaseFromGit };
