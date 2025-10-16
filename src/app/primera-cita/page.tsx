"use client";

import { useState } from "react";
import { Check, Zap, Gift, ArrowRight } from "lucide-react";

export default function PrimeraCitaLanding() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const OFFER_INCLUDES = [
    "Grooming, Consulta o Vacunación",
    "20% de descuento en el servicio",
    "Atención personalizada de Carla",
    "Carnet de servicios gratis",
    "Recordatorio para próximas citas",
    "Válido para mascotas nuevas"
  ];

  const BEFORE_AFTER = [
    { before: "$20", after: "$16", service: "Grooming Express" },
    { before: "$15", after: "$12", service: "Consulta Veterinaria" },
    { before: "$20", after: "$16", service: "Vacunación Completa" }
  ];

  const FAQ_ITEMS = [
    {
      q: "¿Quién puede usar esta promoción?",
      a: "Cualquier mascota que sea su primera visita a Healppypets. Solo se aplica una vez por mascota."
    },
    {
      q: "¿Hasta cuándo es válida la promoción?",
      a: "La promoción es permanente. Todos los nuevos clientes reciben 20% OFF en su primera cita."
    },
    {
      q: "¿Puedo combinarla con otros descuentos?",
      a: "Esta es nuestra promoción principal. No se acumula con otros descuentos, pero es la mejor oferta que tenemos."
    },
    {
      q: "¿Cómo la aplican?",
      a: "Solo agendar por WhatsApp mencionando que es tu primera visita. Carla aplicará el descuento automáticamente."
    },
    {
      q: "¿Qué pasa si tengo más de una mascota?",
      a: "El descuento aplica a cada mascota una sola vez. Si tienes varias mascotas nuevas, todas obtienen 20% OFF en su primer servicio."
    },
    {
      q: "¿Válido solo para grooming?",
      a: "No, aplica para cualquier servicio: Grooming, Consulta, Vacunación, Desparasitación. ¡Elige el que necesites!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - OFFER */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MEGA OFFER BADGE */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
              <Zap className="w-5 h-5" />
              OFERTA LIMITADA PARA NUEVOS CLIENTES
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
              <span className="text-3xl">🎁</span>
            </div>
            
            {/* MASSIVE DISCOUNT */}
            <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-gradient-to-r from-red-600 to-[#F2C2EA] bg-clip-text mb-4">
              20% OFF
            </h1>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Tu Primera Cita en Healppypets
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Grooming, Consulta, Vacunación o Desparasitación. ¡Elige lo que tu mascota necesita!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://wa.me/593987005084?text=Hola! Quiero mi 20% de descuento en la primera visita 🐾"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-[#F2C2EA] text-white font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-lg"
              >
                <span>💬</span>
                Reclamar Mi 20% OFF
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/593987005084?text=Hola! Tengo preguntas sobre la promoción"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-all"
              >
                <span>❓</span>
                Más Información
              </a>
            </div>

            <p className="text-sm text-gray-600 font-semibold">
              ⏰ Válido para TODOS los nuevos clientes • Una sola vez por mascota • Sin límite de tiempo
            </p>
          </div>

          <div className="absolute top-1/4 right-8 opacity-20 animate-pulse">
            <span className="text-7xl">🎉</span>
          </div>
          <div className="absolute bottom-1/4 left-8 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <span className="text-7xl">🐾</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Qué incluye */}
        <section className="py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            ¿Qué Incluye tu Primera Cita?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
            <div className="space-y-4">
              {OFFER_INCLUDES.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#F2DFED] rounded-xl">
                  <Check className="w-5 h-5 text-[#F2C2EA] flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80"
                alt="Mascota Feliz"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Ahorra con tu Primera Cita
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {BEFORE_AFTER.map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#F2C2EA] transition-all hover:shadow-lg">
                <p className="text-gray-600 font-semibold mb-4">{item.service}</p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-gray-400 line-through">
                    {item.before}
                  </span>
                  <span className="text-3xl font-black text-[#F2C2EA]">
                    {item.after}
                  </span>
                </div>
                <p className="text-sm text-green-600 font-bold">
                  AHORRAS {Number(item.before.slice(1)) - Number(item.after.slice(1))} DÓLARES
                </p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-yellow-900 font-semibold text-lg">
              ⭐ Además: Al agendar, ¡recibirás recomendaciones personalizadas para tu mascota!
            </p>
          </div>
        </section>

        {/* Por qué elegir Healppypets */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            ¿Por Qué Elegir Healppypets?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "👩‍⚕️",
                title: "Carla - Veterinaria Experta",
                desc: "3+ años de experiencia veterinaria y grooming profesional"
              },
              {
                emoji: "❤️",
                title: "Trato Especial",
                desc: "Cada mascota es tratada como si fuera la nuestra"
              },
              {
                emoji: "⚡",
                title: "Rápido y Eficiente",
                desc: "Servicios rápidos sin comprometer la calidad"
              },
              {
                emoji: "📍",
                title: "En Carcelén",
                desc: "Ubicación accesible con estacionamiento disponible"
              },
              {
                emoji: "💰",
                title: "Precios Justos",
                desc: "Transparentes y competitivos, sin sorpresas"
              },
              {
                emoji: "💬",
                title: "Disponible por WhatsApp",
                desc: "Respuestas rápidas a todas tus preguntas"
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 text-left font-semibold text-gray-900 hover:bg-[#F2DFED]/50 transition-colors flex justify-between items-center"
                >
                  {item.q}
                  <span className={`transition-transform ${expandedFaq === i ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-200">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA - MEGA */}
        <section className="py-16 bg-gradient-to-r from-red-600 via-[#F2C2EA] to-[#F2C9E7] rounded-2xl text-center mb-16 shadow-2xl">
          <Gift className="w-16 h-16 mx-auto mb-4 text-white" />
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            No Esperes Más
          </h2>
          <p className="text-xl text-white/90 mb-8 opacity-95">
            Tu mascota merece el mejor cuidado. Aprovecha tu 20% OFF hoy mismo.
          </p>
          <a
            href="https://wa.me/593987005084?text=Hola! Quiero mi 20% de descuento en la primera visita 🐾"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-gray-900 font-black rounded-full hover:shadow-2xl transition-all hover:scale-110 text-lg"
          >
            <span className="text-2xl">🎉</span>
            Reclamar Mi 20% OFF Ahora
            <ArrowRight className="w-6 h-6" />
          </a>
        </section>
      </div>
    </div>
  );
}