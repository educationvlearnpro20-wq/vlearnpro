import React, { useState } from 'react';
import { Calculator, ShieldCheck, Check, ArrowRight, Zap, Sparkles, HelpCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CURRENCIES, CurrencyConfig } from '../../data/pricingData';
import { CurrencyCode } from '../../types';

export const TuitionCalculator: React.FC = () => {
  const { selectedCurrency, setSelectedCurrency, openTrialModal } = useApp();

  const [gradeTier, setGradeTier] = useState<'primary' | 'middle' | 'senior'>('middle');
  const [sessionsPerWeek, setSessionsPerWeek] = useState<number>(3);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('quarterly');

  const currConfig: CurrencyConfig = CURRENCIES[selectedCurrency] || CURRENCIES.USD;

  // Grade tier multipliers
  // Primary (Grades 1-5): 0.9x base
  // Middle (Grades 6-8): 1.0x base
  // Senior / Board / AP / IB (Grades 9-12): 1.25x base
  const gradeMultiplier = gradeTier === 'primary' ? 0.9 : gradeTier === 'middle' ? 1.0 : 1.25;

  // Base hourly rate calculation
  const calculatedHourlyRate = Math.round(currConfig.hourlyBaseRate * gradeMultiplier);

  // Total hours per month (approx 4.2 weeks/month)
  const hoursPerMonth = Math.round(sessionsPerWeek * 4.2);

  // Discounts:
  // Frequency discount: 3+ sessions/wk -> 8% discount, 4+ -> 12% discount
  const freqDiscount = sessionsPerWeek >= 4 ? 0.12 : sessionsPerWeek >= 3 ? 0.08 : 0;

  // Billing cycle discount: Quarterly -> additional 10% discount
  const cycleDiscount = billingCycle === 'quarterly' ? 0.10 : 0;

  const totalDiscountPercent = Math.round((freqDiscount + cycleDiscount) * 100);

  const rawMonthlyTotal = calculatedHourlyRate * hoursPerMonth;
  const discountedMonthlyTotal = Math.round(rawMonthlyTotal * (1 - (freqDiscount + cycleDiscount)));
  const effectiveHourlyRate = Math.round(discountedMonthlyTotal / hoursPerMonth);
  const monthlySavings = rawMonthlyTotal - discountedMonthlyTotal;

  return (
    <section className="section-padding">
      <div className="container">
        <div className="card-glass" style={{
          maxWidth: '1040px',
          margin: '0 auto',
          padding: '2.5rem 2rem',
          border: '1px solid rgba(79, 70, 229, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
      {/* Background glow accent */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818CF8', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
            <Calculator size={16} />
            <span>Transparent Tuition Estimator</span>
          </div>
          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, margin: 0, color: '#FFFFFF' }}>
            Customize Your Child’s Learning Plan
          </h3>
        </div>

        {/* Currency Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.35rem 0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>CURRENCY:</span>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value as CurrencyCode)}
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xs)',
              padding: '0.3rem 0.5rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {Object.keys(CURRENCIES).map((c) => (
              <option key={c} value={c}>
                {c} ({CURRENCIES[c as CurrencyCode].symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* Controls Column */}
          <div>
            {/* Grade Tier Selector */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                1. Student Grade & Stage
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setGradeTier('primary')}
                  style={{
                    padding: '0.75rem 0.5rem',
                    textAlign: 'center',
                    background: gradeTier === 'primary' ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : 'rgba(255,255,255,0.04)',
                    border: gradeTier === 'primary' ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: gradeTier === 'primary' ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Grades 1-5</div>
                  <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>Primary</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGradeTier('middle')}
                  style={{
                    padding: '0.75rem 0.5rem',
                    textAlign: 'center',
                    background: gradeTier === 'middle' ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : 'rgba(255,255,255,0.04)',
                    border: gradeTier === 'middle' ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: gradeTier === 'middle' ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Grades 6-8</div>
                  <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>Middle School</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGradeTier('senior')}
                  style={{
                    padding: '0.75rem 0.5rem',
                    textAlign: 'center',
                    background: gradeTier === 'senior' ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : 'rgba(255,255,255,0.04)',
                    border: gradeTier === 'senior' ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: gradeTier === 'senior' ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Grades 9-12</div>
                  <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>Board / AP / IB</div>
                </button>
              </div>
            </div>

            {/* Session Frequency Selector */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  2. Live 1-on-1 Sessions Per Week
                </label>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#818CF8' }}>
                  {sessionsPerWeek} hrs / week (~{hoursPerMonth} hrs/mo)
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                {[2, 3, 4, 5].map((hrs) => (
                  <button
                    key={hrs}
                    type="button"
                    onClick={() => setSessionsPerWeek(hrs)}
                    style={{
                      padding: '0.65rem 0.5rem',
                      textAlign: 'center',
                      background: sessionsPerWeek === hrs ? 'linear-gradient(135deg, #059669 0%, #047857 100%)' : 'rgba(255,255,255,0.04)',
                      border: sessionsPerWeek === hrs ? '1px solid #34D399' : '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: sessionsPerWeek === hrs ? '#FFFFFF' : 'var(--text-secondary)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer'
                    }}
                  >
                    {hrs} hrs/wk
                  </button>
                ))}
              </div>
            </div>

            {/* Billing Cycle Discount Toggle */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                3. Commitment Plan
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  style={{
                    padding: '0.75rem',
                    textAlign: 'center',
                    background: billingCycle === 'monthly' ? 'rgba(79, 70, 229, 0.2)' : 'rgba(255,255,255,0.04)',
                    border: billingCycle === 'monthly' ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: billingCycle === 'monthly' ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Monthly Flex</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Pay month-to-month</div>
                </button>

                <button
                  type="button"
                  onClick={() => setBillingCycle('quarterly')}
                  style={{
                    padding: '0.75rem',
                    textAlign: 'center',
                    background: billingCycle === 'quarterly' ? 'rgba(5, 150, 105, 0.2)' : 'rgba(255,255,255,0.04)',
                    border: billingCycle === 'quarterly' ? '1px solid #34D399' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: billingCycle === 'quarterly' ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  <span style={{ position: 'absolute', top: '-8px', right: '8px', background: '#059669', color: '#FFFFFF', fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                    SAVE 10%
                  </span>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Quarterly (3 Months)</div>
                  <div style={{ fontSize: '0.72rem', color: '#6EE7B7' }}>Guaranteed Improvement</div>
                </button>
              </div>
            </div>
          </div>

          {/* Fee Output Card */}
          <div style={{
            background: 'linear-gradient(180deg, #162032 0%, #0F172A 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-xl)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    Estimated Investment
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginTop: '0.25rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                      {currConfig.symbol}{discountedMonthlyTotal.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>/ month</span>
                  </div>
                </div>

                {totalDiscountPercent > 0 && (
                  <span className="badge badge-emerald">
                    {totalDiscountPercent}% DISCOUNT APPLIED
                  </span>
                )}
              </div>

              <div style={{ padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', fontSize: '0.825rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Effective Rate:</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    {currConfig.symbol}{effectiveHourlyRate} / live hour
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Monthly Live Hours:</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>~{hoursPerMonth} Hours</span>
                </div>
                {monthlySavings > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#34D399', fontWeight: 600 }}>
                    <span>You Save:</span>
                    <span>{currConfig.symbol}{monthlySavings.toLocaleString()} / month</span>
                  </div>
                )}
              </div>

              {/* Inclusions checklist */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span>100% Dedicated 1-on-1 Certified Tutor</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span>Free HD Session Recordings & Homework Vault</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span>100% Money-Back & Free Tutor Swap Guarantee</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => openTrialModal()}
              className="btn btn-emerald btn-lg"
              style={{ width: '100%', gap: '0.5rem' }}
            >
              <span>Book Free Trial at This Rate</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};
