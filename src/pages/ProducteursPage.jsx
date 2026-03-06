import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { producteursList } from '../data/producteurs.mjs';

function ProducteursPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Producteurs & commerces partenaires – GrEco</title>
        <meta
          name="description"
          content="Découvrez les producteurs et commerces écoresponsables partenaires de GrEco autour de Grenoble : maraîchers, éleveurs, boulangers, fromagers, épiceries bio..."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/producteurs" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Producteurs & commerces</p>
        <h1 className="page-title">Une communauté de producteurs engagés.</h1>
        <p className="page-lead">
          GrEco donne de la visibilité aux producteurs et commerçants
          écoresponsables déjà actifs dans la région grenobloise, et leur permet
          de vendre plus régulièrement sans y consacrer davantage de temps.
        </p>
      </header>

      <section className="section">
        <div className="products-hero card-soft">
          <div>
            <p className="tagline">
              Chaque fiche producteur met en avant l'origine, les pratiques
              écoresponsables et l'impact local associé.
            </p>
            <ul className="checklist">
              <li>Origine géographique claire pour chaque producteur</li>
              <li>
                Mise en avant des filières bio, artisanales ou circuits courts
              </li>
              <li>Accès direct aux fiches détaillées et commandes</li>
            </ul>
          </div>
          <div className="chips-kpi">
            <span className="badge-soft">Annuaire producteurs</span>
            <span className="badge-soft">Visuels authentiques</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Nos producteurs partenaires</h2>
          <p className="section-sub">
            Une base parfaite pour découvrir les acteurs locaux et tester la
            navigation vers les fiches détaillées.
          </p>
        </div>

        <div className="grid grid-3 products-grid">
          {producteursList.map((p) => (
            <article key={p.id} className="card product-card producer-card">
              <div className="product-image-wrapper">
                <img
                  src={p.image}
                  alt={`${p.nom} - ${p.type}, ${p.localisation}`}
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <h3 className="card-title">{p.nom}</h3>
                <p className="card-sub">
                  <span className="product-category">{p.type}</span> ·{' '}
                  <span className="product-origin">{p.localisation}</span>
                </p>
                <p className="product-price distance-price">
                  ~{p.distance} de Grenoble
                </p>
                <div className="pill-group">
                  {p.labels.map((label) => (
                    <span key={label} className="pill-small">
                      {label}
                    </span>
                  ))}
                </div>
                <p className="product-description">{p.resume}</p>
                <Link
                  to={`/producteurs/${p.id}`}
                  className="btn btn-primary product-btn"
                >
                  Voir la fiche producteur
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="note">
          Ces fiches illustrent l'expérience future de GrEco. Les informations
          sont données à titre d'exemple.
        </p>
      </section>

      <section className="section">
        <div className="card-soft">
          <div className="two-column">
            <div>
              <p className="page-kicker">Espace producteurs</p>
              <h2 className="section-title">
                Vous êtes producteur ou commerçant local ?
              </h2>
              <p className="section-sub">
                GrEco vous aide à toucher une nouvelle clientèle sensible au
                local et au bio, sans multiplier les permanences et les
                déplacements.
              </p>
              <ul className="checklist">
                <li>
                  Création de fiche détaillée (histoire, pratiques, produits)
                </li>
                <li>Outil de commande simple pour vos clients</li>
                <li>Accompagnement à la mise en ligne de votre offre</li>
              </ul>
            </div>
            <div className="hero-actions">
              <Link to="/pour-les-producteurs" className="btn btn-primary">
                Découvrir l'offre producteurs
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Discuter avec l'équipe GrEco
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProducteursPage;
