import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { 
  FileCheck, 
  CreditCard, 
  Share2, 
  Key, 
  UserCheck, 
  Server, 
  Briefcase, 
  Smartphone,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers
} from 'lucide-react';
import { partnersData } from '../data/mockContent';
import { PartnerItem } from '../types';

export const PartnersPage: React.FC = () => {
  const { lang, dir, t, navigateTo, openDemoModal } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [filter, setFilter] = useState<'all' | 'integration' | 'technology' | 'channel'>('all');

  const partnerIcons: Record<string, React.ElementType> = {
    FileCheck,
    CreditCard,
    Share2,
    Key,
    UserCheck,
    Server,
    Briefcase,
    Smartphone
  };

  const filteredPartners = partnersData.filter((p) => {
    if (filter === 'all') return true;
    return p.partnerType === filter;
  });

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION (Structural reference for Khetat) */}
      <section className="bg-gradient-to-b from-[#f9f6f4] via-[#ffffff] to-[#f9f6f4] py-16 sm:py-24 border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe8e3] text-[#765a4c] text-xs font-semibold mb-4">
              <Share2 className="w-4 h-4" />
              <span>{lang === 'ar' ? 'شبكة الشركاء والربط التقني' : 'Ecosystem & Integration Partners'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#765a4c]" />
              <span>KSA Integrated</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35261f] font-heading leading-tight">
              {lang === 'ar' ? (
                <>
                  منظومة شراكات متكاملة تدعم <br />
                  <span className="text-[#765a4c]">كفاءة أعمالك وعمليات منشأتك</span>
                </>
              ) : (
                <>
                  A Unified Partner Ecosystem Powering <br />
                  <span className="text-[#765a4c]">Seamless Operations Across the Kingdom</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#5f473c] leading-relaxed">
              {lang === 'ar' ? (
                'ترتبط منصات هارما (مدبّر وخُطط) بأكثر من 40 جهة وشريكاً تقنياً وحكومياً، من هيئة الزكاة والضريبة وشبكة المدفوعات السعودية مدى، وصولاً إلى محركات الحجز العالمية، ومصنعي الأقفال الذكية، والبنية السحابية السيادية.'
              ) : (
                'Harma’s platforms seamlessly integrate with leading regulatory bodies, national payment switches, global booking channels, smart door lock hardware, and tier-4 sovereign cloud infrastructure in Saudi Arabia.'
              )}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigateTo('help')}
                icon={<ArrowIcon className="w-4 h-4" />}
              >
                {lang === 'ar' ? 'انضم لشبكة الشركاء' : 'Become a Partner'}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openDemoModal()}
              >
                {t.nav.requestDemo}
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="bg-[#ffffff] border-b border-[#ded2cb] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#5f473c]">
                {lang === 'ar' ? 'تصنيف الشركاء:' : 'Filter Partners:'}
              </span>
              <div className="inline-flex rounded-lg border border-[#ded2cb] p-1 bg-[#f9f6f4]">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    filter === 'all' ? 'bg-[#765a4c] text-[#ffffff]' : 'text-[#4a362c] hover:text-[#765a4c]'
                  }`}
                >
                  {lang === 'ar' ? 'الكل' : 'All'}
                </button>
                <button
                  onClick={() => setFilter('integration')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    filter === 'integration' ? 'bg-[#765a4c] text-[#ffffff]' : 'text-[#4a362c] hover:text-[#765a4c]'
                  }`}
                >
                  {lang === 'ar' ? 'ربط حكومي وتنظيمي' : 'Integrations'}
                </button>
                <button
                  onClick={() => setFilter('technology')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    filter === 'technology' ? 'bg-[#765a4c] text-[#ffffff]' : 'text-[#4a362c] hover:text-[#765a4c]'
                  }`}
                >
                  {lang === 'ar' ? 'بنية تقنية وبوابات دفع' : 'Technology'}
                </button>
                <button
                  onClick={() => setFilter('channel')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    filter === 'channel' ? 'bg-[#765a4c] text-[#ffffff]' : 'text-[#4a362c] hover:text-[#765a4c]'
                  }`}
                >
                  {lang === 'ar' ? 'قنوات الحجز والتوزيع' : 'Channels'}
                </button>
              </div>
            </div>

            <div className="text-xs text-[#765a4c] font-medium">
              {lang === 'ar' 
                ? `${filteredPartners.length} شركاء معتمدين` 
                : `${filteredPartners.length} Verified Partners`}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITY / PARTNER CARD GRID (Structural template for Khetat) */}
      <section className="py-16 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPartners.map((partner) => {
              const Icon = partnerIcons[partner.iconName] || Share2;
              return (
                <div
                  key={partner.id}
                  className="bg-[#ffffff] p-6 rounded-2xl border border-[#ded2cb] shadow-2xs hover:shadow-md hover:border-[#765a4c]/60 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#efe8e3] text-[#765a4c] flex items-center justify-center group-hover:bg-[#765a4c] group-hover:text-[#ffffff] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      {partner.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#765a4c] bg-[#f9f6f4] border border-[#ded2cb] px-2 py-0.5 rounded-full">
                          {partner.badge[lang]}
                        </span>
                      )}
                    </div>

                    <div className="text-[11px] font-semibold text-[#765a4c] uppercase tracking-wider mb-1">
                      {partner.category[lang]}
                    </div>

                    <h3 className="font-bold text-base text-[#35261f] group-hover:text-[#765a4c] transition-colors">
                      {partner.name[lang]}
                    </h3>

                    <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                      {partner.description[lang]}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#efe8e3] flex items-center justify-between text-[11px] text-[#765a4c] font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {lang === 'ar' ? 'ربط مباشر ومعتمد' : 'Direct Verified API'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PARTNER WITH HARMA CTA */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#f9f6f4] rounded-3xl p-8 sm:p-12 border border-[#ded2cb]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#35261f] font-heading">
              {lang === 'ar' ? 'هل تقدم حلاً تقنياً أو أجهزة متخصصة لقطاع الضيافة؟' : 'Are You a Tech Provider or Hospitality Integrator?'}
            </h2>
            <p className="text-sm text-[#5f473c] mt-2 max-w-xl mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'نرحب دائماً بالتعاون مع مزودي أجهزة الأقفال، بوابات الدفع، محركات الحجز، والأنظمة الحكومية لتوسيع منظومة الربط التقني لصالح عملائنا المشتركين.'
                : 'We actively collaborate with hardware vendors, payment gateways, OTA engines, and software providers to expand capabilities for our mutual customers.'}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button
                variant="primary"
                onClick={() => navigateTo('help')}
                icon={<ArrowIcon className="w-4 h-4" />}
              >
                {lang === 'ar' ? 'تواصل مع فريق الشراكات' : 'Contact Partnerships Team'}
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
