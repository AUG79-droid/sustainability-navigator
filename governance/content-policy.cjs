"use strict";

const POLICY = Object.freeze({
  kinds: ["application", "course", "quiz", "simulator", "game", "knowledge-resource"],
  intentions: ["learn", "practice", "assess", "explore"],
  pillars: ["P1", "P2", "P3", "P4", "P5", "P6"],
  audiences: ["general", "engineering", "operations", "sustainability", "innovation", "teams", "flight-safety", "environment", "managers", "procurement", "in-service", "maintenance", "quality"],
  languages: ["es", "en"],
  difficulties: ["foundation", "intermediate", "advanced", "progressive"],
  lifecycles: ["active", "hold", "temporarily-unavailable", "archived", "replaced"],
  evidenceStates: ["verified", "documented", "estimated", "unknown", "needs-review"],
  dispositions: ["include", "hold", "exclude", "superseded", "unrelated", "manual-review"],
  requiredResourceFields: ["id", "kind", "subtype", "title", "description", "learningTopic", "audienceIds", "launches", "duration", "difficulty", "pillarIds", "provenance", "lifecycle", "languages", "intendedLanguages"],
  idPattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  internalPathPattern: /^(?![\\/])(?!.*(?:^|[\\/])\.\.(?:[\\/]|$))[a-zA-Z0-9._/-]+\/$/
});

const severity = Object.freeze({ PASS: "PASS", INFO: "INFO", WARNING: "WARNING", REVIEW: "WARNING", FAIL: "FAIL" });
const labels = Object.freeze({ PASS: "Correct", INFO: "Informational", WARNING: "Review recommended", FAIL: "Must fix before publication" });
const issue = (level, code, message, subject = null, details = null) => ({ level: severity[level] || level, code, message, subject, details });
const visibleInDiscovery = resource => resource.lifecycle === "active" || resource.lifecycle === "temporarily-unavailable";
const launchable = resource => resource.lifecycle === "active";
const preservesHistory = () => true;

module.exports = { POLICY, severity, labels, issue, visibleInDiscovery, launchable, preservesHistory };
