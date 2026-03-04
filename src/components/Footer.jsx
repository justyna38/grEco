import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h2 className="footer-title">GrEco</h2>
          <p>
            Marketplace locale écoresponsable dédiée à la métropole grenobloise. Circuits courts,
            transparence et impact positif.
          </p>
        </section>

        <section aria-label="Navigation secondaire">
          <h2 className="footer-title">Navigation</h2>
          <ul className="footer-links">
            <li>
              <Link to="/marche">Marché local</Link>
            </li>
            <li>
              <Link to="/producteurs">Producteurs</Link>
            </li>
            <li>
              <Link to="/comment-ca-marche">Comment ça marche</Link>
            </li>
            <li>
              <Link to="/pour-les-producteurs">Espace producteurs</Link>
            </li>
          </ul>
        </section>

        <section aria-label="Informations légales">
          <h2 className="footer-title">Informations</h2>
          <ul className="footer-links">
            <li>
              <Link to="/a-propos">À propos</Link>
            </li>
            <li>
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link to="/confidentialite">Confidentialité</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="footer-bottom">
        <p>
          © {currentYear} GrEco – Marketplace locale écoresponsable à Grenoble. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

