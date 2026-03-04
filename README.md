## GrEco – Marketplace locale écoresponsable (React)

Projet de site vitrine pour une marketplace locale écoresponsable autour de Grenoble, développée avec **React** et **Vite**, orientée **SEO** et **responsive design**.

### Scripts

- **Installation** : `npm install`
- **Développement** : `npm run dev`
- **Build de production** : `npm run build`
- **Prévisualisation du build** : `npm run preview`

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
- `robots.txt` et `sitemap.xml` dans `public/`

### Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir l’URL indiquée dans le terminal (par défaut `http://localhost:5173`).

