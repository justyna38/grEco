import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { blogArticlesList } from '../src/data/blogArticles.mjs';
import { producteursList } from '../src/data/producteurs.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKSPACE_ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(WORKSPACE_ROOT, 'public');
const OUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

const SITE_URL = process.env.SITE_URL || 'https://gr-eco.vercel.app';

function asUrl(p) {
  const normalized = p.startsWith('/') ? p : `/${p}`;
  return new URL(normalized, SITE_URL).toString();
}

function isoDate() {
  return new Date().toISOString().split('T')[0];
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function urlEntry(loc, { changefreq = 'weekly', priority = 0.5, lastmod = isoDate() } = {}) {
  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
    `    <changefreq>${escapeXml(changefreq)}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    '  </url>',
  ].join('\n');
}

function buildUrlList() {
  const urls = [];

  // Pages “SEO / GEO” principales (cluster)
  urls.push(urlEntry(asUrl('/'), { changefreq: 'weekly', priority: 1.0 }));
  urls.push(urlEntry(asUrl('/marche'), { changefreq: 'weekly', priority: 0.9 }));
  urls.push(urlEntry(asUrl('/produits'), { changefreq: 'weekly', priority: 0.9 }));
  urls.push(urlEntry(asUrl('/producteurs'), { changefreq: 'weekly', priority: 0.8 }));
  urls.push(urlEntry(asUrl('/comment-ca-marche'), { changefreq: 'monthly', priority: 0.7 }));
  urls.push(urlEntry(asUrl('/impact-ecologique'), { changefreq: 'monthly', priority: 0.6 }));
  urls.push(urlEntry(asUrl('/engagements'), { changefreq: 'monthly', priority: 0.6 }));
  urls.push(urlEntry(asUrl('/pour-les-producteurs'), { changefreq: 'monthly', priority: 0.6 }));
  urls.push(urlEntry(asUrl('/a-propos'), { changefreq: 'yearly', priority: 0.4 }));
  urls.push(urlEntry(asUrl('/faq'), { changefreq: 'yearly', priority: 0.4 }));
  urls.push(urlEntry(asUrl('/blog'), { changefreq: 'weekly', priority: 0.6 }));
  urls.push(urlEntry(asUrl('/contact'), { changefreq: 'yearly', priority: 0.4 }));

  // Légal (indexable)
  urls.push(urlEntry(asUrl('/mentions-legales'), { changefreq: 'yearly', priority: 0.3 }));
  urls.push(urlEntry(asUrl('/confidentialite'), { changefreq: 'yearly', priority: 0.3 }));
  urls.push(urlEntry(asUrl('/cookies'), { changefreq: 'yearly', priority: 0.3 }));
  urls.push(urlEntry(asUrl('/cgu'), { changefreq: 'yearly', priority: 0.2 }));
  urls.push(urlEntry(asUrl('/cgv'), { changefreq: 'yearly', priority: 0.2 }));

  // Pages dynamiques “contenu” (articles)
  for (const article of blogArticlesList) {
    urls.push(urlEntry(asUrl(`/blog/${article.slug}`), { changefreq: 'monthly', priority: 0.5 }));
  }

  // Pages dynamiques “annuaire” (producteurs)
  for (const producer of producteursList) {
    urls.push(urlEntry(asUrl(`/producteurs/${producer.id}`), { changefreq: 'monthly', priority: 0.5 }));
  }

  return urls;
}

function buildSitemapXml(urlEntries) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlEntries,
    '</urlset>',
    '',
  ].join('\n');
}

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
const entries = buildUrlList();
const xml = buildSitemapXml(entries);
fs.writeFileSync(OUT_FILE, xml, 'utf8');

// eslint-disable-next-line no-console
console.log(`✅ sitemap.xml généré (${entries.length} URLs) -> ${OUT_FILE}`);

