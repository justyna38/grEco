export function pushDataLayerEvent(eventName, payload = {}) {
  if (typeof window === 'undefined' || !eventName) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...payload
  });
}

