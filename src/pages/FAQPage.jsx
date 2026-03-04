import { Helmet } from 'react-helmet-async';

function FAQPage() {
  return (
    <div className="page">
      <Helmet>
        <title>FAQ – GrEco</title>
        <meta
          name="description"
          content="Questions fréquentes sur GrEco : fonctionnement, éligibilité des producteurs, zone couverte, types de produits et impact écologique."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Qui peut acheter via GrEco ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    "Toute personne habitant dans la métropole grenobloise et souhaitant consommer local et responsable. L'application est pensée pour un usage régulier, mais sans engagement."
                }
              },
              {
                '@type': 'Question',
                name: 'Quels types de producteurs sont référencés ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Maraîchers, éleveurs, boulangers, fromagers, épiceries bio, commerces vrac… Les acteurs sont choisis pour leurs pratiques écoresponsables et leur ancrage local autour de Grenoble.'
                }
              },
              {
                '@type': 'Question',
                name: 'Comment est définie la zone couverte par GrEco ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    "GrEco se concentre sur un rayon d'environ 30 à 50 km autour de Grenoble afin de rester cohérent avec une logique de circuit court tout en offrant une diversité d'offre."
                }
              },
              {
                '@type': 'Question',
                name: 'En quoi GrEco est différent d’une application de livraison classique ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    "L'objectif n'est pas la livraison ultra-rapide mais la qualité, la traçabilité et la réduction de l'impact environnemental. La logistique est optimisée pour limiter les trajets et l'offre est 100 % locale."
                }
              },
              {
                '@type': 'Question',
                name: 'Comment sont rémunérés les producteurs partenaires ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    "Le modèle économique cherche à mieux rémunérer les producteurs qu'en grande distribution ou via certains intermédiaires, en limitant les commissions et en construisant les prix avec eux."
                }
              },
              {
                '@type': 'Question',
                name: 'Je suis producteur, comment rejoindre GrEco ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Vous pouvez consulter la page Espace producteurs puis nous contacter via le formulaire dédié. Nous échangeons sur vos pratiques, votre localisation et vos besoins avant toute intégration.'
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">FAQ</p>
        <h1 className="page-title">Questions fréquentes.</h1>
        <p className="page-lead">
          Retrouvez ici les réponses aux principales questions sur le fonctionnement de GrEco, côté
          consommateurs et producteurs.
        </p>
      </header>

      <section className="section">
        <div className="grid grid-2">
          <article className="faq-item">
            <h2 className="faq-question">Qui peut acheter via GrEco ?</h2>
            <p className="faq-answer">
              Toute personne habitant dans la métropole grenobloise et souhaitant consommer local
              et responsable. L&apos;application est pensée pour un usage régulier, mais sans
              engagement.
            </p>
          </article>

          <article className="faq-item">
            <h2 className="faq-question">Quels types de producteurs sont référencés ?</h2>
            <p className="faq-answer">
              Maraîchers, éleveurs, boulangers, fromagers, épiceries bio, commerces vrac… Les
              acteurs sont choisis pour leurs pratiques écoresponsables et leur ancrage local.
            </p>
          </article>

          <article className="faq-item">
            <h2 className="faq-question">Comment est définie la zone couverte ?</h2>
            <p className="faq-answer">
              GrEco se concentre sur un rayon d&apos;environ 30 à 50 km autour de Grenoble, afin de
              rester cohérent avec une logique de circuit court tout en offrant une diversité
              d&apos;offre.
            </p>
          </article>

          <article className="faq-item">
            <h2 className="faq-question">En quoi GrEco est différent d’une application de livraison classique ?</h2>
            <p className="faq-answer">
              L&apos;objectif n&apos;est pas la livraison ultra-rapide mais la qualité, la
              traçabilité et la réduction de l&apos;impact environnemental. La logistique est
              optimisée pour limiter les trajets, et l&apos;offre est 100 % locale.
            </p>
          </article>

          <article className="faq-item">
            <h2 className="faq-question">Comment sont rémunérés les producteurs ?</h2>
            <p className="faq-answer">
              Le modèle économique cherche à mieux rémunérer les producteurs qu&apos;en grande
              distribution ou via certains intermédiaires, en limitant les commissions et en
              discutant des prix avec eux.
            </p>
          </article>

          <article className="faq-item">
            <h2 className="faq-question">Je suis producteur, comment rejoindre GrEco ?</h2>
            <p className="faq-answer">
              Vous pouvez consulter la page &quot;Espace producteurs&quot; puis nous contacter via
              le formulaire dédié. Nous échangerons sur vos pratiques, votre localisation et vos
              besoins.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;

