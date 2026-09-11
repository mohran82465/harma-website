import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Direction, PageId } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  dir: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.en;
  currentPage: PageId;
  navigateTo: (page: PageId, detailId?: string) => void;
  currentDetailId?: string;
  isDemoModalOpen: boolean;
  openDemoModal: (presetProduct?: 'mudabbir' | 'khetat' | 'both') => void;
  closeDemoModal: () => void;
  demoModalPreset: 'mudabbir' | 'khetat' | 'both';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic as primary Saudi market language
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentDetailId, setCurrentDetailId] = useState<string | undefined>(undefined);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalPreset, setDemoModalPreset] = useState<'mudabbir' | 'khetat' | 'both'>('both');

  const dir: Direction = lang === 'ar' ? 'rtl' : 'ltr';

  // Synchronize HTML attributes with current language
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const parts = hash.split('/');
      const page = parts[0] as PageId;
      const detail = parts[1];

      const validPages: PageId[] = ['home', 'about', 'mudabbir', 'khetat', 'partners', 'news', 'blog', 'careers', 'help'];
      if (validPages.includes(page)) {
        setCurrentPage(page);
        setCurrentDetailId(detail);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, detailId?: string) => {
    setCurrentPage(page);
    setCurrentDetailId(detailId);
    if (detailId) {
      window.location.hash = `${page}/${detailId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const openDemoModal = (preset: 'mudabbir' | 'khetat' | 'both' = 'both') => {
    setDemoModalPreset(preset);
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir,
        setLanguage,
        toggleLanguage,
        t,
        currentPage,
        navigateTo,
        currentDetailId,
        isDemoModalOpen,
        openDemoModal,
        closeDemoModal,
        demoModalPreset,
      }}
    >
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
