import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { TrustStrip } from '../components/TrustStrip';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users2, 
  Award, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MapPin
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { lang, dir, t, navigateTo, openDemoModal } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-0">
      
      {/* 1. HERO / STORY HEADER */}
      <section className="bg-gradient-to-b from-[#f9f6f4] to-[#ffffff] py-16 sm:py-24 border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full inline-block mb-4">
              {lang === 'ar' ? 'من نحن — شركة هارما' : 'About Us — Harma IT Systems'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35261f] font-heading leading-tight">
              {lang === 'ar' ? (
                <>
                  نبني حلولاً برمجية سيادية تمكّن <br className="hidden sm:inline" />
                  <span className="text-[#765a4c]">قطاعات الضيافة والعقارات والشركات</span> في المملكة
                </>
              ) : (
                <>
                  Pioneering Sovereign B2B Software for <br className="hidden sm:inline" />
                  <span className="text-[#765a4c]">Saudi Hospitality & Business Enterprises</span>
                </>
              )}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#5f473c] leading-relaxed">
              {lang === 'ar' ? (
                'شركة هارما لنظم تقنية المعلومات هي شركة تقنية سعودية مقرها الرياض. انطلقنا من واقع حاجة السوق المحلي لبرمجيات سحابية لا تكتفي بتقديم ميزات عامة، بل تُصمم خصيصاً لتلائم اشتراطات الفوترة الإلكترونية (زاتكا)، ونظام حماية البيانات الشخصية، ومرونة التعامل بالريال السعودي.'
              ) : (
                'Harma Company for IT Systems is a Riyadh-headquartered Saudi software enterprise. We emerged from a clear recognition that the Kingdom’s booming hospitality, property, and corporate sectors deserve software built natively for local regulatory frameworks, sovereign hosting, and modern operations.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-[#f9f6f4] border border-[#ded2cb] relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center mb-5 shadow-xs">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#35261f] font-heading">
                {lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h2>
              <p className="text-sm text-[#5f473c] mt-3 leading-relaxed">
                {lang === 'ar'
                  ? 'أن نكون المنظومة البرمجية الوطنية الأكثر موثوقية واعتماداً في المملكة العربية السعودية لإدارة الفنادق والعقارات والمجموعات التجارية، مساهمين بفاعلية في تحقيق مستهدفات رؤية المملكة 2030 للتحول الرقمي وصناعة السياحة.'
                  : 'To be the most trusted and adopted sovereign cloud ERP ecosystem in Saudi Arabia for hospitality, real estate, and enterprise groups—actively propelling the Kingdom’s Vision 2030 digital economy and tourism goals.'}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-[#f9f6f4] border border-[#ded2cb] relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#35261f] text-[#ffffff] flex items-center justify-center mb-5 shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#35261f] font-heading">
                {lang === 'ar' ? 'رسالتنا' : 'Our Mission'}
              </h2>
              <p className="text-sm text-[#5f473c] mt-3 leading-relaxed">
                {lang === 'ar'
                  ? 'تطوير برمجيات عملية، متوافقة نظامياً، ومرنة التخصيص، تُزيل التعقيد عن كاهل المشغلين والمدراء، وتمنحهم تحكماً كاملاً في العمليات المالية، والتشغيل اليومي، وخدمة العملاء من شاشة واحدة موحدة.'
                  : 'To engineer practical, compliant, and configurable software that strips complexity away from operators and executives, delivering total control over financial operations, daily workflows, and guest experiences from a unified interface.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES */}
      <section className="py-16 bg-[#f9f6f4] border-y border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
              {lang === 'ar' ? 'ركائز هارما' : 'Core Pillars'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#35261f] mt-3 font-heading">
              {lang === 'ar' ? 'المبادئ التي توجه كل سطر برمجي نكتبه' : 'The Principles That Guide Every Solution We Build'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#ffffff] p-6 rounded-xl border border-[#ded2cb]">
              <div className="w-10 h-10 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#35261f]">
                {lang === 'ar' ? 'الامتثال الصارم والسيادي' : 'Regulatory Precision'}
              </h3>
              <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'لا ننتظر اللوائح الجديدة لنقوم بالترقيع. منصاتنا مبنية على أسس هيئة الزكاة (فاتورة) وحماية البيانات كركيزة أساسية.'
                  : 'We don’t retrofit regulations as afterthoughts. ZATCA e-invoicing, VAT, and PDPL are baked into the core architecture.'}
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-xl border border-[#ded2cb]">
              <div className="w-10 h-10 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#35261f]">
                {lang === 'ar' ? 'التخصيص لا القولبة الجامدة' : 'Configurable by Design'}
              </h3>
              <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'نؤمن أن البرمجيات يجب أن تتكيف مع نموذج عمل منشأتك، وليس العكس. وحداتنا قابلة للتفعيل والضبط بمرونة.'
                  : 'Software must adapt to how your business operates, not force you to change your workflow to fit rigid legacy code.'}
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-xl border border-[#ded2cb]">
              <div className="w-10 h-10 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#35261f]">
                {lang === 'ar' ? 'كفاءات وطنية في الميدان' : 'Local Engineering Presence'}
              </h3>
              <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'فريقنا متواجد في الرياض، يتحدث لغتكم، ويفهم تفاصيل السوق وثقافة الضيافة والتجارة في المملكة.'
                  : 'Engineers, product managers, and support teams stationed on the ground in Riyadh, speaking your language.'}
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-xl border border-[#ded2cb]">
              <div className="w-10 h-10 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#35261f]">
                {lang === 'ar' ? 'بساطة وسرعة الاستخدام' : 'Operational Elegance'}
              </h3>
              <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'واجهات أنيقة وعصرية تمكّن موظف الاستقبال أو المحاسب من إتقان العمل على النظام في ساعات قليلة.'
                  : 'Clean, intuitive UX that reduces staff onboarding time from weeks to just hours.'}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. COMPLIANCE STRIP */}
      <TrustStrip />

      {/* 5. CALL TO ACTION */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#35261f] font-heading">
            {lang === 'ar' ? 'هل تود التعرف على فريقنا وزيارة مقرنا في الرياض؟' : 'Interested in Meeting Our Team in Riyadh?'}
          </h2>
          <p className="text-sm text-[#5f473c] mt-2 max-w-xl mx-auto">
            {lang === 'ar'
              ? 'يسعدنا دائماً استقبال رواد قطاع الضيافة ومدراء المجموعات الاستثمارية في مقر شركة هارما بطريق الملك فهد بالرياض.'
              : 'We welcome hotel general managers, asset owners, and corporate leaders to visit our offices on King Fahd Road.'}
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="primary" onClick={() => openDemoModal()} icon={<ArrowIcon className="w-4 h-4" />}>
              {t.nav.requestDemo}
            </Button>
            <Button variant="secondary" onClick={() => navigateTo('help')}>
              {t.nav.contactUs}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
