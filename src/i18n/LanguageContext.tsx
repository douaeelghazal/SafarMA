import React, { createContext, useState, ReactNode } from "react";
import { LanguageCode } from "./translations";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    // Try to get language from localStorage
    const saved = localStorage.getItem("safar-language");
    if (saved && ["en", "fr", "ar"].includes(saved)) {
      return saved as LanguageCode;
    }

    // Try to detect browser language
    const browserLang = navigator.language.split("-")[0].toLowerCase();
    if (browserLang === "fr") return "fr";
    if (browserLang === "ar") return "ar";

    return "en";
  });

  const handleSetLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
    localStorage.setItem("safar-language", lang);
    // Set HTML lang attribute for accessibility
    document.documentElement.lang = lang;
    // Set text direction for RTL languages
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
