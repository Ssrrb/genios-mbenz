import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ServicesGrid from "@/components/landing/ServicesGrid";
import ContactSection from "@/components/landing/ContactSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesGrid />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
