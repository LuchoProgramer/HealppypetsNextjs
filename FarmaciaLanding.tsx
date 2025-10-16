"use client";

import { Pill, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function FarmaciaLanding() {
  const farmaciaService = SERVICES.find(s => s.id === "farmacia");

  if (!farmaciaService) {
    return <div>Servicio no encontrado.</div>;
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Pill className="mx-auto h-12 w-12 text-green-500" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {farmaciaService.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {farmaciaService.shortDescription}
          </p>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué ofrecemos?</h2>
          <p className="mt-4 text-gray-600">
            {farmaciaService.description}
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Nuestros Productos Incluyen:</h3>
            <ul className="mt-4 space-y-3">
              {farmaciaService.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}