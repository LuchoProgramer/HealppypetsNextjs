"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, Syringe, Stethoscope, Pill, Clock, Gift, Car, Smartphone, Heart } from "lucide-react";
import { SERVICES } from "@/lib/constants";

// Mapeo de iconos
const iconMap: Record<string, any> = {
  Sparkles,
  Syringe,
  Stethoscope,
  Pill,
  Clock
};

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => new Set(prev).add(index));
              }, index * 150);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const colorClasses = {
    primary: {
      gradient: "bg-gradient-primary",
      shadow: "shadow-primary",
      text: "text-primary-600",
      bg: "bg-primary-50",
      border: "border-primary-300"
    },
    secondary: {
      gradient: "bg-gradient-secondary",
      shadow: "shadow-secondary",
      text: "text-secondary-600",
      bg: "bg-secondary-50",
      border: "border-secondary-300"
    },
    accent: {
      gradient: "bg-gradient-warm",
      shadow: "shadow-medium",
      text: "text-accent-600",
      bg: "bg-accent-50",
      border: "border-accent-300"
    },
    success: {
      gradient: "bg-gradient-to-r from-success-400 to-success-600",
      shadow: "shadow-medium",
      text: "text-success-600",
      bg: "bg-success-50",
      border: "border-success-300"
    }
  };

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4 animate-bounce-slow">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="section-title mb-6">
            Servicios que <span className="text-gradient">Transforman Vidas</span>
          </h2>
          <p className="section-subtitle">
            Cada servicio está diseñado con amor y profesionalismo para que tu mascota
            se sienta como en casa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const isVisible = visibleCards.has(index);
            const isActive = activeService === service.id;
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Card */}
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 ${
                  isActive ? "ring-4 ring-offset-4 " + colors.border : ""
                }`}>
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-6 right-6 w-16 h-16 ${colors.gradient} rounded-2xl shadow-strong flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-6 left-6 bg-white rounded-full px-4 py-2 shadow-medium">
                      <span className={`font-bold text-lg ${colors.text}`}>
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 space-y-4">
                    {/* Title & Duration */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-heading font-bold text-dark-800 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <span className={`flex items-center space-x-1 ${colors.text} text-sm font-medium whitespace-nowrap ml-4`}>
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-dark-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features - Show on Hover */}
                    <div className={`space-y-2 transition-all duration-500 overflow-hidden ${
                      isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <p className="font-semibold text-dark-800 text-sm pt-4 flex items-center">
                        <Sparkles className="w-4 h-4 mr-1" /> Lo que incluye:
                      </p>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-dark-600">
                            <span className={colors.text}>•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full ${colors.gradient} text-white py-3 rounded-full font-semibold ${colors.shadow} transition-all duration-300 hover:scale-105 active:scale-95 mt-4`}
                    >
                      Agendar {service.title}
                    </button>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 left-0 w-32 h-32 ${colors.bg} rounded-br-full opacity-50 -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700`} />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float">
                  <IconComponent className="w-10 h-10 text-primary-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: Gift,
              title: "Promociones Especiales",
              description: "Descuentos en paquetes y servicios combinados"
            },
            {
              icon: Car,
              title: "Retiro y Entrega",
              description: "Servicio de transporte para grooming disponible"
            },
            {
              icon: Smartphone,
              title: "Agenda Online",
              description: "Reserva tu cita fácilmente por WhatsApp"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-soft rounded-2xl hover:shadow-medium transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-12 h-12 text-primary-500" />
              </div>
              <h4 className="text-lg font-heading font-bold text-dark-800 mb-2">
                {item.title}
              </h4>
              <p className="text-dark-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="inline-block bg-primary-100 rounded-full px-6 py-2">
            <p className="text-primary-700 font-semibold flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2" /> Tu primera consulta tiene descuento especial
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contacto" className="btn-primary">
              Ver Todas las Promociones
            </a>
            <a href="#nosotros" className="btn-outline">
              Conocer Más
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-200/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}