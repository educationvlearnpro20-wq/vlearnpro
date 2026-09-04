import React from 'react';
import { Sparkles, Star, ArrowRight, CheckCircle2, Clock, MapPin, Building2, BookOpen } from 'lucide-react';
import { CityId } from '../types';
import { CITIES_DATA } from '../data/citiesData';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { FAQAccordion } from '../components/widgets/FAQAccordion';
import { TuitionCalculator } from '../components/calculator/TuitionCalculator';

interface CityLandingPageProps {
  cityId: CityId;
}

const CITY_IMAGES: Record<CityId, string> = {
  delhi: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
  mumbai: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
  pune: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
  bangalore: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
  chennai: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  ahmedabad: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=800&q=80',
  indore: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80',
  lucknow: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80'
};

export const CityLandingPage: React.FC<CityLandingPageProps> = ({ cityId }) => {
  const { openTrialModal, navigateTo } = useApp();
  const city = CITIES_DATA[cityId] || CITIES_DATA.delhi;
  const cityImg = CITY_IMAGES[cityId] || CITY_IMAGES.delhi;

  return (
    <main>
      <SEOHead
        title={city.metaTitle}
        description={city.metaDescription}
        primaryKeyword={city.primaryKeyword}
        canonicalUrl={`https://vlearnproeducation.com/countries/india/${city.id}`}
        faqs={city.faqs}
        breadcrumbName={city.cityName}
      />

      {/* Hero Section */}
      <section style={{
        paddingTop: '2.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs
            items={[
              { label: 'Global Hubs', path: { type: 'countries-hub' } },
              { label: 'India', path: { type: 'country', code: 'india' } },
              { label: city.cityName }
            ]}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.85rem',
                background: 'var(--brand-emerald-light)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--color-success)',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '1rem'
              }}>
                <MapPin size={14} />
                <span>LOCALIZED FOR {city.cityName.toUpperCase()} • IST TIMEZONE</span>
              </div>

              <h1 style={{ marginBottom: '1rem', color: 'var(--text-heading-primary)' }}>
                {city.h1}
              </h1>

              <p style={{ fontSize: '1.2rem', color: 'var(--text-heading-secondary)', fontWeight: 500, marginBottom: '1.25rem', lineHeight: 1.5 }}>
                {city.tagline}
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {city.intro}
              </p>

              {/* Quick Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {city.stats.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-heading)' }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => openTrialModal({ country: `India - ${city.cityName}` })}
                  className="btn btn-emerald btn-lg"
                  style={{ gap: '0.5rem' }}
                >
                  <Sparkles size={18} />
                  <span>Book Free 1-on-1 Trial Class</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* City Visual Card */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-xl)'
              }}>
                <img
                  src={cityImg}
                  alt={`1-on-1 Online Tuition in ${city.cityName} for CBSE, ICSE, IB & IGCSE`}
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem'
                }}>
                  <div style={{ color: '#34D399', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    🇮🇳 ACADEMIC CENTER • {city.state}
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                    1-on-1 Live Tutoring in {city.cityName}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {city.popularBoards.map((b, i) => (
                      <span key={i} style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#F8FAFC', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', fontWeight: 600 }}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadgeBar />

      {/* Education Ecosystem Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              LOCAL SCHOOL SYSTEM ALIGNMENT
            </span>
            <h2 className="section-title">
              Education Ecosystem in {city.cityName}
            </h2>
            <p className="section-subtitle">
              We sync directly with the curriculum and pacing of top schools across {city.cityName}.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="card-solid" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Building2 size={24} style={{ color: '#34D399' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading-primary)', margin: 0 }}>Top Schools Covered</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {city.educationEcosystem}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                {city.topSchools.map((school, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} style={{ color: '#34D399', flexShrink: 0 }} />
                    <span>{school}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-solid" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <BookOpen size={24} style={{ color: '#6366F1' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading-primary)', margin: 0 }}>Supported School Boards</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {city.studentLearningNeeds}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-heading-primary)', fontSize: '0.9rem' }}>CBSE Board</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>NCERT & Board PYQs</div>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-heading-primary)', fontSize: '0.9rem' }}>ICSE & ISC</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>CISCE Guidelines</div>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-heading-primary)', fontSize: '0.9rem' }}>IB DP & MYP</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>IAs, EE & TOK</div>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-heading-primary)', fontSize: '0.9rem' }}>IGCSE / A-Level</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Cambridge Syllabus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Expectations & VLearnPro Advantage */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              WHY PARENTS IN {city.cityName.toUpperCase()} TRUST US
            </span>
            <h2 className="section-title">
              Designed for Students & Families in {city.cityName}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card-solid" style={{ padding: '1.5rem' }}>
              <div style={{ color: '#34D399', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>🎯 Parent Expectations</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{city.parentExpectations}</p>
            </div>

            <div className="card-solid" style={{ padding: '1.5rem' }}>
              <div style={{ color: '#6366F1', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>🚀 Online Learning Benefits</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{city.onlineBenefits}</p>
            </div>

            <div className="card-solid" style={{ padding: '1.5rem' }}>
              <div style={{ color: '#F59E0B', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>⏰ Suitable Timings</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{city.classTimings}</p>
            </div>

            <div className="card-solid" style={{ padding: '1.5rem' }}>
              <div style={{ color: '#EC4899', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>⭐ VLearnPro Advantage</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{city.vlearnproAdvantage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation Links Hub */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              EXPLORE ACADEMIC HUB DIRECTORY
            </span>
            <h2 className="section-title">
              Curricula & Subject Tracks for {city.cityName} Students
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}>
            <div className="card-solid" style={{ padding: '1.5rem', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--text-heading-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>🇮🇳 India National Hub</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Explore nationwide online tuition for CBSE, ICSE, IB & IGCSE across India.</p>
              <button onClick={() => navigateTo({ type: 'country', code: 'india' })} style={{ fontSize: '0.85rem', color: 'var(--color-link)', fontWeight: 700, cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                View All India Hub →
              </button>
            </div>

            <div className="card-solid" style={{ padding: '1.5rem', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--text-heading-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>📚 CBSE & ICSE Boards</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Strict NCERT line-by-line mastery and past 10 years board paper drills.</p>
              <button onClick={() => navigateTo({ type: 'board', id: 'cbse' })} style={{ fontSize: '0.85rem', color: 'var(--color-link)', fontWeight: 700, cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                Explore CBSE Tuition →
              </button>
            </div>

            <div className="card-solid" style={{ padding: '1.5rem', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--text-heading-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>🌐 IB & IGCSE Boards</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>IB Diploma, MYP, and Cambridge IGCSE / A-Level exam preparation.</p>
              <button onClick={() => navigateTo({ type: 'board', id: 'ib' })} style={{ fontSize: '0.85rem', color: 'var(--color-link)', fontWeight: 700, cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                Explore IB & IGCSE →
              </button>
            </div>

            <div className="card-solid" style={{ padding: '1.5rem', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--text-heading-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>🧪 Mathematics & Science</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>1-on-1 tutoring in Maths, Physics, Chemistry, Biology & Coding.</p>
              <button onClick={() => navigateTo({ type: 'subject', id: 'maths' })} style={{ fontSize: '0.85rem', color: 'var(--color-link)', fontWeight: 700, cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                View Maths & Science →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Fee Calculator */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              LOCAL PRICING IN INR (₹)
            </span>
            <h2 className="section-title">
              Tuition Fee Estimator (₹) for {city.cityName}
            </h2>
            <p className="section-subtitle">
              Calculate your weekly/monthly 1-on-1 plan with zero hidden charges.
            </p>
          </div>

          <TuitionCalculator />
        </div>
      </section>

      {/* City FAQs */}
      <FAQAccordion
        customFaqs={city.faqs}
        title={`Tuition FAQs in ${city.cityName}`}
        subtitle={`Questions commonly asked by parents and students living in ${city.cityName}.`}
      />

      {/* Conversion Banner */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #1E1B4B 0%, #064E3B 100%)',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Elevate Your Child’s Grades in {city.cityName}
          </h2>
          <p style={{ color: '#E2E8F0', marginBottom: '1.75rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {city.conclusion}
          </p>
          <button
            type="button"
            onClick={() => openTrialModal({ country: `India - ${city.cityName}` })}
            className="btn btn-emerald btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <Sparkles size={18} />
            <span>Book Free 1-on-1 Trial Class in {city.cityName}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};
