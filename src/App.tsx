import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/widgets/WhatsAppFloat';
import { MobileStickyCTA } from './components/layout/MobileStickyCTA';
import { BookTrialModal } from './components/modals/BookTrialModal';
import { TutorMatchQuiz } from './components/quiz/TutorMatchQuiz';

import { HomePage } from './pages/HomePage';

// Code-split subpages to eliminate unused JS on initial load
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const CoursesPage = React.lazy(() => import('./pages/CoursesPage').then(m => ({ default: m.CoursesPage })));
const BoardsHubPage = React.lazy(() => import('./pages/BoardsHubPage').then(m => ({ default: m.BoardsHubPage })));
const BoardLandingPage = React.lazy(() => import('./pages/BoardLandingPage').then(m => ({ default: m.BoardLandingPage })));
const SubjectsHubPage = React.lazy(() => import('./pages/SubjectsHubPage').then(m => ({ default: m.SubjectsHubPage })));
const SubjectLandingPage = React.lazy(() => import('./pages/SubjectLandingPage').then(m => ({ default: m.SubjectLandingPage })));
const LanguagesHubPage = React.lazy(() => import('./pages/LanguagesHubPage').then(m => ({ default: m.LanguagesHubPage })));
const LanguageLandingPage = React.lazy(() => import('./pages/LanguageLandingPage').then(m => ({ default: m.LanguageLandingPage })));
const CountriesHubPage = React.lazy(() => import('./pages/CountriesHubPage').then(m => ({ default: m.CountriesHubPage })));
const CountryLandingPage = React.lazy(() => import('./pages/CountryLandingPage').then(m => ({ default: m.CountryLandingPage })));
const ExamPrepPage = React.lazy(() => import('./pages/ExamPrepPage').then(m => ({ default: m.ExamPrepPage })));
const PricingPage = React.lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const FreeDemoPage = React.lazy(() => import('./pages/FreeDemoPage').then(m => ({ default: m.FreeDemoPage })));
const BlogHubPage = React.lazy(() => import('./pages/BlogHubPage').then(m => ({ default: m.BlogHubPage })));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const CareersPage = React.lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = React.lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const RefundPolicyPage = React.lazy(() => import('./pages/RefundPolicyPage').then(m => ({ default: m.RefundPolicyPage })));

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
        <React.Suspense fallback={<div style={{ minHeight: '60vh', background: 'var(--bg-primary)' }} />}>
          {renderActivePage()}
        </React.Suspense>
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
