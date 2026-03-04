import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

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
              <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
                Rejoindre GrEco
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

