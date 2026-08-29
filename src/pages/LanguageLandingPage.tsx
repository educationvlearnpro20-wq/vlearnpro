import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { LanguageId } from '../types';
import { LANGUAGES_DATA } from '../data/languagesData';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { FAQAccordion } from '../components/widgets/FAQAccordion';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { TuitionCalculator } from '../components/calculator/TuitionCalculator';

interface LanguageLandingPageProps {
  languageId: LanguageId;
}

export const LanguageLandingPage: React.FC<LanguageLandingPageProps> = ({ languageId }) => {
  const { openTrialModal, openQuizModal } = useApp();
  const lang = LANGUAGES_DATA[languageId] || LANGUAGES_DATA.spanish;

  return (
    <main>
      <SEOHead
        title={lang.metaTitle}
        description={lang.metaDescription}
        primaryKeyword={lang.primaryKeyword}
        canonicalUrl={`https://vlearnproeducation.com/languages/${lang.id}`}
        faqs={lang.faqs}
        breadcrumbName={lang.name}
      />

      {/* Hero Section */}
      <section style={{
        paddingTop: '2.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs
            items={[
              { label: 'Languages Directory', path: { type: 'languages-hub' } },
              { label: lang.name }
            ]}
          />

          <div style={{ maxWidth: '860px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.85rem', background: 'rgba(79, 70, 229, 0.15)', border: '1px solid rgba(79, 70, 229, 0.3)', borderRadius: 'var(--radius-full)', color: '#818CF8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>
              <span>{lang.flag}</span>
              <span>{lang.levels} • 1-on-1 Certified Native Mentors</span>
            </div>

            <h1 style={{ marginBottom: '1rem' }}>
              {lang.name}
            </h1>

            <p style={{ fontSize: '1.25rem', color: '#E2E8F0', fontWeight: 500, marginBottom: '1.25rem', lineHeight: 1.5 }}>
              Native Language: <strong>{lang.nativeName}</strong>
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
              {lang.description}
            </p>

            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              marginBottom: '2.25rem'
            }}>
              {lang.stats.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-heading)' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => openTrialModal({ subject: lang.name })}
                className="btn btn-emerald btn-lg"
                style={{ gap: '0.5rem' }}
              >
                <Sparkles size={18} />
                <span>Book Free {lang.name.split(' ')[0]} Trial Class</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={openQuizModal}
                className="btn btn-secondary btn-lg"
              >
                Match Ideal Language Tutor (60s)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBadgeBar />

      {/* Learning Tracks & Exam Alignments */}
      <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              STRUCTURED LEARNING PATHWAYS
            </span>
            <h2 className="section-title">
              Tailored {lang.name.split(' ')[0]} Programs
            </h2>
            <p className="section-subtitle">
              Whether preparing for international school curriculum exams or building natural conversational fluency.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            {lang.learningTracks.map((track, idx) => (
              <div
                key={idx}
                className="card-glass"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {track.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {track.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', fontSize: '0.78rem', color: '#2563EB' }}>
                  <strong>Ideal for:</strong> {track.forWho}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Recognized */}
          <div style={{
            padding: '2rem',
            background: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '1.25rem' }}>
              International Exam & Certification Alignment
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              {lang.certificationAlignment.map((cert, i) => (
                <div key={i} style={{ padding: '0.5rem 1rem', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.3)', borderRadius: 'var(--radius-full)', color: '#2563EB', fontSize: '0.85rem', fontWeight: 600 }}>
                  ✓ {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Fee Calculator */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              AFFORDABLE 1-ON-1 LANGUAGE PLANS
            </span>
            <h2 className="section-title">
              {lang.name.split(' ')[0]} Tuition Fee Estimator
            </h2>
            <p className="section-subtitle">
              Calculate your customized weekly/monthly language immersion plan.
            </p>
          </div>

          <TuitionCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Language FAQs */}
      <FAQAccordion
        customFaqs={lang.faqs}
        title={`${lang.name.split(' ')[0]} Classes FAQs`}
        subtitle={`Everything you need to know about our 1-on-1 ${lang.name.split(' ')[0]} online classes.`}
      />

      {/* Conversion Banner */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #1E1B4B 0%, #064E3B 100%)',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Begin Your Child’s {lang.name.split(' ')[0]} Journey Today
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '1rem' }}>
            Book a complimentary 45-minute 1-on-1 trial class with a certified native speaker.
          </p>
          <button
            type="button"
            onClick={() => openTrialModal({ subject: lang.name })}
            className="btn btn-emerald btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <Sparkles size={18} />
            <span>Book Free 1-on-1 Trial Class</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};
