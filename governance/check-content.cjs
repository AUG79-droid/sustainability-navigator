#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const catalogue = require("../catalogue-data.js");
const pathsData = require("../learning-paths-data.js");
const inventory = require("./inventory-data.cjs");
const { validateCatalogue } = require("./validate-catalogue.cjs");
const { validateLearningPaths } = require("./validate-learning-paths.cjs");
const { compareRevisions, loadBaseFromGit } = require("./validate-revisions.cjs");
const { checkResourceHealth } = require("./check-resource-health.cjs");
const { normalizeReport, terminal, markdown } = require("./build-health-report.cjs");

async function run(options = {}) {
  let issues = [...validateCatalogue(catalogue), ...validateLearningPaths(pathsData, catalogue)];
  if (options.compare !== false) { const base = loadBaseFromGit(options.baseRef); issues = issues.concat(base.ok ? compareRevisions(pathsData, base.data) : [base.issue]); }
  const health = options.health ? await checkResourceHealth(catalogue, inventory, options.healthOptions) : [];
  health.filter(item => item.disposition === "hold" && ["working", "redirect"].includes(item.state)).forEach(item => issues.push({ level: "WARNING", code: "HOLD_HEALTHY", message: "Deployment healthy — publication still requires manual approval.", subject: item.resourceId }));
  const report = normalizeReport({ catalogue, pathsData, inventory, issues, health });
  const reportDir = options.reportDir || process.env.GOVERNANCE_REPORT_DIR;
  if (reportDir) { fs.mkdirSync(reportDir, { recursive: true }); fs.writeFileSync(path.join(reportDir, "content-health.json"), `${JSON.stringify(report, null, 2)}\n`); fs.writeFileSync(path.join(reportDir, "content-health.md"), markdown(report)); }
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdown(report));
  console.log(terminal(report));
  if (options.verbose || process.env.GOVERNANCE_VERBOSE === "1") console.log(markdown(report));
  return report;
}

if (require.main === module) run({ health: process.argv.includes("--health"), reportDir: process.argv.includes("--report") ? path.resolve("governance-report") : null, verbose: process.argv.includes("--verbose") }).then(report => { process.exitCode = report.summary.blockingErrors ? 1 : 0; }).catch(error => { console.error(`FAIL 1 blocking error\n${error.message}`); process.exitCode = 1; });
module.exports = { run };
