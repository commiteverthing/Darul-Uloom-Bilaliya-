import { createContext, useContext, useState, useEffect } from 'react';
import { detectLanguage, setLanguage, LANGUAGES, translations } from '../lib/i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const detected = detectLanguage();
    setLang(detected);
    document.documentElement.dir = LANGUAGES[detected]?.dir || 'ltr';
    document.documentElement.lang = detected;
    setReady(true);
  }, []);

  const switchLang = (newLang) => {
    setLang(newLang);
    setLanguage(newLang);
    document.documentElement.dir = LANGUAGES[newLang]?.dir || 'ltr';
    document.documentElement.lang = newLang;
  };

  const getTranslated = (key) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang, ready, getTranslated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return {
    lang: ctx.lang,
    setLang: ctx.switchLang,
    ready: ctx.ready,
    t: ctx.getTranslated,
    isRtl: ['ur', 'fa', 'ar'].includes(ctx.lang),
  };
}
