import { Helmet } from 'react-helmet-async';

function ConfidentialitePage() {
  return (
    <div className="page">
      <Helmet>
        <title>Politique de confidentialité – GrEco</title>
        <meta
          name="description"
          content="Politique de confidentialité de GrEco : utilisation des données, cookies, analytics et respect de la vie privée (exemple pédagogique)."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/confidentialite" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Confidentialité</p>
        <h1 className="page-title">Politique de confidentialité (exemple).</h1>
        <p className="page-lead">
          Cette page présente, à titre d&apos;exemple pédagogique, la manière dont les données
          pourraient être traitées dans le cadre d&apos;une version opérationnelle de GrEco, dans le
          respect du RGPD et des recommandations de la CNIL.
        </p>
      </header>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">1. Responsable du traitement</h2>
          <p className="section-sub">
            Le responsable du traitement serait l&apos;éditeur de la plateforme GrEco (dénomination,
            forme juridique, coordonnées à compléter dans une version réelle).
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">2. Données traitées et finalités</h2>
          <p className="section-sub">
            Dans une version fonctionnelle, GrEco traiterait uniquement les données strictement
            nécessaires au bon fonctionnement du service et à l&apos;amélioration de l&apos;expérience
            utilisateur.
          </p>
          <ul className="list-muted">
            <li>
              <strong>Données de compte</strong> : nom, prénom, adresse e-mail, identifiants de
              connexion (mot de passe hashé), afin de créer et gérer un compte utilisateur.
            </li>
            <li>
              <strong>Données de commande</strong> : produits sélectionnés, montants, adresse de
              livraison et de facturation (si implémentées), pour permettre la préparation et le
              suivi des commandes.
            </li>
            <li>
              <strong>Données de navigation (analytics)</strong> : événements de type
              &nbsp;<code>page_view</code> ou similaires, générés par la couche de données
              (&quot;dataLayer&quot;) et le hook <code>usePageView</code>, afin de mesurer
              l&apos;utilisation du site et améliorer l&apos;ergonomie.
            </li>
            <li>
              <strong>Données techniques</strong> : journaux de serveurs, logs techniques de la
              brique de scraping (horodatage, URL appelées, codes HTTP), pour assurer la sécurité,
              la maintenance et la détection d&apos;anomalies.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">3. Base légale des traitements</h2>
          <p className="section-sub">
            Les principaux traitements reposeraient sur les bases légales suivantes (à confirmer et
            adapter avec un·e juriste ou DPO avant mise en production).
          </p>
          <ul className="list-muted">
            <li>
              <strong>Gestion du compte et des commandes</strong> : exécution du contrat (article
              6-1 b du RGPD).
            </li>
            <li>
              <strong>Support et assistance</strong> (formulaire de contact, e-mails de réponse) :
              intérêt légitime de GrEco à répondre aux demandes des utilisateurs.
            </li>
            <li>
              <strong>Mesure d&apos;audience</strong> : intérêt légitime ou consentement (à arbitrer
              selon l’outil retenu), dans le respect des lignes directrices de la CNIL sur les
              cookies et autres traceurs.
            </li>
            <li>
              <strong>Brique de scraping / veille concurrentielle</strong> : intérêt légitime pour
              la veille de marché B2B et l&apos;enrichissement de catalogue, en veillant à ne pas
              collecter de données à caractère personnel et à respecter les CGU et fichiers
              &quot;robots.txt&quot; des sites sources.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">4. Cookies et mesure d&apos;audience</h2>
          <p className="section-sub">
            GrEco utilise une couche d&apos;événements techniques (<code>window.dataLayer</code>) et
            peut activer une solution de mesure d&apos;audience (GA4) afin de comprendre l&apos;usage
            global du site et améliorer l&apos;expérience.
          </p>
          <ul className="list-muted">
            <li>
              La couche <code>window.dataLayer</code> envoie des événements de navigation (type de
              page, chemin, etc.) sans contenu libre saisi par l&apos;utilisateur.
            </li>
            <li>
              Le bandeau de consentement enregistre le choix dans un cookie{' '}
              <code>greco_cookie_consent</code>. Les scripts analytics (Google Analytics 4) ne sont
              injectés <strong>qu&apos;après opt-in</strong>. En cas de refus, aucun cookie
              d&apos;analyse n&apos;est déposé et aucune requête analytics n&apos;est envoyée.
            </li>
            <li>
              Dans une version réelle, les paramètres de l&apos;outil d&apos;analytics devraient être
              configurés pour limiter la portée des données (pseudonymisation d&apos;IP, durée de
              conservation courte, aucune réutilisation marketing sans consentement).
            </li>
            <li>
              Les préférences peuvent être modifiées à tout moment via le lien{' '}
              <strong>Préférences cookies</strong> présent en pied de page.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">5. Brique de scraping et veille concurrentielle</h2>
          <p className="section-sub">
            GrEco peut, dans une version avancée, intégrer une brique de scraping destinée à
            agréger des offres publiques afin de réaliser une veille concurrentielle et d&apos;enrichir
            le catalogue des produits référencés.
          </p>
          <ul className="list-muted">
            <li>
              Le script de scraping est conçu pour <strong>respecter les indications du fichier
              &quot;robots.txt&quot;</strong> de chaque site cible et appliquer un
              <strong>rate limiting</strong> afin de limiter la charge sur les serveurs tiers.
            </li>
            <li>
              Les données collectées sont limitées à des informations publiques sur les offres
              (nom du produit, prix, URL, enseigne) et ne doivent pas inclure de données
              concernant des personnes physiques identifiables.
            </li>
            <li>
              Les CGU des sites sources doivent être revues et, le cas échéant, un accord
              contractuel ou une API officielle doit être privilégié avant tout déploiement réel.
            </li>
            <li>
              Les journaux (logs) associés au scraping sont limités aux informations techniques
              nécessaires au suivi et à la sécurité (horodatage, URL, codes de retour), avec une
              durée de conservation proportionnée.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">6. Durée de conservation</h2>
          <p className="section-sub">
            Les durées de conservation doivent être définies pour chaque catégorie de données et
            documentées dans un registre des traitements.
          </p>
          <ul className="list-muted">
            <li>Comptes inactifs : suppression ou anonymisation après une certaine période.</li>
            <li>
              Données de commande : conservation pendant la durée nécessaire aux obligations
              légales (comptabilité, fiscalité) puis archivage ou anonymisation.
            </li>
            <li>
              Données d&apos;analytics : conservation agrégée, avec suppression des logs bruts au bout
              de quelques mois.
            </li>
            <li>
              Logs techniques de scraping : conservation courte, strictement limitée aux besoins de
              diagnostic et de sécurité.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">7. Droits des personnes</h2>
          <p className="section-sub">
            Conformément au RGPD, toute personne concernée par un traitement de données
            personnelles disposerait notamment des droits suivants :
          </p>
          <ul className="list-muted">
            <li>Droit d&apos;accès à ses données et d&apos;en obtenir une copie.</li>
            <li>Droit de rectification des données inexactes ou incomplètes.</li>
            <li>
              Droit d&apos;effacement (&quot;droit à l&apos;oubli&quot;) dans les cas prévus par le RGPD.
            </li>
            <li>Droit d&apos;opposition à certains traitements, notamment la prospection.</li>
            <li>Droit à la limitation du traitement et à la portabilité des données.</li>
            <li>
              Droit d&apos;introduire une réclamation auprès de la CNIL en cas de difficulté
              non résolue.
            </li>
          </ul>
          <p className="section-sub">
            Dans une version opérationnelle, un point de contact (e-mail dédié, formulaire) serait
            précisé pour l&apos;exercice de ces droits.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">8. Sécurité des données</h2>
          <p className="section-sub">
            GrEco viserait à mettre en œuvre des mesures techniques et organisationnelles adaptées
            afin de protéger les données contre la perte, l&apos;accès non autorisé ou la divulgation.
          </p>
          <ul className="list-muted">
            <li>Utilisation de connexions sécurisées (HTTPS) pour tout échange de données.</li>
            <li>Gestion des habilitations et contrôle d&apos;accès aux environnements sensibles.</li>
            <li>
              Journalisation des événements importants (accès administrateur, erreurs critiques) et
              supervision de la plateforme.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">9. Mise à jour de cette politique</h2>
          <p className="section-sub">
            Cette politique de confidentialité est fournie comme un exemple pour la maquette GrEco.
            Elle devrait être finalisée, validée et mise à jour régulièrement avant toute
            utilisation en production, en fonction des évolutions du service et du cadre légal.
          </p>
        </article>
      </section>
    </div>
  );
}

export default ConfidentialitePage;

