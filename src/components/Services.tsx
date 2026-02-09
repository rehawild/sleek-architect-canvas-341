import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import architecturalImg from "@/assets/service-architectural.jpg";
import constructionImg from "@/assets/service-construction.jpg";
import furnitureImg from "@/assets/service-furniture.jpg";

const Services = () => {
  const featuredServices = [
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Link 
                to={`/services/${service.slug}`} 
                key={index} 
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {service.number}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <h4 className="text-xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500 mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-lg hover:text-muted-foreground transition-colors duration-300 group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
