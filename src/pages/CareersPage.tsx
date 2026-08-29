import React, { useState } from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, Users, Sparkles, 
  ArrowRight, BookOpen, User, Mail, Phone, FileText 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { TutorVettingSection } from '../components/widgets/TutorVettingSection';

export const CareersPage: React.FC = () => {
  const { showToast } = useApp();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    subjectsTaught: '',
    experienceYears: '5+'
  });

  const [applied, setApplied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    showToast('Application Received! Our Educator Recruitment Team will review your credentials.');
  };

  return (
    <main>
      <SEOHead
        title="Careers & Educator Recruitment | Join VLearnPro Teaching Faculty"
        description="Join the top 1.8% global online teaching faculty at VLearnPro Education. We hire premier subject specialists, PhD scholars, and international board examiners."
        primaryKeyword="VLearnPro Careers"
        canonicalUrl="https://vlearnproeducation.com/careers"
        breadcrumbName="Careers & Educators"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Careers & Educators' }]} />

          <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
            <span className="section-eyebrow">
              JOIN OUR WORLD-CLASS FACULTY
            </span>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Teach the World’s Most Motivated Students 1-on-1
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              VLearnPro recruits subject specialists, PhD researchers, top university medalists, and former board examiners. We offer industry-leading hourly compensation, flexible scheduling, and cutting-edge digital whiteboard tools.
            </p>
          </div>

          {/* Educator Vetting Process */}
          <TutorVettingSection />

          {/* Educator Application Form */}
          <div style={{ marginTop: '4rem', maxWidth: '720px', margin: '4rem auto 0 auto' }}>
            <div className="card-glass" style={{ padding: '2.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span className="badge badge-indigo" style={{ marginBottom: '0.5rem' }}>
                  FACULTY APPLICATION
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading-primary)', margin: 0 }}>
                  Apply to Become a VLearnPro Educator
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', marginTop: '0.35rem' }}>
                  Top 1.8% acceptance rate • Competitive global hourly rates • Flexible timezone scheduling
                </p>
              </div>

              {applied ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'var(--brand-emerald-light)',
                    color: 'var(--color-success)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-heading-primary)', marginBottom: '0.5rem' }}>
                    Application Submitted!
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                    Thank you, <strong style={{ color: 'var(--text-heading-primary)' }}>{form.name}</strong>. Our Faculty Review Board will evaluate your credentials and contact you within 48 hours for Stage 1 screening.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Full Name & Academic Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Prof. Sarah Jenkins"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        background: '#FFFFFF',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-heading-primary)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="educator@example.com"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.75rem',
                          background: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-heading-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 555-0199"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.75rem',
                          background: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-heading-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Highest Qualification & University
                      </label>
                      <input
                        type="text"
                        value={form.university}
                        onChange={e => setForm({ ...form, university: e.target.value })}
                        placeholder="e.g. M.Sc Physics (Cambridge)"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.75rem',
                          background: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-heading-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Teaching Experience
                      </label>
                      <select
                        value={form.experienceYears}
                        onChange={e => setForm({ ...form, experienceYears: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.75rem',
                          background: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-heading-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      >
                        <option value="1-3">1 - 3 Years</option>
                        <option value="3-5">3 - 5 Years</option>
                        <option value="5+">5+ Years (Preferred)</option>
                        <option value="10+">10+ Years (Senior Lead)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Subjects & Curricula You Can Teach *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subjectsTaught}
                      onChange={e => setForm({ ...form, subjectsTaught: e.target.value })}
                      placeholder="e.g. IB Physics HL, Cambridge IGCSE 0580 Maths, AP Calculus BC"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        background: '#FFFFFF',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-heading-primary)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', gap: '0.4rem', marginTop: '0.5rem' }}
                  >
                    <span>Submit Educator Application</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <TrustBadgeBar />
    </main>
  );
};
