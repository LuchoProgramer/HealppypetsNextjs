"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw, Share2, Home, Cat, Dog, Shield, Zap, Circle, Waves } from "lucide-react";
import { getQuizById } from "@/data/quizzes";
import { SITE_CONFIG } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Cat, Dog, Shield, Zap, Home, Circle, Waves
};

interface Props {
  params: {
    id: string;
  };
}

export default function QuizPage({ params }: Props) {
  const router = useRouter();
  const quiz = getQuizById(params.id);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (!quiz) {
      router.push("/entretenimiento");
    }
  }, [quiz, router]);

  if (!quiz) {
    return null;
  }

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [currentQuestion]: optionIndex };
    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, number>) => {
    const scores: Record<string, number> = {};

    quiz.questions.forEach((question, qIndex) => {
      const selectedOption = finalAnswers[qIndex];
      if (selectedOption !== undefined) {
        const option = question.options[selectedOption];
        Object.entries(option.points).forEach(([type, points]) => {
          scores[type] = (scores[type] || 0) + points;
        });
      }
    });

    const winnerType = Object.entries(scores).reduce((a, b) => 
      a[1] > b[1] ? a : b
    )[0];

    const finalResult = quiz.results.find(r => r.type === winnerType);
    setResult(finalResult);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const shareResult = () => {
    const shareText = `¡Acabo de descubrir que soy: ${result?.title}! Haz el quiz en HealppyPets`;
    const shareUrl = `${SITE_CONFIG.url}/entretenimiento/${params.id}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`, '_blank');
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  if (showResult && result) {
    const IconComponent = iconMap[result.icon] || Cat;

    return (
      <div className="min-h-screen bg-gradient-soft">
        <div className="container-custom py-32">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/entretenimiento"
              className="inline-flex items-center text-dark-600 hover:text-primary-600 transition-colors font-medium mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a Entretenimiento
            </Link>

            {/* Result Card */}
            <div className="bg-white rounded-3xl shadow-strong p-8 md:p-12 mb-8 animate-fade-in">
              {/* Confetti Effect */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-800 mb-4">
                  ¡Resultado!
                </h2>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Result Title */}
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark-800 text-center mb-4">
                {result.title}
              </h3>

              {/* Description */}
              <p className="text-xl text-dark-700 text-center mb-8 leading-relaxed max-w-2xl mx-auto">
                {result.description}
              </p>

              {/* Tips */}
              <div className="mb-8">
                <h4 className="text-2xl font-heading font-bold text-dark-800 mb-4 flex items-center justify-center">
                  <span className="mr-2">💡</span>
                  Consejos para ti
                </h4>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  {result.tips.map((tip: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3 bg-primary-50 p-4 rounded-xl">
                      <span className="text-primary-600 font-bold mt-1">•</span>
                      <span className="text-dark-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              <div className="mb-8">
                <h4 className="text-2xl font-heading font-bold text-dark-800 mb-4 flex items-center justify-center">
                  <span className="mr-2">⭐</span>
                  Recomendaciones
                </h4>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  {result.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3 bg-secondary-50 p-4 rounded-xl">
                      <span className="text-secondary-600 font-bold mt-1">✓</span>
                      <span className="text-dark-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <button
                  onClick={shareResult}
                  className="btn-primary inline-flex items-center"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Compartir Resultado
                </button>
                <button
                  onClick={resetQuiz}
                  className="btn-outline inline-flex items-center"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Repetir Quiz
                </button>
                <Link href="/#contacto" className="btn-secondary inline-flex items-center">
                  Agendar Consulta
                </Link>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-primary rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-heading font-bold mb-3">
                ¿Te gustaría saber más?
              </h3>
              <p className="mb-6 opacity-90">
                Nuestros expertos pueden ayudarte a elegir la mascota perfecta y darte consejos personalizados
              </p>
              <Link href="/#contacto" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                Contactar con Expertos
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quiz.questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container-custom py-32">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/entretenimiento"
            className="inline-flex items-center text-dark-600 hover:text-primary-600 transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a Entretenimiento
          </Link>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-dark-700">
                Pregunta {currentQuestion + 1} de {quiz.questions.length}
              </span>
              <span className="text-sm font-semibold text-primary-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-primary h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Quiz Card */}
          <div className="bg-white rounded-3xl shadow-strong p-8 md:p-12 animate-fade-in">
            {/* Question */}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-800 mb-12 text-center leading-tight">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selectedAnswer === index
                      ? 'border-primary-500 bg-primary-50 shadow-primary'
                      : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50/50 hover:shadow-soft'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      selectedAnswer === index
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <span className={`text-lg font-medium ${
                      selectedAnswer === index ? 'text-primary-700' : 'text-dark-700'
                    }`}>
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-dark-700 hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Anterior
              </button>

              {currentQuestion === quiz.questions.length - 1 && selectedAnswer !== undefined ? (
                <button
                  onClick={() => calculateResult(answers)}
                  className="btn-primary inline-flex items-center"
                >
                  Ver Resultado
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestion(Math.min(quiz.questions.length - 1, currentQuestion + 1))}
                  disabled={selectedAnswer === undefined}
                  className="btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </div>

          {/* Quiz Info */}
          <div className="mt-8 text-center text-dark-600 text-sm">
            <p>💡 Consejo: Responde honestamente para obtener el mejor resultado</p>
          </div>
        </div>
      </div>
    </div>
  );
}