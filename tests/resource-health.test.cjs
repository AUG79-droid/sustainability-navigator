"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { checkOne, classifyBody } = require("../governance/check-resource-health.cjs");

const response = (status, url, body = "", contentType = "text/html") => ({ status, ok: status >= 200 && status < 300, url, headers: { get: name => name === "content-type" ? contentType : null }, body: true, text: async () => body });
test("classifies mocked HTTP 200", async () => assert.equal((await checkOne({ resourceId: "r", url: "https://example.test/" }, { fetchImpl: async () => response(200, "https://example.test/", "Learning") })).state, "working"));
test("classifies redirects", async () => assert.equal((await checkOne({ resourceId: "r", url: "https://example.test/old/" }, { fetchImpl: async () => response(200, "https://example.test/new/", "Learning") })).state, "redirect"));
test("classifies GitHub Pages 404", async () => assert.equal((await checkOne({ resourceId: "r", url: "https://example.github.io/course/" }, { fetchImpl: async () => response(404, "https://example.github.io/course/") })).state, "pages-404"));
test("classifies timeout after one retry", async () => { let calls = 0; const error = new Error("timed out"); error.name = "AbortError"; const result = await checkOne({ resourceId: "r", url: "https://example.test/" }, { fetchImpl: async () => { calls += 1; throw error; } }); assert.equal(result.state, "timeout"); assert.equal(calls, 2); });
test("classifies placeholders and repository-only pages", () => { assert.equal(classifyBody("Coming soon"), "placeholder"); assert.equal(classifyBody("Repository https://github.com/example/course"), "repository-only"); });
