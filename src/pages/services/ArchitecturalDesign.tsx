import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import serviceImage from "@/assets/service-architectural.jpg";

const ArchitecturalDesign = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <img 
          src={serviceImage} 
          alt="Architectural Design" 
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
                { label: "Architectural Design" }
              ]} 
            />
            
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
      <Footer />
    </div>
  );
};

export default ArchitecturalDesign;
