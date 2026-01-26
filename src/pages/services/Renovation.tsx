import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const Renovation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-32 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: "Services", href: "/services" },
                { label: "Renovation" }
              ]} 
            />
            
            <div className="mb-12">
              <span className="text-minimal text-muted-foreground">03</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">
                Renovation · Adaptive Reuse
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Breathing new life into existing structures with modern sensibility
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Honoring the Past</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Existing buildings carry stories and character that new construction cannot 
                  replicate. We approach renovation with respect for what exists while 
                  introducing contemporary interventions that enhance functionality and comfort.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">What We Offer</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="border-l-2 border-architectural pl-6">
                    Historic building assessment and documentation
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Adaptive reuse strategies
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Structural interventions and upgrades
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Energy efficiency improvements
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Heritage preservation consultation
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Sustainability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Renovation is inherently sustainable. By working with existing structures, 
                  we reduce waste and preserve embodied energy while creating spaces that 
                  meet contemporary performance standards.
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

export default Renovation;
