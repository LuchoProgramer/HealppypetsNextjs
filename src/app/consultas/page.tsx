import { generateMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import ConsultasLandingClient from "@/components/landing/ConsultasLandingClient";

export const metadata = generateMetadata({
  title: "Consulta Veterinaria desde $15 | Healppypets",
  description: "Consultas veterinarias completas en HealppyPets: diagnóstico, tratamiento y seguimiento para tu mascota.",
  url: "/consultas",
});

const consultasServiceSchema = generateServiceSchema("consulta");
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio", url: "/" },
  { name: "Consultas", url: "/consultas" },
]);

export default function ConsultasLandingPage() {
  return (
    <>
      <Script id="consultas-service-schema" type="application/ld+json">{JSON.stringify(consultasServiceSchema)}</Script>
      <Script id="consultas-breadcrumb-schema" type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</Script>
      <ConsultasLandingClient />
    </>
  );
}