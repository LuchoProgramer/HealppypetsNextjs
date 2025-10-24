import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Consulta Veterinaria en Quito | HealppyPets",
  description: "Consulta veterinaria profesional en Carcelén, Quito. Diagnóstico, tratamiento y asesoría personalizada para la salud de tu mascota. Agenda tu cita con expertos.",
  openGraph: {
    title: "Consulta Veterinaria en Quito | HealppyPets",
    description: "Consulta veterinaria profesional en Carcelén, Quito. Diagnóstico, tratamiento y asesoría personalizada para la salud de tu mascota.",
    url: "https://www.healppypets.com/consulta",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80",
        width: 800,
        height: 600,
        alt: "Consulta veterinaria HealppyPets"
      }
    ]
  },
  alternates: {
    canonical: "https://www.healppypets.com/consulta"
  }
};

export default function ConsultaLayout({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "HealppyPets - Consulta Veterinaria",
    "url": "https://www.healppypets.com/consulta",
    "image": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80",
    "description": "Consulta veterinaria profesional en Carcelén, Quito. Diagnóstico, tratamiento y asesoría personalizada para la salud de tu mascota.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Clemente Yerovi Indaburu Oe143 y OE1B",
      "addressLocality": "Quito",
      "addressCountry": "EC"
    },
    "telephone": "+593987005084",
    "priceRange": "$20-$45",
    "openingHours": [
      "Mo-Sa 09:00-18:00"
    ],
    "areaServed": "Quito, Carcelén, Ecuador",
    "availableService": [
      "Consulta veterinaria general",
      "Diagnóstico y tratamiento",
      "Asesoría nutricional",
      "Seguimiento post-consulta"
    ]
  };
  return (
    <>
      <Script id="consulta-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      {children}
    </>
  );
}
