import { Helmet } from 'react-helmet-async';

function MentionsLegalesPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Mentions légales – GrEco</title>
        <meta
          name="description"
          content="Mentions légales du site GrEco, marketplace locale écoresponsable dédiée à la métropole grenobloise."
        />
        <link rel="canonical" href="https://www.greco-local.fr/mentions-legales" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Mentions légales</p>
        <h1 className="page-title">Mentions légales du site GrEco.</h1>
        <p className="page-lead">
          Les informations ci-dessous sont fournies à titre d&apos;exemple pour la maquette du
          site. Elles devront être complétées et validées juridiquement avant mise en production.
        </p>
      </header>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">Éditeur du site</h2>
          <p className="section-sub">
            GrEco, marketplace locale écoresponsable (structure à préciser : entreprise, association...).
          </p>
          <ul className="list-muted">
            <li>Dénomination sociale : GrEco (à compléter)</li>
            <li>Adresse : Grenoble, France (à compléter)</li>
            <li>Contact : adresse e-mail ou téléphone (à compléter)</li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">Hébergement</h2>
          <p className="section-sub">Les informations relatives à l&apos;hébergeur sont à préciser.</p>
          <ul className="list-muted">
            <li>Nom de l&apos;hébergeur</li>
            <li>Adresse postale</li>
            <li>Coordonnées</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default MentionsLegalesPage;

