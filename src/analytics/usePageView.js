import { useEffect } from 'react';
import { pushDataLayerEvent } from './dataLayer.js';

export function usePageView({ pageType, pageName, pagePath }) {
  useEffect(() => {
    pushDataLayerEvent('page_view', {
      page_type: pageType,
      page_name: pageName,
      page_path: pagePath
    });
  }, [pageType, pageName, pagePath]);
}

