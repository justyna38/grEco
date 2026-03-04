import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const mockProducteurs = [
  {
    id: 'ferme-des-ecrins',
    nom: 'Ferme des Écrins',
    type: 'Maraîchage bio',
    localisation: 'Saint-Martin-d’Hères',
    distance: '7 km',
    labels: ['AB', 'Circuit court'],
    resume: 'Légumes de saison cultivés en agriculture biologique.'
  },
  {
    id: 'boulangerie-des-alpes',
    nom: 'Boulangerie des Alpes',
    type: 'Boulangerie artisanale',
    localisation: 'Grenoble',
    distance: '2 km',
    labels: ['Farines locales', 'Four à bois'],
    resume: 'Pains au levain pétris et cuits sur place avec des farines de la région.'
  },
  {
    id: 'fromagerie-du-vercors',
    nom: 'Fromagerie du Vercors',
    type: 'Fromages & produits laitiers',
    localisation: 'Vercors',
    distance: '35 km',
    labels: ['Local', 'Pâturage'],
    resume: 'Fromages de montagne issus d’un élevage respectueux du bien-être animal.'
  }
];

function ProducteursPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Producteurs &amp; commerces partenaires – GrEco</title>
        <meta
          name="description"
          content="Découvrez les producteurs et commerces écoresponsables partenaires de GrEco autour de Grenoble : maraîchers, éleveurs, boulangers, fromagers, épiceries bio..."
        />
        <link rel="canonical" href="https://www.greco-local.fr/producteurs" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Producteurs &amp; commerces</p>
        <h1 className="page-title">Une communauté de producteurs engagés.</h1>
        <p className="page-lead">
          GrEco donne de la visibilité aux producteurs et commerçants écoresponsables déjà actifs
          dans la région grenobloise, et leur permet de vendre plus régulièrement sans y consacrer
          davantage de temps.
        </p>
      </header>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Exemples de producteurs partenaires</h2>
          <p className="section-sub">
            La liste ci-dessous illustre le type de profils que GrEco met en avant. Chaque
            producteur dispose d&apos;une page dédiée avec son histoire, ses pratiques et ses
            produits.
          </p>
        </div>

        <div className="grid grid-3">
          {mockProducteurs.map((p) => (
            <article key={p.id} className="card-soft" itemScope itemType="https://schema.org/LocalBusiness">
              <div className="card-header">
                <div>
                  <h3 className="card-title" itemProp="name">
                    {p.nom}
                  </h3>
                  <p className="card-sub" itemProp="description">
                    {p.type}
                  </p>
                </div>
                <span className="badge">
                  <span aria-hidden="true">📍</span> {p.localisation}
                </span>
              </div>
              <p className="tagline">{p.resume}</p>
              <div className="pill-group" aria-label="Labels et engagements">
                {p.labels.map((label) => (
                  <span key={label} className="pill-small">
                    {label}
                  </span>
                ))}
              </div>
              <p className="note">Environ {p.distance} de Grenoble.</p>
              <Link to={`/producteurs/${p.id}`} className="btn btn-outline">
                Voir la fiche producteur
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card-soft">
          <div className="two-column">
            <div>
              <p className="page-kicker">Espace producteurs</p>
              <h2 className="section-title">Vous êtes producteur ou commerçant local ?</h2>
              <p className="section-sub">
                GrEco vous aide à toucher une nouvelle clientèle sensible au local et au bio, sans
                multiplier les permanences et les déplacements.
              </p>
              <ul className="checklist">
                <li>Création de fiche détaillée (histoire, pratiques, produits)</li>
                <li>Outil de commande simple pour vos clients</li>
                <li>Accompagnement à la mise en ligne de votre offre</li>
              </ul>
            </div>
            <div className="hero-actions">
              <Link to="/pour-les-producteurs" className="btn btn-primary">
                Découvrir l&apos;offre producteurs
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Discuter avec l&apos;équipe GrEco
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProducteursPage;

