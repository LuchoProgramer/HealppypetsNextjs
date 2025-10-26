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
  const defaultKeywords = [
    // Keywords principales para dominar búsquedas locales
    "veterinaria Carcelén Quito",
    "consulta veterinaria Carcelén",
    "peluquería canina Carcelén",
    "peluquería para mascotas Carcelén",
    "corte de pelo perros Carcelén",
    "corte de pelo gatos Carcelén",
    "corte de pelo mascotas Quito",
    "baño para perros Carcelén precio",
    "baño para gatos Carcelén precio",
    
    // Keywords DOMINANTES para vacunas - alta prioridad
    "vacunas para mascotas Carcelén",
    "vacunas para perros Carcelén",
    "vacunas para gatos Carcelén",
    "vacunación perros Carcelén",
    "vacunación gatos Carcelén",
    "vacunación cachorros Carcelén",
    "vacunación gatitos Carcelén",
    "vacunas antirrábicas Carcelén",
    "vacuna múltiple perros Carcelén",
    "vacuna triple felina Carcelén",
    "plan vacunación mascotas Carcelén",
    "calendario vacunación perros Quito",
    "calendario vacunación gatos Quito",
    "vacunas baratas Carcelén",
    "vacunación gatos precio Carcelén",
    
    // Keywords DOMINANTES para desparasitación - alta prioridad
    "desparasitación mascotas Carcelén",
    "desparasitación perros Carcelén",
    "desparasitación gatos Carcelén",
    "desparasitación interna Carcelén",
    "desparasitación externa Carcelén",
    "desparasitante para perros Carcelén",
    "desparasitante para gatos Carcelén",
    "tratamiento parásitos mascotas Carcelén",
    "pipetas antipulgas Carcelén",
    "pipetas para gatos Carcelén",
    "collar antipulgas gatos Carcelén",
    "desparasitación precio Carcelén",
    "desparasitación gatos precio Carcelén",
    
    // Keywords generales de apoyo
    "consulta veterinaria Carcelén",
    "consulta veterinaria gatos Carcelén",
    "veterinario para gatos Carcelén",
    "farmacia veterinaria Carcelén",
    "veterinario cerca de mi Carcelén",
    "HealppyPets veterinaria Carcelén",
    "cuidado mascotas Carcelén Quito",
    "cuidado gatos Carcelén",
    "veterinaria lunes a sábado Carcelén",
    // Keywords comerciales locales
    "peluquería canina barata Carcelén",
    "peluquería felina Carcelén",
    "veterinaria abierta sábados Carcelén",
    "primera cita veterinaria descuento Carcelén",
    "veterinaria horario extendido Carcelén",
    "consulta gatos Carcelén precio"
  ];

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
