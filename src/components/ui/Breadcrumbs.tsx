'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', href: '/' }
    ];
    
    let currentPath = '';
    
    for (const segment of pathSegments) {
      currentPath += `/${segment}`;
      
      // Mapeo de rutas a nombres amigables SEO-optimizados
      const routeNames: Record<string, string> = {
        'blog': 'Blog Veterinario',
        'servicios': 'Servicios Veterinarios',
        'primera-cita': 'Primera Cita',
        'grooming': 'Peluquería Canina Carcelén',
        'vacunacion': 'Vacunación Mascotas',
        'consultas': 'Consultas Veterinarias',
        'farmacia': 'Farmacia Veterinaria',
        'faqs': 'Preguntas Frecuentes',
        'entretenimiento': 'Entretenimiento Mascotas',
        'contacto': 'Contacto',
        'gatos': 'Servicios para Gatos',
        'vacunas': 'Vacunas Mascotas Carcelén',
        'desparasitacion': 'Desparasitación Carcelén'
      };
      
      const label = routeNames[segment] || segment.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
      
      breadcrumbs.push({
        label,
        href: currentPath
      });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  // No mostrar breadcrumbs en la página principal
  if (pathname === '/') return null;
  
  // Schema.org para breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://healppypets.com${item.href}`
    }))
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <span className="text-gray-400 mx-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-700 font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}