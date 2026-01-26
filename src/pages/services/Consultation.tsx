import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import serviceImage from "@/assets/service-consultation.jpg";

const Consultation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <img 
          src={serviceImage} 
          alt="Consultation and Advisory" 
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
                { label: "Consultation" }
              ]} 
            />
            
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
      <Footer />
    </div>
  );
};

export default Consultation;
