import { generateMetadata } from "@/lib/metadata";
import { primeraCitaSchema } from "@/lib/schema";
import Script from "next/script";
import PrimeraCitaLandingClient from "@/components/landing/PrimeraCitaLandingClient";

export const metadata = generateMetadata({
  title: "Primera Cita - 20% OFF | Healppypets",
  description: "Promoción permanente para nuevos clientes: 20% de descuento en tu primera cita (grooming, consulta o vacunación).",
  url: "/primera-cita",
});

export default function PrimeraCitaLanding() {
  return (
    <>
      <Script id="primera-cita-schema" type="application/ld+json">
        {JSON.stringify(primeraCitaSchema)}
      </Script>
      <PrimeraCitaLandingClient />
    </>
  );
}