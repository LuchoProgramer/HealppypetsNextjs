import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url: string;
}

/**
 * Genera metadatos optimizados para SEO para una página.
 * Combina valores predeterminados con específicos de la página.
 * @param options - Opciones específicas de la página (title, description, etc.).
 * @returns Objeto de metadatos para Next.js.
 */
export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
}: GenerateMetadataOptions): Metadata {
  const fullTitle = title ? `${title}` : `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`;
  const fullDescription = description || SITE_CONFIG.description;
  const fullUrl = `${SITE_CONFIG.url}${url}`;
  const mainImage = `${SITE_CONFIG.url}${image || '/og-image.png'}`; // Imagen por defecto para redes sociales

  // Nota sobre Keywords: Google ignora la meta tag 'keywords' desde hace años.
  // La incluimos por si algún otro motor de búsqueda la considera, pero el foco debe estar en el contenido.
  const defaultKeywords = ["veterinaria en quito", "veterinaria carcelen", "grooming para perros", "baño para mascotas", "consultas veterinarias", "vacunación de mascotas"];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords ? (Array.isArray(keywords) ? keywords : [keywords]) : defaultKeywords,
    authors: [{ name: "Healppypets", url: SITE_CONFIG.url }],
    creator: "Healppypets",
    publisher: "Healppypets",
    metadataBase: new URL(SITE_CONFIG.url),

    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      images: [{ url: mainImage, width: 1200, height: 630, alt: fullTitle }],
      locale: "es_EC",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [mainImage],
      creator: "@healppy_pets", // Reemplazar con el handle de Twitter si existe
    },

    alternates: {
      canonical: fullUrl,
    },
  };
}