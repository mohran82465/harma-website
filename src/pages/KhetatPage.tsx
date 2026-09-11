import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { TrustStrip } from '../components/TrustStrip';
import { 
  Repeat, 
  TrendingUp, 
  Boxes, 
  Kanban, 
  ShoppingBag, 
  Calculator, 
  Users2, 
  BarChart3,
  SlidersHorizontal,
  Clock3,
  FileCode2,
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  Layers,
  Sparkles
} from 'lucide-react';
import { khetatCapabilities, khetatConfigurableHighlights } from '../data/mockContent';

export const KhetatPage: React.FC = () => {
  const { lang, dir, t, navigateTo, openDemoModal } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const capabilityIcons: Record<string, React.ElementType> = {
    Repeat,
    TrendingUp,
    Boxes,
    Kanban,
    ShoppingBag,
    Calculator,
    Users2,
    BarChart3
  };

  const highlightIcons: Record<string, React.ElementType> = {
    SlidersHorizontal,
    Clock3,
    FileCode2,
    ShieldAlert
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#f9f6f4] via-[#ffffff] to-[#f9f6f4] py-16 sm:py-24 border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe8e3] text-[#765a4c] text-xs font-semibold mb-4">
              <Layers className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المنتجات / منصة خُطط' : 'Products / Khetat'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#765a4c]" />
              <span>{lang === 'ar' ? 'متعدد الشركات' : 'Multi-Company SaaS'}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35261f] font-heading leading-tight">
              {lang === 'ar' 
                ? 'منصة واحدة لإدارة كافة أعمالك — بالطريقة التي تناسبك.' 
                : 'One platform to run your entire business — your way.'}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-[#5f473c] leading-relaxed">
              {lang === 'ar'
                ? 'خُطط هي منصة سحابية مرنة ومتعددة الشركات لتنظيم الاشتراكات والفوترة، المبيعات، المالية، المشتريات، المشاريع، والموارد البشرية — مصممة لتلائم طريقة عمل منشأتك الحقيقية.'
                : 'Khetat is a customizable, multi-company SaaS platform for subscription billing, sales, finance, procurement, projects, and HR — built to fit how your business actually works.'}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openDemoModal('khetat')}
                icon={<ArrowIcon className="w-4 h-4" />}
              >
                {t.nav.requestDemo}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigateTo('help')}
              >
                {t.nav.talkToSales}
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION (2-3 sentences) */}
      <section className="py-12 bg-[#ffffff] border-b border-[#ded2cb]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base sm:text-lg text-[#35261f] font-medium leading-relaxed">
            {lang === 'ar' ? (
              'منصة "خُطط" هي منظومة موحدة تُمكّن المنشآت والشركات القابضة من إدارة الاشتراكات، العملاء، الفواتير، المدفوعات، المنتجات، المشتريات، المشاريع، المحاسبة، والموارد البشرية — كل ذلك من مكان واحد موحد، مع تمكين كل شركة تابعة من ضبط وتخصيص إعداداتها بما يتماشى مع دورتها التشغيلية المستقلة.'
            ) : (
              'Khetat is a unified system that helps companies manage subscriptions, customers, invoicing, payments, products, procurement, projects, accounting, and HR — all from one place, with each company able to configure it to their own workflows.'
            )}
          </p>
        </div>
      </section>

      {/* 3. "BUILT FOR HOW YOUR BUSINESS GROWS" — CAPABILITY GRID (8 cards matching Partners structural pattern) */}
      <section className="py-16 sm:py-20 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
              {lang === 'ar' ? 'القدرات الأساسية' : 'Core Capabilities'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#35261f] mt-3 font-heading">
              {lang === 'ar' ? 'مصمم ليواكب نمو أعمالك' : 'Built for how your business grows'}
            </h2>
            <p className="text-xs sm:text-sm text-[#5f473c] mt-2">
              {lang === 'ar'
                ? 'بطاقات وظيفية مستقلة يمكن تفعيلها وربطها بسلاسة وفق متطلبات كل نشاط.'
                : 'Modular capability blocks that can be enabled and configured per company requirements.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {khetatCapabilities.map((cap) => {
              const Icon = capabilityIcons[cap.iconName] || Layers;
              return (
                <div
                  key={cap.id}
                  className="bg-[#ffffff] p-6 rounded-2xl border border-[#ded2cb] shadow-2xs hover:shadow-md hover:border-[#765a4c]/60 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-4 group-hover:bg-[#765a4c] group-hover:text-[#ffffff] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-[#35261f] group-hover:text-[#765a4c] transition-colors">
                      {cap.title[lang]}
                    </h3>
                    <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                      {cap.desc[lang]}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#efe8e3] flex items-center justify-between text-[11px] text-[#765a4c] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{lang === 'ar' ? 'استكشف خُطط' : 'Explore Khetat'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. "CONFIGURABLE, NOT ONE-SIZE-FITS-ALL" SECTION */}
      <section className="py-16 sm:py-20 bg-[#ffffff] border-t border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
              {lang === 'ar' ? 'فلسفة خُطط' : 'Khetat Philosophy'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#35261f] mt-3 font-heading">
              {lang === 'ar' ? 'منصة مرنة قابلة للتهيئة وليست قالباً جامداً' : 'Configurable, not one-size-fits-all'}
            </h2>
            <p className="text-sm text-[#5f473c] mt-3 leading-relaxed">
              {lang === 'ar'
                ? 'الميزة الجوهرية لمنصة خُطط هي غياب القواعد البرمجية المفروضة قسراً. تقوم الشركات بتهيئة الوحدات، الباقات، الضرائب، تسلسل الترقيم، القوالب، الصلاحيات، والهوية البصرية لتلائم عملياتها الخاصة — بدلاً من إجبار أعمالها على التكيف مع البرنامج.'
                : 'Highlight Khetat’s core differentiator: no hard-coded business rules. Companies configure modules, plans, taxes, numbering, templates, roles, and branding to match their own operations — instead of adapting their business to the software.'}
            </p>
          </div>

          {/* Short supporting list (icon + label only, no long text) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {khetatConfigurableHighlights.map((hl) => {
              const Icon = highlightIcons[hl.icon] || SlidersHorizontal;
              return (
                <div
                  key={hl.id}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f9f6f4] border border-[#ded2cb] hover:border-[#765a4c] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#765a4c] text-[#ffffff] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#35261f]">
                    {hl.label[lang]}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. REGULATORY STRIP */}
      <TrustStrip />

      {/* 6. BOTTOM CTA */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#35261f] font-heading">
            {lang === 'ar' ? 'هل تريد تجربة منصة خُطط لشركاتك؟' : 'Ready to Configure Khetat for Your Business?'}
          </h2>
          <p className="text-sm text-[#5f473c] mt-2 max-w-xl mx-auto">
            {lang === 'ar'
              ? 'تحدث مع فريق مبيعات هارما في الرياض واستكشف كيف يمكنك تشغيل عدة شركات بسلاسة واحترافية.'
              : 'Consult with our enterprise sales consultants in Riyadh and explore multi-company automation.'}
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openDemoModal('khetat')}
              icon={<ArrowIcon className="w-4 h-4" />}
            >
              {t.nav.requestDemo}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigateTo('help')}
            >
              {t.nav.talkToSales}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
