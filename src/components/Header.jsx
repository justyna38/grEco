import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/');
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon" aria-hidden="true">
            🌱
          </span>
          <span className="logo-text">
            GrEco
            <span className="logo-sub">Marketplace locale écoresponsable</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
          <ul>
            <li>
              <NavLink to="/marche" onClick={closeMenu}>
                Marché local
              </NavLink>
            </li>
            <li>
              <NavLink to="/produits" onClick={closeMenu}>
                Produits
              </NavLink>
            </li>
            <li>
              <NavLink to="/producteurs" onClick={closeMenu}>
                Producteurs
              </NavLink>
            </li>
            <li>
              <NavLink to="/comment-ca-marche" onClick={closeMenu}>
                Comment ça marche
              </NavLink>
            </li>
            <li>
              <NavLink to="/impact-ecologique" onClick={closeMenu}>
                Impact écologique
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/panier"
                onClick={closeMenu}
                className="nav-cart"
                aria-label={
                  cartCount > 0
                    ? `Panier (${cartCount} article${cartCount > 1 ? 's' : ''})`
                    : 'Panier (vide)'
                }
              >
                <span className="nav-cart-icon" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M6.2 5.5a1 1 0 0 1 .98-.8h1.03a2.75 2.75 0 0 1 5.58 0h1.03a1 1 0 0 1 .98.8l1.1 5.5A3.75 3.75 0 0 1 13.24 15h-2.5A3.75 3.75 0 0 1 5.1 11l1.1-5.5Zm2.21.7-0.84 4.2A1.75 1.75 0 0 0 10.74 13h2.5a1.75 1.75 0 0 0 1.67-2.6l-0.84-4.2h-0.92a2.75 2.75 0 0 1-4.22 0H8.41Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.25 18.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {cartCount > 0 && (
                  <span className="nav-cart-badge">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              {isAuthenticated ? (
                <button type="button" className="nav-account" onClick={handleLogout}>
                  <span aria-hidden="true">·</span>
                  <span>Se déconnecter</span>
                </button>
              ) : (
                <NavLink to="/connexion" onClick={closeMenu}>
                  Se connecter
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

