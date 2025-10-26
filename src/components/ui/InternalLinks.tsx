import Link from 'next/link';

interface RelatedService {
  title: string;
  href: string;
  description: string;
  icon: string;
  category: 'perros' | 'gatos' | 'general';
}

interface InternalLinksProps {
  currentPage: string;
  excludeLinks?: string[];
  maxLinks?: number;
}

const ALL_SERVICES: RelatedService[] = [
  // Servicios para Perros
  {
    title: 'Vacunas para Perros',
    href: '/servicios/vacunas',
    description: 'Plan completo de vacunación canina en Carcelén',
    icon: '💉',
    category: 'perros'
  },
  {
    title: 'Desparasitación Perros',
    href: '/servicios/desparasitacion',
    description: 'Tratamiento completo contra parásitos caninos',
    icon: '🛡️',
    category: 'perros'
  },
  {
    title: 'Peluquería Canina',
    href: '/grooming',
    description: 'Grooming profesional para perros en Carcelén',
    icon: '✂️',
    category: 'perros'
  },
  
  // Servicios para Gatos
  {
    title: 'Servicios para Gatos',
    href: '/servicios/gatos',
    description: 'Atención veterinaria especializada felina',
    icon: '🐱',
    category: 'gatos'
  },
  {
    title: 'Contacto Servicios Gatos',
    href: '/contacto/gatos',
    description: 'Agenda consulta especializada para tu gato',
    icon: '📱',
    category: 'gatos'
  },
  
  // Servicios Generales
  {
    title: 'Primera Cita',
    href: '/primera-cita',
    description: 'Información para tu primera visita',
    icon: '🏥',
    category: 'general'
  },
  {
    title: 'Consultas Veterinarias',
    href: '/consultas',
    description: 'Diagnóstico y tratamiento profesional',
    icon: '🩺',
    category: 'general'
  },
  {
    title: 'Farmacia Veterinaria',
    href: '/farmacia',
    description: 'Medicamentos y productos para mascotas',
    icon: '💊',
    category: 'general'
  },
  {
    title: 'Preguntas Frecuentes',
    href: '/faqs',
    description: 'Respuestas a dudas comunes sobre mascotas',
    icon: '❓',
    category: 'general'
  }
];

export default function InternalLinks({ 
  currentPage, 
  excludeLinks = [], 
  maxLinks = 6 
}: InternalLinksProps) {
  
  // Lógica de recomendación inteligente
  const getRelevantServices = (): RelatedService[] => {
    const currentPageLower = currentPage.toLowerCase();
    let relevantServices = ALL_SERVICES.filter(service => 
      !excludeLinks.includes(service.href) && 
      service.href !== currentPageLower
    );
    
    // Priorización inteligente según página actual
    if (currentPageLower.includes('gato')) {
      // Si está en página de gatos, priorizar servicios felinos y generales
      relevantServices = relevantServices.sort((a, b) => {
        if (a.category === 'gatos' && b.category !== 'gatos') return -1;
        if (a.category !== 'gatos' && b.category === 'gatos') return 1;
        if (a.category === 'general' && b.category === 'perros') return -1;
        if (a.category === 'perros' && b.category === 'general') return 1;
        return 0;
      });
    } else if (currentPageLower.includes('vacuna') || currentPageLower.includes('desparasit')) {
      // Si está en servicios médicos, priorizar otros servicios médicos
      relevantServices = relevantServices.sort((a, b) => {
        const medicalServices = ['vacuna', 'desparasit', 'consulta', 'farmacia'];
        const aIsMedical = medicalServices.some(term => a.href.includes(term));
        const bIsMedical = medicalServices.some(term => b.href.includes(term));
        
        if (aIsMedical && !bIsMedical) return -1;
        if (!aIsMedical && bIsMedical) return 1;
        return 0;
      });
    } else if (currentPageLower.includes('grooming') || currentPageLower.includes('peluquer')) {
      // Si está en grooming, priorizar servicios estéticos y de cuidado
      relevantServices = relevantServices.sort((a, b) => {
        const careServices = ['gato', 'grooming', 'primera-cita'];
        const aIsCare = careServices.some(term => a.href.includes(term));
        const bIsCare = careServices.some(term => b.href.includes(term));
        
        if (aIsCare && !bIsCare) return -1;
        if (!aIsCare && bIsCare) return 1;
        return 0;
      });
    }
    
    return relevantServices.slice(0, maxLinks);
  };

  const relatedServices = getRelevantServices();
  
  if (relatedServices.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Servicios Relacionados en HealppyPets Carcelén
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Link 
              key={service.href}
              href={service.href}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                  <div className="mt-3 text-purple-600 text-sm font-medium group-hover:text-purple-700">
                    Ver servicio →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* CTA hacia página principal de servicios */}
        <div className="text-center mt-8">
          <Link 
            href="/#servicios"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            <span>🏥</span>
            Ver Todos los Servicios en Carcelén
          </Link>
        </div>
      </div>
    </section>
  );
}