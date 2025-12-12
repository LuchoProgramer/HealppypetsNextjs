// src/data/hybrid-blog-posts.ts
import { BLOG_POSTS, BlogPost } from './blog-posts';
import { cmsClient } from '@/lib/cms-client';

// Función para obtener todos los posts (estáticos + CMS)
export async function getAllPosts(options: { limit?: number; category?: string } = {}): Promise<BlogPost[]> {
  try {
    // Obtener posts del CMS
    const cmsResponse = await cmsClient.getAllBlogs({ limit: 50 });
    const cmsPosts = cmsResponse.blogs.map(post =>
      cmsClient.convertCMSPostToHealppyFormat(post)
    );

    // Combinar posts estáticos y del CMS
    const allPosts = [...BLOG_POSTS, ...cmsPosts];

    // Ordenar por fecha (más recientes primero)
    allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filtrar por categoría si se especifica
    let filteredPosts = allPosts;
    if (options.category && options.category !== 'Todos') {
      filteredPosts = allPosts.filter(post =>
        post.category === options.category ||
        (options.category === 'CMS' && post.isCMSPost)
      );
    }

    // Aplicar límite si se especifica
    if (options.limit) {
      filteredPosts = filteredPosts.slice(0, options.limit);
    }

    return filteredPosts;
  } catch (error) {
    console.error('Error fetching hybrid posts:', error);
    // En caso de error, devolver solo posts estáticos
    return BLOG_POSTS;
  }
}

// Función para obtener un post por slug
export async function getPostBySlugHybrid(slug: string): Promise<BlogPost | null> {
  // Si es un post del CMS (comienza con 'cms-')
  if (slug.startsWith('cms-')) {
    try {
      const decodedSlug = decodeURIComponent(slug);

      // FIX: No podemos asumir que el slug contiene el ID directamente si usamos slugs personalizados
      // En lugar de getBlogById, necesitamos buscar el post que tenga ese slug

      // 1. Obtener la lista de blogs (o implementar un endpoint en CMS para buscar por slug)
      const allCmsPosts = await cmsClient.getAllBlogs({ limit: 100 });

      // 2. Buscar el post que coincida con el slug generado
      // El slug en la URL es 'cms-titulo-del-post'
      // El slug en el CMS es 'titulo-del-post'
      const targetSlug = decodedSlug.replace('cms-', '');

      const foundPost = allCmsPosts.blogs.find(post => {
        // Opción A: El slug coincide exactamente con el slug del CMS
        if (post.slug === targetSlug) return true;

        // Opción B: Si no hay slug en CMS, comparamos con el slug generado
        const generatedSlug = cmsClient.generateSlug(post.title);
        return generatedSlug === targetSlug;
      });

      if (foundPost) {
        return cmsClient.convertCMSPostToHealppyFormat(foundPost);
      }

      // Si no encontramos por coincidencia de lista, intentamos fallback por ID si el slug fuera un ID
      // (Para compatibilidad con enlaces viejos si los hubiera)
      try {
        const idFallback = decodedSlug.replace('cms-', '');
        const postById = await cmsClient.getBlogById(idFallback);
        return cmsClient.convertCMSPostToHealppyFormat(postById);
      } catch (e) {
        // Ignorar error de fallback
      }

      console.warn(`CMS Post not found for slug: ${decodedSlug}`);
      return null;

    } catch (error) {
      console.error('Error fetching CMS post:', error);
      return null;
    }
  }

  // Buscar en posts estáticos
  return BLOG_POSTS.find(post => post.slug === slug) || null;
}

// Función para obtener posts relacionados
export async function getRelatedPostsHybrid(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find(post => post.slug === currentSlug);

  if (!currentPost) return [];

  // Buscar posts relacionados por categoría o tags
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post =>
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);

  // Si no hay suficientes relacionados, completar con posts recientes
  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => post.slug !== currentSlug)
      .filter(post => !relatedPosts.includes(post))
      .slice(0, limit - relatedPosts.length);

    relatedPosts.push(...recentPosts);
  }

  return relatedPosts;
}

// Función para obtener categorías disponibles (estáticas + CMS)
export async function getAvailableCategories(): Promise<string[]> {
  try {
    // Categorías estáticas de HealppyPets
    const staticCategories = new Set(BLOG_POSTS.map(post => post.category));

    // Categorías del CMS
    const cmsResponse = await cmsClient.getCategories();
    const cmsCategories = new Set(cmsResponse.categories);

    // Combinar ambas
    const allCategories = new Set([...staticCategories, ...cmsCategories]);

    return Array.from(allCategories).sort();
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Fallback a categorías estáticas
    const staticCategories = new Set(BLOG_POSTS.map(post => post.category));
    return Array.from(staticCategories).sort();
  }
}

// Función para obtener posts destacados
export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  const featuredPosts = allPosts.filter(post => post.featured);

  // Si no hay suficientes destacados, completar con los más recientes
  if (featuredPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => !post.featured)
      .slice(0, limit - featuredPosts.length);
    featuredPosts.push(...recentPosts);
  }

  return featuredPosts.slice(0, limit);
}