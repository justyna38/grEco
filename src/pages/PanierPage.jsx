import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function PanierPage() {
  const { cartItems, cartCount, cartTotal, addToCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleBeginCheckout = () => {
    if (cartCount === 0) {
      return;
    }

    if (typeof window !== 'undefined') {
      // Événement de funnel pour le début du paiement (begin_checkout)
      // eslint-disable-next-line no-console
      console.log('funnel:begin_checkout', {
        step: 'begin_checkout',
        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity
        }))
      });
    }

    navigate('/checkout');
  };

  const hasItems = cartItems.length > 0;

  return (
    <div className="page">
      <Helmet>
        <title>Votre liste de courses – GrEco</title>
        <meta
          name="description"
          content="Consultez votre liste de courses GrEco, ajustez les quantités puis passez au paiement pour finaliser vos achats."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/panier" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Votre panier</p>
        <h1 className="page-title">Liste de courses</h1>
        <p className="page-lead">
          Retrouvez ici les produits ajoutés depuis la page{' '}
          <Link to="/produits">Produits à acheter</Link> avant de passer au paiement.
        </p>
      </header>

      <section className="section">
        {!hasItems && (
          <div className="card-soft">
            <p className="section-sub">
              Votre liste de courses est vide pour le moment.
            </p>
            <p className="section-sub">
              Commencez par ajouter des produits depuis la page{' '}
              <Link to="/produits">Produits à acheter</Link>.
            </p>
          </div>
        )}

        {hasItems && (
          <div className="card-soft">
            <div className="section-header">
              <h2 className="section-title">
                {cartCount} article{cartCount > 1 ? 's' : ''} dans votre panier
              </h2>
              <p className="section-sub">
                Ajustez les quantités ou retirez des produits avant de passer au paiement.
              </p>
              <p className="section-sub">
                Total estimé :{' '}
                <strong>
                  {cartTotal.toFixed(2).replace('.', ',')} €
                </strong>
              </p>
            </div>

            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-main">
                    <div className="cart-item-thumb">
                      <img src={item.image} alt={item.name} loading="lazy" />
                    </div>
                    <div>
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-meta">
                        <span className="product-category">{item.category}</span> ·{' '}
                        <span className="product-origin">{item.origin}</span>
                      </p>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <button
                      type="button"
                      className="btn btn-ghost cart-qty-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      −
                    </button>
                    <span className="cart-qty">
                      {item.quantity} × <span className="product-price">{item.price}</span>
                    </span>
                    <button
                      type="button"
                      className="btn btn-ghost cart-qty-btn"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={clearCart}
              >
                Vider la liste
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleBeginCheckout}
              >
                Payer
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default PanierPage;

