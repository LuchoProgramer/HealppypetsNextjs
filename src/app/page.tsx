import Hero from "@/components/home/Hero";
import StorySection from "@/components/home/StorySection";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero Section - Primera impresión con storytelling */}
      <Hero />

      {/* Story Section - Nuestra historia emocional */}
      <StorySection />

      {/* Services Grid - Servicios principales */}
      <ServicesGrid />

      {/* Testimonials - Historias de éxito */}
      <Testimonials />

      {/* Contact & Appointment - Contacto y agendar */}
      <ContactSection />
    </>
  );
}