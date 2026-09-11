import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/Button';
import { X, CheckCircle2, Building, Mail, Phone, User, FileText, Sparkles } from 'lucide-react';

export const DemoModal: React.FC = () => {
  const { dir, t, isDemoModalOpen, closeDemoModal, demoModalPreset } = useLanguage();
  
  const [product, setProduct] = useState<'mudabbir' | 'khetat' | 'both'>('both');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    orgType: 'hotel',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (demoModalPreset) {
      setProduct(demoModalPreset);
    }
  }, [demoModalPreset]);

  if (!isDemoModalOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = t.common.required;
    }
    if (!formData.workEmail.trim()) {
      errs.workEmail = t.common.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errs.phone = t.common.required;
    }
    if (!formData.companyName.trim()) {
      errs.companyName = t.common.required;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real enterprise network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      workEmail: '',
      phone: '',
      companyName: '',
      orgType: 'hotel',
      notes: '',
    });
    setErrors({});
    closeDemoModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#231914]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#ffffff] rounded-2xl border border-[#ded2cb] shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} p-2 rounded-full text-[#765a4c] hover:bg-[#efe8e3] transition-colors`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#efe8e3] text-[#765a4c] rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-bold text-[#35261f]">
              {t.common.success}
            </h3>
            <p className="text-sm text-[#5f473c] mt-2 leading-relaxed max-w-sm mx-auto">
              {t.common.successDesc}
            </p>
            <div className="mt-6 p-4 rounded-xl bg-[#f9f6f4] border border-[#ded2cb] text-xs text-start space-y-1">
              <div className="flex justify-between">
                <span className="text-[#5f473c]">Solution:</span>
                <span className="font-semibold text-[#35261f]">
                  {product === 'mudabbir' ? 'Mudabbir Hospitality ERP' : product === 'khetat' ? 'Khetat Business SaaS' : 'Mudabbir & Khetat'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5f473c]">Contact:</span>
                <span className="font-semibold text-[#35261f]">{formData.workEmail}</span>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="primary" onClick={handleReset} className="w-full">
                {t.common.close}
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#efe8e3] text-[#765a4c] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                {t.brand.fullName}
              </span>
              <h2 className="text-xl font-bold text-[#35261f]">
                {t.demoModal.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5f473c] mt-1">
                {t.demoModal.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Solution Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#35261f] mb-1.5">
                  {t.demoModal.productLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setProduct('mudabbir')}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                      product === 'mudabbir'
                        ? 'bg-[#765a4c] text-[#ffffff] border-[#765a4c]'
                        : 'bg-[#ffffff] text-[#4a362c] border-[#ded2cb] hover:bg-[#f9f6f4]'
                    }`}
                  >
                    {t.nav.mudabbirShort}
                  </button>
                  <button
                    type="button"
                    onClick={() => setProduct('khetat')}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                      product === 'khetat'
                        ? 'bg-[#765a4c] text-[#ffffff] border-[#765a4c]'
                        : 'bg-[#ffffff] text-[#4a362c] border-[#ded2cb] hover:bg-[#f9f6f4]'
                    }`}
                  >
                    {t.nav.khetatShort}
                  </button>
                  <button
                    type="button"
                    onClick={() => setProduct('both')}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                      product === 'both'
                        ? 'bg-[#765a4c] text-[#ffffff] border-[#765a4c]'
                        : 'bg-[#ffffff] text-[#4a362c] border-[#ded2cb] hover:bg-[#f9f6f4]'
                    }`}
                  >
                    {t.demoModal.selectBoth}
                  </button>
                </div>
              </div>

              {/* Full Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#4a362c] mb-1">
                    {t.demoModal.fullName} <span className="text-[#765a4c]">*</span>
                  </label>
                  <div className="relative">
                    <User className={`w-4 h-4 text-[#a38474] absolute top-3 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t.demoModal.fullNamePlaceholder}
                      className={`w-full text-xs rounded-lg border ${
                        errors.fullName ? 'border-red-500' : 'border-[#ded2cb]'
                      } py-2.5 ${dir === 'rtl' ? 'pr-9 pl-3' : 'pl-9 pr-3'} bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4a362c] mb-1">
                    {t.demoModal.workEmail} <span className="text-[#765a4c]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className={`w-4 h-4 text-[#a38474] absolute top-3 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
                    <input
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder={t.demoModal.workEmailPlaceholder}
                      className={`w-full text-xs rounded-lg border ${
                        errors.workEmail ? 'border-red-500' : 'border-[#ded2cb]'
                      } py-2.5 ${dir === 'rtl' ? 'pr-9 pl-3' : 'pl-9 pr-3'} bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]`}
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Phone & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#4a362c] mb-1">
                    {t.demoModal.phone} <span className="text-[#765a4c]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className={`w-4 h-4 text-[#a38474] absolute top-3 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.demoModal.phonePlaceholder}
                      className={`w-full text-xs rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-[#ded2cb]'
                      } py-2.5 ${dir === 'rtl' ? 'pr-9 pl-3' : 'pl-9 pr-3'} bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4a362c] mb-1">
                    {t.demoModal.companyName} <span className="text-[#765a4c]">*</span>
                  </label>
                  <div className="relative">
                    <Building className={`w-4 h-4 text-[#a38474] absolute top-3 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder={t.demoModal.companyNamePlaceholder}
                      className={`w-full text-xs rounded-lg border ${
                        errors.companyName ? 'border-red-500' : 'border-[#ded2cb]'
                      } py-2.5 ${dir === 'rtl' ? 'pr-9 pl-3' : 'pl-9 pr-3'} bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]`}
                    />
                  </div>
                </div>
              </div>

              {/* Organization Type */}
              <div>
                <label className="block text-xs font-medium text-[#4a362c] mb-1">
                  {t.demoModal.propertyOrCompanyType}
                </label>
                <select
                  value={formData.orgType}
                  onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                  className="w-full text-xs rounded-lg border border-[#ded2cb] py-2.5 px-3 bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c]"
                >
                  <option value="hotel">{t.demoModal.hotel}</option>
                  <option value="serviced">{t.demoModal.servicedApartments}</option>
                  <option value="realestate">{t.demoModal.realEstate}</option>
                  <option value="corporate">{t.demoModal.saasOrCorporate}</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-[#4a362c] mb-1">
                  {t.demoModal.notes}
                </label>
                <div className="relative">
                  <FileText className={`w-4 h-4 text-[#a38474] absolute top-3 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.demoModal.notesPlaceholder}
                    className={`w-full text-xs rounded-lg border border-[#ded2cb] py-2 ${
                      dir === 'rtl' ? 'pr-9 pl-3' : 'pl-9 pr-3'
                    } bg-[#ffffff] text-[#35261f] focus:outline-none focus:ring-1 focus:ring-[#765a4c] resize-none`}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.common.submitting : t.demoModal.submitButton}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
