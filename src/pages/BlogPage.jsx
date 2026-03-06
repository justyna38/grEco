import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogArticlesList } from '../data/blogArticles.mjs';

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
          {blogArticlesList.map((article) => (
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

