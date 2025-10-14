
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/data/blog-posts";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import ShareButtons from "@/components/shared/ShareButtons";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post no encontrado"
    };
  }

  return {
    title: `${post.title} | Blog HealppyPets`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);
  const shareUrl = `${SITE_CONFIG.url}/blog/${params.slug}`;

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="container-custom py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-dark-600 hover:text-primary-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <article className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark-800 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-dark-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-dark-800">{post.author.name}</p>
                <p className="text-sm text-dark-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-dark-500">
              <span className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.date).toLocaleDateString('es-EC', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime} min de lectura
              </span>
            </div>
          </div>

          {/* Share Buttons */}
          <ShareButtons title={post.title} shareUrl={shareUrl} />

          {/* Featured Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-strong">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-dark-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n/g, '<br />')
                  .replace(/#{1,6} (.+)/g, (match, title) => {
                    const level = match.split(' ')[0].length;
                    return `<h${level} class="text-dark-800 font-heading font-bold mt-8 mb-4">${title}</h${level}>`;
                  })
                  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.+?)\*/g, '<em>$1</em>')
                  .replace(/- (.+)/g, '<li class="ml-6">$1</li>')
                  .replace(/(<li.*<\/li>)/s, '<ul class="list-disc space-y-2 my-4">$1</ul>')
              }}
            />
          </div>

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <p className="text-sm font-semibold text-dark-700 mb-3">
              Etiquetas:
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white mb-16">
            <h3 className="text-3xl font-heading font-bold mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo está listo para ayudarte con todas tus dudas sobre el cuidado de tu mascota
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contacto" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                Agendar Consulta
              </Link>
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold text-dark-800 mb-12 text-center">
              Artículos Relacionados
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <article className="bg-gradient-soft rounded-3xl overflow-hidden group hover:shadow-medium transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-dark-600 text-sm line-clamp-2 flex-1">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-dark-500 mt-4 pt-4 border-t border-gray-200">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime} min
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}