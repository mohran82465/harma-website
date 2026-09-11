import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  Mail, 
  CheckCircle2, 
  Heart, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  ChevronDown
} from 'lucide-react';
import { careerRoles } from '../data/mockContent';
import { CareerRole } from '../types';

export const CareersPage: React.FC = () => {
  const { lang, dir, t, currentDetailId, navigateTo } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  useEffect(() => {
    if (currentDetailId) {
      setSelectedRoleId(currentDetailId);
    }
  }, [currentDetailId]);

  const selectedRole = careerRoles.find((r) => r.id === selectedRoleId);

  const handleSelectRole = (role: CareerRole) => {
    setSelectedRoleId(role.id);
    navigateTo('careers', role.id);
  };

  const handleBack = () => {
    setSelectedRoleId(null);
    navigateTo('careers');
  };

  const getApplyMailto = (role: CareerRole) => {
    const subject = encodeURIComponent(`Application for ${role.title.en} - ${role.department.en}`);
    const body = encodeURIComponent(`Dear Harma Careers Team,\n\nI am interested in applying for the ${role.title.en} role in Riyadh. Please find my CV attached.\n\nBest regards,\n[Your Name]`);
    return `mailto:careers@harma.sa?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#f9f6f4] via-[#ffffff] to-[#f9f6f4] py-14 sm:py-20 border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe8e3] text-[#765a4c] text-xs font-semibold mb-4">
              <Briefcase className="w-4 h-4" />
              <span>{lang === 'ar' ? 'انضم إلى فريق هارما في الرياض' : 'Join Harma IT Systems in Riyadh'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#765a4c]" />
              <span>We Are Hiring</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35261f] font-heading leading-tight">
              {lang === 'ar' ? (
                <>
                  شارك في بناء مستقبل البرمجيات <br />
                  <span className="text-[#765a4c]">السيادية في المملكة العربية السعودية</span>
                </>
              ) : (
                <>
                  Build the Future of Sovereign B2B <br />
                  <span className="text-[#765a4c]">Cloud Platforms in Saudi Arabia</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#5f473c] leading-relaxed">
              {lang === 'ar'
                ? 'نبحث عن شغوفين بالتقنية والهندسة البرمجية والحلول الفندقية ليشاركوا معنا في تطوير منصات تُعيد صياغة قطاع الضيافة والأعمال في المملكة.'
                : 'Join an exceptional engineering and product team solving real enterprise challenges with elegance, precision, and sovereign pride.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CULTURE & VALUES SECTION */}
      <section className="py-14 bg-[#ffffff] border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
              {lang === 'ar' ? 'بيئة العمل في هارما' : 'Life at Harma'}
            </span>
            <h2 className="text-2xl font-bold text-[#35261f] mt-2 font-heading">
              {lang === 'ar' ? 'فريق يدفعك للتفوق والابتكار المستمر' : 'Craft, Autonomy, and Real Impact'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#f9f6f4] border border-[#ded2cb]">
              <div className="w-10 h-10 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#35261f]">
                {lang === 'ar' ? 'تحديات تقنية عالية' : 'High Technical Autonomy'}
              </h3>
              <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'نبني أنظمة ذات موثوقية عالية وتشفير مالي ومعمارية موزعة تخدم آلاف العمليات المتزامنة.'
                  : 'Work on distributed transaction isolation, cryptographic signing, and sub-second PMS events.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f9f6f4] border border-[#ded2cb]">
              <div className="w-10 h-10 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#35261f]">
                {lang === 'ar' ? 'استثمار في الكفاءات الوطنية' : 'Grow With Vision 2030'}
              </h3>
              <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'برامج تدريب مستمر وبيئة عمل مرنة تركز على النتائج الحقيقية والنمو المهني السريع.'
                  : 'Be at the forefront of the fastest-growing hospitality and technology market in the region.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f9f6f4] border border-[#ded2cb]">
              <div className="w-10 h-10 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#35261f]">
                {lang === 'ar' ? 'مزايا ومكافآت تنافسية' : 'Competitive Total Rewards'}
              </h3>
              <p className="text-xs text-[#5f473c] mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'رواتب مجزية، تأمين صحي شامل، ومكافآت أداء ترتبط مباشرة بنجاح ونمو المنتجات.'
                  : 'Market-leading compensation packages, comprehensive health coverage, and performance incentives.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OPEN ROLES LIST / DETAIL */}
      <section className="py-16 bg-[#f9f6f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {selectedRole ? (
            /* DETAIL VIEW TEMPLATE */
            <div className="bg-[#ffffff] p-6 sm:p-10 rounded-2xl border border-[#ded2cb] shadow-sm animate-in fade-in duration-200">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#765a4c] hover:text-[#5f473c] mb-6 p-1.5 rounded-lg hover:bg-[#f9f6f4] transition-colors"
              >
                {dir === 'rtl' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{t.common.backToList}</span>
              </button>

              <div className="border-b border-[#ded2cb] pb-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#5f473c] mb-3">
                  <span className="font-bold text-[#765a4c] bg-[#efe8e3] px-2.5 py-0.5 rounded-full">
                    {selectedRole.department[lang]}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#a38474]" />
                    {selectedRole.location[lang]}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#a38474]" />
                    {selectedRole.experience[lang]}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#35261f] font-heading">
                  {selectedRole.title[lang]}
                </h2>
              </div>

              <div className="space-y-6 text-sm text-[#4a362c]">
                <div>
                  <h4 className="font-bold text-sm text-[#35261f] mb-2 uppercase tracking-wide">
                    {lang === 'ar' ? 'نبذة عن الدور الوظيفي' : 'About the Role'}
                  </h4>
                  <p className="leading-relaxed">{selectedRole.description[lang]}</p>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-[#35261f] mb-3 uppercase tracking-wide">
                    {lang === 'ar' ? 'المؤهلات والخبرات المطلوبة' : 'Key Requirements'}
                  </h4>
                  <ul className="space-y-2">
                    {selectedRole.requirements[lang].map((req, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#765a4c] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Email Link */}
              <div className="mt-10 pt-6 border-t border-[#ded2cb] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f9f6f4] p-6 rounded-xl">
                <div>
                  <div className="text-xs text-[#5f473c]">
                    {lang === 'ar' ? 'تُرسل طلبات التوظيف إلى:' : 'Submit applications directly to:'}
                  </div>
                  <div className="font-bold text-sm text-[#765a4c] flex items-center gap-1.5 mt-0.5">
                    <Mail className="w-4 h-4" />
                    <span>careers@harma.sa</span>
                  </div>
                </div>
                <a
                  href={getApplyMailto(selectedRole)}
                  className="inline-flex items-center justify-center gap-2 bg-[#765a4c] hover:bg-[#5f473c] text-[#ffffff] font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.common.sendEmail}</span>
                </a>
              </div>
            </div>
          ) : (
            /* LIST VIEW */
            <div className="space-y-4">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#35261f] font-heading">
                  {lang === 'ar' ? 'الوظائف المتاحة حالياً' : 'Open Opportunities in Riyadh'}
                </h3>
                <p className="text-xs text-[#5f473c] mt-1">
                  {lang === 'ar' ? 'اختر الدور الوظيفي للاطلاع على تفاصيل المتطلبات وإرسال طلبك.' : 'Select a role to review responsibilities and submit your profile.'}
                </p>
              </div>

              {careerRoles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => handleSelectRole(role)}
                  className="p-6 rounded-2xl border border-[#ded2cb] bg-[#ffffff] hover:border-[#765a4c] shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#5f473c] mb-2">
                      <span className="font-semibold text-[#765a4c] bg-[#efe8e3] px-2 py-0.5 rounded">
                        {role.department[lang]}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#a38474]" />
                        {role.location[lang]}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#35261f] group-hover:text-[#765a4c] transition-colors">
                      {role.title[lang]}
                    </h4>
                    <p className="text-xs text-[#5f473c] mt-1 line-clamp-2 max-w-2xl">
                      {role.description[lang]}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-[#765a4c] group-hover:underline">
                    <span>{t.common.viewDetails}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
