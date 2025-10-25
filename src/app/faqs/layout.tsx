import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - Veterinaria HealppyPets Carcelén',
  description: 'Resuelve todas tus dudas sobre nuestros servicios veterinarios en Carcelén. Horarios, precios, vacunación, grooming y más información sobre HealppyPets.',
  keywords: [
    'preguntas frecuentes veterinaria Carcelén',
    'FAQ HealppyPets',
    'dudas veterinaria Quito',
    'información veterinaria Carcelén',
    'horarios veterinaria Carcelén',
    'precios vacunas Carcelén',
    'consultas veterinaria Quito',
    'servicios HealppyPets'
  ],
  openGraph: {
    title: 'Preguntas Frecuentes | HealppyPets Carcelén',
    description: 'Encuentra respuestas a todas tus preguntas sobre nuestros servicios veterinarios en Carcelén, Quito.',
    type: 'website',
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ HealppyPets Carcelén',
    description: 'Resuelve tus dudas sobre servicios veterinarios en Carcelén.',
  },
  alternates: {
    canonical: '/faqs',
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}