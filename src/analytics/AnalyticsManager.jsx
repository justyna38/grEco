import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { pushDataLayerEvent } from './dataLayer.js';

function derivePageMeta(pathname) {
  const staticMap = {
    '/': { page_type: 'home', page_name: 'Accueil' },
    '/marche': { page_type: 'pillar', page_name: 'Marché local' },
    '/produits': { page_type: 'product_list', page_name: 'Produits à acheter' },
    '/producteurs': { page_type: 'directory', page_name: 'Producteurs' },
    '/comment-ca-marche': { page_type: 'guide', page_name: 'Comment ça marche' },
    '/impact-ecologique': { page_type: 'content', page_name: 'Impact écologique' },
    '/engagements': { page_type: 'content', page_name: 'Engagements' },
    '/pour-les-producteurs': { page_type: 'b2b', page_name: 'Espace producteurs' },
    '/a-propos': { page_type: 'content', page_name: 'À propos' },
    '/faq': { page_type: 'faq', page_name: 'FAQ' },
    '/blog': { page_type: 'blog_list', page_name: 'Blog' },
    '/contact': { page_type: 'lead', page_name: 'Contact' },
    '/mentions-legales': { page_type: 'legal', page_name: 'Mentions légales' },
    '/confidentialite': { page_type: 'legal', page_name: 'Politique de confidentialité' },
    '/connexion': { page_type: 'auth', page_name: 'Connexion' },
    '/panier': { page_type: 'cart', page_name: 'Panier' },
    '/checkout': { page_type: 'checkout', page_name: 'Paiement' },
    '/kpi': { page_type: 'analytics', page_name: 'Dashboard KPI' },
  };

  if (staticMap[pathname]) return staticMap[pathname];
  if (pathname.startsWith('/blog/')) return { page_type: 'blog_article', page_name: 'Article blog' };
  if (pathname.startsWith('/producteurs/')) return { page_type: 'producer_detail', page_name: 'Fiche producteur' };

  return { page_type: 'unknown', page_name: 'Page' };
}

export default function AnalyticsManager() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const userSegment = useMemo(() => (isAuthenticated ? 'auth' : 'guest'), [isAuthenticated]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.__greco_user_segment = userSegment;
  }, [userSegment]);

  useEffect(() => {
    const { pathname, search, hash } = location;
    const pagePath = `${pathname}${search || ''}${hash || ''}`;
    const { page_type, page_name } = derivePageMeta(pathname);

    pushDataLayerEvent('page_view', {
      page_path: pagePath,
      page_type,
      page_name,
      page_title: typeof document !== 'undefined' ? document.title : undefined,
    });
  }, [location]);

  return null;
}

