export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export type PageId = 
  | 'home' 
  | 'about' 
  | 'mudabbir' 
  | 'khetat' 
  | 'partners' 
  | 'news' 
  | 'blog' 
  | 'careers' 
  | 'help';

export interface PartnerItem {
  id: string;
  name: { en: string; ar: string };
  category: { en: string; ar: string };
  description: { en: string; ar: string };
  iconName: string;
  badge?: { en: string; ar: string };
  partnerType: 'integration' | 'technology' | 'channel';
}

export interface NewsArticle {
  id: string;
  title: { en: string; ar: string };
  date: string;
  category: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string[]; ar: string[] };
  readTime: { en: string; ar: string };
}

export interface BlogPost {
  id: string;
  title: { en: string; ar: string };
  date: string;
  category: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string[]; ar: string[] };
  author: { en: string; ar: string };
  readTime: { en: string; ar: string };
}

export interface CareerRole {
  id: string;
  title: { en: string; ar: string };
  department: { en: string; ar: string };
  location: { en: string; ar: string };
  type: { en: string; ar: string };
  experience: { en: string; ar: string };
  description: { en: string; ar: string };
  requirements: { en: string[]; ar: string[] };
}

export interface FaqItem {
  id: string;
  category: 'mudabbir' | 'khetat' | 'compliance' | 'general';
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}
