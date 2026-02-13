import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations, LanguageCode } from "./translations";

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }

  const { language } = context;
  const currentTranslations = translations[language as LanguageCode];

  return {
    t: (key: string): string => {
      const keys = key.split(".");
      let value: any = currentTranslations;

      for (const k of keys) {
        value = value?.[k];
      }

      return value || key;
    },
    language,
    translations: currentTranslations,
  };
};
