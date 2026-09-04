import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { GradeLevelTabs } from '../components/widgets/GradeLevelTabs';
import { CurriculumSelectorSection } from '../components/widgets/CurriculumSelectorSection';
import { TutorVettingSection } from '../components/widgets/TutorVettingSection';
import { HowItWorksSection } from '../components/widgets/HowItWorksSection';
import { TuitionCalculator } from '../components/calculator/TuitionCalculator';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { ComparisonSection } from '../components/comparison/ComparisonSection';
import { FAQAccordion } from '../components/widgets/FAQAccordion';
import { COUNTRIES_DATA } from '../data/countriesData';

export const HomePage: React.FC = () => {
  const { openTrialModal, openQuizModal, selectedCountry } = useApp();
  const country = COUNTRIES_DATA[selectedCountry] || COUNTRIES_DATA.usa;

  return (
    <main>
      <SEOHead
        title="Online Tuition Classes for School Students | VLearnPro"
        description="Boost your child's grades with live 1-on-1 online tuition classes for CBSE, ICSE, IGCSE & IB curricula. Learn from expert tutors. Book a free demo class today."
        primaryKeyword="Online Tuition Classes"
      />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}>
        {/* Background glow effects */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.18) 0%, rgba(5, 150, 105, 0.08) 50%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            {/* Left Hero Text Column */}
            <div className="mobile-center-hero">
              {/* Top Credibility Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.3)', borderRadius: 'var(--radius-full)', color: '#2563EB', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                <Sparkles size={15} style={{ color: '#D97706' }} />
                <span>The GCC’s Most Trusted 1-on-1 Online Education Institute • Grades 1 to 12</span>
              </div>

              {/* Single H1 Standard */}
              <h1 style={{ marginBottom: '1.25rem' }}>
                Online Tuition Classes for Students Across the GCC
              </h1>

              {/* Subtitle */}
              <p style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Empowering students from Grade 1 to 12 in <strong>UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah), Qatar, Kuwait, Bahrain, Oman & India</strong> with top-rated 1-on-1 <strong>online tuition classes</strong>. Tailored academic mastery for CBSE, ICSE, Cambridge IGCSE, IB DP & American curricula delivered by certified top 1.8% subject mentors.
              </p>

              {/* Hero CTA Group */}
              <div className="hero-cta-group" style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <button
                  type="button"
                  onClick={() => openTrialModal()}
                  className="btn btn-emerald btn-lg"
                  style={{ gap: '0.5rem', padding: '1rem 2rem', fontSize: '1rem' }}
                >
                  <Sparkles size={18} />
                  <span>Book a Free 1-on-1 Trial Class</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={openQuizModal}
                  className="btn btn-secondary btn-lg"
                  style={{ gap: '0.5rem', padding: '1rem 1.5rem', fontSize: '1rem' }}
                >
                  <span>Find Ideal Tutor (60s)</span>
                </button>
              </div>

              {/* Trust highlights below CTA */}
              <div className="hero-trust-group" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                fontSize: '0.825rem',
                color: 'var(--text-secondary)'
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={15} style={{ color: '#10B981' }} />
                  <span>100% Free • No Credit Card Required</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={15} style={{ color: '#10B981' }} />
                  <span>Scheduled in {country.timezone}</span>
                </span>
              </div>
            </div>

            {/* Right Hero Stock Photo Showcase Column */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80"
                  alt="Live 1-on-1 Online Video Tuition Class in Progress"
                  loading="eager"
                  decoding="async"
                  width="800"
                  height="520"
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Floating Badge 1: Top Left */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)'
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
                  <span>Live 1-on-1 Session in Progress</span>
                </div>

                {/* Floating Badge 2: Bottom Right */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.95) 0%, rgba(67, 56, 202, 0.95) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1.1rem',
                  color: '#FFFFFF',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>★ 4.94 / 5.0 Rating</div>
                  <div style={{ fontSize: '0.725rem', color: '#E0E7FF' }}>From 1,840+ GCC & Indian Parents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Trust Badge Bar */}
      <TrustBadgeBar />

      {/* Grade Level Explorer */}
      <GradeLevelTabs />

      {/* Curricula & Boards Section */}
      <CurriculumSelectorSection />

      {/* 4-Step How It Works */}
      <HowItWorksSection />

      {/* Tutor Vetting Standards */}
      <TutorVettingSection />

      {/* Pricing Calculator */}
      <TuitionCalculator />

      {/* Competitor Comparison Matrix */}
      <ComparisonSection />

      {/* Parent Reviews & Testimonials */}
      <TestimonialsSection />

      {/* Dynamic FAQ Accordion */}
      <FAQAccordion />

      {/* Final Conversion CTA Section */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #064E3B 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-amber" style={{ marginBottom: '1rem', fontSize: '0.85rem' }}>
                LIMITED 2026-27 ADMISSION SLOTS AVAILABLE
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                Give Your Child the Advantage of Top 1.8% 1-on-1 Tutors
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#E2E8F0', marginBottom: '2.25rem', lineHeight: 1.6 }}>
                Join families across UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah), Qatar, Kuwait, Bahrain, Oman & India who trust VLearnPro Education for live 1-on-1 tutoring. Experience your child’s customized 45-minute demo class with zero risk.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  onClick={() => openTrialModal()}
                  className="btn btn-emerald btn-lg"
                  style={{ gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.05rem', boxShadow: '0 6px 22px rgba(5, 150, 105, 0.5)' }}
                >
                  <Sparkles size={20} />
                  <span>Book Your Free 1-on-1 Trial Class</span>
                  <ArrowRight size={20} />
                </button>

                <a
                  href="https://wa.me/918126144847?text=Hello%20VLearnPro,%20I%20would%20like%20to%20book%20a%20free%20demo%20class."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                  style={{ gap: '0.5rem', padding: '1rem 1.5rem', fontSize: '1.05rem' }}
                >
                  <MessageSquare size={20} style={{ color: '#10B981' }} />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Parent and student studying together happily with VLearnPro online tutor"
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
