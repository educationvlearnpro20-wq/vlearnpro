import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { GENERAL_FAQS, FAQItem } from '../../data/faqData';
import { useApp } from '../../context/AppContext';

interface FAQAccordionProps {
  customFaqs?: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  customFaqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our 1-on-1 online classes, tutors, and trial sessions.'
}) => {
  const { openTrialModal } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqsToDisplay: { question: string; answer: string; category?: string }[] = customFaqs
    ? customFaqs
    : GENERAL_FAQS;

  const filteredFaqs = faqsToDisplay.filter(item => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (customFaqs) return matchesSearch;
    if (activeCategory === 'all') return matchesSearch;
    return matchesSearch && item.category === activeCategory;
  });

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding">
      <div className="container-sm">
        <div className="section-header">
          <span className="section-eyebrow">
            GOT QUESTIONS?
          </span>
          <h2 className="section-title">
            {title}
          </h2>
          <p className="section-subtitle">
            {subtitle}
          </p>

          {/* Search bar */}
          <div style={{ position: 'relative', marginTop: '1.5rem' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., reschedule, curriculum, trial class, recordings)..."
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 2.75rem',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-full)',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          {!customFaqs && (
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
              {[
                { id: 'all', label: 'All FAQs' },
                { id: 'general', label: 'General' },
                { id: 'tutors', label: 'Tutors & Vetting' },
                { id: 'classes', label: 'Live Classes' },
                { id: 'pricing', label: 'Pricing & Guarantee' },
                { id: 'tech', label: 'Tech & Setup' }
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.78rem',
                    borderRadius: 'var(--radius-full)',
                    background: activeCategory === cat.id ? 'rgba(79, 70, 229, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: activeCategory === cat.id ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                    color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-glass"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid rgba(79, 70, 229, 0.4)' : '1px solid var(--border-subtle)'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '1rem',
                    cursor: 'pointer',
                    background: isOpen ? 'rgba(79, 70, 229, 0.05)' : 'transparent'
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: isOpen ? '#818CF8' : '#FFFFFF', lineHeight: 1.4 }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: isOpen ? '#818CF8' : 'var(--text-muted)',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
              No matching questions found. Chat with our counselors for immediate help.
            </div>
          )}
        </div>

        {/* Still have questions prompt */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
            Have a specific question about your child’s school syllabus?
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Our Academic Advisors provide complimentary 1-on-1 consultations for international school parents.
          </p>
          <button
            type="button"
            onClick={() => openTrialModal()}
            className="btn btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            Speak with an Academic Advisor →
          </button>
        </div>
      </div>
    </section>
  );
};
