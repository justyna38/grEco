import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function LoginPage() {
  const { isAuthenticated, login, testCredentials } = useAuth();
  const [email, setEmail] = useState(testCredentials.email);
  const [password, setPassword] = useState(testCredentials.password);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/produits';

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    const result = login(email.trim(), password);

    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.message || 'Une erreur est survenue. Veuillez réessayer.');
      setSubmitting(false);
    }
  };

  return (
    <div className="page auth-page">
      <Helmet>
        <title>Connexion – GrEco</title>
        <meta
          name="description"
          content="Connectez-vous à votre espace GrEco pour accéder au marché de produits locaux écoresponsables."
        />
        <link rel="canonical" href="https://www.greco-local.fr/connexion" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Espace client</p>
        <h1 className="page-title">Connexion à GrEco</h1>
        <p className="page-lead">
          Utilisez le compte de démonstration ci-dessous pour tester le parcours d&apos;achat sur le
          marché de produits locaux.
        </p>
      </header>

      <section className="section">
        <div className="card-soft auth-card">
          <div className="auth-demo-box">
            <p className="auth-demo-title">Identifiants de démonstration</p>
            <p className="auth-demo-line">
              <span>Email :</span> <code>{testCredentials.email}</code>
            </p>
            <p className="auth-demo-line">
              <span>Mot de passe :</span> <code>{testCredentials.password}</code>
            </p>
            <p className="note">
              Ces identifiants servent uniquement à explorer le parcours e-commerce de GrEco.
            </p>
          </div>

          <form className="form auth-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label className="label" htmlFor="email">
                Adresse e-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <label className="label" htmlFor="password">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="btn btn-primary auth-submit" disabled={submitting}>
              {submitting ? 'Connexion en cours…' : 'Se connecter'}
            </button>

            <p className="helper">
              Après connexion, vous serez redirigé vers la page des{' '}
              <Link to="/produits">produits à acheter</Link>.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
