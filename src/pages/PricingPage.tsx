import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRICING_PLANS } from '../data/pricingData';
import { TuitionCalculator } from '../components/calculator/TuitionCalculator';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { FAQAccordion } from '../components/widgets/FAQAccordion';

export const PricingPage: React.FC = () => {
  const { openTrialModal } = useApp();

  return (
    <main>
      <SEOHead
        title="Online Tuition Fees & Packages | 1-on-1 Classes | VLearnPro"
        description="Transparent, flexible monthly & quarterly fee packages for 1-on-1 online tuition in your local currency. Zero hidden fees. Calculate your tuition cost now."
        primaryKeyword="Online Tuition Pricing"
        canonicalUrl="https://vlearnproeducation.com/pricing"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Pricing & Plans' }]} />

          <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <span className="section-eyebrow">
              TRANSPARENT & FAIR INVESTMENT
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Simple, Transparent 1-on-1 Online Tuition Plans
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Zero admission fees. Zero rigid contracts. Switch tutors anytime or claim a 100% refund on unused sessions.
            </p>
          </div>

          {/* Interactive Calculator Section */}
          <div style={{ marginBottom: '4.5rem' }}>
            <TuitionCalculator />
          </div>

          {/* Structured Tiers Cards */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div className="section-header">
              <span className="section-eyebrow">
                CURATED MEMBERSHIP TIERS
              </span>
              <h2 className="section-title">
                Choose the Right Pace for Your Child
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}>
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="card-glass"
                  style={{
                    padding: '2.25rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: plan.featured ? '2px solid #4F46E5' : '1px solid var(--border-subtle)',
                    position: 'relative',
                    boxShadow: plan.featured ? 'var(--shadow-xl)' : 'none'
                  }}
                >
                  {plan.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '0.25rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.05em'
                    }}>
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading-secondary)', marginBottom: '0.35rem' }}>
                      {plan.name}
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                      {plan.tagline}
                    </p>

                    <div style={{ padding: '0.65rem 0.85rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: '#2563EB', fontWeight: 600, marginBottom: '1.5rem' }}>
                      {plan.savingsText}
                    </div>

                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                      Plan Inclusions:
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
                      {plan.features.map((feat, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <Check size={16} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => openTrialModal()}
                    className={plan.featured ? "btn btn-emerald btn-lg" : "btn btn-secondary btn-lg"}
                    style={{ width: '100%', gap: '0.5rem' }}
                  >
                    <span>Book Free Trial on {plan.name.split(' ')[0]}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Box */}
          <div style={{
            padding: '2.5rem',
            background: 'rgba(5, 150, 105, 0.08)',
            border: '1px solid rgba(5, 150, 105, 0.25)',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(5, 150, 105, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#059669',
              flexShrink: 0
            }}>
              <ShieldCheck size={36} />
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Our 100% Zero-Risk Parent Happiness Guarantee
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                If you or your child are not completely delighted with your paired mentor, we will immediately switch to an alternative department head or refund 100% of your remaining unused session balance—no hassle, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <FAQAccordion
        title="Tuition & Billing FAQs"
        subtitle="Transparent answers regarding session scheduling, refunds, and multi-subject discounts."
      />

      <TrustBadgeBar />
    </main>
  );
};
