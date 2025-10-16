import { generateMetadata } from "@/lib/metadata";
import { vacunacionSchema } from "@/lib/schema";
import Script from "next/script";
import VacunacionLandingClient from "@/components/landing/VacunacionLandingClient";

export const metadata = generateMetadata({
  title: "Vacunación Completa desde $20 | Healppypets",
  description: "Plan de vacunación personalizado para cachorros y adultos en HealppyPets. Protege a tu mascota desde el primer mes.",
  url: "/vacunacion",
});

export default function VacunacionLanding() {
  return (
    <>
      <Script id="vacunacion-schema" type="application/ld+json">
        {JSON.stringify(vacunacionSchema)}
      </Script>
      <VacunacionLandingClient />
    </>
  );
}
