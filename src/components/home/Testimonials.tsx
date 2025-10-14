"use client";

import { useState, useEffect } from "react";
import { Heart, Star, PawPrint, Trophy, Sparkles, CheckCircle, Dog, Cat } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 ${
          i < rating ? "text-accent-400 fill-accent-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4 animate-bounce-slow">
            <Heart className="w-10 h-10 text-white fill-white" />
          </div>
          <h2 className="section-title mb-6">
            Historias que <span className="text-gradient">Nos Llenan el Corazón</span>
          </h2>
          <p className="section-subtitle">
            Cada testimonio es una cola que se mueve, un ronroneo de satisfacción.
            Estas son las voces de quienes confían en nosotros.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Decorative Elements */}
          <div className="absolute -top-12 -left-12 text-9xl text-primary-200 opacity-30 select-none font-serif">
            &quot;
          </div>
          <div className="absolute -bottom-12 -right-12 text-9xl text-primary-200 opacity-30 select-none font-serif rotate-180">
            &quot;
          </div>

          {/* Testimonial Cards */}
          <div className="relative">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 absolute inset-0 translate-x-10 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-3xl shadow-strong p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Pet Image Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-30 rounded-full" />
                        
                        {/* Image container */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-medium">
                          <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                            {testimonial.petType.includes("Perro") || testimonial.petType.includes("Golden") || testimonial.petType.includes("Bulldog") || testimonial.petType.includes("Schnauzer") ? 
                              <Dog className="w-20 h-20 text-white" /> : 
                              <Cat className="w-20 h-20 text-white" />
                            }
                          </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-success-500 text-white rounded-full p-2 shadow-medium">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 text-center md:text-left">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Quote */}
                      <p className="text-xl md:text-2xl text-dark-700 leading-relaxed italic">
                        {testimonial.text}
                      </p>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-gray-200">
                        <p className="font-heading font-bold text-lg text-dark-800">
                          {testimonial.name}
                        </p>
                        <p className="text-primary-600 font-medium">
                          Dueño/a de {testimonial.petName}
                        </p>
                        <p className="text-sm text-dark-500 mt-1">
                          {testimonial.petType} • {testimonial.service}
                        </p>
                      </div>

                      {/* Service Badge */}
                      <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <Sparkles className="w-4 h-4 mr-1" /> {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? "w-12 h-3 bg-primary-500 rounded-full"
                    : "w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-300"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { icon: PawPrint, value: "2000+", label: "Mascotas Atendidas", color: "primary" },
            { icon: Star, value: "98%", label: "Satisfacción", color: "accent" },
            { icon: Heart, value: "100%", label: "Amor y Dedicación", color: "primary" },
            { icon: Trophy, value: "3+", label: "Años de Experiencia", color: "success" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-12 h-12 text-${stat.color}-500`} />
              </div>
              <div className={`text-3xl font-bold font-heading mb-1 text-${stat.color}-600`}>
                {stat.value}
              </div>
              <div className="text-sm text-dark-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-xl text-dark-700 font-medium">
            ¿Quieres ser parte de estas historias felices?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contacto" className="btn-primary">
              Agenda tu Cita Ahora
            </a>
            <a href="#servicios" className="btn-outline">
              Ver Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute top-1/4 left-10 animate-float opacity-20">
        <Heart className="w-12 h-12 text-primary-400" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Heart className="w-10 h-10 text-primary-400" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Heart className="w-14 h-14 text-primary-400 fill-primary-400" />
      </div>
    </section>
  );
}