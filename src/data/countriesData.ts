import { CountryInfo, CountryCode } from '../types';

export const COUNTRIES_DATA: Record<CountryCode, CountryInfo> = {
  usa: {
    code: 'usa',
    name: 'United States of America',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    timezone: 'EST / CST / MST / PST (All US Zones)',
    phoneCode: '+1',
    tagline: 'Premier 1-on-1 Online Tuition for K-12, Honors, AP & SAT Prep Across the US',
    description: 'Empowering American students from Kindergarten through Grade 12 to achieve top GPAs and master Advanced Placement (AP) coursework. Scheduled flexibly after school and weekends in your local US timezone.',
    popularBoards: ['American Curriculum (Common Core / NGSS)', 'Advanced Placement (AP)', 'International Baccalaureate (IB DP)', 'Cambridge International (CAIE)'],
    popularSubjects: ['Maths (Algebra 1/2, Pre-Calc, AP Calc)', 'Science & AP Physics / Chemistry / Bio', 'Coding & AP Computer Science A', 'Digital SAT / ACT Prep', 'Public Speaking & Debate'],
    parentPainPoints: [
      { pain: 'Local in-person tutoring centers charge $80-$120/hr for generic worksheets in group settings.', solution: 'VLearnPro provides dedicated 1-on-1 subject specialists at a fraction of the cost with customized lesson plans.' },
      { pain: 'Balancing sports, extracurriculars, and rigorous AP course homework loads.', solution: 'Flexible lesson scheduling that easily adjusts to your child’s weekly sports and arts calendar.' },
      { pain: 'Need for high SAT / ACT scores and 5s on AP exams for competitive college admissions.', solution: 'Targeted College Board test prep with verified past FRQ and Bluebook digital simulations.' }
    ],
    localSchoolAlignments: ['US Public & Private High Schools', 'Magnet & STEM Academies', 'Ivy-Feeder Prep Schools', 'Homeschooling Networks'],
    stats: [
      { label: 'AP Score 5 Rate', value: '88.7%' },
      { label: 'Avg SAT Score Gain', value: '+190 Pts' },
      { label: 'US Students Taught', value: '4,200+' },
      { label: 'US Timezone Coverage', value: '100% (PST-EST)' }
    ],
    studentQuote: {
      quote: 'VLearnPro’s AP Calculus and AP Physics tutors were incredible. My daughter improved her GPA from 3.4 to 3.9 and scored 5s on both AP exams in May!',
      student: 'Sarah Jenkins (Parent of Tyler, Grade 11)',
      school: 'St. John’s Preparatory School',
      city: 'Austin, Texas',
      score: 'Scored 5 in AP Calc BC & 1540 on SAT'
    },
    faqs: [
      { question: 'What hours are tutors available in US time zones?', answer: 'We have dedicated faculty available 7 days a week from 2:00 PM to 10:00 PM EST, CST, MST, and PST, as well as weekend morning and afternoon slots.' },
      { question: 'Are your tutors familiar with the US Common Core and College Board AP rubrics?', answer: 'Yes! All tutors assigned to US students are specifically trained in US State Standards, NGSS, and College Board AP course and exam descriptions.' }
    ],
    metaTitle: 'Online Tuition in USA (K-12, AP, Honors & SAT) | 1-on-1 US Tutors',
    metaDescription: 'Top-rated 1-on-1 online tutoring in the USA. Expert tutors for US Common Core Math, AP Calculus, AP Sciences, Coding & SAT prep. Scheduled in your timezone.'
  },

  uk: {
    code: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP',
    currencySymbol: '£',
    timezone: 'GMT / BST (London Time)',
    phoneCode: '+44',
    tagline: 'Elite 1-on-1 Online Tutoring for KS1-KS4, GCSE (9-1) & A-Level Exams',
    description: 'Transform your child’s academic confidence with specialist British curriculum tutors. Tailored 1-on-1 coaching strictly aligned with AQA, Pearson Edexcel, OCR, and Cambridge CAIE exam specifications.',
    popularBoards: ['UK GCSE (AQA / Edexcel / OCR)', 'GCE A-Levels & Further Maths', 'Cambridge International (CAIE)', 'IB Diploma Programme (DP)'],
    popularSubjects: ['GCSE / A-Level Maths & Further Maths', 'Triple & Combined Sciences', 'English Language & Literature', 'Computer Science (Python)', 'University Admissions (STEP/MAT/UCAT)'],
    parentPainPoints: [
      { pain: 'Struggling to secure high Grade 8/9s in GCSEs needed for top Sixth Forms and Grammar Schools.', solution: 'Targeted specification coaching focused on the toughest Grade 8/9 past paper question archetypes.' },
      { pain: 'High cost of private UK tutors (£50-£90/hr) with inconsistent teaching quality.', solution: 'Vetted, top 1.8% Russell Group and Oxbridge graduate tutors with proven track records at transparent rates.' },
      { pain: 'Stress around November/January mock examinations and final summer exam series.', solution: 'Dedicated mock revision bootcamps that peak student performance ahead of key exam windows.' }
    ],
    localSchoolAlignments: ['UK State & Grammar Schools', 'Independent & Public Schools (Eton, Harrow, Westminster style)', 'British International Schools Abroad'],
    stats: [
      { label: 'GCSE Grade 8-9 Rate', value: '91.2%' },
      { label: 'A-Level A*/A Rate', value: '89.4%' },
      { label: 'UK Students Taught', value: '3,800+' },
      { label: 'Russell Group Offers', value: '96.8%' }
    ],
    studentQuote: {
      quote: 'My son jumped from a Grade 5 in his Year 10 mocks to straight Grade 9s in GCSE Maths and Physics! The 1-on-1 attention and past paper breakdown made all the difference.',
      student: 'Claire Robinson (Parent of Oliver, Year 11)',
      school: 'King Edward VI Grammar School',
      city: 'Birmingham, UK',
      score: 'Achieved 8 Grade 9s in GCSEs'
    },
    faqs: [
      { question: 'Do you cover specific UK exam boards like AQA and Edexcel?', answer: 'Yes! We strictly align all tutoring materials, questions, and mark schemes to your child’s specific exam board (AQA, Pearson Edexcel, OCR, or Eduqas).' },
      { question: 'Can you help with 11+ and 13+ Grammar and Independent School entrance exams?', answer: 'Yes, we provide specialized 11+ and 13+ entrance tuition covering Verbal Reasoning, Non-Verbal Reasoning, English, and Maths.' }
    ],
    metaTitle: 'Online Tuition UK (KS3, GCSE & A-Level) | 1-on-1 British Curriculum Tutors',
    metaDescription: 'Premier 1-on-1 online tutoring in the UK. Master AQA & Edexcel GCSE (9-1), A-Levels, Maths, Sciences & English with top UK tutors. Book a free trial.'
  },

  uae: {
    code: 'uae',
    name: 'United Arab Emirates & Gulf',
    flag: '🇦🇪',
    currency: 'AED',
    currencySymbol: 'د.إ',
    timezone: 'GST (Gulf Standard Time - Dubai / Abu Dhabi)',
    phoneCode: '+971',
    tagline: 'Leading 1-on-1 Online Tuition for CBSE, IGCSE, IB & American Schools in UAE',
    description: 'The preferred online tutoring partner for expatriate and local families in Dubai, Abu Dhabi, Sharjah, and across the GCC. Aligned with KHDA and ADEK academic standards across CBSE, British (IGCSE/A-Level), IB, and American curricula.',
    popularBoards: ['CBSE (Gulf Schools)', 'Cambridge IGCSE & Edexcel', 'IB (PYP, MYP, DP)', 'American Curriculum / AP'],
    popularSubjects: ['Maths (All Boards)', 'Physics, Chemistry & Biology', 'Coding & Artificial Intelligence', 'Spoken English & Public Speaking', 'French & Arabic Support'],
    parentPainPoints: [
      { pain: 'Traffic congestion in Dubai and Abu Dhabi making commuting to physical tuition centers exhausting.', solution: 'Live interactive 1-on-1 classes right from the comfort of home with zero commute stress.' },
      { pain: 'High expatriate tuition center fees with variable teacher continuity.', solution: 'Affordable, transparent pricing with dedicated long-term mentor pairing.' },
      { pain: 'Need for high scores in CBSE Class 10/12 Boards, IGCSEs, or IB DP for top global university entry.', solution: 'Proven curriculum blueprints with over 95% distinction rates across UAE international schools.' }
    ],
    localSchoolAlignments: ['GEMS Education Schools', 'Taaleem Schools', 'Innoventures Education', 'Delhi Private School / Indian High School Dubai', 'Dubai College / JESS'],
    stats: [
      { label: 'UAE Students Enrolled', value: '5,600+' },
      { label: '90%+ Score Rate', value: '96.2%' },
      { label: 'KHDA/ADEK Sync', value: '100%' },
      { label: 'Parent Satisfaction', value: '4.96 / 5' }
    ],
    studentQuote: {
      quote: 'Living in Dubai with busy schedules, VLearnPro has been a lifesaver. My daughter scored 97.2% in her CBSE Class 12 Boards and got into her dream university in Canada!',
      student: 'Rajesh & Meera Menon (Parents of Ananya)',
      school: 'GEMS Our Own Indian School',
      city: 'Dubai, UAE',
      score: '97.2% in CBSE Class 12 Science'
    },
    faqs: [
      { question: 'Are classes scheduled around UAE school timings?', answer: 'Yes! Classes are scheduled conveniently between 3:30 PM and 9:30 PM GST on weekdays, and all day on Saturdays and Sundays.' },
      { question: 'Do you offer payments in UAE Dirhams (AED)?', answer: 'Yes! We support direct AED payments via local cards, Apple Pay, and international bank transfers with zero currency conversion fees.' }
    ],
    metaTitle: 'Online Tuition in UAE (Dubai, Abu Dhabi) | CBSE, IGCSE & IB Tutors',
    metaDescription: 'Best 1-on-1 online tuition in UAE for Dubai & Abu Dhabi students. Expert CBSE, IGCSE, IB DP & American curriculum tutors. Book a free trial today.'
  },

  singapore: {
    code: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    currency: 'SGD',
    currencySymbol: 'S$',
    timezone: 'SGT (Singapore Time - UTC+8)',
    phoneCode: '+65',
    tagline: 'Top-Tier 1-on-1 Tuition for Singapore MOE, PSLE, O-Levels, IGCSE & IB',
    description: 'Catering to Singapore’s competitive academic landscape. Specialized 1-on-1 coaching in Singapore Math Bar Modeling, MOE Science CER open-ended techniques, PSLE revision, GCE O-Level A/E-Math, and international school curricula (UWC, SAS, Tanglin Trust, OFS).',
    popularBoards: ['Singapore MOE (PSLE & O-Levels)', 'IB (PYP / MYP / DP)', 'Cambridge IGCSE', 'American Curriculum (SAS)'],
    popularSubjects: ['Singapore Primary & Secondary Math', 'MOE Science (Open-Ended CER)', 'IB Maths AA/AI & Sciences', 'Coding & Python Programming', 'Chinese (Higher Chinese / Standard)'],
    parentPainPoints: [
      { pain: 'Fierce competition under the PSLE AL scoring system and GCE O-Level cutoffs.', solution: 'Deep mastery of non-routine problem-solving heuristics and precise examiner keywords to secure AL1 and A1 grades.' },
      { pain: 'Exorbitant tuition center fees in Singapore with crowded group sizes of 15-20 students.', solution: 'True 1-on-1 customized attention at competitive rates tailored to your child’s exact pace.' }
    ],
    localSchoolAlignments: ['MOE Primary & Secondary Schools', 'Raffles / Hwa Chong / ACS Family', 'UWC South East Asia', 'Singapore American School (SAS)', 'Tanglin Trust School'],
    stats: [
      { label: 'PSLE AL1 Achievers', value: '87.6%' },
      { label: 'O-Level A1/A2 Rate', value: '91.8%' },
      { label: 'SG Students Mentored', value: '2,900+' },
      { label: 'Top School Prelim Bank', value: '100% Covered' }
    ],
    studentQuote: {
      quote: 'The Singapore Math heuristics training is unmatched. My son improved from AL4 to AL1 in Math for his PSLE. The tutor’s patience and model drawing techniques were extraordinary.',
      student: 'Evelyn Tan (Parent of Lucas, Primary 6)',
      school: 'Anglo-Chinese School (Junior)',
      city: 'Singapore',
      score: 'PSLE Score: AL5 Overall (AL1 in Math & Science)'
    },
    faqs: [
      { question: 'Do you have tutors familiar with the Singapore MOE syllabus?', answer: 'Yes! Our Singapore faculty includes MOE-trained educators and top NUS/NTU graduates who specialize in MOE heuristics and CER answering techniques.' }
    ],
    metaTitle: 'Online Tuition Singapore | Singapore Math, PSLE, O-Level & IB Tutors',
    metaDescription: 'Premier 1-on-1 online tuition in Singapore. Specialized tutors for Singapore Math heuristics, MOE Science, PSLE AL1 prep, GCE O-Level & IB DP. Free trial.'
  },

  europe: {
    code: 'europe',
    name: 'Europe (UK, Germany, France, Switzerland, Netherlands & Nordic)',
    flag: '🇪🇺',
    currency: 'EUR',
    currencySymbol: '€',
    timezone: 'CET / CEST (Central European Time)',
    phoneCode: '+49',
    tagline: 'Premier 1-on-1 Tutoring for International & European Baccalaureate Schools',
    description: 'Trusted by international families and expatriates across Germany, France, Switzerland, the Netherlands, Belgium, and Scandinavia. Comprehensive 1-on-1 tuition for IB Diploma Programme, European Baccalaureate (EB), Cambridge IGCSE, and multilingual language mastery.',
    popularBoards: ['IB (International Baccalaureate DP/MYP)', 'Cambridge International (CAIE)', 'European Baccalaureate (EB)', 'French / German National Curricula'],
    popularSubjects: ['IB Mathematics (AA & AI HL/SL)', 'Physics, Chemistry & Biology', 'European Languages (French, German, Spanish)', 'Coding & Computer Science', 'Economics & Business'],
    parentPainPoints: [
      { pain: 'Difficulty finding English-medium subject specialist tutors in non-English speaking European cities.', solution: 'Access to elite English-speaking international board specialists across all subjects.' },
      { pain: 'High Swiss / German local private tutoring rates (€70-€120/hr).', solution: 'Premium world-class 1-on-1 education delivered seamlessly at accessible transparent rates.' }
    ],
    localSchoolAlignments: ['International School of Geneva (Ecolint)', 'Frankfurt International School', 'International School of Amsterdam', 'British School of Paris', 'Munich International School'],
    stats: [
      { label: 'IB 40+ Point Scorers', value: '34.8%' },
      { label: 'Avg IB Score', value: '39.2 / 45' },
      { label: 'European Cities', value: '65+' },
      { label: 'CET Timezone Sync', value: '100%' }
    ],
    studentQuote: {
      quote: 'Finding an expert IB Chemistry HL and Math AA tutor in Frankfurt in English was tough until we found VLearnPro. My daughter achieved a 42/45 in her IB Diploma!',
      student: 'Marc & Sabine Weber (Parents of Sophie)',
      school: 'Frankfurt International School',
      city: 'Frankfurt, Germany',
      score: 'Achieved 42/45 in IB DP'
    },
    faqs: [
      { question: 'Are classes timed for Central European Time (CET)?', answer: 'Yes! Classes are scheduled throughout CET afternoons and evenings, fitting effortlessly into European school schedules.' }
    ],
    metaTitle: 'Online Tuition in Europe | IB Diploma, IGCSE & Cambridge Tutors',
    metaDescription: 'Elite 1-on-1 online tuition in Europe (Germany, France, Switzerland, Netherlands). Master IB DP, IGCSE & European Baccalaureate in English. Free trial.'
  },

  canada: {
    code: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    currencySymbol: 'C$',
    timezone: 'EST / CST / MST / PST (All Canadian Provinces)',
    phoneCode: '+1',
    tagline: 'Leading 1-on-1 Online Tuition for OSSD, BC, Alberta & AP/IB Students',
    description: 'Empowering Canadian students across Ontario (OSSD), British Columbia, Alberta, and Quebec. Boost high school averages for competitive university programs (U of T, Waterloo, UBC, McGill) with 1-on-1 subject mastery in Advanced Functions, Calculus, Sciences, and French Immersion.',
    popularBoards: ['Ontario OSSD Curriculum', 'BC Curriculum', 'Alberta Curriculum', 'Advanced Placement (AP) & IB DP'],
    popularSubjects: ['Grade 11/12 Advanced Functions & Calculus and Vectors (MCV4U)', 'Physics (SPH4U) & Chemistry (SCH4U)', 'Coding & Computer Science (ICS4U)', 'French Immersion Support', 'Waterloo Math Contest Prep (Euclid/Fermat)'],
    parentPainPoints: [
      { pain: 'Competitive university admissions requiring high 90s in Grade 12 top-6 university courses.', solution: 'Rigorous unit-by-unit coaching to secure 95%+ marks on school assessments, unit tests, and culminating projects.' },
      { pain: 'Cold winters and heavy commutes to after-school tutoring centers.', solution: 'Learn comfortably from home with live interactive HD video and collaborative digital boards.' }
    ],
    localSchoolAlignments: ['Ontario Public & Catholic School Boards (TDSB, YRDSB, PDSB)', 'BC High Schools (Vancouver, Surrey)', 'Independent Canadian Academies (UCC, Branksome Hall, Appleby)'],
    stats: [
      { label: '90%+ Course Average', value: '95.4%' },
      { label: 'Waterloo/U of T Admits', value: '94.2%' },
      { label: 'Canadian Students', value: '3,100+' },
      { label: 'Contest Distinction', value: 'Top 10%' }
    ],
    studentQuote: {
      quote: 'VLearnPro helped my son achieve a 98% in Calculus & Vectors and 96% in Physics. He received early admission to University of Waterloo Computer Engineering!',
      student: 'Harpreet Singh (Parent of Arjun, Grade 12)',
      school: 'Richmond Hill High School',
      city: 'Toronto, Canada',
      score: '98% in Grade 12 Calculus & Vectors'
    },
    faqs: [
      { question: 'Do your tutors know the specific Ontario MCV4U / MHF4U course codes and expectations?', answer: 'Yes! Our tutors specialize in provincial curricula, ensuring homework and test prep aligns exactly with the Ontario, BC, and Alberta Ministry of Education course guidelines.' }
    ],
    metaTitle: 'Online Tuition Canada (OSSD, BC, Alberta & AP) | 1-on-1 Canadian Tutors',
    metaDescription: 'Top 1-on-1 online tutoring in Canada. Master Grade 11/12 Advanced Functions, Calculus & Vectors, Sciences & AP courses for top university admissions. Free trial.'
  },

  australia: {
    code: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    currency: 'AUD',
    currencySymbol: 'A$',
    timezone: 'AEST / AEDT / AWST (Sydney, Melbourne, Brisbane, Perth)',
    phoneCode: '+61',
    tagline: 'Targeting 99+ ATAR: Elite 1-on-1 Tutoring for HSC, VCE, QCE & IB',
    description: 'Maximize your child’s Australian Tertiary Admission Rank (ATAR). Specialist 1-on-1 coaching for NSW HSC, Victorian VCE, Queensland QCE, and IB Diploma exams across Maths Extension 1 & 2, Specialist Maths, Physics, Chemistry, and English.',
    popularBoards: ['NSW HSC', 'Victorian VCE', 'Queensland QCE', 'IB Diploma Programme (DP)'],
    popularSubjects: ['HSC / VCE Maths Extension 1 & 2 / Specialist Maths', 'HSC / VCE Physics & Chemistry', 'English Advanced / Literature', 'Coding & Software Design', 'Selective School & OC Entrance Prep'],
    parentPainPoints: [
      { pain: 'High stakes of the ATAR ranking system for Medicine, Law, and Engineering entry.', solution: 'Deep mastery of high-scaling subjects (Extension 2 Maths, Specialist Maths, Physics) to maximize scaled score points.' },
      { pain: 'Tutoring companies in Sydney/Melbourne that put 25 students in lecture-style halls.', solution: 'Personalized 1-on-1 sessions focused precisely on your child’s unique knowledge gaps and school trial papers.' }
    ],
    localSchoolAlignments: ['NSW Selective High Schools (James Ruse, Baulkham Hills, Sydney Boys/Girls)', 'VCE Top Schools (Scotch College, Melbourne High, Mac.Rob)', 'QCE & Australian International Schools'],
    stats: [
      { label: '95+ ATAR Scorers', value: '74.5%' },
      { label: '99+ ATAR Scorers', value: '28.2%' },
      { label: 'Aussie Students Mentored', value: '2,400+' },
      { label: 'Trial Papers Practiced', value: '15,000+' }
    ],
    studentQuote: {
      quote: 'The HSC Maths Extension 2 and Physics coaching was phenomenal. My daughter achieved an ATAR of 99.45 and gained entry into UNSW Combined Medicine!',
      student: 'David & Karen Zhang (Parents of Jessica, Year 12)',
      school: 'North Sydney Girls High School',
      city: 'Sydney, Australia',
      score: 'ATAR 99.45 | Band 6 in 4 Units of Maths'
    },
    faqs: [
      { question: 'Do you cover specific state curricula like NSW HSC and Victoria VCE?', answer: 'Yes! We assign tutors who specialize specifically in NSW NESA syllabus guidelines or Victorian VCAA study designs.' }
    ],
    metaTitle: 'Online Tuition Australia (HSC, VCE, QCE & IB) | 99+ ATAR Tutors',
    metaDescription: 'Elite 1-on-1 online tutoring in Australia. Master HSC, VCE, QCE Specialist Maths, Physics, Chemistry & English for top ATAR scores. Book a free trial.'
  },

  india: {
    code: 'india',
    name: 'India',
    flag: '🇮🇳',
    currency: 'INR',
    currencySymbol: '₹',
    timezone: 'IST (Indian Standard Time)',
    phoneCode: '+91',
    tagline: 'Leading 1-on-1 Online Tuition for CBSE, ICSE, IB, IGCSE & Foundation Prep',
    description: 'Transform school grades and build strong competitive foundations. India’s finest 1-on-1 educators for CBSE & ICSE Class 1 to 12, international schools (IGCSE/IB), Olympiad coaching, and integrated JEE/NEET foundation.',
    popularBoards: ['CBSE (Class 1-12)', 'ICSE & ISC Board', 'Cambridge IGCSE & A-Levels', 'IB (PYP, MYP, DP)'],
    popularSubjects: ['Mathematics (NCERT & Advanced)', 'Physics, Chemistry & Biology', 'Computer Science (Python & Java)', 'Spoken English & Communication Skills', 'Olympiad & Foundation (IMO, NSO, NTSE)'],
    parentPainPoints: [
      { pain: 'Crowded coaching institutes with 80-100 students where shy children hesitate to ask doubts.', solution: 'Dedicated 1-on-1 mentor providing 100% personalized attention with instant doubt clearing.' },
      { pain: 'Safety concerns and heavy commute times in Tier 1 cities (Bengaluru, Mumbai, Delhi-NCR, Hyderabad).', solution: 'Learn safely from home with recorded sessions, interactive digital whiteboards, and progress analytics.' },
      { pain: 'Difficulty balancing school board syllabus with competitive Olympiad / foundation prep.', solution: 'Integrated roadmap covering board mastery first, then systematically introducing high-level problem solving.' }
    ],
    localSchoolAlignments: ['DPS, KV, Ryan, The Mother’s International', 'Cathedral and John Connon, Bishop Cotton, Modern School', 'Dhirubhai Ambani, The Shri Ram School, Indus International'],
    stats: [
      { label: 'Board 95%+ Scorers', value: '96.8%' },
      { label: 'Students Enrolled', value: '18,500+' },
      { label: 'Olympiad Rankers', value: '450+' },
      { label: 'Parent Recommendation', value: '99.4%' }
    ],
    studentQuote: {
      quote: 'My son was struggling with Class 11 Physics and Maths. VLearnPro assigned an IIT graduate mentor who rebuilt his conceptual clarity. He scored 97% in Class 12 Boards and cleared JEE Main!',
      student: 'Sunita Sharma (Parent of Rohan, Class 12)',
      school: 'Delhi Public School, R.K. Puram',
      city: 'New Delhi, India',
      score: '97% in CBSE Class 12 Boards & 99.2%ile JEE'
    },
    faqs: [
      { question: 'Do you offer Class 10 and 12 Board exam revision batches?', answer: 'Yes! We offer year-long 1-on-1 mentoring as well as 60-day intensive Pre-Board revision bootcamps covering past 10 years solved papers and marking schemes.' }
    ],
    metaTitle: 'Online Tuition in India (Class 1-12 CBSE, ICSE, IB & IGCSE) | 1-on-1 Tutors',
    metaDescription: 'Best 1-on-1 online tuition in India for CBSE, ICSE, IGCSE & IB. Top tutors for Maths, Physics, Chemistry, Biology & Coding. Book your free trial class.'
  }
};
