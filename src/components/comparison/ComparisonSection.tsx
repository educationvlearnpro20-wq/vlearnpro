import React from 'react';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ComparisonSection: React.FC = () => {
  const { openTrialModal } = useApp();

  const comparisonRows = [
    {
      feature: 'Class Size & Individual Focus',
      vlearnpro: '100% Dedicated 1-on-1 Mentorship (Zero distractions)',
      offline: 'Batch sizes of 15 to 40 students (Shy kids get left behind)',
      generic: 'Crowded webinar style (50 to 200+ students per batch)'
    },
    {
      feature: 'Tutor Selection & Vetting Rate',
      vlearnpro: 'Top 1.8% Accepted (Subject specialists & examiners)',
      offline: 'Local neighborhood tutors with unverified track records',
      generic: 'Fresh graduates reading standardized script decks'
    },
    {
      feature: 'Curriculum & Board Alignment',
      vlearnpro: '100% Specification Exact (CBSE, ICSE, IGCSE, IB, AP, SG MOE)',
      offline: 'Generic worksheets not aligned with international schools',
      generic: 'Fixed rigid video playlists with zero live adaptation'
    },
    {
      feature: 'Class Recordings & Revision Vault',
      vlearnpro: 'Every live class recorded in HD + digital notes stored forever',
      offline: 'No recordings — if your child misses a session, it is lost',
      generic: 'Pre-recorded generic videos with zero live session recap'
    },
    {
      feature: 'Doubt Resolution Speed',
      vlearnpro: 'Real-time during live class + Priority WhatsApp support',
      offline: 'Must wait until next week’s scheduled physical class',
      generic: 'Automated AI chatbots or multi-day forum backlog'
    },
    {
      feature: 'Parent Progress Visibility',
      vlearnpro: 'Bi-weekly analytics reports & direct mentor consultation',
      offline: 'Annual parent-teacher meetings with vague oral feedback',
      generic: 'Automated app notification without qualitative human insight'
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            THE VLEARNPRO ADVANTAGE
          </span>
          <h2 className="section-title">
            Why Discerning Parents Choose VLearnPro Over Old Alternatives
          </h2>
          <p className="section-subtitle">
            See how our individualized 1-on-1 pedagogical model delivers 4X faster academic mastery compared to physical coaching centers and generic apps.
          </p>
        </div>

        {/* Comparison Table */}
        <div style={{
          overflowX: 'auto',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)',
          background: '#FFFFFF'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
            <thead>
              <tr style={{ background: 'rgba(15, 23, 42, 0.03)', borderBottom: '1px solid var(--border-medium)' }}>
                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600, width: '25%' }}>
                  Pedagogical Metric
                </th>
                <th style={{
                  padding: '1.25rem 1.5rem',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontWeight: 800,
                  background: 'rgba(37, 99, 235, 0.08)',
                  borderLeft: '2px solid #2563EB',
                  borderRight: '2px solid #2563EB',
                  width: '35%'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={16} style={{ color: '#D97706' }} />
                    <span>VLearnPro 1-on-1</span>
                  </div>
                </th>
                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, width: '20%' }}>
                  Physical In-Person Centers
                </th>
                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, width: '20%' }}>
                  Generic Group EdTech Apps
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(15, 23, 42, 0.015)'
                  }}
                >
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {row.feature}
                  </td>
                  <td style={{
                    padding: '1.25rem 1.5rem',
                    fontSize: '0.875rem',
                    color: '#059669',
                    background: 'rgba(37, 99, 235, 0.04)',
                    borderLeft: '2px solid #2563EB',
                    borderRight: '2px solid #2563EB',
                    fontWeight: 600
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <Check size={16} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.vlearnpro}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <X size={15} style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.offline}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <X size={15} style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.generic}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => openTrialModal()}
            className="btn btn-primary btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <span>Claim Your 1-on-1 Free Trial Class</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
