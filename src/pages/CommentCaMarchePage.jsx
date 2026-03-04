import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function CommentCaMarchePage() {
  return (
    <div className="page">
      <Helmet>
        <title>Comment ça marche ? – GrEco</title>
        <meta
          name="description"
          content="Découvrez comment fonctionne GrEco : sélection des producteurs, commande en ligne, livraison ou retrait autour de Grenoble et suivi de votre impact écologique."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/comment-ca-marche" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Fonctionnement</p>
        <h1 className="page-title">Simple pour vous, soutenable pour le territoire.</h1>
        <p className="page-lead">
          GrEco reprend les codes des applications de livraison que vous utilisez déjà, tout en
          étant conçu pour respecter le rythme des producteurs et la réalité des circuits courts.
        </p>
      </header>

      <section className="section">
        <div className="grid grid-3">
          <article className="card-soft">
            <h2 className="card-title">1. Je sélectionne mes produits</h2>
            <p className="card-sub">
              Depuis l&apos;app, parcourez les rayons du marché local : fruits, légumes, fromages,
              pain, épicerie...
            </p>
            <ul className="checklist">
              <li>Filtres par type de produit, label, commune</li>
              <li>Origine et distance affichées</li>
              <li>Visibilité sur la saisonnalité</li>
            </ul>
          </article>

          <article className="card-soft">
            <h2 className="card-title">2. Je choisis livraison ou retrait</h2>
            <p className="card-sub">
              Adaptez la logistique à votre semaine : retrait sur un créneau défini ou livraison à
              domicile / point relais.
            </p>
            <ul className="checklist">
              <li>Créneaux concentrés pour optimiser les tournées</li>
              <li>Points de retrait chez des partenaires locaux</li>
              <li>Livraison coordonnée pour réduire les trajets</li>
            </ul>
          </article>

          <article className="card-soft">
            <h2 className="card-title">3. Je suis mon impact</h2>
            <p className="card-sub">
              À chaque commande, visualisez les kilomètres économisés et l&apos;impact estimé en
              CO₂.
            </p>
            <ul className="checklist">
              <li>Comparaison avec une commande &quot;classique&quot;</li>
              <li>Suivi de votre consommation locale dans le temps</li>
              <li>Mise en avant des produits les plus vertueux</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="two-column">
          <article className="card-soft">
            <h2 className="section-title">Ce qui change pour les producteurs</h2>
            <p className="section-sub">
              GrEco ne remplace pas les marchés ni les ventes en AMAP, mais les complète en
              simplifiant la partie commande et en améliorant la régularité des ventes.
            </p>
            <ul className="checklist">
              <li>Moins de temps passé à gérer les commandes à la main</li>
              <li>Visibilité accrue au-delà de la clientèle habituelle</li>
              <li>Meilleure rémunération en limitant les intermédiaires</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="section-title">Une expérience familière pour les utilisateurs</h2>
            <p className="section-sub">
              L&apos;interface reprend les usages déjà ancrés des applications de livraison :
              navigation par rayons, panier, suivi d&apos;étape... mais avec un ancrage 100 % local.
            </p>
            <ul className="checklist">
              <li>Interface mobile-first</li>
              <li>Mise en avant de la transparence plutôt que de la vitesse à tout prix</li>
              <li>Accompagnement pédagogique sur l&apos;impact des choix de consommation</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="card-soft">
          <div className="two-column">
            <div>
              <p className="page-kicker">Envie d&apos;en voir plus ?</p>
              <h2 className="section-title">Découvrez les engagements et l&apos;impact de GrEco.</h2>
              <p className="section-sub">
                Au-delà de l&apos;outil, GrEco repose sur un positionnement clair : circuits courts,
                meilleure rémunération et réduction de l&apos;empreinte carbone alimentaire.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/impact-ecologique" className="btn btn-primary">
                Impact écologique
              </Link>
              <Link to="/engagements" className="btn btn-outline">
                Nos engagements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommentCaMarchePage;

