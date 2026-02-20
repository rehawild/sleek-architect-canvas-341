import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import serviceImage from "@/assets/service-interior.jpg";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/i18n/LanguageContext";

const InteriorDesign = () => {
  const { t } = useLanguage();
  useSEO({ title: t("seo.interiorTitle"), description: t("seo.interiorDesc") });
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="w-full h-[50vh] relative overflow-hidden">
        <img src={serviceImage} alt={t("interior.title")} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
      </div>
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb items={[{ label: t("nav.services"), href: "/services" }, { label: t("interior.breadcrumb") }]} />
            <div className="mb-12">
              <span className="text-minimal text-muted-foreground">02</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">{t("interior.title")}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{t("interior.subtitle")}</p>
            </div>
            <div className="space-y-12">
              <div><h2 className="text-2xl font-light text-architectural mb-4">{t("interior.h1")}</h2><p className="text-muted-foreground leading-relaxed">{t("interior.p1")}</p></div>
              <div><h2 className="text-2xl font-light text-architectural mb-4">{t("interior.h2")}</h2>
                <ul className="space-y-4 text-muted-foreground">
                  {["offer1","offer2","offer3","offer4","offer5"].map(k => <li key={k} className="border-l-2 border-architectural pl-6">{t(`interior.${k}`)}</li>)}
                </ul>
              </div>
              <div><h2 className="text-2xl font-light text-architectural mb-4">{t("interior.h3")}</h2><p className="text-muted-foreground leading-relaxed">{t("interior.p3")}</p></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default InteriorDesign;
