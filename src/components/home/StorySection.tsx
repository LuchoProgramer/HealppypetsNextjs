"use client";

import { useEffect, useRef, useState } from "react";
import { Home, Heart, Star } from "lucide-react";
import { STORY_SECTIONS } from "@/lib/constants";
import Image from "next/image";

// Mapeo de nombres de iconos a componentes
import type { FC, SVGProps } from "react";
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  Home,
  Heart,
  Star,
};

export default function StorySection() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  return (
    <section className="section-padding bg-gradient-soft overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4 animate-bounce-slow">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="section-title mb-6">
            Una Historia de <span className="text-gradient">Amor y Dedicación</span>
          </h2>
          <p className="section-subtitle">
            Cada mascota que pasa por nuestras puertas deja una huella en nuestro corazón.
            Esta es nuestra historia, pero también es la tuya.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="space-y-32">
          {STORY_SECTIONS.map((section, index) => {
            const isVisible = visibleSections.has(index);
            const isEven = index % 2 === 0;
            const IconComponent = iconMap[section.icon];

            return (
              <div
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className={`relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Image Side */}
                  <div
                    className={`relative ${isEven ? "" : "lg:col-start-2"} ${
                      isVisible
                        ? isEven
                          ? "animate-slide-in-left"
                          : "animate-slide-in-right"
                        : ""
                    }`}
                  >
                    {/* Decorative Icon */}
                    <div className="absolute -top-8 -left-8 opacity-10 select-none">
                      <IconComponent className="w-32 h-32 text-primary-500" />
                    </div>

                    {/* Image Container */}
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity rounded-3xl" />
                      
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-3xl shadow-strong">
                        <Image
                          src={section.image}
                          alt={section.title}
                          width={600}
                          height={400}
                          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-strong p-4 transform group-hover:scale-110 transition-transform">
                        <IconComponent className="w-12 h-12 text-primary-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`space-y-6 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"} ${
                      isVisible
                        ? isEven
                          ? "animate-slide-in-right"
                          : "animate-slide-in-left"
                        : ""
                    }`}
                  >
                    {/* Step Number */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-primary">
                        {index + 1}
                      </div>
                      <div className="h-0.5 flex-1 bg-gradient-primary" />
                    </div>

                    {/* Subtitle */}
                    <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider">
                      {section.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="text-4xl lg:text-5xl font-heading font-bold text-dark-800 leading-tight">
                      {section.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-dark-600 leading-relaxed">
                      {section.content}
                    </p>

                    {/* Quote or Additional Info */}
                    <div className="bg-primary-50 border-l-4 border-primary-400 p-6 rounded-r-xl">
                      <p className="text-dark-700 italic">
                        &quot;En HealppyPets, cada mascota recibe el cuidado que le daríamos a nuestra propia familia.&quot;
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="flex items-center space-x-4 pt-4">
                      {["🐾", "❤️", "✨"].map((emoji, i) => (
                        <span
                          key={i}
                          className="text-3xl opacity-50 animate-float"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connecting Line for Timeline (except last item) */}
                {index < STORY_SECTIONS.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-0.5 h-32 bg-gradient-to-b from-primary-300 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action at the End */}
        <div className="text-center mt-32 space-y-8 animate-fade-in-up">
          <div className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-full shadow-primary">
            <p className="text-xl font-semibold">
              ¿Listo para ser parte de nuestra historia?
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contacto" className="btn-primary">
              Agenda tu Primera Cita
            </a>
            <a href="#servicios" className="btn-secondary">
              Conoce Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}