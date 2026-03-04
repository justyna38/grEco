import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

const articleContents = {
  'pourquoi-une-marketplace-locale-a-grenoble': {
    titre: 'Pourquoi une marketplace locale à Grenoble ?',
    description:
      'Comprendre le contexte grenoblois et les raisons d’être de GrEco, entre circuits courts et numérique.',
    categorie: 'Vision',
    tempsLecture: '4 min',
    contenu: [
      "La métropole grenobloise dispose déjà d'un écosystème riche en initiatives locales : AMAP, marchés, coopératives, épiceries engagées... Pourtant, pour beaucoup d'habitants, il reste difficile de s'y retrouver et de faire de ces solutions un réflexe hebdomadaire.",
      "GrEco part de cette réalité : comment offrir un point d'entrée unique, simple et lisible vers l'offre locale existante, sans la dénaturer ? La réponse passe par une application moderne, centrée sur les besoins des utilisateurs et les contraintes des producteurs.",
      "L'ambition n'est pas de remplacer les marchés ou les rencontres physiques, mais de les compléter en simplifiant la préparation des commandes et en rendant l'offre plus visible."
    ]
  },
  'comment-reduire-lempreinte-carbone-de-son-panier': {
    titre: "Comment réduire l'empreinte carbone de son panier ?",
    description:
      "Des pistes concrètes pour limiter l'impact de son alimentation, en s'appuyant sur le local et la saisonnalité.",
    categorie: 'Conseils pratiques',
    tempsLecture: '5 min',
    contenu: [
      "L'alimentation représente une part importante de l'empreinte carbone individuelle. Sans tout bouleverser du jour au lendemain, quelques changements peuvent déjà avoir un impact réel.",
      "Privilégier les produits locaux et de saison est un levier majeur : cela limite les transports longue distance et les serres chauffées. En choisissant des paniers GrEco issus de producteurs proches de Grenoble, vous réduisez mécaniquement les kilomètres parcourus.",
      'Autre levier : réduire le gaspillage. Commander des quantités adaptées, utiliser les paniers anti-gaspi lorsque disponibles, et cuisiner les restes contribuent aussi à alléger votre impact.'
    ]
  },
  'parole-de-producteurs-en-isere': {
    titre: 'Parole de producteurs en Isère',
    description:
      'Des témoignages de producteurs sur leurs motivations, leurs contraintes et leur relation aux circuits courts numériques.',
    categorie: 'Terrain',
    tempsLecture: '6 min',
    contenu: [
      "De nombreux producteurs rencontrés en Isère partagent un même défi : continuer à développer la vente directe tout en gardant du temps pour leur cœur de métier.",
      "Le numérique est perçu comme une opportunité, à condition qu'il reste simple à utiliser et respectueux de leur réalité quotidienne. Pas question d'ajouter une couche administrative ou de dépendre d'algorithmes opaques.",
      "GrEco se construit avec eux, en tenant compte de leurs retours : horaires de préparation, contraintes météo, saisonnalité du travail... pour proposer un outil réellement utile et soutenable."
    ]
  }
};

function BlogArticlePage() {
  const { slug } = useParams();
  const article = articleContents[slug];

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
        <link rel="canonical" href={`https://www.greco-local.fr/blog/${slug}`} />
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
      </section>
    </div>
  );
}

export default BlogArticlePage;

