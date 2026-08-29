import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, Eye, Server, FileText } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main>
      <SEOHead
        title="Privacy Policy & Data Protection | VLearnPro Education"
        description="Official Privacy Policy for VLearnPro Education. Learn how we collect, protect, and handle lead data, form submissions, and child privacy under COPPA and GDPR-K."
        primaryKeyword="VLearnPro Privacy Policy"
        canonicalUrl="https://vlearnproeducation.com/privacy-policy"
        breadcrumbName="Privacy Policy"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <div style={{ marginBottom: '3rem' }}>
            <span className="section-eyebrow">
              LEGAL & DATA GOVERNANCE
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Privacy Policy & Data Protection Disclosure
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Last Updated & Effective Date: August 29, 2026 • Compliant with Google Ads, Microsoft Advertising, COPPA, and GDPR-K.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            
            {/* Highlights Box */}
            <div className="card-glass" style={{ padding: '1.5rem', borderLeft: '4px solid #059669' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} style={{ color: '#059669' }} />
                <span>Our Data Promise to Parents</span>
              </h3>
              <p style={{ margin: 0 }}>
                We collect personal information solely to provide personalized 1-on-1 tutoring, match your child with verified subject specialists, and communicate schedule updates. <strong>We never sell, rent, or trade parent or student personal data to third-party data brokers.</strong>
              </p>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>1. Information We Collect</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                When you visit <strong>https://vlearnproeducation.com</strong> or fill out lead forms, quiz widgets, or demo request modals on our platform, we collect the following types of information:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Contact Information:</strong> Parent/Guardian Name, Email Address (e.g., <code>educationvlearnpro20@gmail.com</code> communication channels), Phone / WhatsApp Number (<code>+91 8126144847</code>).</li>
                <li><strong>Academic Information:</strong> Student’s Grade (Grades 1-12), Curriculum/Board (CBSE, ICSE, IGCSE, IB, Cambridge, US Common Core), Primary Subjects of interest, and target academic goals.</li>
                <li><strong>Technical & Analytics Data:</strong> IP Address, browser type, device identifier, referral source, and cookie identifiers for Google Ads and Microsoft Advertising conversion measurement.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>2. How We Use Collected Data</h2>
              <p style={{ marginBottom: '0.75rem' }}>We use lead data strictly for legitimate operational purposes:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Matching your child with certified subject specialists and arranging 1-on-1 trial classes.</li>
                <li>Sending class confirmations, reminder notifications, and progress reports via email and WhatsApp.</li>
                <li>Processing tuition fee calculations and transaction receipts.</li>
                <li>Measuring advertising effectiveness and compliance for Google Ads and Microsoft Advertising conversion tags.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>3. Children’s Privacy (COPPA & GDPR-K Compliance)</h2>
              <p>
                Protecting child privacy is paramount. VLearnPro Education complies with the Children’s Online Privacy Protection Act (COPPA) and General Data Protection Regulation for Children (GDPR-K). All trial bookings, enrollments, and communications must be authorized by a parent or legal guardian over 18 years of age. We do not knowingly collect personal information directly from children under 13 without parental consent.
              </p>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>4. Data Security & Storage</h2>
              <p>
                We enforce SSL/TLS encryption for all data submitted through our forms. Access to parent contact details and student records is restricted strictly to authorized academic coordinators and assigned tutors bound by confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>5. Cookies & Advertising Conversion Tracking</h2>
              <p>
                We use cookies and conversion tracking tags (including Google Ads remarketing and Microsoft Advertising tags) to measure campaign performance. You can disable cookies at any time through your web browser settings.
              </p>
            </div>

            <div>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>6. Contact Us Regarding Your Privacy Rights</h2>
              <p>
                If you wish to request access to, correction of, or deletion of your personal data, please contact our Data Governance Officer:
              </p>
              <div className="card-solid" style={{ padding: '1.25rem', marginTop: '0.75rem' }}>
                <div><strong>Email:</strong> educationvlearnpro20@gmail.com</div>
                <div><strong>WhatsApp / Phone:</strong> +91 8126144847</div>
                <div><strong>Website:</strong> https://vlearnproeducation.com</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
