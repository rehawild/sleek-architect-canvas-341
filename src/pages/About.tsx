import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  useSEO({ title: t("seo.aboutTitle"), description: t("seo.aboutDesc") });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-32 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">{t("aboutPage.heading")}</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">{t("aboutPage.subheading")}</h2>
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutPage.p1")}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutPage.p2")}</p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">{t("aboutPage.approach")}</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">{t("aboutPage.research")}</h4>
                      <p className="text-muted-foreground">{t("aboutPage.researchDesc")}</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">{t("aboutPage.collaboration")}</h4>
                      <p className="text-muted-foreground">{t("aboutPage.collaborationDesc")}</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">{t("aboutPage.innovation")}</h4>
                      <p className="text-muted-foreground">{t("aboutPage.innovationDesc")}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">{t("aboutPage.founded")}</h3>
                      <p className="text-xl">2024</p>
                    </div>
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">{t("aboutPage.projects")}</h3>
                      <p className="text-xl">20+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-32">
              <h2 className="text-minimal text-muted-foreground mb-8">{t("aboutPage.team")}</h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="group">
                  <div className="aspect-[3/4] bg-muted mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-6xl font-light text-muted-foreground/40">MT</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-architectural mb-2">Mertkan Tapan</h3>
                  <p className="text-muted-foreground">{t("aboutPage.founderRole")}</p>
                </div>
                <div className="group">
                  <div className="aspect-[3/4] bg-muted mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-6xl font-light text-muted-foreground/40">MAT</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-architectural mb-2">Meltem Akman Tapan</h3>
                  <p className="text-muted-foreground">{t("aboutPage.coFounderRole")}</p>
                </div>
                <div className="group">
                  <div className="aspect-[3/4] bg-muted mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-6xl font-light text-muted-foreground/40">AH</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-architectural mb-2">Alexa Harkai</h3>
                  <p className="text-muted-foreground">{t("aboutPage.partnerRole")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
