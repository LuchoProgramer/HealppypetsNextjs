import type { Metadata } from "next";

interface MetadataParams {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string[];
}

export function generateMetadata(params: MetadataParams): Metadata {
  return {
    title: params.title,
    description: params.description,
    keywords: params.keywords || [],
    openGraph: {
      title: params.title,
      description: params.description,
      url: `https://healppypets.netlify.app${params.url}`,
      type: "website",
      images: [
        {
          url: params.image || "https://healppypets.netlify.app/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: params.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [params.image || "https://healppypets.netlify.app/images/og-image.jpg"],
    },
  };
}
