// Declaración global para window.gtag (evita error TS2339)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
"use client";

import { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function AboutSection() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const sections = [
    {
      id: 1,
      title: "Nuestro Inicio",
      subtitle: "Una Pasión Convertida en Realidad",
      year: "12 de Julio, 2023",
      content: "Healppypets nació de la convicción de que cada mascota merece un cuidado excepcional. Fue el momento en que Carla decidió poner su experiencia en veterinaria y grooming al servicio de la comunidad de Carcelén, trayendo calidad, profesionalismo y amor en cada servicio.",
      highlights: [
        "Iniciamos con grooming especializado",
        "Nos expandimos a consultas veterinarias",
        "Agregamos plan de vacunación y desparasitación"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      emoji: "🚀"
    },
    {
      id: 2,
      title: "Carla Tutistar",
      subtitle: "Tu Veterinaria de Confianza",
      year: "3 años en Veterinaria",
      content: "Carla no solo es veterinaria, es amante de los animales desde siempre. Con más de 3 años de experiencia en medicina veterinaria y años adicionales en grooming profesional, ha atendido cientos de mascotas con dedicación y cuidado. Su enfoque: tratar a cada mascota como si fuera la suya.",
      highlights: [
        "3+ años de experiencia veterinaria",
        "Especialista en grooming y cuidado estético",
        "Consultas personalizadas y pacientes"
      ],
      image: "https://images.unsplash.com/photo-1559839734033-6461efaf3cef?w=600&q=80",
      emoji: "👩‍⚕️"
    },
    {
      id: 3,
      title: "Lo que nos Hace Diferentes",
      subtitle: "El Trato Hacia las Mascotas",
      year: "Nuestro Compromiso",
      content: "En Healppypets, cada mascota es especial. No solo ofrecemos servicios veterinarios o grooming. Ofrecemos dedicación, paciencia y amor. Carla entiende que las mascotas sienten miedo, estrés y confianza. Por eso cada procedimiento es realizado con empatía, calma y cuidado extremo. Tus mascotas lo notan.",
      highlights: [
        "Trato empático y personalizado",
        "Ambiente tranquilo y seguro",
        "Cada mascota es tratada con amor"
      ],
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
      emoji: "❤️"
    }
  ];

  return (
    <section id="nosotros" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
            <span className="text-3xl">🐾</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestra <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">Historia y Valores</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce a Carla y descubre por qué somos la veterinaria de confianza en Carcelén
          </p>
        </div>

        {/* Timeline Sections */}
        <div className="space-y-16 lg:space-y-24">
          {sections.map((section, index) => {
            const isVisible = visibleSections.has(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    !isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Side */}
                  <div
                    className={`${!isEven ? "lg:col-start-2" : ""} ${
                      isVisible
                        ? isEven
                          ? "animate-fade-in"
                          : "animate-fade-in"
                        : ""
                    }`}
                  >
                    <div className="relative group">
                      {/* Glow Background */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] opacity-30 blur-2xl group-hover:opacity-40 transition-opacity rounded-2xl" />

                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-72 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Emoji Badge */}
                      <div className="absolute -bottom-4 -right-4 text-6xl bg-white rounded-2xl shadow-2xl p-3 transform group-hover:scale-110 transition-transform">
                        {section.emoji}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`space-y-6 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    {/* Number Indicator */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA]" />
                    </div>

                    {/* Subtitle */}
                    <div>
                      <p className="text-[#F2C2EA] font-semibold text-sm uppercase tracking-widest">
                        {section.subtitle}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{section.year}</p>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {section.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {section.content}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 pt-4">
                      {section.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-[#F2C2EA] text-xl flex-shrink-0 mt-1">✓</span>
                          <p className="text-gray-700">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* Quote Box */}
                    <div className="bg-gradient-to-r from-[#F2C9E7]/10 to-[#F2C2EA]/10 border-l-4 border-[#F2C2EA] p-6 rounded-r-xl mt-6">
                      <p className="text-gray-700 italic font-medium">
                        "{index === 0 ? "Somos más que una veterinaria, somos guardianes del bienestar de tus mascotas." : index === 1 ? "Mi misión es que cada mascota reciba el mejor cuidado posible." : "El bienestar de tu mascota es nuestro bienestar."}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider Line (except last) */}
                {index < sections.length - 1 && (
                  <div className="hidden lg:block mt-24 flex justify-center">
                    <div className="w-1 h-20 bg-gradient-to-b from-[#F2C2EA] to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200">
          {[
            { emoji: "📅", value: "2023", label: "Año de Inicio" },
            { emoji: "👩‍⚕️", value: "Carla", label: "Veterinaria" },
            { emoji: "📚", value: "3+ años", label: "Experiencia" },
            { emoji: "🎯", value: "100%", label: "Dedicación" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-3">{stat.emoji}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#F2C9E7]/20 to-[#F2C2EA]/20 rounded-2xl p-8 lg:p-12 border border-[#F2C2EA]/30 text-center">
          <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para conocer a Carla y darle el mejor cuidado a tu mascota?
          </p>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Agenda una cita y experimenta el diferencial de Healppypets: atención personalizada, profesionalismo y amor por cada mascota.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_agendar_carla', {
                    event_category: 'about',
                    event_label: 'Agenda Con Carla Ahora',
                  });
                }
              }}
            >
              <span className="mr-2">💬</span>
              Agenda Con Carla Ahora
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_ver_servicios', {
                    event_category: 'about',
                    event_label: 'Ver Servicios',
                  });
                }
              }}
            >
              Ver Servicios
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 right-8 opacity-20 animate-pulse">
          <span className="text-7xl">🐕</span>
        </div>
        <div className="absolute bottom-1/3 left-4 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <span className="text-8xl">🐱</span>
        </div>
      </div>
    </section>
  );
}