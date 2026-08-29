import React from 'react';
import { LANGUAGES_DATA } from '../data/languagesData';
import { LanguageId } from '../types';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';

export const LanguagesHubPage: React.FC = () => {
  const { navigateTo, openTrialModal } = useApp();

  return (
    <main>
      <SEOHead
        title="World Languages Online Tuition | Spanish, French, German, Chinese & Urdu"
        description="Master global languages with certified native speakers. 1-on-1 online classes for kids & teens: Spanish, German, French, Mandarin Chinese & Urdu."
        primaryKeyword="Online Language Classes"
        canonicalUrl="https://vlearnproeducation.com/languages"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'World Languages' }]} />

          <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
            <span className="section-eyebrow">
              GLOBAL MULTILINGUAL TRACKS
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              World Languages Online Classes for Kids & Teens
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Unlock global communication and cognitive agility. 1-on-1 personalized immersion with certified native tutors, covering school exams (DELE, DELF, Goethe, YCT, IGCSE/IB) and natural conversational fluency.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {Object.keys(LANGUAGES_DATA).map((id) => {
              const l = LANGUAGES_DATA[id as LanguageId];
              return (
                <div
                  key={id}
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
                      <span style={{ fontSize: '2rem' }}>{l.flag}</span>
                      <span className="badge badge-indigo">
                        {l.levels.split('&')[0]}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {l.name}
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: '#2563EB', fontWeight: 600, marginBottom: '0.75rem' }}>
                      Native: {l.nativeName}
                    </p>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {l.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                    <button
                      type="button"
                      onClick={() => navigateTo({ type: 'language', id: id as LanguageId })}
                      className="btn btn-secondary"
                      style={{ flex: 1, fontSize: '0.85rem' }}
                    >
                      Explore Program →
                    </button>
                    <button
                      type="button"
                      onClick={() => openTrialModal({ subject: l.name })}
                      className="btn btn-emerald"
                      style={{ fontSize: '0.85rem' }}
                    >
                      Book Trial
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
