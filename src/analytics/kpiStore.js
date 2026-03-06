const STORAGE_KEY = 'greco_kpi_store_v1';

function safeJsonParse(raw, fallback) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function isBrowser() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function readKpiStore() {
  if (!isBrowser()) {
    return {
      updatedAt: null,
      totals: {},
      bySegment: {}
    };
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  return safeJsonParse(raw, { updatedAt: null, totals: {}, bySegment: {} });
}

export function clearKpiStore() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function trackKpiEvent(eventName, payload = {}) {
  if (!isBrowser() || !eventName) return;

  const store = readKpiStore();
  const segment = payload.user_segment || 'unknown';

  const next = {
    ...store,
    updatedAt: new Date().toISOString(),
    totals: { ...(store.totals || {}) },
    bySegment: { ...(store.bySegment || {}) }
  };

  next.totals[eventName] = (next.totals[eventName] || 0) + 1;
  next.bySegment[segment] = next.bySegment[segment] || {};
  next.bySegment[segment][eventName] = (next.bySegment[segment][eventName] || 0) + 1;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

