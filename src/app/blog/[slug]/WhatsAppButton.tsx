"use client";

import { trackWhatsAppClick } from "@/lib/analytics";
import React from 'react';

interface WhatsAppButtonProps {
  postTitle: string;
}

export default function WhatsAppButton({ postTitle }: WhatsAppButtonProps) {
  return (
    <a
      href="https://wa.me/593987005084?text=Hola! Tengo preguntas sobre nutrición para mi mascota"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
      onClick={() => trackWhatsAppClick(`Blog Post - ${postTitle}`)}
    >
      <span className="mr-2">💬</span>
      Consultar por WhatsApp
    </a>
  );
}