"use client";

import { useState, useEffect, useRef } from "react";

const SITE_CONFIG = {
  whatsapp: "593987005084",
  whatsappMessage: "Hola! Quisiera agendar una cita para mi mascota"
};

const SERVICES = [
  {
    id: "grooming",
    title: "Grooming Express",
    price: "$20",
    duration: "2 horas",
    description: "Tu peludo sale impecable y feliz. Servicio completo con todo lo necesario para que luzca radiante.",
    image: "https://res.cloudinary.com/tu-cloud/image/upload/grooming.jpg",
    imagePlaceholder: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    icon: "✂️",
    color: "from-[#F2C9E7] to-[#F2C2EA]",
    features: [
      "Baño con shampoo premium",
      "Corte de pelo profesional",
      "Corte de uñas",
      "Cepillado completo",
      "Limpieza de oídos",
      "Desparasitación externa"
    ],
    whatsappMsg: "Hola! Quiero agendar un servicio de Grooming Express para mi mascota 🐕✂️"
  },
  {
    id: "consultas",
    title: "Consulta Veterinaria",
    price: "$15",
    duration: "30 min",
    description: "Atención profesional para el bienestar de tu mascota. Diagnóstico y recomendaciones personalizadas.",
    image: "https://res.cloudinary.com/tu-cloud/image/upload/consulta.jpg",
    imagePlaceholder: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80",
    icon: "🩺",
    color: "from-[#F2D8EE] to-[#F2C2EA]",
    features: [
      "Examen físico completo",
      "Diagnóstico profesional",
      "Recomendaciones de cuidado",
      "Orientación nutricional",
      "Plan de tratamiento",
      "Seguimiento incluido"
    ],
    whatsappMsg: "Hola! Necesito agendar una consulta veterinaria para mi mascota 🩺"
  },
  {
    id: "vacunacion",
    title: "Vacunación",
    price: "$20",
    duration: "15 min",
    description: "Protege a tu mascota con nuestro plan de vacunación completo. Consulta veterinaria incluida.",
    image: "https://res.cloudinary.com/tu-cloud/image/upload/vacunas.jpg",
    imagePlaceholder: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
    icon: "💉",
    color: "from-[#F2C2EA] to-[#F2DFED]",
    features: [
      "Consulta veterinaria incluida",
      "Vacunas importadas de calidad",
      "Carnet de vacunación",
      "Recordatorio de refuerzos",
      "Plan personalizado",
      "Seguimiento post-vacuna"
    ],
    whatsappMsg: "Hola! Quiero vacunar a mi mascota. ¿Cuál es el plan de vacunación? 💉"
  },
  {
    id: "desparasitacion",
    title: "Desparasitación",
    price: "$20",
    duration: "15 min",
    description: "Elimina parásitos internos y externos. Mantén a tu mascota saludable y protegida.",
    image: "https://res.cloudinary.com/tu-cloud/image/upload/desparasitacion.jpg",
    imagePlaceholder: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    icon: "🪱",
    color: "from-[#F2DFED] to-[#F2D8EE]",
    features: [
      "Desparasitante interno",
      "Desparasitante externo",
      "Consulta incluida",
      "Recomendaciones de prevención",
      "Calendario de refuerzos",
      "Productos de calidad garantizada"
    ],
    whatsappMsg: "Hola! Necesito desparasitar a mi mascota 🐾"
  },
  {
    id: "farmacia",
    title: "Farmacia Veterinaria",
    price: "Consulta",
    duration: "Variable",
    description: "Medicamentos, suplementos y productos de calidad para el cuidado de tu mascota.",
    image: "https://res.cloudinary.com/tu-cloud/image/upload/farmacia.jpg",
    imagePlaceholder: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
    icon: "💊",
    color: "from-[#F2C9E7] to-[#F2D8EE]",
    features: [
      "Medicamentos veterinarios",
      "Suplementos nutricionales",
      "Productos de higiene",
      "Antiparasitarios",
      "Productos para piel y pelo",
      "Asesoría profesional incluida"
    ],
    whatsappMsg: "Hola! Necesito consultar sobre medicamentos para mi mascota 💊"
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => new Set(prev).add(index));
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="servicios" className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
            <span className="text-3xl">✨</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Servicios para tu <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">Mejor Amigo</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Cuidado profesional y rápido en Carcelén. Primera visita con 20% de descuento 🎁
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SERVICES.map((service, index) => {
            const isVisible = visibleCards.has(index);
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Card */}
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
                  isActive ? "ring-2 ring-[#F2C2EA] ring-offset-2" : ""
                }`}>
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.imagePlaceholder}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1.5 shadow-lg">
                      <span className="font-bold text-lg text-gray-900">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-3 flex-grow flex flex-col">
                    {/* Title & Duration */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F2C2EA] transition-colors">
                        {service.title}
                      </h3>
                      <span className="flex items-center gap-1 text-gray-600 text-sm font-medium whitespace-nowrap">
                        <span>⏱️</span>
                        <span>{service.duration}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Features - Show on Hover/Active */}
                    <div className={`space-y-2 transition-all duration-500 overflow-hidden ${
                      isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <p className="font-semibold text-gray-800 text-sm pt-2 flex items-center gap-1">
                        <span>✨</span> Incluye:
                      </p>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-[#F2C2EA] mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full bg-gradient-to-r ${service.color} text-gray-900 py-3 rounded-xl font-semibold text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 mt-4`}
                    >
                      Agendar Ahora →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🎁",
              title: "Primera Visita",
              description: "20% de descuento en tu primera cita",
              color: "from-green-400 to-green-500"
            },
            {
              icon: "💬",
              title: "Agenda por WhatsApp",
              description: "Respuesta rápida y atención personalizada",
              color: "from-blue-400 to-blue-500"
            },
            {
              icon: "📍",
              title: "En Carcelén",
              description: "Fácil acceso y estacionamiento disponible",
              color: "from-purple-400 to-purple-500"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:scale-110 transition-transform shadow-md`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16 space-y-4">
          <div className="inline-block bg-gradient-to-r from-green-50 to-green-100 rounded-full px-6 py-2 border border-green-200">
            <p className="text-green-700 font-semibold flex items-center justify-center gap-2">
              <span>❤️</span> 
              ¿Primera vez? Obtén 20% de descuento
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hola! Quiero mi 20% de descuento en la primera visita 🐾")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">💬</span>
              Agendar Mi Primera Cita
            </a>
            <a 
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              Ver Más Información
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F2C9E7]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F2D8EE]/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}