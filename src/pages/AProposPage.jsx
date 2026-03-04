import { Helmet } from 'react-helmet-async';

function AProposPage() {
  return (
    <div className="page">
      <Helmet>
        <title>À propos de GrEco</title>
        <meta
          name="description"
          content="Découvrez l’histoire et le positionnement de GrEco, la marketplace locale écoresponsable dédiée à la métropole grenobloise."
        />
        <link rel="canonical" href="https://www.greco-local.fr/a-propos" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">À propos</p>
        <h1 className="page-title">Pourquoi GrEco ?</h1>
        <p className="page-lead">
          GrEco est née d&apos;une observation simple : malgré une offre locale riche et une
          population sensibilisée à l’écologie, il manquait un outil moderne, simple et 100 % local
          pour faire le lien entre les deux.
        </p>
      </header>

      <section className="section">
        <div className="two-column">
          <article className="card-soft">
            <h2 className="section-title">Un territoire déjà tourné vers le circuit court</h2>
            <p className="section-sub">
              La région grenobloise compte de nombreuses AMAP, marchés, coopératives et initiatives
              citoyennes autour de l’alimentation durable.
            </p>
            <ul className="checklist">
              <li>Présence forte d’initiatives de circuit court</li>
              <li>Habitants déjà sensibilisés aux enjeux environnementaux</li>
              <li>Une culture de la montagne et du terroir local</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="section-title">Mais un manque d’outil simple et centralisé</h2>
            <p className="section-sub">
              Beaucoup d’habitants veulent consommer local, mais se heurtent à des contraintes
              pratiques : créneaux limités, multiplicité des interlocuteurs, manque de visibilité sur
              l’offre.
            </p>
            <ul className="checklist">
              <li>Pas de solution 100 % locale pour Grenoble</li>
              <li>Contraintes fortes des systèmes actuels (AMAP, marchés...)</li>
              <li>Difficulté à voir l’offre globale des producteurs</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <article className="card-soft">
          <h2 className="section-title">La conviction derrière GrEco</h2>
          <p className="section-sub">
            Si une application moderne, simple et focalisée sur les producteurs écoresponsables de
            la métropole grenobloise propose une excellente expérience utilisateur, alors une part
            significative des habitants déjà sensibles au local adoptera une consommation régulière
            via cette plateforme.
          </p>
          <ul className="checklist">
            <li>Une app pensée d’abord pour l’usage, ensuite pour la technique</li>
            <li>Un modèle aligné avec la rémunération des producteurs</li>
            <li>Une vision à long terme : installer une nouvelle habitude</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default AProposPage;

