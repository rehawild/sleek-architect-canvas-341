import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Language, Translations } from "./types";
import { en } from "./en";
import { hu } from "./hu";
import { tr } from "./tr";

const translations: Record<Language, Translations> = { en, hu, tr };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: Translations, path: string): string {
  const keys = path.split(".");
  let current: Translations | string = obj;
  for (const key of keys) {
    if (typeof current === "string") return path;
    current = current[key];
    if (current === undefined) return path;
  }
  return typeof current === "string" ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return (stored === "hu" || stored === "tr") ? stored : "en";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }, []);

  const t = useCallback((key: string): string => {
    const value = getNestedValue(translations[language], key);
    if (value === key && language !== "en") {
      return getNestedValue(translations.en, key);
    }
    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
