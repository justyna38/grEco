import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import MarchePage from './pages/MarchePage.jsx';
import ProducteursPage from './pages/ProducteursPage.jsx';
import ProducteurDetailPage from './pages/ProducteurDetailPage.jsx';
import CommentCaMarchePage from './pages/CommentCaMarchePage.jsx';
import ImpactEcologiquePage from './pages/ImpactEcologiquePage.jsx';
import EngagementsPage from './pages/EngagementsPage.jsx';
import PourLesProducteursPage from './pages/PourLesProducteursPage.jsx';
import AProposPage from './pages/AProposPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogArticlePage from './pages/BlogArticlePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import MentionsLegalesPage from './pages/MentionsLegalesPage.jsx';
import ConfidentialitePage from './pages/ConfidentialitePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProduitsPage from './pages/ProduitsPage.jsx';

const siteUrl = 'https://www.greco-local.fr';

function App() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta
          name="description"
          content="GrEco connecte les producteurs et commerces écoresponsables de la métropole grenobloise avec les consommateurs, pour favoriser les circuits courts et la consommation durable."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GrEco" />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:title"
          content="GrEco – Marketplace locale écoresponsable à Grenoble"
        />
        <meta
          property="og:description"
          content="Découvrez les producteurs et commerces écoresponsables autour de Grenoble et commandez en quelques clics."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'GrEco',
            url: siteUrl,
            description:
              'Marketplace locale écoresponsable pour la métropole grenobloise.',
            inLanguage: 'fr-FR'
          })}
        </script>
      </Helmet>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marche" element={<MarchePage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/produits" element={<ProduitsPage />} />
          <Route path="/producteurs" element={<ProducteursPage />} />
          <Route path="/producteurs/:id" element={<ProducteurDetailPage />} />
          <Route path="/comment-ca-marche" element={<CommentCaMarchePage />} />
          <Route path="/impact-ecologique" element={<ImpactEcologiquePage />} />
          <Route path="/engagements" element={<EngagementsPage />} />
          <Route path="/pour-les-producteurs" element={<PourLesProducteursPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/confidentialite" element={<ConfidentialitePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

