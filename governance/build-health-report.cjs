"use strict";

const { labels } = require("./content-policy.cjs");
const { sanitize } = require("./check-resource-health.cjs");
const countBy = (items, key) => items.reduce((counts, item) => { const value = typeof key === "function" ? key(item) : item[key]; counts[value || "unknown"] = (counts[value || "unknown"] || 0) + 1; return counts; }, {});

function normalizeReport({ catalogue, pathsData, inventory, issues, health = [] }) {
  const resources = catalogue.resources || [], languages = resources.map(resource => resource.languages || []);
  const blocking = issues.filter(item => item.level === "FAIL"), warnings = issues.filter(item => item.level === "WARNING");
  const used = new Set((pathsData.paths || []).flatMap(path => path.steps.flatMap(step => step.resourceIds || (step.resourceId ? [step.resourceId] : []))));
  return {
    generatedAt: new Date().toISOString(), outcome: blocking.length ? "FAIL" : "PASS",
    summary: { logicalResources: resources.length, paths: (pathsData.paths || []).length, warnings: warnings.length, blockingErrors: blocking.length },
    catalogue: {
      byKind: countBy(resources, "kind"), lifecycle: countBy(resources, "lifecycle"),
      languageCoverage: { es: languages.filter(list => list.includes("es")).length, en: languages.filter(list => list.includes("en")).length, bilingual: languages.filter(list => list.includes("es") && list.includes("en")).length, enOnly: languages.filter(list => list.length === 1 && list[0] === "en").length, esOnly: languages.filter(list => list.length === 1 && list[0] === "es").length },
      unknownDuration: resources.filter(resource => resource.duration === null).map(resource => resource.id),
      unknownDifficulty: resources.filter(resource => resource.difficulty === null).map(resource => resource.id),
      requiresReview: resources.filter(resource => Object.values(resource.metadataQuality || {}).includes("needs-review")).map(resource => resource.id),
      unusedByRoutes: resources.filter(resource => !used.has(resource.id)).map(resource => resource.id)
    },
    inventory: countBy(inventory.records || [], "disposition"),
    health: { byState: countBy(health, "state"), redirects: health.filter(item => item.state === "redirect").length, pages404: health.filter(item => item.state === "pages-404").length, unavailable: health.filter(item => ["http-failure", "pages-404", "timeout", "temporarily-unreachable"].includes(item.state)).length, holdHealthy: health.filter(item => item.disposition === "hold" && ["working", "redirect"].includes(item.state)).map(item => item.resourceId), holdUnavailable: health.filter(item => item.disposition === "hold" && !["working", "redirect"].includes(item.state)).map(item => item.resourceId) },
    learningPaths: { integrity: blocking.some(item => item.code.startsWith("PATH") || item.code.includes("ROUTE")) ? "fail" : "pass", routeCompletability: issues.filter(item => item.code === "NO_VIABLE_REQUIRED_ROUTE").length ? "fail" : "pass" },
    issues: issues.map(item => ({ ...item, message: sanitize(item.message), subject: item.subject ? sanitize(item.subject) : null, details: item.details ? sanitize(item.details) : null }))
  };
}

function terminal(report) { return `${report.outcome} ${report.summary.warnings} warnings to review ${report.summary.blockingErrors} blocking errors`; }
function markdown(report) {
  const lines = [`# Sustainability Hub content health`, "", `**${report.outcome}** · ${report.summary.logicalResources} logical resources · ${report.summary.paths} Learning Paths · ${report.summary.warnings} warnings · ${report.summary.blockingErrors} blocking errors`, "", "## Coverage", "", `- Kinds: ${Object.entries(report.catalogue.byKind).map(([key, value]) => `${key} ${value}`).join(", ")}`, `- Languages: ES ${report.catalogue.languageCoverage.es}, EN ${report.catalogue.languageCoverage.en}, bilingual ${report.catalogue.languageCoverage.bilingual}, EN-only ${report.catalogue.languageCoverage.enOnly}, ES-only ${report.catalogue.languageCoverage.esOnly}`, `- Lifecycles: ${Object.entries(report.catalogue.lifecycle).map(([key, value]) => `${key} ${value}`).join(", ")}`, `- Unknown duration: ${report.catalogue.unknownDuration.length}`, `- Unknown difficulty: ${report.catalogue.unknownDifficulty.length}`, `- Learning Path integrity: ${report.learningPaths.integrity}`, `- Route completability: ${report.learningPaths.routeCompletability}`, "", "## Deployment health", "", `- States: ${Object.entries(report.health.byState).map(([key, value]) => `${key} ${value}`).join(", ") || "not checked"}`, `- Redirects: ${report.health.redirects}`, `- GitHub Pages 404: ${report.health.pages404}`, `- Unavailable deployments: ${report.health.unavailable}`, `- HOLD resources now healthy: ${report.health.holdHealthy.length}`, `- HOLD resources still unavailable: ${report.health.holdUnavailable.length}`, "", "## Findings", ""];
  if (!report.issues.length) lines.push("PASS · Correct · No findings.");
  else report.issues.forEach(item => lines.push(`- **${item.level} · ${labels[item.level]}** · ${item.code}${item.subject ? ` · ${item.subject}` : ""}: ${item.message}`));
  return `${lines.join("\n")}\n`;
}

module.exports = { countBy, normalizeReport, terminal, markdown };
