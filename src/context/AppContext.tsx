import React, { createContext, useContext, useState, useEffect } from 'react';
import { CountryCode, CurrencyCode, BoardId, SubjectId, LanguageId } from '../types';
import { COUNTRIES_DATA } from '../data/countriesData';
import { CURRENCIES } from '../data/pricingData';

export type NavigationPath = 
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'courses' }
  | { type: 'boards-hub' }
  | { type: 'board'; id: BoardId }
  | { type: 'subjects-hub' }
  | { type: 'subject'; id: SubjectId }
  | { type: 'languages-hub' }
  | { type: 'language'; id: LanguageId }
  | { type: 'countries-hub' }
  | { type: 'country'; code: CountryCode }
  | { type: 'exam-prep' }
  | { type: 'pricing' }
  | { type: 'free-demo' }
  | { type: 'blog' }
  | { type: 'blog-post'; slug: string }
  | { type: 'careers' }
  | { type: 'contact' }
  | { type: 'privacy-policy' }
  | { type: 'terms-of-service' }
  | { type: 'refund-policy' }
  | { type: 'child-safety' };

interface BookingPrefill {
  grade?: string;
  board?: string;
  subject?: string;
  country?: string;
}

interface AppContextType {
  currentPath: NavigationPath;
  navigateTo: (path: NavigationPath) => void;
  selectedCountry: CountryCode;
  setSelectedCountry: (code: CountryCode) => void;
  selectedCurrency: CurrencyCode;
  setSelectedCurrency: (currency: CurrencyCode) => void;
  isTrialModalOpen: boolean;
  openTrialModal: (prefill?: BookingPrefill) => void;
  closeTrialModal: () => void;
  trialPrefill: BookingPrefill;
  isQuizModalOpen: boolean;
  openQuizModal: () => void;
  closeQuizModal: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Parse initial path from window.location
  const parsePathFromUrl = (): NavigationPath => {
    const path = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
    const parts = path.split('/');

    if (!path || parts[0] === '') return { type: 'home' };
    if (parts[0] === 'about') return { type: 'about' };
    if (parts[0] === 'courses') return { type: 'courses' };
    if (parts[0] === 'pricing') return { type: 'pricing' };
    if (parts[0] === 'contact') return { type: 'contact' };
    if (parts[0] === 'exam-prep') return { type: 'exam-prep' };
    if (parts[0] === 'free-demo') return { type: 'free-demo' };
    if (parts[0] === 'careers') return { type: 'careers' };
    if (parts[0] === 'privacy-policy') return { type: 'privacy-policy' };
    if (parts[0] === 'terms-of-service') return { type: 'terms-of-service' };
    if (parts[0] === 'refund-policy') return { type: 'refund-policy' };
    if (parts[0] === 'child-safety') return { type: 'child-safety' };
    if (parts[0] === 'blog') {
      if (parts[1]) return { type: 'blog-post', slug: parts[1] };
      return { type: 'blog' };
    }
    if (parts[0] === 'boards') {
      if (parts[1]) return { type: 'board', id: parts[1] as BoardId };
      return { type: 'boards-hub' };
    }
    if (parts[0] === 'subjects') {
      if (parts[1]) return { type: 'subject', id: parts[1] as SubjectId };
      return { type: 'subjects-hub' };
    }
    if (parts[0] === 'languages') {
      if (parts[1]) return { type: 'language', id: parts[1] as LanguageId };
      return { type: 'languages-hub' };
    }
    if (parts[0] === 'countries') {
      if (parts[1]) return { type: 'country', code: parts[1] as CountryCode };
      return { type: 'countries-hub' };
    }

    return { type: 'home' };
  };

  const [currentPath, setCurrentPath] = useState<NavigationPath>(parsePathFromUrl);
  const [selectedCountry, setSelectedCountryState] = useState<CountryCode>('uae');
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('AED');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [trialPrefill, setTrialPrefill] = useState<BookingPrefill>({});
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync state with browser history
  const navigateTo = (path: NavigationPath) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let url = '/';
    switch (path.type) {
      case 'home': url = '/'; break;
      case 'about': url = '/about'; break;
      case 'courses': url = '/courses'; break;
      case 'boards-hub': url = '/boards'; break;
      case 'board': url = `/boards/${path.id}`; break;
      case 'subjects-hub': url = '/subjects'; break;
      case 'subject': url = `/subjects/${path.id}`; break;
      case 'languages-hub': url = '/languages'; break;
      case 'language': url = `/languages/${path.id}`; break;
      case 'countries-hub': url = '/countries'; break;
      case 'country': url = `/countries/${path.code}`; break;
      case 'exam-prep': url = '/exam-prep'; break;
      case 'pricing': url = '/pricing'; break;
      case 'free-demo': url = '/free-demo'; break;
      case 'blog': url = '/blog'; break;
      case 'blog-post': url = `/blog/${path.slug}`; break;
      case 'careers': url = '/careers'; break;
      case 'contact': url = '/contact'; break;
    }

    window.history.pushState(null, '', url);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(parsePathFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setSelectedCountry = (code: CountryCode) => {
    setSelectedCountryState(code);
    const countryData = COUNTRIES_DATA[code];
    if (countryData && CURRENCIES[countryData.currency]) {
      setSelectedCurrency(countryData.currency);
    }
  };

  const openTrialModal = (prefill?: BookingPrefill) => {
    if (prefill) setTrialPrefill(prefill);
    setIsTrialModalOpen(true);
  };

  const closeTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  const openQuizModal = () => setIsQuizModalOpen(true);
  const closeQuizModal = () => setIsQuizModalOpen(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigateTo,
        selectedCountry,
        setSelectedCountry,
        selectedCurrency,
        setSelectedCurrency,
        isTrialModalOpen,
        openTrialModal,
        closeTrialModal,
        trialPrefill,
        isQuizModalOpen,
        openQuizModal,
        closeQuizModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
