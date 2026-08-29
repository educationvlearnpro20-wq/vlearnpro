import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/widgets/WhatsAppFloat';
import { MobileStickyCTA } from './components/layout/MobileStickyCTA';
import { BookTrialModal } from './components/modals/BookTrialModal';
import { TutorMatchQuiz } from './components/quiz/TutorMatchQuiz';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { BoardsHubPage } from './pages/BoardsHubPage';
import { BoardLandingPage } from './pages/BoardLandingPage';
import { SubjectsHubPage } from './pages/SubjectsHubPage';
import { SubjectLandingPage } from './pages/SubjectLandingPage';
import { LanguagesHubPage } from './pages/LanguagesHubPage';
import { LanguageLandingPage } from './pages/LanguageLandingPage';
import { CountriesHubPage } from './pages/CountriesHubPage';
import { CountryLandingPage } from './pages/CountryLandingPage';
import { ExamPrepPage } from './pages/ExamPrepPage';
import { PricingPage } from './pages/PricingPage';
import { FreeDemoPage } from './pages/FreeDemoPage';
import { BlogHubPage } from './pages/BlogHubPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';

export const AppContent: React.FC = () => {
  const { currentPath, toastMessage } = useApp();

  const renderActivePage = () => {
    switch (currentPath.type) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage />;
      case 'boards-hub':
        return <BoardsHubPage />;
      case 'board':
        return <BoardLandingPage boardId={currentPath.id} />;
      case 'subjects-hub':
        return <SubjectsHubPage />;
      case 'subject':
        return <SubjectLandingPage subjectId={currentPath.id} />;
      case 'languages-hub':
        return <LanguagesHubPage />;
      case 'language':
        return <LanguageLandingPage languageId={currentPath.id} />;
      case 'countries-hub':
        return <CountriesHubPage />;
      case 'country':
        return <CountryLandingPage countryCode={currentPath.code} />;
      case 'exam-prep':
        return <ExamPrepPage />;
      case 'pricing':
        return <PricingPage />;
      case 'free-demo':
        return <FreeDemoPage />;
      case 'blog':
        return <BlogHubPage />;
      case 'blog-post':
        return <BlogPostPage slug={currentPath.slug} />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy-policy':
      case 'child-safety':
        return <PrivacyPolicyPage />;
      case 'terms-of-service':
        return <TermsPage />;
      case 'refund-policy':
        return <RefundPolicyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        {renderActivePage()}
      </div>
      <Footer />

      {/* Floating and Overlay Elements */}
      <WhatsAppFloat />
      <MobileStickyCTA />
      <BookTrialModal />
      <TutorMatchQuiz />

      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 350,
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          color: '#FFFFFF',
          padding: '0.85rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          fontSize: '0.875rem',
          fontWeight: 600,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: 'fadeIn 0.3s ease'
        }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default AppContent;
