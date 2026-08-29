import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { COUNTRIES_DATA } from '../../data/countriesData';

export const MobileStickyCTA: React.FC = () => {
  const { openTrialModal, selectedCountry } = useApp();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 150px
      setIsVisible(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const country = COUNTRIES_DATA[selectedCountry] || COUNTRIES_DATA.usa;

  return (
    <aside
      aria-label="Quick actions"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 85,
        background: 'rgba(10, 15, 29, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '0.65rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.5)'
      }}
      className="mobile-sticky-dock"
    >
      <a
        href={`https://wa.me/918126144847?text=Hello%20VLearnPro,%20I%20am%20interested%20in%20online%20tuition%20classes%20in%20${encodeURIComponent(country.name)}.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '44px',
          height: '44px',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(5, 150, 105, 0.2)',
          border: '1px solid rgba(5, 150, 105, 0.4)',
          color: '#34D399',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
        aria-label="WhatsApp Us"
      >
        <MessageSquare size={20} />
      </a>

      <button
        type="button"
        onClick={() => openTrialModal()}
        className="btn btn-emerald"
        style={{
          flex: 1,
          padding: '0.75rem 1rem',
          fontSize: '0.875rem',
          gap: '0.4rem',
          boxShadow: '0 4px 14px rgba(5, 150, 105, 0.5)'
        }}
      >
        <Sparkles size={16} />
        <span>Book Free 1-on-1 Trial Class</span>
      </button>

      <style>{`
        @media (min-width: 768px) {
          .mobile-sticky-dock {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};
