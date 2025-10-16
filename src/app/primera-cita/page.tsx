import { generateMetadata } from "@/lib/metadata";
import Script from "next/script";
import PrimeraCitaLandingClient from "@/components/landing/PrimeraCitaLandingClient";

export const metadata = generateMetadata({
  title: "Primera Cita - 20% OFF | Healppypets",
  description: "Promoción permanente para nuevos clientes: 20% de descuento en tu primera cita (grooming, consulta o vacunación).",
  image: "/og-primera-cita.png", // Opcional: Crea una imagen específica para esta promo
  url: "/primera-cita",
});

const primeraCitaSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Primera Cita - 20% OFF",
  description: "Promoción permanente para nuevos clientes: 20% de descuento en tu primera cita (grooming, consulta o vacunación).",
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "USD",
    valueAddedTaxIncluded: true,
  },
  availability: "https://schema.org/InStock",
};

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