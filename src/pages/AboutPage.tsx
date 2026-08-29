import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { TutorVettingSection } from '../components/widgets/TutorVettingSection';

export const AboutPage: React.FC = () => {
  const { openTrialModal } = useApp();

  const values = [
    {
      title: 'Individualized First-Principles Pedagogy',
      desc: 'We reject rote memorization. Every student learns through guided inquiry and conceptual proofs, developing deep cognitive resilience.'
    },
    {
      title: 'Uncompromising 1.8% Tutor Vetting',
      desc: 'Only the most capable, empathetic, and curriculum-certified educators earn a place on our teaching faculty.'
    },
    {
      title: 'Global Inclusivity & Timezone Sync',
      desc: 'High-quality education should fit family life seamlessly. We operate across 8 global timezones with zero scheduling friction.'
    },
    {
      title: 'Total Transparency & Ethical Safeguarding',
      desc: 'Transparent pricing with zero lock-in contracts, HD class recordings for parent review, and strict COPPA/GDPR compliance.'
    }
  ];

  return (
    <main>
      <SEOHead
        title="About VLearnPro Education | Global 1-on-1 Online Education Institute"
        description="Learn about VLearnPro Education's mission, top 1.8% tutor vetting standards, pedagogical philosophy, and global student impact across 8 countries."
        primaryKeyword="About VLearnPro Education"
        canonicalUrl="https://vlearnproeducation.com/about"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem'
          }}>
            <div>
              <span className="section-eyebrow">
                ABOUT VLEARNPRO EDUCATION
              </span>
              <h1 style={{ marginBottom: '1.25rem' }}>
                Reimagining Online Education Through Elite 1-on-1 Mentorship
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-heading-secondary)', fontWeight: 600, lineHeight: 1.5, marginBottom: '1rem' }}>
                Empowering students from Grade 1 to 12 to achieve academic mastery, self-confidence, and global university success.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Founded by international education researchers and Cambridge alumni, VLearnPro Education was created to solve a widespread crisis in modern schooling: crowded classrooms where individual learning styles are overlooked, and rote memorization replaces genuine understanding.
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="VLearnPro Global Classroom & Student Success"
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                }}
              />
            </div>
          </div>

          {/* Stats Highlight Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            padding: '2.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '4.5rem'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-heading)' }}>
                18,500+
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Students Mentored Globally
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-link)', fontFamily: 'var(--font-heading)' }}>
                1.8%
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Tutor Acceptance Rate
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-warning)', fontFamily: 'var(--font-heading)' }}>
                98.4%
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Grade Improvement Rate
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-heading-primary)', fontFamily: 'var(--font-heading)' }}>
                8 Hubs
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                USA, UK, UAE, SG, EU, CA, AU, IN
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div className="section-header">
              <span className="section-eyebrow">
                OUR CORE PILLARS
              </span>
              <h2 className="section-title">
                The Values That Drive Every Live Session
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="card-glass"
                  style={{ padding: '2rem' }}
                >
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-heading-secondary)', marginBottom: '0.75rem' }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tutor Vetting Rigour */}
      <TutorVettingSection />

      {/* Trust bar */}
      <TrustBadgeBar />

      {/* Bottom CTA */}
      <section style={{
        padding: '4.5rem 0',
        background: 'linear-gradient(135deg, #1E1B4B 0%, #0F172A 100%)',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Experience the VLearnPro Difference
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Book a complimentary 45-minute 1-on-1 diagnostic lesson for your child today.
          </p>
          <button
            type="button"
            onClick={() => openTrialModal()}
            className="btn btn-emerald btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <Sparkles size={18} />
            <span>Book 100% Free Trial Class</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};
