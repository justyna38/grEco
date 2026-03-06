import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { blogArticleContents } from '../data/blogArticles.mjs';

function BlogArticlePage() {
  const { slug } = useParams();
  const article = blogArticleContents[slug];

  if (!article) {
    return (
      <div className="page">
        <Helmet>
          <title>Article introuvable – GrEco</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="not-found">
          <h1>Article introuvable</h1>
          <p>L&apos;article que vous recherchez n&apos;existe pas ou plus.</p>
          <Link to="/blog" className="btn btn-primary">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>{article.titre} – Blog GrEco</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://gr-eco.vercel.app/blog/${slug}`} />
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
                name: 'Blog',
                item: 'https://gr-eco.vercel.app/blog'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: article.titre,
                item: `https://gr-eco.vercel.app/blog/${slug}`
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.titre,
            description: article.description,
            inLanguage: 'fr-FR',
            author: { '@type': 'Organization', name: 'GrEco' },
            publisher: { '@type': 'Organization', name: 'GrEco' },
            mainEntityOfPage: `https://gr-eco.vercel.app/blog/${slug}`,
            url: `https://gr-eco.vercel.app/blog/${slug}`
          })}
        </script>
      </Helmet>

      <header className="page-header">
        <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
          <Link to="/">Accueil</Link> <span>/</span>
          <Link to="/blog">Blog</Link> <span>/</span>
          <span aria-current="page">{article.titre}</span>
        </nav>
        <p className="page-kicker">Blog · {article.categorie}</p>
        <h1 className="page-title">{article.titre}</h1>
        <p className="page-lead">{article.description}</p>
      </header>

      <section className="section">
        <div className="article-meta">
          <span className="chip chip-green">Article GrEco</span>
          <span>{article.tempsLecture} de lecture</span>
        </div>
        <article className="article-body">
          {article.contenu.map((paragraphe, index) => (
            <p key={index}>{paragraphe}</p>
          ))}
        </article>
        <div className="card-soft" style={{ marginTop: '1.4rem' }}>
          <h2 className="section-title">Envie de passer à l’action à Grenoble ?</h2>
          <p className="section-sub">
            GrEco prépare une marketplace locale dédiée à la métropole grenobloise. Vous pouvez
            dès maintenant manifester votre intérêt ou échanger avec l&apos;équipe.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Échanger avec GrEco
            </Link>
            <Link to="/marche" className="btn btn-outline">
              Découvrir le marché local
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogArticlePage;

