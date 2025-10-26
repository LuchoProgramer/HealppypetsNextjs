import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto Servicios para Gatos Carcelén - Veterinario Felino',
  description: 'Contacta especialistas en medicina felina en Carcelén. Consultas, vacunación, grooming y cuidados especializados para gatos en Quito.',
  keywords: [
    'contacto veterinario gatos Carcelén',
    'agendar cita gato Carcelén',
    'consulta veterinaria felina Carcelén',
    'WhatsApp veterinario gatos Carcelén',
    'especialista felinos Carcelén Quito',
    'cita médica gatos Carcelén',
    'atención veterinaria gatos Carcelén',
    'emergencias gatos Carcelén'
  ],
  openGraph: {
    title: 'Contacto Especialista en Gatos Carcelén | HealppyPets',
    description: 'Agenda tu consulta veterinaria especializada para gatos en Carcelén. Atención profesional felina.',
    type: 'website',
    locale: 'es_EC',
  },
  alternates: {
    canonical: '/contacto/gatos',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto Servicios para Gatos - HealppyPets",
  "description": "Contacta nuestros especialistas en medicina felina en Carcelén",
  "provider": {
    "@type": "VeterinaryClinic",
    "name": "HealppyPets",
    "speciality": "Medicina Veterinaria Felina",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Carcelén",
      "addressRegion": "Pichincha",
      "addressCountry": "EC"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+593987005084",
      "contactType": "Atención al Cliente",
      "availableLanguage": "Spanish"
    }
  }
};

export default function ContactoGatosPage() {
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
              Contacta Nuestros Especialistas en Gatos
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Atención veterinaria especializada para felinos en Carcelén. 
              Tu gato merece cuidado profesional y dedicado.
            </p>
          </div>
        </section>

        {/* Formas de Contacto para Gatos */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Agenda tu Consulta Felina
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* WhatsApp Directo */}
              <div className="bg-green-50 p-8 rounded-xl text-center">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  WhatsApp Inmediato
                </h3>
                <p className="text-gray-700 mb-6">
                  Agenda tu cita para gato directamente por WhatsApp. 
                  Respuesta rápida y personalizada.
                </p>
                <a 
                  href="https://wa.me/593987005084?text=Hola!%20Necesito%20agendar%20una%20consulta%20para%20mi%20gato%20en%20Carcelén.%20Mi%20gato%20es:"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors inline-block"
                >
                  WhatsApp: +593 98 700 5084
                </a>
                <div className="mt-4 text-sm text-gray-600">
                  <p>🕐 Respuesta en menos de 30 minutos</p>
                  <p>📋 Información previa sobre tu gato</p>
                </div>
              </div>

              {/* Servicios Específicos */}
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="text-6xl mb-6 text-center">🐱</div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
                  Servicios Especializados
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Consulta veterinaria felina especializada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Vacunación específica para gatos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Desparasitación felina completa</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Grooming y peluquería para gatos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span>Consultas comportamiento felino</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mensajes Preconfigurados por Servicio */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Contacto Directo por Servicio
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Consulta General */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-purple-700 mb-4">
                  Consulta Veterinaria
                </h3>
                <p className="text-gray-600 mb-4">
                  Examen físico completo, evaluación de salud general
                </p>
                <a 
                  href="https://wa.me/593987005084?text=Hola!%20Necesito%20agendar%20una%20consulta%20veterinaria%20para%20mi%20gato.%20Información:%0A-%20Nombre%20del%20gato:%0A-%20Edad:%0A-%20Motivo%20de%20consulta:%0A-%20¿Es%20urgente?"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block text-center"
                >
                  Agendar Consulta
                </a>
              </div>

              {/* Vacunación */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  Vacunación Felina
                </h3>
                <p className="text-gray-600 mb-4">
                  Plan completo de vacunación para gatos
                </p>
                <a 
                  href="https://wa.me/593987005084?text=Hola!%20Quiero%20agendar%20vacunación%20para%20mi%20gato:%0A-%20Nombre:%0A-%20Edad:%0A-%20Última%20vacuna:%0A-%20¿Es%20gato%20de%20interior%20o%20exterior?"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  Agendar Vacunación
                </a>
              </div>

              {/* Grooming */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-pink-700 mb-4">
                  Grooming Felino
                </h3>
                <p className="text-gray-600 mb-4">
                  Baño, corte, deslanado especializado para gatos
                </p>
                <a 
                  href="https://wa.me/593987005084?text=Hola!%20Quiero%20agendar%20grooming%20para%20mi%20gato:%0A-%20Nombre:%0A-%20Raza:%0A-%20Tipo%20de%20pelo:%0A-%20Servicios%20necesarios:"
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors block text-center"
                >
                  Agendar Grooming
                </a>
              </div>

              {/* Desparasitación */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Desparasitación
                </h3>
                <p className="text-gray-600 mb-4">
                  Tratamiento completo contra parásitos felinos
                </p>
                <a 
                  href="https://wa.me/593987005084?text=Hola!%20Mi%20gato%20necesita%20desparasitación:%0A-%20Nombre:%0A-%20Edad:%0A-%20Última%20desparasitación:%0A-%20¿Síntomas%20observados?"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block text-center"
                >
                  Agendar Desparasitación
                </a>
              </div>

              {/* Emergencias */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-red-700 mb-4">
                  Orientación Urgente
                </h3>
                <p className="text-gray-600 mb-4">
                  Para situaciones que requieren atención inmediata
                </p>
                <a 
                  href="https://wa.me/593987005084?text=🚨%20URGENTE%20-%20Mi%20gato%20necesita%20ayuda:%0A-%20Nombre:%0A-%20Edad:%0A-%20Síntomas:%0A-%20¿Cuándo%20comenzó?"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors block text-center"
                >
                  Contacto Urgente
                </a>
              </div>

              {/* Comportamiento */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">
                  Consulta Comportamental
                </h3>
                <p className="text-gray-600 mb-4">
                  Problemas de conducta y bienestar felino
                </p>
                <a 
                  href="https://wa.me/593987005084?text=Hola!%20Mi%20gato%20tiene%20problemas%20de%20comportamiento:%0A-%20Nombre:%0A-%20Edad:%0A-%20Problema%20específico:%0A-%20¿Cuándo%20comenzó?"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors block text-center"
                >
                  Consulta Comportamental
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Horarios y Ubicación */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Horarios y Ubicación - Servicios Felinos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-800 mb-6">
                  Horarios de Atención
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Lunes - Viernes:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sábados:</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Domingos:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <p className="font-semibold text-purple-700">Atención Especializada Felina:</p>
                    <p>Ambiente tranquilo libre de estrés para gatos</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Ubicación en Carcelén
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Dirección:</p>
                    <p>Sector Carcelén, Quito, Ecuador</p>
                  </div>
                  <div>
                    <p className="font-semibold">Referencias:</p>
                    <p>Cerca del Hospital de Carcelén</p>
                  </div>
                  <div>
                    <p className="font-semibold">Facilidades para Gatos:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Sala de espera silenciosa</li>
                      <li>Área separada para felinos</li>
                      <li>Música relajante</li>
                      <li>Feromonas tranquilizantes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precios Especiales Gatos */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Precios Especiales para Gatos - Carcelén
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Consulta Felina</h3>
                <p className="text-2xl font-bold">$25</p>
                <p className="text-sm">Especializada</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Vacunación</h3>
                <p className="text-2xl font-bold">$15</p>
                <p className="text-sm">Por vacuna</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Grooming</h3>
                <p className="text-2xl font-bold">$18</p>
                <p className="text-sm">Completo</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Desparasitación</h3>
                <p className="text-2xl font-bold">$12</p>
                <p className="text-sm">Completa</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://wa.me/593987005084?text=Hola!%20Quiero%20información%20sobre%20precios%20para%20servicios%20de%20mi%20gato%20en%20Carcelén"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                Consultar Precios Específicos
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Específico Gatos */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Preguntas Frecuentes - Servicios para Gatos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-purple-700 mb-2">
                    ¿Atienden solo gatos o también perros?
                  </h3>
                  <p className="text-gray-700">
                    Atendemos tanto gatos como perros, pero tenemos horarios y espacios especializados 
                    para gatos para minimizar el estrés. Tu felino estará en un ambiente tranquilo.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-purple-700 mb-2">
                    ¿Qué debo traer para la primera consulta de mi gato?
                  </h3>
                  <p className="text-gray-700">
                    Transportadora cómoda, registro de vacunas anteriores, lista de medicamentos 
                    si toma alguno, y cualquier información sobre su comportamiento o síntomas.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-purple-700 mb-2">
                    ¿Hacen visitas a domicilio para gatos?
                  </h3>
                  <p className="text-gray-700">
                    Sí, ofrecemos consultas a domicilio para gatos especialmente estresados 
                    por el transporte. Contacta por WhatsApp para coordinar.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-purple-700 mb-2">
                    ¿Qué métodos de pago aceptan?
                  </h3>
                  <p className="text-gray-700">
                    Aceptamos efectivo, transferencias bancarias y tarjetas de crédito/débito. 
                    También manejamos planes de pago para tratamientos largos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Tu Gato Merece Atención Especializada
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              En HealppyPets Carcelén entendemos las necesidades únicas de los felinos. 
              Nuestro equipo especializado está listo para cuidar a tu gato con dedicación y profesionalismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/593987005084?text=Hola!%20Quiero%20agendar%20una%20cita%20para%20mi%20gato%20en%20HealppyPets%20Carcelén"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Agendar Cita por WhatsApp
              </a>
              <a 
                href="/servicios/gatos"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Ver Todos los Servicios
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}