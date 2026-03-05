# Privacy by Design – GrEco (exemple pédagogique)

Ce document décrit, à titre d’exemple, comment les principes de « Privacy by Design » et « Privacy by Default » peuvent être intégrés dans GrEco, en particulier pour :

- la mesure d’audience (analytics) ;
- la brique de scraping / veille concurrentielle ;
- les principales fonctionnalités métier (compte, commandes).

Il ne remplace pas un avis juridique et doit être complété par un·e juriste ou DPO.

---

## 1. Minimisation des données

- **Compte et commandes** : seuls les champs strictement nécessaires à la création de compte et à la livraison / facturation sont collectés.  
- **Analytics (`usePageView`, `dataLayer`)** :  
  - envoi d’événements techniques (type de page, chemin, etc.) sans champs de texte libre ;  
  - possibilité de configurer la solution d’analytics (non incluse dans la maquette) en mode respectueux : IP tronquée, pas de suivi cross-site.  
- **Scraping / veille concurrentielle** :  
  - aucune collecte de données identifiant une personne physique ;  
  - données limitées à la description d’offres publiques (nom du produit, prix, URL, enseigne).  

## 2. Privacy by Default (paramètres par défaut protecteurs)

- **Consentement aux cookies / analytics** :  
  - les événements `page_view` ne doivent être analysés de manière nominative qu’en cas de consentement explicite ;  
  - le `CookieConsentContext` peut être utilisé pour ne déclencher certains scripts qu’après accord.  
- **Accès restreint en back-office** :  
  - aucune interface publique de consultation des journaux techniques ;  
  - les données sensibles (si implémentées) ne sont visibles que par des comptes internes autorisés.  

## 3. Transparence et information

- **Politique de confidentialité** :  
  - page dédiée (`/confidentialite`) expliquant les traitements, finalités et droits RGPD ;  
  - mention explicite de la mesure d’audience et d’une éventuelle veille concurrentielle basée sur des données publiques.  
- **Mentions légales** :  
  - page `/mentions-legales` permettant d’identifier l’éditeur, l’hébergeur et un contact.  

## 4. Sécurité dès la conception

- **Transport des données** : tout déploiement réel doit être réalisé en HTTPS (TLS) uniquement.  
- **Stockage** :  
  - chiffrement des mots de passe (hash robuste, salage) ;  
  - cloisonnement des environnements (développement, test, production).  
- **Journaux (logs)** :  
  - pour la brique de scraping, les logs sont limités aux informations techniques (URL, codes HTTP, horodatage) afin d’éviter la rétention de contenus complets ;  
  - durées de conservation proportionnées et archivage sécurisé.  

## 5. Gouvernance et documentation

- **Matrice de risques** : la matrice fournie dans `docs/matrice-risques-scraping-rgpd.md` sert de base pour le registre des traitements.  
- **Registre des traitements** : pour une mise en production, chaque traitement (compte client, commandes, analytics, scraping, etc.) doit figurer dans un registre RGPD complet.  
- **Revue régulière** : toute évolution fonctionnelle (nouveau type de données, nouveau partenaire, nouvelle source de scraping) doit donner lieu à une mise à jour de la documentation et de l’analyse d’impact.  

## 6. Spécificité de la brique de scraping

- **Respect des sites sources** :  
  - lecture systématique du fichier `robots.txt` (mise en œuvre dans le script `scripts/scraping/grecoScraper.js`) ;  
  - revue des conditions générales d’utilisation (CGU) et, si nécessaire, obtention d’autorisations contractuelles.  
- **Rate limiting et impact technique** :  
  - temporisation entre les requêtes pour limiter la charge sur les sites tiers ;  
  - surveillance des erreurs pour désactiver rapidement un connecteur en cas de problème.  
- **B2B & absence de données personnelles** :  
  - ciblage prioritaire de catalogues / offres d’enseignes ou marketplaces professionnelles, sans informations sur des particuliers ;  
  - processus interne pour vérifier régulièrement que les sources ne publient pas de données à caractère personnel.  

---

En résumé, GrEco est conçu comme une **maquette pédagogique** intégrant les principaux réflexes Privacy by Design. Toute utilisation réelle devra être accompagnée d’un travail juridique et organisationnel complémentaire (registre RGPD, AIPD si nécessaire, politiques internes, formation des équipes, etc.).

