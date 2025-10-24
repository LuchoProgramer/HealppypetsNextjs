import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Farmacia Veterinaria en Quito | HealppyPets",
  description: "Farmacia veterinaria en Carcelén, Quito. Medicamentos, suplementos y productos de calidad para el cuidado de tu mascota. Asesoría profesional y stock garantizado.",
  openGraph: {
    title: "Farmacia Veterinaria en Quito | HealppyPets",
    description: "Farmacia veterinaria en Carcelén, Quito. Medicamentos, suplementos y productos de calidad para el cuidado de tu mascota.",
    url: "https://www.healppypets.com/farmacia",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
        width: 800,
        height: 600,
        alt: "Farmacia veterinaria HealppyPets"
      }
    ]
  },
  alternates: {
    canonical: "https://www.healppypets.com/farmacia"
  }
};

export default function FarmaciaLayout({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": "HealppyPets - Farmacia Veterinaria",
    "url": "https://www.healppypets.com/farmacia",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
    "description": "Farmacia veterinaria en Carcelén, Quito. Medicamentos, suplementos y productos de calidad para el cuidado de tu mascota.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Clemente Yerovi Indaburu Oe143 y OE1B",
      "addressLocality": "Quito",
      "addressCountry": "EC"
    },
    "telephone": "+593987005084",
    "openingHours": [
      "Mo-Sa 09:00-18:00"
    ],
    "areaServed": "Quito, Carcelén, Ecuador",
    "availableService": [
      "Medicamentos veterinarios",
      "Suplementos nutricionales",
      "Productos de higiene",
      "Asesoría farmacéutica"
    ]
  };
  return (
    <>
      <Script id="farmacia-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      {children}
    </>
  );
}
