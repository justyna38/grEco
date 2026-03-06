import { Helmet } from 'react-helmet-async';

function CgvPage() {
  return (
    <div className="page">
      <Helmet>
        <title>CGV – GrEco</title>
        <meta
          name="description"
          content="Conditions Générales de Vente (CGV) – modèle pédagogique pour une marketplace locale écoresponsable."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/cgv" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">CGV</p>
        <h1 className="page-title">Conditions Générales de Vente (exemple).</h1>
        <p className="page-lead">
          Cette page propose un modèle de CGV pour la maquette GrEco. Elle doit être adaptée aux
          flux réels (paiement, livraison, SAV, médiation, identité du vendeur) et validée avant
          toute exploitation commerciale.
        </p>
      </header>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">1. Champ d&apos;application</h2>
          <p className="section-sub">
            Les présentes CGV s&apos;appliquent à toute commande passée sur GrEco, dans les limites
            d&apos;une version opérationnelle. Dans cette maquette, l&apos;achat est présenté à titre de
            démonstration.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">2. Produits et disponibilité</h2>
          <ul className="list-muted">
            <li>
              Les fiches produits décrivent les caractéristiques essentielles (origine, prix,
              conditionnement) lorsque l&apos;information est disponible.
            </li>
            <li>
              Les offres sont valables dans la limite des stocks et des contraintes des producteurs.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">3. Prix</h2>
          <p className="section-sub">
            Les prix affichés sont indiqués en euros. Dans une version réelle, il faut préciser si
            les prix sont TTC, les frais éventuels (livraison, service), et les modalités de
            facturation.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">4. Commande</h2>
          <ul className="list-muted">
            <li>
              Le Client sélectionne des produits, vérifie son panier et confirme sa commande.
            </li>
            <li>
              La commande devient définitive après confirmation et, dans une version réelle, après
              validation du paiement.
            </li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">5. Paiement</h2>
          <p className="section-sub">
           Le paiement doit être sécurisé (prestataire de paiement),
            accompagné des informations obligatoires (moyens acceptés, échéance, lutte contre la
            fraude).
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">6. Livraison / retrait</h2>
          <p className="section-sub">
            Les modalités (zones, délais, créneaux, points relais, frais) doivent être précisées
            par les producteurs/vendeurs et affichées avant validation de commande.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">7. Droit de rétractation</h2>
          <p className="section-sub">
            En France, le droit de rétractation s&apos;applique en principe aux contrats à distance,
            avec des exceptions (notamment produits périssables). Dans une version réelle, il faut
            détailler les règles applicables selon les catégories vendues.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">8. Service client, retours, litiges</h2>
          <p className="section-sub">
            Dans une version réelle, il faut préciser les canaux de contact, délais de réponse, et
            mettre en place une procédure de traitement des réclamations, ainsi que les mentions
            obligatoires (médiation de la consommation le cas échéant).
          </p>
        </article>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">9. Droit applicable</h2>
          <p className="section-sub">
            Les CGV sont soumises au droit français. Les clauses finales (médiation, tribunal
            compétent) doivent être adaptées au statut de l&apos;éditeur et au modèle marketplace
            retenu.
          </p>
        </article>
      </section>
    </div>
  );
}

export default CgvPage;

