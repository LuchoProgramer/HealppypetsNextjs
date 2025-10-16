import { SITE_CONFIG, SERVICES, WORKING_HOURS } from "@/lib/constants";

// Helper para formatear las horas para el schema (returns array of strings "Mo 09:00-18:00")
const formatOpeningHours = (): string[] => {
  const dayMapping: { [key: string]: string[] } = {
    "Lunes - Viernes": ["Mo", "Tu", "We", "Th", "Fr"],
    "Sábado": ["Sa"],
    "Domingo": ["Su"],
  };

  return WORKING_HOURS.map(item => {
    const days = dayMapping[item.day] || [];
    if (item.hours.toLowerCase() === 'cerrado') {
      return days.map(day => `${day} 00:00-00:00`); // Indica cerrado
    }
    const hours = item.hours.replace(/\s/g, '').replace(/AM/g, '').replace(/PM/g, '');
    const [start, end] = hours.split('-');
    return days.map(day => `${day} ${start}-${end}`);
  }).flat();
};

// Local business as plain JSON-LD object (Record) to avoid strict type conflicts
const localBusinessRecord: Record<string, unknown> = {
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  image: `${SITE_CONFIG.url}/og-image.png`,
  description: SITE_CONFIG.description,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: "Pichincha",
    postalCode: "170132",
    addressCountry: "EC",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.0915484,
    longitude: -78.472321,
  },
  openingHours: formatOpeningHours(),
  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.tiktok,
  ],
  priceRange: "$$(",
};

export function getLocalBusinessJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["VeterinaryCare", "Organization"],
    ...localBusinessRecord,
  };
}

// Website (typed)
const websiteRecord: Record<string, unknown> = {
  url: SITE_CONFIG.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_CONFIG.url}/buscar?q={search_term_string}`,
  },
};

export function getWebsiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    ...websiteRecord,
  };
}

// Genera un schema para una página de servicio específica y lo devuelve con @context/@type
export function generateServiceSchema(serviceId: typeof SERVICES[number]['id']): Record<string, unknown> {
  const service = SERVICES.find(s => s.id === serviceId);
  if (!service) throw new Error(`Servicio no encontrado: ${serviceId}`);

  const svc: Record<string, unknown> = {
    serviceType: service.title,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "VeterinaryCare",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "City",
      name: "Quito",
    },
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
  };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    ...svc,
  };
}

// Genera BreadcrumbList con tipos
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown> {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_CONFIG.url}${item.url}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}