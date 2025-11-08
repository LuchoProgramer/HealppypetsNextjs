import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/constants';

export async function GET() {
  const env = process.env.NODE_ENV ?? 'development';
  const allowRobots = (process.env.NEXT_PUBLIC_ALLOW_ROBOTS ?? 'true') === 'true';
  const sitemap = process.env.SITEMAP_URL ?? `${SITE_CONFIG.url?.replace(/\/$/, '') ?? 'https://example.com'}/sitemap.xml`;

  const lines: string[] = [];
  
  // Header with identification and date
  lines.push('# Robots.txt para HealppyPets - Veterinaria en Carcelén, Quito');
  lines.push(`# Actualizado: ${new Date().toLocaleDateString('es-EC', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}`);
  lines.push('');

  if (!allowRobots || env !== 'production') {
    // Development/staging: block everything
    lines.push('# ENTORNO DE DESARROLLO - Acceso bloqueado');
    lines.push('User-agent: *');
    lines.push('Disallow: /');
  } else {
    // Production: optimized rules for veterinary clinic
    
    // Global rules - allow everything by default
    lines.push('# Permitir acceso a todos los robots de búsqueda');
    lines.push('User-agent: *');
    lines.push('Allow: /');
    lines.push('');
    
    // Block technical files and directories
    lines.push('# Bloquear archivos y directorios técnicos');
    lines.push('Disallow: /api/private*');
    lines.push('Disallow: /api/admin*');
    lines.push('Disallow: /_next/*');
    lines.push('Disallow: /preview*');
    lines.push('Disallow: /admin*');
    lines.push('Disallow: /*.json$');
    lines.push('Disallow: /scripts/');
    lines.push('');
    
    // Explicitly allow important SEO content for veterinary services
    lines.push('# Permitir explícitamente contenido importante para SEO veterinario');
    lines.push('Allow: /blog/');
    lines.push('Allow: /servicios/');
    lines.push('Allow: /grooming/');
    lines.push('Allow: /consulta/');
    lines.push('Allow: /contacto/');
    lines.push('Allow: /entretenimiento/');
    lines.push('Allow: /terminos/');
    lines.push('Allow: /api/sitemap');
    lines.push('');
    
    // Specific rules for major crawlers
    lines.push('# Crawler específico de Google');
    lines.push('User-agent: Googlebot');
    lines.push('Allow: /');
    lines.push('');
    
    lines.push('# Crawler específico de Bing');
    lines.push('User-agent: Bingbot');
    lines.push('Allow: /');
    lines.push('');
    
    // Note about crawl-delay (educational)
    lines.push('# Nota: Crawl-delay es ignorado por Googlebot y puede causar advertencias');
    lines.push('# en Search Console. Para control de velocidad usar rate limiting del servidor');
  }

  // Sitemap location
  lines.push('');
  lines.push('# Sitemap principal');
  lines.push(`Sitemap: ${sitemap}`);

  const body = lines.join('\n');

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Cache for CDN/edge; adjust as needed
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
