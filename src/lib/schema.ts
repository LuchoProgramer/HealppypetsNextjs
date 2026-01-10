import { SITE_CONFIG, SERVICES, WORKING_HOURS } from "@/lib/constants";
import type { VeterinaryCare, WebSite, Service, BreadcrumbList, ListItem, OpeningHoursSpecification } from "schema-dts";

// Additional unified helpers (migrated from primera-cita/schema.ts)

export const localBusinessSchema = ({
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
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
    addressLocality: SITE_CONFIG.address.city, // Quito
    addressRegion: "Pichincha",
    postalCode: "170143", // Código postal de Carcelén
    addressCountry: SITE_CONFIG.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.093433, // Latitud correcta
    longitude: -78.474005, // Longitud correcta
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "13:00"
    } as OpeningHoursSpecification,
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "15:00",
      closes: "18:00"
    } as OpeningHoursSpecification,
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "14:00"
    } as OpeningHoursSpecification,
  ] as OpeningHoursSpecification[],
  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.tiktok,
  ],
  priceRange: "$$",
} as unknown) as VeterinaryCare;

export const websiteSchema = ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_CONFIG.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_CONFIG.url}/buscar?q={search_term_string}`,
    "query": "required name=search_term_string",
  },
} as unknown) as WebSite;

export function getLocalBusinessJsonLd(): Record<string, unknown> {
  return localBusinessSchema as unknown as Record<string, unknown>;
}

export function getWebsiteJsonLd(): Record<string, unknown> {
  return websiteSchema as unknown as Record<string, unknown>;
}

// Backwards-compatible exports used by some pages
export const primeraCitaSchema = ({
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Primera Cita - 10% OFF",
  description: "Promoción para nuevos clientes: 10% de descuento en la primera cita (grooming, consulta o vacunación).",
  provider: {
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
  },
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "USD",
  },
  availability: "https://schema.org/InStock",
} as unknown) as Record<string, unknown>;

export function generateServiceSchema(serviceId: typeof SERVICES[number]['id']): Service {
  const service = SERVICES.find(s => s.id === serviceId);
  if (!service) return { "@context": "https://schema.org", "@type": "Service", name: serviceId } as Service;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
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
  } as unknown as Service;
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown> {
  const itemListElement: ListItem[] = items.map((item, index) => ({
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
