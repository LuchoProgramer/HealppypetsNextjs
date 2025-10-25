import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";

// Metadatos optimizados para SEO del blog
export const metadata = baseGenerateMetadata({
  title: "Blog de Mascotas - Consejos y Guías Veterinarias | HealppyPets",
  description: "Descubre consejos expertos sobre cuidado de mascotas, nutrición, salud y bienestar. Blog veterinario de HealppyPets en Carcelén, Quito.",
  keywords: [
    "blog mascotas", 
    "cuidado mascotas", 
    "consejos veterinarios", 
    "salud animal Quito",
    "nutrición mascotas",
    "HealppyPets blog"
  ],
  url: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}