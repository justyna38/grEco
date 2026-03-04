import { Helmet } from 'react-helmet-async';

function ImpactEcologiquePage() {
  return (
    <div className="page">
      <Helmet>
        <title>Impact écologique – GrEco</title>
        <meta
          name="description"
          content="Découvrez comment GrEco contribue à réduire l’empreinte carbone liée au transport alimentaire et à favoriser les circuits courts autour de Grenoble."
        />
        <link rel="canonical" href="https://www.greco-local.fr/impact-ecologique" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Impact écologique</p>
        <h1 className="page-title">
          Mesurer et réduire l&apos;empreinte carbone de nos assiettes, ensemble.
        </h1>
        <p className="page-lead">
          GrEco est pensée pour réduire les kilomètres parcourus par les produits alimentaires et
          encourager une consommation plus locale, plus saisonnière et moins gaspillée.
        </p>
      </header>

      <section className="section">
        <div className="two-column">
          <article className="card-soft">
            <h2 className="section-title">Limiter les kilomètres parcourus</h2>
            <p className="section-sub">
              En concentrant l&apos;offre sur un rayon de 30 à 50 km autour de Grenoble, GrEco
              réduit les distances de transport par rapport aux circuits d&apos;approvisionnement
              classiques.
            </p>
            <table className="table" aria-label="Comparaison indicative des distances">
              <thead>
                <tr>
                  <th>Type de circuit</th>
                  <th>Distance moyenne</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Paniers GrEco</td>
                  <td>30–50 km</td>
                </tr>
                <tr>
                  <td>Chaîne logistique longue distance</td>
                  <td>200–1 000+ km</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              Ces données sont indicatives et visent à illustrer l&apos;ordre de grandeur entre un
              circuit court local et un circuit &quot;classique&quot;.
            </p>
          </article>

          <article className="card-soft">
            <h2 className="section-title">Rendre visible l&apos;impact</h2>
            <p className="section-sub">
              L&apos;application met en avant les informations clés : distance, saisonnalité,
              labels, et propose des repères pédagogiques sur les émissions évitées.
            </p>
            <ul className="checklist">
              <li>Indication des kilomètres estimés économisés par panier</li>
              <li>Mise en avant des produits les plus vertueux</li>
              <li>Conseils pour optimiser ses choix (saison, vrac, mutualisation des livraisons)</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-3">
          <article className="card-soft">
            <h2 className="card-title">Saison &amp; anti-gaspillage</h2>
            <p className="card-sub">
              GrEco encourage des achats alignés avec les saisons pour limiter les serres chauffées
              et les importations lointaines.
            </p>
            <ul className="checklist">
              <li>Signalement des produits hors saison</li>
              <li>Mise en avant des paniers anti-gaspi</li>
              <li>Recettes pour cuisiner les surplus</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="card-title">Moins d&apos;intermédiaires</h2>
            <p className="card-sub">
              En favorisant la vente directe ou quasi directe, GrEco réduit les étapes de stockage,
              de reconditionnement et de transport.
            </p>
            <ul className="checklist">
              <li>Rémunération plus juste pour les producteurs</li>
              <li>Moins de transports &quot;invisibles&quot;</li>
              <li>Relation plus directe entre producteur et consommateur</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="card-title">Logistique optimisée</h2>
            <p className="card-sub">
              Les créneaux et tournées sont pensés pour limiter les kilomètres &quot;à vide&quot; et
              mutualiser les flux.
            </p>
            <ul className="checklist">
              <li>Points de retrait stratégiques</li>
              <li>Livraisons groupées par quartier</li>
              <li>Communication transparente sur la logistique</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default ImpactEcologiquePage;

