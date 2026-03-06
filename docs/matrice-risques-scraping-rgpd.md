# Matrice de risques – Scraping & RGPD (GrEco)

## Contexte
GrEco intègre une brique de scraping de démonstration (`scripts/scraping/grecoScraper.js`) pour illustrer :
- **agrégation/veille** à partir de contenus publics
- contraintes **robots.txt**, **rate limiting**, **journalisation**, **minimisation**

## Hypothèses (démo)
- Les sources ciblées sont **compatibles** avec un usage de démonstration.
- La collecte exclut toute **donnée personnelle**.
- La finalité est **B2B** (veille marché / enrichissement catalogue) et documentée.

## Tableau des risques

| Risque | Description | Probabilité | Impact | Mesures de réduction (Privacy-by-Design) |
|---|---|---:|---:|---|
| Non-respect robots.txt | Scraper une ressource interdite | M | H | Vérification robots via `robots-parser`, refus si interdit, approche prudente |
| Non-respect CGU | CGU interdisant l’extraction | M | H | Revue des CGU, privilégier API/accord, limiter au strict nécessaire |
| Charge serveur (DoS) | Trop de requêtes / cadence élevée | L | H | Rate limiting (délai), limitation du nombre d’items, pas de parallélisme |
| Données personnelles | Collecte indirecte de PII | L | H | Minimisation (champs “offre”), filtrage, pas de champs libres, revue régulière |
| Droit des bases de données | Extraction substantielle | L/M | H | Échantillonnage, pas de collecte massive, stratégie “listing minimal”, justification |
| Propriété intellectuelle | Réutilisation de contenus protégés | M | M/H | Conserver uniquement “facts” (nom/prix/url), pas de reproduction de textes longs |
| Traçabilité/logs excessifs | Logs trop détaillés / conservés trop longtemps | M | M | Logs techniques minimaux, rotation/suppression (à implémenter en prod) |
| Sécurité | Exposition de fichiers collectés | L | M | Répertoire dédié, contrôle d’accès, aucune PII, monitoring |

## Données collectées (minimisation)
Champs conservés (exemple):
- `id`, `name`, `category`, `priceText`, `origin`, `url`, `scrapedAt`, `siteId`

Exclus explicitement:
- données de contact, noms de personnes, emails, numéros, avis nominatif, etc.

## Journalisation
Le scraping journalise :
- horodatage
- URL appelée
- statut/erreur

## Rate limiting
Délais intentionnels entre requêtes pour limiter l’impact sur les sources.

## Base légale (à cadrer en “vraie prod”)
Selon les cas :
- accord contractuel / API officielle
- intérêt légitime (documenté) pour veille B2B, sous réserve de minimisation et respect CGU/robots

# Matrice de risques – GrEco (exemple pédagogique)

Ce document illustre, à titre d’exemple, une analyse des risques liée aux traitements de données prévus dans une version opérationnelle de GrEco, incluant la brique de scraping / veille concurrentielle.  
Il ne constitue pas un avis juridique et devra être complété et validé par un·e juriste ou DPO.

| Traitement                                                                 | Finalité principale                                                                                 | Catégories de données traitées                                                                 | Base légale (à confirmer)                                              | Risques principaux (RGPD / CNIL)                                                                                          | Mesures de réduction / garanties (Privacy by Design)                                                                                                                                                         |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Création / gestion de compte client                                      | Permettre à l’utilisateur de créer un compte, se connecter et gérer ses informations               | Identité (nom, prénom), coordonnées (e-mail), identifiants de connexion (hash de mot de passe) | Exécution du contrat (art. 6-1 b RGPD)                                  | Atteinte à la confidentialité (fuite d’identifiants), usurpation d’identité, accès non autorisé                            | Hash robuste des mots de passe, HTTPS, contrôle d’accès strict côté back-end (non implémenté dans la maquette), limitation des données demandées, journalisation des accès sensibles.                       |
| Prise de commande / gestion du panier                                    | Permettre la constitution du panier et la passation de commande                                    | Détails des produits, montants, adresse de livraison (si implémentée), historisation de commandes | Exécution du contrat (art. 6-1 b RGPD)                                  | Profilage non souhaité, fuites de données de consommation, recoupement avec d’autres sources                               | Minimisation des données collectées, conservation limitée des historiques, cloisonnement des données de commande, accès restreint (rôle back-office).                                                     |
| Mesure d’audience / analytics (dataLayer, `usePageView`)                 | Comprendre l’utilisation du site afin d’améliorer l’UX et la performance                           | Événements de navigation (type de page, chemin, identifiants techniques de session ou cookie)  | Intérêt légitime ou consentement (art. 6-1 f ou 6-1 a RGPD) à arbitrer | Traçage excessif, absence de consentement ou de possibilité de refus, corrélation avec d’autres données d’identification   | Bandeau cookies et préférences via `CookieConsentContext`, pseudonymisation d’IP (si solution externe), agrégation des statistiques, durée de conservation courte des logs bruts, documentation dans la politique. |
| Support / formulaire de contact                                          | Répondre aux demandes des utilisateurs                                                              | Identité, e-mail, contenu libre du message                                                     | Intérêt légitime (gestion des demandes)                                  | Collecte de données non pertinentes dans le message libre, fuite éventuelle de contenu sensible                            | Formulaire limité à quelques champs, messages dirigés vers canal distinct, durée de conservation courte, sensibilisation interne à la gestion des demandes.                                               |
| Scraping / veille concurrentielle de sites de producteurs / marketplaces | Agrégation d’offres publiques pour veille concurrentielle et enrichissement de catalogue GrEco     | Informations publiques sur des offres (titre, prix, URL, marque / enseigne) – sans personnes   | Intérêt légitime **B2B** (à documenter) + respect CGU / robots.txt      | Risque de collecte accidentelle de données à caractère personnel, non-respect des CGU / robots.txt, volume excessif de requêtes | Respect systématique du fichier `robots.txt`, configuration manuelle des sites ciblés, limitation stricte du volume (rate limiting), minimisation des champs collectés, revue juridique des CGU, logs d’activité. |
| Journalisation technique de la brique de scraping                        | Suivre les erreurs et le bon fonctionnement, détecter des abus                                     | Horodatages, URL appelées, codes de retour HTTP, identifiant technique du script               | Intérêt légitime (sécurité / maintenance)                               | Reconstitution détaillée du comportement cible, éventuelle conservation trop longue de journaux                             | Journaux limités au strict nécessaire (pas de contenu HTML complet, pas d’IP côté cibles), durée de conservation courte, accès limité à l’équipe technique.                                               |
| Hébergement et sauvegardes (base de données, fichiers)                   | Assurer la disponibilité et l’intégrité du service                                                  | Ensemble des données stockées sur l’infrastructure                                             | Intérêt légitime / obligation contractuelle                              | Accès non autorisé par le prestataire, fuites de données, perte définitive de données                                       | Choix d’un hébergeur conforme RGPD, clauses contractuelles (sous-traitant), chiffrement des canaux, sauvegardes chiffrées, gestion stricte des habilitations.                                             |

## Observations générales

- **Minimisation des données** : la brique de scraping doit éviter toute collecte d’informations identifiant directement ou indirectement une personne physique. Les scénarios B2B (offres d’enseignes) sont privilégiés.  
- **Transparence** : la politique de confidentialité du site doit expliquer de façon claire l’existence d’une éventuelle veille concurrentielle ou agrégation d’offres, même si les données ne sont pas personnelles.  
- **Respect des sources** : avant tout scraping réel, une analyse des **CGU** des sites cibles et, si nécessaire, la mise en place d’accords contractuels sont indispensables.  
- **Sécurité** : la maîtrise des accès (droits internes), le chiffrement des flux et une politique de logs proportionnée sont des prérequis à toute mise en production.  

