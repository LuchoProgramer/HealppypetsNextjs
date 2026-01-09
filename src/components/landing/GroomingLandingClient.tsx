
"use client";

import React from "react";
import Image from "next/image";
import { FAQ } from "@/lib/constants";

import { useState } from "react";
import Link from "next/link";
import { Check, Clock, Star, ArrowRight } from "lucide-react";
import InternalLinks from "@/components/ui/InternalLinks";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function GroomingLandingClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const GROOMING_FEATURES = [
    "Baño con shampoo premium",
    "Cepillado y secado profesional",
    "Corte de pelo según raza",
    "Corte de uñas y limado",
    "Limpieza de oídos",
    "Perfume especial"
  ];

  const PRICING = [
    { size: "Pequeño", time: "1-1.5 horas", price: "$20" },
    { size: "Mediano", time: "1.5-2 horas", price: "$25" },
    { size: "Grande", time: "2-3 horas", price: "$30" }
  ];

  const TESTIMONIALS = [
    {
      name: "María González",
      pet: "Max (Golden Retriever)",
      text: "El grooming fue excelente. Max salió hermoso y feliz. Muy profesionales!",
      rating: 5
    },
    {
      name: "Jorge Mendoza",
      pet: "Bella (Schnauzer)",
      text: "Bella ama ir a Healppypets. El ambiente es acogedor y limpísimo.",
      rating: 5
    },
    {
      name: "Roberto Castro",
      pet: "Zeus (Pastor Alemán)",
      text: "Zeus es grande y otros lugares no lo atienden bien. Aquí lo tratan como rey!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
              <span className="text-3xl">✂️</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Grooming Express desde <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">$20</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tu mascota saldrá hermosa, feliz y lista para cualquier ocasión en 2 horas
            </p>
            <a
              href="https://wa.me/593987005084?text=Hola! Quiero agendar Grooming Express para mi mascota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-lg"
              onClick={() => trackWhatsAppClick('Grooming Hero CTA')}
            >
              <span>💬</span>
              Agendar Grooming Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Decorative */}
          <div className="absolute top-1/4 right-8 opacity-20 animate-pulse">
            <span className="text-7xl">🐕</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What's Included */}
        <section className="py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            ¿Qué Incluye tu Grooming?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&q=80"
                alt="Grooming"
                width={1200}
                height={720}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
              {GROOMING_FEATURES.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#F2DFED] rounded-xl">
                  <Check className="w-5 h-5 text-[#F2C2EA] flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Precios Claros y Transparentes
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {PRICING.map((plan, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#F2C2EA] transition-all hover:shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.size}</h3>
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{plan.time}</span>
                </div>
                <div className="text-4xl font-bold text-[#F2C2EA] mb-6">{plan.price}</div>
                <a
                  href="https://wa.me/593987005084?text=Hola! Quiero agendar Grooming para mi mascota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-bold py-3 rounded-full hover:shadow-lg transition-all text-center"
                  onClick={() => trackWhatsAppClick(`Grooming Plan CTA - ${plan.size}`)}
                >
                  Seleccionar
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Lo Que Dicen Nuestros Clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
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
            {FAQ.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 text-left font-semibold text-gray-900 hover:bg-[#F2DFED]/50 transition-colors flex justify-between items-center"
                >
                  {item.question}
                  <span className={`transition-transform ${expandedFaq === i ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para que tu mascota brille?
          </h2>
          <p className="text-lg text-gray-800 mb-8 opacity-90">
            Agenda hoy y dale a tu mascota el grooming que merece
          </p>
          <a
            href="https://wa.me/593987005084?text=Hola! Quiero agendar Grooming Express para mi mascota"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-xl transition-all hover:scale-105"
            onClick={() => trackWhatsAppClick('Grooming Bottom CTA')}
          >
            <span>💬</span>
            Agendar por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </section>

        {/* Internal Links Estratégicos para Grooming */}
        <InternalLinks
          currentPage="/grooming"
          excludeLinks={['/grooming']}
          maxLinks={6}
        />
      </div>
    </div>
  );
}
