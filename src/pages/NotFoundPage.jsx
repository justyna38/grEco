import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Page introuvable – GrEco</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="not-found">
        <h1>Oups, cette page n&apos;existe pas.</h1>
        <p>
          La ressource demandée est introuvable. Retournez vers l&apos;accueil ou explorez le
          marché local.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
          <Link to="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link to="/marche" className="btn btn-outline">
            Découvrir le marché
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;

