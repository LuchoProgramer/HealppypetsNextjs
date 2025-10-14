"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-medium backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-white rounded-full p-2 shadow-soft">
                <span className="text-3xl">🐾</span>
              </div>
            </div>
            <span
              className={`text-2xl font-heading font-bold transition-colors ${
                isScrolled ? "text-dark-800" : "text-white text-shadow-strong"
              }`}
            >
              HealppyPets
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all hover:scale-105 ${
                  isScrolled
                    ? "text-dark-700 hover:text-primary-500"
                    : "text-white hover:text-primary-200 text-shadow"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="#contacto"
              className="btn-primary flex items-center space-x-2"
            >
              <span>📅</span>
              <span>Agendar Cita</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                } ${isScrolled ? "bg-dark-800" : "bg-white"}`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                } ${isScrolled ? "bg-dark-800" : "bg-white"}`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                } ${isScrolled ? "bg-dark-800" : "bg-white"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-20 bg-white shadow-strong rounded-b-3xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 px-4 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-dark-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full btn-primary text-center"
            >
              <span className="mr-2">📅</span>
              Agendar Cita
            </Link>

            {/* Contact Info in Mobile */}
            <div className="pt-4 border-t border-gray-200">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center space-x-3 py-2 text-dark-600 hover:text-primary-600 transition-colors"
              >
                <span>📞</span>
                <span className="text-sm">{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 py-2 text-dark-600 hover:text-primary-600 transition-colors"
              >
                <span>💬</span>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}