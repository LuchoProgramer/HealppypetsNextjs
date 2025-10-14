import Link from "next/link";
import { Gamepad2, Sparkles, Heart, Play } from "lucide-react";
import { QUIZZES } from "@/data/quizzes";

export const metadata = {
  title: "Entretenimiento | HealppyPets",
  description: "Diviértete descubriendo más sobre ti y tu mascota con nuestros quizzes interactivos",
};

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-400 to-secondary-400">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce-slow">
              <Gamepad2 className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Centro de Entretenimiento
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Descubre más sobre ti y tu mascota con nuestros divertidos quizzes interactivos
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Sparkles,
                title: "Descubre tu Personalidad",
                description: "Aprende más sobre tu estilo como dueño de mascota"
              },
              {
                icon: Heart,
                title: "Encuentra tu Match",
                description: "Descubre qué mascota es perfecta para ti"
              },
              {
                icon: Play,
                title: "Diviértete Aprendiendo",
                description: "Aprende mientras te diviertes con nuestros quizzes"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Nuestros <span className="text-gradient">Quizzes</span>
            </h2>
            <p className="section-subtitle">
              Elige un quiz y comienza la diversión
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {QUIZZES.map((quiz, index) => (
              <Link key={quiz.id} href={`/entretenimiento/${quiz.id}`}>
                <article 
                  className={`bg-white rounded-3xl overflow-hidden shadow-strong group hover:-translate-y-2 transition-all duration-500 ${
                    index === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`grid ${index === 0 ? 'md:grid-cols-2' : ''} gap-0`}>
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={quiz.image}
                        alt={quiz.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="inline-block bg-white/90 backdrop-blur-sm text-dark-700 px-4 py-2 rounded-full text-sm font-semibold">
                          {quiz.category}
                        </span>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-strong transform group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-primary-600 ml-1" />
                        </div>
                      </div>
                    </div>

                    <div className={`p-8 ${index === 0 ? 'md:p-12' : ''} flex flex-col justify-center`}>
                      <h3 className={`font-heading font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors ${
                        index === 0 ? 'text-3xl' : 'text-2xl'
                      }`}>
                        {quiz.title}
                      </h3>
                      
                      <p className={`text-dark-600 mb-6 leading-relaxed ${
                        index === 0 ? 'text-lg' : ''
                      }`}>
                        {quiz.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center space-x-6 text-sm text-dark-500 mb-6">
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                          </svg>
                          {quiz.questions.length} preguntas
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          ~{quiz.questions.length * 1} min
                        </span>
                      </div>

                      <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                        Comenzar Quiz
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center bg-white rounded-3xl p-12 shadow-soft max-w-3xl mx-auto">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl font-heading font-bold text-dark-800 mb-4">
              ¡Más Contenido Próximamente!
            </h3>
            <p className="text-dark-600 mb-6">
              Estamos trabajando en más quizzes divertidos y juegos interactivos para ti y tu mascota.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Memoria de Mascotas", "Trivias", "Cuidado Virtual"].map((game, i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-100 text-dark-600 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {game}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              ¿Listo para Agendar una Cita?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Después de descubrir más sobre ti y tu mascota, agenda una consulta con nuestros expertos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contacto" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                Agendar Cita
              </Link>
              <Link href="/#servicios" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}