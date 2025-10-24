"use client";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/data/blog-posts";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-[#F2C2EA] transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-[#F2C9E7]/20 text-[#F2C2EA] px-4 py-2 rounded-full text-sm font-semibold border border-[#F2C9E7]/30">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] flex items-center justify-center text-white font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-600">{post.author.role}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-gray-600 ml-auto">
              <span className="flex items-center gap-1">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString('es-EC', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                {post.readTime} min
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12 text-gray-700 leading-relaxed space-y-6">
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mb-12 pb-12 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Etiquetas:</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-[#F2DFED] text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#F2C2EA]/30 transition-colors"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#F2C9E7]/20 to-[#F2C2EA]/20 rounded-2xl p-8 text-center border border-[#F2C9E7]/30 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas Asesoría Personalizada?</h3>
            <p className="text-gray-700 mb-6">
              Nuestro equipo está listo para ayudarte con todas tus dudas sobre el cuidado de tu mascota
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/593987005084?text=Hola! Tengo preguntas sobre nutrición para mi mascota"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#F2C9E7] to-[#F2C2EA] text-gray-900 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'blog_post_click_whatsapp', {
                      event_category: 'blog_post',
                      event_label: post.title,
                    });
                  }
                }}
              >
                <span className="mr-2">💬</span>
                Contactar por WhatsApp
              </a>
              <Link
                href="/#servicios"
                className="inline-flex items-center px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'blog_post_click_ver_servicios', {
                      event_category: 'blog_post',
                      event_label: post.title,
                    });
                  }
                }}
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Artículos Relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'blog_post_click_articulo_relacionado', {
                      event_category: 'blog_post',
                      event_label: post.title,
                    });
                  }
                }}
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full border border-gray-100">
                  <div className="relative h-40 overflow-hidden">
                    <img
// ...existing code...
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#F2C9E7]/20 text-[#F2C2EA] px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-[#F2C9E7]/30">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#F2C2EA] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} min
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}