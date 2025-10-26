// src/lib/cms-client.ts
interface CMSBlogPost {
  id: string;
  title: string;
  category?: string;
  tags?: string[];
  blocks: Array<{
    type: 'text' | 'image' | 'video';
    content?: string;
    src?: string;
    alt?: string;
  }>;
  author: {
    name: string;
    uid: string;
  };
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
      const response = await fetch(url, {
        next: { revalidate: 300 } // Revalidar cada 5 minutos
      });
      
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
    // Extraer primer párrafo como excerpt
    const textBlocks = cmsPost.blocks.filter(block => block.type === 'text');
    const firstTextContent = textBlocks[0]?.content || '';
    const excerpt = this.extractExcerpt(firstTextContent);

    // Obtener primera imagen como imagen destacada
    const imageBlocks = cmsPost.blocks.filter(block => block.type === 'image');
    const featuredImage = imageBlocks[0]?.src || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80';

    // Convertir bloques a markdown
    const content = this.convertBlocksToMarkdown(cmsPost.blocks);

    // Generar slug
    const slug = this.generateSlug(cmsPost.title);

    // Estimar tiempo de lectura
    const readTime = this.estimateReadTime(content);

    // Usar categoría del CMS o una por defecto
    const category = cmsPost.category || "CMS";

    // Usar tags del CMS o tags por defecto
    const tags = cmsPost.tags && cmsPost.tags.length > 0 
      ? cmsPost.tags 
      : ["cms", "healppypets"];

    return {
      slug: `cms-${cmsPost.id}`, // Prefijo para distinguir posts del CMS
      title: cmsPost.title,
      excerpt,
      content,
      category,
      author: {
        name: cmsPost.author.name,
        role: "Equipo HealppyPets"
      },
      image: featuredImage,
      date: cmsPost.createdAt,
      readTime,
      tags,
      featured: false,
      isCMSPost: true // Flag para identificar posts del CMS
    };
  }

  private extractExcerpt(htmlContent: string): string {
    // Remover HTML tags y obtener primeras 150 palabras
    const textOnly = htmlContent.replace(/<[^>]*>/g, '');
    const words = textOnly.split(' ').slice(0, 30);
    return words.join(' ') + '...';
  }

  private convertBlocksToMarkdown(blocks: CMSBlogPost['blocks']): string {
    return blocks.map(block => {
      switch (block.type) {
        case 'text':
          return block.content || '';
        case 'image':
          return `![${block.alt || 'Imagen'}](${block.src})`;
        case 'video':
          return `<iframe src="${block.src}" width="100%" height="315" frameborder="0" allowfullscreen></iframe>`;
        default:
          return '';
      }
    }).join('\n\n');
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remover acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
      .trim()
      .replace(/\s+/g, '-'); // Reemplazar espacios con guiones
  }

  private estimateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
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