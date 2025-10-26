import { Metadata } from 'next';
import InternalLinks from '@/components/ui/InternalLinks';

export const metadata: Metadata = {
  title: 'Servicios Veterinarios para Gatos en Carcelén - HealppyPets',
  description: 'Atención veterinaria especializada para gatos en Carcelén. Vacunación felina, desparasitación, peluquería y consultas especializadas en felinos.',
  keywords: [
    'veterinario para gatos Carcelén',
    'consulta veterinaria gatos Carcelén',
    'vacunas para gatos Carcelén',
    'vacuna triple felina Carcelén',
    'desparasitación gatos Carcelén',
    'pipetas para gatos Carcelén',
    'peluquería felina Carcelén',
    'corte de pelo gatos Carcelén',
    'baño para gatos Carcelén precio',
    'cuidado gatos Carcelén',
    'collar antipulgas gatos Carcelén',
    'desparasitación gatos precio Carcelén'
  ],
  openGraph: {
    title: 'Servicios Veterinarios para Gatos en Carcelén | HealppyPets',
    description: 'Centro especializado en atención felina en Carcelén. Vacunación, desparasitación, peluquería y consultas especializadas para gatos.',
    type: 'website',
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios para Gatos Carcelén | HealppyPets',
    description: 'Atención veterinaria especializada para felinos en Carcelén.',
  },
  alternates: {
    canonical: '/servicios/gatos',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Servicios Veterinarios para Gatos",
  "description": "Atención veterinaria especializada para felinos en Carcelén, Quito",
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
  "serviceType": "Medicina Veterinaria Felina",
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

export default function GatosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">
              Servicios Veterinarios para Gatos en Carcelén
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Atención especializada para felinos con veterinarios expertos en comportamiento 
              y medicina felina. Tu gato merece cuidado especializado en Carcelén.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/593987005084?text=Hola!%20Necesito%20agendar%20una%20cita%20para%20mi%20gato"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Agendar Cita para Gato WhatsApp
              </a>
              <a 
                href="/contacto"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Ver Precios Felinos
              </a>
            </div>
          </div>
        </section>

        {/* Servicios Especializados para Gatos */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Especialistas en Medicina Felina
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Consulta Felina */}
              <div className="bg-purple-50 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">🐱</div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">
                  Consulta Veterinaria Felina
                </h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Examen físico especializado</li>
                  <li>• Evaluación comportamental</li>
                  <li>• Diagnóstico de enfermedades felinas</li>
                  <li>• Orientación nutricional para gatos</li>
                  <li>• Seguimiento post-consulta</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-purple-600">$25</span>
                  <p className="text-sm text-gray-500">Consulta especializada</p>
                </div>
              </div>

              {/* Vacunación Felina */}
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">💉</div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Vacunación Felina
                </h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Vacuna triple felina</li>
                  <li>• Vacuna antirrábica</li>
                  <li>• Vacuna leucemia felina</li>
                  <li>• Vacuna clamidia (opcional)</li>
                  <li>• Calendario personalizado</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-blue-600">$15</span>
                  <p className="text-sm text-gray-500">Por vacuna</p>
                </div>
              </div>

              {/* Desparasitación Felina */}
              <div className="bg-pink-50 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-pink-800 mb-4">
                  Desparasitación Felina
                </h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Desparasitantes específicos</li>
                  <li>• Pipetas antipulgas felinas</li>
                  <li>• Tratamiento toxoplasma</li>
                  <li>• Collares específicos para gatos</li>
                  <li>• Prevención ácaros de oreja</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-pink-600">$12</span>
                  <p className="text-sm text-gray-500">Desparasitación completa</p>
                </div>
              </div>

              {/* Peluquería Felina */}
              <div className="bg-indigo-50 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">✂️</div>
                <h3 className="text-xl font-bold text-indigo-800 mb-4">
                  Peluquería Felina
                </h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Baño con productos pH felino</li>
                  <li>• Corte higiénico especializado</li>
                  <li>• Deslanado profesional</li>
                  <li>• Corte de uñas felinas</li>
                  <li>• Técnicas anti-estrés</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-indigo-600">$18</span>
                  <p className="text-sm text-gray-500">Grooming completo</p>
                </div>
              </div>

              {/* Farmacia Felina */}
              <div className="bg-green-50 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">💊</div>
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Farmacia Felina
                </h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Medicamentos específicos</li>
                  <li>• Suplementos para gatos</li>
                  <li>• Alimento medicado felino</li>
                  <li>• Productos higiénicos</li>
                  <li>• Juguetes terapéuticos</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-green-600">Variable</span>
                  <p className="text-sm text-gray-500">Según producto</p>
                </div>
              </div>

              {/* Urgencias Felinas */}
              <div className="bg-red-50 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  Orientación Urgencias
                </h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Intoxicaciones felinas</li>
                  <li>• Obstrucción urinaria</li>
                  <li>• Dificultad respiratoria</li>
                  <li>• Orientación por WhatsApp</li>
                  <li>• Referencias especializadas</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-red-600">WhatsApp</span>
                  <p className="text-sm text-gray-500">Orientación gratuita</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características Especiales del Servicio Felino */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              ¿Por qué elegir HealppyPets para tu Gato?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-purple-700 mb-6">
                  Ambiente Libre de Estrés
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Área separada para gatos (sin ruido de perros)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Técnicas de manejo gentil anti-estrés</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Feromonas felinas para relajación</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Personal entrenado en comportamiento felino</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">
                  Expertise en Medicina Felina
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>Conocimiento profundo de enfermedades felinas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>Protocolos específicos para cada edad felina</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>Productos exclusivos para pH felino</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>Equipos especializados para felinos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Precios Especiales para Gatos */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Paquetes Especiales para Gatos - Carcelén
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Plan Gatito Completo</h3>
                <p className="text-3xl font-bold mb-2">$85</p>
                <p className="text-sm">3 vacunas triples + antirrábica + desparasitación</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Chequeo Felino Anual</h3>
                <p className="text-3xl font-bold mb-2">$45</p>
                <p className="text-sm">Consulta + vacunas + desparasitación</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Spa Felino</h3>
                <p className="text-3xl font-bold mb-2">$25</p>
                <p className="text-sm">Baño + corte + deslanado + uñas</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://wa.me/593987005084?text=Hola!%20Quiero%20información%20sobre%20paquetes%20para%20mi%20gato%20en%20Carcelén"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                Consultar Paquetes Felinos - WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Consejos para Dueños de Gatos */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Consejos para el Cuidado de Gatos en Casa
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-800 mb-6">
                  Señales de Alerta en Gatos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                    <span>Cambios en hábitos de comida o agua</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                    <span>Dificultad para orinar o defecar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                    <span>Esconderse más de lo normal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                    <span>Respiración acelerada o con esfuerzo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                    <span>Vómitos frecuentes o diarrea</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-teal-800 mb-6">
                  Prevención en Casa
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                    <span>Mantener plantas tóxicas fuera del alcance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                    <span>Cepillado diario para prevenir bolas de pelo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                    <span>Limpieza regular de la caja de arena</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                    <span>Agua fresca siempre disponible</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                    <span>Juegos y estimulación mental diaria</span>
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
              Tu Gato Merece Atención Especializada
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  Especialistas en Medicina Felina - Carcelén
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                    <span>Ambiente libre de estrés para gatos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                    <span>Productos específicos para felinos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                    <span>Personal entrenado en comportamiento felino</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                    <span>Seguimiento personalizado post-consulta</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">
                  Agenda Cita para tu Gato
                </h4>
                <p className="mb-4">
                  Atención especializada en Carcelén, Quito
                </p>
                <a 
                  href="https://wa.me/593987005084?text=Hola!%20Necesito%20agendar%20una%20consulta%20para%20mi%20gato%20en%20Carcelén"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors inline-block"
                >
                  WhatsApp: +593 98 700 5084
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Internal Links Estratégicos para Servicios Felinos */}
        <InternalLinks 
          currentPage="/servicios/gatos"
          excludeLinks={['/servicios/gatos']}
          maxLinks={6}
        />
      </div>
    </>
  );
}