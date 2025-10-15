"use client";

import Link from "next/link";
import { Play } from "lucide-react";

const QUIZZES = [
  {
    id: "que-tipo-dueno-eres",
    title: "¿Qué Tipo de Dueño de Mascota Eres?",
    description: "Descubre tu estilo de crianza y qué tipo de mascota se adaptaría mejor a tu personalidad.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
    category: "Personalidad",
    questions: 5,
    time: "5"
  },
  {
    id: "que-mascota-te-conviene",
    title: "¿Qué Mascota Te Conviene Más?",
    description: "Basado en tu estilo de vida, descubre qué tipo de mascota sería tu compañero perfecto.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    category: "Estilo de vida",
    questions: 5,
    time: "5"
  }
];

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
              <span className="text-3xl">🎮</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Centro de <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">Entretenimiento</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre más sobre ti y tu mascota con nuestros divertidos quizzes interactivos
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-8 opacity-20 animate-pulse">
            <span className="text-6xl">🐕</span>
          </div>
          <div className="absolute bottom-1/4 left-8 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
            <span className="text-7xl">🐱</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "✨",
              title: "Descubre tu Personalidad",
              description: "Aprende más sobre tu estilo como dueño de mascota"
            },
            {
              icon: "❤️",
              title: "Encuentra tu Match",
              description: "Descubre qué mascota es perfecta para ti"
            },
            {
              icon: "🎯",
              title: "Diviértete Aprendiendo",
              description: "Aprende mientras te diviertes con nuestros quizzes"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quizzes Grid */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nuestros <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">Quizzes</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {QUIZZES.map((quiz, index) => (
              <Link key={quiz.id} href={`/entretenimiento/${quiz.id}`}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={quiz.image}
                      alt={quiz.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                        {quiz.category}
                      </span>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-[#F2C2EA] ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#F2C2EA] transition-colors">
                      {quiz.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {quiz.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 pb-6 border-t border-gray-200 pt-6">
                      <span className="flex items-center gap-2">
                        📋 {quiz.questions} preguntas
                      </span>
                      <span className="flex items-center gap-2">
                        ⏱️ ~{quiz.time} min
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-[#F2C2EA] font-semibold group-hover:translate-x-2 transition-transform">
                      Comenzar Quiz
                      <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-r from-[#F2C9E7]/20 to-[#F2C2EA]/20 rounded-2xl p-12 text-center border border-[#F2C9E7]/30 mb-16">
          <span className="text-6xl mb-4 block">🎮</span>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Más Contenido Próximamente!
          </h3>
          <p className="text-gray-700 mb-6">
            Estamos trabajando en más quizzes divertidos y juegos interactivos para ti y tu mascota.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Memoria de Mascotas", "Trivias", "Cuidado Virtual"].map((game, i) => (
              <span
                key={i}
                className="inline-block bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {game}
              </span>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-2xl p-12 text-center text-gray-900">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para Agendar una Cita?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Después de descubrir más sobre ti y tu mascota, agenda una consulta con nuestros expertos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              Ver Servicios
            </a>
            <a
              href="https://wa.me/593987005084?text=Hola! Quisiera agendar una cita para mi mascota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white/20 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all"
            >
              <span className="mr-2">💬</span>
              Agendar Cita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}