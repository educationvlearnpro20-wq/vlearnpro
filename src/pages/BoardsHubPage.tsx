import React from 'react';
import { BOARDS_DATA } from '../data/boardsData';
import { BoardId } from '../types';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';

const BOARD_CARD_IMAGES: Record<string, string> = {
  cbse: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80',
  icse: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80',
  igcse: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
  ib: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80',
  cambridge: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=500&q=80',
  gcse: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80',
  'a-level': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80',
  'singapore-curriculum': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80',
  'american-curriculum': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80'
};

export const BoardsHubPage: React.FC = () => {
  const { navigateTo, openTrialModal } = useApp();

  return (
    <main>
      <SEOHead
        title="International School Curricula & Boards Directory | VLearnPro Education"
        description="Comprehensive 1-on-1 online tuition across 9 international curricula: CBSE, ICSE, IGCSE, IB DP, Cambridge, GCSE, A-Level, Singapore MOE & American Curriculum."
        primaryKeyword="Online Tuition Boards"
        canonicalUrl="https://vlearnproeducation.com/boards"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Curricula & Boards' }]} />

          <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
            <span className="section-eyebrow">
              GLOBAL BOARD SPECIALIZATIONS
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              International School Curricula & Examination Boards
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Every examination board possesses its own unique assessment criteria, question phrasing, and marking nuances. Select your child’s curriculum below to explore customized 1-on-1 syllabus tracks.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {Object.keys(BOARDS_DATA).map((id) => {
              const b = BOARDS_DATA[id as BoardId];
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
                    {BOARD_CARD_IMAGES[id] && (
                      <img
                        src={BOARD_CARD_IMAGES[id]}
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
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                        {b.badge}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-heading-secondary)', marginBottom: '0.5rem' }}>
                      {b.name}
                    </h2>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {b.description}
                    </p>

                    <div style={{
                      padding: '0.75rem 1rem',
                      background: 'var(--brand-primary-light)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      color: 'var(--color-link)',
                      fontWeight: 600,
                      marginBottom: '1.5rem'
                    }}>
                      ★ {b.heroHighlight}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
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
        </div>
      </section>

      <TrustBadgeBar />
    </main>
  );
};
