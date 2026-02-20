import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import mekanLogo from "@/assets/mekan-logo.png";
import mekanLogoWhite from "@/assets/mekan-logo-white.png";
import serviceImage from "@/assets/service-furniture.jpg";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/i18n/LanguageContext";

const FurnitureDesign = () => {
  const { t } = useLanguage();
  useSEO({ title: t("seo.furnitureTitle"), description: t("seo.furnitureDesc") });
  const { theme } = useTheme();
  const prefersDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  const isDarkTheme = theme === "dark" || (theme === "system" && prefersDark);
  const currentLogo = isDarkTheme ? mekanLogoWhite : mekanLogo;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="w-full h-[50vh] relative overflow-hidden">
        <img src={serviceImage} alt={t("furniture.title")} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
      </div>
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb items={[{ label: t("nav.services"), href: "/services" }, { label: t("furniture.breadcrumb") }]} />
            <div className="mb-12">
              <span className="text-minimal text-muted-foreground">06</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">{t("furniture.title")}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{t("furniture.subtitle")}</p>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-architectural mb-4">{t("furniture.h1")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{t("furniture.p1")}</p>
                <a href="https://mekanfurniture.co/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-6 p-8 border border-architectural/20 rounded-lg hover:border-architectural/40 transition-colors duration-300 group">
                  <div className="h-12 w-48 shrink-0 flex items-center justify-start">
                    <img src={currentLogo} alt="Mekan Furniture" className={`h-10 w-auto object-contain ${isDarkTheme ? "scale-125 origin-left" : ""}`} />
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>{t("furniture.visitMekan")}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>
              <div><h2 className="text-2xl font-light text-architectural mb-4">{t("furniture.h2")}</h2>
                <ul className="space-y-4 text-muted-foreground">
                  {["offer1","offer2","offer3","offer4","offer5"].map(k => <li key={k} className="border-l-2 border-architectural pl-6">{t(`furniture.${k}`)}</li>)}
                </ul>
              </div>
              <div><h2 className="text-2xl font-light text-architectural mb-4">{t("furniture.h3")}</h2><p className="text-muted-foreground leading-relaxed">{t("furniture.p3")}</p></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default FurnitureDesign;
