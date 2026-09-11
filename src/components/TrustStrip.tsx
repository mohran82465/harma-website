import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Lock, FileCheck2, Database } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { t } = useLanguage();

  const trustBadges = [
    {
      id: 'zatca',
      icon: ShieldCheck,
      title: t.compliance.zatca,
      desc: t.compliance.zatcaDesc,
      status: "ZATCA Certified",
    },
    {
      id: 'pdpl',
      icon: Lock,
      title: t.compliance.pdpl,
      desc: t.compliance.pdplDesc,
      status: "100% Compliant",
    },
    {
      id: 'vat',
      icon: FileCheck2,
      title: t.compliance.vat,
      desc: t.compliance.vatDesc,
      status: "Automated SAR",
    },
    {
      id: 'sovereign',
      icon: Database,
      title: t.compliance.sovereign,
      desc: t.compliance.sovereignDesc,
      status: "Tier-4 KSA",
    },
  ];

  return (
    <section className="bg-[#f9f6f4] border-y border-[#ded2cb] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section label */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#efe8e3] text-[#765a4c] mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t.common.complianceBadge}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#35261f]">
            {t.compliance.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#5f473c] mt-1">
            {t.compliance.subtitle}
          </p>
        </div>

        {/* 4 Compliance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className="bg-[#ffffff] rounded-xl p-5 border border-[#ded2cb] shadow-2xs hover:shadow-sm hover:border-[#765a4c]/50 transition-all duration-200 group"
              >
                <div className="mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#efe8e3] text-[#765a4c] flex items-center justify-center group-hover:bg-[#765a4c] group-hover:text-[#ffffff] transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm text-[#35261f] group-hover:text-[#765a4c] transition-colors">
                  {badge.title}
                </h3>
                <p className="text-xs text-[#5f473c] mt-1.5 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
