import { generateMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import VacunacionLandingClient from "@/components/landing/VacunacionLandingClient";

export const metadata = generateMetadata({
  title: "Vacunación Completa desde $20 | Healppypets",
  description: "Plan de vacunación personalizado para cachorros y adultos en HealppyPets. Protege a tu mascota desde el primer mes.",
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
