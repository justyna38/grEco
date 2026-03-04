import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function PourLesProducteursPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Espace producteurs – GrEco</title>
        <meta
          name="description"
          content="GrEco aide les producteurs et commerçants écoresponsables autour de Grenoble à vendre plus régulièrement, sans complexifier leur organisation. Découvrez l’espace producteurs."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/pour-les-producteurs" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Espace producteurs</p>
        <h1 className="page-title">Vendre local, sans y passer vos journées.</h1>
        <p className="page-lead">
          GrEco est pensé pour soulager la partie la plus chronophage de la vente directe : la
          centralisation des commandes et la logistique, tout en vous donnant plus de visibilité.
        </p>
      </header>

      <section className="section">
        <div className="two-column">
          <article className="card-soft">
            <h2 className="section-title">Les problèmes que nous adressons</h2>
            <p className="section-sub">
              Les producteurs partenaires nous décrivent des difficultés communes, que GrEco veut
              aider à résoudre.
            </p>
            <ul className="checklist">
              <li>Difficulté à toucher une nouvelle clientèle au-delà du réseau habituel</li>
              <li>Temps important passé à gérer les commandes et les permanences</li>
              <li>Marges compressées lorsqu&apos;ils passent par des intermédiaires</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="section-title">Ce que GrEco met à votre disposition</h2>
            <p className="section-sub">
              Une vitrine commune, un outil de prise de commande et une logistique optimisée à
              l&apos;échelle de la métropole.
            </p>
            <ul className="checklist">
              <li>Fiche producteur détaillée avec vos produits, votre histoire, vos pratiques</li>
              <li>Outil de commande simple pour vos clients réguliers et nouveaux</li>
              <li>Accompagnement à la mise en ligne de votre offre</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-3">
          <article className="card-soft">
            <h2 className="card-title">Visibilité accrue</h2>
            <p className="card-sub">
              Rejoignez un espace numérique qui rassemble les habitants de Grenoble désireux de
              consommer local.
            </p>
            <ul className="checklist">
              <li>Présence sur une marketplace dédiée au local</li>
              <li>Recherche par commune, type de produit, labels</li>
              <li>Possibilité de raconter votre histoire</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="card-title">Régularité des commandes</h2>
            <p className="card-sub">
              L&apos;objectif est de stabiliser un volume de commandes récurrent, semaine après
              semaine.
            </p>
            <ul className="checklist">
              <li>Mise en avant des abonnements paniers</li>
              <li>Outils de fidélisation et de communication</li>
              <li>Indicateurs clés sur la récurrence des achats</li>
            </ul>
          </article>
          <article className="card-soft">
            <h2 className="card-title">Moins de contraintes logistiques</h2>
            <p className="card-sub">
              En regroupant les commandes et en organisant des tournées, GrEco limite les allers-retours.
            </p>
            <ul className="checklist">
              <li>Créneaux coordonnés avec d&apos;autres producteurs</li>
              <li>Points de collecte mutualisés</li>
              <li>Transparence sur la logistique pour l&apos;utilisateur final</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="card-soft">
          <div className="two-column">
            <div>
              <p className="page-kicker">Intéressé·e ?</p>
              <h2 className="section-title">Rejoindre les premiers producteurs GrEco.</h2>
              <p className="section-sub">
                Si vous êtes producteur, commerçant engagé, AMAP ou coopérative de la région
                grenobloise, nous serions ravis d&apos;échanger avec vous.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Prendre contact
              </Link>
              <Link to="/producteurs" className="btn btn-outline">
                Voir les profils types
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PourLesProducteursPage;

