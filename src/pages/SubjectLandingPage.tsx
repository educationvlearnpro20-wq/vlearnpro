import React from 'react';
import { Sparkles, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { SubjectId } from '../types';
import { SUBJECTS_DATA } from '../data/subjectsData';
import { COUNTRIES_DATA } from '../data/countriesData';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { FAQAccordion } from '../components/widgets/FAQAccordion';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { TuitionCalculator } from '../components/calculator/TuitionCalculator';

interface SubjectLandingPageProps {
  subjectId: SubjectId;
}

const SUBJECT_HERO_IMAGES: Record<string, string> = {
  maths: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  science: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  physics: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  chemistry: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  biology: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  coding: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  english: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80',
  'spoken-english': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80',
  'communication-skills': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80',
  'public-speaking': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80',
  'board-exam-prep': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
};

export const SubjectLandingPage: React.FC<SubjectLandingPageProps> = ({ subjectId }) => {
  const { openTrialModal, openQuizModal, selectedCountry } = useApp();
  const subject = SUBJECTS_DATA[subjectId] || SUBJECTS_DATA.maths;
  const country = COUNTRIES_DATA[selectedCountry] || COUNTRIES_DATA.usa;

  const heroImg = SUBJECT_HERO_IMAGES[subjectId] || SUBJECT_HERO_IMAGES.maths;

  return (
    <main>
      <SEOHead
        title={subject.metaTitle}
        description={subject.metaDescription}
        primaryKeyword={subject.primaryKeyword}
        canonicalUrl={`https://vlearnproeducation.com/subjects/${subject.id}`}
        faqs={subject.faqs}
        breadcrumbName={subject.name}
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
              { label: 'Subjects Directory', path: { type: 'subjects-hub' } },
              { label: subject.name }
            ]}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.85rem', background: 'rgba(79, 70, 229, 0.15)', border: '1px solid rgba(79, 70, 229, 0.3)', borderRadius: 'var(--radius-full)', color: '#818CF8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>
                <Zap size={14} />
                <span>{subject.grades} • 1-on-1 Personalized Live Classes</span>
              </div>

              <h1 style={{ marginBottom: '1rem' }}>
                {subject.name}
              </h1>

              <p style={{ fontSize: '1.25rem', color: '#E2E8F0', fontWeight: 500, marginBottom: '1.25rem', lineHeight: 1.5 }}>
                {subject.tagline}
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {subject.description}
              </p>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {subject.stats.map((s, idx) => (
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
                  onClick={() => openTrialModal({ subject: subject.name })}
                  className="btn btn-emerald btn-lg"
                  style={{ gap: '0.5rem' }}
                >
                  <Sparkles size={18} />
                  <span>Book Free {subject.name.replace('Online', '')} Trial</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={openQuizModal}
                  className="btn btn-secondary btn-lg"
                >
                  Match Top {subject.name.split(' ')[1] || 'Subject'} Tutor (60s)
                </button>
              </div>
            </div>

            <div>
              <img
                src={heroImg}
                alt={`${subject.name} 1-on-1 Online Class`}
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
                style={{
                  width: '100%',
                  height: '340px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBadgeBar />

      {/* Learning Outcomes & Grade Breakdown */}
      <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              CORE LEARNING BLUEPRINT
            </span>
            <h2 className="section-title">
              What Your Child Will Master in {subject.name}
            </h2>
            <p className="section-subtitle">
              Structured progressive outcomes turning stumbling blocks into deep conceptual intuition.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}>
            {subject.learningOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="card-glass"
                style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
              >
                <CheckCircle2 size={20} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {outcome}
                </span>
              </div>
            ))}
          </div>

          {/* Grade Level Tracks */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '2rem' }}>
              Grade-by-Grade Curriculum Breakdown
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
              {subject.gradeLevels.map((gl, idx) => (
                <div
                  key={idx}
                  className="card-solid"
                  style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <span className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
                      {gl.gradeRange}
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      {gl.title}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: '#2563EB', lineHeight: 1.45, marginBottom: '1rem', fontStyle: 'italic' }}>
                      Methodology: {gl.methodology}
                    </p>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Key Modules:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {gl.topics.map((t, i) => (
                        <span key={i} style={{ padding: '0.2rem 0.5rem', background: 'rgba(15, 23, 42, 0.05)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)', fontSize: '0.75rem', color: 'var(--text-primary)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
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
              AFFORDABLE 1-ON-1 TUITION
            </span>
            <h2 className="section-title">
              {subject.name} Fee Estimator
            </h2>
            <p className="section-subtitle">
              Calculate your customized weekly/monthly tuition plan in your local currency.
            </p>
          </div>

          <TuitionCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Subject FAQs */}
      <FAQAccordion
        customFaqs={subject.faqs}
        title={`${subject.name} FAQs`}
        subtitle={`Common questions regarding our 1-on-1 online classes for ${subject.name}.`}
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
            Transform Your Child’s {subject.name.replace('Online', '')} Scores Today
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '1rem' }}>
            Book a complimentary 45-minute diagnostic session with our certified {subject.name.split(' ')[1] || 'subject'} educators.
          </p>
          <button
            type="button"
            onClick={() => openTrialModal({ subject: subject.name })}
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
