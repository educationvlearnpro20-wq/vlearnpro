import { LanguageInfo, LanguageId } from '../types';

export const LANGUAGES_DATA: Record<LanguageId, LanguageInfo> = {
  spanish: {
    id: 'spanish',
    name: 'Spanish Classes for Kids & Teens',
    nativeName: 'Español',
    flag: '🇪🇸',
    levels: 'Beginner (A1) to Advanced (C1) & DELE / IGCSE / IB',
    description: 'Learn the world’s second most spoken native language with certified native tutors. Conversational fluency, vocabulary building, Hispanic cultural immersion, and international exam prep (DELE Escolar, IGCSE Spanish 0530, IB Spanish B / Ab Initio).',
    heroHighlight: 'Our Spanish students gain conversational fluency within 16 weeks and achieve 100% pass rates in DELE Escolar.',
    certificationAlignment: ['DELE Escolar (A1, A2/B1)', 'Cambridge IGCSE Spanish (0530)', 'IB DP Spanish B / Ab Initio', 'AP Spanish Language & Culture', 'SIELE'],
    learningTracks: [
      { title: 'School Curriculum Sync', description: 'Align with school textbooks, homework help, grammar rules (ser/estar, preterite vs imperfect), and term test preparation.', forWho: 'School students with Spanish as a 2nd or 3rd language.' },
      { title: 'Conversational Immersion', description: 'Active speaking sessions focused on real-life dialogues, travel scenarios, Hispanic culture, and accent polishing.', forWho: 'Kids and teens seeking bilingual fluency.' },
      { title: 'DELE & AP Exam Track', description: 'Targeted preparation for official Cervantes DELE certification and College Board AP Spanish.', forWho: 'Students building international university credentials.' }
    ],
    methodology: [
      'Interactive 1-on-1 immersion where Spanish is spoken 75%+ of lesson time.',
      'Cultural multimedia (music, stories, cultural virtual tours of Spain & Latin America).',
      'Digital flashcard decks and spaced-repetition drills for rapid vocabulary mastery.'
    ],
    stats: [
      { label: 'DELE Pass Rate', value: '100%' },
      { label: 'Avg Speaking Gain', value: '3X Speed' },
      { label: 'Vocab Acquired', value: '1,200+ Words' },
      { label: 'Native Tutors', value: 'Certified' }
    ],
    faqs: [
      { question: 'Do you teach both European (Castilian) Spanish and Latin American Spanish?', answer: 'Yes! Our tutors customize pronunciation and vocabulary usage based on your family’s target preference or school syllabus specifications.' },
      { question: 'Can you help with IB Spanish Ab Initio and Spanish B HL/SL?', answer: 'Yes, we have specialized IB Spanish examiners who guide students through the IB thematic units, oral assessments (Individual Oral), and Paper 1 & 2 exam formats.' }
    ],
    metaTitle: 'Online Spanish Classes for Kids & School Students | 1-on-1 Tutors',
    metaDescription: 'World-class 1-on-1 online Spanish classes for kids and teens. Master conversational Spanish, DELE, IGCSE & IB Spanish B with certified native educators.',
    primaryKeyword: 'Spanish Online Classes'
  },

  german: {
    id: 'german',
    name: 'German Classes for School Students',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    levels: 'A1, A2, B1, B2 & Goethe-Zertifikat / IGCSE / DSD',
    description: 'Master German grammar precision, cases (Nominativ, Akkusativ, Dativ, Genitiv), vocabulary, and conversational fluency. Expert preparation for Goethe-Institut Fit in Deutsch, German as a foreign language in school, IGCSE German (0525), and IB German.',
    heroHighlight: 'Our German students master tough grammar cases effortlessly and achieve top distinctions in Goethe-Zertifikat exams.',
    certificationAlignment: ['Goethe-Zertifikat A1 / A2 Fit in Deutsch', 'Goethe-Zertifikat B1 / B2', 'Cambridge IGCSE German (0525)', 'IB DP German B / Ab Initio', 'DSD (Deutsches Sprachdiplom)'],
    learningTracks: [
      { title: 'School Curriculum Support', description: 'Deep breakdown of German grammatical gender, declensions, verb conjugations, and school exam syllabus.', forWho: 'Students studying German in international and IB schools.' },
      { title: 'Goethe Exam Preparation', description: 'Rigorous drills covering all 4 modules: Lesen (Reading), Hören (Listening), Schreiben (Writing), and Sprechen (Speaking).', forWho: 'Learners targeting official German government certification.' },
      { title: 'German for Higher Education', description: 'Academic vocabulary and conversational prep for students planning future engineering or university studies in Germany/Switzerland.', forWho: 'High school students planning European higher education.' }
    ],
    methodology: [
      'Visual grammar schemas that simplify German case endings and sentence order rules (TeKaMoLo).',
      'Auditory immersion using authentic German audio dialogues and interactive listening tasks.',
      'Active oral practice through structured situational roleplay.'
    ],
    stats: [
      { label: 'Goethe Pass Rate', value: '98.5%' },
      { label: 'Grammar Accuracy', value: '99%' },
      { label: 'Audio Dialogues', value: '400+' },
      { label: 'CEFR Alignment', value: 'A1 - B2' }
    ],
    faqs: [
      { question: 'German grammar has a reputation for being difficult. How do you make it simple for kids?', answer: 'We use color-coded visual charts for gender articles (der/die/das) and systematic sentence-building blocks that make word order and case declensions intuitive and fun.' }
    ],
    metaTitle: 'Online German Classes for Kids & Teens | Goethe & IGCSE Tutors',
    metaDescription: 'Premier 1-on-1 online German classes for school students. Master German grammar, Goethe Fit in Deutsch, IGCSE German & IB German B with certified mentors.',
    primaryKeyword: 'German Online Classes'
  },

  french: {
    id: 'french',
    name: 'French Classes for Kids & Teens',
    nativeName: 'Français',
    flag: '🇫🇷',
    levels: 'DELF Prim, DELF Junior (A1-B2), IGCSE & IB French',
    description: 'Immerse your child in the beauty of the French language. 1-on-1 personalized tutoring for school curricula (CBSE/ICSE French, Cambridge IGCSE 0520, IB French B/Ab Initio) and official DELF Prim & DELF Junior certifications.',
    heroHighlight: 'Our French students achieve 100% distinction in DELF Junior and IGCSE French oral and written papers.',
    certificationAlignment: ['DELF Prim (A1.1, A1, A2)', 'DELF Junior / Scolaire (A1, A2, B1, B2)', 'Cambridge IGCSE French (0520)', 'IB DP French B / Ab Initio', 'Canadian DELF & Bilingual Immersion'],
    learningTracks: [
      { title: 'DELF Prim & Junior Track', description: 'Structured mastery of listening comprehension, reading, creative writing, and formal oral interviews.', forWho: 'School students aiming for France Ministry of Education diplomas.' },
      { title: 'School Curriculum & Grammar', description: 'Past tenses (Passé Composé vs Imparfait), subjunctive mood, pronoun placement (COD/COI), and textbook revision.', forWho: 'Students pursuing French in CBSE, ICSE, Cambridge, or Canadian immersion.' },
      { title: 'Francophone Cultural Immersion', description: 'Interactive storytelling, French cuisine, art, geography, and Parisian conversational nuances.', forWho: 'Enthusiastic global young learners.' }
    ],
    methodology: [
      'Interactive phonetics drilling ensuring correct French nasal sounds and liaison rules.',
      'Scenario-based oral dialogues mirroring real French everyday life.',
      'Comprehensive past paper drills for DELF and IGCSE examinations.'
    ],
    stats: [
      { label: 'DELF Distinction', value: '98.8%' },
      { label: 'Pronunciation Score', value: '99%' },
      { label: 'Roleplay Scenarios', value: '300+' },
      { label: 'Certified Faculty', value: '100% DELF Trained' }
    ],
    faqs: [
      { question: 'Do you support Canadian French immersion students (Ontario, BC, Quebec)?', answer: 'Yes! We have tutors experienced in Canadian French provincial curricula and Core/Immersion French standards.' }
    ],
    metaTitle: 'Online French Classes for School Students | DELF & IGCSE French Tutors',
    metaDescription: 'World-class 1-on-1 online French classes for kids. Master French grammar, DELF Prim & Junior, IGCSE French 0520 & IB French B with expert educators.',
    primaryKeyword: 'French Online Classes'
  },

  chinese: {
    id: 'chinese',
    name: 'Mandarin Chinese Classes for Kids & Teens',
    nativeName: '中文 (普通话)',
    flag: '🇨🇳',
    levels: 'YCT (Levels 1-4), HSK (Levels 1-4), IGCSE & IB Chinese',
    description: 'Unlock the language of the future. 1-on-1 Mandarin Chinese tutoring covering Pinyin phonetics, 4 tones mastery, Hanzi character stroke orders, conversational fluency, and international exams (YCT, HSK, IGCSE Mandarin 0547, IB Chinese B).',
    heroHighlight: 'Our students master Mandarin tones with native precision and pass YCT & HSK exams with high honors.',
    certificationAlignment: ['YCT (Youth Chinese Test Levels 1-4)', 'HSK (Hanyu Shuiping Kaoshi Levels 1-4)', 'Cambridge IGCSE Chinese (0547 / 0523)', 'IB DP Chinese B / Ab Initio', 'Singapore MOE Higher Chinese'],
    learningTracks: [
      { title: 'YCT Young Learner Track', description: 'Gamified Pinyin pronunciation, interactive animated stroke writing, and foundational vocabulary for kids.', forWho: 'Ages 6 to 12 beginner learners.' },
      { title: 'School Curriculum & Exam Track', description: 'Structured Hanzi character memorization, reading comprehension, and writing for IGCSE, IB, and Singapore MOE.', forWho: 'School students taking Chinese as a second/foreign language.' },
      { title: 'Conversational Mandarin for Business & Travel', description: 'Practical dialogues, cultural etiquette, numbers, negotiation, and contemporary Chinese expressions.', forWho: 'Teens preparing for global careers and international mobility.' }
    ],
    methodology: [
      'Visual radical-based character association making Chinese characters memorable and logical.',
      'Tone-pitch visualization software ensuring accurate tonal inflections from day one.',
      'Interactive digital whiteboards for real-time stroke-order tracing.'
    ],
    stats: [
      { label: 'YCT / HSK Pass Rate', value: '99.1%' },
      { label: 'Characters Mastered', value: '1,000+ Hanzi' },
      { label: 'Tonal Accuracy', value: '98%' },
      { label: 'Native Speakers', value: 'Beijing / Standard' }
    ],
    faqs: [
      { question: 'Is Mandarin Chinese too difficult for young children to learn online?', answer: 'Not at all! Children are exceptional phonetic mimics. By using visual radicals, animated character stories, and engaging 1-on-1 dialogue, our students learn rapidly and joyfully.' }
    ],
    metaTitle: 'Online Mandarin Chinese Classes for Kids | YCT, HSK & IGCSE Chinese Tutors',
    metaDescription: 'Premier 1-on-1 online Mandarin Chinese classes for kids and teens. Master Pinyin, Hanzi characters, YCT, HSK & IGCSE Chinese with certified native teachers.',
    primaryKeyword: 'Chinese Online Classes'
  },

  urdu: {
    id: 'urdu',
    name: 'Urdu Language Classes (Reading, Writing & Speaking)',
    nativeName: 'اردو',
    flag: '🇵🇰',
    levels: 'Beginner to Advanced (Nastaliq Script, Adab, Poetry & O-Level / IGCSE)',
    description: 'Preserve cultural roots and master one of the world’s most poetic languages. 1-on-1 personalized Urdu tutoring covering Nastaliq script reading & writing, correct phonetics (Talaffuz), grammar (Qawaid), conversational fluency, and Cambridge O-Level / IGCSE Urdu (3248 / 0539).',
    heroHighlight: 'Over 95% of our diaspora students become fluent in reading, writing Nastaliq script, and speaking refined Urdu.',
    certificationAlignment: ['Cambridge O-Level Urdu (3248 Syllabus A & B)', 'Cambridge IGCSE Urdu (0539 / 0512)', 'Edexcel IGCSE Urdu', 'CBSE / ICSE Urdu as 2nd Language'],
    learningTracks: [
      { title: 'Nastaliq Script & Reading Track', description: 'Step-by-step alphabet recognition, letter joining forms, vowel marks (Zabar, Zer, Pesh), and fluent story reading.', forWho: 'Diaspora kids living in USA, UK, UAE, Canada, and Australia.' },
      { title: 'Conversational Urdu & Talaffuz', description: 'Building confident conversational vocabulary, respectful etiquette (Adab), and clear pronunciation.', forWho: 'Children looking to communicate effortlessly with grandparents and family.' },
      { title: 'O-Level & IGCSE Urdu Exam Track', description: 'Targeted preparation for Cambridge 3248 / 0539 past papers, translation (English to Urdu & vice versa), essay writing, and comprehension.', forWho: 'School students taking Urdu in board examinations.' }
    ],
    methodology: [
      'Interactive digital stylus tracing of Urdu Nastaliq calligraphy and letter connections.',
      'Phonetic pronunciation drills emphasizing nuanced sounds (خ, غ, ق, ژ, ڑ, ط, ظ).',
      'Classical and modern Urdu poetry and story appreciation for rich cultural connection.'
    ],
    stats: [
      { label: 'O-Level A* / A Rate', value: '94.6%' },
      { label: 'Script Literacy Gain', value: '8 Weeks' },
      { label: 'Diaspora Students', value: '2,500+' },
      { label: 'Literary Stories', value: '200+' }
    ],
    faqs: [
      { question: 'My child was born in the West and speaks only English. Can they learn to read and write Urdu from scratch?', answer: 'Yes! Our tutors specialize in teaching overseas diaspora children using bilingual English-Urdu explanations, interactive digital workbooks, and gentle encouragement.' },
      { question: 'Do you prepare students for Cambridge O-Level Urdu (3248) and IGCSE?', answer: 'Yes! We provide comprehensive past paper training, essay format coaching, translation practice, and vocabulary glossaries specifically for Cambridge 3248.' }
    ],
    metaTitle: 'Online Urdu Classes for Kids & Teens | Reading, Writing & O-Level Urdu Tutors',
    metaDescription: 'Best 1-on-1 online Urdu classes for overseas children. Learn Nastaliq script, conversational fluency, Talaffuz & Cambridge O-Level Urdu (3248). Book trial.',
    primaryKeyword: 'Urdu Online Classes'
  }
};
