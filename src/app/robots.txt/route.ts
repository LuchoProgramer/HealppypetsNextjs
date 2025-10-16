import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/constants';

export async function GET() {
  const env = process.env.NODE_ENV ?? 'development';

  // If you want to completely block crawlers in non-production, set NEXT_PUBLIC_ALLOW_ROBOTS=false
  const allowRobots = (process.env.NEXT_PUBLIC_ALLOW_ROBOTS ?? 'true') === 'true';

  const sitemap = process.env.SITEMAP_URL ?? `${SITE_CONFIG.url?.replace(/\/$/, '') ?? 'https://example.com'}/sitemap.xml`;

  const lines: string[] = [];
  lines.push('User-agent: *');

  if (!allowRobots || env !== 'production') {
    // In development/staging or when explicitly disabled, block everything by default
    lines.push('Disallow: /');
  } else {
    // Production defaults: allow everything, but block obvious internals
    lines.push('Disallow:');
    lines.push('Disallow: /api/private');
    lines.push('Disallow: /api/admin');
    lines.push('Disallow: /_next/');
    lines.push('Disallow: /preview');
  }

  lines.push('');
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
