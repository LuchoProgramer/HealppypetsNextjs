import { MetadataRoute } from 'next';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import { BLOG_POSTS } from '@/data/blog-posts';
import { QUIZZES } from '@/data/quizzes';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/primera-cita', '/blog', '/entretenimiento', '/faqs'].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/faqs' ? 0.9 : 0.8,
  }));

  // Páginas de servicios específicos para dominar keywords locales
  const especializedServicePages = [
    '/servicios/vacunas',
    '/servicios/desparasitacion'
  ].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95, // Prioridad muy alta para dominar estas keywords
  }));

  const servicePages = SERVICES.map((service) => ({
    url: `${SITE_CONFIG.url}/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.9 : 0.7,
  }));

  const quizPages = QUIZZES.map((quiz) => ({
    url: `${SITE_CONFIG.url}/entretenimiento/${quiz.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...especializedServicePages, ...servicePages, ...blogPages, ...quizPages];
}
