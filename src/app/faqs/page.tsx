'use client';

import { SITE_CONFIG } from '@/lib/constants';

const faqsData = [
  {
    question: "¿Cuál es el horario de atención de HealppyPets en Carcelén?",
    answer: "Atendemos de martes a sábado de 9:00 AM a 1:00 PM y de 3:00 PM a 6:00 PM. Los domingos de 9:00 AM a 2:00 PM. Los lunes permanecemos cerrados. Para consultas rápidas, puedes escribirnos por WhatsApp al +593 98 700 5084.",
    category: "Horarios"
  },
  {
    question: "¿Necesito agendar cita previa para la consulta veterinaria?",
    answer: "Sí, recomendamos agendar cita previa para garantizar la mejor atención. Puedes hacerlo por WhatsApp (+593 98 700 5084), teléfono, o directamente en nuestras instalaciones en Carcelén.",
    category: "Citas"
  },
  {
    question: "¿Qué servicios veterinarios ofrecen en Carcelén?",
    answer: "Ofrecemos consulta veterinaria, vacunación completa, desparasitación interna y externa, peluquería canina (grooming), y farmacia veterinaria. No realizamos cirugías, nos especializamos en medicina preventiva y estética.",
    category: "Servicios"
  },
  {
    question: "¿Cuánto cuesta la vacunación para perros y gatos?",
    answer: "La vacunación individual desde $12. Ofrecemos planes completos: Plan Cachorro $85 (3 vacunas múltiples + antirrábica), Plan Gatito $75 (3 vacunas triples + antirrábica), Refuerzo Anual $35 (múltiple + antirrábica).",
    category: "Precios"
  },
  {
    question: "¿Qué incluye el servicio de peluquería canina (grooming)?",
    answer: "Incluye baño con productos hipoalergénicos, corte de pelo según la raza, limpieza de oídos y ojos, corte y limado de uñas, cepillado profesional, y perfume especial. Desde $15 el servicio básico hasta $40 el premium SPA.",
    category: "Grooming"
  },
  {
    question: "¿Qué debo llevar a la primera consulta veterinaria?",
    answer: "Trae el carnet de vacunación (si lo tiene), historial médico previo, lista de medicamentos actuales, y cualquier información relevante sobre el comportamiento o síntomas de tu mascota.",
    category: "Primera Cita"
  },
  {
    question: "¿Realizan servicio a domicilio en Carcelén?",
    answer: "Ofrecemos servicio de retiro y entrega para peluquería canina en el sector de Carcelén. Para consultas veterinarias y vacunación, es necesario que vengas a nuestras instalaciones para garantizar la mejor atención.",
    category: "Domicilio"
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo, transferencias bancarias, y las principales tarjetas de crédito y débito (Visa, Mastercard). También ofrecemos planes de pago para tratamientos extensos.",
    category: "Pagos"
  },
  {
    question: "¿Tienen farmacia veterinaria en Carcelén?",
    answer: "Sí, contamos con farmacia veterinaria completa con medicamentos originales, suplementos nutricionales, productos antiparasitarios, productos de higiene, y accesorios para mascotas. Todos con garantía de calidad.",
    category: "Farmacia"
  },
  {
    question: "¿Atienden emergencias veterinarias?",
    answer: "No somos una clínica de emergencias 24 horas. Para urgencias fuera de horario, contáctanos por WhatsApp y te orientaremos. Para emergencias graves, te recomendaremos la clínica de emergencias más cercana.",
    category: "Emergencias"
  },
  {
    question: "¿Cuándo debo vacunar a mi cachorro o gatito?",
    answer: "Primera vacuna: 6-8 semanas, Segunda: 10-12 semanas, Tercera: 14-16 semanas + antirrábica. Luego refuerzos anuales. Te proporcionamos un calendario personalizado según la raza y condiciones de tu mascota.",
    category: "Vacunación"
  },
  {
    question: "¿Con qué frecuencia debo desparasitar a mi mascota?",
    answer: "Cachorros: mensual hasta los 6 meses. Adultos: desparasitación interna cada 3-4 meses, externa (pipetas) cada 2-3 meses. Recomendamos evaluación personalizada según el estilo de vida de tu mascota.",
    category: "Desparasitación"
  },
  {
    question: "¿Dónde está ubicada la veterinaria en Carcelén?",
    answer: "Estamos ubicados en Calle Clemente Yerovi Indaburu Oe143 y OE1B, sector Carcelén, Quito. Muy cerca del centro de Carcelén, con fácil acceso en transporte público y parqueadero disponible.",
    category: "Ubicación"
  },
  {
    question: "¿Ofrecen descuentos para la primera visita?",
    answer: "Sí, ofrecemos 20% de descuento en la primera consulta veterinaria para nuevos pacientes. Menciona este descuento al agendar tu cita por WhatsApp. También tenemos promociones especiales en paquetes de vacunación.",
    category: "Promociones"
  },
  {
    question: "¿Qué razas de perros y gatos atienden?",
    answer: "Atendemos todas las razas de perros y gatos, desde cachorros de 2 meses hasta mascotas senior. Tenemos experiencia especial con razas pequeñas, medianas y grandes. Cada tratamiento es personalizado según la raza y necesidades específicas.",
    category: "Razas"
  },
  {
    question: "¿Tienen productos específicos para gatos en la farmacia?",
    answer: "Sí, contamos con línea completa para felinos: desparasitantes específicos para gatos, pipetas antipulgas felinas, collares para gatos, shampoo especial pH felino, suplementos para gatos castrados, y juguetes. Todo diseñado para las necesidades específicas de los gatos.",
    category: "Farmacia"
  },
  {
    question: "¿El servicio de peluquería incluye corte para gatos?",
    answer: "Sí, ofrecemos peluquería especializada para gatos: corte higiénico, baño con productos específicos para pH felino, corte de uñas, limpieza de oídos, y deslanado. Usamos técnicas anti-estrés especiales para gatos nerviosos. Precio desde $18 para gatos.",
    category: "Grooming"
  },
  {
    question: "¿Cuál es la diferencia entre vacunas para perros y gatos?",
    answer: "Los gatos reciben vacuna triple felina (rinotraqueitis, calicivirus, panleucopenia), antirrábica, y opcionalmente leucemia felina y clamidia. Los perros reciben vacuna múltiple (distemper, hepatitis, parainfluenza, parvovirus), antirrábica, y opcionalmente bordetella. Cada especie tiene calendario específico.",
    category: "Vacunación"
  },
  {
    question: "¿Los gatos de interior necesitan desparasitación?",
    answer: "Sí, los gatos de interior también necesitan desparasitación. Pueden contraer parásitos a través de: zapatos contaminados, otros animales, insectos que entran a casa, y alimentos. Recomendamos desparasitación interna cada 6 meses para gatos de interior y cada 3 meses para gatos de exterior.",
    category: "Desparasitación"
  }
];

export default function FAQsPage() {
  const categories = [...new Set(faqsData.map(faq => faq.category))];

  // Schema.org para FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Schema.org para la organización
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryClinic",
    "name": "HealppyPets",
    "description": "Veterinaria especializada en Carcelén, Quito",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.neighborhood,
      "addressRegion": "Pichincha",
      "addressCountry": "EC"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.address.coordinates.lat,
      "longitude": SITE_CONFIG.address.coordinates.lng
    },
    "url": SITE_CONFIG.url,
    "telephone": SITE_CONFIG.phone,
    "openingHours": [
      "Tu-Sa 09:00-13:00,15:00-18:00",
      "Su 09:00-14:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Efectivo", "Tarjeta de Crédito", "Transferencia"],
    "hasMap": SITE_CONFIG.address.mapUrl
  };

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`category-${category}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Resuelve todas tus dudas sobre nuestros servicios veterinarios 
              en Carcelén, Quito. Tu mascota merece la mejor atención.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola!%20Tengo%20una%20pregunta%20sobre%20los%20servicios%20en%20Carcelén`}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Preguntar por WhatsApp
              </a>
              <a 
                href={`tel:${SITE_CONFIG.phone}`}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Llamar {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Información de Contacto Rápido */}
        <section className="py-8 bg-white/70">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold text-gray-800 mb-2">Ubicación</h3>
                <p className="text-gray-600 text-sm">{SITE_CONFIG.address.full}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold text-gray-800 mb-2">Teléfono</h3>
                <p className="text-gray-600 text-sm">{SITE_CONFIG.phoneInternational}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🕒</div>
                <h3 className="font-bold text-gray-800 mb-2">Horarios</h3>
                <p className="text-gray-600 text-sm">{SITE_CONFIG.businessHours.weekdays}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros por Categoría */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors text-sm font-medium"
                  onClick={() => scrollToCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {categories.map(category => (
              <div key={category} id={`category-${category}`} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">
                  {category}
                </h2>
                <div className="space-y-4">
                  {faqsData
                    .filter(faq => faq.category === category)
                    .map((faq, index) => (
                      <details 
                        key={index} 
                        className="bg-gray-50 rounded-lg border border-gray-200 group"
                      >
                        <summary className="p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-800 pr-4">
                              {faq.question}
                            </h3>
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">
                              ▼
                            </span>
                          </div>
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo en Carcelén está listo para resolver todas tus dudas 
              sobre el cuidado de tu mascota.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola!%20Tengo%20una%20consulta%20específica%20sobre%20mi%20mascota`}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Consultar por WhatsApp
              </a>
              <a 
                href="/contacto"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Agendar Cita Presencial
              </a>
            </div>
          </div>
        </section>

        {/* Servicios Relacionados */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Nuestros Servicios en Carcelén
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a 
                href="/servicios/vacunas" 
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">💉</div>
                <h3 className="font-bold text-gray-800 mb-2">Vacunación</h3>
                <p className="text-gray-600 text-sm">Plan completo desde $12</p>
              </a>
              <a 
                href="/servicios/desparasitacion" 
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-gray-800 mb-2">Desparasitación</h3>
                <p className="text-gray-600 text-sm">Interna y externa desde $8</p>
              </a>
              <a 
                href="/#servicios" 
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold text-gray-800 mb-2">Grooming</h3>
                <p className="text-gray-600 text-sm">Peluquería desde $15</p>
              </a>
              <a 
                href="/#servicios" 
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-bold text-gray-800 mb-2">Consulta</h3>
                <p className="text-gray-600 text-sm">Evaluación desde $20</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}