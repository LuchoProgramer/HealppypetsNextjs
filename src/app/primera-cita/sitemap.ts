import { MetadataRoute } from 'next';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import { BLOG_POSTS } from '@/data/blog-posts';
import { QUIZZES } from '@/data/quizzes';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/primera-cita',
    '/blog',
    '/entretenimiento',
  ].map(route => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const servicePages = SERVICES.map(service => ({
    url: `${SITE_CONFIG.url}/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Aquí agregaríamos dinámicamente posts del blog y quizzes

  return [...staticPages, ...servicePages];
}