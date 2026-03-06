import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { producteursDetails } from '../data/producteurs.mjs';

function ProducteurDetailPage() {
  const { id } = useParams();
  const producteur = producteursDetails[id];

  if (!producteur) {
    return (
      <div className="page">
        <Helmet>
          <title>Producteur introuvable – GrEco</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="not-found">
          <h1>Producteur introuvable</h1>
          <p>Le producteur demandé n&apos;existe pas ou n&apos;est pas encore référencé.</p>
          <Link to="/producteurs" className="btn btn-primary">
            Revenir à la liste des producteurs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page" itemScope itemType="https://schema.org/LocalBusiness">
      <Helmet>
        <title>{producteur.nom} – Producteur partenaire GrEco</title>
        <meta
          name="description"
          content={`${producteur.nom}, ${producteur.type} situé à ${producteur.localisation}, partenaire de la marketplace locale écoresponsable GrEco.`}
        />
        <link rel="canonical" href={`https://gr-eco.vercel.app/producteurs/${id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://gr-eco.vercel.app/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Producteurs',
                item: 'https://gr-eco.vercel.app/producteurs'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: producteur.nom,
                item: `https://gr-eco.vercel.app/producteurs/${id}`
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: producteur.nom,
            description: producteur.description,
            areaServed: 'Métropole grenobloise',
            address: {
              '@type': 'PostalAddress',
              addressLocality: producteur.localisation,
              addressRegion: 'Auvergne-Rhône-Alpes',
              addressCountry: 'FR'
            },
            url: `https://gr-eco.vercel.app/producteurs/${id}`
          })}
        </script>
      </Helmet>

      <header className="page-header">
        <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
          <Link to="/">Accueil</Link> <span>/</span>
          <Link to="/producteurs">Producteurs</Link> <span>/</span>
          <span aria-current="page">{producteur.nom}</span>
        </nav>
        <p className="page-kicker">Producteur partenaire</p>
        <h1 className="page-title" itemProp="name">
          {producteur.nom}
        </h1>
        <p className="page-lead">
          {producteur.type} – {producteur.localisation}
        </p>
      </header>

      <section className="section">
        <div className="two-column">
          <article className="card-soft">
            <h2 className="section-title">Qui est ce producteur ?</h2>
            <p className="section-sub" itemProp="description">
              {producteur.description}
            </p>
            <ul className="checklist">
              {producteur.pratiques.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="section-title">Pourquoi sur GrEco ?</h2>
            <p className="section-sub">
              GrEco lui permet de toucher des habitants de la métropole grenobloise sensibles à la
              qualité et à la traçabilité, sans devoir multiplier les permanences ou les marchés.
            </p>
            <ul className="checklist">
              <li>Mise en avant de son histoire et de ses engagements</li>
              <li>Commandes plus régulières et prévisibles</li>
              <li>Réduction du temps consacré à la vente directe</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="card-soft">
          <h2 className="section-title">Envie de découvrir d&apos;autres producteurs ?</h2>
          <p className="section-sub">
            La force de GrEco, c&apos;est la diversité des profils et des pratiques, avec un point
            commun : un engagement écoresponsable.
          </p>
          <Link to="/producteurs" className="btn btn-outline">
            Retour à la liste des producteurs
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProducteurDetailPage;

