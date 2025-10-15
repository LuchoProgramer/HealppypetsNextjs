"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw, Share2 } from "lucide-react";

const QUIZ = {
  id: "que-tipo-dueno-eres",
  title: "¿Qué Tipo de Dueño de Mascota Eres?",
  description: "Descubre tu estilo de crianza",
  questions: [
    {
      id: 1,
      question: "¿Cómo es tu rutina diaria?",
      options: [
        "Muy ocupado/a, trabajo todo el día",
        "Trabajo desde casa o tengo horarios flexibles",
        "Paso mucho tiempo en casa y me encanta",
        "Siempre activo/a, hago ejercicio y salgo mucho"
      ]
    },
    {
      id: 2,
      question: "¿Cuánto espacio tienes en casa?",
      options: [
        "Apartamento pequeño",
        "Apartamento mediano con balcón",
        "Casa con patio pequeño",
        "Casa grande con jardín"
      ]
    },
    {
      id: 3,
      question: "¿Cuál es tu nivel de experiencia con mascotas?",
      options: [
        "Primera vez, soy novato/a",
        "He tenido mascotas antes",
        "Tengo bastante experiencia",
        "Soy un experto/a"
      ]
    },
    {
      id: 4,
      question: "¿Cuánto tiempo puedes dedicar al cuidado diario?",
      options: [
        "30 minutos o menos",
        "1 hora al día",
        "2-3 horas al día",
        "Todo el tiempo que sea necesario"
      ]
    },
    {
      id: 5,
      question: "¿Qué buscas en una mascota?",
      options: [
        "Compañía tranquila y relajada",
        "Un amigo para hacer ejercicio",
        "Protección y lealtad",
        "Independencia, que no demande mucho"
      ]
    }
  ]
};

const RESULT = {
  type: "tranquilo",
  title: "Dueño Tranquilo y Hogareño",
  description: "Te encanta la compañía constante y valoras los momentos de calma. Eres ideal para mascotas que disfrutan del tiempo en casa y la rutina.",
  emoji: "🏠",
  tips: [
    "Razas de perros pequeños o medianos son perfectas",
    "Establece una rutina relajante de cuidado",
    "Los momentos de mimos son importantes",
    "Crea un ambiente acogedor para tu mascota"
  ],
  recommendations: [
    "Perros como Bichon Frisé, Cavalier King Charles",
    "Gatos cariñosos como Ragdoll o Persa",
    "Mascotas senior que buscan un hogar tranquilo",
    "Considera la adopción de mascotas maduras"
  ]
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (currentQuestion < QUIZ.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }, 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const progress = ((currentQuestion + 1) / QUIZ.questions.length) * 100;

  if (showResult) {
    return (
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/entretenimiento"
              className="inline-flex items-center text-gray-600 hover:text-[#F2C2EA] transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a Entretenimiento
            </Link>
          </div>
        </div>

        {/* Result Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Celebration */}
            <div className="text-center mb-12">
              <span className="text-7xl mb-6 block">{RESULT.emoji}</span>
              <span className="text-6xl mb-6 block">🎉</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                ¡Tu Resultado!
              </h2>
            </div>

            {/* Result Card */}
            <div className="bg-gradient-to-r from-[#F2C9E7]/20 to-[#F2C2EA]/20 rounded-2xl p-8 sm:p-12 border border-[#F2C9E7]/30 mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
                {RESULT.title}
              </h3>
              <p className="text-xl text-gray-700 text-center leading-relaxed max-w-2xl mx-auto">
                {RESULT.description}
              </p>
            </div>

            {/* Tips Section */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                <span>💡</span> Consejos para Ti
              </h4>
              <div className="space-y-3 max-w-2xl mx-auto">
                {RESULT.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-[#F2C2EA]/50 transition-colors">
                    <span className="text-[#F2C2EA] font-bold mt-1 text-lg">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                <span>⭐</span> Recomendaciones
              </h4>
              <div className="space-y-3 max-w-2xl mx-auto">
                {RESULT.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-[#F2C2EA]/50 transition-colors">
                    <span className="text-[#F2C2EA] font-bold mt-1">✓</span>
                    <span className="text-gray-700">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedAnswer(null);
                  setShowResult(false);
                }}
                className="inline-flex items-center px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Repetir Quiz
              </button>
              <a
                href="https://wa.me/593987005084?text=Hola! Me gustaría conocer más mascotas que se adapten a mi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                <span className="mr-2">💬</span>
                Contactar
              </a>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-2xl p-8 sm:p-12 text-center text-gray-900">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                ¿Te gustaría saber más?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Nuestros expertos pueden ayudarte a elegir la mascota perfecta y darte consejos personalizados
              </p>
              <Link 
                href="/#servicios"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const currentQ = QUIZ.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/entretenimiento"
            className="inline-flex items-center text-gray-600 hover:text-[#F2C2EA] transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a Entretenimiento
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700">
              Pregunta {currentQuestion + 1} de {QUIZ.questions.length}
            </span>
            <span className="text-sm font-semibold text-[#F2C2EA]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-8 border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center leading-tight">
            {currentQ.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left font-medium ${
                  selectedAnswer === index
                    ? 'border-[#F2C2EA] bg-[#F2C9E7]/10 shadow-lg'
                    : 'border-gray-200 hover:border-[#F2C2EA] hover:bg-[#F2C9E7]/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    selectedAnswer === index
                      ? 'border-[#F2C2EA] bg-[#F2C2EA]'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswer === index && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </div>
                  <span className={selectedAnswer === index ? 'text-[#F2C2EA]' : 'text-gray-700'}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Anterior
          </button>

          {currentQuestion === QUIZ.questions.length - 1 && selectedAnswer !== null ? (
            <button
              onClick={() => setShowResult(true)}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              Ver Resultado
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={() => selectedAnswer !== null && handleAnswer(selectedAnswer)}
              disabled={selectedAnswer === null}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>

        {/* Tip */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          💡 Consejo: Responde honestamente para obtener el mejor resultado
        </div>
      </div>
    </div>
  );
}