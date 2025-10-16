import { generateMetadata } from "@/lib/metadata";
import { consultasSchema } from "@/lib/schema";
import Script from "next/script";
import ConsultasLandingClient from "@/components/landing/ConsultasLandingClient";

export const metadata = generateMetadata({
  title: "Consulta Veterinaria desde $15 | Healppypets",
  description: "Consultas veterinarias completas en HealppyPets: diagnóstico, tratamiento y seguimiento para tu mascota.",
  url: "/consultas",
});

export default function ConsultasLanding() {
  return (
    <>
      <Script id="consultas-schema" type="application/ld+json">
        {JSON.stringify(consultasSchema)}
      </Script>
      <ConsultasLandingClient />
    </>
  );
}