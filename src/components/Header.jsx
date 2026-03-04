import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

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
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

