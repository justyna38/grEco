import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../context/CookieConsentContext.jsx';

function CookiesPage() {
  const { openPreferences } = useCookieConsent();

  return (
    <div className="page">
      <Helmet>
        <title>Politique cookies – GrEco</title>
        <meta
          name="description"
          content="Politique cookies de GrEco : cookies strictement nécessaires, mesure d'audience, durée de conservation et gestion du consentement."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/cookies" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Cookies</p>
        <h1 className="page-title">Politique cookies (exemple).</h1>
        <p className="page-lead">
          Cette page décrit, à titre d&apos;exemple pédagogique, les cookies et traceurs susceptibles
          d&apos;être utilisés sur GrEco, ainsi que la manière de gérer vos préférences conformément
          aux recommandations de la CNIL.
        </p>
      </header>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p className="section-sub">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, mobile,
            tablette) lors de la consultation d&apos;un site. Il permet de stocker des informations
            (préférences, session, mesure d&apos;audience) pendant une durée limitée.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">2. Cookies utilisés par GrEco</h2>
          <p className="section-sub">
            GrEco est conçue pour limiter les traceurs. Les cookies de mesure d&apos;audience ne sont
            activés <strong>qu&apos;après votre consentement</strong>.
          </p>

          <ul className="list-muted">
            <li>
              <strong>Cookie de consentement</strong> :{' '}
              <code>greco_cookie_consent</code> (enregistre votre choix analytics). Ce cookie ne
              sert pas au suivi publicitaire et permet uniquement de mémoriser vos préférences.
            </li>
            <li>
              <strong>Cookies strictement nécessaires</strong> : cookies techniques (session,
              sécurité) si et seulement si la version déployée en a besoin (authentification,
              panier, etc.).
            </li>
            <li>
              <strong>Cookies de mesure d&apos;audience (optionnels)</strong> : si vous acceptez, une
              solution de mesure (ex. Google Analytics 4) peut déposer des cookies (souvent{' '}
              <code>_ga</code>, <code>_ga_*</code>) et envoyer des événements agrégés afin de
              comprendre l&apos;usage global du site.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">3. Durées de conservation (indicatif)</h2>
          <ul className="list-muted">
            <li>
              <strong>Consentement</strong> : jusqu&apos;à 12 mois (recommandation courante), puis
              sollicitation à nouveau.
            </li>
            <li>
              <strong>Mesure d&apos;audience</strong> : durée à paramétrer dans l&apos;outil (objectif :
              limiter au strict nécessaire).
            </li>
          </ul>
          <p className="section-sub">
            Dans une version réelle, ces durées doivent être détaillées et validées en fonction des
            cookies effectivement déposés.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">4. Gérer vos préférences</h2>
          <p className="section-sub">
            Vous pouvez modifier votre choix à tout moment via le lien{' '}
            <strong>Préférences cookies</strong> en pied de page, ou en cliquant ci-dessous.
          </p>
          <div>
            <button type="button" className="btn btn-outline" onClick={openPreferences}>
              Ouvrir les préférences cookies
            </button>
          </div>
          <p className="section-sub">
            Pour en savoir plus sur les traitements de données, consultez la{' '}
            <Link to="/confidentialite">politique de confidentialité</Link>.
          </p>
        </article>
      </section>
    </div>
  );
}

export default CookiesPage;

