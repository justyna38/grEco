import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function EngagementsPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Nos engagements – GrEco</title>
        <meta
          name="description"
          content="Découvrez les engagements de GrEco : circuits courts, meilleure rémunération des producteurs, transparence, et expérience utilisateur simple pour consommer local à Grenoble."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/engagements" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Engagements</p>
        <h1 className="page-title">Une marketplace alignée avec ses valeurs.</h1>
        <p className="page-lead">
          GrEco est née d&apos;un constat : il existe déjà une forte envie de consommer local à
          Grenoble, mais peu d&apos;outils simples pour le faire au quotidien. Nos engagements
          structurent la manière dont la plateforme est conçue.
        </p>
      </header>

      <section className="section">
        <div className="grid grid-3">
          <article className="card-soft">
            <h2 className="card-title">Circuits courts par défaut</h2>
            <p className="card-sub">
              La sélection des producteurs est centrée sur la proximité géographique avec la
              métropole grenobloise.
            </p>
            <ul className="checklist">
              <li>Rayon de 30 à 50 km autour de Grenoble</li>
              <li>Priorité aux producteurs déjà engagés en circuit court</li>
              <li>Transparence sur la localisation de chaque acteur</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="card-title">Meilleure rémunération des producteurs</h2>
            <p className="card-sub">
              GrEco vise à réduire le poids des intermédiaires afin que la valeur reste au plus
              près du terrain.
            </p>
            <ul className="checklist">
              <li>Commission pensée pour rester soutenable</li>
              <li>Dialogue permanent avec les producteurs partenaires</li>
              <li>Prix construits avec eux, pas contre eux</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="card-title">Expérience utilisateur fluide</h2>
            <p className="card-sub">
              Un outil doit être simple à utiliser, sinon il n&apos;est pas utilisé – même s&apos;il
              est vertueux.
            </p>
            <ul className="checklist">
              <li>Interface mobile-first</li>
              <li>Navigation rapprochant les codes des apps de livraison</li>
              <li>Informations claires sur l&apos;origine et l&apos;impact</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="two-column">
          <article className="card-soft">
            <h2 className="section-title">Une plateforme ancrée dans son territoire</h2>
            <p className="section-sub">
              GrEco n&apos;a pas vocation à couvrir toute la France, mais à très bien servir un
              territoire précis : la métropole grenobloise et ses alentours.
            </p>
            <ul className="checklist">
              <li>Prise en compte des spécificités locales (relief, météo, saisons)</li>
              <li>Collaboration avec les acteurs déjà engagés (AMAP, coopératives...)</li>
              <li>Écoute active des besoins des producteurs et des habitants</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="section-title">Transparence et pédagogie</h2>
            <p className="section-sub">
              L&apos;objectif n&apos;est pas seulement de faciliter la commande, mais aussi de
              donner des repères pour faire évoluer les habitudes de consommation.
            </p>
            <ul className="checklist">
              <li>Informations claires sur les labels et pratiques</li>
              <li>Mise en avant des impacts positifs des circuits courts</li>
              <li>Contenus pédagogiques via le blog et les fiches produits</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="card-soft">
          <div className="two-column">
            <div>
              <p className="page-kicker">Envie d&apos;en discuter ?</p>
              <h2 className="section-title">Producteurs, habitants, partenaires : parlons-en.</h2>
              <p className="section-sub">
                GrEco est un projet évolutif. Vos retours, vos contraintes et vos idées sont
                essentiels pour que la plateforme serve vraiment le territoire.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Contacter GrEco
              </Link>
              <Link to="/blog" className="btn btn-outline">
                Lire les articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EngagementsPage;

