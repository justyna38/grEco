import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const mockArticles = [
  {
    slug: 'pourquoi-une-marketplace-locale-a-grenoble',
    titre: 'Pourquoi une marketplace locale à Grenoble ?',
    resume:
      'Retour sur le contexte grenoblois : circuits courts, initiatives existantes et besoin d’un outil simple pour les habitants.',
    categorie: 'Vision',
    tempsLecture: '4 min'
  },
  {
    slug: 'comment-reduire-lempreinte-carbone-de-son-panier',
    titre: "Comment réduire l'empreinte carbone de son panier ?",
    resume:
      'Conseils concrets pour choisir des produits locaux, de saison et limiter les transports inutiles.',
    categorie: 'Conseils pratiques',
    tempsLecture: '5 min'
  },
  {
    slug: 'parole-de-producteurs-en-isere',
    titre: 'Parole de producteurs en Isère',
    resume:
      'Témoignages de producteurs sur leurs contraintes, leurs motivations et leurs attentes vis-à-vis du numérique.',
    categorie: 'Terrain',
    tempsLecture: '6 min'
  }
];

function BlogPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Blog – GrEco</title>
        <meta
          name="description"
          content="Articles et ressources autour des circuits courts, de la consommation locale et de l’écologie du quotidien à Grenoble."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/blog" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Blog</p>
        <h1 className="page-title">Ressources pour mieux consommer local.</h1>
        <p className="page-lead">
          Le blog GrEco rassemble des contenus pédagogiques, des retours de terrain et des conseils
          pour faire évoluer ses habitudes de consommation sans sacrifier la praticité.
        </p>
      </header>

      <section className="section">
        <div className="grid grid-3">
          {mockArticles.map((article) => (
            <article key={article.slug} className="card-soft">
              <p className="badge-soft">{article.categorie}</p>
              <h2 className="card-title">
                <Link to={`/blog/${article.slug}`}>{article.titre}</Link>
              </h2>
              <p className="card-sub">{article.resume}</p>
              <p className="note">Temps de lecture : {article.tempsLecture}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogPage;

