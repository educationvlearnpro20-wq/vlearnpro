import React from 'react';
import { Sparkles, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { BoardId } from '../types';
import { BOARDS_DATA } from '../data/boardsData';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { FAQAccordion } from '../components/widgets/FAQAccordion';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { TuitionCalculator } from '../components/calculator/TuitionCalculator';

interface BoardLandingPageProps {
  boardId: BoardId;
}

export const BoardLandingPage: React.FC<BoardLandingPageProps> = ({ boardId }) => {
  const { openTrialModal, openQuizModal } = useApp();
  const board = BOARDS_DATA[boardId] || BOARDS_DATA.cbse;

  return (
    <main>
      <SEOHead
        title={board.metaTitle}
        description={board.metaDescription}
        primaryKeyword={board.primaryKeyword}
        canonicalUrl={`https://vlearnproeducation.com/boards/${board.id}`}
        faqs={board.faqs}
        breadcrumbName={`${board.shortName} Tuition`}
        courseSchema={{
          name: board.name,
          description: board.description,
          provider: 'VLearnPro Education'
        }}
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
              { label: 'Boards & Curricula', path: { type: 'boards-hub' } },
              { label: `${board.shortName} Tuition` }
            ]}
          />

          <div style={{ maxWidth: '860px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.85rem', background: 'var(--brand-primary-light)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-full)', color: 'var(--brand-primary)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>
              <Award size={14} />
              <span>{board.grades} • {board.badge}</span>
            </div>

            <h1 style={{ marginBottom: '1rem', color: 'var(--text-heading-primary)' }}>
              {board.name}
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--text-heading-secondary)', fontWeight: 500, marginBottom: '1.25rem', lineHeight: 1.5 }}>
              {board.tagline}
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
              {board.description}
            </p>

            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              marginBottom: '2.25rem'
            }}>
              {board.stats.map((s, idx) => (
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
                onClick={() => openTrialModal({ board: board.shortName })}
                className="btn btn-emerald btn-lg"
                style={{ gap: '0.5rem' }}
              >
                <Sparkles size={18} />
                <span>Book Free {board.shortName} Diagnostic Class</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={openQuizModal}
                className="btn btn-secondary btn-lg"
              >
                Match Ideal {board.shortName} Tutor (60s)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <TrustBadgeBar />

      {/* Overview & Key Pillars */}
      <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              SYLLABUS MASTERY
            </span>
            <h2 className="section-title">
              Why Our {board.shortName} Pedagogy Outperforms
            </h2>
            <p className="section-subtitle">
              Comprehensive alignment with official {board.shortName} marking schemes, past paper question vaults, and examiner techniques.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            {board.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="card-glass"
                style={{ padding: '1.75rem' }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--brand-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-primary)',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle2 size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-heading-secondary)', marginBottom: '0.5rem' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Curriculum Structure Stages */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading-primary)', textAlign: 'center', marginBottom: '2rem' }}>
              {board.shortName} Grade-by-Grade Curriculum Structure
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
              {board.curriculumStructure.map((stg, idx) => (
                <div
                  key={idx}
                  className="card-solid"
                  style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <span className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
                      {stg.grades}
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-heading-secondary)', marginBottom: '0.5rem' }}>
                      {stg.stage}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {stg.focus}
                    </p>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-link)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Key Subjects:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {stg.keySubjects.map((sub, i) => (
                        <span key={i} style={{ padding: '0.2rem 0.5rem', background: 'var(--brand-primary-light)', borderRadius: 'var(--radius-xs)', fontSize: '0.75rem', color: 'var(--text-primary)' }}>
                          {sub}
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
              AFFORDABLE 1-ON-1 PLANS
            </span>
            <h2 className="section-title">
              {board.shortName} Tuition Fee Estimator
            </h2>
            <p className="section-subtitle">
              Calculate your child’s customized investment with multi-currency support and volume discounts.
            </p>
          </div>

          <TuitionCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Board Specific FAQs */}
      <FAQAccordion
        customFaqs={board.faqs}
        title={`${board.shortName} Tuition FAQs`}
        subtitle={`Frequently asked questions by parents regarding our 1-on-1 ${board.shortName} classes.`}
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
            Ready to Master {board.shortName} with Confidence?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.75rem', fontSize: '1rem' }}>
            Book a complimentary 45-minute diagnostic session with our certified {board.shortName} faculty.
          </p>
          <button
            type="button"
            onClick={() => openTrialModal({ board: board.shortName })}
            className="btn btn-emerald btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <Sparkles size={18} />
            <span>Book Free {board.shortName} Trial Class</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};
