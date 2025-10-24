"use client";

import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function FarmaciaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
            <span className="text-3xl">💊</span>
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Farmacia Veterinaria en Quito
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Medicamentos, suplementos y productos de calidad para el cuidado integral de tu mascota. Asesoría profesional y stock garantizado en Carcelén.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola! Tengo una consulta sobre medicamentos para mi mascota`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-lg"
          >
            <span>💬</span>
            Consultar por WhatsApp
          </a>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Qué ofrecemos?</h2>
        <ul className="grid md:grid-cols-2 gap-8 mb-12">
          <li className="bg-[#F2DFED] rounded-xl p-6 text-gray-800 font-medium shadow">
            <span className="font-bold text-[#F2C2EA]">✔️ Medicamentos veterinarios:</span> Solo productos originales y de marcas reconocidas.
          </li>
          <li className="bg-[#F2DFED] rounded-xl p-6 text-gray-800 font-medium shadow">
            <span className="font-bold text-[#F2C2EA]">✔️ Suplementos y vitaminas:</span> Refuerza la salud y vitalidad de tu mascota.
          </li>
          <li className="bg-[#F2DFED] rounded-xl p-6 text-gray-800 font-medium shadow">
            <span className="font-bold text-[#F2C2EA]">✔️ Productos de higiene:</span> Shampoos, antipulgas, desparasitantes y más.
          </li>
          <li className="bg-[#F2DFED] rounded-xl p-6 text-gray-800 font-medium shadow">
            <span className="font-bold text-[#F2C2EA]">✔️ Asesoría farmacéutica:</span> Te guiamos en la elección del mejor producto para tu peludo.
          </li>
        </ul>
        <div className="text-center">
          <Link href="/" className="text-[#F2C2EA] font-semibold hover:underline">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
