import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buscar - HealppyPets',
  description: 'Busca servicios veterinarios, información sobre mascotas y más en HealppyPets.',
  alternates: {
    canonical: '/buscar',
  },
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const searchQuery = searchParams.q;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Resultados de búsqueda</h1>
      <div className="max-w-2xl mx-auto">
        {searchQuery ? (
          <p className="text-lg mb-4">Mostrando resultados para: {searchQuery}</p>
        ) : (
          <p className="text-lg mb-4">Ingresa un término de búsqueda para comenzar</p>
        )}
        {/* Aquí irá la implementación de la búsqueda */}
      </div>
    </div>
  );
}