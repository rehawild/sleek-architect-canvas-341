import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Architectural Design",
      description: "Thoughtful spaces shaped by context, craft, and clarity of vision",
      slug: "architectural-design"
    },
    {
      number: "02", 
      title: "Interior Design",
      description: "Curated environments that balance function with refined aesthetics",
      slug: "interior-design"
    },
    {
      number: "03",
      title: "Renovation · Adaptive Reuse",
      description: "Breathing new life into existing structures with modern sensibility",
      slug: "renovation"
    },
    {
      number: "04",
      title: "Construction · Project Management",
      description: "Seamless execution from concept to completion, on time and on budget",
      slug: "construction"
    },
    {
      number: "05",
      title: "Consultation · Advisory",
      description: "Strategic guidance for design direction, feasibility, and planning",
      slug: "consultation"
    },
    {
      number: "06",
      title: "Furniture Design",
      description: "Bespoke furniture solutions in partnership with Mekan Furniture",
      slug: "furniture-design"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-32 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h1 className="text-minimal text-muted-foreground mb-4">SERVICES</h1>
              <h2 className="text-4xl md:text-6xl font-light text-architectural">
                What We Do
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {services.map((service, index) => (
                <Link 
                  to={`/services/${service.slug}`} 
                  key={index} 
                  className="group block border-b border-transparent hover:border-border pb-6 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                          {service.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;