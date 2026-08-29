import React from 'react';
import { Star, ShieldCheck, Award, Users, CheckCircle2, TrendingUp } from 'lucide-react';

export const TrustBadgeBar: React.FC = () => {
  return (
    <div style={{
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(15, 23, 42, 0.6)',
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
            color: '#F59E0B'
          }}>
            <Star size={18} fill="#F59E0B" />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>4.94 / 5.0</div>
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
            color: '#10B981'
          }}>
            <TrendingUp size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>98.4% Improved</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>+2 Letter Grades in 12 Wks</div>
          </div>
        </div>

        {/* Vetting Rigour */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(79, 70, 229, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#818CF8'
          }}>
            <Award size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>Top 1.8% Tutors</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Rigorous 4-Stage Vetting</div>
          </div>
        </div>

        {/* Global Students */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(6, 182, 212, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#06B6D4'
          }}>
            <Users size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>18,500+ Students</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Across 8 Global Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};
