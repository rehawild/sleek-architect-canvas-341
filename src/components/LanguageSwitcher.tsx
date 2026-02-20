import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/types";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hu", label: "HU" },
  { code: "tr", label: "TR" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`text-minimal transition-colors duration-300 px-1 ${
              language === lang.code
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && (
            <span className="text-muted-foreground/50 text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
