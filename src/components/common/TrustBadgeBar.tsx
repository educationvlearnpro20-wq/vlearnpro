import React from 'react';
import { Star, ShieldCheck, Award, Users, CheckCircle2, TrendingUp } from 'lucide-react';

export const TrustBadgeBar: React.FC = () => {
  return (
    <div style={{
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      background: '#FFFFFF',
      boxShadow: 'var(--shadow-sm)',
      padding: '1.25rem 0'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1.5rem',
        alignItems: 'center'
      }}>
        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(245, 158, 11, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D97706'
          }}>
            <Star size={18} fill="#D97706" />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>4.94 / 5.0</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>1,840+ Parent Reviews</div>
          </div>
        </div>

        {/* Grade Improvement */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(5, 150, 105, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#059669'
          }}>
            <TrendingUp size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>98.4% Improved</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>+2 Letter Grades in 12 Wks</div>
          </div>
        </div>

        {/* Vetting Rigour */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(37, 99, 235, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2563EB'
          }}>
            <Award size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>Top 1.8% Tutors</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Rigorous 4-Stage Vetting</div>
          </div>
        </div>

        {/* Global Students */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(2, 132, 199, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0284C7'
          }}>
            <Users size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>14,200+ Students</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Across GCC & India Hubs</div>
          </div>
        </div>
      </div>
    </div>
  );
};
