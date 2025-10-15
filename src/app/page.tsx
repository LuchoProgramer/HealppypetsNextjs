import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import PreguntasFrecuentes from "@/components/home/PreguntasFrecuentes";

export default function Home() {
  return (
    <>
      {/* 1. EMOCIÓN - Propuesta de valor */}
      <Hero />
      
      {/* 2. CREDIBILIDAD - Quiénes somos y por qué confiar */}
      <AboutSection />
      
      {/* 3. SOLUCIÓN - Servicios y precios */}
      <ServicesGrid />
      
      {/* 4. PRUEBA SOCIAL - Testimonios */}
      <Testimonials />
      
      {/* 5. OBJECIONES - Preguntas frecuentes */}
      <PreguntasFrecuentes />
    </>
  );
}