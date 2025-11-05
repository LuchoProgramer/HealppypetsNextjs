import { Metadata } from 'next';
import InternalLinks from '@/components/ui/InternalLinks';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Vacunas para Mascotas en Carcelén - HealppyPets',
  description: 'Vacunas para perros y gatos en Carcelén. Plan completo de vacunación antirrábica y múltiple. Precios especiales y citas disponibles.',
  keywords: [
    'vacunas para mascotas Carcelén',
    'vacunas para perros Carcelén',
    'vacunas para gatos Carcelén',
    'vacunación antirrábica Carcelén',
    'vacuna múltiple perros Carcelén',
    'vacuna triple felina Carcelén',
    'plan vacunación cachorros Carcelén',
    'plan vacunación gatitos Carcelén',
    'calendario vacunación mascotas Quito',
    'vacunas baratas Carcelén',
    'vacunación gatos precio Carcelén',
    'veterinario para gatos Carcelén'
  ],
  openGraph: {
    title: 'Vacunas para Mascotas en Carcelén | HealppyPets',
    description: 'Centro especializado en vacunación para mascotas en Carcelén. Protege a tu perro o gato con nuestro plan completo de vacunación.',
    type: 'website',
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vacunas para Mascotas Carcelén | HealppyPets',
    description: 'Vacunación completa para perros y gatos en Carcelén con precios especiales.',
  },
  alternates: {
    canonical: 'https://www.healppypets.com/servicios/vacunas',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Vacunas para Mascotas",
  "description": "Servicio completo de vacunación para perros y gatos en Carcelén, Quito",
  "provider": {
    "@type": "VeterinaryClinic",
    "name": "HealppyPets",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Carcelén",
      "addressRegion": "Pichincha",
      "addressCountry": "EC"
    }
  },
  "serviceType": "Vacunación Veterinaria",
  "areaServed": {
    "@type": "Place",
    "name": "Carcelén, Quito"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$"
  }
};

export default function VacunasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Vacunas para Perros y Gatos en Carcelén
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Protege a tu perro o gato con nuestro plan completo de vacunación. 
              Centro especializado en Carcelén con precios especiales para todas las mascotas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola!%20Quiero%20información%20sobre%20vacunas%20para%20mi%20mascota`}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Agendar Vacunación WhatsApp
              </a>
              <a 
                href="/contacto"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Ver Precios
              </a>
            </div>
          </div>
        </section>

        {/* Plan de Vacunación */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Plan de Vacunación Completo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vacunas para Perros */}
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-800 mb-6">
                  Vacunas para Perros
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna Múltiple (5 en 1):</strong> Distemper, Hepatitis, Parainfluenza, Parvovirus, Coronavirus
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna Antirrábica:</strong> Protección contra la rabia (obligatoria por ley)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna Bordetella:</strong> Prevención de tos de las perreras
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna Leptospirosis:</strong> Protección adicional recomendada
                    </div>
                  </li>
                </ul>
              </div>

              {/* Vacunas para Gatos */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Vacunas para Gatos
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna Triple Felina:</strong> Rinotraqueitis, Calicivirus, Panleucopenia
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna Antirrábica:</strong> Protección contra la rabia
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna Leucemia Felina:</strong> Para gatos que salen al exterior
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna Clamidia:</strong> Protección respiratoria adicional
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Vacuna PIF:</strong> Contra peritonitis infecciosa felina (recomendada)
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección específica para gatos */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                ¿Por qué es importante vacunar a tu gato en Carcelén?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-purple-800 mb-4">
                    Gatos de Interior
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <span>Vacuna triple felina obligatoria</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <span>Antirrábica requerida por ley</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <span>Protección contra virus aerotransportados</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-orange-800 mb-4">
                    Gatos de Exterior
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <span>Plan completo + leucemia felina</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <span>Refuerzos cada 6 meses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <span>Vacuna clamidia recomendada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendario de Vacunación */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Calendario de Vacunación en Carcelén
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendario Cachorros */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-6">
                  Cachorros (Perros)
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <strong>6-8 semanas:</strong> Primera vacuna múltiple
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <strong>10-12 semanas:</strong> Segunda vacuna múltiple
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <strong>14-16 semanas:</strong> Tercera vacuna múltiple + Antirrábica
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <strong>Anual:</strong> Refuerzos de todas las vacunas
                  </div>
                </div>
              </div>

              {/* Calendario Gatitos */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">
                  Gatitos
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <strong>6-8 semanas:</strong> Primera vacuna triple felina
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <strong>10-12 semanas:</strong> Segunda vacuna triple felina
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <strong>14-16 semanas:</strong> Tercera vacuna triple + Antirrábica
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <strong>Anual:</strong> Refuerzos de todas las vacunas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precios y Promociones */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Precios Especiales en Vacunas para Mascotas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Plan Cachorro Completo</h3>
                <p className="text-3xl font-bold mb-2">$85</p>
                <p className="text-sm">3 vacunas múltiples + antirrábica</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Plan Gatito Completo</h3>
                <p className="text-3xl font-bold mb-2">$75</p>
                <p className="text-sm">3 vacunas triples + antirrábica</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Refuerzo Anual</h3>
                <p className="text-3xl font-bold mb-2">$35</p>
                <p className="text-sm">Múltiple + antirrábica</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola!%20Quiero%20agendar%20vacunas%20para%20mi%20mascota%20en%20Carcelén`}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                Agendar Cita para Vacunas - WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Ubicación Carcelén */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Centro de Vacunación en Carcelén
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  ¿Por qué elegir HealppyPets para vacunar a tu mascota?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span>Veterinarios especializados en Carcelén</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span>Vacunas importadas de alta calidad</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span>Precios competitivos y planes de pago</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span>Recordatorios de refuerzos incluidos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span>Atención de martes a sábado</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Ubicación y Contacto
                </h4>
                <p className="text-gray-600 mb-2">
                  <strong>Dirección:</strong> {SITE_CONFIG.address.full}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>WhatsApp:</strong> {SITE_CONFIG.phoneInternational}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Horarios:</strong> {SITE_CONFIG.businessHours.weekdays}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  <strong>Domingos:</strong> {SITE_CONFIG.businessHours.weekend}
                </p>
                <div className="text-center">
                  <a 
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola!%20Quiero%20información%20sobre%20vacunas%20en%20Carcelén`}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
                  >
                    Contactar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Internal Links Estratégicos */}
        <InternalLinks 
          currentPage="/servicios/vacunas"
          excludeLinks={['/servicios/vacunas']}
          maxLinks={6}
        />
      </div>
    </>
  );
}