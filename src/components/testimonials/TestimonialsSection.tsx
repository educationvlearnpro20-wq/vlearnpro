import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { useApp } from '../../context/AppContext';

export const TestimonialsSection: React.FC = () => {
  const { openTrialModal } = useApp();
  const [filter, setFilter] = useState<'all' | 'usa' | 'uk' | 'uae' | 'singapore' | 'india'>('all');

  const filteredReviews = TESTIMONIALS_DATA.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'usa') return t.country.includes('United States');
    if (filter === 'uk') return t.country.includes('United Kingdom');
    if (filter === 'uae') return t.country.includes('UAE');
    if (filter === 'singapore') return t.country.includes('Singapore');
    if (filter === 'india') return t.country.includes('India');
    return true;
  });

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            VERIFIED PARENT EXPERIENCES
          </span>
          <h2 className="section-title">
            Real Stories, Real Results Across 8 Countries
          </h2>
          <p className="section-subtitle">
            Read authentic feedback from parents who trusted VLearnPro for their children’s board exams, AP classes, and school excellence.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
            {[
              { id: 'all', label: 'All Reviews (1,840+)' },
              { id: 'usa', label: '🇺🇸 USA' },
              { id: 'uk', label: '🇬🇧 UK' },
              { id: 'uae', label: '🇦🇪 UAE (Dubai)' },
              { id: 'singapore', label: '🇸🇬 Singapore' },
              { id: 'india', label: '🇮🇳 India' }
            ].map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id as any)}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.825rem',
                  borderRadius: 'var(--radius-full)',
                  background: filter === f.id ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : 'rgba(255,255,255,0.05)',
                  border: filter === f.id ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                  color: filter === f.id ? '#FFFFFF' : 'var(--text-secondary)',
                  fontWeight: filter === f.id ? 600 : 400,
                  cursor: 'pointer'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Review Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {filteredReviews.map((t) => (
            <div
              key={t.id}
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
                {/* Rating & Metric Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
                    {t.metric}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  "{t.highlight}"
                </h3>

                {/* Review Text */}
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {t.review}
                </p>
              </div>

              {/* Parent & Student Metadata */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {t.avatarUrl && (
                      <img
                        src={t.avatarUrl}
                        alt={t.parentName}
                        loading="lazy"
                        decoding="async"
                        width="44"
                        height="44"
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          flexShrink: 0
                        }}
                      />
                    )}
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>
                        {t.parentName}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#818CF8' }}>
                        Child: {t.childName} • {t.grade}
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                        {t.board} • {t.subject}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.25rem' }}>{t.countryFlag}</div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', color: '#10B981', fontSize: '0.7rem', fontWeight: 600 }}>
                      <CheckCircle2 size={12} />
                      <span>Verified Parent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => openTrialModal()}
            className="btn btn-emerald btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <span>Experience the Difference — Book Free Trial</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
