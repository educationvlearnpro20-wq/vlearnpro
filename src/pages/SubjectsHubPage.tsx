import React from 'react';
import { SUBJECTS_DATA } from '../data/subjectsData';
import { SubjectId } from '../types';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';

const SUBJECT_CARD_IMAGES: Record<string, string> = {
  maths: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80',
  science: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80',
  physics: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80',
  chemistry: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80',
  biology: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80',
  coding: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80',
  english: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=500&q=80',
  'spoken-english': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=500&q=80',
  'communication-skills': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=500&q=80',
  'public-speaking': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=500&q=80',
  'board-exam-prep': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80'
};

export const SubjectsHubPage: React.FC = () => {
  const { navigateTo, openTrialModal } = useApp();

  return (
    <main>
        <SEOHead
        title="Online Subject Tuition for School Students | VLearnPro"
        description="Find expert 1-on-1 online tutors for Mathematics, Physics, Chemistry, Biology & Coding. Tailored lessons for all international boards. Book your free demo."
        primaryKeyword="Online Tuition Subjects"
        canonicalUrl="https://vlearnproeducation.com/subjects"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Subjects Directory' }]} />

          <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
            <span className="section-eyebrow">
              COMPREHENSIVE SUBJECT TRACKS
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Specialized 1-on-1 Academic & Skill Tracks
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              From foundational mental mathematics and primary science curiosity to advanced AP calculus, molecular genetics, full-stack Python coding, and public speaking.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {Object.keys(SUBJECTS_DATA).map((id) => {
              const s = SUBJECTS_DATA[id as SubjectId];
              return (
                <div
                  key={id}
                  className="card-glass"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {SUBJECT_CARD_IMAGES[id] && (
                      <img
                        src={SUBJECT_CARD_IMAGES[id]}
                        alt={`${s.name} Online Class`}
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="240"
                        style={{
                          width: '100%',
                          height: '140px',
                          objectFit: 'cover',
                          borderRadius: 'var(--radius-md)',
                          marginBottom: '1rem',
                          border: '1px solid rgba(255, 255, 255, 0.12)'
                        }}
                      />
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span className="badge badge-indigo">
                        {s.grades}
                      </span>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                        1-on-1 Live
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      {s.name}
                    </h2>

                    <p style={{ fontSize: '0.85rem', color: '#2563EB', fontWeight: 600, marginBottom: '0.75rem' }}>
                      {s.tagline}
                    </p>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {s.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                    <button
                      type="button"
                      onClick={() => navigateTo({ type: 'subject', id: id as SubjectId })}
                      className="btn btn-secondary"
                      style={{ width: '100%', fontSize: '0.875rem' }}
                    >
                      View Syllabus Track →
                    </button>
                    <button
                      type="button"
                      onClick={() => openTrialModal({ subject: s.name })}
                      className="btn btn-emerald"
                      style={{ width: '100%', fontSize: '0.875rem' }}
                    >
                      Book Free Trial Class
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TrustBadgeBar />
    </main>
  );
};
