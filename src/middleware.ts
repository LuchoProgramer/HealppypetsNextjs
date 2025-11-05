import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const isProd = process.env.NODE_ENV === 'production'
  
  // Solo aplicar en producción
  if (!isProd) return NextResponse.next()

  // Verificar si es HTTP
  if (request.headers.get("x-forwarded-proto") !== "https") {
    return NextResponse.redirect(
      `https://www.healppypets.com${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    )
  }

  // Redirigir de healppypets.com a www.healppypets.com
  if (hostname === 'healppypets.com') {
    return NextResponse.redirect(
      `https://www.healppypets.com${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    )
  }

  return NextResponse.next()
}

// Configurar el middleware para que se ejecute en todas las rutas
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}