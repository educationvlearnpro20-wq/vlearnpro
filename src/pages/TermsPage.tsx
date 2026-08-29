import React from 'react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export const TermsPage: React.FC = () => {
  return (
    <main>
      <SEOHead
        title="Terms of Service & User Agreement | VLearnPro Education"
        description="Official Terms of Service for VLearnPro Education. Read our user agreement, 1-on-1 tutoring policies, payment terms, and platform rules."
        primaryKeyword="VLearnPro Terms of Service"
        canonicalUrl="https://vlearnproeducation.com/terms-of-service"
        breadcrumbName="Terms of Service"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

          <div style={{ marginBottom: '3rem' }}>
            <span className="section-eyebrow">
              USER AGREEMENT
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Terms of Service & Platform Rules
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Last Updated: August 29, 2026 • Governs usage of VLearnPro Education (https://vlearnproeducation.com).
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            
            <div>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>1. Acceptance of Terms</h2>
              <p>
                By accessing <strong>VLearnPro Education</strong>, booking a trial session, or submitting lead forms on our platform, you agree to comply with these Terms of Service. If you do not agree, please refrain from using our services.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>2. Description of Educational Services</h2>
              <p>
                VLearnPro Education operates an international online education institute providing live 1-on-1 online tuition classes, board exam preparation bootcamps, and language instruction for school students in Grades 1 through 12 across CBSE, ICSE, IGCSE, IB, Cambridge, and US Curricula.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>3. Free 1-on-1 Trial Class Policy</h2>
              <p>
                We provide a 100% free, zero-obligation 45-minute 1-on-1 trial class per student. Trial classes allow parents and students to experience our virtual classroom, assess tutor suitability, and receive a customized learning roadmap.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>4. Rescheduling & Cancellation Rules</h2>
              <p>
                Sessions may be rescheduled up to <strong>6 hours prior to the scheduled start time</strong> without penalty. Cancellations made with less than 6 hours' notice may be counted as conducted at our discretion to compensate assigned educators.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>5. Academic Integrity & Performance Disclaimer</h2>
              <p>
                While our top 1.8% verified tutors follow proven pedagogical frameworks (98.4% board score 90%+ success rate), individual academic results depend on student practice, homework compliance, and school attendance. We do not guarantee specific exam scores or grades.
              </p>
            </div>

            <div>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>6. Contact Information</h2>
              <div className="card-solid" style={{ padding: '1.25rem', marginTop: '0.75rem' }}>
                <div><strong>Admissions Email:</strong> educationvlearnpro20@gmail.com</div>
                <div><strong>WhatsApp / Phone:</strong> +91 8126144847</div>
                <div><strong>Platform:</strong> VLearnPro Education</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
