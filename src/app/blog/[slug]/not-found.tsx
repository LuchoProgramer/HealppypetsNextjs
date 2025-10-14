import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary-200 mb-4">404</div>
          <div className="text-6xl mb-6">🐾</div>
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-800 mb-4">
          ¡Ups! Este artículo no existe
        </h1>
        <p className="text-xl text-dark-600 mb-8">
          Parece que este artículo se ha escapado como un cachorro travieso. 
          No te preocupes, te ayudamos a encontrar el camino de vuelta.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/blog" className="btn-primary inline-flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Blog
          </Link>
          <Link href="/" className="btn-outline inline-flex items-center">
            <Home className="w-5 h-5 mr-2" />
            Ir al Inicio
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-dark-600 mb-4">
            Mientras tanto, puedes:
          </p>
          <ul className="space-y-2 text-dark-700">
            <li>📚 Explorar nuestros otros artículos del blog</li>
            <li>🐾 Conocer nuestros servicios veterinarios</li>
            <li>💬 Contactarnos si tienes alguna duda</li>
          </ul>
        </div>
      </div>
    </div>
  );
}