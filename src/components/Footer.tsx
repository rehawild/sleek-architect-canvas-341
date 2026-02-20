import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <Link to="/" className="text-2xl font-light text-architectural mb-4 block">
                T&P
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">{t("footer.tagline")}</p>
            </div>

            <div>
              <h4 className="text-minimal text-muted-foreground mb-4">{t("footer.navigate")}</h4>
              <nav className="space-y-3">
                <Link to="/work" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">{t("footer.work")}</Link>
                <Link to="/services" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">{t("footer.services")}</Link>
                <Link to="/about" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">{t("footer.about")}</Link>
                <Link to="/contact" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">{t("footer.contact")}</Link>
              </nav>
            </div>

            <div>
              <h4 className="text-minimal text-muted-foreground mb-4">{t("footer.contactLabel")}</h4>
              <div className="space-y-3">
                <a href="mailto:admin@tapanpartners.com" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">admin@tapanpartners.com</a>
                <a href="tel:+36702281815" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">+36 70 228 18 15</a>
                <address className="not-italic text-muted-foreground">1056, Irányi u. 18<br />Budapest, HU</address>
              </div>
            </div>

            <div>
              <h4 className="text-minimal text-muted-foreground mb-4">{t("footer.follow")}</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/tapanandpartners" target="_blank" rel="noopener noreferrer" className="p-2 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/tapan-and-partners" target="_blank" rel="noopener noreferrer" className="p-2 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} {t("footer.copyright")}</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.privacyPolicy")}</Link>
              <p className="text-sm text-muted-foreground">{t("footer.location")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
