import { generateMetadata } from "@/lib/metadata";
import { generateServiceSchema } from "@/lib/schema";
import Script from "next/script";
import GroomingLandingClient from "@/components/landing/GroomingLandingClient";

export const metadata = generateMetadata({
  title: "Grooming Express desde $20 | Healppypets",
  description: "Grooming profesional en Carcelén. Baño, corte, uñas y más. Tu mascota saldrá hermosa en 2 horas.",
  url: "/grooming",
});

export default function GroomingLanding() {
  return (
    <>
      <Script id="grooming-schema" type="application/ld+json">
        {JSON.stringify(generateServiceSchema("grooming"))}
      </Script>
      <GroomingLandingClient />
    </>
  );
}