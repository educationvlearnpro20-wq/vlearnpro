import React, { useState } from 'react';
import { BookOpen, Award, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GradeLevelTabs: React.FC = () => {
  const { openTrialModal, navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState<'primary' | 'middle' | 'secondary' | 'senior'>('secondary');

  const tabData = {
    primary: {
      title: 'Primary School (Grades 1 to 5)',
      eyebrow: 'AGES 6 - 10 • FOUNDATIONS & CURIOSITY',
      tagline: 'Cultivating love for learning, mental numeracy, phonics and creative writing without academic stress.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=450&q=75&fm=webp',
      subjects: ['Singapore Primary Math (Bar Models)', 'Primary Science & Phonics', 'English Reading & Grammar', 'Creative Coding (Scratch)', 'Spanish / French for Kids'],
      highlights: [
        'Concrete-Pictorial-Abstract (CPA) math approach',
        'Gamified interactive lessons that hold attention',
        'Gentle, encouraging educators trained in child psychology',
        'Weekly parent audio updates with homework support'
      ]
    },
    middle: {
      title: 'Middle School (Grades 6 to 8)',
      eyebrow: 'AGES 11 - 13 • ANALYTICAL TRANSITION',
      tagline: 'Bridging foundational concepts into rigorous algebra, separated sciences, and structured essay writing.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=450&q=75&fm=webp',
      subjects: ['Pre-Algebra & Deductive Geometry', 'Integrated Physics, Chem, Bio', 'PEEL Essay Writing & Literature', 'Python Programming & Robotics', 'Spoken English & Public Speaking'],
      highlights: [
        'Step-by-step problem deconstruction',
        'Cambridge Checkpoint & Middle Years preparation',
        'Building disciplined study routines and note-taking',
        'Eliminating pre-high school learning gaps'
      ]
    },
    secondary: {
      title: 'Secondary & Board Exam (Grades 9 to 10)',
      eyebrow: 'AGES 14 - 16 • HIGH-YIELD BOARD MASTERY',
      tagline: 'Targeting 90%+ in CBSE, ICSE, IGCSE & GCSE examinations with topical past paper mastery.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=450&q=75&fm=webp',
      subjects: ['Grade 10 Higher Math & Coordinate Geometry', 'Physics, Chemistry & Biology (Separate)', 'IGCSE / GCSE Extended Math & Sciences', 'English Language & Literature Prep', 'AP Computer Science Principles'],
      highlights: [
        '10+ years solved past paper question banks',
        'Examiner marking scheme & keyword training',
        'Time-pressure mock test series with feedback',
        'Direct exam strategy & formula shortcut sheets'
      ]
    },
    senior: {
      title: 'Senior Secondary & College Prep (Grades 11 to 12)',
      eyebrow: 'AGES 17 - 18 • AP, IB DP & A-LEVEL EXCELLENCE',
      tagline: 'Specialized 1-on-1 coaching for AP Exams, IB Higher Level (HL) subjects, and A-Level distinctions.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=450&q=75&fm=webp',
      subjects: ['AP Calculus AB/BC & IB Math AA HL', 'AP Physics C / IB Physics HL', 'AP Chemistry & Biology', 'A-Level Pure Maths & Further Maths', 'Digital SAT / ACT & Admissions Prep'],
      highlights: [
        'Taught by PhDs, IITians and Cambridge/Oxbridge alumni',
        'Internal Assessment (IA) & Extended Essay (EE) guidance',
        'Advanced Graphic Display Calculator (TI-Nspire/Casio) mastery',
        'Synoptic problem-solving and university entrance test sync'
      ]
    }
  };

  const current = tabData[activeTab];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            PROGRAMS TAILORED BY AGE & STAGE
          </span>
          <h2 className="section-title">
            Grade 1 to 12 Learning Pathways
          </h2>
          <p className="section-subtitle">
            Every developmental stage requires distinct pedagogical techniques. Explore our age-specific curriculum roadmaps.
          </p>

          {/* Tab Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem', marginTop: '2rem' }}>
            {[
              { id: 'primary', label: 'Primary (Grades 1-5)' },
              { id: 'middle', label: 'Middle (Grades 6-8)' },
              { id: 'secondary', label: 'Secondary (Grades 9-10)' },
              { id: 'senior', label: 'Senior (Grades 11-12)' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '0.85rem 1rem',
                  fontSize: '0.875rem',
                  borderRadius: 'var(--radius-md)',
                  background: activeTab === tab.id ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : 'rgba(255, 255, 255, 0.04)',
                  border: activeTab === tab.id ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-secondary)',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === tab.id ? 'var(--shadow-md)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Detail Card */}
        <div className="card-glass" style={{ padding: '2.5rem 2rem', border: '1px solid rgba(79, 70, 229, 0.3)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
                {current.eyebrow}
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                {current.title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {current.tagline}
              </p>

              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Key Inclusions:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {current.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openTrialModal({ grade: current.title.split('(')[1]?.replace(')', '') })}
                className="btn btn-emerald btn-lg"
                style={{ gap: '0.5rem' }}
              >
                <span>Book Free Trial for {current.title.split('(')[0]}</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Stage Visual & Subjects Box */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              overflow: 'hidden'
            }}>
              <img
                src={current.image}
                alt={current.title}
                loading="lazy"
                decoding="async"
                width="600"
                height="320"
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              />
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem' }}>
                Featured Subjects in this Stage
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {current.subjects.map((sub, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#FFFFFF'
                    }}
                  >
                    <span>{sub}</span>
                    <span style={{ fontSize: '0.75rem', color: '#818CF8' }}>1-on-1 Live →</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
