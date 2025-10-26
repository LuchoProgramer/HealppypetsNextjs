"use client";

// Declaración global para window.gtag (evita error TS2339 en TSX)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, Tag, ArrowRight, Loader2 } from "lucide-react";
import { getAllPosts, getAvailableCategories } from "@/data/hybrid-blog-posts";
import { BlogPost } from "@/data/blog-posts";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos iniciales
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [allPosts, availableCategories] = await Promise.all([
          getAllPosts(),
          getAvailableCategories()
        ]);
        
        setPosts(allPosts);
        setCategories(['Todos', ...availableCategories]);
        setError(null);
      } catch (err) {
        console.error('Error loading blog data:', err);
        setError('Error cargando los artículos. Inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Filtrar posts
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#F2C2EA]" />
          <p className="text-gray-600">Cargando artículos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-[#F2C2EA] text-gray-900 rounded-lg hover:bg-[#F2C9E7] transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] rounded-full mb-4 animate-bounce shadow-lg">
              <span className="text-3xl">📚</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Blog de <span className="bg-gradient-to-r from-[#F2C9E7] via-[#F2C2EA] to-[#F2D8EE] bg-clip-text text-transparent">Healppypets</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Consejos, guías y todo lo que necesitas saber para cuidar mejor a tu mascota
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
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-[#F2C2EA] focus:ring-2 focus:ring-[#F2C9E7]/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#F2C2EA]"
              }`}
            >
              {category}
              {category === 'CMS' && (
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  En vivo
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: BlogPost) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'blog_click_leer_mas', {
                    event_category: 'blog',
                    event_label: post.title,
                    custom_parameters: {
                      source: post.isCMSPost ? 'cms' : 'static'
                    }
                  });
                }
              }}
            >
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col border border-gray-100">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  {post.isCMSPost && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                        🔴 EN VIVO
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#F2C2EA] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('es-EC', { day: 'numeric', month: 'short' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 2).map((tag: string) => (
                      <span key={tag} className="text-xs bg-[#F2DFED] text-gray-800 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center text-[#F2C2EA] font-semibold group-hover:translate-x-2 transition-transform">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-gray-600">
              Intenta con otra búsqueda o categoría
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#F2C9E7]/20 to-[#F2C2EA]/20 rounded-2xl p-12 text-center border border-[#F2C2EA]/30">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Tienes dudas específicas?
          </h3>
          <p className="text-gray-700 mb-6">
            Nuestro equipo está disponible para responder todas tus preguntas sobre el cuidado de tu mascota
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'blog_click_contacto', {
                  event_category: 'blog',
                  event_label: 'CTA Contactar Ahora',
                });
              }
            }}
          >
            <span className="mr-2">💬</span>
            Contactar Ahora
          </a>
        </div>
      </div>
    </div>
  );
}