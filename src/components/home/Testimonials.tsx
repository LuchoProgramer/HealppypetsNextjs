"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE_CONFIG, TESTIMONIALS, TestimonialType } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-lg">
        {i < rating ? "⭐" : "☆"}
      </span>
    ));
  };

  return (
    <section id="testimonios" className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
            <span className="text-3xl">❤️</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Historias que <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">Nos Llenan el Corazón</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Cada testimonio es una cola que se mueve. Escucha lo que dicen quienes confían en nosotros.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Decorative Quotes */}
          <div className="absolute -top-8 -left-4 text-6xl text-[#F2C9E7]/20 select-none font-serif">"</div>
          <div className="absolute -bottom-8 -right-4 text-6xl text-[#F2C2EA]/20 select-none font-serif">"</div>

          {/* Testimonial Cards */}
          <div className="relative">
            {TESTIMONIALS.map((testimonial: TestimonialType, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 absolute inset-0 translate-x-8 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                  <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                    {/* Pet Image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] blur-2xl opacity-40 rounded-full w-32 h-32 -z-10" />
                        
                        {/* Image container */}
                        <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src={testimonial.image ?? `${SITE_CONFIG.url}/og-image.png`}
                            alt={testimonial.petName}
                            width={160}
                            height={160}
                            sizes="80px"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg">
                          <span className="text-xl">✓</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 text-center sm:text-left">
                      {/* Stars */}
                      <div className="flex justify-center sm:justify-start gap-1">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Quote */}
                      <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-gray-200">
                        <p className="font-bold text-lg text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-[#F2C2EA] font-medium">
                          Dueño/a de {testimonial.petName}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {testimonial.petType} • {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-10 h-3 bg-[#F2C2EA]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { emoji: "🐾", value: "300+", label: "Mascotas Atendidas" },
            { emoji: "⭐", value: "4.7/5", label: "Calificación" },
            { emoji: "❤️", value: "100%", label: "Dedicación" },
            { emoji: "🏆", value: "4 años", label: "De Experiencia" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {stat.emoji}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="mt-16 bg-gradient-to-r from-[#F2C9E7]/10 to-[#F2C2EA]/10 rounded-2xl p-8 border border-[#F2C2EA]/20">
          <div className="text-center">
            <p className="text-xl text-gray-700 font-medium mb-4">
              ¿Quieres que tu mascota sea parte de estas historias felices?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                <span className="mr-2">💬</span>
                Agenda Ahora
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-4 animate-pulse opacity-30">
          <span className="text-6xl">❤️</span>
        </div>
        <div className="absolute top-1/3 right-8 animate-pulse opacity-30" style={{ animationDelay: '1s' }}>
          <span className="text-5xl">🐾</span>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-pulse opacity-20" style={{ animationDelay: '2s' }}>
          <span className="text-7xl">⭐</span>
        </div>
      </div>
    </section>
  );
}