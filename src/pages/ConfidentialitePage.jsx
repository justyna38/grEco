import { Helmet } from 'react-helmet-async';

function ConfidentialitePage() {
  return (
    <div className="page">
      <Helmet>
        <title>Politique de confidentialité – GrEco</title>
        <meta
          name="description"
          content="Politique de confidentialité de GrEco : utilisation des données, cookies et respect de la vie privée."
        />
        <link rel="canonical" href="https://www.greco-local.fr/confidentialite" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Confidentialité</p>
        <h1 className="page-title">Politique de confidentialité.</h1>
        <p className="page-lead">
          Cette section décrit, à titre d&apos;exemple, la manière dont les données pourraient être
          traitées dans le cadre d&apos;une version opérationnelle de GrEco.
        </p>
      </header>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">Données collectées</h2>
          <p className="section-sub">
            Dans une version fonctionnelle, GrEco collecterait certaines données nécessaires au bon
            fonctionnement du service.
          </p>
          <ul className="list-muted">
            <li>Données de compte (nom, prénom, e-mail...)</li>
            <li>Données de commande (produits, montants...)</li>
            <li>Données de navigation à des fins de mesure d&apos;usage (analytics)</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default ConfidentialitePage;

