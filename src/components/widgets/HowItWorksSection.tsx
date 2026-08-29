import React from 'react';
import { Sparkles, Calendar, BookOpen, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HowItWorksSection: React.FC = () => {
  const { openTrialModal } = useApp();

  const steps = [
    {
      num: '01',
      title: 'Free Diagnostic 1-on-1 Class',
      desc: 'Book a 45-minute zero-obligation diagnostic session with a top 1.8% verified tutor. We assess conceptual strengths, identify gaps from past grades, and build instant rapport.',
      highlight: 'Zero Payment Required',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80'
    },
    {
      num: '02',
      title: 'Personalized Syllabus Blueprint',
      desc: 'Our academic director crafts a customized learning roadmap synchronized with your child’s exact school calendar, upcoming unit tests, and long-term board exam goals.',
      highlight: '100% Custom Roadmap',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80'
    },
    {
      num: '03',
      title: 'Live 1-on-1 Interactive Mentorship',
      desc: 'Engaging live video classes with dual-way interactive digital whiteboards, past paper question vaults, and automatic HD recording of every single lesson.',
      highlight: 'HD Class Recordings',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80'
    },
    {
      num: '04',
      title: 'Measurable Grade Leap & Top Results',
      desc: 'Watch test scores soar with bi-weekly parent analytics reviews, continuous homework support, and 24/7 priority WhatsApp doubt clearing before school exams.',
      highlight: '+2 Letter Grades Avg',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            SEAMLESS ONLINE TUITION EXPERIENCE
          </span>
          <h2 className="section-title">
            How Our 1-on-1 Online Tuition Classes Transform Results
          </h2>
          <p className="section-subtitle">
            From your child’s first free 1-on-1 diagnostic session to top board examination distinctions, experience how our structured online tuition classes deliver measurable grade jumps.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Step Number & Highlight */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: '#2563EB',
                    background: 'rgba(37, 99, 235, 0.12)',
                    border: '1px solid rgba(37, 99, 235, 0.3)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    STEP {step.num}
                  </span>
                </div>

                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="240"
                  style={{
                    width: '100%',
                    height: '130px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1rem',
                    border: '1px solid var(--border-subtle)'
                  }}
                />

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981', fontSize: '0.8rem', fontWeight: 600 }}>
                <CheckCircle2 size={14} />
                <span>Parent Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => openTrialModal()}
            className="btn btn-emerald btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <span>Start Step 1: Book Your Free Trial Today</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
