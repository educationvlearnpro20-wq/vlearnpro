import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Sparkles, Phone, MessageSquare, 
  Award, Globe, Check, ArrowRight, ShieldCheck, Star, 
  BookOpen, Layers, Languages, MapPin, Calculator, HelpCircle,
  Info, FileText, Users
} from 'lucide-react';
import { useApp, NavigationPath } from '../../context/AppContext';
import { BOARDS_DATA } from '../../data/boardsData';
import { SUBJECTS_DATA } from '../../data/subjectsData';
import { LANGUAGES_DATA } from '../../data/languagesData';
import { COUNTRIES_DATA } from '../../data/countriesData';
import { BoardId, SubjectId, LanguageId, CountryCode } from '../../types';

export const Navbar: React.FC = () => {
  const { 
    currentPath, 
    navigateTo, 
    selectedCountry, 
    setSelectedCountry, 
    openTrialModal, 
    openQuizModal 
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentCountry = COUNTRIES_DATA[selectedCountry] || COUNTRIES_DATA.usa;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: NavigationPath) => {
    navigateTo(path);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Semantic Navigation Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(239, 242, 246, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(15, 23, 42, 0.06)',
          boxShadow: isScrolled ? '0 10px 30px rgba(15, 23, 42, 0.08)' : 'none',
          transition: 'all 0.25s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          
          {/* Logo (Serves as Home) */}
          <button
            onClick={() => handleNavClick({ type: 'home' })}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textAlign: 'left',
              cursor: 'pointer',
              marginRight: '2.5rem',
              flexShrink: 0
            }}
            aria-label="VLearnPro Education Home"
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.45)'
            }}>
              <BookOpen size={22} />
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', display: 'block', lineHeight: 1.1 }}>
                VLearn<span style={{ color: '#2563EB' }}>Pro</span>
              </span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                EDUCATION
              </span>
            </div>
          </button>

          {/* Streamlined Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ alignItems: 'center', gap: '1.75rem', flex: 1, justifyContent: 'flex-start' }}>
            
            {/* Curricula & Boards Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('boards')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick({ type: 'boards-hub' })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.875rem',
                  fontWeight: currentPath.type === 'board' || currentPath.type === 'boards-hub' ? 700 : 500,
                  color: currentPath.type === 'board' || currentPath.type === 'boards-hub' ? '#2563EB' : 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.15s'
                }}
              >
                <span>Curricula & Boards</span>
                <ChevronDown size={14} style={{ transform: activeDropdown === 'boards' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {activeDropdown === 'boards' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  width: '520px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '1.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  zIndex: 200
                }}>
                  <div style={{ gridColumn: 'span 2', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-link)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      All Supported Global Boards
                    </span>
                    <button
                      onClick={() => handleNavClick({ type: 'boards-hub' })}
                      style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 700, cursor: 'pointer' }}
                    >
                      View All Boards →
                    </button>
                  </div>
                  {Object.keys(BOARDS_DATA).map((id) => {
                    const b = BOARDS_DATA[id as BoardId];
                    return (
                      <button
                        key={id}
                        onClick={() => handleNavClick({ type: 'board', id: id as BoardId })}
                        style={{
                          textAlign: 'left',
                          padding: '0.55rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          background: 'transparent',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {b.shortName} Tuition
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {b.badge}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Subjects Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('subjects')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick({ type: 'subjects-hub' })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.875rem',
                  fontWeight: currentPath.type === 'subject' || currentPath.type === 'subjects-hub' ? 700 : 500,
                  color: currentPath.type === 'subject' || currentPath.type === 'subjects-hub' ? '#2563EB' : 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.15s'
                }}
              >
                <span>Subjects</span>
                <ChevronDown size={14} style={{ transform: activeDropdown === 'subjects' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {activeDropdown === 'subjects' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  width: '540px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.15)',
                  padding: '1.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  zIndex: 200
                }}>
                  <div style={{ gridColumn: 'span 2', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Core Academic & Skill Tracks
                    </span>
                    <button
                      onClick={() => handleNavClick({ type: 'subjects-hub' })}
                      style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, cursor: 'pointer' }}
                    >
                      View All 11 Subjects →
                    </button>
                  </div>
                  {Object.keys(SUBJECTS_DATA).map((id) => {
                    const s = SUBJECTS_DATA[id as SubjectId];
                    return (
                      <button
                        key={id}
                        onClick={() => handleNavClick({ type: 'subject', id: id as SubjectId })}
                        style={{
                          textAlign: 'left',
                          padding: '0.55rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          background: 'transparent',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {s.name}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {s.grades}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Languages Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('languages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick({ type: 'languages-hub' })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.875rem',
                  fontWeight: currentPath.type === 'language' || currentPath.type === 'languages-hub' ? 700 : 500,
                  color: currentPath.type === 'language' || currentPath.type === 'languages-hub' ? '#2563EB' : 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.15s'
                }}
              >
                <span>Languages</span>
                <ChevronDown size={14} style={{ transform: activeDropdown === 'languages' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {activeDropdown === 'languages' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  width: '320px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.15)',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  zIndex: 200
                }}>
                  {Object.keys(LANGUAGES_DATA).map((id) => {
                    const l = LANGUAGES_DATA[id as LanguageId];
                    return (
                      <button
                        key={id}
                        onClick={() => handleNavClick({ type: 'language', id: id as LanguageId })}
                        style={{
                          textAlign: 'left',
                          padding: '0.55rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          background: 'transparent',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <span style={{ fontSize: '1.25rem' }}>{l.flag}</span>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{l.name}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{l.nativeName}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Global Hubs Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('countries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick({ type: 'countries-hub' })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.875rem',
                  fontWeight: currentPath.type === 'country' || currentPath.type === 'countries-hub' ? 700 : 500,
                  color: currentPath.type === 'country' || currentPath.type === 'countries-hub' ? '#2563EB' : 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.15s'
                }}
              >
                <span>Global Hubs</span>
                <ChevronDown size={14} style={{ transform: activeDropdown === 'countries' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {activeDropdown === 'countries' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  width: '460px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.15)',
                  padding: '1rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.35rem',
                  zIndex: 200
                }}>
                  {Object.keys(COUNTRIES_DATA).map((code) => {
                    const c = COUNTRIES_DATA[code as CountryCode];
                    return (
                      <button
                        key={code}
                        onClick={() => {
                          setSelectedCountry(code as CountryCode);
                          handleNavClick({ type: 'country', code: code as CountryCode });
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '0.55rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: 'transparent',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <span style={{ fontSize: '1.15rem' }}>{c.flag}</span>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{c.name}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{c.currency} ({c.currencySymbol})</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Exam Prep Direct Link */}
            <button
              onClick={() => handleNavClick({ type: 'exam-prep' })}
              style={{
                fontSize: '0.875rem',
                fontWeight: currentPath.type === 'exam-prep' ? 700 : 500,
                color: currentPath.type === 'exam-prep' ? '#2563EB' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'color 0.15s'
              }}
            >
              Exam Prep
            </button>

            {/* Pricing Direct Link */}
            <button
              onClick={() => handleNavClick({ type: 'pricing' })}
              style={{
                fontSize: '0.875rem',
                fontWeight: currentPath.type === 'pricing' ? 700 : 500,
                color: currentPath.type === 'pricing' ? '#2563EB' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'color 0.15s'
              }}
            >
              Pricing
            </button>

            {/* More Menu Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('more')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.875rem',
                  fontWeight: currentPath.type === 'about' || currentPath.type === 'blog' || currentPath.type === 'contact' || currentPath.type === 'careers' ? 700 : 500,
                  color: currentPath.type === 'about' || currentPath.type === 'blog' || currentPath.type === 'contact' || currentPath.type === 'careers' ? '#2563EB' : 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.15s'
                }}
              >
                <span>More</span>
                <ChevronDown size={14} style={{ transform: activeDropdown === 'more' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {activeDropdown === 'more' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: '0',
                  width: '260px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.15)',
                  padding: '0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  zIndex: 200
                }}>
                  <button
                    onClick={() => handleNavClick({ type: 'about' })}
                    style={{
                      textAlign: 'left',
                      padding: '0.6rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <Info size={16} style={{ color: '#2563EB' }} />
                    <span>About VLearnPro</span>
                  </button>

                  <button
                    onClick={() => handleNavClick({ type: 'blog' })}
                    style={{
                      textAlign: 'left',
                      padding: '0.6rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <FileText size={16} style={{ color: '#059669' }} />
                    <span>Parent Guides & Articles</span>
                  </button>

                  <button
                    onClick={() => handleNavClick({ type: 'careers' })}
                    style={{
                      textAlign: 'left',
                      padding: '0.6rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <Users size={16} style={{ color: '#D97706' }} />
                    <span>Careers & Educator Faculty</span>
                  </button>

                  <button
                    onClick={() => handleNavClick({ type: 'contact' })}
                    style={{
                      textAlign: 'left',
                      padding: '0.6rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <Phone size={16} style={{ color: '#059669' }} />
                    <span>Contact Admissions</span>
                  </button>
                </div>
              )}
            </div>

          </nav>

          {/* Desktop Right Action CTA */}
          <div className="desktop-actions" style={{ alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
            <button
              onClick={() => openTrialModal()}
              className="btn btn-emerald"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem', gap: '0.4rem', whiteSpace: 'nowrap' }}
            >
              <Sparkles size={15} />
              <span>Book Free Trial</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-toggle"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-sm)',
              background: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer'
            }}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '72px',
            background: '#EFF2F6',
            backdropFilter: 'blur(24px)',
            zIndex: 9999,
            overflowY: 'auto',
            padding: '1.25rem 1rem 4rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {/* Top VIP Trust Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.6rem 0.85rem',
            background: '#FFFFFF',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            fontSize: '0.78rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D97706', fontWeight: 600 }}>
              <Star size={14} fill="#D97706" color="#D97706" />
              <span>4.94★ (1,840+ Parent Reviews)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#059669', fontWeight: 600 }}>
              <span>{currentCountry.flag}</span>
              <span>{currentCountry.name} ({currentCountry.timezone})</span>
            </div>
          </div>

          {/* High-Converting Action Buttons Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => {
                openTrialModal();
                setIsMobileMenuOpen(false);
              }}
              className="btn btn-emerald btn-lg"
              style={{
                width: '100%',
                gap: '0.5rem',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(5, 150, 105, 0.35)'
              }}
            >
              <Sparkles size={18} />
              <span style={{ fontWeight: 800 }}>Book Free 1-on-1 Trial Class</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                openQuizModal();
                setIsMobileMenuOpen(false);
              }}
              className="btn btn-secondary"
              style={{
                width: '100%',
                gap: '0.5rem',
                justifyContent: 'center',
                background: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-sm)',
                color: '#2563EB',
                fontWeight: 700
              }}
            >
              <span>Match Your Child’s Ideal Tutor (60s)</span>
            </button>

            <a
              href="https://wa.me/918126144847?text=Hello%20VLearnPro,%20I%20am%20a%20parent%20looking%20for%201-on-1%20online%20tuition."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: '#FFFFFF',
                border: '1px solid rgba(5, 150, 105, 0.3)',
                boxShadow: 'var(--shadow-sm)',
                color: '#059669',
                fontSize: '0.875rem',
                fontWeight: 700
              }}
            >
              <MessageSquare size={16} />
              <span>Direct WhatsApp Admissions (+91 8126144847)</span>
            </a>
          </div>

          {/* Categorized Visual Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', paddingLeft: '0.25rem' }}>
              EXPLORE ACADEMIC DIRECTORIES
            </span>

            {[
              {
                label: 'Home Overview',
                sub: 'Global 1-on-1 Online Education Institute',
                icon: BookOpen,
                color: '#60A5FA',
                path: { type: 'home' }
              },
              {
                label: 'School Curricula & Boards',
                sub: 'CBSE, ICSE, IGCSE, IB DP, Cambridge & US Boards',
                icon: Layers,
                color: '#818CF8',
                path: { type: 'boards-hub' }
              },
              {
                label: 'Subject Specializations',
                sub: 'Maths, Physics, Chemistry, Biology, Coding & English',
                icon: Award,
                color: '#34D399',
                path: { type: 'subjects-hub' }
              },
              {
                label: 'World Languages',
                sub: 'Spanish, French, German, Chinese, Urdu & Fluency',
                icon: Languages,
                color: '#F472B6',
                path: { type: 'languages-hub' }
              },
              {
                label: 'Global Country Hubs',
                sub: 'USA, UK, UAE, Singapore, Europe, Canada, Australia',
                icon: Globe,
                color: '#F59E0B',
                path: { type: 'countries-hub' }
              },
              {
                label: 'Transparent Tuition Estimator',
                sub: 'Customize plan & calculate monthly investment',
                icon: Calculator,
                color: '#38BDF8',
                path: { type: 'pricing' }
              },
              {
                label: 'About VLearnPro & Faculty Vetting',
                sub: 'Top 1.8% verified educators & teaching methodology',
                icon: Info,
                color: '#C084FC',
                path: { type: 'about' }
              },
              {
                label: 'Educational Guides & Articles',
                sub: 'Parent strategy, syllabus breakdowns & tips',
                icon: FileText,
                color: '#4ADE80',
                path: { type: 'blog' }
              },
              {
                label: 'Careers & Join as Educator',
                sub: 'Apply to join our elite global faculty',
                icon: Users,
                color: '#FBBF24',
                path: { type: 'careers' }
              },
              {
                label: 'Contact Global Admissions',
                sub: '7 Days/week parent support & consultation',
                icon: Phone,
                color: '#A7F3D0',
                path: { type: 'contact' }
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              const isActive = currentPath.type === item.path.type;
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.path as NavigationPath)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    background: isActive ? 'rgba(37, 99, 235, 0.1)' : '#FFFFFF',
                    border: `1px solid ${isActive ? '#2563EB' : 'var(--border-medium)'}`,
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-sm)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(37, 99, 235, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2563EB',
                      flexShrink: 0
                    }}>
                      <IconComp size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Drawer Guarantee Footer */}
          <div style={{
            padding: '1rem',
            background: 'var(--brand-emerald-light)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--color-success)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>
              <ShieldCheck size={16} />
              <span>100% Free Trial • No Credit Card Required</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
              100% Money-Back & Free Tutor Swap Guarantee
            </div>
          </div>
        </div>
      )}
    </>
  );
};
