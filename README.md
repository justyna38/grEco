## GrEco – Marketplace locale écoresponsable (React)

Projet de site vitrine pour une marketplace locale écoresponsable autour de Grenoble, développée avec **React** et **Vite**, orientée **SEO** et **responsive design**.

### Scripts

- **Installation** : `npm install`
- **Développement** : `npm run dev`
- **Générer le sitemap** : `npm run generate:sitemap`
- **Build de production** : `npm run build`
- **Prévisualisation du build** : `npm run preview`
- **Scraping (démo)** : `npm run scrape`

### Structure principale

- `index.html` : point d’entrée HTML avec balises SEO globales
- `src/main.jsx` : montage de l’application React
- `src/App.jsx` : layout global (navigation, footer, routing)
- `src/pages/*` : pages principales (au moins 15 pages)
- `src/components/*` : composants UI réutilisables
- `src/styles/global.css` : styles globaux (palette verte, responsive)

### SEO

- Titres de pages uniques (balise `<title>`)
- Meta descriptions par page
- Structure sémantique (`header`, `main`, `section`, `footer`, etc.)
- Contenu en français ciblé sur la métropole grenobloise
- `robots.txt` dans `public/`
- `sitemap.xml` **généré** (script `generate:sitemap`) à partir des routes + pages dynamiques (blog, producteurs)

### Analytics & consentement (RGPD / CNIL)

- Couche d’événements : `src/analytics/dataLayer.js`
- Bandeau cookies : `src/components/CookieBanner.jsx`
- **Aucun script analytics tiers n’est chargé avant opt-in** (injecté après consentement)
- Page interne de pilotage (démo) : `/kpi`

### Livrables hackathon (docs)

- Plan de marquage : `docs/plan-de-marquage.md`
- Matrice de risques scraping/RGPD : `docs/matrice-risques-scraping-rgpd.md`
- Rapport KPI + recommandations : `docs/rapport-kpi-recommandations.md`

### Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir l’URL indiquée dans le terminal (par défaut `http://localhost:5173`).
