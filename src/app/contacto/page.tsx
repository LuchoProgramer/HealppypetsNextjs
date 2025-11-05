import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto - HealppyPets Veterinaria',
  description: 'Contáctanos para consultas veterinarias, servicios de grooming, vacunación y más. Estamos en Carcelén, Quito.',
  alternates: {
    canonical: '/contacto',
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}