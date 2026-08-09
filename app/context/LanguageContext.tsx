
"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import en from "../../messages/en.json";
import fa from "../../messages/fa.json";

type Language = "en" | "fa";

const messages = {
  en,
  fa,
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  isPersian: boolean;
  t: typeof en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const isPersian = language === "fa";

  const t = messages[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isPersian,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
