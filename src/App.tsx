/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MudabbirPage } from './pages/MudabbirPage';
import { KhetatPage } from './pages/KhetatPage';
import { PartnersPage } from './pages/PartnersPage';
import { NewsPage } from './pages/NewsPage';
import { BlogPage } from './pages/BlogPage';
import { CareersPage } from './pages/CareersPage';
import { HelpCenterPage } from './pages/HelpCenterPage';

const AppContent: React.FC = () => {
  const { currentPage, lang } = useLanguage();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'mudabbir':
        return <MudabbirPage />;
      case 'khetat':
        return <KhetatPage />;
      case 'partners':
        return <PartnersPage />;
      case 'news':
        return <NewsPage />;
      case 'blog':
        return <BlogPage />;
      case 'careers':
        return <CareersPage />;
      case 'help':
        return <HelpCenterPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#35261f]">
      {/* Sitewide Top Header with Navigation & Language Switcher */}
      <Header />

      {/* Main Content Area with smooth key-based cross-fade container */}
      <main key={`${currentPage}-${lang}`} className="flex-1 animate-in fade-in duration-200">
        {renderPage()}
      </main>

      {/* Sitewide Corporate Footer */}
      <Footer />

      {/* Universal Enterprise Demo Booking Modal */}
      <DemoModal />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
