const fs = require('fs');
const path = require('path');
const robotsParser = require('robots-parser');

const USER_AGENT = 'GrEcoBot/1.0 (+https://gr-eco.vercel.app/bot)';
// Permet de choisir facilement la cible : production par défaut,
// environnement local possible avec GRECO_SCRAPE_BASE_URL.
const BASE_URL = process.env.GRECO_SCRAPE_BASE_URL || 'https://gr-eco.vercel.app';

// Exemple de configuration de sites à analyser.
// IMPORTANT : n'utiliser dans la réalité que des sites pour lesquels vous avez une base légale
// (accord contractuel, intérêt légitime documenté, API officielle, ou autorisation explicite).
const SITES = [
  {
    id: 'greco-catalogue-json',
    // BASE_URL vaut par défaut https://gr-eco.vercel.app (production),
    // mais peut être surchargé avec la variable d'environnement GRECO_SCRAPE_BASE_URL
    // (par exemple http://localhost:5173 pour tester en local).
    baseUrl: BASE_URL,
    // On cible ici un catalogue JSON exposé par le site, plus stable qu'un HTML généré côté client.
    jsonPaths: ['/catalogue.json'],
    // Minimisation : on limite volontairement le nombre d’éléments collectés.
    maxItems: 50,
  },
];

const OUTPUT_DIR = path.join(__dirname, '../../data/scraping');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'offers.json');
const LOG_DIR = path.join(__dirname, '../../logs');
const LOG_FILE = path.join(LOG_DIR, 'scraping.log');

function ensureDirs() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, line, { encoding: 'utf8' });
  // On logue aussi dans la console pour le suivi manuel.
  // eslint-disable-next-line no-console
  console.log(line.trim());
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithUserAgent(url, options = {}) {
  const finalOpts = {
    ...options,
    headers: {
      'User-Agent': USER_AGENT,
      ...(options.headers || {}),
    },
  };
  return fetch(url, finalOpts);
}

async function loadRobotsForSite(baseUrl) {
  const robotsUrl = new URL('/robots.txt', baseUrl).toString();
  try {
    const res = await fetchWithUserAgent(robotsUrl);
    if (!res.ok) {
      log(`robots.txt non accessible pour ${baseUrl} (code ${res.status}), on applique une approche prudente.`);
      return robotsParser(robotsUrl, '');
    }
    const text = await res.text();
    return robotsParser(robotsUrl, text);
  } catch (err) {
    log(`Erreur lors de la récupération de robots.txt pour ${baseUrl}: ${err.message}`);
    return robotsParser(robotsUrl, '');
  }
}

function isAllowed(robots, url) {
  // Approche prudente : si le parseur ne sait pas, on considère que ce n'est pas autorisé.
  try {
    const allowed = robots.isAllowed(url, USER_AGENT);
    return allowed !== false;
  } catch {
    return false;
  }
}

async function scrapeSite(site) {
  const robots = await loadRobotsForSite(site.baseUrl);
  const offers = [];

  for (const jsonPath of site.jsonPaths) {
    const url = new URL(jsonPath, site.baseUrl).toString();

    if (!isAllowed(robots, url)) {
      log(`Chemin interdit par robots.txt, ignoré : ${url}`);
      continue;
    }

    // Rate limiting : on espace volontairement les requêtes.
    await sleep(3000);

    try {
      log(`Récupération du catalogue JSON : ${url}`);
      const res = await fetchWithUserAgent(url);
      if (!res.ok) {
        log(`Échec de la requête (${res.status}) pour ${url}`);
        continue;
      }

      const data = await res.json();

      if (!Array.isArray(data)) {
        log(`Format inattendu pour ${url} (JSON attendu sous forme de tableau).`);
        continue;
      }

      for (const item of data) {
        if (offers.length >= (site.maxItems || 100)) {
          break;
        }

        if (!item || !item.name || !item.price || !item.url) {
          continue;
        }

        // Minimisation des données : on se limite aux champs strictement nécessaires
        // pour la veille concurrentielle / agrégation d’offres.
        offers.push({
          siteId: site.id,
          id: item.id,
          name: item.name,
          category: item.category,
          priceText: item.price,
          origin: item.origin,
          url: item.url,
          scrapedAt: new Date().toISOString(),
        });
      }
    } catch (err) {
      log(`Erreur lors du scraping de ${url} : ${err.message}`);
    }
  }

  return offers;
}

async function run() {
  ensureDirs();
  log('Démarrage du scraping GrEco (brique de veille / agrégation).');

  const allOffers = [];

  for (const site of SITES) {
    log(`Traitement du site : ${site.id} (${site.baseUrl})`);
    const siteOffers = await scrapeSite(site);
    log(`Offres collectées pour ${site.id} : ${siteOffers.length}`);
    allOffers.push(...siteOffers);
  }

  // Écriture dans un fichier JSON exploitable par le projet (statique).
  // Les données ne contiennent aucun identifiant de personne physique.
  const minimalPayload = {
    generatedAt: new Date().toISOString(),
    totalOffers: allOffers.length,
    offers: allOffers,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(minimalPayload, null, 2), {
    encoding: 'utf8',
  });

  log(`Scraping terminé. Total d'offres : ${allOffers.length}. Fichier écrit : ${OUTPUT_FILE}`);
}

run().catch((err) => {
  log(`Erreur critique : ${err.message}`);
  process.exitCode = 1;
});

