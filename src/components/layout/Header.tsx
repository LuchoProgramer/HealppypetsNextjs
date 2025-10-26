// Declaración global para window.gtag (evita error TS2339)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, WORKING_HOURS } from "@/lib/constants";
import useBusinessStatus from "@/hooks/useBusinessStatus";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const businessStatus = useBusinessStatus();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesOpen) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isServicesOpen]);

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <>
      {/* Header Superior */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <Image
                  src="/logo.png"
                  alt="Healppypets Logo"
                  fill
                  sizes="48px"
                  className="relative object-contain"
                />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-800 hidden sm:block">
                Healppypets
              </span>
            </Link>

            {/* Badges Mobile/Tablet */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Badge Estado */}
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                businessStatus.isOpen 
                  ? "bg-green-100 text-green-700" 
                  : "bg-red-100 text-red-700"
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  businessStatus.isOpen ? "bg-green-500" : "bg-red-500"
                } animate-pulse`} />
                <span className="hidden sm:inline">{businessStatus.message}</span>
              </div>

              {/* Badge Ubicación */}
              <a
                href={SITE_CONFIG.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#F2C9E7] text-gray-800 text-xs font-medium hover:bg-[#F2C2EA] transition-colors"
              >
                <span>📍</span>
                <span className="hidden sm:inline">{SITE_CONFIG.address.neighborhood}</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Info Superior */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mr-4">
                <div className="flex items-center gap-2">
                  <span>🕐</span>
                  <span>Mar-Sáb: 9-1, 3-6 | Dom: 9-2</span>
                </div>
                <a
                  href={SITE_CONFIG.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#F2C2EA] transition-colors"
                >
                  <span>📍</span>
                  <span>{SITE_CONFIG.address.neighborhood}, Quito</span>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Menu Row */}
          <div className="hidden lg:flex items-center justify-between pb-4 border-t border-gray-100 pt-3">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium">
                Inicio
              </Link>
              
              {/* Servicios Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className="flex items-center gap-1 text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium"
                >
                  Servicios
                  <span className={`transform transition-transform text-xs ${isServicesOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-2">
                      <Link 
                        href="/servicios/vacunas" 
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className="text-green-600">💉</span>
                        <div>
                          <div className="font-medium">Vacunas para Mascotas</div>
                          <div className="text-xs text-gray-500">Plan completo en Carcelén</div>
                        </div>
                      </Link>
                      <Link 
                        href="/servicios/desparasitacion" 
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-700 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className="text-orange-600">🛡️</span>
                        <div>
                          <div className="font-medium">Desparasitación</div>
                          <div className="text-xs text-gray-500">Interna y externa</div>
                        </div>
                      </Link>
                      <Link 
                        href="/servicios/gatos" 
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className="text-purple-600">🐱</span>
                        <div>
                          <div className="font-medium">Especialista en Gatos</div>
                          <div className="text-xs text-gray-500">Medicina felina en Carcelén</div>
                        </div>
                      </Link>
                      <Link 
                        href="/#servicios" 
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className="text-blue-600">🏥</span>
                        <div>
                          <div className="font-medium">Todos los Servicios</div>
                          <div className="text-xs text-gray-500">Ver servicios completos</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/blog" className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium">
                Blog
              </Link>

              <Link href="/faqs" className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium">
                FAQs
              </Link>

              <Link href="/entretenimiento" className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium">
                Entretenimiento
              </Link>

              <Link href="/#nosotros" className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium">
                Nosotros
              </Link>
            </div>

            {/* Desktop CTAs */}
            <div className="flex items-center gap-3">
              {/* Badge Estado Desktop */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                businessStatus.isOpen 
                  ? "bg-green-100 text-green-700" 
                  : "bg-red-100 text-red-700"
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  businessStatus.isOpen ? "bg-green-500" : "bg-red-500"
                } animate-pulse`} />
                <span>{businessStatus.message}</span>
              </div>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium"
              >
                <span>📞</span>
                <span>Llamar</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-800 rounded-full hover:shadow-lg transition-all font-medium"
              >
                <span>💬</span>
                <span>Agendar Cita</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-around h-16 px-2">
          {/* Inicio */}
          <Link href="/" className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-[#F2C2EA] transition-colors group">
            <span className="text-2xl mb-0.5">🏠</span>
            <span className="text-xs font-medium">Inicio</span>
          </Link>

          {/* Blog */}
          <Link href="/blog" className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-[#F2C2EA] transition-colors group">
            <span className="text-2xl mb-0.5">📝</span>
            <span className="text-xs font-medium">Blog</span>
          </Link>

          {/* Agendar (Destacado) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 py-2 -mt-4"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_agendar_cita', {
                  event_category: 'navbar_mobile',
                  event_label: 'Cita WhatsApp',
                });
              }
            }}
          >
            <div className="bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-3xl">💬</span>
            </div>
            <span className="text-xs font-medium text-gray-800 mt-1">Cita</span>
          </a>

          {/* Entretenimiento */}
          <Link href="/entretenimiento" className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-[#F2C2EA] transition-colors group">
            <span className="text-2xl mb-0.5">🎮</span>
            <span className="text-xs font-medium">Entretenimiento</span>
          </Link>

          {/* Llamar */}
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-[#F2C2EA] transition-colors group"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_llamar', {
                  event_category: 'navbar_mobile',
                  event_label: 'Llamar',
                });
              }
            }}
          >
            <span className="text-2xl mb-0.5">📞</span>
            <span className="text-xs font-medium">Llamar</span>
          </a>
        </div>
      </nav>

  {/* Spacer para evitar que el contenido quede detrás del header */}
  <div className="h-16 lg:h-32" /> {/* Spacer para el header */}
    </>
  );
}