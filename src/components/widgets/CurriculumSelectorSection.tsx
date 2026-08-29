import React from 'react';
import { Award, ArrowRight, Check, Sparkles, BookOpen } from 'lucide-react';
import { BOARDS_DATA } from '../../data/boardsData';
import { BoardId } from '../../types';
import { useApp } from '../../context/AppContext';

const BOARD_IMAGES: Record<string, string> = {
  cbse: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=70&fm=webp',
  icse: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=70&fm=webp',
  igcse: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=70&fm=webp',
  ib: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=70&fm=webp',
  cambridge: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=400&q=70&fm=webp',
  gcse: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=70&fm=webp',
  'a-level': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=70&fm=webp',
  'singapore-curriculum': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=70&fm=webp',
  'american-curriculum': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=70&fm=webp'
};

export const CurriculumSelectorSection: React.FC = () => {
  const { navigateTo, openTrialModal } = useApp();

  return (
    <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            GLOBAL CURRICULA SPECIALIZATION
          </span>
          <h2 className="section-title">
            Tailored 1-on-1 Tuition for Your School Board
          </h2>
          <p className="section-subtitle">
            Whether your child follows national boards or international baccalaureates, our faculty provides syllabus-exact prep and past paper mastery.
          </p>
        </div>

        {/* Board Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {Object.entries(BOARDS_DATA).map(([id, b]) => {
            return (
              <div
                key={id}
                className="card-glass"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {BOARD_IMAGES[id] && (
                    <img
                      src={BOARD_IMAGES[id]}
                      alt={`${b.name} Curriculum`}
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
                      {b.grades}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>
                      {b.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    {b.name}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {b.description}
                  </p>

                  <div style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    color: '#818CF8',
                    fontWeight: 600,
                    marginBottom: '1.25rem'
                  }}>
                    ★ {b.heroHighlight}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => navigateTo({ type: 'board', id: id as BoardId })}
                    className="btn btn-secondary"
                    style={{ width: '100%', fontSize: '0.875rem' }}
                  >
                    Explore {b.shortName} Syllabus →
                  </button>
                  <button
                    type="button"
                    onClick={() => openTrialModal({ board: b.shortName })}
                    className="btn btn-emerald"
                    style={{ width: '100%', fontSize: '0.875rem' }}
                  >
                    Book Free Trial for {b.shortName}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => navigateTo({ type: 'boards-hub' })}
            className="btn btn-secondary btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <span>Explore Full Board Curricula Directory</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
