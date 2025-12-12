// src/lib/cms-client.ts
interface CMSBlogPost {
  id: string;
  title: string;
  slug: string; // CMS slug
  category?: string;
  tags?: string[];
  blocks: Array<{
    type: 'text' | 'image' | 'video';
    content?: string;
    src?: string;
    alt?: string;
  }>;
  image?: string; // Featured image
  author: {
    name: string;
    uid: string;
  };
  featured?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  publishDate?: string;
  readTime?: string;
  createdAt: string;
  updatedAt: string;
}

interface CMSResponse {
  blogs: CMSBlogPost[];
  total: number;
  tenant: string;
}

class HealppyPetsCMSClient {
  private baseUrl: string;
  private tenantId: string;

  constructor(baseUrl: string, tenantId: string) {
    this.baseUrl = baseUrl;
    this.tenantId = tenantId;
  }

  async getAllBlogs(options: { limit?: number } = {}): Promise<CMSResponse> {
    const { limit } = options;
    let url = `${this.baseUrl}/api/blogs?tenant=${this.tenantId}`;

    if (limit) {
      url += `&limit=${limit}`;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 segundos max

      const response = await fetch(url, {
        next: { revalidate: 300 }, // Revalidar cada 5 minutos
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching blogs from CMS:', error);
      throw error;
    }
  }

  async getBlogById(blogId: string): Promise<CMSBlogPost> {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/blogs?tenant=${this.tenantId}&id=${blogId}`,
        { next: { revalidate: 300 } }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching blog by ID:', error);
      throw error;
    }
  }

  // Convertir post del CMS al formato de HealppyPets
  convertCMSPostToHealppyFormat(cmsPost: CMSBlogPost): any {
    // Convertir bloques a formato compatible (HTML o markdown según necesite tu frontend)
    // Asumimos que healppypets maneja HTML en 'content' o lo convertimos
    const content = this.convertBlocksToHTML(cmsPost.blocks);

    // Titulo: Fallback seguro
    const title = cmsPost.title || "Sin Título";

    // Slug: Preferir el slug del CMS, sino generar uno del título, sino usar ID
    let rawSlug = cmsPost.slug;
    if (!rawSlug && title) {
      if (title !== "Sin Título") {
        rawSlug = this.generateSlug(title);
      }
    }
    // Último recurso: usar el ID si todo lo demás falla
    if (!rawSlug) {
      rawSlug = cmsPost.id;
    }

    const slug = rawSlug; // Ya no prefijamos con 'cms-' aquí si el rawSlug ya viene bien, pero mantenemos consistencia con tu lógica anterior

    // Extracto: Usar metaDescription o generar del contenido
    const excerpt = cmsPost.metaDescription || this.extractExcerpt(content);

    // Imagen: Usar la imagen destacada del CMS
    const image = cmsPost.image || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80';

    // Tiempo de lectura
    const readTime = cmsPost.readTime ? parseInt(cmsPost.readTime) : this.estimateReadTime(content);

    // Tags
    const tags = cmsPost.tags && cmsPost.tags.length > 0 ? cmsPost.tags : ["healppypets"];

    // Fecha
    const date = cmsPost.publishDate || cmsPost.createdAt;

    // Asegurar prefijo cms- solo si no lo tiene (opcional, pero mantenemos tu lógica estricta)
    const finalSlug = slug.startsWith('cms-') ? slug : `cms-${slug}`;

    return {
      slug: finalSlug,
      originalSlug: slug,
      title: title,
      excerpt,
      content,
      category: cmsPost.category || "Consejos",
      author: {
        name: cmsPost.author.name,
        role: "Veterinaria HealppyPets"
      },
      image,
      date,
      readTime,
      tags,
      featured: cmsPost.featured || false,
      metaTitle: cmsPost.metaTitle,
      metaDescription: cmsPost.metaDescription,
      isCMSPost: true
    };
  }

  private extractExcerpt(htmlContent: string): string {
    // Remover HTML tags y obtener primeras 30 palabras
    const textOnly = htmlContent.replace(/<[^>]*>/g, '');
    const words = textOnly.split(' ').slice(0, 30);
    return words.join(' ') + '...';
  }

  private convertBlocksToHTML(blocks: CMSBlogPost['blocks']): string {
    return blocks.map(block => {
      switch (block.type) {
        case 'text':
          return `<div class="cms-text">${block.content || ''}</div>`;
        case 'image':
          // @ts-ignore - Handle potential API inconsistency
          const imgSrc = block.src || block.url;
          return `<figure class="cms-image"><img src="${imgSrc}" alt="${block.alt || 'Imagen del blog'}" class="img-fluid rounded my-4" /></figure>`;
        case 'video':
          // @ts-ignore - Handle potential API inconsistency
          const videoUrl = block.src || block.url;
          if (videoUrl?.includes('tiktok')) {
            const videoIdMatch = videoUrl.match(/video\/(\d+)/i);
            const videoId = videoIdMatch ? videoIdMatch[1] : '';
            if (!videoId) return '';
            return `<blockquote class="tiktok-embed" cite="${videoUrl}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;"><section><a target="_blank" href="${videoUrl}">Ver en TikTok</a></section></blockquote>`;
          }
          if (videoUrl) {
            return `<div class="ratio ratio-16x9 my-4"><iframe src="${videoUrl}" allowfullscreen></iframe></div>`;
          }
          return '';
        default:
          return '';
      }
    }).join('');
  }

  public generateSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remover acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
      .trim()
      .replace(/\s+/g, '-'); // Reemplazar espacios con guiones
  }

  private estimateReadTime(content: string): number {
    const textOnly = content.replace(/<[^>]*>/g, '');
    const wordsPerMinute = 200;
    const words = textOnly.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  }

  async getCategories(): Promise<{ categories: string[] }> {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/categories?tenant=${this.tenantId}`,
        { next: { revalidate: 600 } } // Cache por 10 minutos
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Fallback a categorías estáticas en caso de error
      return {
        categories: ["Nutrición", "Cuidados", "Salud", "Consejos"]
      };
    }
  }
}

// Configuración
const CMS_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000',
  tenantId: process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'EdLQ4SMjykM2kZoJ6iSK'
};

export const cmsClient = new HealppyPetsCMSClient(
  CMS_CONFIG.baseUrl,
  CMS_CONFIG.tenantId
);

export { HealppyPetsCMSClient };
export type { CMSBlogPost, CMSResponse };