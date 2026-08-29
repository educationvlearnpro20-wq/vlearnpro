import { CurrencyCode } from '../types';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateAgainstUSD: number; // 1 USD in target currency
  hourlyBaseRate: number; // Primary/Middle school 1-on-1 base rate per hour
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  AED: { code: 'AED', symbol: 'د.إ', rateAgainstUSD: 3.67, hourlyBaseRate: 88 },
  SAR: { code: 'SAR', symbol: 'SR', rateAgainstUSD: 3.75, hourlyBaseRate: 90 },
  QAR: { code: 'QAR', symbol: 'QR', rateAgainstUSD: 3.64, hourlyBaseRate: 87 },
  KWD: { code: 'KWD', symbol: 'KD', rateAgainstUSD: 0.31, hourlyBaseRate: 7.5 },
  BHD: { code: 'BHD', symbol: 'BD', rateAgainstUSD: 0.38, hourlyBaseRate: 9 },
  OMR: { code: 'OMR', symbol: 'RO', rateAgainstUSD: 0.38, hourlyBaseRate: 9 },
  INR: { code: 'INR', symbol: '₹', rateAgainstUSD: 84.5, hourlyBaseRate: 1250 },
  USD: { code: 'USD', symbol: '$', rateAgainstUSD: 1, hourlyBaseRate: 24 },
  GBP: { code: 'GBP', symbol: '£', rateAgainstUSD: 0.79, hourlyBaseRate: 19 },
  EUR: { code: 'EUR', symbol: '€', rateAgainstUSD: 0.92, hourlyBaseRate: 22 },
  SGD: { code: 'SGD', symbol: 'S$', rateAgainstUSD: 1.35, hourlyBaseRate: 32 },
  CAD: { code: 'CAD', symbol: 'C$', rateAgainstUSD: 1.38, hourlyBaseRate: 33 },
  AUD: { code: 'AUD', symbol: 'A$', rateAgainstUSD: 1.55, hourlyBaseRate: 37 }
};

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  recommendedFor: string;
  badge?: string;
  featured?: boolean;
  baseHourlyMultiplier: number;
  minHoursPerMonth: number;
  features: string[];
  savingsText: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Foundation Momentum',
    tagline: 'Ideal for weekly concept reinforcement and homework mastery',
    recommendedFor: 'Grades 1 to 8 students needing consistent weekly support',
    baseHourlyMultiplier: 1.0,
    minHoursPerMonth: 8, // 2 sessions/week
    features: [
      'Dedicated 1-on-1 Certified Tutor Pairing',
      '8 Live Interactive Hours per Month',
      'Customized Syllabus & Homework Support',
      'Continuous Doubt Resolution via Student Portal',
      'Monthly Detailed Parent Progress Report',
      'Free Class Recording Archive (HD Video)',
      '100% Satisfaction Guarantee / Free Tutor Swap'
    ],
    savingsText: 'Great value for weekly regular support'
  },
  {
    id: 'accelerator',
    name: 'Academic Accelerator',
    tagline: 'Our most popular plan for rapid grade improvements and board prep',
    recommendedFor: 'Grades 8 to 12 targeting top grades (A* / 90%+ / Level 7 / 5s)',
    badge: 'MOST POPULAR (74% of Parents)',
    featured: true,
    baseHourlyMultiplier: 0.92, // 8% volume discount
    minHoursPerMonth: 12, // 3 sessions/week
    features: [
      'Senior Top 1.8% Specialist Tutor Mentorship',
      '12 Live Interactive Hours per Month',
      'Comprehensive Board / AP / IB Past Paper Vault',
      'Full-Length Timed Mock Exam with Examiner Evaluation',
      '24/7 Priority WhatsApp Doubt Resolution',
      'Bi-Weekly Parent Academic Review Calls',
      'Customized 60-Day Exam Strategy Roadmap',
      'Guaranteed 2-Letter Grade Improvement Policy'
    ],
    savingsText: 'Save 8% with 3 sessions/week'
  },
  {
    id: 'mastery',
    name: 'Elite Distinction Immersion',
    tagline: 'Intensive mentorship for competitive exams & multi-subject mastery',
    recommendedFor: 'Students taking multiple APs, IB DP HLs, A-Levels, or Board Exams',
    badge: 'MAXIMUM VALUE',
    baseHourlyMultiplier: 0.85, // 15% discount
    minHoursPerMonth: 20, // 5 sessions/week (multi-subject)
    features: [
      'Handpicked Department Head / Senior Board Evaluator',
      '20 Live Interactive Hours per Month (Multi-Subject)',
      'Internal Assessment (IA) & Extended Essay (EE) Mentorship',
      'Unlimited Full-Length Mock Exams & Line-by-Line Feedback',
      'Direct Weekly Video Consultation with Academic Director',
      'Personalized University Admissions Consultation (UCAS/US)',
      'Full Access to Premium Olympiad & Coding Tracks',
      'Priority Rescheduling with Zero Notice Penalty'
    ],
    savingsText: 'Save 15% with multi-subject bundle'
  }
];
