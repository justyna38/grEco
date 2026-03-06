# Rapport KPI (simulé) – GrEco

## KPI principal
- **Achats simulés** (`purchase`)

## Tunnel (événements)
`page_view` → `add_to_cart` → `begin_checkout` → `purchase`

## Données (exemple simulé)
Période: 24h (démo)

| Étape | Volume |
|---|---:|
| page_view | 800 |
| add_to_cart | 140 |
| begin_checkout | 65 |
| purchase | 28 |

### Taux
- Activation `add_to_cart / page_view` : \(140 / 800 = 17,5\%\)
- Checkout start `begin_checkout / add_to_cart` : \(65 / 140 = 46,4\%\)
- Conversion `purchase / begin_checkout` : \(28 / 65 = 43,1\%\)

## Segmentation (exemple)
Segments:
- `guest` : utilisateurs non connectés
- `auth` : utilisateurs connectés (compte démo)

Exemple de lecture:
- Les `auth` convertissent mieux sur `purchase` (intention forte) mais sont moins nombreux.
- Les `guest` ont une friction plus forte sur `begin_checkout` (besoin de confiance / clarté).

## 3 recommandations business
1. **Réduire la friction avant checkout**
   - rendre le CTA “Payer” plus explicite (délais, paiement simulé, confiance)
   - afficher une estimation (prix + impact) plus tôt

2. **Mieux “qualifier” les produits**
   - ajouter une mini fiche (origine, labels, disponibilité) sur la liste produits
   - mettre un lien clair vers les producteurs associés (maillage)

3. **Augmenter l’activation `add_to_cart`**
   - ajouter un “panier type” (ex: panier semaine Grenoble)
   - mettre en avant les preuves (labels / distance / saison) au-dessus de la grille

