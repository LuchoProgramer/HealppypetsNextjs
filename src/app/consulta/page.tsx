
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

import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function ConsultaPage() {
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
      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
              <span className="text-3xl">🩺</span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 mb-4">
              Consulta Veterinaria en Quito
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Atención médica profesional, diagnóstico preciso y orientación personalizada para la salud de tu mascota. Agenda tu consulta con nuestros expertos en Carcelén.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola! Quiero agendar una consulta veterinaria para mi mascota`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-lg"
            >
              <span>💬</span>
              Agendar Consulta Ahora
            </a>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Por qué elegirnos?</h2>
          <ul className="grid md:grid-cols-2 gap-8 mb-12">
            <li className="bg-[#F2DFED] rounded-xl p-6 text-gray-800 font-medium shadow">
              <span className="font-bold text-[#F2C2EA]">✔️ Diagnóstico profesional:</span> Examen físico completo y recomendaciones personalizadas.
            </li>
            <li className="bg-[#F2DFED] rounded-xl p-6 text-gray-800 font-medium shadow">
              <span className="font-bold text-[#F2C2EA]">✔️ Trato humano y cariñoso:</span> Tu mascota será atendida con paciencia y empatía.
            </li>
            <li className="bg-[#F2DFED] rounded-xl p-6 text-gray-800 font-medium shadow">
              <span className="font-bold text-[#F2C2EA]">✔️ Seguimiento post-consulta:</span> Nos aseguramos de la recuperación y bienestar de tu peludo.
            </li>
            <li className="bg-[#F2DFED] rounded-xl p-6 text-gray-800 font-medium shadow">
              <span className="font-bold text-[#F2C2EA]">✔️ Asesoría nutricional:</span> Consejos para una alimentación saludable y prevención de enfermedades.
            </li>
          </ul>
          <div className="text-center">
            <Link href="/" className="text-[#F2C2EA] font-semibold hover:underline">Volver al inicio</Link>
          </div>
        </div>
      </div>
    </>
  );
}
