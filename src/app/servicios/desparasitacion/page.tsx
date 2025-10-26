import { Metadata } from 'next';
import InternalLinks from '@/components/ui/InternalLinks';

export const metadata: Metadata = {
  title: 'Desparasitación de Mascotas en Carcelén - HealppyPets',
  description: 'Desparasitación interna y externa para perros y gatos en Carcelén. Tratamiento efectivo contra parásitos, pipetas antipulgas y más.',
  keywords: [
    'desparasitación mascotas Carcelén',
    'desparasitación perros Carcelén',
    'desparasitación gatos Carcelén',
    'desparasitación interna Carcelén',
    'desparasitación externa Carcelén',
    'desparasitante para perros Carcelén',
    'desparasitante para gatos Carcelén',
    'pipetas antipulgas Carcelén',
    'pipetas para gatos Carcelén',
    'collar antipulgas gatos Carcelén',
    'tratamiento parásitos mascotas Carcelén',
    'desparasitación precio Carcelén',
    'desparasitación gatos precio Carcelén'
  ],
  openGraph: {
    title: 'Desparasitación de Mascotas en Carcelén | HealppyPets',
    description: 'Centro especializado en desparasitación para mascotas en Carcelén. Tratamiento completo contra parásitos internos y externos.',
    type: 'website',
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desparasitación Mascotas Carcelén | HealppyPets',
    description: 'Desparasitación completa para perros y gatos en Carcelén con precios especiales.',
  },
  alternates: {
    canonical: '/servicios/desparasitacion',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desparasitación de Mascotas",
  "description": "Servicio completo de desparasitación interna y externa para perros y gatos en Carcelén, Quito",
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
  "serviceType": "Desparasitación Veterinaria",
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

export default function DesparasitacionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6">
              Desparasitación de Perros y Gatos en Carcelén
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Protege a tu perro o gato de parásitos internos y externos. 
              Tratamiento especializado en Carcelén con productos específicos para cada especie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/593984147653?text=Hola!%20Necesito%20desparasitar%20a%20mi%20mascota%20en%20Carcelén"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Agendar Desparasitación WhatsApp
              </a>
              <a 
                href="/contacto"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Ver Precios
              </a>
            </div>
          </div>
        </section>

        {/* Tipos de Desparasitación */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Tratamiento Completo contra Parásitos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Desparasitación Interna */}
              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">
                  Desparasitación Interna
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Lombrices intestinales:</strong> Ascaris, Toxocara, Trichuris
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Tenias (gusanos planos):</strong> Dipylidium, Taenia
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Parásitos microscópicos:</strong> Giardia, Coccidia
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Anquilostomas:</strong> Hookworms y otros parásitos
                    </div>
                  </li>
                </ul>
              </div>

              {/* Desparasitación Externa */}
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-800 mb-6">
                  Desparasitación Externa
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Pulgas:</strong> Tratamiento y prevención con pipetas
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Garrapatas:</strong> Eliminación y control efectivo
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Ácaros:</strong> Tratamiento para ácaros del oído y sarna
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong>Piojos:</strong> Eliminación completa de infestaciones
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección específica para gatos */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Parásitos Específicos en Gatos - Carcelén
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-8 rounded-xl">
                  <h4 className="text-xl font-bold text-purple-800 mb-6">
                    Parásitos Internos Felinos
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Toxoplasma:</strong> Especialmente importante en gatos
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Bolas de pelo con parásitos:</strong> Tratamiento específico
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Isospora felina:</strong> Coccidios específicos de gatos
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Diphyllobothrium:</strong> Por consumo de pescado crudo
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-8 rounded-xl">
                  <h4 className="text-xl font-bold text-pink-800 mb-6">
                    Parásitos Externos Felinos
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Pulgas Ctenocephalides felis:</strong> Específicas de gatos
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Ácaros de oreja felinos:</strong> Otodectes cynotis
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Cheyletiella blakei:</strong> "Caspa caminante" felina
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Notoedres cati:</strong> Sarna específica de gatos
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Productos y Tratamientos */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Productos de Desparasitación en Carcelén
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Desparasitantes Internos */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">
                  Desparasitantes Internos
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Tabletas masticables sabor carne</li>
                  <li>• Suspensión oral para cachorros</li>
                  <li>• Pasta oral de fácil administración</li>
                  <li>• Tratamiento de amplio espectro</li>
                  <li>• Dosis según peso de la mascota</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-orange-600">Desde $8</span>
                </div>
              </div>

              {/* Pipetas Antipulgas */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200">
                <div className="text-center mb-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">MÁS POPULAR</span>
                </div>
                <h3 className="text-xl font-bold text-red-700 mb-4">
                  Pipetas Antipulgas
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Protección hasta 3 meses</li>
                  <li>• Elimina pulgas, garrapatas y piojos</li>
                  <li>• Resistente al agua</li>
                  <li>• Aplicación fácil y rápida</li>
                  <li>• Prevención continua</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-red-600">Desde $15</span>
                </div>
              </div>

              {/* Collares Antipulgas */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  Collares Antipulgas
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Protección hasta 8 meses</li>
                  <li>• Repelente natural efectivo</li>
                  <li>• Ajustable a cualquier tamaño</li>
                  <li>• Sin olor desagradable</li>
                  <li>• Ideal para uso continuo</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-blue-600">Desde $12</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cronograma de Desparasitación */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Cronograma de Desparasitación Recomendado
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cachorros y Gatitos */}
              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">
                  Cachorros y Gatitos
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <strong>2-4 semanas:</strong> Primera desparasitación interna
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <strong>6-8 semanas:</strong> Segunda desparasitación + pipeta
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <strong>10-12 semanas:</strong> Tercera desparasitación
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <strong>Mensual hasta 6 meses:</strong> Desparasitación continua
                  </div>
                </div>
              </div>

              {/* Adultos */}
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-800 mb-6">
                  Perros y Gatos Adultos
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <strong>Interna:</strong> Cada 3-4 meses
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <strong>Externa:</strong> Pipeta cada 2-3 meses
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <strong>Prevención:</strong> Collar antipulgas continuo
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <strong>Especial:</strong> Antes y después de viajes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promociones y Precios */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Promociones en Desparasitación - Carcelén
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Plan Cachorro</h3>
                <p className="text-3xl font-bold mb-2">$35</p>
                <p className="text-sm">3 desparasitaciones + 2 pipetas</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Desparasitación Completa</h3>
                <p className="text-3xl font-bold mb-2">$25</p>
                <p className="text-sm">Interna + Externa (pipeta)</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Solo Pipeta</h3>
                <p className="text-3xl font-bold mb-2">$15</p>
                <p className="text-sm">Antipulgas 3 meses protección</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://wa.me/593984147653?text=Hola!%20Quiero%20agendar%20desparasitación%20para%20mi%20mascota%20en%20Carcelén"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                Agendar Desparasitación - WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Síntomas de Parásitos */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              ¿Cómo saber si tu mascota necesita desparasitación?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Síntomas de Parásitos Internos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Diarrea frecuente o heces con sangre</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Vómitos repetitivos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Pérdida de peso sin motivo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Abdomen hinchado (especialmente cachorros)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <span>Falta de apetito o letargo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Síntomas de Parásitos Externos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Rascado excesivo y constante</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Zonas rojas o irritadas en la piel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Pérdida de pelo en ciertas áreas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Presencia visible de pulgas o garrapatas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Mal olor en orejas o piel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto Final */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Centro de Desparasitación en Carcelén
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">
                  ¿Por qué elegir HealppyPets para desparasitar?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></div>
                    <span>Productos importados de alta calidad</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></div>
                    <span>Diagnóstico gratuito de parásitos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></div>
                    <span>Seguimiento post-tratamiento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></div>
                    <span>Precios accesibles en Carcelén</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">
                  Agenda tu Cita Hoy
                </h4>
                <p className="mb-4">
                  Atención especializada en Carcelén, Quito
                </p>
                <a 
                  href="https://wa.me/593984147653?text=Hola!%20Mi%20mascota%20necesita%20desparasitación%20en%20Carcelén"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors inline-block"
                >
                  WhatsApp: +593 98 414 7653
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Internal Links Estratégicos */}
        <InternalLinks 
          currentPage="/servicios/desparasitacion"
          excludeLinks={['/servicios/desparasitacion']}
          maxLinks={6}
        />
      </div>
    </>
  );
}