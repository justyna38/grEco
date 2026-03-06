import { Link } from 'react-router-dom';
import { useCookieConsent } from '../context/CookieConsentContext.jsx';

function CookieBanner() {
  const { isBannerOpen, setAnalytics, rejectAll } = useCookieConsent();

  if (!isBannerOpen) {
    return null;
  }

  const handleAcceptAnalytics = () => {
    setAnalytics(true);
  };

  const handleRejectAnalytics = () => {
    rejectAll();
  };

  return (
    <section
      className="cookie-banner"
      aria-label="Préférences de cookies"
    >
      <div className="cookie-banner-inner container">
        <div className="cookie-banner-text">
          <p className="cookie-banner-title">Cookies pour mesurer l&apos;usage du site</p>
          <p className="cookie-banner-description">
            Nous utilisons des cookies de mesure d&apos;audience afin de mieux comprendre l&apos;usage
            de GrEco et d&apos;améliorer le service. Vous pouvez accepter ou refuser ces cookies.
            Votre choix sera enregistré pendant plusieurs mois.{' '}
            <Link to="/cookies">En savoir plus</Link>
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="btn btn-outline cookie-banner-button"
            onClick={handleRejectAnalytics}
          >
            Continuer sans cookies d&apos;analyse
          </button>
          <button
            type="button"
            className="btn btn-primary cookie-banner-button"
            onClick={handleAcceptAnalytics}
          >
            Accepter les cookies d&apos;analyse
          </button>
        </div>
      </div>
    </section>
  );
}

export default CookieBanner;

