"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const passport = require("../mission-passport.js");

const catalogue = { resources: [
  { id: "mission-energy", kind: "simulator" },
  { id: "fuel-sovereignty", kind: "simulator" },
  { id: "material-sovereignty", kind: "simulator" },
  { id: "airbus-strategic-resilience-intelligence", kind: "application" },
  { id: "tas-sustainability-knowledge-check", kind: "quiz" }
]};
const pathsData = { paths: [{ id: "path-one", title: { es: "Ruta 1", en: "Path 1" } }] };
const empty = () => ({ resources: {}, paths: {}, preferences: { currentPathId: null } });

test("empty passport does not invent XP, achievements or weekly records", () => {
  const out = passport.evaluate(empty(), catalogue, pathsData, new Date("2026-11-17T12:00:00Z"));
  assert.equal(out.xp, 0);
  assert.equal(out.badgeCount, 0);
  assert.equal(out.weeklyXP, 0);
  assert.equal(out.level.index, 1);
});

test("first completions only; unique path bonus despite revisions; Monday week boundary", () => {
  const state = empty();
  state.resources["mission-energy"] = { status: "completed", completedAt: "2026-11-16T12:00:00Z", completionSource: "manual" };
  state.resources["fuel-sovereignty"] = { status: "completed", completedAt: "2026-11-09T12:00:00Z", completionSource: "internal-report" };
  state.resources["material-sovereignty"] = { status: "in_progress", completedAt: null };
  state.paths["path-one"] = { completionHistory: [
    { completedAt: "2026-11-16T13:00:00Z", pathRevision: 1 },
    { completedAt: "2026-11-17T13:00:00Z", pathRevision: 2 }
  ] };
  const original = JSON.stringify(state);
  const out = passport.evaluate(state, catalogue, pathsData, new Date("2026-11-17T12:00:00Z"));
  assert.equal(out.xp, 210);
  assert.equal(out.resourceXP, 110);
  assert.equal(out.pathXP, 100);
  assert.equal(out.weeklyXP, 155);
  assert.equal(out.previousXP, 55);
  assert.equal(out.pathCount, 1);
  assert.equal(out.badges.find(b=>b.id==="mission").earned, false);
  assert.equal(JSON.stringify(state),original);
});

test("evidence badge requires the two relevant completed activities", () => {
  const state = empty();
  state.resources["airbus-strategic-resilience-intelligence"] = { status: "completed", completedAt: "2026-11-16T09:00:00Z" };
  let out=passport.evaluate(state, catalogue, pathsData, new Date("2026-11-17T12:00:00Z"));
  assert.equal(out.badges.find(b=>b.id==="evidence").earned,false);
  state.resources["tas-sustainability-knowledge-check"] = { status: "completed", completedAt: "2026-11-16T10:00:00Z" };
  out=passport.evaluate(state, catalogue, pathsData, new Date("2026-11-17T12:00:00Z"));
  assert.equal(out.badges.find(b=>b.id==="evidence").earned,true);
});

test("level thresholds and rollover are deterministic", () => {
  assert.equal(passport.levelFor(149).index,1);
  assert.equal(passport.levelFor(150).index,2);
  assert.equal(passport.levelFor(1500).next,null);
  const state = empty();
  state.resources["mission-energy"] = { status: "completed", completedAt: "2026-11-16T12:00:00Z" };
  const out=passport.evaluate(state,catalogue,pathsData,new Date("2026-11-23T12:00:00Z"));
  assert.equal(out.xp,55);
  assert.equal(out.weeklyXP,0);
  assert.equal(out.previousXP,55);
  assert.equal(out.badges.find(b=>b.id==="energy").earned,true);
});
