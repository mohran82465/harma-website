import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { newsArticles } from '../data/mockContent';
import { NewsArticle } from '../types';

export const NewsPage: React.FC = () => {
  const { lang, dir, t, currentDetailId, navigateTo, openDemoModal } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Sync with currentDetailId from URL if present
  useEffect(() => {
    if (currentDetailId) {
      setSelectedArticleId(currentDetailId);
    }
  }, [currentDetailId]);

  const selectedArticle = newsArticles.find((a) => a.id === selectedArticleId);

  const handleSelect = (article: NewsArticle) => {
    setSelectedArticleId(article.id);
    navigateTo('news', article.id);
  };

  const handleBack = () => {
    setSelectedArticleId(null);
    navigateTo('news');
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#f9f6f4] via-[#ffffff] to-[#f9f6f4] py-14 sm:py-20 border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe8e3] text-[#765a4c] text-xs font-semibold mb-4">
              <Newspaper className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المركز الإعلامي والأخبار' : 'Media Center & Corporate News'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35261f] font-heading leading-tight">
              {lang === 'ar' ? (
                <>
                  أحدث الأخبار والبيانات <br />
                  <span className="text-[#765a4c]">والإنجازات لشركة هارما</span>
                </>
              ) : (
                <>
                  Official Press Releases, Milestones <br />
                  <span className="text-[#765a4c]">& Announcements</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#5f473c] leading-relaxed">
              {lang === 'ar'
                ? 'تابع أحدث التطورات التقنية، اعتمادات هيئة الزكاة، إطلاق المنتجات، ومشاركات هارما في الفعاليات والمنتديات الوطنية.'
                : 'Follow our official announcements, ZATCA certifications, product releases, and major company milestones in Saudi Arabia.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTENT AREA (LIST OR DETAIL VIEW) */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {selectedArticle ? (
            /* DETAIL VIEW TEMPLATE (Reusable for CMS wiring later) */
            <article className="animate-in fade-in duration-200">
              {/* Back Button */}
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#765a4c] hover:text-[#5f473c] mb-6 p-2 rounded-lg hover:bg-[#f9f6f4] transition-colors"
              >
                {dir === 'rtl' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{t.common.backToList}</span>
              </button>

              {/* Article Header */}
              <div className="border-b border-[#ded2cb] pb-6 mb-8">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#5f473c] mb-3">
                  <span className="font-bold text-[#765a4c] bg-[#efe8e3] px-2.5 py-0.5 rounded-full">
                    {selectedArticle.category[lang]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#a38474]" />
                    {selectedArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#a38474]" />
                    {selectedArticle.readTime[lang]} {t.common.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#35261f] font-heading leading-tight">
                  {selectedArticle.title[lang]}
                </h2>
              </div>

              {/* Article Paragraphs */}
              <div className="prose max-w-none text-[#4a362c] text-sm sm:text-base leading-relaxed space-y-6">
                {selectedArticle.content[lang].map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share & Demo Footer inside article */}
              <div className="mt-12 pt-8 border-t border-[#ded2cb] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f9f6f4] p-6 rounded-2xl">
                <div>
                  <h4 className="font-bold text-sm text-[#35261f]">
                    {lang === 'ar' ? 'مهتم بتطبيق هذا الحل في منشأتك؟' : 'Interested in Implementing This Solution?'}
                  </h4>
                  <p className="text-xs text-[#5f473c] mt-0.5">
                    {lang === 'ar' ? 'فريقنا في الرياض مستعد لتقديم الاستشارة التقنية.' : 'Our local team in Riyadh is ready to assist.'}
                  </p>
                </div>
                <Button variant="primary" size="sm" onClick={() => openDemoModal()}>
                  {t.nav.requestDemo}
                </Button>
              </div>
            </article>
          ) : (
            /* LIST VIEW TEMPLATE */
            <div className="space-y-6">
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => handleSelect(article)}
                  className="p-6 sm:p-8 rounded-2xl border border-[#ded2cb] bg-[#ffffff] hover:bg-[#f9f6f4]/60 hover:border-[#765a4c]/60 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#5f473c] mb-3">
                    <span className="font-bold text-[#765a4c] bg-[#efe8e3] px-2.5 py-0.5 rounded-full">
                      {article.category[lang]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#a38474]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#a38474]" />
                      {article.readTime[lang]}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#35261f] group-hover:text-[#765a4c] transition-colors font-heading leading-snug">
                    {article.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5f473c] mt-3 leading-relaxed">
                    {article.excerpt[lang]}
                  </p>

                  <div className="mt-5 pt-3 border-t border-[#efe8e3] flex items-center gap-1 text-xs font-semibold text-[#765a4c] group-hover:underline">
                    <span>{t.common.readMore}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
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
