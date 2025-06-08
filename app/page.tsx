import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QueHacemos from "@/components/QueHacemos";
import Servicios from "@/components/Servicios";
import Beneficios from "@/components/Beneficios";
import Portafolio from "@/components/Portafolio";
import Testimonios from "@/components/Testimonios";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <QueHacemos />
      <Servicios />
      <Beneficios />
      <Portafolio />
      <Testimonios />
      <ContactForm />
      <Footer />
    </main>
  );
}
