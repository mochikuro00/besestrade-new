import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Language, translations } from './i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)['zh']; // Default type is Chinese for TS
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default to Chinese as requested
  const [language, setLanguage] = useState<Language>('zh');
  const [t, setT] = useState(translations.zh);

  useEffect(() => {
    setT(translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
