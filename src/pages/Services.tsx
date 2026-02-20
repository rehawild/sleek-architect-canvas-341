import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import architecturalImg from "@/assets/service-architectural.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import renovationImg from "@/assets/service-renovation.jpg";
import constructionImg from "@/assets/service-construction.jpg";
import consultationImg from "@/assets/service-consultation.jpg";
import furnitureImg from "@/assets/service-furniture.jpg";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  useSEO({ title: t("seo.servicesTitle"), description: t("seo.servicesDesc") });

  const services = [
    { number: "01", title: t("servicesPage.s1.title"), description: t("servicesPage.s1.description"), slug: "architectural-design", image: architecturalImg },
    { number: "02", title: t("servicesPage.s2.title"), description: t("servicesPage.s2.description"), slug: "interior-design", image: interiorImg },
    { number: "03", title: t("servicesPage.s3.title"), description: t("servicesPage.s3.description"), slug: "renovation", image: renovationImg },
    { number: "04", title: t("servicesPage.s4.title"), description: t("servicesPage.s4.description"), slug: "construction", image: constructionImg },
    { number: "05", title: t("servicesPage.s5.title"), description: t("servicesPage.s5.description"), slug: "consultation", image: consultationImg },
    { number: "06", title: t("servicesPage.s6.title"), description: t("servicesPage.s6.description"), slug: "furniture-design", image: furnitureImg },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-32 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h1 className="text-minimal text-muted-foreground mb-4">{t("servicesPage.heading")}</h1>
              <h2 className="text-4xl md:text-6xl font-light text-architectural">{t("servicesPage.subheading")}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {services.map((service, index) => (
                <Link 
                  to={`/services/${service.slug}`} 
                  key={index} 
                  className="group block border-b border-transparent hover:border-border pb-6 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="text-minimal text-muted-foreground font-medium">{service.number}</span>
                      <div className="flex items-center justify-between mt-2">
                        <h3 className="text-xl md:text-2xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500">{service.title}</h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed mt-3 text-sm md:text-base">{service.description}</p>
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
