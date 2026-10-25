import { useEffect } from 'react';

/**
 * Dynamic Page SEO Component
 * Manages document title, meta descriptions, Open Graph, Twitter, Canonical URLs,
 * and page-specific JSON-LD structured data.
 */
export default function SEO({ 
  title, 
  description, 
  canonicalPath = '', 
  noindex = false,
  schema = null 
}) {
  useEffect(() => {
    // 1. Page Title
    const brandSuffix = 'VT Business Solutions';
    const siteTitle = title ? `${title} | ${brandSuffix}` : `VT Business Solutions | Practical IT Solutions & Business Compliance Support`;
    document.title = siteTitle;

    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // 3. Robots Directives
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    // 4. Open Graph Meta
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', siteTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const fullCanonicalUrl = `https://vtbusinesssupport.in${canonicalPath}`;
    if (ogUrl) ogUrl.setAttribute('content', fullCanonicalUrl);

    // 5. Twitter Card Meta
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', siteTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc && description) twitterDesc.setAttribute('content', description);

    // 6. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 7. Page-Specific JSON-LD Schema
    const existingSchemaTag = document.getElementById('page-json-ld');
    if (existingSchemaTag) {
      existingSchemaTag.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'page-json-ld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const tag = document.getElementById('page-json-ld');
      if (tag) tag.remove();
    };
  }, [title, description, canonicalPath, noindex, schema]);

  return null;
}
