import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import mekanLogo from "@/assets/mekan-logo.png";
import mekanLogoWhite from "@/assets/mekan-logo-white.png";
import serviceImage from "@/assets/service-furniture.jpg";

const FurnitureDesign = () => {
  const { theme } = useTheme();
  const currentLogo = theme === "dark" ? mekanLogoWhite : mekanLogo;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <img 
          src={serviceImage} 
          alt="Furniture Design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
      </div>
      
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: "Services", href: "/services" },
                { label: "Furniture Design" }
              ]} 
            />
            
            <div className="mb-12">
              <span className="text-minimal text-muted-foreground">06</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">
                Furniture Design
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bespoke furniture solutions crafted to complement your architectural vision
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Our Partner</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We collaborate with Mekan Furniture, a premier furniture design studio 
                  specializing in custom pieces that seamlessly integrate with architectural 
                  spaces. Their craftsmanship and attention to detail align perfectly with 
                  our design philosophy.
                </p>
                
                <a 
                  href="https://mekanfurniture.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 p-8 border border-architectural/20 rounded-lg hover:border-architectural/40 transition-colors duration-300 group"
                >
                  <img 
                    src={currentLogo} 
                    alt="Mekan Furniture" 
                    className="h-12 object-contain"
                  />
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>Visit Mekan Furniture</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">What We Offer</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="border-l-2 border-architectural pl-6">
                    Custom furniture design and fabrication
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Built-in furniture solutions
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Material and finish consultation
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Space-specific furniture planning
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Furniture restoration and refinishing
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Our Approach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece of furniture should tell a story and serve a purpose. 
                  Working closely with Mekan, we design furniture that responds to the 
                  unique character of each space, creating cohesive environments where 
                  architecture and furnishings speak the same design language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FurnitureDesign;
