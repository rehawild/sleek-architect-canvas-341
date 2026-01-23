import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const InteriorDesign = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/services" 
              className="inline-flex items-center text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="mb-12">
              <span className="text-minimal text-muted-foreground">02</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">
                Interior Design
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Curated environments that balance function with refined aesthetics
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Our Philosophy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Interior spaces should feel like natural extensions of their inhabitants. 
                  We create environments that are both beautiful and livable, where every 
                  detail serves a purpose and contributes to the whole.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">What We Offer</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="border-l-2 border-architectural pl-6">
                    Space planning and layout optimization
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Material and finish selection
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Custom furniture design
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Lighting design
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Art and accessory curation
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Our Process</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We begin with understanding how you live and work. From there, we develop 
                  concepts that reflect your personality while introducing unexpected elements 
                  that elevate the everyday experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesign;
