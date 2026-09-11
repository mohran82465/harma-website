import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { TrustStrip } from '../components/TrustStrip';
import { 
  Hotel, 
  CalendarCheck2, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Store, 
  Moon, 
  PackageCheck, 
  Globe2, 
  Users, 
  Receipt, 
  ConciergeBell, 
  KeyRound, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Building,
  Home,
  Check,
  Smartphone
} from 'lucide-react';
import { mudabbirModules, mudabbirPropertyTypes } from '../data/mockContent';

export const MudabbirPage: React.FC = () => {
  const { lang, dir, t, openDemoModal } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [activePropertyFilter, setActivePropertyFilter] = useState<string>('all');

  // Helper map for icons
  const iconMap: Record<string, React.ElementType> = {
    CalendarCheck2,
    Sparkles,
    Wrench,
    ShieldCheck,
    Store,
    Moon,
    PackageCheck,
    Globe2,
    Users,
    Receipt,
    ConciergeBell,
    KeyRound
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#f9f6f4] via-[#ffffff] to-[#f9f6f4] py-16 sm:py-24 border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe8e3] text-[#765a4c] text-xs font-semibold mb-4">
              <Hotel className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المنتجات / نظام مُدبّر' : 'Products / Mudabbir ERP'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35261f] font-heading leading-tight">
              {lang === 'ar' ? (
                <>
                  نظام ERP متكامل وسحابي <br />
                  <span className="text-[#765a4c]">لإدارة قطاع الضيافة والعقارات</span> في المملكة
                </>
              ) : (
                <>
                  Sovereign Hospitality & Property ERP <br />
                  <span className="text-[#765a4c]">Engineered Natively for Saudi Arabia</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#5f473c] leading-relaxed">
              {lang === 'ar' ? (
                'نظام "مدبّر" هو منظومة تخطيط موارد فندقية وعقارية شاملة متعددة المنشآت. يدمج الحجوزات، فواتير النزلاء (Folios)، التدبير الفندقي، الصيانة، نقاط البيع، التدقيق الليلي، الموارد البشرية، والفوترة الإلكترونية (زاتكا فاتورة) في منصة موحدة سلسة بالعربية والإنجليزية.'
              ) : (
                'Mudabbir is a multi-tenant, full hospitality ERP purpose-built for the Saudi market. It brings reservations, folios, housekeeping, maintenance, POS, night audit, HR, and direct ZATCA clearance into one unified, bilingual web and mobile workspace.'
              )}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openDemoModal('mudabbir')}
                icon={<ArrowIcon className="w-4 h-4" />}
              >
                {t.nav.requestDemo}
              </Button>
              <div className="flex items-center gap-2 text-xs text-[#5f473c] px-3 py-2 bg-[#ffffff] rounded-lg border border-[#ded2cb]">
                <Smartphone className="w-4 h-4 text-[#765a4c]" />
                <span>{lang === 'ar' ? 'يعمل عبر المتصفح والجوال دون أجهزة معقدة' : 'Web & Mobile Ready — Zero Servers Needed'}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REGULATORY & TRUST STRIP */}
      <TrustStrip />

      {/* 3. PROPERTY TYPES SUPPORTED */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
              {lang === 'ar' ? 'المنشآت المدعومة' : 'Target Properties'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#35261f] mt-3 font-heading">
              {lang === 'ar' ? 'حل مرن مصمم لمختلف أنماط الإيواء والعقارات' : 'Engineered for Diverse Hospitality & Property Segments'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mudabbirPropertyTypes.map((prop) => (
              <div
                key={prop.id}
                className="p-6 rounded-2xl border border-[#ded2cb] bg-[#f9f6f4] hover:bg-[#ffffff] hover:border-[#765a4c]/60 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center mb-4 shadow-2xs">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#35261f]">
                  {prop.name[lang]}
                </h3>
                <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                  {prop.desc[lang]}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MODULE BREAKDOWN (12 Modules) */}
      <section className="py-16 bg-[#f9f6f4] border-t border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
              {lang === 'ar' ? 'وحدات النظام الشاملة' : 'ERP Modules Architecture'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#35261f] mt-3 font-heading">
              {lang === 'ar' ? 'كل ما يحتاجه فندقك أو منشأتك في شاشة واحدة' : 'Everything Your Property Needs to Run Seamlessly'}
            </h2>
            <p className="text-xs sm:text-sm text-[#5f473c] mt-2">
              {lang === 'ar'
                ? 'تغطية شاملة تبدأ من أول لحظة يحجز فيها النزيل وحتى إقفال اليومية الضريبية بالريال السعودي.'
                : 'End-to-end coverage spanning from the guest’s initial booking to cryptographic night audit closure in SAR.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mudabbirModules.map((mod) => {
              const Icon = iconMap[mod.icon] || Hotel;
              return (
                <div
                  key={mod.id}
                  className="bg-[#ffffff] p-6 rounded-2xl border border-[#ded2cb] shadow-2xs hover:shadow-md hover:border-[#765a4c]/50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#efe8e3] text-[#765a4c] flex items-center justify-center group-hover:bg-[#765a4c] group-hover:text-[#ffffff] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-[#765a4c] bg-[#f9f6f4] border border-[#ded2cb] px-2 py-0.5 rounded-full">
                      Mudabbir Core
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#35261f] group-hover:text-[#765a4c] transition-colors">
                    {mod.title[lang]}
                  </h3>
                  <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                    {mod.desc[lang]}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. ZATCA & PDPL HIGHLIGHT SECTION */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#35261f] text-[#efe8e3] rounded-3xl p-8 sm:p-12 border border-[#4a362c]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#dfd4cc] bg-[#4a362c] px-3 py-1 rounded-full inline-block">
                  ZATCA Fatoora Integration
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#ffffff] font-heading">
                  {lang === 'ar'
                    ? 'فوترة إلكترونية فورية ومطابقة 100% لاشتراطات هيئة الزكاة'
                    : 'Instant Cryptographic Clearance & 100% Tax Authority Compliance'}
                </h2>
                <p className="text-sm text-[#dfd4cc] leading-relaxed">
                  {lang === 'ar'
                    ? 'يضمن نظام مدبّر عدم تعطل موظف الاستقبال أو مواجهة غرامات مالية. يتم توليد الختم الرقمي (CSID) والرمز المشفر وحفظ الفاتورة بصيغة XML المعتمدة تلقائياً عند إجراء مغادرة النزيل (Check-out) أو إصدار فاتورة الشركات.'
                    : 'Mudabbir guarantees front desk zero-friction checkouts without regulatory penalties. CSID cryptographic stamping, unique UUIDs, sequential hash chains, and XML transmission happen in milliseconds behind the scenes.'}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-[#efe8e3]">
                    <Check className="w-4 h-4 text-[#a78a7b]" />
                    <span>{lang === 'ar' ? 'فواتير ضريبية B2B مبسطة وضريبية' : 'B2B & B2C Invoicing'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#efe8e3]">
                    <Check className="w-4 h-4 text-[#a78a7b]" />
                    <span>{lang === 'ar' ? 'ربط مباشر مع منصة فاتورة' : 'Direct API Link to Fatoora'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#efe8e3]">
                    <Check className="w-4 h-4 text-[#a78a7b]" />
                    <span>{lang === 'ar' ? 'أرشفة سحابية محلية داخل المملكة' : 'Sovereign KSA Storage'}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#4a362c] rounded-2xl p-6 border border-[#5f473c] text-center">
                <div className="w-14 h-14 rounded-full bg-[#765a4c] text-[#ffffff] flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="text-base font-bold text-[#ffffff]">
                  {lang === 'ar' ? 'شهادة اعتماد وتوافق فني' : 'Verified Technical Compliance'}
                </div>
                <div className="text-xs text-[#dfd4cc] mt-1">
                  {lang === 'ar' ? 'متوافق بالكامل مع متطلبات هيئة الزكاة والضريبة والجمارك' : 'Official ZATCA integration certified'}
                </div>
                <div className="mt-5">
                  <Button
                    variant="white"
                    size="sm"
                    className="w-full"
                    onClick={() => openDemoModal('mudabbir')}
                  >
                    {lang === 'ar' ? 'طلب عرض لنظام مدبّر' : 'Schedule Mudabbir Demo'}
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-16 bg-[#f9f6f4] border-t border-[#ded2cb]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#35261f] font-heading">
            {lang === 'ar' ? 'هل تدير فندقاً أو مجمعاً وتبحث عن كفاءة أعلى؟' : 'Ready to Elevate Your Property Operations?'}
          </h2>
          <p className="text-sm text-[#5f473c] mt-2 max-w-xl mx-auto">
            {lang === 'ar'
              ? 'احجز جلسة استعراض حي لنظام مدبّر وسيقوم فريقنا بتهيئة بيئة تجريبية تطابق عدد غرف ومنشآت مجموعتكم.'
              : 'Book a live demonstration of Mudabbir with our Riyadh implementation team.'}
          </p>
          <div className="mt-6">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openDemoModal('mudabbir')}
              icon={<ArrowIcon className="w-4 h-4" />}
            >
              {t.nav.requestDemo}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
