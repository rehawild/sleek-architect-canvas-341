import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectDetailDialog from "@/components/ProjectDetailDialog";
import { projects, type Project } from "@/data/projects";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/i18n/LanguageContext";

const Work = () => {
  const { t } = useLanguage();
  useSEO({ title: t("seo.workTitle"), description: t("seo.workDesc") });
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const categories = [
    { key: "ALL", label: t("work.filterAll") },
    { key: "INDUSTRIAL", label: t("work.filterIndustrial") },
    { key: "COMMERCIAL", label: t("work.filterCommercial") },
    { key: "RESIDENTIAL", label: t("work.filterResidential") },
    { key: "INTERIOR DESIGN", label: t("work.filterInterior") },
    { key: "ARCHITECTURE", label: t("work.filterArchitecture") },
  ];

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                {t("work.title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {t("work.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === cat.key 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                    activeCategory === cat.key 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative overflow-hidden mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105 ${project.grayscale && !project.coverColorOn ? "grayscale" : ""}`}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">{project.category}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500">{project.title}</h3>
                    <p className="text-lg text-muted-foreground">{project.city}</p>
                    <div className="pt-4 border-t border-border space-y-1">
                      {project.clients.map((client, clientIndex) => (
                        <p key={clientIndex} className="text-sm text-muted-foreground">{client}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              {t("work.ctaTitle1")}<br />{t("work.ctaTitle2")}
            </h2>
            <p className="text-xl text-muted-foreground mb-12">{t("work.ctaDescription")}</p>
            <Link 
              to="/contact" 
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              {t("work.ctaCta")}
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
      
      <ProjectDetailDialog project={selectedProject} open={dialogOpen} onOpenChange={setDialogOpen} />
      <Footer />
    </div>
  );
};

export default Work;
