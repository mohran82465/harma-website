import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';
import { 
  ChevronDown, 
  Globe, 
  Menu, 
  X, 
  Hotel, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';

export const Header: React.FC = () => {
  const { lang, dir, toggleLanguage, t, currentPage, navigateTo, openDemoModal } = useLanguage();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    // Products has custom dropdown
    { id: 'partners', label: t.nav.partners },
    { id: 'news', label: t.nav.news },
    { id: 'blog', label: t.nav.blog },
    { id: 'careers', label: t.nav.careers },
    { id: 'help', label: t.nav.help },
  ];

  const handleNavClick = (page: PageId) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  const isProductActive = currentPage === 'mudabbir' || currentPage === 'khetat';

  return (
    <header className="sticky top-0 z-40 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#ded2cb]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="shrink-0">
            <Logo variant="dark" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                currentPage === 'home'
                  ? 'text-[#765a4c] font-semibold bg-[#efe8e3]/70'
                  : 'text-[#4a362c] hover:text-[#765a4c] hover:bg-[#f9f6f4]'
              }`}
            >
              {t.nav.home}
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                currentPage === 'about'
                  ? 'text-[#765a4c] font-semibold bg-[#efe8e3]/70'
                  : 'text-[#4a362c] hover:text-[#765a4c] hover:bg-[#f9f6f4]'
              }`}
            >
              {t.nav.about}
            </button>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isProductActive
                    ? 'text-[#765a4c] font-semibold bg-[#efe8e3]/70'
                    : 'text-[#4a362c] hover:text-[#765a4c] hover:bg-[#f9f6f4]'
                }`}
                aria-expanded={isProductsOpen}
              >
                <span>{t.nav.products}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180 text-[#765a4c]' : 'text-[#a38474]'}`} />
              </button>

              {/* Dropdown Panel */}
              {isProductsOpen && (
                <div 
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className={`absolute top-full mt-1.5 w-96 rounded-2xl bg-[#ffffff] border border-[#ded2cb] shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                    dir === 'rtl' ? 'right-0' : 'left-0'
                  }`}
                >
                  <div className="space-y-1.5">
                    {/* Mudabbir Link */}
                    <div
                      onClick={() => handleNavClick('mudabbir')}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all duration-150 border group ${
                        currentPage === 'mudabbir' 
                          ? 'bg-[#f9f6f4] border-[#765a4c]' 
                          : 'border-transparent hover:bg-[#f9f6f4] hover:border-[#ded2cb]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#765a4c] text-[#ffffff] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                          <Hotel className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-[#35261f] group-hover:text-[#765a4c] transition-colors">
                              {t.nav.mudabbir}
                            </span>
                            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#efe8e3] text-[#765a4c]">
                              {lang === 'ar' ? 'فندقي وريادي' : 'ERP'}
                            </span>
                          </div>
                          <p className="text-xs text-[#5f473c] mt-1 leading-relaxed line-clamp-2">
                            {t.nav.mudabbirDesc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Khetat Link */}
                    <div
                      onClick={() => handleNavClick('khetat')}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all duration-150 border group ${
                        currentPage === 'khetat' 
                          ? 'bg-[#f9f6f4] border-[#765a4c]' 
                          : 'border-transparent hover:bg-[#f9f6f4] hover:border-[#ded2cb]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#35261f] text-[#ffffff] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-[#35261f] group-hover:text-[#765a4c] transition-colors">
                              {t.nav.khetat}
                            </span>
                            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#efe8e3] text-[#765a4c]">
                              {lang === 'ar' ? 'متعدد الشركات' : 'SaaS'}
                            </span>
                          </div>
                          <p className="text-xs text-[#5f473c] mt-1 leading-relaxed line-clamp-2">
                            {t.nav.khetatDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Footer */}
                  <div className="mt-2 pt-2 border-t border-[#efe8e3] px-3 py-1 flex items-center justify-between text-[11px] text-[#765a4c]">
                    <span className="flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {t.compliance.zatca}
                    </span>
                    <span className="flex items-center gap-1 text-[#5f473c]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      100% KSA
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Remaining Nav Items */}
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  currentPage === item.id
                    ? 'text-[#765a4c] font-semibold bg-[#efe8e3]/70'
                    : 'text-[#4a362c] hover:text-[#765a4c] hover:bg-[#f9f6f4]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Cluster: Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-[#ded2cb] bg-[#ffffff] hover:bg-[#f9f6f4] text-[#4a362c] hover:text-[#765a4c] transition-all active:scale-95 shadow-2xs"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
              aria-label="Language Switcher"
            >
              <Globe className="w-4 h-4 text-[#765a4c]" />
              <span className="tracking-wide">{lang === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
            </button>

            {/* Request Demo Button */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => openDemoModal()}
              icon={<ArrowIcon className="w-4 h-4" />}
            >
              {t.nav.requestDemo}
            </Button>
          </div>

          {/* Mobile Actions: Language Switcher & Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[#ded2cb] bg-[#ffffff] text-[#4a362c]"
              aria-label="Language Switcher Mobile"
            >
              <Globe className="w-3.5 h-3.5 text-[#765a4c]" />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#4a362c] hover:bg-[#f9f6f4] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#765a4c]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#ded2cb] bg-[#ffffff] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`text-start px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPage === 'home' ? 'bg-[#efe8e3] text-[#765a4c] font-semibold' : 'text-[#4a362c]'
              }`}
            >
              {t.nav.home}
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`text-start px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPage === 'about' ? 'bg-[#efe8e3] text-[#765a4c] font-semibold' : 'text-[#4a362c]'
              }`}
            >
              {t.nav.about}
            </button>

            {/* Mobile Products Accordion */}
            <div className="border-y border-[#efe8e3] py-2 my-1">
              <button
                type="button"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-[#4a362c]"
              >
                <span>{t.nav.products}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180 text-[#765a4c]' : ''}`} />
              </button>

              {isMobileProductsOpen && (
                <div className="pl-4 pr-4 mt-2 space-y-2">
                  <div
                    onClick={() => handleNavClick('mudabbir')}
                    className={`p-3 rounded-lg border ${
                      currentPage === 'mudabbir' ? 'border-[#765a4c] bg-[#f9f6f4]' : 'border-[#ded2cb] bg-[#ffffff]'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-medium text-sm text-[#35261f]">
                      <Hotel className="w-4 h-4 text-[#765a4c]" />
                      <span>{t.nav.mudabbir}</span>
                    </div>
                    <p className="text-xs text-[#5f473c] mt-1">{t.nav.mudabbirDesc}</p>
                  </div>

                  <div
                    onClick={() => handleNavClick('khetat')}
                    className={`p-3 rounded-lg border ${
                      currentPage === 'khetat' ? 'border-[#765a4c] bg-[#f9f6f4]' : 'border-[#ded2cb] bg-[#ffffff]'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-medium text-sm text-[#35261f]">
                      <Layers className="w-4 h-4 text-[#765a4c]" />
                      <span>{t.nav.khetat}</span>
                    </div>
                    <p className="text-xs text-[#5f473c] mt-1">{t.nav.khetatDesc}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Other Mobile Nav Items */}
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-start px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === item.id ? 'bg-[#efe8e3] text-[#765a4c] font-semibold' : 'text-[#4a362c]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-[#efe8e3]">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openDemoModal();
                }}
                icon={<ArrowIcon className="w-4 h-4" />}
              >
                {t.nav.requestDemo}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
