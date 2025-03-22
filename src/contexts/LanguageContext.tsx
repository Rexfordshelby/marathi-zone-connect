
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import enTranslations from '@/translations/en';
import mrTranslations from '@/translations/mr';

type Language = 'en' | 'mr';
type Translations = typeof enTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  const [translations, setTranslations] = useState<Translations>(enTranslations);

  useEffect(() => {
    // Save the language preference to localStorage
    localStorage.setItem('language', language);
    
    // Update translations based on selected language
    setTranslations(language === 'en' ? enTranslations : mrTranslations);
    
    // Update the HTML lang attribute
    document.documentElement.lang = language;
    
    // Optional: Update font for Marathi text
    if (language === 'mr') {
      document.body.classList.add('font-marathi');
    } else {
      document.body.classList.remove('font-marathi');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'mr' : 'en'));
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    if (typeof result === 'string') {
      return result;
    }
    
    console.warn(`Translation for key ${key} is not a string:`, result);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
