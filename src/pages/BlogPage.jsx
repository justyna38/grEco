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
  },
  {
    slug: 'ou-faire-ses-courses-locales-a-grenoble',
    titre: 'Où faire ses courses locales à Grenoble ?',
    resume:
      'Panorama des solutions pour acheter local à Grenoble : marchés, AMAP, épiceries engagées et GrEco.',
    categorie: 'Guides pratiques',
    tempsLecture: '7 min'
  },
  {
    slug: 'livraison-courses-locales-grenoble',
    titre: 'Livraison de courses locales à Grenoble : quelles options ?',
    resume:
      'Comparaison des solutions de livraison de produits locaux autour de Grenoble et positionnement de GrEco.',
    categorie: 'Guides pratiques',
    tempsLecture: '6 min'
  },
  {
    slug: 'circuit-court-grenoble-definition-exemples',
    titre: 'Circuits courts à Grenoble : définition et exemples concrets',
    resume:
      'Définir simplement le circuit court et illustrer comment il se traduit sur le territoire grenoblois.',
    categorie: 'Pédagogie',
    tempsLecture: '6 min'
  },
  {
    slug: 'choisir-son-panier-producteurs-grenoble',
    titre: 'Comment choisir son panier de producteurs à Grenoble ?',
    resume:
      'Critères pour sélectionner un panier local adapté à sa famille, à son budget et à son organisation.',
    categorie: 'Conseils pratiques',
    tempsLecture: '5 min'
  },
  {
    slug: 'amap-vs-marketplace-locale-grenoble',
    titre: 'AMAP vs marketplace locale à Grenoble : que choisir ?',
    resume:
      'Comparer en détail les forces et limites des AMAP et d’une marketplace locale comme GrEco.',
    categorie: 'Comparatif',
    tempsLecture: '7 min'
  },
  {
    slug: 'epiceries-bio-vrac-grenoble',
    titre: 'Épiceries bio et vrac à Grenoble : comment GrEco complète l’offre ?',
    resume:
      'Montrer comment GrEco s’articule avec les épiceries bio et magasins vrac déjà présents à Grenoble.',
    categorie: 'Terrain',
    tempsLecture: '6 min'
  },
  {
    slug: 'manger-local-petit-budget-grenoble',
    titre: 'Manger local avec un petit budget à Grenoble',
    resume:
      'Pistes concrètes pour concilier budget contraint et alimentation locale grâce aux bons réflexes et à GrEco.',
    categorie: 'Conseils pratiques',
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

