import React, { useState } from 'react';
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
  const [imageError, setImageError] = useState(false);
  const isLight = variant === 'light';

  return (
    <div 
      onClick={() => navigateTo('home')}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group transition-opacity duration-150 hover:opacity-90 ${className}`}
      role="button"
      tabIndex={0}
      aria-label="Harma IT Systems Home"
    >
      {/* 1. If an uploaded logo image is available (e.g. /legal name logo.png or /logo.png), attempt to display it */}
      {!imageError && (
        <img 
          src="/legal name logo.png" 
          alt={lang === 'ar' ? 'شعار شركة هارما' : 'Harma Company Logo'} 
          className="h-10 w-auto object-contain shrink-0" 
          onError={() => setImageError(true)} 
        />
      )}

      {/* 2. Refined Geometric Symbol for Harma (shown if imageError is true or before image loads) */}
      {imageError && (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative shadow-sm border transition-transform duration-200 group-hover:scale-105 shrink-0 ${
          isLight 
            ? 'bg-[#ffffff] border-[#efe8e3] text-[#765a4c]' 
            : 'bg-[#765a4c] border-[#5f473c] text-[#ffffff]'
        }`}>
          <svg 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6"
          >
            {/* Architectural Chevron / Modern Monogram H */}
            <path 
              d="M8 24V8L16 14L24 8V24" 
              stroke="currentColor" 
              strokeWidth="2.75" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path 
              d="M12 18H20" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              opacity="0.8" 
            />
            <circle 
              cx="16" 
              cy="7" 
              r="1.75" 
              fill="currentColor" 
            />
          </svg>
        </div>
      )}

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
