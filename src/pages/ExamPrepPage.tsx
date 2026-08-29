import React from 'react';
import { 
  Award, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  BookOpen, Clock, Users 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { FAQAccordion } from '../components/widgets/FAQAccordion';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { TuitionCalculator } from '../components/calculator/TuitionCalculator';

export const ExamPrepPage: React.FC = () => {
  const { openTrialModal, navigateTo } = useApp();

  const examTracks = [
    {
      title: 'Class 10 & 12 CBSE / ICSE Boards',
      badge: 'India & Gulf',
      desc: 'Line-by-line NCERT & Selina exemplar mastery, past 10 years PYQ drills, examiner answer presentation framing, and Pre-Board mock sprints.',
      stats: '98.4% Score 90%+'
    },
    {
      title: 'Cambridge IGCSE & O-Level (0580 / 0625 / 0620)',
      badge: 'CAIE & Edexcel',
      desc: 'Topical past paper vault practice, Extended tier problem deconstruction, and Paper 6 (Alternative to Practical) virtual lab simulations.',
      stats: '92.6% A* & A Rate'
    },
    {
      title: 'IB DP Higher Level (HL) & Standard Level (SL)',
      badge: 'IB Diploma',
      desc: 'Math AA/AI HL, Physics, Chem & Bio HL revision, Internal Assessment (IA) ethical mentorship, TOK essay framing, and Paper 3 data response.',
      stats: '39.4 Avg DP Score'
    },
    {
      title: 'UK GCSE (9-1) & GCE A-Levels',
      badge: 'AQA / Edexcel / OCR',
      desc: 'Specification-exact revision for Grade 8/9 targets in GCSE Maths & Triple Science, plus A-Level Further Maths and university entrance.',
      stats: '91.2% Grade 8-9'
    },
    {
      title: 'College Board AP Exams (May Series)',
      badge: 'Score 5 Focus',
      desc: 'Targeted preparation for AP Calculus AB/BC, AP Physics C, AP Chemistry, AP Biology, and AP CS A with official College Board FRQ scoring keys.',
      stats: '88.7% Score 5 Rate'
    },
    {
      title: 'Singapore PSLE & GCE O-Level (A-Math / E-Math)',
      badge: 'Singapore MOE',
      desc: 'Singapore Math 11 core heuristics, bar model word problem mastery, and MOE Science CER open-ended answer structuring.',
      stats: '87.6% PSLE AL1-AL2'
    }
  ];

  return (
    <main>
      <SEOHead
        title="Board Exam Preparation & Revision Classes | CBSE, ICSE, IGCSE, IB & AP"
        description="High-yield 1-on-1 Board Exam revision bootcamps. Master past 10 years solved papers, examiner marking keys, and mock exams for CBSE, ICSE, IGCSE, IB DP & AP."
        primaryKeyword="Board Exam Preparation"
        canonicalUrl="https://vlearnproeducation.com/exam-prep"
        breadcrumbName="Board Exam Preparation"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Board Exam Preparation' }]} />

          <div style={{ maxWidth: '840px', marginBottom: '3.5rem' }}>
            <span className="section-eyebrow">
              HIGH-YIELD REVISION BOOTCAMPS
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Board Exam Preparation & Revision Bootcamps
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Fast-track your child’s board examination scores with 1-on-1 senior board examiners. We deconstruct high-weightage topics, past 10 years solved papers, and examiner marking rubrics.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}>
            {examTracks.map((track, idx) => (
              <div
                key={idx}
                className="card-glass"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="badge badge-indigo">
                      {track.badge}
                    </span>
                    <span className="badge badge-emerald">
                      {track.stats}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {track.title}
                  </h2>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {track.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <button
                    type="button"
                    onClick={() => openTrialModal({ subject: track.title })}
                    className="btn btn-emerald"
                    style={{ width: '100%', gap: '0.4rem', fontSize: '0.85rem' }}
                  >
                    <Sparkles size={16} />
                    <span>Book Free Revision Diagnostic Class</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              TRANSPARENT REVISION RATES
            </span>
            <h2 className="section-title">
              Board Exam Bootcamp Fee Estimator
            </h2>
          </div>
          <TuitionCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <FAQAccordion
        title="Board Exam Preparation FAQs"
        subtitle="Common questions regarding our intensive 60-day revision bootcamps and past paper drilling."
      />

      <TrustBadgeBar />
    </main>
  );
};
