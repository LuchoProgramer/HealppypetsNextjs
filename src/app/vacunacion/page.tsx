import { generateMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import VacunacionLandingClient from "@/components/landing/VacunacionLandingClient";

export const metadata = generateMetadata({
  title: "Vacunación y Desparasitación Carcelén desde $20 | Healppypets",
  description: "Vacunación completa y desparasitación para perros y gatos en Carcelén. Plan personalizado, consulta incluida. Protege a tu mascota.",
  keywords: ["vacunación perros Carcelén", "vacunación gatos Carcelén", "desparasitación Carcelén", "vacunas mascotas Carcelén"],
  url: "/vacunacion",
});

const vacunacionServiceSchema = generateServiceSchema("vacunacion");
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio", url: "/" },
  { name: "Vacunación", url: "/vacunacion" },
]);

export default function VacunacionPage() {
  return (
    <>
      <Script id="vacunacion-service-schema" type="application/ld+json">{JSON.stringify(vacunacionServiceSchema)}</Script>
      <Script id="vacunacion-breadcrumb-schema" type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</Script>
  <VacunacionLandingClient />
    </>
  );
}
