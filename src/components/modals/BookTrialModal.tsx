import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, Award, ArrowRight, ArrowLeft, Star, Phone, Mail, User, BookOpen, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { COUNTRIES_DATA } from '../../data/countriesData';
import { submitLeadToWeb3Forms } from '../../services/leadService';

const GRADES_LIST = [
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8',
  'Grade 9', 'Grade 10 (Board Exam)',
  'Grade 11', 'Grade 12 (Board / AP / IB)'
];

const BOARDS_LIST = [
  'CBSE', 'ICSE / ISC', 'Cambridge IGCSE', 'IB (PYP/MYP/DP)',
  'Cambridge (CAIE)', 'UK GCSE / A-Level', 'Singapore Curriculum',
  'American Curriculum / AP', 'Other / General'
];

const SUBJECTS_LIST = [
  'Mathematics', 'Science (Physics, Chem, Bio)', 'Physics',
  'Chemistry', 'Biology', 'English Literature & Grammar',
  'Coding & Computer Science', 'Spoken English & Fluency',
  'Communication & Public Speaking', 'Spanish', 'French',
  'German', 'Mandarin Chinese', 'Urdu', 'Board Exam Revision'
];

const TIME_SLOTS = [
  'Weekday Afternoons (3 PM - 6 PM)',
  'Weekday Evenings (6 PM - 9 PM)',
  'Weekend Mornings (9 AM - 12 PM)',
  'Weekend Afternoons (12 PM - 5 PM)',
  'Flexible / Any Available Slot'
];

export const BookTrialModal: React.FC = () => {
  const { isTrialModalOpen, closeTrialModal, trialPrefill, selectedCountry, showToast, navigateTo } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    grade: 'Grade 10 (Board Exam)',
    board: 'Cambridge IGCSE',
    subject: 'Mathematics',
    preferredSlot: 'Weekday Evenings (6 PM - 9 PM)',
    specificGoal: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (trialPrefill) {
      setFormData(prev => ({
        ...prev,
        grade: trialPrefill.grade || prev.grade,
        board: trialPrefill.board || prev.board,
        subject: trialPrefill.subject || prev.subject
      }));
    }
  }, [trialPrefill, isTrialModalOpen]);

  if (!isTrialModalOpen) return null;

  const currentCountry = COUNTRIES_DATA[selectedCountry] || COUNTRIES_DATA.usa;

  const handleNext = () => {
    if (step === 1 && (!formData.grade || !formData.board)) {
      alert('Please select your child’s Grade and Curriculum Board.');
      return;
    }
    if (step === 2 && !formData.subject) {
      alert('Please select the primary subject needed.');
      return;
    }
    setStep(prev => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.parentPhone || !formData.parentEmail) {
      alert('Please fill in your contact information so we can coordinate your trial class.');
      return;
    }

    setIsSubmitting(true);

    // Send lead data to Web3Forms (arrives in educationvlearnpro20@gmail.com inbox)
    await submitLeadToWeb3Forms({
      formType: 'Free Trial Booking',
      parentName: formData.parentName,
      parentEmail: formData.parentEmail,
      parentPhone: formData.parentPhone,
      childName: formData.childName,
      childGrade: formData.grade,
      curriculum: formData.board,
      subject: formData.subject,
      timeSlot: formData.preferredSlot,
      country: selectedCountry
    });

    setIsSubmitting(false);
    setStep(4); // Success step
    showToast('🎉 Free Trial Class Booked! Our Academic Team will reach out in <15 minutes.');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(5, 8, 16, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          background: '#FFFFFF',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25)',
          overflow: 'hidden',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(15, 23, 42, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, #4F46E5 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}>
              <Award size={20} />
            </div>
            <div>
              <h2 id="trial-modal-title" style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                Book Your 1-on-1 Free Trial Class
              </h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                Zero payment required • 45-min diagnostic session with top 1.8% verified tutor
              </p>
            </div>
          </div>
          <button
            onClick={closeTrialModal}
            style={{
              padding: '0.5rem',
              color: 'var(--text-muted)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        {step !== 4 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.75rem',
            background: 'var(--brand-primary-light)',
            borderBottom: '1px solid var(--border-subtle)',
            fontSize: '0.8rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: step >= 1 ? 'var(--color-link)' : 'var(--text-muted)', fontWeight: step === 1 ? 700 : 500 }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: step >= 1 ? 'var(--color-link)' : 'var(--border-subtle)', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>1</span>
              <span>Grade & Board</span>
            </div>
            <div style={{ height: '1px', flex: 1, background: step >= 2 ? 'var(--color-link)' : 'var(--border-subtle)', margin: '0 0.75rem' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: step >= 2 ? 'var(--color-link)' : 'var(--text-muted)', fontWeight: step === 2 ? 700 : 500 }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: step >= 2 ? 'var(--color-link)' : 'var(--border-subtle)', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>2</span>
              <span>Subject & Goals</span>
            </div>
            <div style={{ height: '1px', flex: 1, background: step >= 3 ? 'var(--color-link)' : 'var(--border-subtle)', margin: '0 0.75rem' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: step >= 3 ? 'var(--color-link)' : 'var(--text-muted)', fontWeight: step === 3 ? 700 : 500 }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: step >= 3 ? 'var(--color-link)' : 'var(--border-subtle)', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>3</span>
              <span>Schedule & Contact</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div style={{ padding: '1.75rem', overflowY: 'auto', flex: 1 }}>
          {step === 1 && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  1. Select Student Grade Level
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.5rem' }}>
                  {GRADES_LIST.map(g => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setFormData({ ...formData, grade: g })}
                      style={{
                        padding: '0.6rem 0.75rem',
                        fontSize: '0.825rem',
                        borderRadius: 'var(--radius-sm)',
                        background: formData.grade === g ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : 'rgba(255,255,255,0.05)',
                        color: formData.grade === g ? '#FFFFFF' : 'var(--text-secondary)',
                        border: formData.grade === g ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                        fontWeight: formData.grade === g ? 600 : 400,
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  2. Select Curriculum Board
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.5rem' }}>
                  {BOARDS_LIST.map(b => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, board: b })}
                      style={{
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: formData.board === b ? 'linear-gradient(135deg, #059669 0%, #047857 100%)' : 'rgba(255,255,255,0.05)',
                        color: formData.board === b ? '#FFFFFF' : 'var(--text-secondary)',
                        border: formData.board === b ? '1px solid #34D399' : '1px solid var(--border-subtle)',
                        fontWeight: formData.board === b ? 600 : 400,
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  1. Which Subject do you need 1-on-1 tuition for?
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0.5rem' }}>
                  {SUBJECTS_LIST.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: s })}
                      style={{
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: formData.subject === s ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : 'rgba(255,255,255,0.05)',
                        color: formData.subject === s ? '#FFFFFF' : 'var(--text-secondary)',
                        border: formData.subject === s ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                        fontWeight: formData.subject === s ? 600 : 400,
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  2. Any specific challenges or goals? (Optional)
                </label>
                <textarea
                  value={formData.specificGoal}
                  onChange={e => setFormData({ ...formData, specificGoal: e.target.value })}
                  placeholder="e.g. Struggles with algebra word problems, needs to prepare for May IGCSE board exams, wants to score a 5 on AP Physics..."
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Parent Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Dr. Robert Vance"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem 0.65rem 2.25rem',
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
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Student Name
                  </label>
                  <div style={{ position: 'relative' }}>
                    <BookOpen size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      type="text"
                      value={formData.childName}
                      onChange={e => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="e.g. Emma Vance"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem 0.65rem 2.25rem',
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
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Parent WhatsApp / Mobile Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#059669' }} />
                    <input
                      type="tel"
                      required
                      value={formData.parentPhone}
                      onChange={e => setFormData({ ...formData, parentPhone: e.target.value })}
                      placeholder={`${currentCountry.phoneCode} 555-0199`}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                        background: '#FFFFFF',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>We send zoom link & tutor profile via WhatsApp.</span>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Parent Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      type="email"
                      required
                      value={formData.parentEmail}
                      onChange={e => setFormData({ ...formData, parentEmail: e.target.value })}
                      placeholder="name@example.com"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem 0.65rem 2.25rem',
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
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Preferred Time Slot ({currentCountry.timezone})
                </label>
                <div style={{ position: 'relative' }}>
                  <Clock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <select
                    value={formData.preferredSlot}
                    onChange={e => setFormData({ ...formData, preferredSlot: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                      background: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                  >
                    {TIME_SLOTS.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Privacy Disclosure Notice */}
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1rem', lineHeight: 1.4 }}>
                By submitting, you agree to our <button type="button" onClick={() => { closeTrialModal(); navigateTo({ type: 'privacy-policy' }); }} style={{ color: '#2563EB', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</button> & <button type="button" onClick={() => { closeTrialModal(); navigateTo({ type: 'terms-of-service' }); }} style={{ color: '#2563EB', textDecoration: 'underline', cursor: 'pointer' }}>Terms of Service</button>. We protect your data and will never sell or spam your contact information.
              </div>

              {/* Trust Callout */}
              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(5, 150, 105, 0.08)',
                border: '1px solid rgba(5, 150, 105, 0.25)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                fontSize: '0.8rem',
                color: '#6EE7B7'
              }}>
                <ShieldCheck size={20} style={{ flexShrink: 0 }} />
                <span>100% Free & No Obligation. No credit card required. Guaranteed child safeguarding compliance.</span>
              </div>
            </form>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                marginBottom: '1rem',
                boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
              }}>
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Trial Class Request Confirmed!
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontSize: '0.925rem' }}>
                Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.parentName || 'Parent'}</strong>. Our Lead Academic Coordinator is pairing <strong style={{ color: '#818CF8' }}>{formData.childName || 'your child'}</strong> with a top 1.8% verified tutor for <strong style={{ color: '#FFFFFF' }}>{formData.subject} ({formData.board})</strong>.
              </p>

              <div style={{
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                maxWidth: '460px',
                margin: '0 auto 1.5rem auto',
                textAlign: 'left',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Student Grade:</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{formData.grade}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Curriculum:</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{formData.board}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Subject:</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{formData.subject}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>WhatsApp Contact:</span>
                  <span style={{ color: '#10B981', fontWeight: 600 }}>{formData.parentPhone}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <a
                  href={`https://wa.me/918126144847?text=Hello%20VLearnPro,%20I%20just%20booked%20a%20free%20trial%20for%20my%20child%20in%20${encodeURIComponent(formData.grade)}%20for%20${encodeURIComponent(formData.subject)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald"
                  style={{ gap: '0.5rem' }}
                >
                  <span>Chat on WhatsApp Now</span>
                  <ArrowRight size={16} />
                </a>
                <button
                  type="button"
                  onClick={closeTrialModal}
                  className="btn btn-secondary"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step !== 4 && (
          <div style={{
            padding: '1.25rem 1.75rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.02)'
          }}>
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(prev => ((prev - 1) as 1 | 2 | 3))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <span>Rated 4.94/5 by 1,840+ Parents</span>
              </div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary"
                style={{ gap: '0.4rem' }}
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn btn-emerald btn-lg"
                style={{ gap: '0.4rem' }}
              >
                <span>{isSubmitting ? 'Confirming...' : 'Confirm Free Trial Class'}</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
