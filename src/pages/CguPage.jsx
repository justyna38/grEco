import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function CguPage() {
  return (
    <div className="page">
      <Helmet>
        <title>CGU – GrEco</title>
        <meta
          name="description"
          content="Conditions Générales d'Utilisation (CGU) de GrEco – exemple pédagogique pour une marketplace locale."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/cgu" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">CGU</p>
        <h1 className="page-title">Conditions Générales d&apos;Utilisation (exemple).</h1>
        <p className="page-lead">
          Cette page fournit un modèle de CGU pour GrEco. Elle doit être adaptée (éditeur, statut,
          parcours d&apos;achat, SAV, médiation, etc.) et validée avant toute mise en production.
        </p>
      </header>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">1. Objet</h2>
          <p className="section-sub">
            Les présentes Conditions Générales d&apos;Utilisation (CGU) définissent les règles
            d&apos;accès et d&apos;utilisation du site GrEco (ci-après « la Plateforme »).
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">2. Définitions</h2>
          <ul className="list-muted">
            <li>
              <strong>Utilisateur</strong> : toute personne naviguant sur la Plateforme.
            </li>
            <li>
              <strong>Client</strong> : Utilisateur disposant d&apos;un compte et réalisant une
              commande.
            </li>
            <li>
              <strong>Producteur / Vendeur</strong> : acteur référencé proposant des produits.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">3. Accès au service</h2>
          <ul className="list-muted">
            <li>
              L&apos;accès à la Plateforme est gratuit hors coûts de connexion internet.
            </li>
            <li>
              Certaines fonctionnalités peuvent nécessiter la création d&apos;un compte (ex. panier,
              commande).
            </li>
            <li>
              L&apos;éditeur peut suspendre l&apos;accès pour maintenance, sécurité ou amélioration, sans
              que cela n&apos;ouvre droit à indemnisation.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">4. Compte utilisateur</h2>
          <ul className="list-muted">
            <li>
              L&apos;Utilisateur s&apos;engage à fournir des informations exactes lors de la création du
              compte.
            </li>
            <li>
              L&apos;Utilisateur est responsable de la confidentialité de ses identifiants.
            </li>
            <li>
              Toute utilisation frauduleuse doit être signalée dès que possible.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">5. Règles de bonne conduite</h2>
          <ul className="list-muted">
            <li>
              Il est interdit de perturber le fonctionnement de la Plateforme (test d&apos;intrusion,
              surcharge, automatisation abusive, etc.).
            </li>
            <li>
              Il est interdit de tenter d&apos;accéder à des données non autorisées.
            </li>
            <li>
              Le contenu publié (si applicable) doit respecter la loi (diffamation, haine, etc.).
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">6. Propriété intellectuelle</h2>
          <p className="section-sub">
            La structure, l&apos;interface, les contenus et éléments graphiques de la Plateforme sont
            protégés. Toute reproduction non autorisée est interdite, sauf exceptions légales.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">7. Responsabilité</h2>
          <ul className="list-muted">
            <li>
              La Plateforme est fournie « en l&apos;état » (exemple pédagogique). L&apos;éditeur ne
              garantit pas l&apos;absence d&apos;erreurs.
            </li>
            <li>
              Les informations présentées (produits, prix, disponibilité) doivent être confirmées
              dans une version réelle avant paiement.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">8. Données personnelles & cookies</h2>
          <p className="section-sub">
            Les modalités de traitement des données et l&apos;usage des cookies sont détaillés dans la{' '}
            <Link to="/confidentialite">politique de confidentialité</Link> et la{' '}
            <Link to="/cookies">politique cookies</Link>.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">9. Droit applicable</h2>
          <p className="section-sub">
            Les CGU sont soumises au droit français. Dans une version réelle, des clauses
            complémentaires (médiation, tribunal compétent) doivent être ajoutées selon le statut de
            l&apos;éditeur et le public visé.
          </p>
        </article>
      </section>
    </div>
  );
}

export default CguPage;

