"use strict";

const { issue } = require("./content-policy.cjs");
const sanitize = value => String(value ?? "").replace(/[<>\u0000-\u001f\u007f]/g, " ").replace(/(?:authorization|token|bearer|secret)\s*[:=]\s*\S+/gi, "[redacted]").slice(0, 240);
const classifyBody = body => /coming soon|under construction|placeholder/i.test(body || "") ? "placeholder" : /github\.com\/.+\/.+/i.test(body || "") && /repository/i.test(body || "") ? "repository-only" : null;

async function requestWithTimeout(fetchImpl, url, method, timeoutMs) {
  const controller = new AbortController(), timer = setTimeout(() => controller.abort(), timeoutMs);
  try { return await fetchImpl(url, { method, redirect: "follow", signal: controller.signal, headers: { "user-agent": "sustainability-hub-health-check" } }); }
  finally { clearTimeout(timer); }
}

async function responseSample(response, limit) {
  if (!response.body?.getReader) return sanitize((await response.text()).slice(0, limit));
  const reader = response.body.getReader(), decoder = new TextDecoder(); let sample = "", bytes = 0;
  try {
    while (bytes < limit) {
      const { value, done } = await reader.read(); if (done) break;
      const remaining = value.slice(0, Math.max(0, limit - bytes)); bytes += remaining.byteLength; sample += decoder.decode(remaining, { stream: bytes < limit });
    }
  } finally { await reader.cancel().catch(() => {}); }
  return sanitize(sample);
}

async function checkOne(target, options = {}) {
  const fetchImpl = options.fetchImpl || globalThis.fetch, timeoutMs = options.timeoutMs || 8000;
  if (!fetchImpl) return { ...target, state: "not-checked", issue: issue("WARNING", "FETCH_UNAVAILABLE", "Network check is unavailable.", target.resourceId) };
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      let response = await requestWithTimeout(fetchImpl, target.url, "HEAD", timeoutMs);
      if ([405, 501].includes(response.status) || (response.ok && response.headers?.get?.("content-type")?.includes("text/html"))) response = await requestWithTimeout(fetchImpl, target.url, "GET", timeoutMs);
      const finalUrl = sanitize(response.url || target.url), redirected = finalUrl.replace(/\/$/, "") !== target.url.replace(/\/$/, "");
      if (response.status === 404 && /github\.io/i.test(target.url)) return { ...target, state: "pages-404", status: 404, finalUrl };
      if (!response.ok) return { ...target, state: "http-failure", status: response.status, finalUrl };
      let sample = "";
      if (response.body && response.headers?.get?.("content-type")?.includes("text/html")) {
        sample = await responseSample(response, options.sampleBytes || 4096);
      }
      const bodyState = classifyBody(sample);
      return { ...target, state: bodyState || (redirected ? "redirect" : "working"), status: response.status, finalUrl, sample: bodyState ? sample.slice(0, 120) : undefined };
    } catch (error) { lastError = error; if (attempt === 0) continue; }
  }
  const timeout = lastError?.name === "AbortError";
  return { ...target, state: timeout ? "timeout" : "temporarily-unreachable", error: sanitize(lastError?.message) };
}

async function checkResourceHealth(catalogue, inventory = { records: [] }, options = {}) {
  const targets = [];
  (catalogue.resources || []).forEach(resource => Object.entries(resource.launches || {}).forEach(([language, url]) => { if (/^https:\/\//i.test(url)) targets.push({ resourceId: resource.id, language, url, lifecycle: resource.lifecycle }); }));
  (inventory.records || []).filter(record => record.launchUrl).forEach(record => targets.push({ resourceId: record.repositoryName, language: null, url: record.launchUrl, disposition: record.disposition }));
  const concurrency = Math.max(1, Math.min(options.concurrency || 4, 4)), results = new Array(targets.length); let cursor = 0;
  await Promise.all(Array.from({ length: concurrency }, async () => { while (cursor < targets.length) { const index = cursor++; results[index] = await checkOne(targets[index], options); } }));
  return results;
}

module.exports = { sanitize, classifyBody, responseSample, checkOne, checkResourceHealth };
