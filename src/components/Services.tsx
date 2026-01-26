import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import architecturalImg from "@/assets/service-architectural.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import renovationImg from "@/assets/service-renovation.jpg";
import constructionImg from "@/assets/service-construction.jpg";
import consultationImg from "@/assets/service-consultation.jpg";
import furnitureImg from "@/assets/service-furniture.jpg";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Architectural Design",
      description: "Thoughtful spaces shaped by context, craft, and clarity of vision",
      slug: "architectural-design",
      image: architecturalImg
    },
    {
      number: "02", 
      title: "Interior Design",
      description: "Curated environments that balance function with refined aesthetics",
      slug: "interior-design",
      image: interiorImg
    },
    {
      number: "03",
      title: "Renovation · Adaptive Reuse",
      description: "Breathing new life into existing structures with modern sensibility",
      slug: "renovation",
      image: renovationImg
    },
    {
      number: "04",
      title: "Construction · Project Management",
      description: "Seamless execution from concept to completion, on time and on budget",
      slug: "construction",
      image: constructionImg
    },
    {
      number: "05",
      title: "Consultation · Advisory",
      description: "Strategic guidance for design direction, feasibility, and planning",
      slug: "consultation",
      image: consultationImg
    },
    {
      number: "06",
      title: "Furniture Design",
      description: "Bespoke furniture solutions in partnership with Mekan Furniture",
      slug: "furniture-design",
      image: furnitureImg
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SERVICES</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              What We Do
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service, index) => (
              <Link 
                to={`/services/${service.slug}`} 
                key={index} 
                className="group block border-b border-transparent hover:border-border pb-6 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Thumbnail Image */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {service.number}
                    </span>
                    <div className="flex items-center justify-between mt-2">
                      <h4 className="text-xl md:text-2xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {service.title}
                      </h4>
                      <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed mt-3 text-sm md:text-base">
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
  );
};

export default Services;
