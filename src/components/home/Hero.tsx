// Declaración global para window.gtag (evita error TS2339)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
  title: "Cuidado Veterinario de Confianza ",
  titleHighlight: "en Carcelén",
      subtitle: "Grooming rápido, vacunas y más",
      description: "Tu mascota merece atención profesional sin complicaciones. Agenda por WhatsApp y obtén 20% OFF en tu primera visita.",
      image: "https://res.cloudinary.com/tu-cloud/image/upload/hero-principal.jpg", // Reemplaza con tu URL
      imagePlaceholder: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80",
      cta: "Agendar Mi Cita",
      ctaLink: `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappPromo)}`,
      badge: "🎁 20% OFF Primera Visita",
      badgeColor: "bg-green-500/90"
    },
    {
      title: "Peluquería Canina Express",
      titleHighlight: "desde $20",
      subtitle: "Corte de pelo y baño profesional",
      description: "Baño completo, corte de pelo, corte de uñas y limpieza de oídos. Tu mascota lucirá hermosa en menos de 2 horas.",
      image: "https://res.cloudinary.com/tu-cloud/image/upload/grooming-hero.jpg",
      imagePlaceholder: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80",
      cta: "Agendar Peluquería",
      ctaLink: `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hola! Quiero agendar peluquería canina para mi mascota")}`,
      badge: "✂️ Corte Profesional",
      badgeColor: "bg-orange-500/90"
    },
    {
      title: "Vacunación y Desparasitación",
      titleHighlight: "desde $20",
      subtitle: "Protege a tu mascota en Carcelén",
      description: "Plan completo de vacunación y desparasitación para perros y gatos. Consulta veterinaria incluida con cada servicio.",
      image: "https://res.cloudinary.com/tu-cloud/image/upload/vacunas-hero.jpg",
      imagePlaceholder: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1920&q=80",
      cta: "Agenda Vacunación",
      ctaLink: `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hola! Quiero agendar vacunación y desparasitación para mi mascota")}`,
      badge: "💉 Consulta Incluida",
      badgeColor: "bg-blue-500/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
  <section className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden pt-0 lg:pt-32">
      {/* SEO: H1 único y oculto para crawlers */}
      <h1 className="sr-only">HealppyPets - Veterinaria en Carcelén, Quito - Grooming, Consultas y Vacunación</h1>
      
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[6000ms] ease-out"
              style={{
                backgroundImage: `url(${slide.imagePlaceholder})`,
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            {/* Gradient Overlay - Más suave */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div
              className={`max-w-2xl lg:max-w-3xl space-y-6 lg:space-y-8 transition-all duration-1000 ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Animated Badge */}
              <div
                className={`inline-flex items-center space-x-2 ${slide.badgeColor} backdrop-blur-md rounded-full px-4 py-2 shadow-lg transition-all duration-700 delay-100 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <span className="text-white text-sm lg:text-base font-semibold">
                  {slide.badge}
                </span>
              </div>

              {/* Main Title */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  {slide.title}
                  <span className="block bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">
                    {slide.titleHighlight}
                  </span>
                </h2>
              </div>

              {/* Subtitle */}
              <p
                className={`text-xl sm:text-2xl lg:text-3xl text-[#F2DFED] font-medium transition-all duration-700 delay-300 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {slide.subtitle}
              </p>

              {/* Description */}
              <p
                className={`text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed transition-all duration-700 delay-400 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-500 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <a
                  href={slide.ctaLink}
                  target={slide.ctaLink.startsWith('http') ? "_blank" : undefined}
                  rel={slide.ctaLink.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click_cta_hero', {
                        event_category: 'hero',
                        event_label: slide.cta,
                        slide_index: index,
                        slide_title: slide.title,
                        cta_link: slide.ctaLink,
                      });
                    }
                  }}
                >
                  {slide.cta}
                  <span className="ml-2">→</span>
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-base sm:text-lg"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click_whatsapp_hero', {
                        event_category: 'hero',
                        event_label: 'Chatea con nosotros',
                        slide_index: index,
                        slide_title: slide.title,
                      });
                    }
                  }}
                >
                  <span className="mr-2">💬</span>
                  Chatea con nosotros
                </a>
              </div>

              {/* Stats - Simplificados y reales */}
              <div
                className={`flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-white/20 transition-all duration-700 delay-600 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {[
                  { icon: "🐾", value: "300+", label: "Mascotas Felices" },
                  { icon: "⭐", value: "4.9/5", label: "Calificación" },
                  { icon: "⚡", value: "2hrs", label: "Grooming Express" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <span className="text-2xl sm:text-3xl">{stat.icon}</span>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Price Tags Floating - Solo en desktop */}
      <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10 space-y-4">
        {[
          { service: "Grooming", price: "$20", icon: "✂️" },
          { service: "Consulta", price: "$15", icon: "🩺" },
          { service: "Vacunas", price: "$20", icon: "💉" }
        ].map((item, i) => (
          <div
            key={i}
            className={`bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl hover:scale-105 transition-all duration-300 ${
              currentSlide === i ? 'ring-2 ring-[#F2C2EA]' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <div className="text-sm text-gray-600 font-medium">{item.service}</div>
                <div className="text-2xl font-bold text-gray-900">{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-10 sm:w-12 h-3 bg-[#F2C2EA]"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-10 hidden md:flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-white text-xs sm:text-sm font-medium">Descubre más</span>
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Decorative Elements - Más sutiles */}
      <div className="absolute top-1/4 right-10 w-48 h-48 lg:w-64 lg:h-64 bg-[#F2C9E7]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 lg:w-96 lg:h-96 bg-[#F2D8EE]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
    </section>
  );
}