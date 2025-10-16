"use client";

import { useState } from "react";
import { Check, Shield, Calendar, Star, ArrowRight } from "lucide-react";

export default function VacunacionLandingClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const VACCINATION_SCHEDULE = [
    { age: "Mes y Medio", vaccines: "Primera dosis: Múltiple", price: "$20" },
    { age: "2 Meses", vaccines: "Segunda dosis: Múltiple", price: "$20" },
    { age: "3 Meses", vaccines: "Tercera dosis: Múltiple + Antirrábica", price: "$25" },
    { age: "Anual (Adultos)", vaccines: "Múltiple + Antirrábica + Tos de Perrera", price: "$20" }
  ];

  const BENEFITS = [
    "Protección contra enfermedades mortales",
    "Consulta veterinaria incluida",
    "Carnet de vacunación",
    "Recordatorio de refuerzos",
    "Plan personalizado según edad",
    "Seguimiento post-vacuna"
  ];

  const TESTIMONIALS = [
    { name: "Patricia Moreno", pet: "Rocky (Bulldog Francés)", text: "Rocky estaba asustado pero el veterinario fue muy paciente. Consulta completa y buenos consejos.", rating: 5 },
    { name: "Luis Herrera", pet: "Toby (Labrador)", text: "Toby recibió todas sus vacunas aquí. El seguimiento ha sido excelente. Muy profesionales!", rating: 5 }
  ];

  const FAQ_ITEMS = [
    { q: "¿A qué edad debo empezar a vacunar?", a: "Las vacunas inician desde el mes y medio de vida. Es crucial comenzar temprano para proteger a tu cachorro desde el principio." },
    { q: "¿Cuántas vacunas necesita mi mascota?", a: "De cachorro: 4-6 dosis en el primer año. De adulto: una vacuna múltiple anual + antirrábica." },
    { q: "¿Cuánto tiempo toma la vacunación?", a: "La consulta y vacunación toman aproximadamente 15-20 minutos." },
    { q: "¿Tiene efectos secundarios?", a: "Raramente. Puede haber letargo leve por 24-48 horas. Contacta si ves reacciones severas." },
    { q: "¿Las vacunas son obligatorias?", a: "La antirrábica es obligatoria por ley. Las demás son recomendadas pero esenciales para proteger a tu mascota." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
              <span className="text-3xl">💉</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Vacunación Completa desde <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">$20</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Protege a tu mascota de enfermedades graves con nuestro plan de vacunación personalizado
            </p>
            <a
              href="https://wa.me/593987005084?text=Hola! Quiero agendar vacunación para mi mascota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-lg"
            >
              <span>💬</span>
              Agendar Vacunación Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="absolute top-1/4 right-8 opacity-20 animate-pulse">
            <span className="text-7xl">🐕</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Por qué vacunar */}
        <section className="py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            ¿Por Qué Vacunar a tu Mascota?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80"
                alt="Vacunación"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-4">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#F2DFED] rounded-xl">
                  <Shield className="w-5 h-5 text-[#F2C2EA] flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendario */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Calendario de Vacunación
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {VACCINATION_SCHEDULE.map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#F2C2EA] transition-all hover:shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-[#F2C2EA]" />
                  <h3 className="text-xl font-bold text-gray-900">{item.age}</h3>
                </div>
                <p className="text-gray-700 mb-4">{item.vaccines}</p>
                <p className="text-2xl font-bold text-[#F2C2EA]">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F2C9E7]/10 border border-[#F2C9E7]/30 rounded-xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-gray-800">
              <strong>Nota:</strong> El calendario es orientativo. Carla evaluará a tu mascota y personalizará el plan según su edad, salud y estilo de vida.
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
            Protege a tu mascota hoy
          </h2>
          <p className="text-lg text-gray-800 mb-8 opacity-90">
            Una mascota vacunada es una mascota sana y feliz
          </p>
          <a
            href="https://wa.me/593987005084?text=Hola! Quiero agendar vacunación para mi mascota"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-xl transition-all hover:scale-105"
          >
            <span>💬</span>
            Agendar Vacunación
            <ArrowRight className="w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  );
}
