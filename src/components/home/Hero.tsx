"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Donde cada cola cuenta una historia",
      subtitle: "Tu mascota no es solo un animal, es familia",
      description: "En HealppyPets transformamos el cuidado veterinario en una experiencia llena de amor, profesionalismo y dedicación.",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80",
      cta: "Conoce Nuestra Historia",
      ctaLink: "#nosotros"
    },
    {
      title: "Grooming que enamora",
      subtitle: "Porque tu peludo merece sentirse especial",
      description: "Desde un baño relajante hasta un corte de revista, cada servicio está diseñado para que tu mascota brille.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80",
      cta: "Ver Servicios de Grooming",
      ctaLink: "#servicios"
    },
    {
      title: "Salud que tranquiliza",
      subtitle: "Expertos que aman lo que hacen",
      description: "Vacunación, consultas y farmacia veterinaria. Todo lo que necesitas para mantener a tu mascota saludable y feliz.",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1920&q=80",
      cta: "Agenda tu Cita",
      ctaLink: "#contacto"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden mt-20">
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
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-float"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-800/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container-custom flex items-center">
            <div
              className={`max-w-3xl space-y-8 transition-all duration-1000 ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Animated Badge */}
              <div
                className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 transition-all duration-700 delay-100 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <span className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">
                  Atención disponible por WhatsApp
                </span>
              </div>

              {/* Main Title */}
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {slide.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i % 2 === 1 ? "text-gradient block" : "block"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p
                className={`text-2xl md:text-3xl text-primary-200 font-medium transition-all duration-700 delay-300 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {slide.subtitle}
              </p>

              {/* Description */}
              <p
                className={`text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl transition-all duration-700 delay-400 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <Link href={slide.ctaLink} className="btn-primary">
                  {slide.cta}
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white text-white hover:bg-white hover:text-dark-800"
                >
                  <span className="mr-2">💬</span>
                  Chatea con nosotros
                </a>
              </div>

              {/* Stats */}
              <div
                className={`flex flex-wrap gap-8 pt-8 border-t border-white/20 transition-all duration-700 delay-600 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {[
                  { icon: "🐾", value: "2000+", label: "Mascotas Felices" },
                  { icon: "⭐", value: "98%", label: "Satisfacción" },
                  { icon: "🏆", value: "3+", label: "Años" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <span className="text-3xl">{stat.icon}</span>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-primary-400"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-white text-sm font-medium">Descubre más</span>
        <svg
          className="w-6 h-6 text-white"
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

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" />
    </section>
  );
}