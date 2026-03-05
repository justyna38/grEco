import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function CheckoutPage() {
  const { cartItems, cartCount, cartTotal, clearCart } = useCart();
  const [completed, setCompleted] = useState(false);

  const hasItems = cartItems.length > 0;

  const handlePurchase = () => {
    if (!hasItems) {
      return;
    }

    if (typeof window !== 'undefined') {
      // Événement de funnel pour l'achat finalisé (purchase)
      // eslint-disable-next-line no-console
      console.log('funnel:purchase', {
        step: 'purchase',
        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity
        }))
      });
    }

    clearCart();
    setCompleted(true);
  };

  return (
    <div className="page">
      <Helmet>
        <title>Finaliser vos achats – GrEco</title>
        <meta
          name="description"
          content="Confirmez votre commande de produits locaux écoresponsables sur GrEco."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/checkout" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Paiement</p>
        <h1 className="page-title">Finaliser vos achats</h1>
        <p className="page-lead">
          Vous êtes connecté·e. Il ne reste plus qu&apos;à confirmer votre commande de
          produits locaux.
        </p>
      </header>

      <section className="section">
        {!hasItems && !completed && (
          <div className="card-soft">
            <p className="section-sub">
              Votre panier est vide. Ajoutez des produits depuis la page{' '}
              <Link to="/produits">Produits à acheter</Link> puis revenez finaliser vos
              achats.
            </p>
          </div>
        )}

        {hasItems && !completed && (
          <div className="card-soft">
            <div className="section-header">
              <h2 className="section-title">
                Récapitulatif de votre panier ({cartCount} article
                {cartCount > 1 ? 's' : ''})
              </h2>
              <p className="section-sub">
                Cette page illustre l&apos;étape finale du tunnel de commande avant
                validation du paiement.
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
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-meta">
                      <span className="product-category">{item.category}</span> ·{' '}
                      <span className="product-origin">{item.origin}</span>
                    </p>
                  </div>
                  <div className="cart-item-actions">
                    <span className="cart-qty">
                      {item.quantity} × <span className="product-price">{item.price}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePurchase}
              >
                Finaliser les achats
              </button>
            </div>
          </div>
        )}

        {completed && (
          <div className="card-soft">
            <h2 className="section-title">Commande simulée avec succès</h2>
            <p className="section-sub">
              Merci ! Votre commande de démonstration a été validée. Ce parcours illustre
              la dernière étape d&apos;un tunnel d&apos;achat sur GrEco.
            </p>
            <p className="section-sub">
              Vous pouvez retourner voir les{' '}
              <Link to="/produits">produits à acheter</Link> ou consulter votre{' '}
              <Link to="/panier">liste de courses</Link>.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default CheckoutPage;

