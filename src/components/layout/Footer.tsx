import React from 'react';
import { 
  BookOpen, Mail, Phone, MapPin, ShieldCheck, Award, 
  Star, Heart, ArrowRight, CheckCircle, MessageSquare 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BOARDS_DATA } from '../../data/boardsData';
import { SUBJECTS_DATA } from '../../data/subjectsData';
import { LANGUAGES_DATA } from '../../data/languagesData';
import { COUNTRIES_DATA } from '../../data/countriesData';
import { BoardId, SubjectId, LanguageId, CountryCode } from '../../types';

export const Footer: React.FC = () => {
  const { navigateTo, setSelectedCountry, openTrialModal } = useApp();

  return (
    <footer style={{
      background: '#070B14',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '5rem',
      paddingBottom: '3rem',
      color: 'var(--text-secondary)',
      fontSize: '0.875rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        {/* Top Newsletter & Instant Booking Callout */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 2rem',
          marginBottom: '4.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem'
        }}>
          <div style={{ maxWidth: '580px' }}>
            <span className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
              GLOBAL 1-ON-1 ONLINE TUITION
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 0.5rem 0' }}>
              Transform Your Child’s Grades & Academic Confidence
            </h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
              Join 18,500+ happy parents in USA, UK, UAE, Singapore, Europe, Canada, Australia and India. Book a 100% free, zero-obligation trial session today.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => openTrialModal()}
              className="btn btn-emerald btn-lg"
              style={{ gap: '0.5rem' }}
            >
              <span>Book Free Trial Class</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/918126144847?text=Hello%20VLearnPro,%20I%20would%20like%20to%20learn%20more%20about%20your%20online%20tuition%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{ gap: '0.5rem' }}
            >
              <MessageSquare size={18} style={{ color: '#10B981' }} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Multi-Column Sitemap Graph */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          {/* Brand & Trust Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <BookOpen size={18} />
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
                VLearn<span style={{ color: '#818CF8' }}>Pro</span>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Premium international 1-on-1 live online education institute empowering students from Grade 1 to 12 across 8 global countries and 9 school boards.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#FCD34D' }}>
              <Star size={15} fill="#F59E0B" color="#F59E0B" />
              <span><strong>4.94 / 5 Rating</strong> (1,840+ Parent Reviews)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#6EE7B7', marginTop: '0.5rem' }}>
              <ShieldCheck size={15} />
              <span>COPPA & GDPR-K Child Safety Certified</span>
            </div>

            {/* Official Social Media Channels (Entity Backlinks) */}
            <div style={{ marginTop: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.6rem' }}>
                OFFICIAL SOCIAL CHANNELS
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a
                  href="https://www.facebook.com/vlearnproeducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VLearnPro Education Official Facebook Page"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60A5FA',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1877F2';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#60A5FA';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/vlearn_pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VLearnPro Education Official Instagram Profile"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F472B6',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#F472B6';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Supported Boards Column */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Curricula & Boards
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              {Object.keys(BOARDS_DATA).map((id) => (
                <li key={id}>
                  <button
                    onClick={() => navigateTo({ type: 'board', id: id as BoardId })}
                    style={{ color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#818CF8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {BOARDS_DATA[id as BoardId].name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Subjects Column */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Subject Specializations
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              {Object.keys(SUBJECTS_DATA).slice(0, 8).map((id) => (
                <li key={id}>
                  <button
                    onClick={() => navigateTo({ type: 'subject', id: id as SubjectId })}
                    style={{ color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#818CF8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {SUBJECTS_DATA[id as SubjectId].name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigateTo({ type: 'subjects-hub' })}
                  style={{ color: '#818CF8', fontWeight: 600, cursor: 'pointer' }}
                >
                  View All 11 Subjects →
                </button>
              </li>
            </ul>
          </div>

          {/* Languages & World Tracks */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              World Languages
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              {Object.keys(LANGUAGES_DATA).map((id) => (
                <li key={id}>
                  <button
                    onClick={() => navigateTo({ type: 'language', id: id as LanguageId })}
                    style={{ color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#818CF8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {LANGUAGES_DATA[id as LanguageId].name}
                  </button>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Important Hubs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem' }}>
              <li>
                <button onClick={() => navigateTo({ type: 'exam-prep' })} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  Board Exam Preparation
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo({ type: 'free-demo' })} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  Book Free Demo Class
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo({ type: 'pricing' })} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  Transparent Pricing & Calculator
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo({ type: 'about' })} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  About Our Vetting & Mission
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo({ type: 'careers' })} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  Careers & Educator Faculty
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo({ type: 'blog' })} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  Curriculum Guides & Articles
                </button>
              </li>
            </ul>
          </div>

          {/* Global Country Hubs Column */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              International Hubs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              {Object.keys(COUNTRIES_DATA).map((code) => {
                const c = COUNTRIES_DATA[code as CountryCode];
                return (
                  <li key={code}>
                    <button
                      onClick={() => {
                        setSelectedCountry(code as CountryCode);
                        navigateTo({ type: 'country', code: code as CountryCode });
                      }}
                      style={{
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#818CF8'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Single Global Admissions & Support Card */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '2rem',
          paddingBottom: '2rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            fontSize: '0.875rem'
          }}>
            <div>
              <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem', marginBottom: '0.25rem' }}>
                🌐 Global Admissions & Parent Support Desk
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Serving Students in USA, UK, UAE, Singapore, Canada, Australia, Europe & India
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block', marginBottom: '0.15rem' }}>
                  DIRECT HELPLINE & WHATSAPP
                </span>
                <a
                  href="https://wa.me/918126144847?text=Hello%20VLearnPro,%20I%20would%20like%20to%20learn%20more%20about%20your%20online%20tuition%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#6EE7B7', fontWeight: 700, fontSize: '0.95rem' }}
                >
                  +91 8126144847
                </a>
              </div>

              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block', marginBottom: '0.15rem' }}>
                  OFFICIAL ADMISSIONS EMAIL
                </span>
                <a
                  href="mailto:educationvlearnpro20@gmail.com"
                  style={{ color: '#818CF8', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  educationvlearnpro20@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} VLearnPro Education. All rights reserved. Registered International Educational Institute.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigateTo({ type: 'privacy-policy' })} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>
              Privacy Policy
            </button>
            <button onClick={() => navigateTo({ type: 'terms-of-service' })} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>
              Terms of Service
            </button>
            <button onClick={() => navigateTo({ type: 'refund-policy' })} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>
              Refund & Cancellation Policy
            </button>
            <button onClick={() => navigateTo({ type: 'privacy-policy' })} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>
              Child Safeguarding (COPPA)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
