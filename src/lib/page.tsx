import { generateMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import GroomingLandingClient from "@/components/landing/GroomingLandingClient";

export const metadata = generateMetadata({
  title: "Grooming Profesional para Mascotas | Healppypets",
  description: "Servicio de grooming y baño para perros y gatos en Carcelén, Quito. Mantén a tu mascota limpia, feliz y saludable con nuestros expertos.",
  url: "/grooming",
});

const groomingServiceSchema = generateServiceSchema("grooming");
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio", url: "/" },
  { name: "Grooming", url: "/grooming" },
]);

export default function GroomingPage() {
  return (
    <>
      <Script id="grooming-service-schema" type="application/ld+json">{JSON.stringify(groomingServiceSchema)}</Script>
      <Script id="grooming-breadcrumb-schema" type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</Script>
  <GroomingLandingClient />
    </>
  );
}