import { trackKpiEvent } from './kpiStore.js';

export function pushDataLayerEvent(eventName, payload = {}) {
  if (typeof window === 'undefined' || !eventName) return;

  window.dataLayer = window.dataLayer || [];
  const userSegment = window.__greco_user_segment || payload.user_segment;
  const enrichedPayload = {
    event: eventName,
    ...payload,
    ...(userSegment ? { user_segment: userSegment } : {})
  };

  window.dataLayer.push(enrichedPayload);

  if (window.__greco_analytics_enabled && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, enrichedPayload);
    } catch {
      // tracking non bloquant pour l'UX
    }
  }

  if (window.__greco_analytics_enabled) {
    trackKpiEvent(eventName, enrichedPayload);
  }
}

