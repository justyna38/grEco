const SITE_URL = 'https://gr-eco.vercel.app';

// Routes statiques principales
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/marche', changefreq: 'weekly', priority: 0.8 },
  { path: '/produits', changefreq: 'weekly', priority: 0.9 },
  { path: '/producteurs', changefreq: 'weekly', priority: 0.8 },
  { path: '/pour-les-producteurs', changefreq: 'monthly', priority: 0.6 },
  { path: '/blog', changefreq: 'weekly', priority: 0.7 },
  { path: '/contact', changefreq: 'yearly', priority: 0.5 },
  { path: '/faq', changefreq: 'yearly', priority: 0.4 },
  { path: '/a-propos', changefreq: 'yearly', priority: 0.4 },
  { path: '/engagements', changefreq: 'yearly', priority: 0.4 },
  { path: '/impact-ecologique', changefreq: 'yearly', priority: 0.4 },
  { path: '/comment-ca-marche', changefreq: 'yearly', priority: 0.4 },
  { path: '/mentions-legales', changefreq: 'yearly', priority: 0.2 },
  { path: '/confidentialite', changefreq: 'yearly', priority: 0.2 },
  { path: '/cookies', changefreq: 'yearly', priority: 0.2 },
  { path: '/cgu', changefreq: 'yearly', priority: 0.2 },
  { path: '/cgv', changefreq: 'yearly', priority: 0.2 },
  { path: '/connexion', changefreq: 'yearly', priority: 0.3 }
];

// Slugs d'articles de blog (doivent rester synchronisés avec BlogPage/BlogArticlePage)
const blogSlugs = [
  'pourquoi-une-marketplace-locale-a-grenoble',
  'comment-reduire-lempreinte-carbone-de-son-panier',
  'parole-de-producteurs-en-isere'
];

// Identifiants de producteurs (doivent rester synchronisés avec ProducteurDetailPage)
const producteurIds = [
  'ferme-des-ecrins',
  'boulangerie-des-alpes',
  'fromagerie-du-vercors'
];

function generateUrlElement({ loc, changefreq, priority, lastmod }) {
  return `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

module.exports = (req, res) => {
  const now = new Date().toISOString();

  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${SITE_URL}${route.path}`,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: now
    })),
    ...blogSlugs.map((slug) => ({
      loc: `${SITE_URL}/blog/${slug}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: now
    })),
    ...producteurIds.map((id) => ({
      loc: `${SITE_URL}/producteurs/${id}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: now
    }))
  ];

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(generateUrlElement).join('\n') +
    '\n</urlset>';

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
};

