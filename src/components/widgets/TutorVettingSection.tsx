import React from 'react';
import { ShieldCheck, UserCheck, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { TUTORS_DATA } from '../../data/tutorsData';
import { useApp } from '../../context/AppContext';

export const TutorVettingSection: React.FC = () => {
  const { openTrialModal, openQuizModal } = useApp();

  const vettingStages = [
    {
      step: 'Stage 1',
      title: 'Top 5% Academic Screening',
      desc: 'Verification of university degrees from premier global institutions (IIT, Cambridge, Oxford, Stanford, NUS) and subject honors.'
    },
    {
      step: 'Stage 2',
      title: 'Rigorous Subject Exam (98%+ Required)',
      desc: 'Challenging curriculum competency exams written by former board examiners to test deep conceptual derivation skills.'
    },
    {
      step: 'Stage 3',
      title: 'Live Simulated Pedagogical Audits',
      desc: 'Evaluations assessing empathy, child engagement, Socratic questioning, and ability to simplify complex concepts.'
    },
    {
      step: 'Stage 4',
      title: 'Identity & Child Safeguarding Background Checks',
      desc: '100% verified credentials, government ID screening, and strict COPPA / GDPR-K child protection compliance.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            EEAT & FACULTY EXCELLENCE
          </span>
          <h2 className="section-title">
            Certified Faculty for 1-on-1 Online Tuition Classes
          </h2>
          <p className="section-subtitle">
            Your child deserves an extraordinary mentor. We accept only the top 1.8% of global tutor applicants—graduates from Cambridge, IITs, and premier universities with verified teaching credentials.
          </p>
        </div>

        {/* Vetting Stages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {vettingStages.map((stage, idx) => (
            <div
              key={idx}
              className="card-solid"
              style={{
                padding: '1.75rem',
                borderLeft: '4px solid #4F46E5',
                position: 'relative'
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-link)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stage.step}
              </span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-heading-secondary)', margin: '0.35rem 0 0.5rem 0' }}>
                {stage.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Educators Carousel Cards */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                Meet a Few of Our Senior Faculty
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
                Senior professors, PhD scholars, and international board examiners dedicated to 1-on-1 mentorship.
              </p>
            </div>
            <button
              onClick={openQuizModal}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.35rem' }}
            >
              <span>Match With a Tutor (60s)</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {TUTORS_DATA.slice(0, 3).map((tutor) => (
              <div
                key={tutor.id}
                className="card-glass"
                style={{ padding: '1.75rem' }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  {tutor.avatarUrl ? (
                    <img
                      src={tutor.avatarUrl}
                      alt={`${tutor.name} - ${tutor.title}`}
                      loading="lazy"
                      decoding="async"
                      width="54"
                      height="54"
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: 'var(--radius-md)',
                        objectFit: 'cover',
                        flexShrink: 0,
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: 'var(--radius-md)',
                      background: tutor.avatarGradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      flexShrink: 0
                    }}>
                      {tutor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      {tutor.name}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 600, margin: '0.15rem 0' }}>
                      {tutor.degree}
                    </p>
                    <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                      {tutor.university}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {tutor.specialty}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {tutor.subjects.map((sub, i) => (
                    <span key={i} className="badge badge-indigo" style={{ fontSize: '0.7rem' }}>
                      {sub}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => openTrialModal({ subject: tutor.subjects[0] })}
                  className="btn btn-emerald btn-sm"
                  style={{ width: '100%', gap: '0.4rem' }}
                >
                  <span>Book Free Trial with {tutor.name.split(' ')[0]}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
