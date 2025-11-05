import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isProd = process.env.NODE_ENV === 'production';
  
  // Solo aplicar en producción
  if (!isProd) return NextResponse.next();

  // 1. Redirigir de HTTP a HTTPS
  if (request.headers.get("x-forwarded-proto") !== "https") {
    return NextResponse.redirect(
      `https://www.healppypets.com${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }

  // 2. Redirigir de healppypets.com a www.healppypets.com
  if (hostname === 'healppypets.com') {
    return NextResponse.redirect(
      `https://www.healppypets.com${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }

  // 3. Redirigir URL con error de escritura
  if (request.nextUrl.pathname === '/blog/importancia-de-alimetacion-en-mascotas') {
    return NextResponse.redirect(
      'https://www.healppypets.com/blog/importancia-alimentacion-mascotas',
      301
    );
  }

  // 4. Redirigir URLs antiguas de Netlify
  if (hostname === 'healppypets.netlify.app') {
    return NextResponse.redirect(
      `https://www.healppypets.com${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }

  return NextResponse.next();
}

// Configurar el middleware para que se ejecute en todas las rutas excepto recursos estáticos
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};