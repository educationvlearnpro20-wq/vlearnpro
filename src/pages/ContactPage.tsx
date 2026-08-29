import React, { useState } from 'react';
import { 
  Phone, Mail, MessageSquare, MapPin, Clock, 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, User 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COUNTRIES_DATA } from '../data/countriesData';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';
import { submitLeadToWeb3Forms } from '../services/leadService';

export const ContactPage: React.FC = () => {
  const { selectedCountry, showToast } = useApp();
  const country = COUNTRIES_DATA[selectedCountry] || COUNTRIES_DATA.usa;

  const [form, setForm] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childGrade: 'Grade 10',
    curriculum: 'Cambridge IGCSE',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Send lead to Web3Forms (arrives in educationvlearnpro20@gmail.com)
    await submitLeadToWeb3Forms({
      formType: 'General Contact Inquiry',
      parentName: form.parentName,
      parentEmail: form.parentEmail,
      parentPhone: form.parentPhone,
      childGrade: form.childGrade,
      curriculum: form.curriculum,
      message: form.message,
      country: selectedCountry
    });

    showToast('Message Received! An Academic Advisor will contact you shortly.');
  };

  return (
    <main>
      <SEOHead
        title="Contact VLearnPro Education | Global Admissions & Parent Support"
        description="Get in touch with VLearnPro Education. Contact our global admissions hubs in USA, UK, UAE, Singapore & India. Book a free 1-on-1 trial class."
        primaryKeyword="Contact VLearnPro"
        canonicalUrl="https://vlearnproeducation.com/contact"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
            <span className="section-eyebrow">
              GLOBAL ADMISSIONS & INQUIRIES
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Connect with an Academic Advisor
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Whether you need curriculum guidance, pricing information, or a free trial class for your child, our educational counselors are available 7 days a week across global timezones.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4.5rem'
          }}>
            {/* Direct Contact Channels Column */}
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading-primary)', marginBottom: '1rem' }}>
                Global Operational Hubs
              </h2>

              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="VLearnPro Global Academic Advisor & Parent Support Counselor"
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
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div className="card-solid" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>💬</span>
                    <strong style={{ color: 'var(--text-heading-secondary)', fontSize: '0.95rem' }}>Direct WhatsApp & Admissions Hotline</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>WhatsApp / Phone: +91 8126144847</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Response Time: &lt; 5 Minutes (7 Days a Week)</div>
                </div>

                <div className="card-solid" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <MapPin size={18} style={{ color: 'var(--color-link)' }} />
                    <strong style={{ color: 'var(--text-heading-secondary)', fontSize: '0.95rem' }}>Corporate & Regional Operations Office</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    Near Union Bank, Jamia Nagar, Okhla, New Delhi, Delhi 110025, India
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Serving GCC, India & Global Families</div>
                </div>

                <div className="card-solid" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>✉️</span>
                    <strong style={{ color: 'var(--text-heading-secondary)', fontSize: '0.95rem' }}>Official Admissions Email</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Email: educationvlearnpro20@gmail.com</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Parent Support & Tutor Placement Inquiries</div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <a
                href="https://wa.me/918126144847?text=Hello%20VLearnPro,%20I%20would%20like%20to%20inquire%20about%201-on-1%20online%20tuition."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald"
                style={{ width: '100%', gap: '0.5rem', padding: '0.85rem' }}
              >
                <MessageSquare size={18} />
                <span>Instant WhatsApp Inquiry Response (&lt;5 Mins)</span>
              </a>
            </div>

            {/* General Inquiry Form */}
            <div className="card-glass" style={{ padding: '2.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading-primary)', marginBottom: '0.5rem' }}>
                Send an Admissions Inquiry
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Fill out this quick form and our lead academic coordinator will prepare a tailored consultation.
              </p>

              {submitted ? (
                <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'rgba(5, 150, 105, 0.2)',
                    color: '#10B981',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    Inquiry Submitted!
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Thank you! We will reach out via WhatsApp/Phone in your local timezone ({country.timezone}) shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
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
                        color: 'var(--text-heading-primary)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        WhatsApp Number *
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
                          color: 'var(--text-heading-primary)',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Email Address *
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
                          color: 'var(--text-heading-primary)',
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
                        value={form.childGrade}
                        onChange={e => setForm({ ...form, childGrade: e.target.value })}
                        placeholder="e.g. Grade 10"
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
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Curriculum Board
                      </label>
                      <input
                        type="text"
                        value={form.curriculum}
                        onChange={e => setForm({ ...form, curriculum: e.target.value })}
                        placeholder="e.g. Cambridge IGCSE"
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

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      Message or Inquiry Details
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about the subjects needed or any upcoming school exams..."
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        background: '#FFFFFF',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-heading-primary)',
                        fontSize: '0.875rem',
                        outline: 'none',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-emerald btn-lg"
                    style={{ width: '100%', gap: '0.4rem', marginTop: '0.5rem' }}
                  >
                    <span>Submit Inquiry</span>
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
