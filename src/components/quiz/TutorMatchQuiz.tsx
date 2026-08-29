import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, UserCheck, ShieldCheck, Star, Award, RotateCcw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TUTORS_DATA } from '../../data/tutorsData';

interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: { label: string; sublabel: string; value: string }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is your child’s current grade level?',
    subtitle: 'This helps us pair them with tutors certified in their specific stage of cognitive development.',
    options: [
      { label: 'Primary (Grades 1 - 5)', sublabel: 'Foundational numeracy, phonics & science curiosity', value: 'primary' },
      { label: 'Middle School (Grades 6 - 8)', sublabel: 'Pre-algebra, analytical sciences & writing structure', value: 'middle' },
      { label: 'Secondary (Grades 9 - 10)', sublabel: 'Class 10 Board prep, IGCSE & GCSE exam sprints', value: 'secondary' },
      { label: 'Senior High (Grades 11 - 12)', sublabel: 'AP, IB DP HL, A-Levels & university entrance', value: 'senior' }
    ]
  },
  {
    id: 2,
    question: 'Which curriculum board does your child’s school follow?',
    subtitle: 'Our tutors specialize strictly in specific board marking schemes and syllabi.',
    options: [
      { label: 'Cambridge IGCSE / A-Level / O-Level', sublabel: 'CAIE & Edexcel specifications with past paper vaults', value: 'cambridge' },
      { label: 'IB (International Baccalaureate)', sublabel: 'PYP, MYP, DP HL/SL, TOK & Internal Assessments', value: 'ib' },
      { label: 'CBSE / ICSE (India / Gulf)', sublabel: 'NCERT mastery, Selina solutions & Class 10/12 Boards', value: 'cbse-icse' },
      { label: 'American Curriculum / AP / Common Core', sublabel: 'Honors GPA boost, AP exams & Digital SAT prep', value: 'american' },
      { label: 'Singapore MOE / Other Curriculum', sublabel: 'Singapore Math heuristics & PSLE / O-Levels', value: 'singapore' }
    ]
  },
  {
    id: 3,
    question: 'What is the primary academic goal for this tuition?',
    subtitle: 'We tailor the pedagogy blueprint to your exact success metric.',
    options: [
      { label: 'Turn Around Struggling Grades / Rebuild Confidence', sublabel: 'Gently eliminate learning gaps and past grade backlog', value: 'turnaround' },
      { label: 'Score A* / 95%+ / Score 5 on Board & AP Exams', sublabel: 'Master examiner marking keys & top 1% past paper tricks', value: 'topper' },
      { label: 'Consistent Weekly Homework & Test Prep', sublabel: 'Never fall behind on weekly school quizzes and projects', value: 'consistency' },
      { label: 'Advanced Coding, Languages or Public Speaking', sublabel: 'Master 21st-century superpowers and leadership skills', value: 'skills' }
    ]
  },
  {
    id: 4,
    question: 'What type of tutor personality works best for your child?',
    subtitle: 'Personality matching boosts engagement and academic retention by over 300%.',
    options: [
      { label: 'Patient & Encouraging Mentor', sublabel: 'Builds self-esteem gently without pressure or stress', value: 'patient' },
      { label: 'Rigorous Academic Master / Senior Examiner', sublabel: 'Deep analytical precision and demanding problem sets', value: 'rigorous' },
      { label: 'Engaging & Interactive Tech-Savvy Coach', sublabel: 'Uses gamification, visual whiteboards & digital tools', value: 'interactive' }
    ]
  }
];

export const TutorMatchQuiz: React.FC = () => {
  const { isQuizModalOpen, closeQuizModal, openTrialModal } = useApp();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [matchedTutor, setMatchedTutor] = useState(TUTORS_DATA[0]);

  if (!isQuizModalOpen) return null;

  const handleSelectOption = (questionId: number, value: string) => {
    const nextAnswers = { ...answers, [questionId]: value };
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate Match
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        // Select matching tutor
        if (nextAnswers[2] === 'ib' || nextAnswers[2] === 'cambridge') {
          setMatchedTutor(TUTORS_DATA[1]);
        } else if (nextAnswers[3] === 'skills') {
          setMatchedTutor(TUTORS_DATA[2]);
        } else if (nextAnswers[2] === 'singapore') {
          setMatchedTutor(TUTORS_DATA[3]);
        } else {
          setMatchedTutor(TUTORS_DATA[0]);
        }
        setCurrentStep(QUIZ_QUESTIONS.length); // Results screen
      }, 1200);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
  };

  const isCompleted = currentStep === QUIZ_QUESTIONS.length;
  const currentQ = QUIZ_QUESTIONS[currentStep];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(5, 8, 16, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '660px',
          background: 'linear-gradient(180deg, #131B2E 0%, #0B0F1D 100%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={20} style={{ color: '#F59E0B' }} />
            <div>
              <h3 id="quiz-modal-title" style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#FFFFFF' }}>
                60-Second Perfect Tutor Match Finder
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>
                Algorithmically pairing your child with the top 1.8% verified educators
              </p>
            </div>
          </div>
          <button
            onClick={closeQuizModal}
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

        {/* Progress Bar */}
        {!isCompleted && !isCalculating && (
          <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.08)' }}>
            <div
              style={{
                width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #4F46E5 0%, #059669 100%)',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        )}

        {/* Content Body */}
        <div style={{ padding: '1.75rem 1.5rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {isCalculating && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{
                width: '54px',
                height: '54px',
                border: '4px solid rgba(79, 70, 229, 0.2)',
                borderTopColor: '#4F46E5',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'spin 1s linear infinite',
                marginBottom: '1.25rem'
              }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Analyzing Pedagogical Match...
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Cross-referencing 2,500+ tutor performance scores & curriculum specializations
              </p>
            </div>
          )}

          {!isCalculating && !isCompleted && currentQ && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#818CF8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.35rem', marginBottom: '0.35rem' }}>
                  {currentQ.question}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {currentQ.subtitle}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(currentQ.id, opt.value)}
                    style={{
                      padding: '1rem 1.25rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(79, 70, 229, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.4)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                        {opt.label}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {opt.sublabel}
                      </div>
                    </div>
                    <ArrowRight size={18} style={{ color: 'var(--text-muted)', flexShrink: 0, marginLeft: '1rem' }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {!isCalculating && isCompleted && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  background: 'rgba(5, 150, 105, 0.15)',
                  border: '1px solid rgba(5, 150, 105, 0.3)',
                  borderRadius: 'var(--radius-full)',
                  color: '#6EE7B7',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem'
                }}>
                  <UserCheck size={14} />
                  <span>99.4% Compatibility Match Found</span>
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  Meet Your Child’s Recommended Mentor
                </h4>
              </div>

              {/* Matched Tutor Profile Card */}
              <div style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-md)',
                    background: matchedTutor.avatarGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    flexShrink: 0,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                  }}>
                    {matchedTutor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <h5 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                        {matchedTutor.name}
                      </h5>
                      <span className="badge badge-emerald">{matchedTutor.badge}</span>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: '#818CF8', margin: '0.15rem 0 0.35rem 0', fontWeight: 500 }}>
                      {matchedTutor.degree} • {matchedTutor.university}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#F59E0B', fontWeight: 600 }}>
                        <Star size={14} fill="#F59E0B" /> {matchedTutor.rating} ({matchedTutor.reviewCount} reviews)
                      </span>
                      <span>• {matchedTutor.hoursTaught}+ Live Hours</span>
                      <span>• {matchedTutor.experienceYears} Yrs Exp</span>
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(0, 0, 0, 0.25)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  borderLeft: '3px solid #4F46E5'
                }}>
                  <strong style={{ color: '#FFFFFF' }}>Specialty:</strong> {matchedTutor.specialty}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    closeQuizModal();
                    openTrialModal({ subject: matchedTutor.subjects[0] });
                  }}
                  className="btn btn-emerald btn-lg"
                  style={{ flex: 1, gap: '0.5rem' }}
                >
                  <span>Book Free Trial with {matchedTutor.name.split(' ')[0]}</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-secondary"
                  title="Retake Quiz"
                  style={{ padding: '0.75rem' }}
                >
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
