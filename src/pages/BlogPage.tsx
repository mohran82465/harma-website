import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  ArrowLeft, 
  Share2, 
  Tag, 
  FileText 
} from 'lucide-react';
import { blogPosts } from '../data/mockContent';
import { BlogPost } from '../types';

export const BlogPage: React.FC = () => {
  const { lang, dir, t, currentDetailId, navigateTo, openDemoModal } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    if (currentDetailId) {
      setSelectedPostId(currentDetailId);
    }
  }, [currentDetailId]);

  const selectedPost = blogPosts.find((p) => p.id === selectedPostId);

  const handleSelect = (post: BlogPost) => {
    setSelectedPostId(post.id);
    navigateTo('blog', post.id);
  };

  const handleBack = () => {
    setSelectedPostId(null);
    navigateTo('blog');
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#f9f6f4] via-[#ffffff] to-[#f9f6f4] py-14 sm:py-20 border-b border-[#ded2cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe8e3] text-[#765a4c] text-xs font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المدونة المعرفية والأدلة الفنية' : 'Knowledge Base & Technical Guides'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35261f] font-heading leading-tight">
              {lang === 'ar' ? (
                <>
                  أدلة ورؤى متخصصة في <br />
                  <span className="text-[#765a4c]">تقنية الضيافة وأنظمة الشركات</span>
                </>
              ) : (
                <>
                  Expert Insights & Practical Guides for <br />
                  <span className="text-[#765a4c]">Hospitality Tech & Enterprise SaaS</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#5f473c] leading-relaxed">
              {lang === 'ar'
                ? 'مقالات تحليلية وأدلة استرشادية حول متطلبات هيئة الزكاة، تحسين أداء الإشغال الفندقي، وتصميم الأنظمة متعددة الشركات في المملكة.'
                : 'In-depth analysis, compliance playbooks, and best practices authored by Harma’s senior engineers and hospitality consultants in Riyadh.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTENT AREA */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {selectedPost ? (
            /* DETAIL VIEW TEMPLATE */
            <article className="animate-in fade-in duration-200">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#765a4c] hover:text-[#5f473c] mb-6 p-2 rounded-lg hover:bg-[#f9f6f4] transition-colors"
              >
                {dir === 'rtl' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{t.common.backToList}</span>
              </button>

              <div className="border-b border-[#ded2cb] pb-6 mb-8">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#5f473c] mb-3">
                  <span className="font-bold text-[#765a4c] bg-[#efe8e3] px-2.5 py-0.5 rounded-full">
                    {selectedPost.category[lang]}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#a38474]" />
                    {selectedPost.author[lang]}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#a38474]" />
                    {selectedPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#a38474]" />
                    {selectedPost.readTime[lang]}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#35261f] font-heading leading-tight">
                  {selectedPost.title[lang]}
                </h2>
              </div>

              <div className="prose max-w-none text-[#4a362c] text-sm sm:text-base leading-relaxed space-y-6">
                {selectedPost.content[lang].map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#ded2cb] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f9f6f4] p-6 rounded-2xl">
                <div>
                  <h4 className="font-bold text-sm text-[#35261f]">
                    {lang === 'ar' ? 'هل تواجه تحدياً في تطبيق هذه المعايير؟' : 'Need Support Implementing These Best Practices?'}
                  </h4>
                  <p className="text-xs text-[#5f473c] mt-0.5">
                    {lang === 'ar' ? 'تواصل مع مستشاري الحلول الفندقية في هارما.' : 'Connect with our Riyadh-based enterprise solutions architects.'}
                  </p>
                </div>
                <Button variant="primary" size="sm" onClick={() => openDemoModal()}>
                  {t.nav.requestDemo}
                </Button>
              </div>
            </article>
          ) : (
            /* LIST VIEW TEMPLATE */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleSelect(post)}
                  className="p-6 rounded-2xl border border-[#ded2cb] bg-[#ffffff] hover:bg-[#f9f6f4]/60 hover:border-[#765a4c]/60 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#5f473c] mb-3">
                      <span className="font-bold text-[#765a4c] bg-[#efe8e3] px-2 py-0.5 rounded-full text-[11px]">
                        {post.category[lang]}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3 text-[#a38474]" />
                        {post.readTime[lang]}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#35261f] group-hover:text-[#765a4c] transition-colors font-heading leading-snug">
                      {post.title[lang]}
                    </h3>

                    <p className="text-xs text-[#5f473c] mt-2.5 leading-relaxed line-clamp-3">
                      {post.excerpt[lang]}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#efe8e3] flex items-center justify-between text-xs text-[#765a4c] font-semibold">
                    <span>{t.common.readMore}</span>
                    <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
