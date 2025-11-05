import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Servicios Veterinarios en Carcelén - HealppyPets',
  description: 'Ofrecemos servicios veterinarios completos en Carcelén: consultas, vacunación, desparasitación, grooming y más. Atención especializada para perros y gatos.',
  alternates: {
    canonical: 'https://www.healppypets.com/servicios',
  },
  openGraph: {
    title: 'Servicios Veterinarios en Carcelén | HealppyPets',
    description: 'Centro veterinario completo en Carcelén: consultas, vacunación, desparasitación, grooming. Atención especializada para perros y gatos.',
    url: 'https://www.healppypets.com/servicios',
    type: 'website',
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Veterinarios Carcelén | HealppyPets',
    description: 'Centro veterinario completo en Carcelén. Servicios para perros y gatos.',
  },
};

const services = [
  {
    title: 'Consulta Veterinaria',
    description: 'Atención médica profesional y diagnóstico completo para tu mascota. Incluye examen físico, evaluación y recomendaciones.',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80',
    href: '/consulta',
    price: 'Desde $25'
  },
  {
    title: 'Grooming',
    description: 'Servicios profesionales de peluquería y estética para mascotas. Baño, corte, cepillado y más para que tu mascota luzca y se sienta increíble.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80',
    href: '/grooming',
    price: 'Desde $15'
  },
  {
    title: 'Vacunación',
    description: 'Programa completo de vacunación para perros y gatos. Protege a tu mascota con las vacunas esenciales según su edad y necesidades.',
    image: 'https://images.unsplash.com/photo-1628009368264-3033c52e923f?w=800&q=80',
    href: '/servicios/vacunas',
    price: 'Desde $20'
  },
  {
    title: 'Desparasitación',
    description: 'Control y prevención de parásitos internos y externos. Mantén a tu mascota saludable y libre de parásitos con nuestros tratamientos.',
    image: 'https://images.unsplash.com/photo-1583511655826-05700442b6b9?w=800&q=80',
    href: '/servicios/desparasitacion',
    price: 'Desde $12'
  },
  {
    title: 'Servicios para Gatos',
    description: 'Atención especializada felina en ambiente libre de estrés. Consultas, vacunas y tratamientos pensados específicamente para gatos.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
    href: '/servicios/gatos',
    price: 'Desde $25'
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "name": "Servicios Veterinarios HealppyPets",
  "description": "Centro veterinario completo en Carcelén, ofreciendo consultas, vacunación, desparasitación, grooming y más.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Carcelén",
    "addressRegion": "Pichincha",
    "addressCountry": "EC"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-0.094139",
    "longitude": "-78.478872"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Veterinarios",
    "itemListElement": services.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://www.healppypets.com${service.href}`
      },
      "position": index + 1
    }))
  }
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Servicios Veterinarios en Carcelén
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Cuidado profesional y especializado para tu mascota. 
              Servicios completos para perros y gatos en Carcelén.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link 
                  key={service.title} 
                  href={service.href}
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e: any) => {
                        e.target.src = '/images/fallback-service.jpg';
                      }}
                    />
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform">
                      <span className="text-lg font-bold text-gray-900">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#F2C2EA] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#F2C2EA] font-semibold group-hover:translate-x-2 transition-transform">
                      <span className="mr-2">Ver detalles y agendar</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Necesitas atención veterinaria?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Agenda una cita con nuestros especialistas y dale a tu mascota el cuidado que merece
            </p>
            <a
              href="https://wa.me/593987005084?text=Hola!%20Necesito%20información%20sobre%20servicios%20veterinarios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <span className="mr-2">💬</span>
              Agendar Cita por WhatsApp
            </a>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tu Veterinaria de Confianza en Carcelén
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ubicación</h3>
                <p className="text-gray-600 mb-6">
                  Estamos ubicados en un punto estratégico de Carcelén, con fácil acceso y parqueadero disponible.
                </p>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="mr-2">📍</span>
                    {SITE_CONFIG.address.full}
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2">⏰</span>
                    {SITE_CONFIG.businessHours.weekdays}
                  </p>
                  <p className="flex items-start text-sm text-gray-500">
                    <span className="mr-2">📅</span>
                    {SITE_CONFIG.businessHours.weekend}
                  </p>
                  <p className="flex items-start text-sm text-gray-500">
                    <span className="mr-2">⚠️</span>
                    {SITE_CONFIG.businessHours.closed}
                  </p>
                  <p className="flex items-start mt-4">
                    <span className="mr-2">📞</span>
                    {SITE_CONFIG.phoneInternational}
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Servicios de Emergencia</h3>
                <p className="text-gray-600 mb-6">
                  Disponibles para emergencias veterinarias. Contáctanos inmediatamente si tu mascota necesita atención urgente.
                </p>
                <a
                  href="tel:+593987005084"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                >
                  <span className="mr-2">🚨</span>
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}