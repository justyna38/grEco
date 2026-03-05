import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from '../utils/cookies.js';

const COOKIE_NAME = 'greco_cookie_consent';
const COOKIE_LIFETIME_DAYS = 365;

const CookieConsentContext = createContext(null);

function loadInitialState() {
  const raw = getCookie(COOKIE_NAME);

  if (!raw) {
    return {
      consent: { analytics: false },
      hasAnswered: false,
      isBannerOpen: true
    };
  }

  try {
    const parsed = JSON.parse(raw);
    const analytics = Boolean(parsed.analytics);
    const hasAnswered = Boolean(parsed.hasAnswered);

    return {
      consent: { analytics },
      hasAnswered,
      isBannerOpen: false
    };
  } catch {
    return {
      consent: { analytics: false },
      hasAnswered: false,
      isBannerOpen: true
    };
  }
}

export function CookieConsentProvider({ children }) {
  const [{ consent, hasAnswered, isBannerOpen }, setState] = useState(loadInitialState);

  useEffect(() => {
    if (!hasAnswered) return;

    const payload = {
      analytics: Boolean(consent.analytics),
      hasAnswered: true,
      updatedAt: new Date().toISOString()
    };

    setCookie(COOKIE_NAME, JSON.stringify(payload), COOKIE_LIFETIME_DAYS);
  }, [consent, hasAnswered]);

  const setAnalytics = (enabled) => {
    setState((prev) => ({
      ...prev,
      consent: { ...prev.consent, analytics: Boolean(enabled) },
      hasAnswered: true,
      isBannerOpen: false
    }));
  };

  const acceptAll = () => {
    setAnalytics(true);
  };

  const rejectAll = () => {
    setAnalytics(false);
  };

  const openPreferences = () => {
    setState((prev) => ({
      ...prev,
      isBannerOpen: true
    }));
  };

  const closeBanner = () => {
    setState((prev) => ({
      ...prev,
      isBannerOpen: false
    }));
  };

  const value = {
    consent,
    analytics: Boolean(consent.analytics),
    hasAnswered,
    isBannerOpen,
    setAnalytics,
    acceptAll,
    rejectAll,
    openPreferences,
    closeBanner
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }

  return context;
}

