"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, NAVIGATION_LINKS, WORKING_HOURS } from "@/lib/constants";
import useBusinessStatus from "@/hooks/useBusinessStatus";

// Componente del Footer
export function Footer() {
  const currentYear = new Date().getFullYear();
  const { isOpen } = useBusinessStatus();

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full p-2">
                <span className="text-2xl">🐾</span>
              </div>
              <span className="text-2xl font-bold">
                Healppypets
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu veterinaria de confianza en Carcelén. Cuidamos a tus mascotas
              con amor y profesionalismo.
            </p>
            
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${
              isOpen 
                ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-400" : "bg-red-400"} animate-pulse`} />
              {isOpen ? "Abierto Ahora" : "Cerrado"}
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F2C2EA] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F2C2EA] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F2C2EA] flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F2C9E7]">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#F2C2EA] transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F2C9E7]">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-[#F2C2EA] mt-0.5">📍</span>
                <a
                  href={SITE_CONFIG.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F2C2EA] transition-colors"
                >
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#F2C2EA]">📞</span>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-gray-300 hover:text-[#F2C2EA] transition-colors"
                >
                  +{SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#F2C2EA]">💬</span>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F2C2EA] transition-colors"
                >
                  WhatsApp: +{SITE_CONFIG.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F2C9E7]">
              Horarios
            </h3>
            <ul className="space-y-2 text-sm">
              {WORKING_HOURS.map((schedule, index) => (
                <li key={index} className="flex flex-col">
                  <span className="text-[#F2C2EA] font-medium">
                    {schedule.day}
                  </span>
                  <span className="text-gray-300">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 lg:mt-16">
          <h3 className="text-xl font-semibold mb-4 text-center text-[#F2C9E7]">
            📍 Encuéntranos Aquí
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-64 lg:h-80">
            <iframe
              src={SITE_CONFIG.address.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Healppypets"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#F2C9E7]/10 to-[#F2C2EA]/10 rounded-2xl p-8 border border-[#F2C2EA]/20">
          <h3 className="text-2xl font-bold mb-3">¿Listo para cuidar a tu mascota?</h3>
          <p className="text-gray-300 mb-6">Agenda tu cita por WhatsApp y obtén 20% OFF en tu primera visita</p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hola! Quiero mi 20% de descuento en la primera visita 🐾")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105"
          >
            <span className="text-xl">💬</span>
            Agendar Mi Primera Cita
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Healppypets. Todos los derechos reservados.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/privacidad"
                className="text-gray-400 hover:text-[#F2C2EA] transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-gray-400 hover:text-[#F2C2EA] transition-colors"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Componente del WhatsApp Flotante
export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar tooltip por 5 segundos
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 transition-all duration-500 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
    }`}>
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 mr-2 bg-white rounded-xl shadow-2xl p-3 w-48 animate-bounce">
          <p className="text-sm font-semibold text-gray-800">¿Necesitas ayuda? 👋</p>
          <p className="text-xs text-gray-600 mt-1">Chatea con nosotros</p>
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95"
        aria-label="Chatear por WhatsApp"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        
        {/* WhatsApp Icon */}
        <svg
          className="relative w-8 h-8 lg:w-9 lg:h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Badge de notificación */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-white text-xs font-bold">1</span>
        </span>
      </a>
    </div>
  );
}

// Componente principal que exporta ambos
export default function FooterWithWhatsApp() {
  return (
    <>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}