import { useEffect } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext.jsx';

const DEFAULT_MEASUREMENT_ID = 'G-2M18T5CWWP';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function initGtag(measurementId) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('js', new Date());
  window.gtag('set', {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });
}

export default function GoogleAnalytics() {
  const { analytics: analyticsEnabled } = useCookieConsent();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.__greco_analytics_enabled = Boolean(analyticsEnabled);

    if (!analyticsEnabled) {
      return;
    }

    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || DEFAULT_MEASUREMENT_ID;
    const src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;

    if (window.__greco_ga_loaded) {
      return;
    }

    loadScript(src)
      .then(() => {
        initGtag(measurementId);
        window.__greco_ga_loaded = true;
      })
      .catch(() => {
        // si le chargement échoue, on garde l'app fonctionnelle
      });
  }, [analyticsEnabled]);

  return null;
}

