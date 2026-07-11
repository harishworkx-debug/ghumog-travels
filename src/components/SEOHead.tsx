import { useEffect } from 'react';
import { Hotel } from '../lib/data';
import { generateMeta, generateHotelSchema, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema, generateOrganizationSchema } from '../lib/seo-engine';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  hotel?: Hotel; // For backward compatibility with HotelDetailPage
}

export function SEOHead({ title, description, keywords, image, url, hotel }: SEOHeadProps) {
  useEffect(() => {
    // Basic SEO
    let finalTitle = title || 'GhumoG';
    let finalDesc = description || '';
    let finalKeywords = keywords || '';
    let finalUrl = url || window.location.href;
    let finalImage = image || window.location.origin + '/favicon.png';
    
    let generatedMeta: ReturnType<typeof generateMeta> | null = null;

    if (hotel) {
      generatedMeta = generateMeta(hotel);
      finalTitle = title || generatedMeta.title;
      finalDesc = description || generatedMeta.description;
      finalKeywords = keywords || generatedMeta.keywords;
      finalUrl = url || generatedMeta.url;
      finalImage = image || generatedMeta.image;
    }

    document.title = finalTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      if (!content) return;
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', finalDesc);
    setMeta('keywords', finalKeywords);

    // OpenGraph
    setMeta('og:title', finalTitle, true);
    setMeta('og:description', finalDesc, true);
    setMeta('og:url', finalUrl, true);
    setMeta('og:image', finalImage, true);
    setMeta('og:type', 'website', true);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', finalTitle);
    setMeta('twitter:description', finalDesc);
    setMeta('twitter:image', finalImage);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', finalUrl);

    // Structured Data (JSON-LD)
    const setJsonLd = (id: string, data: any) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(data);
    };

    setJsonLd('schema-organization', generateOrganizationSchema());

    if (hotel && generatedMeta) {
      setJsonLd('schema-hotel', generateHotelSchema(hotel, generatedMeta));
      setJsonLd('schema-local-business', generateLocalBusinessSchema(hotel, generatedMeta));
      
      const faqSchema = generateFAQSchema(hotel);
      if (faqSchema) setJsonLd('schema-faq', faqSchema);
      else {
        const existingFaq = document.getElementById('schema-faq');
        if (existingFaq) existingFaq.remove();
      }

      setJsonLd('schema-breadcrumb', generateBreadcrumbSchema(hotel, generatedMeta));
    }

    // Cleanup function
    return () => {
      document.title = 'GhumoG - Travel Beyond Limits';
      ['schema-organization', 'schema-hotel', 'schema-local-business', 'schema-faq', 'schema-breadcrumb'].forEach(id => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, [title, description, keywords, image, url, hotel]);

  return null;
}
