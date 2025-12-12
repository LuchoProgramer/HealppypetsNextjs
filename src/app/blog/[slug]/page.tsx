import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getPostBySlugHybrid, getRelatedPostsHybrid } from "@/data/hybrid-blog-posts";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import WhatsAppButton from "./WhatsAppButton";
import InternalLinks from "@/components/ui/InternalLinks";
import TikTokLoader from "@/components/ui/TikTokLoader";

interface BlogPostPageProps {
  params: { slug: string };
}

// Generar metadatos dinámicos para SEO (Server Component)
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPostBySlugHybrid(slug);

  if (!post) {
    return {
      title: 'Post no encontrado | HealppyPets Blog',
      description: 'El artículo que buscas no está disponible.'
    };
  }

  // Priorizar metadatos del CMS si existen
  const title = post.metaTitle || `${post.title} | Blog HealppyPets`;
  const description = post.metaDescription || post.excerpt;

  return baseGenerateMetadata({
    title,
    description,
    keywords: [...post.tags, "HealppyPets blog", "cuidado mascotas", "veterinaria Carcelén"],
    image: post.image,
    url: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlugHybrid(params.slug);
  if (!post) {
    // Log para monitoreo
    console.error(`Post not found: ${params.slug}`);
    return notFound();
  }

  const relatedPosts = await getRelatedPostsHybrid(post.slug, 3);

  // Schema.org para artículos
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role
    },
    publisher: {
      "@type": "Organization",
      name: "HealppyPets",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`
    },
    keywords: post.tags.join(", ")
  };

  return (
    <div className="min-h-screen bg-white">
      <TikTokLoader />
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
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
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mb-12 pb-12 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Etiquetas:</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
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
              <WhatsAppButton postTitle={post.title} />
              <Link
                href="/#servicios"
                className="inline-flex items-center px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Estratégicos para Blog */}
      <InternalLinks
        currentPage={`/blog/${post.slug}`}
        excludeLinks={[`/blog/${post.slug}`]}
        maxLinks={6}
      />

      {/* Related Posts */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Artículos Relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost: any) => {
              if (!relatedPost.slug) {
                console.warn('Post relacionado sin slug detectado:', relatedPost);
                return null;
              }
              return (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full border border-gray-100">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {relatedPost.isCMSPost && (
                        <div className="absolute top-2 right-2">
                          <span className="inline-block bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                            🔴 CMS
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-[#F2C9E7]/20 text-[#F2C2EA] px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-[#F2C9E7]/30">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#F2C2EA] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime} min
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}