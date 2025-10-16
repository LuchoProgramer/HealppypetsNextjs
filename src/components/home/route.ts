import { NextResponse } from 'next/server';
import { SITE_CONFIG, SERVICES, FAQ } from '@/lib/constants';
import { BLOG_POSTS } from '@/data/blog-posts';

export async function GET() {
  const content = `
# ${SITE_CONFIG.name}
# Nota: Las URLs enlazadas son páginas HTML.

> ${SITE_CONFIG.description}. Cuidado profesional y rápido para tu mejor amigo.

Somos una clínica veterinaria ubicada en Carcelén, Quito, dedicada a ofrecer un cuidado integral y profesional para mascotas. Nuestro enfoque se basa en la atención personalizada, el amor por los animales y la comunicación transparente con los dueños. Nuestra veterinaria principal es Carla Tutistar.

**WhatsApp:** ${SITE_CONFIG.phone}
**Dirección:** ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.neighborhood}, Quito
**Email:** ${SITE_CONFIG.email}

## Servicios Principales
${SERVICES.map(s => `- ${s.title}: ${s.shortDescription}`).join('\n')}

## Recursos Clave
- Promoción Primera Cita: 20% de descuento para todos los nuevos clientes.
- Blog de Consejos: Artículos y guías sobre el cuidado de mascotas.
- Entretenimiento: Quizzes divertidos para dueños de mascotas.
- Nuestra Historia: Conoce a Carla y la misión de Healppypets.
  `.trim();

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=UTF-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate', // Cache por 1 hora
    },
  });
}