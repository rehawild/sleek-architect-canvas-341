import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  useSEO({ title: t("seo.privacyTitle"), description: t("seo.privacyDesc") });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-light text-foreground mb-12">{t("privacy.title")}</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
          <p>{t("privacy.lastUpdated")}</p>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">{t("privacy.s1Title")}</h2>
            <p>
              {t("privacy.s1Text")}{" "}
              <a href="mailto:admin@tapanpartners.com" className="underline text-foreground hover:text-foreground/80">admin@tapanpartners.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">{t("privacy.s2Title")}</h2>
            <p>{t("privacy.s2Text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">{t("privacy.s3Title")}</h2>
            <p>{t("privacy.s3Text")}</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>{t("privacy.s3List1")}</li>
              <li>{t("privacy.s3List2")}</li>
              <li>{t("privacy.s3List3")}</li>
              <li>{t("privacy.s3List4")}</li>
            </ul>
            <p>
              {t("privacy.s3Text2")}{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-foreground hover:text-foreground/80">{t("privacy.s3Link")}</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">{t("privacy.s4Title")}</h2>
            <p>
              {t("privacy.s4Text")} <strong className="text-foreground">{t("privacy.s4Bold")}</strong> {t("privacy.s4Text2")}
            </p>
            <p>{t("privacy.s4Text3")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">{t("privacy.s5Title")}</h2>
            <p>{t("privacy.s5Text")}</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>{t("privacy.s5List1")}</li>
              <li>{t("privacy.s5List2")}</li>
              <li>{t("privacy.s5List3")}</li>
            </ul>
            <p>
              {t("privacy.s5Text2")}{" "}
              <a href="mailto:admin@tapanpartners.com" className="underline text-foreground hover:text-foreground/80">admin@tapanpartners.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">{t("privacy.s6Title")}</h2>
            <p>{t("privacy.s6Text")}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
