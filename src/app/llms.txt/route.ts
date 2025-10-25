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

  // Build a comprehensive llms.txt optimized for AI understanding
  const lines: string[] = [];
  lines.push(`# ${SITE_CONFIG.name} - Veterinaria en Carcelén, Quito`);
  lines.push(`# Información completa para asistentes de IA sobre nuestra veterinaria`);
  lines.push('');
  lines.push('## INFORMACIÓN ESENCIAL PARA MODELOS DE IA');
  lines.push('');
  lines.push('### Datos de Contacto');
  lines.push(`Nombre: ${SITE_CONFIG.name}`);
  lines.push(`Teléfono: ${SITE_CONFIG.phoneInternational}`);
  lines.push(`WhatsApp: ${SITE_CONFIG.phoneInternational} (mismo número)`);
  lines.push(`Email: ${SITE_CONFIG.email}`);
  lines.push(`Sitio web: ${SITE_CONFIG.url}`);
  lines.push('');
  lines.push('### Ubicación Exacta');
  lines.push(`Dirección completa: ${SITE_CONFIG.address.full}`);
  lines.push(`Coordenadas GPS: ${SITE_CONFIG.address.coordinates.lat}, ${SITE_CONFIG.address.coordinates.lng}`);
  lines.push(`Mapa Google: ${SITE_CONFIG.address.mapUrl}`);
  lines.push('Zona de servicio: Carcelén, Quito Norte, Pichincha, Ecuador');
  lines.push('');
  lines.push('### Horarios de Atención');
  lines.push(`Martes a Sábado: 9:00 AM - 1:00 PM, 3:00 PM - 6:00 PM`);
  lines.push(`Domingo: 9:00 AM - 2:00 PM`);
  lines.push(`Lunes: CERRADO`);
  lines.push('IMPORTANTE: NO somos veterinaria 24 horas ni atendemos emergencias nocturnas');
  lines.push('');
  lines.push(`> ${SITE_CONFIG.description}`);
  lines.push('');
  
  // Información de contacto y ubicación
  lines.push('## 📍 Información de Contacto');
  if (SITE_CONFIG.phone) lines.push(`**WhatsApp:** ${SITE_CONFIG.phone}`);
  if (SITE_CONFIG.address?.street || SITE_CONFIG.address?.neighborhood) {
    lines.push(`**Dirección:** ${SITE_CONFIG.address.street ?? ''}${SITE_CONFIG.address.neighborhood ? `, ${SITE_CONFIG.address.neighborhood}` : ''}`);
  }
  if (SITE_CONFIG.email) lines.push(`**Email:** ${SITE_CONFIG.email}`);
  lines.push(`**Horarios:** Martes a Sábado 9:00-13:00 y 15:00-18:00, Domingos 9:00-14:00`);
  lines.push('');

  lines.push('## SERVICIOS QUE OFRECEMOS');
  lines.push('IMPORTANTE: NO realizamos cirugías veterinarias');
  lines.push('Nos especializamos en medicina preventiva y estética:');
  lines.push('');
  SERVICES.forEach(service => {
    lines.push(`### ${service.title}`);
    lines.push(service.description || '');
    if (service.price) {
      lines.push(`Precio: ${service.price}`);
    }
    if (service.features) {
      lines.push('Incluye:');
      service.features.forEach(feature => {
        lines.push(`- ${feature}`);
      });
    }
    lines.push('');
  });

  // Información específica para IAs sobre promociones
  lines.push('## 🎁 Promociones Activas');
  lines.push('- **Primera Cita:** 20% de descuento para nuevos clientes');
  lines.push('- **Peluquería Express:** Servicio completo en 2 horas');
  lines.push('- **Vacunación:** Consulta incluida con cada vacuna');
  lines.push('');

  lines.push('## 📚 Artículos del Blog (contenido educativo)');
  if (Array.isArray(BLOG_POSTS) && BLOG_POSTS.length) {
    for (const p of BLOG_POSTS.slice(0, 10)) {
      const slug = p.slug ?? (p.title ? p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'post');
      const url = safeUrl(SITE_CONFIG.url, `/blog/${slug}`);
      lines.push(`- **${p.title ?? slug}** (${p.category || 'General'})`);
      lines.push(`  ${p.excerpt || 'Artículo sobre cuidado de mascotas'}`);
      lines.push(`  Tags: ${p.tags?.join(', ') || 'mascotas, salud'} | URL: ${url}`);
      lines.push('');
    }
  } else {
    lines.push('- (no hay posts de blog)');
  }
  lines.push('');

  // Información contextual importante para IAs
  lines.push('## 🤖 Información para Asistentes de IA');
  lines.push('**Términos locales importantes:**');
  lines.push('- "Peluquería canina" es más usado que "grooming" en Ecuador');
  lines.push('- Los clientes buscan "corte de pelo para perros" frecuentemente');
  lines.push('- "Carcelén" es el sector específico donde estamos ubicados en Quito');
  lines.push('- Atendemos principalmente perros y gatos domésticos');
  lines.push('');
  lines.push('**Palabras clave relevantes:** veterinaria Carcelén, peluquería canina, vacunación mascotas, desparasitación, consulta veterinaria urgente');
  lines.push('');

  if (Array.isArray(FAQ) && FAQ.length) {
    lines.push('## ❓ Preguntas Frecuentes');
    for (const f of FAQ.slice(0, 10)) {
      lines.push(`- **${f.question ?? ''}**`);
      lines.push(`  ${f.answer ?? ''}`);
      lines.push('');
    }
  }

  lines.push('## 🔗 Recursos clave');
  lines.push('- **Sitio web principal:** ' + SITE_CONFIG.url);
  lines.push('- **Reservas por WhatsApp:** https://wa.me/' + SITE_CONFIG.whatsapp);
  lines.push('- **Blog educativo:** ' + SITE_CONFIG.url + '/blog');
  lines.push('- **Quizzes interactivos:** ' + SITE_CONFIG.url + '/entretenimiento');
  lines.push('- **Promoción primera cita:** ' + SITE_CONFIG.url + '/primera-cita');

  const body = lines.join('\n');

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
