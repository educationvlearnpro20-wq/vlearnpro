import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Award, 
  Clock, Phone, Mail, User, BookOpen, Star 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COUNTRIES_DATA } from '../data/countriesData';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { submitLeadToWeb3Forms } from '../services/leadService';

export const FreeDemoPage: React.FC = () => {
  const { openTrialModal, selectedCountry, showToast } = useApp();
  const country = COUNTRIES_DATA[selectedCountry] || COUNTRIES_DATA.usa;

  const [form, setForm] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    studentName: '',
    grade: 'Grade 10',
    board: 'Cambridge IGCSE',
    subject: 'Mathematics'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Send lead to Web3Forms (arrives in educationvlearnpro20@gmail.com)
    await submitLeadToWeb3Forms({
      formType: 'Free Demo Request',
      parentName: form.parentName,
      parentEmail: form.parentEmail,
      parentPhone: form.parentPhone,
      childName: form.studentName,
      childGrade: form.grade,
      curriculum: form.board,
      subject: form.subject,
      country: selectedCountry
    });

    showToast('🎉 Free Demo Class Reserved! Our Academic Team will reach out in <15 mins.');
  };

  return (
    <main>
      <SEOHead
        title="Book a Free 1-on-1 Online Demo Class | VLearnPro Education"
        description="Book your 100% free, zero-obligation 45-minute 1-on-1 diagnostic demo class. Matched with top 1.8% verified tutors across CBSE, ICSE, IGCSE, IB & US Boards."
        primaryKeyword="Free Demo Online Tuition"
        canonicalUrl="https://vlearnproeducation.com/free-demo"
        breadcrumbName="Book Free Demo"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Book Free Demo' }]} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Left Value Prop */}
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
                100% FREE • ZERO OBLIGATION
              </span>
              <h1 style={{ marginBottom: '1.25rem', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
                Experience a Live 1-on-1 Diagnostic Demo Class
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                See how our top 1.8% verified subject mentors diagnose knowledge gaps, simplify complex concepts, and build your child’s academic confidence.
              </p>

              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                alt="Student receiving live 1-on-1 diagnostic demo class"
                loading="lazy"
                decoding="async"
                width="800"
                height="450"
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '1.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)'
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>45-Minute 1-on-1 Diagnostic Lesson</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Comprehensive assessment of past grade prerequisites.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>Customized Learning Roadmap</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Tailored syllabus blueprint matching your child’s school calendar.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>No Credit Card Required</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Completely free test drive with zero long-term commitment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="card-glass" style={{ padding: '2.5rem', border: '1px solid rgba(5, 150, 105, 0.3)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Reserve Your Free Demo Class
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Scheduled in your local timezone (<strong>{country.timezone}</strong>).
              </p>

              {submitted ? (
                <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Demo Class Reserved!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Thank you, <strong style={{ color: 'var(--text-primary)' }}>{form.parentName || 'Parent'}</strong>. Our Lead Coordinator is pairing <strong style={{ color: 'var(--color-link)' }}>{form.studentName || 'your child'}</strong> with a top educator for <strong style={{ color: 'var(--text-primary)' }}>{form.subject} ({form.board})</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    Reserve Another Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      Parent Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.parentName}
                      onChange={e => setForm({ ...form, parentName: e.target.value })}
                      placeholder="e.g. Dr. Robert Vance"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        background: '#FFFFFF',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Parent WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.parentPhone}
                        onChange={e => setForm({ ...form, parentPhone: e.target.value })}
                        placeholder={`${country.phoneCode} 555-0199`}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.75rem',
                          background: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Parent Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.parentEmail}
                        onChange={e => setForm({ ...form, parentEmail: e.target.value })}
                        placeholder="parent@example.com"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.75rem',
                          background: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Student Grade
                      </label>
                      <input
                        type="text"
                        value={form.grade}
                        onChange={e => setForm({ ...form, grade: e.target.value })}
                        placeholder="e.g. Grade 10"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.75rem',
                          background: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Curriculum Board
                      </label>
                      <input
                        type="text"
                        value={form.board}
                        onChange={e => setForm({ ...form, board: e.target.value })}
                        placeholder="e.g. Cambridge IGCSE"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.75rem',
                          background: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      Primary Subject Needed *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Mathematics / Physics"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        background: '#FFFFFF',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-emerald btn-lg"
                    style={{ width: '100%', gap: '0.4rem', marginTop: '0.5rem' }}
                  >
                    <Sparkles size={18} />
                    <span>Confirm Free Demo Class Booking</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <TrustBadgeBar />
    </main>
  );
};
