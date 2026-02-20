import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-minimal text-muted-foreground mb-4">{t("contactCta.heading")}</h2>
          <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
            {t("contactCta.subheading1")}
            <br />
            {t("contactCta.subheading2")}
          </h3>
          
          <Button asChild size="lg" className="px-12">
            <Link to="/contact">{t("contactCta.cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
