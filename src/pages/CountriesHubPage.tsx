import React from 'react';
import { COUNTRIES_DATA } from '../data/countriesData';
import { CountryCode } from '../types';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';

const COUNTRY_IMAGES: Record<string, string> = {
  usa: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80',
  uk: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
  uae: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80',
  singapore: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80',
  canada: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80',
  australia: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80',
  europe: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80',
  india: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=500&q=80'
};

export const CountriesHubPage: React.FC = () => {
  const { navigateTo, setSelectedCountry, openTrialModal } = useApp();

  return (
    <main>
      <SEOHead
        title="Global Online Tuition Hubs (8 Countries) | VLearnPro Education"
        description="Localized 1-on-1 online tuition across USA, UK, UAE, Singapore, Europe, Canada, Australia & India. Scheduled in your local timezone with local curriculum specialists."
        primaryKeyword="Global Online Tuition"
        canonicalUrl="https://vlearnproeducation.com/countries"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Global Hubs' }]} />

          <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
            <span className="section-eyebrow">
              GLOBAL OPERATIONAL HUBS
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Localized 1-on-1 Online Tuition Across the GCC & Regional Hubs
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              We synchronize live tutoring directly with GCC school calendars across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman & India, regional academic standards (KHDA, ADEK, MOE), and local time zones (GST, AST, IST).
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {Object.keys(COUNTRIES_DATA).map((code) => {
              const c = COUNTRIES_DATA[code as CountryCode];
              return (
                <div
                  key={code}
                  className="card-glass"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {COUNTRY_IMAGES[code] && (
                      <img
                        src={COUNTRY_IMAGES[code]}
                        alt={`Online Tuition in ${c.name}`}
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="240"
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover',
                          borderRadius: 'var(--radius-md)',
                          marginBottom: '1rem',
                          border: '1px solid rgba(255, 255, 255, 0.12)'
                        }}
                      />
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '2.25rem' }}>{c.flag}</span>
                      <span className="badge badge-emerald">
                        {c.currency} ({c.currencySymbol})
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-heading-secondary)', marginBottom: '0.25rem' }}>
                      {c.name}
                    </h2>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-link)', fontWeight: 600, marginBottom: '0.75rem' }}>
                      Timezone: {c.timezone}
                    </p>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {c.tagline}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCountry(code as CountryCode);
                        navigateTo({ type: 'country', code: code as CountryCode });
                      }}
                      className="btn btn-secondary"
                      style={{ width: '100%', fontSize: '0.875rem' }}
                    >
                      Explore {c.name} Hub →
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCountry(code as CountryCode);
                        openTrialModal({ country: c.name });
                      }}
                      className="btn btn-emerald"
                      style={{ width: '100%', fontSize: '0.875rem' }}
                    >
                      Book Free Trial in {c.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TrustBadgeBar />
    </main>
  );
};
