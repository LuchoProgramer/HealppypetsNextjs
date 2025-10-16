import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { SITE_CONFIG, SERVICES, FAQ } from '@/lib/constants';
import { BLOG_POSTS } from '@/data/blog-posts';

function safeUrl(base?: string, suffix = '') {
  if (!base) return suffix || 'https://example.com';
  return `${base.replace(/\/$/, '')}${suffix}`;
}

export async function GET() {
  const root = process.cwd();

  // Prefer an on-disk llms.txt or llms.md if present in repo root
  try {
    const txtPath = path.join(root, 'llms.txt');
    const mdPath = path.join(root, 'llms.md');

    if (fs.existsSync(txtPath)) {
      const raw = fs.readFileSync(txtPath, 'utf8');
      return new NextResponse(raw, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=UTF-8',
          'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
      });
    }

    if (fs.existsSync(mdPath)) {
      const raw = fs.readFileSync(mdPath, 'utf8');
      return new NextResponse(raw, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=UTF-8',
          'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
      });
    }
  } catch (err) {
    // ignore and fallback to generated content
    // eslint-disable-next-line no-console
    console.warn('llms.txt read error:', err);
  }

  // Build a generated llms.txt based on site constants
  const lines: string[] = [];
  lines.push(`# ${SITE_CONFIG.name}`);
  lines.push(`# Nota: Las URLs enlazadas son páginas HTML.`);
  lines.push('');
  lines.push(`> ${SITE_CONFIG.description}`);
  lines.push('');
  // use description from SITE_CONFIG
  lines.push(`${SITE_CONFIG.description ?? ''}`);
  lines.push('');
  if (SITE_CONFIG.phone) lines.push(`**WhatsApp:** ${SITE_CONFIG.phone}`);
  if (SITE_CONFIG.address?.street || SITE_CONFIG.address?.neighborhood) {
    lines.push(`**Dirección:** ${SITE_CONFIG.address.street ?? ''}${SITE_CONFIG.address.neighborhood ? `, ${SITE_CONFIG.address.neighborhood}` : ''}`);
  }
  if (SITE_CONFIG.email) lines.push(`**Email:** ${SITE_CONFIG.email}`);
  lines.push('');

  lines.push('## Servicios');
  if (Array.isArray(SERVICES) && SERVICES.length) {
    for (const s of SERVICES) {
      lines.push(`- ${s.title}${s.shortDescription ? `: ${s.shortDescription}` : ''}`);
    }
  } else {
    lines.push('- (no hay servicios configurados)');
  }
  lines.push('');

  lines.push('## Blog - últimas entradas');
  if (Array.isArray(BLOG_POSTS) && BLOG_POSTS.length) {
    for (const p of BLOG_POSTS.slice(0, 8)) {
      const slug = p.slug ?? (p.title ? p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'post');
      const url = safeUrl(SITE_CONFIG.url, `/blog/${slug}`);
      lines.push(`- ${p.title ?? slug}: ${url}`);
    }
  } else {
    lines.push('- (no hay posts de blog)');
  }
  lines.push('');

  if (Array.isArray(FAQ) && FAQ.length) {
    lines.push('## FAQ - preguntas frecuentes');
    for (const f of FAQ.slice(0, 12)) {
      lines.push(`- ${f.question ?? ''}`);
    }
    lines.push('');
  }

  lines.push('## Recursos clave');
  lines.push('- Promoción Primera Cita: 20% de descuento para todos los nuevos clientes.');
  lines.push('- Blog de Consejos: Artículos y guías sobre el cuidado de mascotas.');
  lines.push('- Entretenimiento: Quizzes divertidos para dueños de mascotas.');
  lines.push('- Nuestra Historia: Conoce al equipo y la misión.');

  const body = lines.join('\n');

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
