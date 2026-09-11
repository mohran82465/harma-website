import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { 
  HelpCircle, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Send, 
  MessageSquare,
  ShieldCheck,
  Building,
  User,
  Sparkles
} from 'lucide-react';
import { faqItems } from '../data/mockContent';
import { FaqItem } from '../types';

export const HelpCenterPage: React.FC = () => {
  const { lang, dir, t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-mudabbir-zatca');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = faqItems.filter((faq) => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = t.common.required;
    if (!formData.email.trim()) {
      errs.email = t.common.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.phone.trim()) errs.phone = t.common.required;
    if (!formData.message.trim()) errs.message = t.common.required;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#f9f6f4] via-[#ffffff] to-[#f9f6f4] py-14 sm:py-20 border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe8e3] text-[#765a4c] text-xs font-semibold mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>{lang === 'ar' ? 'مركز المساعدة والدعم الفني' : 'Support & Client Knowledge Center'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35261f] font-heading leading-tight">
              {lang === 'ar' ? (
                <>
                  كيف يمكننا مساعدتك اليوم في <br />
                  <span className="text-[#765a4c]">تشغيل وإدارة منشأتك؟</span>
                </>
              ) : (
                <>
                  How Can We Support Your <br />
                  <span className="text-[#765a4c]">Hospitality & Enterprise Operations?</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#5f473c] leading-relaxed">
              {lang === 'ar'
                ? 'استعرض الأسئلة الأكثر شيوعاً حول نظام مدبّر ومنصة خُطط واشتراطات هيئة الزكاة، أو تواصل مباشرة مع فريق الدعم والحلول في الرياض.'
                : 'Browse verified answers regarding Mudabbir ERP, Khetat SaaS, ZATCA compliance, or reach out directly to our enterprise engineers in Riyadh.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT INFO CARDS */}
      <section className="py-10 bg-[#ffffff] border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl border border-[#ded2cb] bg-[#f9f6f4] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#765a4c] font-semibold uppercase">{lang === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}</div>
                <div className="text-sm font-bold text-[#35261f]">{lang === 'ar' ? 'الرياض، طريق الملك فهد' : 'Riyadh, King Fahd Rd'}</div>
                <div className="text-xs text-[#5f473c]">{t.common.commercialReg}</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[#ded2cb] bg-[#f9f6f4] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#765a4c] font-semibold uppercase">{lang === 'ar' ? 'الاتصال والمبيعات' : 'Telephone & Sales'}</div>
                <div className="text-sm font-bold text-[#35261f]" dir="ltr">+966 11 450 8900</div>
                <div className="text-xs text-[#5f473c]">{lang === 'ar' ? 'الأحد - الخميس (8 ص - 5 م)' : 'Sun - Thu (8am - 5pm)'}</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[#ded2cb] bg-[#f9f6f4] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#765a4c] text-[#ffffff] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#765a4c] font-semibold uppercase">{lang === 'ar' ? 'البريد المؤسسي' : 'Enterprise Email'}</div>
                <div className="text-sm font-bold text-[#35261f]">contact@harma.sa</div>
                <div className="text-xs text-[#5f473c]">sales@harma.sa</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN SECTION: FAQ ACCORDION + CONTACT FORM */}
      <section className="py-16 bg-[#f9f6f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: FAQ ACCORDION (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#765a4c] bg-[#efe8e3] px-3 py-1 rounded-full">
                  {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#35261f] mt-2 font-heading">
                  {lang === 'ar' ? 'إجابات مباشرة وموثقة عن نظم هارما' : 'Clear Answers to Common Questions'}
                </h2>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-[#765a4c] text-[#ffffff] border-[#765a4c]'
                      : 'bg-[#ffffff] text-[#4a362c] border-[#ded2cb] hover:bg-[#f9f6f4]'
                  }`}
                >
                  {lang === 'ar' ? 'جميع الأسئلة' : 'All Topics'}
                </button>
                <button
                  onClick={() => setActiveCategory('compliance')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    activeCategory === 'compliance'
                      ? 'bg-[#765a4c] text-[#ffffff] border-[#765a4c]'
                      : 'bg-[#ffffff] text-[#4a362c] border-[#ded2cb] hover:bg-[#f9f6f4]'
                  }`}
                >
                  {lang === 'ar' ? 'الفوترة والامتثال (زاتكا)' : 'ZATCA & Compliance'}
                </button>
                <button
                  onClick={() => setActiveCategory('mudabbir')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    activeCategory === 'mudabbir'
                      ? 'bg-[#765a4c] text-[#ffffff] border-[#765a4c]'
                      : 'bg-[#ffffff] text-[#4a362c] border-[#ded2cb] hover:bg-[#f9f6f4]'
                  }`}
                >
                  {lang === 'ar' ? 'نظام مدبّر الفندقي' : 'Mudabbir ERP'}
                </button>
                <button
                  onClick={() => setActiveCategory('khetat')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    activeCategory === 'khetat'
                      ? 'bg-[#765a4c] text-[#ffffff] border-[#765a4c]'
                      : 'bg-[#ffffff] text-[#4a362c] border-[#ded2cb] hover:bg-[#f9f6f4]'
                  }`}
                >
                  {lang === 'ar' ? 'منصة خُطط للشركات' : 'Khetat SaaS'}
                </button>
              </div>

              {/* Accordion List */}
              <div className="space-y-3 pt-2">
                {filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-[#ffffff] rounded-xl border border-[#ded2cb] overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full p-4 sm:p-5 text-start flex items-center justify-between gap-4 hover:bg-[#f9f6f4]/50 transition-colors focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-sm sm:text-base text-[#35261f]">
                          {faq.question[lang]}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#765a4c] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5f473c] leading-relaxed border-t border-[#efe8e3] animate-in fade-in duration-150">
                          {faq.answer[lang]}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE CONTACT FORM (Col 8-12) */}
            <div className="lg:col-span-5">
              <div className="bg-[#ffffff] rounded-2xl border border-[#ded2cb] p-6 sm:p-8 shadow-sm">
                
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#efe8e3] text-[#765a4c] mb-2">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {lang === 'ar' ? 'نموذج التواصل السريع' : 'Direct Inquiry'}
                  </span>
                  <h3 className="text-xl font-bold text-[#35261f] font-heading">
                    {lang === 'ar' ? 'أرسل استفسارك لفريقنا' : 'Send Us a Message'}
                  </h3>
                  <p className="text-xs text-[#5f473c] mt-1">
                    {lang === 'ar'
                      ? 'سيتواصل معك أحد مهندسينا في الرياض خلال 24 ساعة عمل.'
                      : 'Our engineering and sales team in Riyadh responds within 24 hours.'}
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-8 text-center animate-in zoom-in-95">
                    <div className="w-14 h-14 bg-[#efe8e3] text-[#765a4c] rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-[#35261f]">
                      {t.common.success}
                    </h4>
                    <p className="text-xs text-[#5f473c] mt-1 leading-relaxed">
                      {t.common.successDesc}
                    </p>
                    <div className="mt-6">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
                        }}
                      >
                        {lang === 'ar' ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#35261f] mb-1">
                        {t.demoModal.fullName} <span className="text-[#765a4c]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.demoModal.fullNamePlaceholder}
                        className={`w-full text-xs rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-[#ded2cb]'
                        } py-2.5 px-3 bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]`}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#35261f] mb-1">
                          {t.demoModal.workEmail} <span className="text-[#765a4c]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.demoModal.workEmailPlaceholder}
                          className={`w-full text-xs rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-[#ded2cb]'
                          } py-2.5 px-3 bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#35261f] mb-1">
                          {t.demoModal.phone} <span className="text-[#765a4c]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t.demoModal.phonePlaceholder}
                          className={`w-full text-xs rounded-lg border ${
                            errors.phone ? 'border-red-500' : 'border-[#ded2cb]'
                          } py-2.5 px-3 bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]`}
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-semibold text-[#35261f] mb-1">
                        {lang === 'ar' ? 'موضوع الاستفسار' : 'Inquiry Topic'}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs rounded-lg border border-[#ded2cb] py-2.5 px-3 bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]"
                      >
                        <option value="mudabbir">{t.nav.mudabbir}</option>
                        <option value="khetat">{t.nav.khetat}</option>
                        <option value="partners">{t.nav.partners}</option>
                        <option value="general">{lang === 'ar' ? 'استفسار عام أو شراكة' : 'General Inquiry'}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#35261f] mb-1">
                        {lang === 'ar' ? 'تفاصيل الرسالة أو الاحتياج' : 'Message Details'} <span className="text-[#765a4c]">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={lang === 'ar' ? 'اكتب استفسارك بالتفصيل هنا...' : 'How can we help your organization?'}
                        className={`w-full text-xs rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-[#ded2cb]'
                        } py-2 px-3 bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c] resize-none`}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        variant="primary"
                        size="md"
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? t.common.submitting : (lang === 'ar' ? 'إرسال الرسالة الآن' : 'Send Message Now')}
                      </Button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
