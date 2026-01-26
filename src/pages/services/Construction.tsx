import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const Construction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-32 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: "Services", href: "/services" },
                { label: "Construction" }
              ]} 
            />
            
            <div className="mb-12">
              <span className="text-minimal text-muted-foreground">04</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">
                Construction · Project Management
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Seamless execution from concept to completion, on time and on budget
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">End-to-End Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Great design requires great execution. Our project management services 
                  ensure that the vision developed during design is realized with precision, 
                  quality, and efficiency throughout the construction process.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">What We Offer</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="border-l-2 border-architectural pl-6">
                    Contractor selection and tendering
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Budget development and cost control
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Schedule management
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Quality assurance and site supervision
                  </li>
                  <li className="border-l-2 border-architectural pl-6">
                    Coordination with consultants and authorities
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain rigorous oversight throughout construction, ensuring that 
                  materials, craftsmanship, and details meet our exacting standards. 
                  The result is a finished project that matches the original vision.
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

export default Construction;
