import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({ title: "Tapan & Partners — Architecture & Interior Design in Budapest", description: "Budapest-based architecture and interior design studio specializing in residential, commercial, and renovation projects." });
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
