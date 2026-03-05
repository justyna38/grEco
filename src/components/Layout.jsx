import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CookieBanner from './CookieBanner.jsx';

function Layout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <main id="contenu-principal" className="app-main">
        {children}
      </main>
      <CookieBanner />
      <Footer />
    </div>
  );
}

export default Layout;
