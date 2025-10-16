import { generateMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import FarmaciaLandingClient from "@/components/landing/FarmaciaLandingClient";

export const metadata = generateMetadata({
  title: "Farmacia Veterinaria | Healppypets",
  description: "Encuentra medicamentos, suplementos y productos de calidad para el cuidado de tu mascota en nuestra farmacia veterinaria en Quito.",
  url: "/farmacia",
});

const farmaciaServiceSchema = generateServiceSchema("farmacia");
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio", url: "/" },
  { name: "Farmacia", url: "/farmacia" },
]);

export default function FarmaciaPage() {
  return (
    <>
      <Script id="farmacia-service-schema" type="application/ld+json">{JSON.stringify(farmaciaServiceSchema)}</Script>
      <Script id="farmacia-breadcrumb-schema" type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</Script>
  <FarmaciaLandingClient />
    </>
  );
}