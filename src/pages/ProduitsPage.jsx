import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import { pushDataLayerEvent } from '../analytics/dataLayer.js';
import { usePageView } from '../analytics/usePageView.js';

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
  const { addToCart, cartCount } = useCart();

  usePageView({
    pageType: 'product_list',
    pageName: 'Produits à acheter',
    pagePath: '/produits'
  });

  const [quantities, setQuantities] = useState(() =>
    PRODUCTS.reduce((accumulator, product) => {
      accumulator[product.id] = 1;
      return accumulator;
    }, {})
  );

  const handleQuantityChange = (productId, delta) => {
    setQuantities((previous) => {
      const current = previous[productId] ?? 1;
      const next = Math.max(1, current + delta);
      return {
        ...previous,
        [productId]: next
      };
    });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] ?? 1;

    for (let index = 0; index < quantity; index += 1) {
      addToCart(product);
    }

    pushDataLayerEvent('add_to_cart', {
      product_id: product.id,
      product_name: product.name,
      product_category: product.category,
      product_price: product.price,
      quantity
    });
  };

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
                <div className="product-qty-row">
                  <button
                    type="button"
                    className="btn btn-ghost product-qty-btn"
                    onClick={() => handleQuantityChange(product.id, -1)}
                  >
                    −
                  </button>
                  <span className="product-qty-value">
                    {quantities[product.id] ?? 1}
                  </span>
                  <button
                    type="button"
                    className="btn btn-ghost product-qty-btn"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-primary product-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Ajouter {quantities[product.id] ?? 1} au panier
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

