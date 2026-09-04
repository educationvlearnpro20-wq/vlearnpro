export type BoardId = 
  | 'cbse' 
  | 'icse' 
  | 'igcse' 
  | 'ib' 
  | 'cambridge' 
  | 'gcse' 
  | 'a-level' 
  | 'singapore-curriculum' 
  | 'american-curriculum';

export type SubjectId = 
  | 'maths' 
  | 'science' 
  | 'physics' 
  | 'chemistry' 
  | 'biology' 
  | 'english' 
  | 'coding' 
  | 'spoken-english' 
  | 'communication-skills' 
  | 'public-speaking' 
  | 'board-exam-prep';

export type LanguageId = 
  | 'spanish' 
  | 'german' 
  | 'french' 
  | 'chinese' 
  | 'urdu';

export type CountryCode = 
  | 'uae' 
  | 'saudi' 
  | 'qatar' 
  | 'kuwait' 
  | 'bahrain' 
  | 'oman' 
  | 'india' 
  | 'uk' 
  | 'usa' 
  | 'singapore' 
  | 'europe' 
  | 'canada' 
  | 'australia';

export type CityId = 
  | 'delhi' 
  | 'mumbai' 
  | 'pune' 
  | 'bangalore' 
  | 'chennai' 
  | 'ahmedabad' 
  | 'indore' 
  | 'lucknow';

export interface CityInfo {
  id: CityId;
  cityName: string;
  state: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string;
  educationEcosystem: string;
  studentLearningNeeds: string;
  parentExpectations: string;
  onlineBenefits: string;
  classTimings: string;
  vlearnproAdvantage: string;
  conclusion: string;
  topSchools: string[];
  popularBoards: string[];
  stats: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export type CurrencyCode = 'AED' | 'SAR' | 'QAR' | 'KWD' | 'BHD' | 'OMR' | 'INR' | 'USD' | 'GBP' | 'EUR' | 'SGD' | 'CAD' | 'AUD';

export interface BoardInfo {
  id: BoardId;
  name: string;
  shortName: string;
  tagline: string;
  grades: string;
  badge: string;
  description: string;
  heroHighlight: string;
  stats: { label: string; value: string }[];
  overview: string[];
  keyFeatures: { title: string; description: string }[];
  curriculumStructure: { stage: string; grades: string; focus: string; keySubjects: string[] }[];
  examHighlights: string[];
  pedagogyPoints: string[];
  sampleTopics: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
}

export interface SubjectInfo {
  id: SubjectId;
  name: string;
  iconName: string;
  tagline: string;
  grades: string;
  category: 'core' | 'science' | 'languages' | 'skills' | 'tech';
  description: string;
  heroHighlight: string;
  stats: { label: string; value: string }[];
  learningOutcomes: string[];
  gradeLevels: { gradeRange: string; title: string; topics: string[]; methodology: string }[];
  pedagogyFramework: { title: string; description: string }[];
  boardsCovered: string[];
  tutorProfileHighlight: string;
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
}

export interface LanguageInfo {
  id: LanguageId;
  name: string;
  nativeName: string;
  flag: string;
  levels: string;
  description: string;
  heroHighlight: string;
  certificationAlignment: string[];
  learningTracks: { title: string; description: string; forWho: string }[];
  methodology: string[];
  stats: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
}

export interface CountryInfo {
  code: CountryCode;
  name: string;
  flag: string;
  currency: CurrencyCode;
  currencySymbol: string;
  timezone: string;
  phoneCode: string;
  tagline: string;
  description: string;
  educationEcosystem: string;
  suitableSchedules: string;
  parentExpectations: string;
  uniqueConclusion: string;
  popularBoards: string[];
  popularSubjects: string[];
  parentPainPoints: { pain: string; solution: string }[];
  localSchoolAlignments: string[];
  stats: { label: string; value: string }[];
  studentQuote: { quote: string; student: string; school: string; city: string; score: string };
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  grade: string;
  board: string;
  subject: string;
  country: string;
  countryFlag: string;
  rating: number;
  date: string;
  review: string;
  metric: string;
  highlight: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface TutorProfile {
  id: string;
  name: string;
  title: string;
  degree: string;
  university: string;
  experienceYears: number;
  hoursTaught: number;
  rating: number;
  reviewCount: number;
  subjects: string[];
  boards: string[];
  country: string;
  badge: string;
  specialty: string;
  avatarGradient: string;
  avatarUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: { name: string; role: string; avatar: string };
  tags: string[];
  content: string[];
  featured?: boolean;
}
