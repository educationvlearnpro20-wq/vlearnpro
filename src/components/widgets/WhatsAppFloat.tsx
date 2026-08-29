import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { COUNTRIES_DATA } from '../../data/countriesData';

export const WhatsAppFloat: React.FC = () => {
  const { selectedCountry, openTrialModal } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const country = COUNTRIES_DATA[selectedCountry] || COUNTRIES_DATA.usa;

  return (
    <div className="desktop-whatsapp-float" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 90, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div
          style={{
            width: '320px',
            background: 'linear-gradient(180deg, #131B2E 0%, #0F172A 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            padding: '1.25rem',
            marginBottom: '0.75rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                Academic Admissions Online
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0.2rem' }}
              aria-label="Close chat popup"
            >
              <X size={16} />
            </button>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
            Looking for 1-on-1 online tuition for your child in <strong>{country.name}</strong>? Chat directly with our Academic Counselors for quick tutor matching.
          </p>

          <a
            href={`https://wa.me/918126144847?text=Hello%20VLearnPro,%20I%20am%20a%20parent%20in%20${encodeURIComponent(country.name)}%20looking%20for%201-on-1%20online%20tuition.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-emerald"
            style={{ width: '100%', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.85rem' }}
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp ({country.timezone})</span>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              openTrialModal();
            }}
            className="btn btn-secondary"
            style={{ width: '100%', fontSize: '0.8rem' }}
          >
            Book Free Diagnostic Class →
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.45)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          cursor: 'pointer',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Open instant chat assistance"
      >
        <MessageSquare size={26} />
        {/* Pulsing indicator badge */}
        <span style={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: '#22C55E',
          border: '2px solid #0F172A'
        }} />
      </button>
    </div>
  );
};
