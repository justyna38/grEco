import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext.jsx';

const PRODUCTS = [
  {
    id: 'oranges-bio',
    name: 'Oranges bio de la vallée',
    category: 'Fruits',
    price: '3,90 € / kg',
    origin: 'Vallée du Grésivaudan (38)',
    image: '/images/orange.png',
    tags: ['Bio', 'Circuit court']
  },
  {
    id: 'citrons-italie',
    name: 'Citrons jaunes non traités',
    category: 'Fruits',
    price: '4,20 € / kg',
    origin: 'Producteur engagé, Italie du Sud',
    image: '/images/lemon.png',
    tags: ['Zéro traitement après récolte']
  },
  {
    id: 'pain-cereales',
    name: 'Pain aux céréales locales',
    category: 'Boulangerie',
    price: '4,80 € / pièce',
    origin: 'Boulangerie des Alpes, Grenoble',
    image: '/images/pain.png',
    tags: ['Farines locales', 'Levain naturel']
  },
  {
    id: 'kiwis-isere',
    name: 'Kiwis de l’Isère',
    category: 'Fruits',
    price: '3,60 € / barquette',
    origin: 'Ferme des Écrins (38)',
    image: '/images/kiwi.png',
    tags: ['Récolte de saison']
  },
  {
    id: 'bananes-equitable',
    name: 'Bananes équitables',
    category: 'Fruits',
    price: '2,95 € / kg',
    origin: 'Coopérative engagée, commerce équitable',
    image: '/images/banane.png',
    tags: ['Équitable', 'Transport optimisé']
  },
  {
    id: 'legumineuses-vrac',
    name: 'Mélange de légumineuses en vrac',
    category: 'Épicerie & vrac',
    price: '6,50 € / kg',
    origin: 'Producteurs partenaires en France',
    image: '/images/bean.png',
    tags: ['Zéro emballage', 'Riche en protéines']
  },
  {
    id: 'pommes-vercors',
    name: 'Pommes du Vercors',
    category: 'Fruits',
    price: '2,80 € / kg',
    origin: 'Vergers du Vercors (38)',
    image: '/images/pomme.png',
    tags: ['Culture raisonnée']
  }
];

function ProduitsPage() {
  const { user } = useAuth();

  return (
    <div className="page">
      <Helmet>
        <title>Produits à acheter – GrEco</title>
        <meta
          name="description"
          content="Découvrez une sélection de produits locaux et écoresponsables disponibles sur le marché GrEco : fruits, pain, épicerie vrac et plus encore."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/produits" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Votre marché</p>
        <h1 className="page-title">Produits à acheter sur GrEco</h1>
        <p className="page-lead">
          {user
            ? `Bienvenue ${user.name}, voici un exemple de sélection que vous pouvez retrouver sur le marché GrEco.`
            : "Voici un aperçu des produits locaux et engagés proposés sur GrEco."}
        </p>
      </header>

      <section className="section">
        <div className="products-hero card-soft">
          <div>
            <p className="tagline">
              Chaque fiche produit met en avant l&apos;origine, les engagements du producteur et
              l&apos;impact écologique associé.
            </p>
            <ul className="checklist">
              <li>Origine géographique claire pour chaque produit</li>
              <li>Mise en avant des filières bio, raisonnées ou équitables</li>
              <li>Logique de panier simple à comprendre pour l&apos;utilisateur final</li>
            </ul>
          </div>
          <div className="chips-kpi">
            <span className="badge-soft">Parcours e-commerce en démo</span>
            <span className="badge-soft">Visuel inspiré d&apos;un vrai catalogue</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Sélection de produits</h2>
          <p className="section-sub">
            Une base parfaite pour simuler un panier et tester un futur tunnel de commande.
          </p>
        </div>

        <div className="grid grid-3 products-grid">
          {PRODUCTS.map((product) => (
            <article key={product.id} className="card product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-content">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-sub">
                  <span className="product-category">{product.category}</span> ·{' '}
                  <span className="product-origin">{product.origin}</span>
                </p>
                <p className="product-price">{product.price}</p>
                <div className="pill-group">
                  {product.tags.map((tag) => (
                    <span key={tag} className="pill-small">
                      {tag}
                    </span>
                  ))}
                </div>
                <button type="button" className="btn btn-primary product-btn" disabled>
                  Ajouter au panier (démo)
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="note">
          Cette page illustre la future expérience e-commerce de GrEco. Les prix et informations sont
          donnés à titre d&apos;exemple pour les tests.
        </p>
      </section>
    </div>
  );
}

export default ProduitsPage;

