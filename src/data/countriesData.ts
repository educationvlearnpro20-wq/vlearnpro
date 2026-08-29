import { CountryInfo, CountryCode } from '../types';

export const COUNTRIES_DATA: Record<CountryCode, CountryInfo> = {
  uae: {
    code: 'uae',
    name: 'United Arab Emirates (Dubai, Abu Dhabi, Sharjah)',
    flag: '🇦🇪',
    currency: 'AED',
    currencySymbol: 'د.إ',
    timezone: 'GST (Gulf Standard Time - Dubai / Abu Dhabi / Sharjah)',
    phoneCode: '+971',
    tagline: 'The #1 Preferred 1-on-1 Online Tuition for CBSE, IGCSE, IB & American Schools in UAE',
    description: 'The premier online tutoring institute for families across Dubai, Abu Dhabi, Sharjah, and Ajman. Strictly aligned with KHDA and ADEK academic benchmarks for CBSE, Cambridge (IGCSE/A-Level), IB, and American school students.',
    educationEcosystem: 'The UAE education landscape across Dubai, Abu Dhabi, and Sharjah is governed by rigorous inspection frameworks (KHDA in Dubai, ADEK in Abu Dhabi). International families choose from over 200 top private schools offering CBSE, British (IGCSE/A-Level), IB Diploma, and American curricula. High competition requires continuous academic distinction.',
    suitableSchedules: 'Classes are synchronized with Gulf Standard Time (GST - UTC+4). Weekday sessions run flexibly between 3:30 PM and 9:30 PM GST immediately after Dubai and Abu Dhabi school dismissals, with extensive weekend morning and afternoon slots available.',
    parentExpectations: 'UAE parents target 95%+ in CBSE Board exams, straight A* (Grade 8/9s) in Cambridge IGCSEs, and 38–45 points in the IB Diploma to secure admissions into elite UK Russell Group, US Ivy League, and premier Indian university programs.',
    uniqueConclusion: 'Join over 6,400 UAE families in Dubai, Abu Dhabi, and Sharjah who rely on VLearnPro’s KHDA/ADEK-aligned 1-on-1 tutoring. Experience your child’s customized 45-minute diagnostic session today.',
    popularBoards: ['CBSE (Gulf Region)', 'Cambridge IGCSE & Edexcel', 'IB Diploma Programme (DP & MYP)', 'American Curriculum / AP'],
    popularSubjects: ['Maths (All Curricula)', 'Physics, Chemistry & Biology', 'Computer Science & Python', 'English Language & Public Speaking', 'French & Arabic Academic Support'],
    parentPainPoints: [
      { pain: 'Heavy traffic congestion on Sheikh Zayed Road and E11 making commuting to physical centers exhausting.', solution: 'Live interactive 1-on-1 classes scheduled comfortably from home with zero commute time.' },
      { pain: 'High tuition center costs in Dubai and Abu Dhabi with inconsistent tutor quality.', solution: 'Vetted, top 1.8% dedicated subject mentors assigned long-term at transparent AED pricing.' },
      { pain: 'Targeting 95%+ in CBSE Boards, 8/9s in IGCSEs, or 40+ in IB DP for elite global university entry.', solution: 'Customized exam mastery roadmaps with past paper blueprints and KHDA/ADEK syllabus coverage.' }
    ],
    localSchoolAlignments: ['GEMS Education Schools', 'Taaleem Schools', 'Innoventures Education', 'Delhi Private School (Dubai & Sharjah)', 'Dubai College & JESS Dubai', 'Indian High School Dubai'],
    stats: [
      { label: 'GCC & UAE Enrolled', value: '6,400+' },
      { label: 'Board Distinction Rate', value: '96.8%' },
      { label: 'KHDA/ADEK Alignment', value: '100%' },
      { label: 'Parent Rating in UAE', value: '4.97 / 5' }
    ],
    studentQuote: {
      quote: 'Living in Dubai with busy schedules, VLearnPro has been our best decision. My daughter achieved 97.4% in her CBSE Class 12 Boards and secured entry into her dream university!',
      student: 'Rajesh & Meera Menon (Parents of Ananya)',
      school: 'GEMS Our Own Indian School',
      city: 'Dubai, UAE',
      score: '97.4% in CBSE Class 12 Science'
    },
    faqs: [
      { question: 'Are tutoring sessions scheduled around UAE school hours?', answer: 'Yes! Sessions are scheduled flexibly between 3:30 PM and 9:30 PM GST on weekdays, and all day on Saturdays and Sundays.' },
      { question: 'Can we pay directly in UAE Dirhams (AED)?', answer: 'Yes, we accept AED payments via UAE debit/credit cards, Apple Pay, and local bank transfers with zero hidden conversion fees.' }
    ],
    metaTitle: 'Online Tuition in UAE (Dubai, Abu Dhabi, Sharjah) | CBSE, IGCSE & IB Tutors',
    metaDescription: 'Leading 1-on-1 online tuition in UAE for Dubai, Abu Dhabi & Sharjah students. Expert CBSE, IGCSE, IB DP & American curriculum tutors. Book a free trial.'
  },

  saudi: {
    code: 'saudi',
    name: 'Saudi Arabia (Riyadh, Jeddah, Makkah, Madinah)',
    flag: '🇸🇦',
    currency: 'SAR',
    currencySymbol: 'SR',
    timezone: 'AST (Arabia Standard Time - Riyadh / Jeddah)',
    phoneCode: '+966',
    tagline: 'Leading 1-on-1 Online Tuition for CBSE, IGCSE, IB & American Schools in KSA',
    description: 'Trusted by families across Riyadh, Jeddah, Khobar, Dammam, Makkah, and Madinah. Specialized 1-on-1 tuition for international and private school students studying CBSE, Cambridge, IB, and American curricula.',
    educationEcosystem: 'Saudi Arabia’s expanding private education sector across Riyadh, Jeddah, Khobar, and Dammam features top international schools following CBSE, Cambridge IGCSE, IB DP, and American curricula licensed by the Ministry of Education (MOE). Families seek specialized 1-on-1 English-medium subject experts aligned with global exam mark schemes.',
    suitableSchedules: 'Classes are aligned with Arabia Standard Time (AST - UTC+3). Weekday tutoring slots run conveniently from 3:30 PM to 9:30 PM AST after school dismissal and prayer timings, with dedicated weekend morning and evening options.',
    parentExpectations: 'Parents in KSA prioritize deep conceptual clarity in STEM subjects (Maths, Physics, Chemistry, Biology) and English, targeting top percentage aggregates in CBSE Class 10/12 Board exams and high IGCSE/A-Level grades for global engineering and medical entry.',
    uniqueConclusion: 'Partner with Saudi Arabia’s leading 1-on-1 online tutoring institute. Help your child master CBSE, Cambridge, or IB curricula from home in Riyadh, Jeddah, or Khobar.',
    popularBoards: ['CBSE (KSA Gulf Region)', 'Cambridge IGCSE & A-Levels', 'IB Diploma Programme (DP)', 'American Curriculum & AP'],
    popularSubjects: ['Mathematics (Class 1 to 12)', 'Physics, Chemistry & Biology', 'Computer Science & Coding', 'English & IELTS/SAT Prep', 'French & Academic Arabic'],
    parentPainPoints: [
      { pain: 'Limited availability of specialized English-medium tutors in Riyadh, Jeddah, and Eastern Province.', solution: 'Direct 1-on-1 access to top 1.8% verified international curriculum subject specialists.' },
      { pain: 'Balancing school exams with competitive entry for top global engineering and medical universities.', solution: 'Personalized mentoring focused on conceptual clarity, unit test preparation, and past exam series.' }
    ],
    localSchoolAlignments: ['International Indian School Riyadh (IISR)', 'International Indian School Jeddah (IISJ)', 'American International School Riyadh (AISR)', 'Jeddah Prep and Grammar School', 'British International School Riyadh'],
    stats: [
      { label: 'KSA Students Taught', value: '3,800+' },
      { label: '90%+ Exam Distinction', value: '95.6%' },
      { label: 'Timezone Synchronization', value: '100% AST' },
      { label: 'Parent Satisfaction', value: '4.95 / 5' }
    ],
    studentQuote: {
      quote: 'VLearnPro helped my son master IGCSE Physics and Chemistry HL in Riyadh. His confidence surged and he scored straight A*s in his final exams!',
      student: 'Tariq & Fatima Al-Mansoor (Parents of Zayd)',
      school: 'British International School Riyadh',
      city: 'Riyadh, Saudi Arabia',
      score: 'Scored 4 A*s in Cambridge IGCSE'
    },
    faqs: [
      { question: 'Are classes scheduled around Saudi Arabia time (AST)?', answer: 'Yes! All classes are scheduled conveniently in your local AST time slot after school and on weekends.' },
      { question: 'Do you accept Saudi Riyal (SAR) payments?', answer: 'Yes! We support direct SAR payments via MADA cards, Apple Pay, Visa, and Mastercard with instant receipt generation.' }
    ],
    metaTitle: 'Online Tuition in Saudi Arabia (Riyadh, Jeddah) | CBSE, IGCSE & IB Tutors',
    metaDescription: 'Premier 1-on-1 online tutoring in Saudi Arabia for Riyadh & Jeddah families. Certified tutors for CBSE, Cambridge IGCSE, IB DP & American curricula. Free trial.'
  },

  qatar: {
    code: 'qatar',
    name: 'Qatar (Doha, Al Rayyan)',
    flag: '🇶🇦',
    currency: 'QAR',
    currencySymbol: 'QR',
    timezone: 'AST (Arabia Standard Time - Doha)',
    phoneCode: '+974',
    tagline: 'Premier 1-on-1 Online Tuition for International & CBSE Schools in Qatar',
    description: 'Empowering students across Doha, Al Rayyan, Al Wakrah, and Lusail. Expert 1-on-1 live mentoring aligned with Qatar Ministry of Education guidelines across CBSE, British, IB, and American international schools.',
    educationEcosystem: 'Qatar’s educational ecosystem in Doha and Al Rayyan includes elite institutions within Education City alongside premier private CBSE, British, and IB schools. Supervised by the Ministry of Education and Higher Education, schools demand strong analytical and problem-solving skills.',
    suitableSchedules: 'Operates seamlessly on Arabia Standard Time (AST - UTC+3). Online classes are scheduled after 3:30 PM AST on weekdays and throughout weekends to fit comfortably into Doha school routines.',
    parentExpectations: 'Qatari and expatriate parents target 90%+ in CBSE Class 10/12 exams, level 7s in IB Higher Level subjects, and top Digital SAT scores for admission into Education City branch universities (Texas A&M, Carnegie Mellon, Weill Cornell Qatar) or overseas institutions.',
    uniqueConclusion: 'Give your child in Doha the advantage of top 1.8% 1-on-1 verified mentors. Book a free 45-minute diagnostic session matched to Qatar school requirements.',
    popularBoards: ['CBSE (Qatar Region)', 'Cambridge IGCSE & Edexcel', 'IB Diploma Programme (DP)', 'American High School Diploma'],
    popularSubjects: ['Maths (Pure & Applied)', 'Physics, Chemistry & Biology', 'Coding & Computer Science', 'English Literature & Composition', 'SAT & Digital Test Prep'],
    parentPainPoints: [
      { pain: 'High private tutoring costs in Doha with limited 1-on-1 continuity.', solution: 'Dedicated 1-on-1 tutor matching with consistent long-term weekly schedules at transparent QAR rates.' },
      { pain: 'Need for 90%+ scores in CBSE Class 10/12 or 38+ in IB DP for top university entry.', solution: 'Targeted past paper practice, doubt clearing, and exam strategy sessions.' }
    ],
    localSchoolAlignments: ['MES Indian School Doha', 'DPS-Modern Indian School Qatar', 'Qatar Academy (Doha & Al Wakra)', 'Doha College', 'Compass International School Doha'],
    stats: [
      { label: 'Qatar Students Enrolled', value: '2,100+' },
      { label: '90%+ Score Achievers', value: '96.1%' },
      { label: 'Doha Timezone Match', value: '100%' },
      { label: 'Parent Satisfaction', value: '4.96 / 5' }
    ],
    studentQuote: {
      quote: 'Finding an exceptional IB Maths AA HL tutor in Doha was challenging until we joined VLearnPro. My son achieved a 7 in Maths and 41 points overall!',
      student: 'Nasser & Aisha Al-Kuwari (Parents of Hamad)',
      school: 'Qatar Academy Doha',
      city: 'Doha, Qatar',
      score: '41 / 45 Points in IB Diploma'
    },
    faqs: [
      { question: 'Do you offer Qatari Riyal (QAR) pricing?', answer: 'Yes! We provide transparent QAR tuition plans with no currency conversion charges.' }
    ],
    metaTitle: 'Online Tuition in Qatar (Doha) | CBSE, IGCSE & IB Tutors in Qatar',
    metaDescription: 'Best 1-on-1 online tuition in Qatar for Doha students. Certified tutors for CBSE, IGCSE, IB DP & American schools. Book your free 45-min trial class.'
  },

  kuwait: {
    code: 'kuwait',
    name: 'Kuwait (Kuwait City, Hawally)',
    flag: '🇰🇼',
    currency: 'KWD',
    currencySymbol: 'KD',
    timezone: 'AST (Arabia Standard Time - Kuwait City)',
    phoneCode: '+965',
    tagline: 'Top-Rated 1-on-1 Online Tuition for CBSE & International Schools in Kuwait',
    description: 'Specialized 1-on-1 online tuition for students in Kuwait City, Hawally, Salmiya, and Ahmadi. Aligned with CBSE, British (IGCSE/A-Level), IB, and American school standards.',
    educationEcosystem: 'Kuwait’s private education landscape in Kuwait City, Hawally, Salmiya, and Ahmadi comprises established CBSE, British, American, and IB schools supervised by the Ministry of Private Education. Students face intense competition for university scholarships and board distinctions.',
    suitableSchedules: 'Classes are conducted in AST (UTC+3) between 4:00 PM and 9:30 PM AST on weekdays, taking into account school hours and prayer times, plus flexible weekend slots.',
    parentExpectations: 'Parents in Kuwait expect dedicated 1-on-1 attention to eliminate learning gaps in Mathematics and Science, striving for top CBSE Class 10/12 board marks and Cambridge IGCSE distinctions.',
    uniqueConclusion: 'Experience personalized 1-on-1 online tuition in Kuwait City, Hawally, and Salmiya. Claim your child’s free diagnostic trial session today.',
    popularBoards: ['CBSE (Kuwait Region)', 'Cambridge IGCSE & Edexcel', 'IB DP & MYP', 'American Curriculum'],
    popularSubjects: ['Mathematics (Class 1-12)', 'Physics, Chemistry & Biology', 'Python & Computer Science', 'English & IELTS/SAT Prep'],
    parentPainPoints: [
      { pain: 'Finding qualified subject tutors who understand the exact CBSE and IGCSE syllabus in Kuwait.', solution: 'Top 1.8% verified international board educators providing 1-on-1 personalized mentoring.' }
    ],
    localSchoolAlignments: ['Indian Community School Kuwait (ICSK)', 'Gulf Indian School Kuwait', 'The English School Kuwait', 'American International School of Kuwait', 'Kuwait National English School'],
    stats: [
      { label: 'Kuwait Students Taught', value: '1,900+' },
      { label: 'Board Pass Rate', value: '99.2%' },
      { label: 'Parent Recommendation', value: '99.1%' }
    ],
    studentQuote: {
      quote: 'VLearnPro helped my daughter score 96.8% in CBSE Class 10 Boards in Kuwait. The 1-on-1 guidance was exceptional!',
      student: 'Sameer & Huda Al-Fadli (Parents of Mariam)',
      school: 'Indian Community School Kuwait',
      city: 'Kuwait City, Kuwait',
      score: '96.8% in CBSE Class 10'
    },
    faqs: [
      { question: 'Do you accept KWD payments?', answer: 'Yes! We support payments in Kuwaiti Dinar (KWD) via local KNET and major credit cards.' }
    ],
    metaTitle: 'Online Tuition in Kuwait | CBSE, IGCSE & IB 1-on-1 Tutors in Kuwait',
    metaDescription: 'Premier 1-on-1 online tutoring in Kuwait for CBSE, IGCSE & IB students in Kuwait City & Salmiya. Book your free 1-on-1 trial class today.'
  },

  bahrain: {
    code: 'bahrain',
    name: 'Bahrain (Manama, Riffa)',
    flag: '🇧🇭',
    currency: 'BHD',
    currencySymbol: 'BD',
    timezone: 'AST (Arabia Standard Time - Manama)',
    phoneCode: '+973',
    tagline: 'Leading 1-on-1 Online Tuition for CBSE & International Schools in Bahrain',
    description: 'Empowering students across Manama, Riffa, Muharraq, and Saar with top 1.8% 1-on-1 verified tutors for CBSE, Cambridge, IB, and American school success.',
    educationEcosystem: 'Bahrain’s education system across Manama, Riffa, Muharraq, and Saar is supported by respected CBSE, Cambridge, and IB international schools monitored by the Education & Training Quality Authority (BQA).',
    suitableSchedules: 'Classes follow Arabia Standard Time (AST - UTC+3), with flexible evening sessions from 3:30 PM to 9:00 PM AST after local school dismissal.',
    parentExpectations: 'Focus is placed on building strong foundational math and science skills to secure A* grades in IGCSEs and 90%+ in CBSE Board exams for high school success.',
    uniqueConclusion: 'Empower your child’s academic journey in Bahrain with handpicked 1-on-1 subject specialists. Book a free diagnostic class today.',
    popularBoards: ['CBSE (Bahrain Region)', 'Cambridge IGCSE & A-Levels', 'IB DP', 'American Curriculum'],
    popularSubjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'Coding & Computer Science'],
    parentPainPoints: [
      { pain: 'Need for high scores in school exams without stress or commuting.', solution: 'Live interactive 1-on-1 lessons from home in local AST timezone.' }
    ],
    localSchoolAlignments: ['The Indian School Bahrain (ISB)', 'Asian School Bahrain', 'St. Christopher’s School Bahrain', 'British School of Bahrain'],
    stats: [
      { label: 'Bahrain Students', value: '1,200+' },
      { label: '90%+ Score Rate', value: '95.8%' }
    ],
    studentQuote: {
      quote: 'The 1-on-1 Maths and Physics tuition transformed my son’s grades in Manama. Highly recommended for GCC families!',
      student: 'Yousif & Layla Al-Mulla (Parents of Ali)',
      school: 'St. Christopher’s School Bahrain',
      city: 'Manama, Bahrain',
      score: 'Achieved Straight A*s'
    },
    faqs: [
      { question: 'Do you support BHD payments?', answer: 'Yes, we accept payments in Bahraini Dinar (BHD) with zero currency markup.' }
    ],
    metaTitle: 'Online Tuition in Bahrain (Manama) | CBSE, IGCSE & IB Tutors',
    metaDescription: 'Best 1-on-1 online tuition in Bahrain. Top tutors for CBSE, Cambridge IGCSE & IB DP students in Manama & Riffa. Free trial class.'
  },

  oman: {
    code: 'oman',
    name: 'Oman (Muscat, Salalah)',
    flag: '🇴🇲',
    currency: 'OMR',
    currencySymbol: 'RO',
    timezone: 'GST (Gulf Standard Time - Muscat)',
    phoneCode: '+968',
    tagline: 'Premier 1-on-1 Online Tuition for CBSE & International Schools in Oman',
    description: 'Trusted online tuition provider for families in Muscat, Salalah, Sohar, and Seeb across CBSE, Cambridge IGCSE, IB, and American curricula.',
    educationEcosystem: 'Oman’s private and international schooling in Muscat, Salalah, and Sohar features leading CBSE Indian schools and Cambridge/IB international academies overseen by the Ministry of Education.',
    suitableSchedules: 'Classes run on Gulf Standard Time (GST - UTC+4) from 3:30 PM to 9:30 PM GST, ensuring seamless scheduling for Muscat students.',
    parentExpectations: 'Parents seek rigorous past paper preparation and conceptual clarity in Maths, Physics, and Chemistry for top board results.',
    uniqueConclusion: 'Join hundreds of satisfied families in Muscat and Salalah. Experience VLearnPro’s 1-on-1 online tuition with a free demo session.',
    popularBoards: ['CBSE (Oman Region)', 'Cambridge IGCSE', 'IB DP', 'American Curriculum'],
    popularSubjects: ['Mathematics', 'Physics & Chemistry', 'Biology', 'English & Coding'],
    parentPainPoints: [
      { pain: 'Access to top-tier subject specialists in Muscat.', solution: 'Direct 1-on-1 live classes with top 1.8% vetted global educators.' }
    ],
    localSchoolAlignments: ['Indian School Muscat (ISM)', 'Indian School Al Ghubra', 'The Sultan’s School Oman', 'British School Muscat'],
    stats: [
      { label: 'Oman Students', value: '1,400+' },
      { label: 'Board Distinction Rate', value: '96.0%' }
    ],
    studentQuote: {
      quote: 'VLearnPro’s 1-on-1 tutoring helped my daughter excel in her CBSE Class 12 exams in Muscat!',
      student: 'Salim & Fatima Al-Zadjali (Parents of Reem)',
      school: 'Indian School Muscat',
      city: 'Muscat, Oman',
      score: '96.2% in CBSE Boards'
    },
    faqs: [
      { question: 'Can we pay in Omani Rial (OMR)?', answer: 'Yes! We support OMR payments via debit/credit cards with zero fees.' }
    ],
    metaTitle: 'Online Tuition in Oman (Muscat) | CBSE, IGCSE & IB Tutors in Oman',
    metaDescription: 'Leading 1-on-1 online tuition in Oman for Muscat & Salalah students. Certified tutors for CBSE, IGCSE & IB. Free trial.'
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
    educationEcosystem: 'Singapore’s highly competitive academic environment covers MOE PSLE AL scoring targets, GCE O-Levels, and international IB schools (UWC South East Asia, Tanglin Trust). High standards require deep mastery of Singapore Math Bar Models and MOE Science CER techniques.',
    suitableSchedules: 'Classes are scheduled in SGT (UTC+8) between 4:00 PM and 9:30 PM SGT on weekdays, taking into account CCA commitments, plus weekend morning/afternoon options.',
    parentExpectations: 'Singapore parents target AL1 in PSLE Mathematics and Science heuristics, and A1 grades in GCE O-Level E-Math and A-Math to secure top Junior College (JC) placements.',
    uniqueConclusion: 'Master Singapore Math heuristics and MOE Science CER answering techniques with top tutors. Book your free 1-on-1 demo session today.',
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
    educationEcosystem: 'International schooling across Germany, France, Switzerland, and the Netherlands focuses heavily on IB Diploma (DP/MYP), European Baccalaureate (EB), and English-medium Cambridge specifications for expatriate families.',
    suitableSchedules: 'Classes are scheduled in CET / CEST (UTC+1/+2) between 4:00 PM and 9:00 PM CET on weekdays, making evening tutoring seamless after international school dismissals.',
    parentExpectations: 'European international parents target 38–45 IB Diploma points and high Level 7s in IB Higher Level subjects to enter top European, UK, and global universities.',
    uniqueConclusion: 'Access top English-medium IB DP, IGCSE, and A-Level tutors across Europe. Schedule your child’s free 1-on-1 diagnostic class today.',
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
    educationEcosystem: 'Canadian high school curricula (Ontario OSSD, BC, Alberta) demand high 90s in Grade 12 top-6 university entrance courses for admission into top university programs (Waterloo Engineering/CS, U of T, UBC, McGill).',
    suitableSchedules: 'Classes are scheduled across EST, CST, MST, and PST time zones between 3:30 PM and 9:30 PM local Canadian time.',
    parentExpectations: 'Canadian parents target 95%+ in Grade 12 Advanced Functions (MHF4U) and Calculus & Vectors (MCV4U), alongside top distinction in Waterloo Math Contests.',
    uniqueConclusion: 'Boost your child’s OSSD high school average and university admission chances in Canada. Book a free 1-on-1 trial class today.',
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
    educationEcosystem: 'Australia’s high-stakes ATAR ranking system across NSW HSC, Victorian VCE, and QCE drives intense competition for Medicine, Law, and Engineering degree spots.',
    suitableSchedules: 'Classes are scheduled in AEST / AEDT / AWST (Sydney, Melbourne, Perth times) between 3:30 PM and 9:00 PM local Australian time.',
    parentExpectations: 'Australian parents target 95–99+ ATAR scores through Band 6 performance in high-scaling subjects like Extension 2 Maths, Specialist Maths, and Physics.',
    uniqueConclusion: 'Maximize your child’s ATAR score with specialized 1-on-1 HSC, VCE, and IB tutors. Book a free 1-on-1 trial class today.',
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
    name: 'India (Delhi-NCR, Mumbai, Bengaluru, Hyderabad)',
    flag: '🇮🇳',
    currency: 'INR',
    currencySymbol: '₹',
    timezone: 'IST (Indian Standard Time)',
    phoneCode: '+91',
    tagline: 'Leading 1-on-1 Online Tuition for CBSE, ICSE, IB & IGCSE Schools in India',
    description: 'Transform school grades and build strong academic foundations. India’s finest 1-on-1 educators for CBSE & ICSE Class 1 to 12, international schools (IGCSE/IB), and Foundation prep.',
    educationEcosystem: 'India’s dynamic educational landscape spans CBSE, ICSE, Cambridge, and IB schools across Tier-1 cities (Delhi-NCR, Mumbai, Bengaluru, Hyderabad). With intense competition in Class 10 and 12 Board exams alongside foundation prep, 1-on-1 mentorship provides a decisive edge.',
    suitableSchedules: 'Scheduled in Indian Standard Time (IST - UTC+5:30) between 4:00 PM and 9:30 PM IST on weekdays, plus weekend morning and afternoon sessions.',
    parentExpectations: 'Parents demand 95%+ Board exam aggregates, Olympiad ranks, and deep conceptual clarity without the stress of 80-student coaching factories.',
    uniqueConclusion: 'Transform your child’s academic confidence with India’s finest 1-on-1 mentors. Book your free diagnostic trial class now.',
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
    description: 'Specialist British curriculum tutors aligned with AQA, Pearson Edexcel, OCR, and Cambridge CAIE exam specifications for UK and GCC international families.',
    educationEcosystem: 'The UK school system covers Key Stages 1-4, GCSE (9-1), and A-Levels under AQA, Edexcel, and OCR examination boards. High stakes surrounding Sixth Form entry and Russell Group / Oxbridge offers demand high Grade 8/9s.',
    suitableSchedules: 'Classes are scheduled in GMT / BST (London Time) between 4:00 PM and 9:00 PM on weekdays and flexible weekend hours.',
    parentExpectations: 'UK parents target Grade 8/9s in GCSEs and A*/A in A-Levels to secure placements at Oxford, Cambridge, Imperial, UCL, and top Russell Group universities.',
    uniqueConclusion: 'Secure your child’s GCSE and A-Level success with top Russell Group graduate tutors. Book a free 1-on-1 trial class today.',
    popularBoards: ['UK GCSE (AQA / Edexcel / OCR)', 'GCE A-Levels & Further Maths', 'Cambridge International (CAIE)', 'IB Diploma Programme (DP)'],
    popularSubjects: ['GCSE / A-Level Maths & Further Maths', 'Triple & Combined Sciences', 'English Language & Literature', 'Computer Science (Python)'],
    parentPainPoints: [
      { pain: 'Struggling to secure high Grade 8/9s in GCSEs needed for top Sixth Forms.', solution: 'Targeted specification coaching focused on the toughest Grade 8/9 past paper question archetypes.' }
    ],
    localSchoolAlignments: ['UK State & Grammar Schools', 'Independent & Public Schools', 'British International Schools in GCC'],
    stats: [
      { label: 'GCSE Grade 8-9 Rate', value: '91.2%' },
      { label: 'A-Level A*/A Rate', value: '89.4%' }
    ],
    studentQuote: {
      quote: 'My son jumped from a Grade 5 in his Year 10 mocks to straight Grade 9s in GCSE Maths and Physics! The 1-on-1 attention made all the difference.',
      student: 'Claire Robinson (Parent of Oliver, Year 11)',
      school: 'King Edward VI Grammar School',
      city: 'Birmingham, UK',
      score: 'Achieved 8 Grade 9s in GCSEs'
    },
    faqs: [
      { question: 'Do you cover specific UK exam boards like AQA and Edexcel?', answer: 'Yes! We strictly align all tutoring materials to your child’s specific exam board.' }
    ],
    metaTitle: 'Online Tuition UK (KS3, GCSE & A-Level) | 1-on-1 British Curriculum Tutors',
    metaDescription: 'Premier 1-on-1 online tutoring in the UK. Master AQA & Edexcel GCSE (9-1), A-Levels, Maths, Sciences & English. Free trial.'
  },

  usa: {
    code: 'usa',
    name: 'United States of America',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    timezone: 'EST / CST / MST / PST (All US Zones)',
    phoneCode: '+1',
    tagline: 'Premier 1-on-1 Online Tuition for K-12, Honors, AP & SAT Prep',
    description: 'Empowering American and GCC international school students from Kindergarten through Grade 12 to achieve top GPAs and master Advanced Placement (AP) coursework.',
    educationEcosystem: 'The US education system features Common Core standards, Honors tracks, Advanced Placement (AP) courses, and Digital SAT testing across public and private academies.',
    suitableSchedules: 'Classes are scheduled across EST, CST, MST, and PST time zones between 3:00 PM and 9:30 PM local American time.',
    parentExpectations: 'US parents target Level 5s on AP exams, 1500+ Digital SAT scores, and unshakeable unweighted GPAs for competitive Ivy League and Top 30 US university admissions.',
    uniqueConclusion: 'Empower your child’s US GPA and AP exam scores with expert 1-on-1 tutors. Schedule your free 1-on-1 trial class today.',
    popularBoards: ['American Curriculum (Common Core)', 'Advanced Placement (AP)', 'International Baccalaureate (IB DP)', 'Cambridge CAIE'],
    popularSubjects: ['Maths (Algebra, Pre-Calc, AP Calc)', 'Science & AP Physics / Chemistry / Bio', 'Coding & Computer Science', 'Digital SAT Prep'],
    parentPainPoints: [
      { pain: 'Local in-person tutoring centers charging high rates for generic group classes.', solution: 'Dedicated 1-on-1 subject specialists with customized lesson plans.' }
    ],
    localSchoolAlignments: ['US Public & Private High Schools', 'American International Schools in GCC'],
    stats: [
      { label: 'AP Score 5 Rate', value: '88.7%' },
      { label: 'Avg SAT Score Gain', value: '+190 Pts' }
    ],
    studentQuote: {
      quote: 'VLearnPro’s AP Calculus and AP Physics tutors were incredible. My daughter improved her GPA from 3.4 to 3.9 and scored 5s on both AP exams!',
      student: 'Sarah Jenkins (Parent of Tyler, Grade 11)',
      school: 'St. John’s Preparatory School',
      city: 'Austin, Texas',
      score: 'Scored 5 in AP Calc BC & 1540 on SAT'
    },
    faqs: [
      { question: 'What hours are tutors available in US time zones?', answer: 'We have dedicated faculty available 7 days a week across all time zones.' }
    ],
    metaTitle: 'Online Tuition in USA (K-12, AP, Honors & SAT) | 1-on-1 US Tutors',
    metaDescription: 'Top-rated 1-on-1 online tutoring in the USA. Expert tutors for US Common Core Math, AP Calculus, AP Sciences & SAT prep. Scheduled in your timezone.'
  }
};
