import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Consultation = () => {
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
              <span className="text-minimal text-muted-foreground">05</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">
                Consultation · Advisory
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Strategic guidance for design direction, feasibility, and planning
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Expert Guidance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Not every engagement requires a full design commission. Our consultation 
                  services provide expert architectural perspective for projects at any 
                  stage, helping you make informed decisions with confidence.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">What We Offer</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="border-l-2 border-architectural pl-6">
                    Feasibility studies and site analysis
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Design review and second opinions
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Space planning and programming
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Regulatory and zoning consultation
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Project scoping and brief development
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">When to Engage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're exploring a property purchase, seeking a fresh perspective 
                  on an ongoing project, or need help defining your project goals, our 
                  advisory services provide clarity and direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
