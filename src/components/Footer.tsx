import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './ui/Logo';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { PageId } from '../types';

export const Footer: React.FC = () => {
  const { lang, dir, t, navigateTo, openDemoModal } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const handleNav = (page: PageId) => {
    navigateTo(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#35261f] text-[#efe8e3] border-t border-[#4a362c]">
      
      {/* Top CTA Band */}
      <div className="bg-[#765a4c] border-b border-[#5f473c] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-start max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#efe8e3]/80 bg-[#5f473c] px-2.5 py-1 rounded-full">
              {lang === 'ar' ? 'حلول وطنية سيادية' : 'Sovereign Saudi Enterprise SaaS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#ffffff] mt-2 font-heading">
              {lang === 'ar' 
                ? 'جاهز لنقل إدارة منشأتك إلى مستوى جديد من الكفاءة والامتثال؟' 
                : 'Ready to elevate your property or enterprise operations?'}
            </h2>
            <p className="text-sm text-[#efe8e3]/90 mt-1.5">
              {lang === 'ar'
                ? 'انضم إلى نخبة الفنادق والشركات في المملكة التي تعتمد على نظم هارما المتوافقة كلياً مع زاتكا.'
                : 'Join leading hotels and enterprises across the Kingdom powered by Harma’s compliant cloud architecture.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openDemoModal()}
              className="bg-[#ffffff] text-[#765a4c] hover:bg-[#f9f6f4] font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all hover:scale-102 active:scale-98 flex items-center gap-2"
            >
              <span>{t.nav.requestDemo}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNav('help')}
              className="border border-[#efe8e3]/40 text-[#ffffff] hover:bg-[#5f473c] text-sm px-5 py-3 rounded-lg transition-colors"
            >
              {t.nav.contactUs}
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Corporate ID (Col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-xs sm:text-sm text-[#dfd4cc] leading-relaxed max-w-sm">
              {t.brand.description}
            </p>
            
            {/* Regulatory & Location badges */}
            <div className="space-y-2 pt-2 text-xs text-[#c5b0a3]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#efe8e3] shrink-0" />
                <span>{t.common.riyadh} - King Fahd Road, Al-Olaya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#efe8e3] shrink-0" />
                <span>contact@harma.sa / sales@harma.sa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#efe8e3] shrink-0" />
                <span dir="ltr">+966 11 450 8900</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-bold text-[#ffffff] uppercase tracking-wider mb-4 font-heading">
              {t.nav.products}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('mudabbir')}
                  className="text-[#dfd4cc] hover:text-[#ffffff] transition-colors text-start"
                >
                  {t.nav.mudabbir}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('khetat')}
                  className="text-[#dfd4cc] hover:text-[#ffffff] transition-colors text-start"
                >
                  {t.nav.khetat}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('partners')}
                  className="text-[#dfd4cc] hover:text-[#ffffff] transition-colors text-start"
                >
                  {t.nav.partners}
                </button>
              </li>
              <li>
                <button
                  onClick={() => openDemoModal('mudabbir')}
                  className="text-[#a78a7b] hover:text-[#ffffff] transition-colors text-start font-medium"
                >
                  {lang === 'ar' ? 'طلب تجربة مدبّر' : 'Test Drive Mudabbir'}
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold text-[#ffffff] uppercase tracking-wider mb-4 font-heading">
              {lang === 'ar' ? 'الشركة والمحتوى' : 'Company & Insights'}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-[#dfd4cc] hover:text-[#ffffff] transition-colors text-start"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('careers')}
                  className="text-[#dfd4cc] hover:text-[#ffffff] transition-colors text-start flex items-center gap-1.5"
                >
                  <span>{t.nav.careers}</span>
                  <span className="text-[10px] bg-[#765a4c] text-[#ffffff] px-1.5 py-0.2 rounded font-semibold">
                    {lang === 'ar' ? 'نوظف' : 'Hiring'}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('news')}
                  className="text-[#dfd4cc] hover:text-[#ffffff] transition-colors text-start"
                >
                  {t.nav.news}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="text-[#dfd4cc] hover:text-[#ffffff] transition-colors text-start"
                >
                  {t.nav.blog}
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Governance */}
          <div>
            <h3 className="text-sm font-bold text-[#ffffff] uppercase tracking-wider mb-4 font-heading">
              {lang === 'ar' ? 'الدعم والحوكمة' : 'Support & Legal'}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('help')}
                  className="text-[#dfd4cc] hover:text-[#ffffff] transition-colors text-start"
                >
                  {t.nav.help}
                </button>
              </li>
              <li>
                <span className="text-[#a78a7b] block">
                  {t.common.commercialReg}
                </span>
              </li>
              <li>
                <span className="text-[#a78a7b] block">
                  VAT: 310892019400003
                </span>
              </li>
              <li>
                <span className="text-[#a78a7b] block">
                  NCA & CITC Registered
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-[#4a362c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a78a7b]">
          <p>© {new Date().getFullYear()} {t.common.allRightsReserved}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-[#dfd4cc]" />
              {t.common.saudiArabia}
            </span>
            <span>•</span>
            <span>Riyadh Headquarters</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
