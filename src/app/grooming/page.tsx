import { generateMetadata } from "@/lib/metadata";
import { generateServiceSchema } from "@/lib/schema";
import Script from "next/script";
import GroomingLandingClient from "@/components/landing/GroomingLandingClient";

export const metadata = generateMetadata({
  title: "Peluquería Canina Carcelén desde $20 | Healppypets",
  description: "Peluquería canina y corte de pelo para perros en Carcelén. Baño, corte profesional, uñas y más. Tu mascota lucirá hermosa.",
  keywords: ["peluquería canina Carcelén", "corte de pelo perros Carcelén", "baño mascotas Carcelén", "grooming Carcelén"],
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