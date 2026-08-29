import React from 'react';
import { Sparkles, Star, ArrowRight, MessageSquare } from 'lucide-react';
import { CountryCode } from '../types';
import { COUNTRIES_DATA } from '../data/countriesData';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { FAQAccordion } from '../components/widgets/FAQAccordion';
import { TuitionCalculator } from '../components/calculator/TuitionCalculator';

interface CountryLandingPageProps {
  countryCode: CountryCode;
}

const COUNTRY_IMAGES: Record<string, string> = {
  usa: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  uk: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  uae: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  singapore: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  canada: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  australia: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  europe: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  india: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80'
};

export const CountryLandingPage: React.FC<CountryLandingPageProps> = ({ countryCode }) => {
  const { openTrialModal, openQuizModal } = useApp();
  const country = COUNTRIES_DATA[countryCode] || COUNTRIES_DATA.usa;

  const countryImg = COUNTRY_IMAGES[countryCode] || COUNTRY_IMAGES.usa;

  return (
    <main>
      <SEOHead
        title={country.metaTitle}
        description={country.metaDescription}
        primaryKeyword={`Online Tuition in ${country.name}`}
        canonicalUrl={`https://vlearnproeducation.com/country/${country.code}`}
        faqs={country.faqs}
        breadcrumbName={country.name}
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
              { label: country.name }
            ]}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.85rem', background: 'var(--brand-emerald-light)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-full)', color: 'var(--color-success)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>
                <span>{country.flag}</span>
                <span>LOCALIZED FOR {country.name.toUpperCase()} • {country.timezone}</span>
              </div>

              <h1 style={{ marginBottom: '1rem', color: 'var(--text-heading-primary)' }}>
                Online Tuition Classes in {country.name}
              </h1>

              <p style={{ fontSize: '1.25rem', color: 'var(--text-heading-secondary)', fontWeight: 500, marginBottom: '1.25rem', lineHeight: 1.5 }}>
                {country.tagline}
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {country.description}
              </p>

              {/* Quick Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {country.stats.map((s, idx) => (
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
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => openTrialModal({ country: country.name })}
                  className="btn btn-emerald btn-lg"
                  style={{ gap: '0.5rem' }}
                >
                  <Sparkles size={18} />
                  <span>Book Free Diagnostic Class in {country.name}</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={openQuizModal}
                  className="btn btn-secondary btn-lg"
                >
                  Match {country.name} Tutor (60s)
                </button>
              </div>
            </div>

            <div>
              <img
                src={countryImg}
                alt={`Online Tuition Classes in ${country.name}`}
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
                style={{
                  width: '100%',
                  height: '340px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBadgeBar />

      {/* Local Parent Pain Points & Solutions */}
      <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              TAILORED FOR {country.name.toUpperCase()} PARENTS
            </span>
            <h2 className="section-title">
              Solving the Biggest Tutoring Challenges in {country.name}
            </h2>
            <p className="section-subtitle">
              How VLearnPro eliminates the high costs, rigid scheduling, and crowded classroom sizes of local tuition options.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            {country.parentPainPoints.map((item, idx) => (
              <div
                key={idx}
                className="card-glass"
                style={{ padding: '1.75rem' }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Local Problem #{idx + 1}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading-secondary)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {item.pain}
                </h4>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-success)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    VLearnPro Solution
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Student Success Story in this Country */}
          <div style={{
            padding: '2.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '1rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--color-warning)" color="var(--color-warning)" />
              ))}
            </div>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-heading-primary)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              "{country.studentQuote.quote}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading-primary)' }}>
                  {country.studentQuote.student}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-link)' }}>
                  {country.studentQuote.school} • {country.studentQuote.city}
                </div>
              </div>
              <span className="badge badge-emerald" style={{ fontSize: '0.85rem', padding: '0.4rem 0.85rem' }}>
                {country.studentQuote.score}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Fee Calculator */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              LOCAL PRICING IN {country.currency}
            </span>
            <h2 className="section-title">
              Tuition Fee Estimator ({country.currencySymbol})
            </h2>
            <p className="section-subtitle">
              Calculate your weekly/monthly 1-on-1 plan with zero hidden charges.
            </p>
          </div>

          <TuitionCalculator />
        </div>
      </section>

      {/* Country FAQs */}
      <FAQAccordion
        customFaqs={country.faqs}
        title={`Tuition FAQs in ${country.name}`}
        subtitle={`Questions commonly asked by families living in ${country.name}.`}
      />

      {/* Conversion Banner */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #1E1B4B 0%, #064E3B 100%)',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Transform Your Child’s School Performance in {country.name}
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '1rem' }}>
            Book a complimentary 45-minute diagnostic session matched strictly to your local timezone ({country.timezone}).
          </p>
          <button
            type="button"
            onClick={() => openTrialModal({ country: country.name })}
            className="btn btn-emerald btn-lg"
            style={{ gap: '0.5rem' }}
          >
            <Sparkles size={18} />
            <span>Book Free 1-on-1 Trial Class</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};
