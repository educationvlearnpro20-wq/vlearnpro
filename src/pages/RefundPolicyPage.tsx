import React from 'react';
import { ShieldCheck, RotateCcw, CheckCircle2, DollarSign } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export const RefundPolicyPage: React.FC = () => {
  return (
    <main>
      <SEOHead
        title="Refund & Cancellation Policy | VLearnPro Education"
        description="Official Refund & Guarantee Policy for VLearnPro Education. Read our 100% money-back guarantee, tutor swap rules, and rescheduling policies."
        primaryKeyword="VLearnPro Refund Policy"
        canonicalUrl="https://vlearnproeducation.com/refund-policy"
        breadcrumbName="Refund Policy"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <Breadcrumbs items={[{ label: 'Refund & Guarantee Policy' }]} />

          <div style={{ marginBottom: '3rem' }}>
            <span className="section-eyebrow">
              PARENT SATISFACTION GUARANTEE
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Refund & Cancellation Policy
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Effective Date: August 29, 2026 • 100% Transparent Guarantee for VLearnPro Education.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            
            <div className="card-glass" style={{ padding: '1.5rem', borderLeft: '4px solid #D97706' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <RotateCcw size={20} style={{ color: '#D97706' }} />
                <span>100% Money-Back & Free Tutor Swap Guarantee</span>
              </h3>
              <p style={{ margin: 0 }}>
                We believe in zero-risk online education. If you are ever unsatisfied with an assigned tutor for any reason, we will replace your tutor immediately or <strong>refund 100% of your remaining unused session balance</strong>—no hidden fees or long-term lock-in contracts.
              </p>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>1. Trial Session Guarantee</h2>
              <p>
                Every student receives a 100% free, 45-minute diagnostic trial session. If you choose not to enroll after the trial class, you owe nothing. No credit card information is collected for trial sessions.
              </p>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>2. Unused Balance Refund Eligibility</h2>
              <p>
                Parents can request a refund for unused tuition sessions at any time during an active package. Refunds are calculated on a pro-rata basis for remaining unconducted classes and credited back to your original payment method within 5–7 business days.
              </p>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>3. Free Tutor Replacement Policy</h2>
              <p>
                If your child does not connect well with their assigned tutor, notify your Academic Coordinator. We will rematch your child with another top 1.8% verified subject specialist free of charge.
              </p>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>4. How to Request a Refund</h2>
              <p>
                To initiate a refund or request a tutor replacement, contact our admissions desk:
              </p>
              <div className="card-solid" style={{ padding: '1.25rem', marginTop: '0.75rem' }}>
                <div><strong>Email:</strong> educationvlearnpro20@gmail.com</div>
                <div><strong>WhatsApp / Phone:</strong> +91 8126144847</div>
                <div><strong>Response Time:</strong> Within 24 hours</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
