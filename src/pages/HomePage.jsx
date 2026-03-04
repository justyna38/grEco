import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="page" itemScope itemType="https://schema.org/DiscoverAction">
      <Helmet>
        <title>GrEco – Marketplace locale écoresponsable à Grenoble</title>
        <meta
          name="description"
          content="GrEco simplifie l&apos;accès aux producteurs et commerces écoresponsables situés à moins de 50 km de Grenoble. Commandez local, en quelques clics."
        />
        <link rel="canonical" href="https://www.greco-local.fr/" />
      </Helmet>

      <header className="page-header hero">
        <section className="hero-main">
          <div className="pill">
            <span aria-hidden="true">📍</span> Métropole grenobloise · 30–50 km
          </div>
          <h1 className="page-title" itemProp="name">
            La marketplace locale qui aligne vos courses avec vos valeurs.
          </h1>
          <p className="page-lead" itemProp="description">
            GrEco connecte les consommateurs de la métropole grenobloise avec des producteurs et
            commerces écoresponsables triés sur le volet. Circuits courts, saisonnalité et
            transparence, sans complexité logistique.
          </p>

          <div className="hero-actions">
            <Link to="/marche" className="btn btn-primary">
              Découvrir le marché local
            </Link>
            <Link to="/pour-les-producteurs" className="btn btn-outline">
              Vous êtes producteur ?
            </Link>
          </div>

          <div className="hero-badge-row" aria-label="Bénéfices clés">
            <span className="hero-badge">
              <span aria-hidden="true">🌱</span> Circuits courts et saisonnalité
            </span>
            <span className="hero-badge">
              <span aria-hidden="true">🚲</span> Livraison ou retrait flexible
            </span>
            <span className="hero-badge">
              <span aria-hidden="true">🤝</span> Meilleure rémunération des producteurs
            </span>
          </div>
        </section>

        <aside aria-label="Illustration GrEco au marché" className="hero-media">
          <img
            src="/images/greco-hero.png"
            alt="Illustration GrEco avec les montagnes et un marché de producteurs"
            loading="lazy"
          />
        </aside>
      </header>

      <section className="section" aria-labelledby="section-pourquoi-greco">
        <div className="section-header">
          <p className="page-kicker">Pourquoi GrEco ?</p>
          <h2 id="section-pourquoi-greco" className="section-title">
            Pensé pour la réalité des producteurs et des habitants de Grenoble.
          </h2>
          <p className="section-sub">
            GrEco s&apos;adresse à celles et ceux qui veulent consommer mieux sans passer leur
            semaine à courir les marchés, et aux producteurs qui souhaitent vendre plus régulièrement
            sans alourdir leur charge de travail.
          </p>
        </div>

        <div className="grid grid-3">
          <article className="card-soft">
            <h3 className="card-title">Pour les consommateurs</h3>
            <p className="card-sub">
              Une app moderne pour faire ses courses locales en quelques minutes.
            </p>
            <ul className="checklist">
              <li>Vue d&apos;ensemble de l&apos;offre locale (bio, raisonné, vrac…)</li>
              <li>Livraison ou retrait selon vos contraintes</li>
              <li>Traçabilité et impact environnemental visibles</li>
            </ul>
          </article>

          <article className="card-soft">
            <h3 className="card-title">Pour les producteurs</h3>
            <p className="card-sub">
              Une vitrine commune pour gagner en visibilité sans perdre du temps en logistique.
            </p>
            <ul className="checklist">
              <li>Pages dédiées par producteur</li>
              <li>Commandes regroupées par créneau</li>
              <li>Support et accompagnement à la mise en ligne</li>
            </ul>
          </article>

          <article className="card-soft">
            <h3 className="card-title">Pour le territoire</h3>
            <p className="card-sub">
              Une économie plus résiliente, axée sur le circuit court et la qualité.
            </p>
            <ul className="checklist">
              <li>Valorisation des savoir-faire locaux</li>
              <li>Réduction du gaspillage via une meilleure visibilité</li>
              <li>Renforcement du lien entre ville et campagnes</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="section-kpis">
        <div className="section-header">
          <h2 id="section-kpis" className="section-title">
            Une plateforme pensée pour durer, pas pour faire un coup.
          </h2>
          <p className="section-sub">
            Le succès de GrEco se mesure en commandes régulières, en réachat et en satisfaction,
            pas seulement en téléchargements.
          </p>
        </div>

        <div className="two-column">
          <article className="card-soft">
            <h3 className="card-title">Nos indicateurs clés</h3>
            <p className="tagline">
              Objectif : devenir un réflexe hebdomadaire pour une partie des foyers grenoblois
              sensibles au local.
            </p>

            <div className="chips-kpi">
              <span className="badge-kpi">
                <span className="kpi-number">150–300</span>
                <span className="kpi-label">commandes/mois (court terme)</span>
              </span>
              <span className="badge-kpi">
                <span className="kpi-number">800–1 500</span>
                <span className="kpi-label">commandes/mois (moyen terme)</span>
              </span>
            </div>

            <ul className="list-muted">
              <li>Nombre de producteurs actifs</li>
              <li>Taux de réachat et panier moyen</li>
              <li>Satisfaction (NPS) et avis clients</li>
            </ul>
          </article>

          <article className="card-soft">
            <h3 className="card-title">Une traction déjà visible</h3>
            <p className="tagline">
              GrEco s&apos;appuie sur un terreau favorable : circuits courts déjà présents,
              habitants sensibilisés et habitude des apps de livraison.
            </p>
            <ul className="timeline">
              <li>
                Multiplication des AMAP, marchés, coopératives sur la région grenobloise.
              </li>
              <li>
                Population étudiante et active sensibilisée aux enjeux environnementaux, déjà prête
                à payer un peu plus pour mieux consommer.
              </li>
              <li>Usage massif des applications de livraison &quot;classiques&quot;.</li>
              <li>
                Besoin exprimé par les producteurs : vendre plus régulièrement, avec moins de
                contraintes de vente directe.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" aria-label="Photos du marché local">
        <div className="grid grid-2 photo-cards">
          <article className="card-soft image-card">
            <img
              src="/images/marche-plein-air.png"
              alt="Étals de fruits et légumes sur un marché de plein air"
              loading="lazy"
            />
          </article>
          <article className="card-soft image-card">
            <img
              src="/images/marche-interieur.png"
              alt="Productrice choisissant des légumes sur un marché couvert"
              loading="lazy"
            />
          </article>
        </div>
      </section>

      <section className="section" aria-label="Appels à l&apos;action">
        <div className="card-soft">
          <div className="two-column">
            <div>
              <p className="page-kicker">Prochaines étapes</p>
              <h2 className="section-title">
                Prêt à rejoindre les premiers utilisateurs de GrEco ?
              </h2>
              <p className="section-sub">
                Que vous soyez consommateur ou producteur, vous pouvez dès maintenant manifester
                votre intérêt pour être parmi les premiers à accéder à la plateforme.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Être tenu·e informé·e
              </Link>
              <Link to="/pour-les-producteurs" className="btn btn-outline">
                Rejoindre en tant que producteur
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

