import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  showSubtitle = true 
}) => {
  const { lang, navigateTo } = useLanguage();
  const isLight = variant === 'light';

  return (
    <div 
      onClick={() => navigateTo('home')}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group transition-opacity duration-150 hover:opacity-95 ${className}`}
      role="button"
      tabIndex={0}
      aria-label="Harma IT Systems Home"
    >
      {/* Official Harma Geometric Emblem (Transparent Background) */}
      <div 
        className={`w-10 h-10 rounded-xl flex items-center justify-center relative shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0 ${
          isLight 
            ? 'bg-[#ffffff]/15 border border-[#ffffff]/25 text-[#ffffff]' 
            : 'bg-[#765a4c] border border-[#5f473c]/30 text-[#ffffff]'
        }`}
      >
        <svg 
          viewBox="185.0 219.8 588.4 588.4" 
          fill="currentColor" 
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Exact 3-fold geometric origami ribbon triskelion */}
          <polygon points="295.0,320.0 570.0,320.0 500.72,440.0 460.0,510.0 200.0,472.0 410.0,472.0 467.74,372.0 325.0,372.0" />
          <polygon points="758.38,412.46 620.88,650.62 551.6,530.62 511.34,460.36 674.25,254.19 569.25,436.06 626.98,536.06 698.35,412.45" />
          <polygon points="446.62,767.54 309.12,529.38 447.68,529.38 528.66,529.64 625.75,773.81 520.75,591.94 405.28,591.94 476.65,715.55" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-start">
        <div className="flex items-center gap-1.5">
          <span className={`text-xl font-bold tracking-tight font-heading leading-tight ${
            isLight ? 'text-[#ffffff]' : 'text-[#35261f]'
          }`}>
            {lang === 'ar' ? 'هَـارْمَـا' : 'HARMA'}
          </span>
          <span className={`text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded tracking-wider ${
            isLight 
              ? 'bg-[#ffffff]/20 text-[#ffffff]' 
              : 'bg-[#efe8e3] text-[#765a4c]'
          }`}>
            {lang === 'ar' ? 'للتقنية' : 'IT'}
          </span>
          {lang === 'en' && (
            <span className={`text-xs font-semibold px-1 ${
              isLight ? 'text-[#efe8e3]/75' : 'text-[#a38474]'
            }`}>
              هارما
            </span>
          )}
        </div>
        {showSubtitle && (
          <span className={`text-[11px] leading-tight font-medium ${
            isLight ? 'text-[#efe8e3]/80' : 'text-[#765a4c]'
          }`}>
            {lang === 'ar' ? 'شركة هارما لنظم تقنية المعلومات' : 'Company for IT Systems'}
          </span>
        )}
      </div>
    </div>
  );
};
