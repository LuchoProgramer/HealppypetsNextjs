"use client";

import { useState } from "react";

const SITE_CONFIG = {
  whatsapp: "593987005084",
  whatsappMessage: "Hola! Quisiera agendar una cita para mi mascota 🐾"
};

const FAQ_ITEMS = [
  {
    id: 1,
    category: "Grooming",
    question: "¿Cuál es el costo del grooming?",
    answer: "El grooming cuesta $20 y el tiempo depende del porte de tu mascota:\n\n• Perros pequeños: 2 horas\n• Perros medianos: 2-3 horas\n• Perros grandes: 3-4 horas\n\nSi deseas agregar cepillado de dientes profesional, es $3 adicionales."
  },
  {
    id: 2,
    category: "Grooming",
    question: "¿Qué incluye el servicio de grooming?",
    answer: "Nuestro grooming completo incluye:\n\n✓ Baño profesional\n✓ Cepillado completo\n✓ Secado\n✓ Corte de pelo (de acuerdo a la raza)\n✓ Corte de uñas\n✓ Limpieza de oídos\n\nTodo realizado con paciencia y cuidado por Carla."
  },
  {
    id: 3,
    category: "Grooming",
    question: "¿Ofrecen servicio de cepillado de dientes?",
    answer: "Sí, ofrecemos cepillado de dientes profesional como servicio adicional a $3.\n\nEsto es importante para la salud dental de tu mascota y previene problemas a futuro. Puedes agregarlo junto con cualquier otro servicio."
  },
  {
    id: 4,
    category: "Vacunación",
    question: "¿A qué edad empieza a vacunar a los cachorros?",
    answer: "Las vacunas inician desde el mes y medio de vida.\n\nEl calendario de vacunación es:\n\n• Mes y medio - Primera dosis\n• 2 meses - Segunda dosis\n• 3 meses - Tercera dosis\n• 4-6 meses - Cuarta dosis (según sea necesario)\n\nLuego, la vacuna múltiple, tos de perrera y rabia se aplican anualmente.\n\nCarla evalúa a cada cachorro para determinar el mejor plan vacunal."
  },
  {
    id: 5,
    category: "Vacunación",
    question: "¿Por qué es importante vacunar a mi mascota?",
    answer: "Las vacunas son esenciales para proteger a tu mascota de enfermedades graves e infecciosas.\n\nAl vacunar:\n\n✓ Previene enfermedades potencialmente mortales\n✓ Protege a otras mascotas de tu comunidad\n✓ Evita gastos veterinarios altos por enfermedades graves\n✓ Garantiza una vida larga y saludable\n\nCarla te asesorará sobre el plan vacunal más adecuado para tu mascota según su edad y historial."
  },
  {
    id: 6,
    category: "Desparasitación",
    question: "¿Cada cuánto tiempo se desparasita a la mascota?",
    answer: "La desparasitación se realiza cada 3 meses.\n\nEsto previene que tu mascota desarrolle parásitos que afecten su salud. Carla puede asesorarte sobre un calendario personalizado según la edad y estilo de vida de tu mascota."
  },
  {
    id: 7,
    category: "Desparasitación",
    question: "¿Cuál es la diferencia entre parásitos internos y externos?",
    answer: "Hay dos tipos de parásitos:\n\n📌 Parásitos Internos:\n• Se encuentran dentro del animal\n• Afectan el sistema digestivo\n• Causan desnutrición, diarrea y debilidad\n\n🐛 Parásitos Externos:\n• Se encuentran en la piel o patas\n• Incluyen pulgas, garrapatas y ácaros\n• Causan picazón, irritación y enfermedades de piel\n\nLa desparasitación cada 3 meses protege contra ambos tipos."
  },
  {
    id: 8,
    category: "General",
    question: "¿Cómo agendo una cita?",
    answer: "Es muy fácil agendar tu cita:\n\n💬 Vía WhatsApp: Envía un mensaje al +593 987005084\n🌐 A través de nuestro sitio web: Click en el botón 'Agendar Cita'\n\nCarla responde rápidamente y te confirma el horario. Ten listo:\n• Nombre de tu mascota\n• Tipo y porte\n• Servicio que deseas"
  }
];

const CATEGORIES = ["Grooming", "Vacunación", "Desparasitación", "General"];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Grooming");

  const filteredFAQ = FAQ_ITEMS.filter(item => item.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
            <span className="text-3xl">❓</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Preguntas <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">Frecuentes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre grooming, vacunación y desparasitación
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedId(null);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#F2C2EA]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {filteredFAQ.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Question */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <span
                  className={`flex-shrink-0 text-2xl text-[#F2C2EA] transition-transform duration-300 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedId === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 border-t border-gray-100 bg-gradient-to-b from-transparent to-gray-50/50">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-gradient-to-r from-[#F2C9E7]/20 to-[#F2C2EA]/20 rounded-2xl p-8 lg:p-12 border border-[#F2C2EA]/30 text-center">
          <p className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
            ¿Tienes más preguntas?
          </p>
          <p className="text-gray-700 mb-6">
            Carla está disponible por WhatsApp para responder cualquier duda específica sobre tu mascota.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hola! Tengo preguntas sobre los servicios de Healppypets")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
          >
            <span className="mr-2">💬</span>
            Chatea Con Carla
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Ahora que conoces más, ¿listo para agendar?
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-lg"
          >
            <span className="mr-2">🐾</span>
            Agendar Cita Ahora
          </a>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-4 opacity-20 animate-pulse">
          <span className="text-6xl">🐕</span>
        </div>
        <div className="absolute bottom-1/4 left-4 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <span className="text-7xl">🐱</span>
        </div>
      </div>
    </section>
  );
}