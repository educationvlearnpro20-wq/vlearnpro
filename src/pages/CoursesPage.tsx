import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SUBJECTS_DATA } from '../data/subjectsData';
import { SubjectId } from '../types';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';

export const CoursesPage: React.FC = () => {
  const { navigateTo, openTrialModal } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Courses (11)' },
    { id: 'core', label: 'Maths & Core' },
    { id: 'science', label: 'Sciences (Physics/Chem/Bio)' },
    { id: 'tech', label: 'Coding & Computer Science' },
    { id: 'languages', label: 'English & Languages' },
    { id: 'skills', label: 'Communication & Leadership' }
  ];

  const filteredSubjects = Object.keys(SUBJECTS_DATA).filter((id) => {
    const s = SUBJECTS_DATA[id as SubjectId];
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === 'all') return matchesSearch;
    return matchesSearch && s.category === selectedCategory;
  });

  return (
    <main>
      <SEOHead
        title="Courses & Programs Directory (Grades 1-12) | VLearnPro Education"
        description="Browse all 1-on-1 online courses: Maths, Physics, Chemistry, Biology, English, Coding & Public Speaking across CBSE, ICSE, IGCSE, IB & US Boards."
        primaryKeyword="Online Tuition Courses"
        canonicalUrl="https://vlearnproeducation.com/courses"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Courses & Programs' }]} />

          <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">
              COMPREHENSIVE COURSE CATALOG
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Academic & Skill Programs (Grades 1 to 12)
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              All programs are conducted live 1-on-1 with senior subject specialists. Choose a subject below to view specific curriculum roadmaps.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}>
            {/* Search input */}
            <div style={{ position: 'relative', flex: '1 1 300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses (e.g., calculus, physics, python, public speaking)..."
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.5rem',
                  background: '#0B0F1D',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#FFFFFF',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.45rem 0.8rem',
                    fontSize: '0.8rem',
                    borderRadius: 'var(--radius-full)',
                    background: selectedCategory === cat.id ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : 'rgba(255, 255, 255, 0.04)',
                    border: selectedCategory === cat.id ? '1px solid #818CF8' : '1px solid var(--border-subtle)',
                    color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                    fontWeight: selectedCategory === cat.id ? 700 : 400,
                    cursor: 'pointer'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Course Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
          }}>
            {filteredSubjects.map((id) => {
              const s = SUBJECTS_DATA[id as SubjectId];
              return (
                <div
                  key={id}
                  className="card-glass"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span className="badge badge-indigo">
                        {s.grades}
                      </span>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                        1-on-1 Live Mentorship
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      {s.name}
                    </h2>

                    <p style={{ fontSize: '0.825rem', color: '#2563EB', fontWeight: 600, marginBottom: '0.75rem' }}>
                      {s.tagline}
                    </p>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                      {s.description}
                    </p>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                        Curricula Supported:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                        {s.boardsCovered.slice(0, 4).map((b, i) => (
                          <span key={i} style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-xs)', color: '#E2E8F0' }}>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                    <button
                      type="button"
                      onClick={() => navigateTo({ type: 'subject', id: id as SubjectId })}
                      className="btn btn-secondary"
                      style={{ width: '100%', fontSize: '0.875rem' }}
                    >
                      View Syllabus Track →
                    </button>
                    <button
                      type="button"
                      onClick={() => openTrialModal({ subject: s.name })}
                      className="btn btn-emerald"
                      style={{ width: '100%', fontSize: '0.875rem' }}
                    >
                      Book Free Trial Class
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredSubjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              No courses found matching "{searchQuery}". Try another keyword or browse all categories.
            </div>
          )}
        </div>
      </section>

      <TrustBadgeBar />
    </main>
  );
};
