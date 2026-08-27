(function (root, factory) {
  const model = typeof module === "object" && module.exports ? require("./progress-model.js") : root.SNProgressModel;
  const api = factory(model);
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.SNProgressStore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (model) {
  "use strict";

  const EXPORT_FORMAT = "sustainability-navigator-progress";

  function createMemoryStorage(initial = {}) {
    const values = new Map(Object.entries(initial));
    return {
      getItem: key => values.has(key) ? values.get(key) : null,
      setItem: (key, value) => { values.set(key, String(value)); },
      removeItem: key => { values.delete(key); },
      snapshot: () => Object.fromEntries(values)
    };
  }

  function createLocalStorageStore(storage, options = {}) {
    const key = options.key || model.STORAGE_KEY;
    const now = options.now || (() => new Date().toISOString());

    function load(catalogue, pathsData) {
      let raw;
      try {
        raw = storage.getItem(key);
      } catch (error) {
        return { ok: false, reason: "storage-unavailable", error, state: model.createEmptyState(catalogue?.version, pathsData?.version) };
      }
      if (raw === null) return { ok: true, empty: true, state: model.createEmptyState(catalogue?.version, pathsData?.version) };
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (error) {
        return { ok: false, reason: "corrupt", error, raw, state: model.createEmptyState(catalogue?.version, pathsData?.version) };
      }
      const migration = model.migrate(parsed);
      if (!migration.ok) return { ...migration, raw, state: model.createEmptyState(catalogue?.version, pathsData?.version) };
      const state = model.reconcile(migration.state, catalogue, pathsData);
      const errors = model.validateState(state);
      if (errors.length) return { ok: false, reason: "invalid", errors, raw, state: model.createEmptyState(catalogue?.version, pathsData?.version) };
      return { ok: true, state, migrated: Boolean(migration.migrated) };
    }

    function save(state) {
      const errors = model.validateState(state);
      if (errors.length) return { ok: false, reason: "invalid", errors };
      const next = model.clone(state);
      next.updatedAt = now();
      try {
        storage.setItem(key, JSON.stringify(next));
        return { ok: true, state: next };
      } catch (error) {
        return { ok: false, reason: "storage-unavailable", error };
      }
    }

    function reset() {
      try {
        storage.removeItem(key);
        return { ok: true };
      } catch (error) {
        return { ok: false, reason: "storage-unavailable", error };
      }
    }

    function exportProgress(state) {
      const errors = model.validateState(state);
      if (errors.length) return { ok: false, reason: "invalid", errors };
      return {
        ok: true,
        filename: `sustainability-hub-progress-${now().slice(0, 10)}.json`,
        json: JSON.stringify({ format: EXPORT_FORMAT, exportedAt: now(), progress: state }, null, 2)
      };
    }

    function previewImport(text, catalogue, pathsData) {
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (error) {
        return { ok: false, reason: "corrupt", error };
      }
      if (!parsed || parsed.format !== EXPORT_FORMAT || !parsed.progress) return { ok: false, reason: "invalid-format" };
      const migration = model.migrate(parsed.progress);
      if (!migration.ok) return migration;
      const state = model.reconcile(migration.state, catalogue, pathsData);
      const errors = model.validateState(state);
      if (errors.length) return { ok: false, reason: "invalid", errors };
      return {
        ok: true,
        exportedAt: typeof parsed.exportedAt === "string" ? parsed.exportedAt : null,
        state,
        summary: {
          resources: Object.keys(state.resources).length,
          completedResources: Object.values(state.resources).filter(item => item.status === "completed").length,
          paths: Object.keys(state.paths).length
        }
      };
    }

    function replaceImport(preview) {
      if (!preview?.ok || !preview.state) return { ok: false, reason: "invalid-preview" };
      return save(preview.state);
    }

    return { key, load, save, reset, exportProgress, previewImport, replaceImport };
  }

  return { EXPORT_FORMAT, createMemoryStorage, createLocalStorageStore };
});
