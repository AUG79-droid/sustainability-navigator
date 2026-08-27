"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { POLICY, issue } = require("./content-policy.cjs");

const isObject = value => value && typeof value === "object" && !Array.isArray(value);
const exactLaunch = value => typeof value === "string" ? value.trim().toLowerCase().replace(/\/+$/, "/") : "";
const isHttps = value => { try { const url = new URL(value); return url.protocol === "https:" && Boolean(url.hostname); } catch { return false; } };
const isInternal = value => typeof value === "string" && !/^[a-z][a-z0-9+.-]*:/i.test(value);
const quality = (resource, field) => resource.metadataQuality?.[field];

function validateCatalogue(catalogue, options = {}) {
  const issues = [], resources = catalogue?.resources;
  if (!Array.isArray(resources)) return [issue("FAIL", "CATALOGUE_SHAPE", "Catalogue resources must be an array.")];
  const ids = new Map(), aliases = new Map(), launches = new Map();
  const root = options.root || path.resolve(__dirname, "..");

  resources.forEach((resource, index) => {
    const subject = resource?.id || `resource[${index}]`;
    if (!isObject(resource)) { issues.push(issue("FAIL", "RESOURCE_SHAPE", "Resource must be an object.", subject)); return; }
    POLICY.requiredResourceFields.forEach(field => { if (resource[field] === undefined) issues.push(issue("FAIL", "MISSING_FIELD", `Missing required field: ${field}.`, subject)); });
    if (!POLICY.idPattern.test(resource.id || "")) issues.push(issue("FAIL", "INVALID_ID", "Resource ID must use lowercase kebab-case.", subject));
    if (ids.has(resource.id)) issues.push(issue("FAIL", "DUPLICATE_ID", `Duplicate resource ID also used by ${ids.get(resource.id)}.`, subject)); else ids.set(resource.id, subject);
    if (!POLICY.kinds.includes(resource.kind)) issues.push(issue("FAIL", "UNSUPPORTED_KIND", `Unsupported resource kind: ${resource.kind}.`, subject));
    if (!POLICY.lifecycles.includes(resource.lifecycle)) issues.push(issue("FAIL", "UNSUPPORTED_LIFECYCLE", `Unsupported lifecycle: ${resource.lifecycle}.`, subject));
    if (resource.difficulty !== null && !POLICY.difficulties.includes(resource.difficulty)) issues.push(issue("FAIL", "UNSUPPORTED_DIFFICULTY", `Unsupported difficulty: ${resource.difficulty}.`, subject));
    if (resource.duration !== null && (!isObject(resource.duration) || resource.duration.unit !== "minutes" || !Number.isFinite(resource.duration.min) || !Number.isFinite(resource.duration.max) || resource.duration.min <= 0 || resource.duration.max < resource.duration.min)) issues.push(issue("FAIL", "INVALID_DURATION", "Duration must be a positive minute range with max >= min.", subject));
    if (!Array.isArray(resource.audienceIds) || !resource.audienceIds.length || resource.audienceIds.some(id => !POLICY.audiences.includes(id))) issues.push(issue("FAIL", "INVALID_AUDIENCE", "Audience IDs must be non-empty and supported.", subject));
    if (!Array.isArray(resource.pillarIds) || !resource.pillarIds.length || resource.pillarIds.some(id => !POLICY.pillars.includes(id))) issues.push(issue("FAIL", "INVALID_PILLAR", "Pillar IDs must be non-empty and supported.", subject));
    if (!Array.isArray(resource.provenance) || !resource.provenance.length || resource.provenance.some(item => !item?.repositoryName || !isHttps(item?.repositoryUrl))) issues.push(issue("FAIL", "INVALID_PROVENANCE", "At least one HTTPS repository provenance record is required.", subject));

    const declared = Array.isArray(resource.languages) ? resource.languages : [];
    const intended = Array.isArray(resource.intendedLanguages) ? resource.intendedLanguages : [];
    const deployed = Object.keys(isObject(resource.launches) ? resource.launches : {});
    if (declared.some(language => !POLICY.languages.includes(language)) || new Set(declared).size !== declared.length) issues.push(issue("FAIL", "INVALID_LANGUAGES", "Actual languages must be unique supported language IDs.", subject));
    if (intended.some(language => !POLICY.languages.includes(language)) || new Set(intended).size !== intended.length) issues.push(issue("FAIL", "INVALID_INTENDED_LANGUAGES", "Intended languages must be unique supported language IDs.", subject));
    deployed.forEach(language => { if (!declared.includes(language)) issues.push(issue("FAIL", "LAUNCH_WITHOUT_LANGUAGE", `Launch ${language.toUpperCase()} has no matching actual language declaration.`, subject)); });
    declared.forEach(language => { if (!deployed.includes(language)) issues.push(issue(resource.lifecycle === "active" ? "FAIL" : "WARNING", "LANGUAGE_WITHOUT_LAUNCH", `Declared ${language.toUpperCase()} language has no deployed launch.`, subject)); });
    intended.filter(language => !declared.includes(language)).forEach(language => issues.push(issue(resource.lifecycle === "active" ? "WARNING" : "INFO", "INTENDED_LANGUAGE_MISSING", `Intended ${language.toUpperCase()} edition is not currently available.`, subject)));

    Object.entries(resource.launches || {}).forEach(([language, destination]) => {
      if (isInternal(destination)) {
        if (!POLICY.internalPathPattern.test(destination)) issues.push(issue("FAIL", "UNSAFE_INTERNAL_PATH", `Unsafe internal launch path: ${destination}.`, subject));
        else if (options.checkInternalFiles !== false && !fs.existsSync(path.join(root, destination, "index.html"))) issues.push(issue("FAIL", "MISSING_INTERNAL_INDEX", `Internal launch has no index.html: ${destination}.`, subject));
      } else if (!isHttps(destination)) issues.push(issue("FAIL", "MALFORMED_EXTERNAL_URL", `External launch must use HTTPS: ${destination}.`, subject));
      const normalized = exactLaunch(destination);
      if (normalized) { if (launches.has(normalized) && launches.get(normalized) !== subject) issues.push(issue("FAIL", "DUPLICATE_LAUNCH", `Launch destination duplicates ${launches.get(normalized)}.`, subject)); else launches.set(normalized, subject); }
    });
    if (resource.lifecycle === "active" && deployed.length === 0) issues.push(issue("FAIL", "ACTIVE_WITHOUT_LAUNCH", "Active resource requires at least one resolvable launch.", subject));
    if (resource.lifecycle === "replaced" && !resource.replacedBy) issues.push(issue("FAIL", "REPLACED_WITHOUT_TARGET", "Replaced resource requires replacedBy.", subject));
    ["duration", "difficulty", "languages", "publication", "pairing"].forEach(field => { const state = quality(resource, field); if (state !== undefined && !POLICY.evidenceStates.includes(state)) issues.push(issue("FAIL", "INVALID_EVIDENCE_STATE", `Unsupported evidence state for ${field}: ${state}.`, subject)); });
    if (resource.duration === null && quality(resource, "duration") === "unknown") issues.push(issue("WARNING", "UNKNOWN_DURATION", "Duration is legitimately undocumented.", subject));
    if (resource.difficulty === null && quality(resource, "difficulty") === "unknown") issues.push(issue("WARNING", "UNKNOWN_DIFFICULTY", "Difficulty is legitimately undocumented.", subject));
    (resource.aliases || []).forEach(alias => {
      if (!POLICY.idPattern.test(alias)) issues.push(issue("FAIL", "INVALID_ALIAS", `Invalid alias: ${alias}.`, subject));
      if (aliases.has(alias)) issues.push(issue("FAIL", "ALIAS_COLLISION", `Alias ${alias} is already assigned to ${aliases.get(alias)}.`, subject)); else aliases.set(alias, resource.id);
    });
  });

  aliases.forEach((target, alias) => { if (ids.has(alias)) issues.push(issue("FAIL", "ALIAS_ID_COLLISION", `Alias ${alias} collides with a canonical resource ID.`, target)); });
  const resolveNext = id => aliases.get(id) || resources.find(item => item.id === id)?.replacedBy || null;
  [...ids.keys(), ...aliases.keys()].forEach(start => { const seen = new Set(); let current = start; while (current) { if (seen.has(current)) { issues.push(issue("FAIL", "IDENTITY_CYCLE", `Alias or replacement cycle includes ${current}.`, start)); break; } seen.add(current); current = resolveNext(current); } });
  resources.filter(resource => resource.replacedBy).forEach(resource => { if (!ids.has(resource.replacedBy) && !aliases.has(resource.replacedBy)) issues.push(issue("FAIL", "UNKNOWN_REPLACEMENT", `Replacement target does not exist: ${resource.replacedBy}.`, resource.id)); });

  return issues;
}

module.exports = { validateCatalogue, isHttps, isInternal, exactLaunch };
