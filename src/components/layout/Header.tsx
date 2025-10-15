"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Tipos para los días y el horario
type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
type Schedule = {
  morning: string | null;
  afternoon: string | null;
};
type SiteConfig = {
  name: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  address: string;
  neighborhood: string;
  mapsUrl: string;
  schedule: Record<Day, Schedule | null>;
};

const SITE_CONFIG: SiteConfig = {
  name: "Healppypets",
  phone: "593987005084",
  whatsapp: "593987005084",
  whatsappMessage: "Hola! Quisiera agendar una cita para mi mascota",
  address: "Calle Clemente Yerovi Indaburu Oe143 y OE1B",
  neighborhood: "Carcelén",
  mapsUrl: "https://maps.app.goo.gl/iYnfsRuaXtEEt3vF9",
  schedule: {
    monday: null, // Cerrado
    tuesday: { morning: "9:00-13:00", afternoon: "15:00-18:00" },
    wednesday: { morning: "9:00-13:00", afternoon: "15:00-18:00" },
    thursday: { morning: "9:00-13:00", afternoon: "15:00-18:00" },
    friday: { morning: "9:00-13:00", afternoon: "15:00-18:00" },
    saturday: { morning: "9:00-13:00", afternoon: "15:00-18:00" },
    sunday: { morning: "9:00-14:00", afternoon: null }
  }
};

const NAVIGATION_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Nosotros" }
];

const SERVICES = [
  { href: "/servicios/grooming", label: "🐕 Grooming" },
  { href: "/servicios/vacunacion", label: "💉 Vacunación" },
  { href: "/servicios/desparasitacion", label: "🪱 Desparasitación" },
  { href: "/servicios/consultas", label: "🩺 Consultas" },
  { href: "/servicios/farmacia", label: "💊 Farmacia" }
];

// Función para verificar si está abierto
function useBusinessStatus() {
  const [status, setStatus] = useState({ isOpen: false, message: "" });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Domingo, 1=Lunes, etc.
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 60 + minute;

  const days: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayName = days[day];
  const schedule = SITE_CONFIG.schedule[dayName];

      if (!schedule) {
        // Lunes cerrado
        setStatus({ isOpen: false, message: "CERRADO - Abrimos Martes 9:00am" });
        return;
      }

      // Verificar horario matutino
      if (schedule.morning) {
        const [startM, endM] = schedule.morning.split('-');
        const [startHM, startMM] = startM.split(':').map(Number);
        const [endHM, endMM] = endM.split(':').map(Number);
        const startMorning = startHM * 60 + startMM;
        const endMorning = endHM * 60 + endMM;

        if (currentTime >= startMorning && currentTime < endMorning) {
          setStatus({ isOpen: true, message: "ABIERTO" });
          return;
        }
      }

      // Verificar horario vespertino
      if (schedule.afternoon) {
        const [startA, endA] = schedule.afternoon.split('-');
        const [startHA, startMA] = startA.split(':').map(Number);
        const [endHA, endMA] = endA.split(':').map(Number);
        const startAfternoon = startHA * 60 + startMA;
        const endAfternoon = endHA * 60 + endMA;

        if (currentTime >= startAfternoon && currentTime < endAfternoon) {
          setStatus({ isOpen: true, message: "ABIERTO" });
          return;
        }
      }

      // Determinar próxima apertura
      if (day === 1) { // Lunes
        setStatus({ isOpen: false, message: "CERRADO - Abrimos Martes 9:00am" });
      } else if (day === 0) { // Domingo después de las 2pm
        setStatus({ isOpen: false, message: "CERRADO - Abrimos Martes 9:00am" });
      } else {
        setStatus({ isOpen: false, message: "CERRADO - Abrimos 9:00am" });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Actualizar cada minuto
    return () => clearInterval(interval);
  }, []);

  return status;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const businessStatus = useBusinessStatus();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                <img 
                  src="/logo.png" 
                  alt="Healppypets Logo" 
                  className="relative w-full h-full object-contain"
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
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#F2C9E7] text-gray-800 text-xs font-medium hover:bg-[#F2C2EA] transition-colors"
              >
                <span>📍</span>
                <span className="hidden sm:inline">{SITE_CONFIG.neighborhood}</span>
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
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#F2C2EA] transition-colors"
                >
                  <span>📍</span>
                  <span>{SITE_CONFIG.neighborhood}, Quito</span>
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
              <div 
                className="relative"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <button className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium flex items-center gap-1">
                  Servicios
                  <span className="text-xs">▾</span>
                </button>
                {showServices && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#F2DFED] transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/productos" className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium">
                Productos
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium">
                Blog
              </Link>
              <Link href="/nosotros" className="text-gray-700 hover:text-[#F2C2EA] transition-colors font-medium">
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

          {/* Tienda */}
          <Link href="/productos" className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-[#F2C2EA] transition-colors group">
            <span className="text-2xl mb-0.5">🛍️</span>
            <span className="text-xs font-medium">Tienda</span>
          </Link>

          {/* Agendar (Destacado) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 py-2 -mt-4"
          >
            <div className="bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-3xl">💬</span>
            </div>
            <span className="text-xs font-medium text-gray-800 mt-1">Cita</span>
          </a>

          {/* Blog */}
          <Link href="/blog" className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-[#F2C2EA] transition-colors group">
            <span className="text-2xl mb-0.5">📝</span>
            <span className="text-xs font-medium">Blog</span>
          </Link>

          {/* Más (Menú) */}
          <Link href="/menu" className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-[#F2C2EA] transition-colors group">
            <span className="text-2xl mb-0.5">☰</span>
            <span className="text-xs font-medium">Más</span>
          </Link>
        </div>
      </nav>

      {/* Spacer para evitar que el contenido quede detrás del header */}
      <div className="h-16 lg:h-32" />
  {/* Spacer para bottom nav en mobile */}
    </>
  );
}