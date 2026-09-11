import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { TrustStrip } from '../components/TrustStrip';
import { 
  Hotel, 
  Layers, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Building2, 
  Check, 
  FileSpreadsheet, 
  Clock, 
  CheckCircle,
  TrendingUp,
  Award
} from 'lucide-react';
import { mudabbirModules, khetatCapabilities } from '../data/mockContent';

export const HomePage: React.FC = () => {
  const { lang, dir, t, navigateTo, openDemoModal } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f9f6f4] via-[#ffffff] to-[#f9f6f4] py-16 sm:py-24 border-b border-[#ded2cb]">
        
        {/* Subtle geometric background motif */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(#765a4c 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#35261f] tracking-tight leading-[1.15] font-heading animate-in fade-in slide-in-from-bottom-3 duration-600">
              {lang === 'ar' ? (
                <>
                  بنية تقنية ذكية تقود قطاعات <br className="hidden sm:inline" />
                  <span className="text-[#765a4c] underline decoration-[#ded2cb] decoration-wavy decoration-2">
                    الضيافة والعقارات والأعمال
                  </span> في المملكة
                </>
              ) : (
                <>
                  Next-Generation ERP & SaaS for <br className="hidden sm:inline" />
                  <span className="text-[#765a4c]">Hospitality, Real Estate & Business</span> in Saudi Arabia
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-[#5f473c] leading-relaxed max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
              {lang === 'ar' ? (
                'تُمكّن شركة هارما المنشآت الفندقية والمجموعات التجارية في المملكة بحلول برمجية سحابية متوافقة كلياً مع الفوترة الإلكترونية (زاتكا) ونظام حماية البيانات (PDPL)، من خلال نظام "مدبّر" الفندقي الشامل ومنصة "خُطط" المرنة متعددة الشركات.'
              ) : (
                'Harma empowers Saudi hotels, resorts, and corporate enterprises with sovereign cloud ERP software—natively compliant with ZATCA e-invoicing and PDPL, featuring Mudabbir Hospitality ERP and Khetat configurable multi-company platform.'
              )}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 animate-in fade-in slide-in-from-bottom-5 duration-800">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openDemoModal()}
                icon={<ArrowIcon className="w-4 h-4" />}
              >
                {t.nav.requestDemo}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigateTo('about')}
              >
                {lang === 'ar' ? 'تعرف على قصة هارما' : 'Discover Our Story'}
              </Button>
            </div>

            {/* Micro Trust Stats */}
            <div className="mt-12 pt-8 border-t border-[#ded2cb]/60 max-w-lg mx-auto grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#765a4c] font-heading">100%</div>
                <div className="text-xs text-[#5f473c] mt-0.5">{lang === 'ar' ? 'توافق مع لوائح المملكة' : 'Saudi Regulatory Compliance'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#765a4c] font-heading">99.99%</div>
                <div className="text-xs text-[#5f473c] mt-0.5">{lang === 'ar' ? 'جاهزية خوادم سحابية محلية' : 'In-Kingdom Cloud Uptime'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REGULATORY & TRUST STRIP */}
      <TrustStrip />

      {/* 3. CORE PRODUCTS PREVIEW (MUDABBIR & KHETAT) */}
      <section className="py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
              {lang === 'ar' ? 'منتجاتنا الرائدة' : 'Our Flagship Platforms'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35261f] mt-3 font-heading">
              {lang === 'ar' ? 'حلول متخصصة بُنيت لواقع الأعمال في المملكة' : 'Specialized Systems Engineered for Saudi Market Reality'}
            </h2>
            <p className="text-sm sm:text-base text-[#5f473c] mt-2">
              {lang === 'ar' 
                ? 'نظامان متكاملان يغطيان منظومة تشغيل الفنادق والعقارات من جهة، وإدارة الكيانات والشركات من جهة أخرى.'
                : 'Two specialized platforms covering hotel & property operations on one hand, and multi-company enterprise management on the other.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* PRODUCT CARD 1: MUDABBIR (TAKES WHOLE COLUMN) */}
            <div className="lg:col-span-7 bg-[#ffffff] rounded-2xl border border-[#ded2cb] shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
              
              {/* Decorative accent banner */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#765a4c]" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center shadow-xs">
                    <Hotel className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#efe8e3] text-[#765a4c]">
                      {lang === 'ar' ? 'إدارة الفنادق والعقارات' : 'Hospitality ERP'}
                    </span>
                    <span className="hidden sm:inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#f9f6f4] border border-[#ded2cb] text-[#5f473c]">
                      {lang === 'ar' ? 'المنصة الرائدة' : 'Flagship'}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#35261f] font-heading group-hover:text-[#765a4c] transition-colors">
                  {t.nav.mudabbir}
                </h3>
                
                <p className="text-sm text-[#5f473c] mt-3 leading-relaxed">
                  {lang === 'ar'
                    ? 'نظام سحابي شامل لإدارة الفنادق، المنتجعات، الشقق المخدومة والمجمعات السكنية. يدمج الحجوزات، التدبير الفندقي، الصيانة، نقاط البيع، التدقيق الليلي، والفوترة الإلكترونية زاتكا في منصة تشغيلية واحدة.'
                    : 'A comprehensive multi-tenant ERP for Saudi hotels, resorts, serviced apartments, and compounds. Unifies reservations, housekeeping, POS, maintenance, night audit, and ZATCA e-invoicing.'}
                </p>

                {/* Target Property Types Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {(lang === 'ar' 
                    ? ['الفنادق الفاخرة', 'الشقق المخدومة', 'المنتجعات والشاليهات', 'المجمعات السكنية'] 
                    : ['Luxury Hotels', 'Serviced Apartments', 'Resorts & Chalets', 'Residential Compounds']
                  ).map((propertyType) => (
                    <span key={propertyType} className="text-xs font-medium bg-[#f9f6f4] text-[#5f473c] px-3 py-1 rounded-lg border border-[#ded2cb]/80">
                      {propertyType}
                    </span>
                  ))}
                </div>

                {/* Module Highlights Checklist */}
                <div className="mt-6 pt-5 border-t border-[#efe8e3] space-y-3">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#35261f]">
                    <CheckCircle className="w-4 h-4 text-[#765a4c] shrink-0" />
                    <span>{lang === 'ar' ? 'ربط فوري مع منصة فاتورة وهيئة الزكاة والضريبة والجمارك' : 'Direct ZATCA Fatoora Cryptographic Clearance'}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#35261f]">
                    <CheckCircle className="w-4 h-4 text-[#765a4c] shrink-0" />
                    <span>{lang === 'ar' ? 'مزامنة لحظية ثنائية مع محركات الحجز (بوكينج، أجودا، إكسبيديا)' : 'Two-way OTA Channel Manager integration (Booking, Agoda)'}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#35261f]">
                    <CheckCircle className="w-4 h-4 text-[#765a4c] shrink-0" />
                    <span>{lang === 'ar' ? 'فواتير مجزأة، إدارة النزلاء، وتطبيق ميداني للغرف والنظافة' : 'Split folios, guest services portal & mobile housekeeping'}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#35261f]">
                    <CheckCircle className="w-4 h-4 text-[#765a4c] shrink-0" />
                    <span>{lang === 'ar' ? 'تدقيق ليلي آلي ومطابقة الإيرادات اليومية بضغطة زر' : 'Automated Night Audit & daily revenue reconciliation'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#efe8e3] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => navigateTo('mudabbir')}
                  className="text-sm font-semibold text-[#765a4c] hover:text-[#5f473c] flex items-center gap-2 group-hover:underline"
                >
                  <span>{lang === 'ar' ? 'استكشف نظام مدبّر بالكامل' : 'Explore Mudabbir Modules'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => openDemoModal('mudabbir')}
                >
                  {t.nav.requestDemo}
                </Button>
              </div>

            </div>

            {/* THE OTHER DIVS ON THE RIGHT */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              
              {/* PRODUCT CARD 2: KHETAT */}
              <div className="bg-[#ffffff] rounded-2xl border border-[#ded2cb] shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden flex-1">
                
                {/* Decorative accent banner */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#35261f]" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#35261f] text-[#ffffff] flex items-center justify-center shadow-xs">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#efe8e3] text-[#765a4c]">
                      {lang === 'ar' ? 'منصة الشركات متعددة الكيانات' : 'Multi-Company SaaS'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#35261f] font-heading group-hover:text-[#765a4c] transition-colors">
                    {t.nav.khetat}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#5f473c] mt-2.5 leading-relaxed">
                    {lang === 'ar'
                      ? 'منصة سحابية مخصصة للشركات والمجموعات القابضة لإدارة الفوترة الدورية والاشتراكات، المبيعات، المحاسبة، والموارد البشرية لكل كيان.'
                      : 'A customizable multi-company SaaS platform for subscription billing, sales, finance, procurement, projects, and HR.'}
                  </p>

                  {/* Capability Highlights Checklist */}
                  <div className="mt-5 pt-4 border-t border-[#efe8e3] space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#35261f]">
                      <CheckCircle className="w-4 h-4 text-[#765a4c] shrink-0" />
                      <span>{lang === 'ar' ? 'عزل كامل للحسابات والسجلات التجارية مع لوحة قيادة مجمعة' : 'Isolated ledgers per company with consolidated oversight'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#35261f]">
                      <CheckCircle className="w-4 h-4 text-[#765a4c] shrink-0" />
                      <span>{lang === 'ar' ? 'تفعيل أو تعطيل الوحدات والاشتراكات بحسب احتياج كل شركة' : 'Toggle modules on/off per subsidiary with custom billing cycles'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#efe8e3] flex items-center justify-between">
                  <button
                    onClick={() => navigateTo('khetat')}
                    className="text-xs sm:text-sm font-semibold text-[#765a4c] hover:text-[#5f473c] flex items-center gap-1.5 group-hover:underline"
                  >
                    <span>{lang === 'ar' ? 'استكشف منصة خُطط' : 'Explore Khetat'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => openDemoModal('khetat')}
                  >
                    {t.nav.requestDemo}
                  </Button>
                </div>

              </div>

              {/* INTEGRATION & REGULATORY HUB CARD */}
              <div className="bg-[#f9f6f4] rounded-2xl border border-[#ded2cb] shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden">
                
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#a78a7b]" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#ded2cb] text-[#765a4c]">
                      {lang === 'ar' ? 'التكامل والربط السيادي' : 'Sovereign Integration'}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#35261f] font-heading">
                    {lang === 'ar' ? 'تكامل حكومي وسحابي موحد' : 'Unified Regulatory & Cloud Hub'}
                  </h4>
                  
                  <p className="text-xs text-[#5f473c] mt-1.5 leading-relaxed">
                    {lang === 'ar'
                      ? 'ربط مباشر مع هيئة الزكاة (فاتورة)، شبكة مدى، منصة شموس الأمنية، ومحركات الحجز العالمية مع استضافة محلية 100% داخل المملكة.'
                      : 'Native cryptographic clearance with ZATCA, Mada POS switch, Shomoos tourism security, and global booking channels.'}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {['ZATCA Fatoora', 'Mada / POS', 'Shomoos', 'OTAs Sync', 'Smart Locks'].map((badge) => (
                      <span key={badge} className="text-[11px] font-medium bg-[#ffffff] text-[#5f473c] px-2.5 py-0.5 rounded-md border border-[#ded2cb]">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#ded2cb]/60 flex items-center justify-between">
                  <button
                    onClick={() => navigateTo('partners')}
                    className="text-xs font-semibold text-[#765a4c] hover:text-[#5f473c] flex items-center gap-1.5 group-hover:underline"
                  >
                    <span>{lang === 'ar' ? 'استعرض شبكة التكامل' : 'Explore Integration Network'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY HARMA: VALUE PROPOSITION */}
      <section className="py-16 sm:py-20 bg-[#f9f6f4] border-t border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
                {lang === 'ar' ? 'لماذا تختار شركة هارما؟' : 'The Harma Advantage'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#35261f] font-heading">
                {lang === 'ar'
                  ? 'برمجيات صُممت بعمق لتناسب اللوائح وبيئة الأعمال السعودية'
                  : 'Enterprise software crafted natively for the Kingdom’s business reality'}
              </h2>
              <p className="text-sm text-[#5f473c] leading-relaxed">
                {lang === 'ar'
                  ? 'لا مزيد من محاولات تطويع البرمجيات المستوردة لتناسب الأنظمة المحلية. تبني هارما أنظمة تنطلق من الريال السعودي، والفوترة الإلكترونية، وأنظمة وزارة السياحة وهيئة الزكاة كأساس ثابت.'
                  : 'No more wrestling with global software that fails to grasp local regulations. Harma’s solutions start with Saudi Riyal logic, ZATCA cryptographic clearance, and PDPL data residency as core design principles.'}
              </p>
              
              <div className="pt-2">
                <Button
                  variant="primary"
                  onClick={() => navigateTo('about')}
                  icon={<ArrowIcon className="w-4 h-4" />}
                >
                  {lang === 'ar' ? 'اقرأ المزيد عن هارما' : 'Learn More About Us'}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 bg-[#ffffff] rounded-xl border border-[#ded2cb]">
                <div className="w-9 h-9 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#35261f]">
                  {lang === 'ar' ? 'أمان وسيادة البيانات' : 'Sovereign Cloud Hosting'}
                </h3>
                <p className="text-xs text-[#5f473c] mt-1 leading-relaxed">
                  {lang === 'ar'
                    ? 'خوادم مستضافة بالكامل داخل المملكة العربية السعودية، متوافقة مع لوائح الهيئة الوطنية للأمن السيبراني.'
                    : 'Tier-4 data center hosting within Saudi borders, meeting National Cybersecurity Authority standards.'}
                </p>
              </div>

              <div className="p-5 bg-[#ffffff] rounded-xl border border-[#ded2cb]">
                <div className="w-9 h-9 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#35261f]">
                  {lang === 'ar' ? 'فريق دعم محلي في الرياض' : 'In-Kingdom Support Team'}
                </h3>
                <p className="text-xs text-[#5f473c] mt-1 leading-relaxed">
                  {lang === 'ar'
                    ? 'مهندسون واستشاريون متواجدون في الرياض لتقديم الدعم الميداني والتدريب وتهيئة الأنظمة.'
                    : 'Dedicated enterprise engineers and implementation specialists stationed right in Riyadh, KSA.'}
                </p>
              </div>

              <div className="p-5 bg-[#ffffff] rounded-xl border border-[#ded2cb]">
                <div className="w-9 h-9 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#35261f]">
                  {lang === 'ar' ? 'كفاءة تشغيلية وتوفير التكاليف' : 'Zero Hidden Infrastructure'}
                </h3>
                <p className="text-xs text-[#5f473c] mt-1 leading-relaxed">
                  {lang === 'ar'
                    ? 'وداعاً لشراء الخوادم المحلية وتكاليف الصيانة الدورية. منصاتنا تعمل عبر السحابة باشتراكات شفافة.'
                    : 'Cloud-native SaaS eliminates on-premise hardware capital expenditures and maintenance headaches.'}
                </p>
              </div>

              <div className="p-5 bg-[#ffffff] rounded-xl border border-[#ded2cb]">
                <div className="w-9 h-9 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#35261f]">
                  {lang === 'ar' ? 'توسّع سلس لعدة فروع' : 'Multi-Branch Scalability'}
                </h3>
                <p className="text-xs text-[#5f473c] mt-1 leading-relaxed">
                  {lang === 'ar'
                    ? 'أضف فروعاً أو شققاً أو شركات جديدة في دقائق دون الحاجة لإعادة هيكلة النظام المحاسبي.'
                    : 'Add hotels, branches, or companies in minutes with isolated books and consolidated roll-ups.'}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. INVITATION TO PARTNER */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#765a4c] text-[#ffffff] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading">
              {lang === 'ar' 
                ? 'جاهز لتجربة برمجيات هارما في منشأتك؟' 
                : 'Ready to Experience Harma’s Sovereign Platforms?'}
            </h2>
            <p className="text-sm sm:text-base text-[#efe8e3] mt-3 max-w-2xl mx-auto">
              {lang === 'ar'
                ? 'احجز جلسة عرض حي ومباشر مع أحد خبرائنا المتخصصين لمشاهدة كيف يدير نظام مدبّر أو منصة خُطط عملياتك اليومية بأعلى درجات الراحة والامتثال.'
                : 'Book a tailored demonstration with our Riyadh-based product engineers and see how Mudabbir and Khetat streamline your day-to-day operations.'}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="white"
                size="lg"
                onClick={() => openDemoModal()}
                icon={<ArrowIcon className="w-4 h-4" />}
              >
                {t.nav.requestDemo}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-[#ffffff] hover:bg-[#5f473c]"
                onClick={() => navigateTo('help')}
              >
                {t.nav.talkToSales}
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
