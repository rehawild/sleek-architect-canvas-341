import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArchitecturalDesign = () => {
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
              <span className="text-minimal text-muted-foreground">01</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">
                Architectural Design
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Thoughtful spaces shaped by context, craft, and clarity of vision
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Our Approach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every project begins with deep listening and careful observation. We study the site, 
                  understand the climate, and immerse ourselves in the local context to create designs 
                  that feel both inevitable and surprising.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">What We Offer</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="border-l-2 border-architectural pl-6">
                    Concept development and schematic design
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Design development and construction documents
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    3D visualization and physical models
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Sustainable design strategies
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Construction administration
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Project Types</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We work across scales and typologies—from intimate residential projects to 
                  larger commercial and cultural buildings. Each project receives the same 
                  level of attention and dedication to craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturalDesign;
