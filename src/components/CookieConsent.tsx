import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === null) {
      setVisible(true);
    } else if (consent === "accepted") {
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    enableAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
      <div className="container mx-auto max-w-4xl bg-card border border-border rounded-lg p-4 md:p-6 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          {t("cookie.message")}{" "}
          <a href="/privacy-policy" className="underline text-foreground hover:text-foreground/80">
            {t("cookie.learnMore")}
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={handleDecline}>{t("cookie.decline")}</Button>
          <Button size="sm" onClick={handleAccept}>{t("cookie.accept")}</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
