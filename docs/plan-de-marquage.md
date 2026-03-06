# Plan de marquage – GrEco (hackathon)

## Objectif
Mesurer un **tunnel e-commerce** (démonstration) et piloter un KPI principal, sans collecte excessive, avec **consentement explicite** pour les cookies d’analyse.

## KPI principal (proposé)
- **Purchase (achat simulé)** : nombre d’événements `purchase`

## Funnel (proposé)
1. `page_view`
2. `add_to_cart`
3. `begin_checkout`
4. `purchase`

## Couche de données (dataLayer)
Les événements sont poussés via `window.dataLayer` (fonction `pushDataLayerEvent`) et enrichis automatiquement par :
- `user_segment` : `guest` ou `auth` (segmentation)

## Dictionnaire d’événements

### `page_view`
- **Déclencheur**: changement de route (SPA)
- **Propriétés**:
  - `page_path` (string)
  - `page_type` (string)
  - `page_name` (string)
  - `page_title` (string)
  - `user_segment` (guest/auth)

### `add_to_cart`
- **Déclencheur**: clic “Ajouter au panier”
- **Propriétés**:
  - `product_id` (string)
  - `product_name` (string)
  - `product_category` (string)
  - `product_price` (string, format affiché)
  - `quantity` (number)
  - `user_segment` (guest/auth)

### `begin_checkout`
- **Déclencheur**: clic “Payer” depuis le panier
- **Propriétés**:
  - `items` (array: `{ id, name, quantity }`)
  - `items_count` (number)
  - `cart_total` (number)
  - `user_segment` (guest/auth)

### `purchase`
- **Déclencheur**: clic “Finaliser les achats” (achat simulé)
- **Propriétés**:
  - `items` (array: `{ id, name, quantity }`)
  - `items_count` (number)
  - `cart_total` (number)
  - `user_segment` (guest/auth)

## Consentement (CNIL / RGPD)
- Aucun script tiers de mesure d’audience n’est chargé dans `index.html`.
- Le script GA4 (gtag) n’est injecté **qu’après opt-in** via le bandeau cookies.
- Si l’utilisateur refuse, **aucune requête analytics** n’est envoyée.

## Segmentation (exemples)
- `user_segment`:
  - `guest`: non connecté
  - `auth`: connecté (compte démo)

## Tableau KPI (démo)
Une page interne `Dashboard KPI` (`/kpi`) permet d’afficher :
- volumes par événement
- conversions simples (ex: `begin_checkout → purchase`)
- volumes par segment

