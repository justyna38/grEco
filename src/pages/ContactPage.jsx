import { Helmet } from 'react-helmet-async';

function ContactPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Contact – GrEco</title>
        <meta
          name="description"
          content="Contactez l’équipe GrEco pour toute question, partenariat ou demande d’inscription en tant que producteur autour de Grenoble."
        />
        <link rel="canonical" href="https://gr-eco.vercel.app/contact" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Contact</p>
        <h1 className="page-title">Échangeons sur votre projet ou votre territoire.</h1>
        <p className="page-lead">
          Que vous soyez consommateur, producteur, commerçant ou partenaire potentiel, vous pouvez
          nous écrire via le formulaire ci-dessous.
        </p>
      </header>

      <section className="section">
        <form className="form" aria-label="Formulaire de contact">
          <div className="form-row form-row-2">
            <div>
              <label className="label" htmlFor="nom">
                Nom / Prénom
              </label>
              <input id="nom" type="text" name="nom" autoComplete="name" />
            </div>
            <div>
              <label className="label" htmlFor="email">
                E-mail
              </label>
              <input id="email" type="email" name="email" autoComplete="email" />
            </div>
          </div>

          <div className="form-row form-row-2">
            <div>
              <label className="label" htmlFor="profil">
                Je suis...
              </label>
              <select id="profil" name="profil" defaultValue="">
                <option value="" disabled>
                  Choisissez une option
                </option>
                <option value="consommateur">Consommateur·rice</option>
                <option value="producteur">Producteur / Commerçant</option>
                <option value="partenaire">Partenaire / Institution</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="label" htmlFor="commune">
                Commune
              </label>
              <input id="commune" type="text" name="commune" />
              <p className="helper">
                Exemple : Grenoble, Fontaine, Saint-Martin-d&apos;Hères, Échirolles...
              </p>
            </div>
          </div>

          <div>
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea id="message" name="message" />
          </div>

          <button type="submit" className="btn btn-primary">
            Envoyer le message
          </button>
          <p className="note">
            Ce formulaire est une maquette pour le moment. Dans une version opérationnelle, il
            serait connecté à un outil de gestion des demandes (e-mail, CRM, etc.).
          </p>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;

