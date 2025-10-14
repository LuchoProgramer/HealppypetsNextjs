"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [appointmentForm, setAppointmentForm] = useState({
    petName: "",
    ownerName: "",
    phone: "",
    date: "",
    time: "",
    service: ""
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí integrarías con EmailJS o tu backend
    const message = `Hola! Soy ${contactForm.name}. ${contactForm.message}`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Quisiera agendar una cita:\n\n` +
      `Mascota: ${appointmentForm.petName}\n` +
      `Dueño/a: ${appointmentForm.ownerName}\n` +
      `Teléfono: ${appointmentForm.phone}\n` +
      `Fecha: ${appointmentForm.date}\n` +
      `Hora: ${appointmentForm.time}\n` +
      `Servicio: ${appointmentForm.service}`;
    
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4 animate-bounce-slow">
            <Phone className="w-10 h-10 text-white" />
          </div>
          <h2 className="section-title mb-6">
            ¡Estamos Aquí <span className="text-gradient">Para Ti!</span>
          </h2>
          <p className="section-subtitle">
            Contacta con nosotros y comienza el viaje hacia el bienestar de tu mascota
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-strong p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark-800">
                  Envíanos un Mensaje
                </h3>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-2">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="input-custom"
                    placeholder="Ej: María González"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2">
                    Tu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="input-custom"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="textarea-custom"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group flex items-center space-x-4"
              >
                <div className="w-14 h-14 bg-success-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-success-600" />
                </div>
                <div>
                  <p className="text-sm text-dark-600 font-medium">Llámanos</p>
                  <p className="text-lg font-bold text-dark-800">{SITE_CONFIG.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group flex items-center space-x-4"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-dark-600 font-medium">Email</p>
                  <p className="text-lg font-bold text-dark-800 break-all">{SITE_CONFIG.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-strong p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark-800">
                  Agenda tu Cita
                </h3>
              </div>

              <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                <div>
                  <label htmlFor="petName" className="block text-sm font-semibold text-dark-700 mb-2">
                    Nombre de tu Mascota
                  </label>
                  <input
                    type="text"
                    id="petName"
                    required
                    value={appointmentForm.petName}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, petName: e.target.value })}
                    className="input-custom"
                    placeholder="Ej: Max"
                  />
                </div>

                <div>
                  <label htmlFor="ownerName" className="block text-sm font-semibold text-dark-700 mb-2">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    required
                    value={appointmentForm.ownerName}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, ownerName: e.target.value })}
                    className="input-custom"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={appointmentForm.phone}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                    className="input-custom"
                    placeholder="0999999999"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-dark-700 mb-2">
                      Fecha
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      value={appointmentForm.date}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                      className="input-custom"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-dark-700 mb-2">
                      Hora
                    </label>
                    <input
                      type="time"
                      id="time"
                      required
                      value={appointmentForm.time}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, time: e.target.value })}
                      className="input-custom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-dark-700 mb-2">
                    Servicio
                  </label>
                  <select
                    id="service"
                    required
                    value={appointmentForm.service}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, service: e.target.value })}
                    className="input-custom"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Grooming">Grooming</option>
                    <option value="Vacunación">Vacunación</option>
                    <option value="Consulta">Consulta Veterinaria</option>
                    <option value="Desparasitación">Desparasitación</option>
                    <option value="Farmacia">Farmacia</option>
                  </select>
                </div>

                <button type="submit" className="w-full btn-secondary flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Confirmar Cita por WhatsApp
                </button>
              </form>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-3xl shadow-soft p-6">
              <h4 className="font-heading font-bold text-lg text-dark-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                Encuéntranos
              </h4>
              <a
                href={SITE_CONFIG.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-primary-50 rounded-xl p-4 group-hover:bg-primary-100 transition-colors">
                  <p className="text-dark-700 font-medium mb-2">
                    {SITE_CONFIG.address.street}
                  </p>
                  <p className="text-dark-600 text-sm">
                    {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}
                  </p>
                  <p className="text-primary-600 font-semibold text-sm mt-2 flex items-center">
                    Ver en Google Maps
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}