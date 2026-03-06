import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function MentionsLegalesPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Mentions légales – GrEco</title>
        <meta
          name="description"
          content="Mentions légales du site GrEco, marketplace locale écoresponsable dédiée à la métropole grenobloise."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/mentions-legales" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Mentions légales</p>
        <h1 className="page-title">Mentions légales du site GrEco.</h1>
        <p className="page-lead">
          Cette plateforme est une démonstration réalisée dans le cadre d&apos;un hackathon (M2 IW).
          Les informations ci-dessous structurent les éléments attendus pour une mise en ligne
          conforme. Elles doivent être adaptées et validées avant une exploitation commerciale.
        </p>
      </header>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">Éditeur du site</h2>
          <p className="section-sub">Projet GrEco (équipe hackathon – démonstration).</p>
          <ul className="list-muted">
            <li>Nom du projet : GrEco</li>
            <li>Zone : Métropole grenobloise (Grenoble – Isère)</li>
            <li>
              Contact : <a href="mailto:demo@greco.local">demo@greco.local</a> (adresse de
              démonstration)
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">Hébergement</h2>
          <p className="section-sub">
            Le site est déployé sur une plateforme d&apos;hébergement cloud (type Vercel) assurant le
            chiffrement HTTPS et la distribution via CDN.
          </p>
          <ul className="list-muted">
            <li>Plateforme : Vercel (déploiement)</li>
            <li>Service : hébergement de pages statiques et CDN</li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">Propriété intellectuelle</h2>
          <p className="section-sub">
            Les contenus (textes, maquette, design) de cette démonstration sont destinés à un usage
            pédagogique. Toute réutilisation doit être autorisée par l&apos;équipe projet.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">Données personnelles & cookies</h2>
          <p className="section-sub">
            Les traitements de données et la gestion des cookies sont détaillés dans la{' '}
            <Link to="/confidentialite">politique de confidentialité</Link>. Les cookies de mesure
            d&apos;audience ne sont activés qu&apos;après consentement explicite.
          </p>
        </article>
      </section>
    </div>
  );
}

export default MentionsLegalesPage;

