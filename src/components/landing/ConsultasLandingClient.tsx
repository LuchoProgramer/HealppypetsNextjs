// Declaración global para window.gtag (evita error TS2339 en TSX)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Stethoscope, Star, ArrowRight } from "lucide-react";

export default function ConsultasLandingClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const CONSULTATION_BENEFITS = [
    "Examen físico completo",
    "Diagnóstico profesional",
    "Recomendaciones de cuidado",
    "Orientación nutricional",
    "Plan de tratamiento",
    "Seguimiento post-consulta"
  ];

  const CONSULTATION_REASONS = [
    "Tu mascota se ve decaída",
    "Cambios en el apetito",
    "Problemas digestivos",
    "Problemas de piel",
    "Comportamientos extraños",
    "Revisión general"
  ];

  const TESTIMONIALS = [
    { name: "Andrea Silva", pet: "Rocky (Bulldog Francés)", text: "Rocky tenía problemas de piel. La consulta fue completa y con los productos recomendados está perfecto!", rating: 5 },
    { name: "Carmen López", pet: "Michi (Gato Naranja)", text: "Michi estaba estresado. La veterinaria me dio consejos maravillosos. Ahora está tranquilo.", rating: 5 }
  ];

  const FAQ_ITEMS = [
    { q: "¿Cuánto cuesta una consulta?", a: "Una consulta veterinaria cuesta $15. Incluye examen completo, diagnóstico y recomendaciones personalizadas." },
    { q: "¿Cuánto tiempo toma la consulta?", a: "Aproximadamente 30-45 minutos, dependiendo de la complejidad del caso." },
    { q: "¿Qué debo llevar a la consulta?", a: "Trae el carnet de vacunación (si existe), historial médico previo, y anota los síntomas que ha presentado." },
    { q: "¿Mi mascota está asustada, qué hago?", a: "Carla es muy paciente y cariñosa. Tu mascota recibirá un trato especial. Puedes quedarte durante la consulta." },
    { q: "¿Venden medicamentos en consulta?", a: "Sí, tenemos farmacia veterinaria completa con medicamentos, suplementos y productos recomendados por Carla." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
              <span className="text-3xl">🩺</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Consulta Veterinaria desde <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">$15</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Diagnóstico profesional y cuidado experto para la salud de tu mascota
            </p>
            <a
              href="https://wa.me/593987005084?text=Hola! Quiero agendar una consulta veterinaria para mi mascota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'consultas_click_whatsapp', {
                    event_category: 'consultas_cta',
                    event_label: 'WhatsApp Agendar Consulta Hero',
                  });
                }
              }}
            >
              <span>💬</span>
              Agendar Consulta Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="absolute top-1/4 right-8 opacity-20 animate-pulse">
            <span className="text-7xl">🐱</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Qué incluye */}
        <section className="py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            ¿Qué Incluye tu Consulta?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80"
                alt="Consulta"
                width={600}
                height={320}
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
              {CONSULTATION_BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#F2DFED] rounded-xl">
                  <Check className="w-5 h-5 text-[#F2C2EA] flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Razones para consultar */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            ¿Cuándo Consultar al Veterinario?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {CONSULTATION_REASONS.map((reason, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#F2C2EA] transition-all hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <Stethoscope className="w-6 h-6 text-[#F2C2EA] flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium">{reason}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F2C9E7]/10 border border-[#F2C9E7]/30 rounded-xl p-6 text-center">
            <p className="text-gray-800">
              <strong>Recuerda:</strong> Las consultas regulares previenen problemas de salud. Es mejor prevenir que lamentar.
            </p>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Lo Que Dicen Nuestros Clientes
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-[#F2C2EA] fill-[#F2C2EA]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">Dueño de {t.pet}</p>
                </div>
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

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            La salud de tu mascota es nuestra prioridad
          </h2>
          <p className="text-lg text-gray-800 mb-8 opacity-90">
            Agenda una consulta y dale a tu mascota el cuidado que merece
          </p>
          <a
            href="https://wa.me/593987005084?text=Hola! Quiero agendar una consulta veterinaria para mi mascota"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-xl transition-all hover:scale-105"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'consultas_click_whatsapp_final', {
                  event_category: 'consultas_cta',
                  event_label: 'WhatsApp Agendar Consulta Final',
                });
              }
            }}
          >
            <span>💬</span>
            Agendar Consulta
            <ArrowRight className="w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  );
}
