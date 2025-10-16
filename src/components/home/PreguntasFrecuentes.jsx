"use client";

import { useState } from "react";

import { SITE_CONFIG, FAQ } from "@/lib/constants";
const FAQ_ITEMS = FAQ;

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