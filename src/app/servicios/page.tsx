import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Servicios Veterinarios - HealppyPets',
  description: 'Ofrecemos servicios veterinarios completos: consultas, vacunación, desparasitación, grooming y más. Tu veterinaria de confianza en Carcelén.',
  alternates: {
    canonical: '/servicios',
  },
};

const services = [
  {
    title: 'Consulta Veterinaria',
    description: 'Atención médica profesional para tu mascota',
    image: '/images/services/consulta.jpg',
    href: '/consulta'
  },
  {
    title: 'Grooming',
    description: 'Servicios de peluquería y estética para mascotas',
    image: '/images/services/grooming.jpg',
    href: '/grooming'
  },
  {
    title: 'Vacunación',
    description: 'Programa completo de vacunación',
    image: '/images/services/vacunacion.jpg',
    href: '/servicios/vacunas'
  },
  {
    title: 'Desparasitación',
    description: 'Control y prevención de parásitos',
    image: '/images/services/desparasitacion.jpg',
    href: '/servicios/desparasitacion'
  },
  {
    title: 'Servicios para Gatos',
    description: 'Atención especializada felina',
    image: '/images/services/gatos.jpg',
    href: '/servicios/gatos'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link 
            key={service.title} 
            href={service.href}
            className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}