import { Hotel, BLOGS, HOTELS } from './data';
import { CITIES, AREAS, DESTINATIONS } from './seo-models';

const DOMAIN = 'https://ghumog.com';

// -----------------------------------------
// Helper functions for programmatic linking
// -----------------------------------------

export function generateRelatedHotels(hotel: Hotel) {
  // Return hotels in the same area or city, excluding the current one
  const related = HOTELS.filter(
    (h) => h.slug !== hotel.slug && (h.areaSlug === hotel.areaSlug || h.citySlug === hotel.citySlug)
  );
  return related.slice(0, 4); // Limit to 4
}

export function generateRelatedBlogs(hotel: Hotel) {
  return BLOGS.filter(
    (b) => b.relatedCitySlug === hotel.citySlug || b.relatedDestinationSlug === hotel.destinationSlug
  ).slice(0, 3);
}

export function generateNearbyPlaces(hotel: Hotel) {
  return AREAS.filter((a) => a.citySlug === hotel.citySlug && a.slug !== hotel.areaSlug).slice(0, 4);
}

export function getDestinationDetails(hotel: Hotel) {
  return DESTINATIONS.find((d) => d.slug === hotel.destinationSlug);
}

export function getCityDetails(hotel: Hotel) {
  return CITIES.find((c) => c.slug === hotel.citySlug);
}

export function getAreaDetails(hotel: Hotel) {
  return AREAS.find((a) => a.slug === hotel.areaSlug);
}

// -----------------------------------------
// SEO Generation Functions
// -----------------------------------------

export function generateCanonical(hotel: Hotel): string {
  return `${DOMAIN}/hotels/${hotel.slug}`;
}

export function generateMeta(hotel: Hotel) {
  const title = hotel.seo?.title || `${hotel.name} | Stays in ${hotel.city}, ${hotel.state}`;
  const description = hotel.seo?.description || `Book ${hotel.name} in ${hotel.area}, ${hotel.city}. ${hotel.tagline}. View rooms, amenities, prices, and guest reviews.`;
  const keywords = hotel.seo?.keywords || `Hotels in ${hotel.city}, ${hotel.name} ${hotel.area}, Stays in ${hotel.city}, ${hotel.state} travel`;
  const url = generateCanonical(hotel);
  const image = `${DOMAIN}${hotel.image || '/favicon.png'}`;

  return { title, description, keywords, url, image };
}

// -----------------------------------------
// Structured Data (JSON-LD) Functions
// -----------------------------------------

export function generateHotelSchema(hotel: Hotel, meta: ReturnType<typeof generateMeta>) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": hotel.name,
    "description": meta.description,
    "image": meta.image,
    "url": meta.url,
    "telephone": "+917018939901",
    "priceRange": `₹${hotel.price} - ₹${hotel.price + 2000}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hotel.address,
      "addressLocality": hotel.city,
      "addressRegion": hotel.state,
      "addressCountry": hotel.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": hotel.latitude,
      "longitude": hotel.longitude
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": hotel.rating,
      "bestRating": "5"
    }
  };
}

export function generateLocalBusinessSchema(hotel: Hotel, meta: ReturnType<typeof generateMeta>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": hotel.name,
    "image": meta.image,
    "telephone": "+917018939901",
    "url": meta.url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hotel.address,
      "addressLocality": hotel.city,
      "addressRegion": hotel.state,
      "addressCountry": hotel.country
    }
  };
}

export function generateFAQSchema(hotel: Hotel) {
  if (!hotel.faqs || hotel.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": hotel.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(hotel: Hotel, meta: ReturnType<typeof generateMeta>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${DOMAIN}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hotels",
        "item": `${DOMAIN}/hotels`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": hotel.city,
        "item": `${DOMAIN}/hotels/${hotel.citySlug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": hotel.name,
        "item": meta.url
      }
    ]
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "GhumoG",
    "url": DOMAIN,
    "logo": `${DOMAIN}/favicon.png`,
    "image": `${DOMAIN}/favicon.png`,
    "description": "GhumoG is a premium travel agency providing the best hotel bookings and travel experiences across the Himalayas and beyond.",
    "telephone": "+917018939901",
    "email": "ghumog.com@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GhumoG Headquarters",
      "addressLocality": "Shimla",
      "addressRegion": "Himachal Pradesh",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/ghumog",
      "https://www.instagram.com/ghumog",
      "https://twitter.com/ghumog"
    ]
  };
}
