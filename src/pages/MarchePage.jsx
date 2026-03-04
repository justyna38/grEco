import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function MarchePage() {
  const categories = [
    {
      title: 'Fruits & légumes de saison',
      subtitle:
        'Maraîchers engagés sur la saisonnalité et des pratiques bio ou raisonnées.',
      image: '/images/fruits-legumes.jpg',
      checklist: [
        'Calendrier de saisonnalité mis en avant',
        'Origine précise (commune, exploitation)',
        "Possibilité de paniers prêts à l'emploi",
      ],
    },
    {
      title: 'Produits laitiers & œufs',
      subtitle:
        'Fromagers, éleveurs, fermes laitières qui privilégient le bien-être animal.',
      image: '/images/Lacteos.jpg',
      checklist: [
        "Traçabilité de l'élevage",
        'Labels et pratiques détaillés',
        'Produits fermiers et locaux',
      ],
    },
    {
      title: 'Pain, épicerie & vrac',
      subtitle:
        'Boulangeries, épiceries bio et commerces vrac de la métropole grenobloise.',
      image: '/images/pain-epicerie.jpg',
      checklist: [
        'Pain au levain, farines locales',
        'Épicerie sèche issue de filières responsables',
        'Réduction des emballages avec le vrac',
      ],
    },
  ];

  return (
    <div className="page">
      <Helmet>
        <title>Marché local – GrEco</title>
        <meta
          name="description"
          content="Découvrez le marché local GrEco : fruits, légumes, produits laitiers, pain, épicerie sèche et vrac issus de producteurs écoresponsables autour de Grenoble."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/marche" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Marché local</p>
        <h1 className="page-title">Toute l’offre locale en un seul endroit.</h1>
        <p className="page-lead">
          GrEco rassemble l'offre de producteurs et commerces écoresponsables
          situés dans un rayon de 30 à 50 km autour de Grenoble. Visualisez
          facilement les produits disponibles, leur origine et leur impact.
        </p>
      </header>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Catégories disponibles</h2>
          <p className="section-sub">
            Une vision claire du marché local pour construire un panier adapté à
            votre quotidien.
          </p>
        </div>
        <div className="grid grid-3 products-grid">
          {categories.map((cat, index) => (
            <article key={index} className="card product-card category-card">
              <div className="product-image-wrapper">
                <img
                  src={cat.image}
                  alt={`${cat.title} - Marché GrEco`}
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <h3 className="card-title">{cat.title}</h3>
                <p className="card-sub">{cat.subtitle}</p>
                <ul className="checklist product-checklist">
                  {cat.checklist.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            Une expérience pensée pour la simplicité
          </h2>
          <p className="section-sub">
            L'objectif de GrEco est de rendre les circuits courts aussi fluides
            qu'une application de livraison classique.
          </p>
        </div>
        <div className="two-column">
          <article className="card-soft">
            <h3 className="card-title">Recherche et filtres</h3>
            <p className="tagline">
              Filtrez par type de produit, commune, label, mode de production ou
              impact.
            </p>
            <ul className="checklist">
              <li>Focus sur le bio, le raisonné et les circuits certifiés</li>
              <li>Affichage clair des distances et du lieu de production</li>
              <li>Mise en avant des produits à faible empreinte carbone</li>
            </ul>
          </article>
          <article className="card-soft">
            <h3 className="card-title">Livraison ou retrait</h3>
            <p className="tagline">
              Choisissez le créneau qui s'intègre le mieux à votre semaine.
            </p>
            <ul className="checklist">
              <li>Créneaux flexibles de retrait chez les partenaires</li>
              <li>Livraison à domicile ou en point de collecte</li>
              <li>Optimisation des tournées pour limiter les trajets</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="card-soft">
          <div className="two-column">
            <div>
              <p className="page-kicker">Prochaine étape</p>
              <h2 className="section-title">
                Envie de voir vos producteurs préférés sur GrEco ?
              </h2>
              <p className="section-sub">
                Vous fréquentez déjà un marché, une AMAP ou une épicerie engagée
                ? Proposez-leur de rejoindre GrEco pour faciliter vos achats au
                quotidien.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/producteurs" className="btn btn-primary">
                Voir les producteurs
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Proposer un commerce
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MarchePage;
