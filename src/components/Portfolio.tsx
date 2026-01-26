import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "BMW Electric Car Factory",
      city: "Debrecen",
      clients: ["BMW Manufacturing Hungary Kft.", "Kagel LTD."],
      slug: "bmw-factory"
    },
    {
      image: project2,
      title: "City Pearl Apartments",
      city: "Budapest",
      clients: ["CITY PEARL INTERNATIONAL Kft.", "APD"],
      slug: "city-pearl"
    }
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Our Projects
            </h3>
          </div>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <Link 
                to="/work" 
                key={index} 
                className="group block cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* View Project Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-background/90 backdrop-blur-sm px-6 py-3 flex items-center space-x-2">
                      <span className="text-minimal text-foreground">VIEW PROJECT</span>
                      <ArrowUpRight className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {project.city}
                  </p>
                  <div className="pt-4 border-t border-border space-y-1">
                    {project.clients.map((client, clientIndex) => (
                      <p key={clientIndex} className="text-sm text-muted-foreground">
                        {client}
                      </p>
                    ))}
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

export default Portfolio;