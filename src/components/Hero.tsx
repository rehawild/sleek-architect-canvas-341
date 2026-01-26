import heroImage from "@/assets/hero-architecture.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const handleScrollClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-4 reveal">
          Tapan & Partners
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 font-light tracking-widest reveal-delayed">
          architecture & more
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={handleScrollClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed cursor-pointer group"
        aria-label="Scroll to services"
      >
        <div className="flex flex-col items-center">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce group-hover:text-white transition-colors duration-300" />
          <ChevronDown className="w-8 h-8 text-white/40 -mt-4 animate-bounce animation-delay-150 group-hover:text-white/60 transition-colors duration-300" />
        </div>
      </button>
    </section>
  );
};

export default Hero;