import { BoardInfo, BoardId } from '../types';

export const BOARDS_DATA: Record<BoardId, BoardInfo> = {
  cbse: {
    id: 'cbse',
    name: 'CBSE Online Tuition',
    shortName: 'CBSE',
    tagline: 'Comprehensive NCERT & Competitive Mastery for Grades 1 to 12',
    grades: 'Grade 1 - 12',
    badge: 'India & Gulf Benchmark',
    description: 'Master the CBSE curriculum with India’s top-tier subject specialists. From foundational NCERT clarity in middle school to high-yield Class 10 & 12 Board Exam mastery, JEE/NEET foundation, and exemplar problem solving.',
    heroHighlight: '98.4% of our CBSE students score 90%+ in Class 10 & 12 Board Exams with customized 1-on-1 mentorship.',
    stats: [
      { label: 'Board Pass Rate', value: '100%' },
      { label: 'Scored 90%+', value: '98.4%' },
      { label: 'Exemplar Practice', value: '25,000+' },
      { label: 'Doubt Resolution', value: '< 2 Mins' }
    ],
    overview: [
      'CBSE (Central Board of Secondary Education) demands strong conceptual foundations in Mathematics, Science, and Social Sciences with rigorous application to NCERT questions.',
      'Our structured 1-on-1 live classes follow the latest rationalized CBSE syllabus, incorporating competency-based questions, case study-based assessments, and assertion-reasoning drilldowns.',
      'Specialized revision sprints and past 10 years solved board papers (PYQs) prepare students to write precise, board-examiner approved answers.'
    ],
    keyFeatures: [
      { title: 'Strict NCERT Line-by-Line Mastery', description: 'Deep conceptual drilling covering every NCERT textbook theorem, derivation, and exemplar question.' },
      { title: 'Competency-Based Question Bank', description: 'Specialized practice on new NEP-aligned case-study and analytical question formats.' },
      { title: 'Past 10 Years Solved Papers', description: 'Real exam simulation with step-by-step marking scheme alignment and answer-writing coaching.' },
      { title: 'Integrated Olympiad / JEE / NEET Foundation', description: 'Advanced problem sets for students targeting competitive excellence alongside school exams.' }
    ],
    curriculumStructure: [
      { stage: 'Primary (Grades 1-5)', grades: 'Grades 1 to 5', focus: 'Foundational numeracy, science inquiry, and English language mechanics.', keySubjects: ['Mathematics', 'EVS / Science', 'English Grammar & Reading', 'Hindi'] },
      { stage: 'Middle School (Grades 6-8)', grades: 'Grades 6 to 8', focus: 'Algebraic reasoning, Physics/Chem/Bio foundations, and structured literature.', keySubjects: ['Maths (NCERT)', 'Science (Physics, Chem, Bio)', 'Social Science', 'English'] },
      { stage: 'Secondary (Grades 9-10)', grades: 'Grades 9 to 10', focus: 'Rigorous Class 10 Board preparation, internal assessments, and sample paper sprints.', keySubjects: ['Standard/Basic Maths', 'Science (Lab Practicals + Theory)', 'Social Science', 'English Language & Lit'] },
      { stage: 'Senior Secondary (Grades 11-12)', grades: 'Grades 11 to 12', focus: 'Class 12 Board excellence with deep calculus, mechanics, organic chemistry, and competitive sync.', keySubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science (Python)', 'Applied Maths'] }
    ],
    examHighlights: [
      'Comprehensive coverage of Class 10 & 12 Pre-Board and Board examination strategies.',
      'Timed mock tests mapped exactly to CBSE official sample papers and marking schemes.',
      'Dedicated doubt-clearing sessions before periodic tests and mid-terms.'
    ],
    pedagogyPoints: [
      'Diagnostic baseline test to pinpoint learning gaps across past grade prerequisites.',
      'Customized pacing—never rush through tough calculus or chemical bonding topics.',
      'Weekly progress reports sent directly to parents with homework analytics and focus areas.'
    ],
    sampleTopics: [
      'Quadratic Equations & Trigonometry',
      'Optics, Electricity & Magnetic Effects',
      'Carbon & Its Compounds',
      'Calculus, Vectors & 3D Geometry',
      'Electrochemistry & Organic Mechanisms'
    ],
    faqs: [
      { question: 'Do your tutors follow the latest rationalized CBSE curriculum?', answer: 'Yes. All our lesson plans and question banks are updated in real-time according to the latest CBSE circulars and NCERT guidelines, including the 50% competency-based questions requirement.' },
      { question: 'Can my child get help with CBSE internal assessments and practicals?', answer: 'Absolutely. Our tutors guide students through internal assessment projects, lab journal conceptualization, viva voce preparation, and portfolio submissions.' },
      { question: 'Do you offer Class 10 and 12 Board Exam crash courses?', answer: 'Yes. We offer both year-long comprehensive 1-on-1 mentorship and intensive 60-day Pre-Board & Board Exam booster revision batches.' }
    ],
    metaTitle: 'CBSE Online Tuition Classes | Grades 1 to 12 | VLearnPro',
    metaDescription: 'Master the NCERT curriculum with expert 1-on-1 CBSE online tuition. Dedicated coaching for Class 10 & 12 Board exams in Maths & Science. Book a free demo.',
    primaryKeyword: 'CBSE Online Tuition'
  },

  icse: {
    id: 'icse',
    name: 'ICSE & ISC Online Tuition',
    shortName: 'ICSE / ISC',
    tagline: 'Detailed Conceptual & Analytical Mastery for CISCE Board Students',
    grades: 'Grade 1 - 12',
    badge: 'Analytical Depth & Rigour',
    description: 'Master the extensive ICSE (Class 10) & ISC (Class 12) syllabi with expert educators. Deep focus on Selina Concise Maths & Science, comprehensive English Literature, and structured lab sciences.',
    heroHighlight: 'Our ICSE students consistently achieve 95%+ marks with mastery over detailed syllabus requirements.',
    stats: [
      { label: 'Pass Rate', value: '100%' },
      { label: 'Scored 95%+', value: '94.2%' },
      { label: 'Selina Solved', value: '18,000+' },
      { label: 'Essay Feedback', value: '24 Hrs' }
    ],
    overview: [
      'The CISCE (ICSE / ISC) board is internationally renowned for its deep analytical curriculum and high standard of English language and scientific depth.',
      'Our 1-on-1 ICSE tuition breaks down complex multi-step physics derivations, organic chemistry nomenclature, and Shakespearean literature analysis into intuitive learning milestones.',
      'Students practice chapter-wise question banks from leading publications (Selina, Frank, Goyal) with timed prelim mocks.'
    ],
    keyFeatures: [
      { title: 'Selina & Standard Textbook Mastery', description: 'Line-by-line breakdown of Selina Concise Physics, Chemistry, Biology, and ML Aggarwal Mathematics.' },
      { title: 'Shakespeare & English Language Coaching', description: 'Scene-by-scene character analysis, thematic commentary, and ICSE essay writing templates.' },
      { title: 'In-Depth Scientific Practical Guidance', description: 'Complete conceptual backup for laboratory experiments, circuit diagrams, and specimen identification.' },
      { title: 'Prelim & Board Answer Writing Techniques', description: 'Techniques to format long answers, key term highlighting, and accurate diagram labelling for top marks.' }
    ],
    curriculumStructure: [
      { stage: 'Primary (Grades 1-5)', grades: 'Grades 1 to 5', focus: 'Strong English phonetics, arithmetic agility, and exploratory general science.', keySubjects: ['English Language', 'Mathematics', 'General Science', 'Social Studies'] },
      { stage: 'Middle School (Grades 6-8)', grades: 'Grades 6 to 8', focus: 'Transition to separated Physics, Chemistry, Biology and algebraic geometry.', keySubjects: ['Concise Maths', 'Physics', 'Chemistry', 'Biology', 'English Lit & Lang', 'Computer Applications'] },
      { stage: 'ICSE Class 9-10', grades: 'Grades 9 to 10', focus: 'Targeted Class 10 Board exam preparation, 10-year question papers, and school prelim simulations.', keySubjects: ['Commercial Studies / Maths', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'Java / Computer Applications'] },
      { stage: 'ISC Class 11-12', grades: 'Grades 11 to 12', focus: 'Rigorous senior secondary ISC preparation with university entrance sync.', keySubjects: ['Pure Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science (Java & Data Structures)', 'Economics'] }
    ],
    examHighlights: [
      'Complete mastery of ICSE 10-year solved papers and specimen papers released by CISCE.',
      'Specialized answer-structuring feedback to eliminate marks deduction on minor technicalities.',
      'School prelim preparation sprints aligned with top ICSE schools worldwide.'
    ],
    pedagogyPoints: [
      'Interactive digital whiteboards for real-time geometrical constructions and organic synthesis pathways.',
      'Regular oral quizzes and diagnostic worksheets after every subtopic.',
      'Monthly parent conferences detailing academic benchmarks and upcoming school exam roadmaps.'
    ],
    sampleTopics: [
      'Commercial Mathematics & Matrices',
      'Refraction through Lenses & Current Electricity',
      'Periodic Table & Metallurgy',
      'The Merchant of Venice & Julius Caesar Act Analysis',
      'Java OOP Principles, Arrays & String Handling'
    ],
    faqs: [
      { question: 'Do you cover Computer Applications (Java) for ICSE Class 10?', answer: 'Yes! We have specialized Java programmers who teach object-oriented programming, user-defined methods, string handling, and array manipulation from scratch with 100% lab code execution.' },
      { question: 'How do you handle the extensive ICSE English Literature syllabus?', answer: 'Our English literature masters provide scene-by-scene summaries, thematic questions, character sketches, and quotation memorization strategies for prescribed CISCE texts.' }
    ],
    metaTitle: 'ICSE Online Tuition Classes | Class 1 to 12 | VLearnPro',
    metaDescription: 'Achieve top marks in ICSE & ISC board exams with 1-on-1 online tutoring. Structured practice in Maths, Physics, Chem & English. Claim your free demo today.',
    primaryKeyword: 'ICSE Online Tuition'
  },

  igcse: {
    id: 'igcse',
    name: 'Cambridge IGCSE Online Tuition',
    shortName: 'IGCSE',
    tagline: 'World-Class Cambridge & Edexcel IGCSE Mastery (Core & Extended)',
    grades: 'Grades 6 - 11',
    badge: 'International Gold Standard',
    description: 'Excel in Cambridge Assessment International Education (CAIE) & Pearson Edexcel IGCSE exams. Tailored 1-on-1 coaching for 0580/0607 Maths, 0625 Physics, 0620 Chemistry, 0610 Biology, Economics, and Computer Science.',
    heroHighlight: 'Over 92% of our IGCSE students achieve A* and A grades across Cambridge & Edexcel exams.',
    stats: [
      { label: 'A* & A Distinction', value: '92.4%' },
      { label: 'Avg Grade Boost', value: '2.5 Grades' },
      { label: 'Past Papers Drilled', value: '15,000+' },
      { label: 'CAIE Examiners', value: 'Certified' }
    ],
    overview: [
      'Cambridge IGCSE requires strict alignment with official mark schemes, command term literacy, and application of theory to unfamiliar problem scenarios.',
      'Our 1-on-1 live sessions cover both Core and Extended syllabi across CAIE and Edexcel specifications, equipping students with past-paper strategies, examiner tips, and time management skills.'
    ],
    keyFeatures: [
      { title: 'Paper-by-Paper Drill Strategy', description: 'Targeted preparation for Paper 2 (Multiple Choice), Paper 4 (Extended Theory), and Paper 6 (Alternative to Practical).' },
      { title: 'Command Term Mastery', description: 'Training on precise CAIE command terms (State, Describe, Explain, Calculate, Suggest) to secure maximum marks.' }
    ],
    curriculumStructure: [
      { stage: 'Lower Secondary (Grades 6-8)', grades: 'Grades 6 to 8', focus: 'Foundational algebra, scientific enquiry, and literary analysis for IGCSE readiness.', keySubjects: ['Checkpoint Maths', 'Checkpoint Science', 'English ESL/EFL', 'Global Perspectives'] },
      { stage: 'IGCSE Years 1 & 2 (Grades 9-11)', grades: 'Grades 9 to 11', focus: 'Intensive Core/Extended syllabus coverage and past paper drills.', keySubjects: ['Maths 0580 / 0607', 'Physics 0625', 'Chemistry 0620', 'Biology 0610', 'Computer Science 0478', 'Economics 0455'] }
    ],
    examHighlights: [
      'Comprehensive coverage of past 15 years Cambridge & Edexcel IGCSE exam papers.',
      'Alternative to Practical (Paper 6) lab experiment simulation drills.'
    ],
    pedagogyPoints: [
      'Diagnostic baseline test to map target grade goals.',
      'Step-by-step mark scheme alignment to prevent loss of method marks.'
    ],
    sampleTopics: [
      'Functions, Differentiation & Trigonometric Equations (0580/0606)',
      'Kinematics, Electricity & Thermal Physics (0625)',
      'Stoichiometry, Organic Chemistry & Electrolysis (0620)'
    ],
    faqs: [
      { question: 'Do you cover both Cambridge (CAIE) and Edexcel IGCSE boards?', answer: 'Yes! Our tutors are certified for both CAIE (0580, 0625, 0620, etc.) and Pearson Edexcel IGCSE (9-1 grading systems) and use specification-specific past paper sets.' },
      { question: 'What is your strategy for Cambridge Additional Mathematics (0606)?', answer: 'Add Maths requires strong calculus, circular measure, and trigonometric identities. We dedicate extra hours to multi-step problem solving and non-standard problem modeling.' }
    ],
    metaTitle: 'Cambridge IGCSE Online Tuition | Expert Tutors | VLearnPro',
    metaDescription: 'Excel in Cambridge IGCSE exams with 1-on-1 online tutoring. Targeted past paper practice & concept mastery in Maths, Physics & Chem. Book your free demo.',
    primaryKeyword: 'IGCSE Online Tuition'
  },

  ib: {
    id: 'ib',
    name: 'IB (International Baccalaureate) Online Tuition',
    shortName: 'IB World',
    tagline: 'Elite IB DP (HL/SL), MYP & PYP Mentorship from Certified IB Educators',
    grades: 'Grades 1 - 12',
    badge: 'Global Ivy League Pathway',
    description: 'Transform your IB journey with certified IB DP Examiners and MYP specialists. Comprehensive 1-on-1 support for Math AA/AI (HL/SL), Physics, Chemistry, Biology, Economics, TOK, and Internal Assessment (IA) mentorship.',
    heroHighlight: 'Our IB Diploma candidates achieve an average score of 39.4 points, far exceeding the global average.',
    stats: [
      { label: 'Avg IB Score', value: '39.4 Pts' },
      { label: '7 Score Rate', value: '41.2%' },
      { label: 'IA 7/7 Pass Rate', value: '96.8%' },
      { label: 'IB Examiners', value: 'Top Faculty' }
    ],
    overview: [
      'The IB Diploma Programme is widely recognized as the most academically rigorous secondary curriculum globally. Success requires not only subject knowledge but also analytical writing, research synthesis, and inquiry-based thinking.',
      'Our IB specialist tutors guide students through Criterion A-D rubrics, Internal Assessments (IAs), TOK Exhibition & Essay, and Paper 1, 2 & 3 exam preparation.'
    ],
    keyFeatures: [
      { title: 'Ethical IA & Extended Essay Mentorship', description: 'Step-by-step research topic selection, data modeling, structure feedback, and rubric evaluation.' },
      { title: 'Command Terms & Mark Scheme Literacy', description: 'Training on precise IB command terms (Evaluate, Discuss, Deduce, Explain) to unlock level 7 descriptors.' },
      { title: 'Theory of Knowledge (TOK) & EE Support', description: 'Structured brainstorming and academic structuring for TOK Exhibition, TOK Essay, and Extended Essay.' }
    ],
    curriculumStructure: [
      { stage: 'IB PYP (Grades 1-5)', grades: 'Grades 1 to 5', focus: 'Transdisciplinary inquiry, unit of inquiry projects, and foundational math/language fluency.', keySubjects: ['Inquiry Units', 'Mathematics Concepts', 'Language Arts', 'Social Studies'] },
      { stage: 'IB MYP (Grades 6-10)', grades: 'Grades 6 to 10', focus: 'Criterion-referenced assessments (Criteria A, B, C, D) and eAssessment preparation.', keySubjects: ['MYP Extended Maths', 'Integrated / Discrete Sciences', 'Individuals & Societies', 'Language & Literature'] },
      { stage: 'IB DP Year 1 & 2 (Grades 11-12)', grades: 'Grades 11 to 12', focus: 'Rigorous HL & SL preparation, Paper 1/2/3 mock examinations, and IA finalization.', keySubjects: ['Math AA/AI (HL/SL)', 'Physics (HL/SL)', 'Chemistry (HL/SL)', 'Biology (HL/SL)', 'Economics (HL/SL)', 'Computer Science (HL/SL)'] }
    ],
    examHighlights: [
      'Full past paper drills spanning the last 15 examination sessions with official IB mark schemes.',
      'Paper 3 data-based questions and experimental analysis practice for Science subjects.',
      'Comprehensive preparation for the May and November IB examination sessions.'
    ],
    pedagogyPoints: [
      'Conceptual inquiry model—connecting abstract theoretical formulas to real-world global issues.',
      'Mastery of Graphic Display Calculators (TI-Nspire CX II and Casio fx-CG50).',
      'Criterion-by-criterion assessment feedback matching official IBO grading rubrics.'
    ],
    sampleTopics: [
      'Calculus, Proofs & Differential Equations (Math AA HL)',
      'Quantum & Nuclear Physics, Fields & Astrophysics (Physics HL)',
      'Organic Chemistry Mechanisms & Spectroscopy (Chemistry HL)',
      'Molecular Genetics & Neurobiology (Biology HL)',
      'Microeconomics, Macro Policy & Trade Protectionism (Economics HL)'
    ],
    faqs: [
      { question: 'Do you help with IB Internal Assessments (IA)?', answer: 'Yes. Our tutors provide ethical academic mentorship to help students brainstorm compelling research questions, organize experimental or mathematical data, and format their reports according to official IB criteria.' },
      { question: 'What is the difference between Maths AA and Maths AI tuition?', answer: 'Maths AA focuses on pure theoretical proofs and advanced calculus, whereas Maths AI emphasizes real-world statistics and modeling with technology. We have dedicated faculty for both syllabi.' }
    ],
    metaTitle: 'IB Diploma Online Tutoring | MYP & DP Tutors | VLearnPro',
    metaDescription: 'High-impact 1-on-1 online tutoring for IB DP & MYP students. Expert guidance for Internal Assessments, TOK & Higher Level subjects. Book a free trial today.',
    primaryKeyword: 'IB Online Tuition'
  },

  cambridge: {
    id: 'cambridge',
    name: 'Cambridge International Online Tuition',
    shortName: 'Cambridge',
    tagline: 'CAIE Primary, Lower Secondary Checkpoint, O-Level & A-Level Pathways',
    grades: 'Grades 1 - 13',
    badge: 'Cambridge Pathway Certified',
    description: 'Holistic 1-on-1 tutoring across the full Cambridge Pathway: Cambridge Primary, Lower Secondary Checkpoint, Cambridge O Level, and Cambridge International AS & A Levels.',
    heroHighlight: 'Ranked #1 for Cambridge Pathway online tuition with top scores in Checkpoint and Cambridge Learner Awards.',
    stats: [
      { label: 'Checkpoint 6.0 Scores', value: '88.5%' },
      { label: 'Cambridge Awards', value: '14 Top in World' },
      { label: 'Past Papers Bank', value: '35,000+' },
      { label: 'Experienced Faculty', value: '100% CAIE Trained' }
    ],
    overview: [
      'The Cambridge Pathway is respected by world-renowned universities for developing deep subject knowledge, intellectual enquiry, and analytical rigor.',
      'Our CAIE-certified tutors guide learners step-by-step from early Primary checkpoint fundamentals through rigorous O-Level and Advanced Level milestones.',
      'We emphasize learner autonomy, rigorous problem solving, and precise scientific writing.'
    ],
    keyFeatures: [
      { title: 'Complete Cambridge Pathway Integration', description: 'Seamless academic continuity from Primary Checkpoint through Lower Secondary to AS & A Levels.' },
      { title: 'Official CAIE Endorsed Resources', description: 'Curriculum-mapped worksheets, learner guides, and progressive checkpoint benchmark testing.' },
      { title: 'Specialized Diagnostic Checkpoints', description: 'Identify learning gaps across Stage 1 to Stage 9 with comprehensive progress rubrics.' },
      { title: 'Global University Preparation', description: 'Preparing students for entry into Oxford, Cambridge, Russell Group, and Ivy League universities.' }
    ],
    curriculumStructure: [
      { stage: 'Cambridge Primary (Grades 1-5)', grades: 'Grades 1 to 5', focus: 'Stage 1-6 foundational numeracy, scientific inquiry, and global English literacy.', keySubjects: ['Cambridge Primary Maths', 'Cambridge Primary Science', 'Global Perspectives', 'English as 1st/2nd Language'] },
      { stage: 'Cambridge Lower Secondary (Grades 6-8)', grades: 'Grades 6 to 8', focus: 'Stage 7-9 Checkpoint exam preparation, structured algebra, and scientific method.', keySubjects: ['Checkpoint Mathematics', 'Checkpoint Science', 'English Language', 'ICT & Computing'] },
      { stage: 'Cambridge Upper Secondary (Grades 9-10)', grades: 'Grades 9 to 10', focus: 'Cambridge O Level and IGCSE examination readiness with full syllabus drilling.', keySubjects: ['O Level Mathematics (4024)', 'Physics (5054)', 'Chemistry (5070)', 'Biology (5090)', 'Computer Science (2210)'] },
      { stage: 'Cambridge Advanced (Grades 11-13)', grades: 'Grades 11 to 13', focus: 'AS & A Level deep specialization and past paper mastery.', keySubjects: ['AS/A Level Pure Maths & Mechanics (9709)', 'Physics (9702)', 'Chemistry (9701)', 'Biology (9700)', 'Economics (9708)'] }
    ],
    examHighlights: [
      'Comprehensive Stage 6 and Stage 9 Checkpoint diagnostic mock tests.',
      'Thorough analysis of CAIE Principal Examiner reports for student insight.',
      'Timed paper solving under authentic exam condition simulators.'
    ],
    pedagogyPoints: [
      'Inquiry-driven teaching style fostering independent problem formulation.',
      'Active learning with interactive simulations for abstract physical and chemical processes.',
      'Bi-weekly progress checks shared with parents detailing syllabus progress.'
    ],
    sampleTopics: [
      'Pure Mathematics 1 & 3: Polynomials, Calculus & Complex Numbers',
      'Mechanics & Statistics (9709 Papers 4 & 5)',
      'A-Level Practical Skills Paper 3 & Paper 5 Analysis',
      'Advanced Organic Synthesis & Transition Elements (9701)',
      'Cambridge Checkpoint Science Stage 9 Energy & Ecosystems'
    ],
    faqs: [
      { question: 'Do you prepare students for Cambridge Checkpoint examinations?', answer: 'Yes! We have specialized Checkpoint packages for Primary (Stage 6) and Lower Secondary (Stage 9) covering Mathematics, Science, and English.' },
      { question: 'Are your tutors certified in Cambridge Assessment specifications?', answer: 'Yes, our educators have undergone official Cambridge teacher training and possess years of direct international school teaching experience.' }
    ],
    metaTitle: 'Cambridge A Level Online Tuition | Expert Tutors | VLearnPro',
    metaDescription: 'Prepare for Cambridge AS & A-Level exams with expert 1-on-1 online tutors. Specialized coaching in Further Maths, Physics & Chemistry. Book a free demo today.',
    primaryKeyword: 'Cambridge Online Tuition'
  },

  gcse: {
    id: 'gcse',
    name: 'UK GCSE Online Tuition',
    shortName: 'GCSE',
    tagline: 'Targeting Grade 9s across AQA, Edexcel & OCR UK Examination Boards',
    grades: 'Years 9 - 11 (Ages 13-16)',
    badge: 'UK Curriculum Specialist',
    description: 'Targeted 1-on-1 GCSE tuition designed specifically for UK and British international school students. Master AQA, Pearson Edexcel, and OCR specifications across Maths (Higher & Foundation), Combined/Triple Science, English, and Computing.',
    heroHighlight: '91% of our UK GCSE students achieve Grade 8 or Grade 9 (equivalent to A*).',
    stats: [
      { label: 'Grade 8-9 Achievers', value: '91.2%' },
      { label: 'UK Boards Covered', value: 'AQA, Edexcel, OCR' },
      { label: 'Past Papers Practiced', value: '22,000+' },
      { label: 'Target Grade Jump', value: '+2.4 Grades' }
    ],
    overview: [
      'The UK GCSE 9-1 grading system demands precise exam technique, mastery of required practicals, and deep analytical essay structuring.',
      'Our UK-based and UK-curriculum specialist tutors provide targeted coaching aligned strictly to your specific exam board syllabus (AQA / Edexcel / OCR).',
      'We specialize in helping students leap from Grade 5/6 to solid Grade 8 and 9s ahead of their Year 11 final exams.'
    ],
    keyFeatures: [
      { title: 'Exam Board Tailored Teaching', description: 'Strict separation of AQA, Edexcel, and OCR nuances, question styles, and formula requirements.' },
      { title: 'Required Practicals Breakdown', description: 'Mastering the 10+ required practicals in GCSE Physics, Chemistry, and Biology that account for 15% of paper marks.' },
      { title: 'Higher Tier Mastery', description: 'Unlocking tough Grade 8/9 questions in algebraic fractions, circle theorems, and 3D trigonometry.' },
      { title: 'English Literature Text Mastery', description: 'An Inspector Calls, Macbeth, Romeo and Juliet, A Christmas Carol, and Power & Conflict Poetry analysis.' }
    ],
    curriculumStructure: [
      { stage: 'Year 9 (GCSE Foundation)', grades: 'Year 9', focus: 'Building strong subject bridges from KS3 into GCSE core concepts.', keySubjects: ['KS3/GCSE Maths', 'KS3/GCSE Science', 'English Language Skills', 'History / Geography'] },
      { stage: 'Year 10 (Syllabus Acceleration)', grades: 'Year 10', focus: 'Completing 70% of the GCSE specification with regular unit assessments.', keySubjects: ['GCSE Maths Higher', 'Triple Science / Combined Trilogy', 'English Literature', 'Computer Science'] },
      { stage: 'Year 11 (Mock Exams & Final GCSEs)', grades: 'Year 11', focus: 'Intensive past paper marathons, timing strategies, and Grade 9 targeted revision.', keySubjects: ['Full Past Paper Drilling', 'Exam Board Specific Technique', 'Targeted Weak Topic Masterclasses'] }
    ],
    examHighlights: [
      'Full coverage of non-calculator Paper 1 and calculator Papers 2 & 3 for Maths.',
      'Extensive essay structure frameworks (PEEL / PETAL) for English Literature and Language.',
      'Detailed focus on 6-mark extended response science questions.'
    ],
    pedagogyPoints: [
      'Regular timed homework matching official UK exam board format.',
      'Step-by-step mark breakdown highlighting where students routinely lose silly marks.',
      'Direct parent updates aligned with UK school reporting terms and mock windows.'
    ],
    sampleTopics: [
      'Circle Theorems, Vectors & Iteration (Maths Higher)',
      'Energy Transfers, Electricity & Radioactivity (Physics AQA)',
      'Quantitative Chemistry & Electrolysis (Chemistry AQA)',
      'Genetics, Ecology & Bioenergetics (Biology Edexcel)',
      '19th-Century Novel Context & Poetry Comparison'
    ],
    faqs: [
      { question: 'Do you cater to both Triple Science and Combined Science (Trilogy)?', answer: 'Yes! We provide tailored lesson plans whether your child is taking Triple Science (separate Physics, Chem, Bio GCSEs) or Double Award Combined Science.' },
      { question: 'Can you help with UK Year 11 November and January Mock exams?', answer: 'Yes, our mock exam booster programs are specially scheduled to peak student performance ahead of school mocks.' }
    ],
    metaTitle: 'UK GCSE Online Tuition (Grade 9 Focus) | AQA, Edexcel & OCR Tutors',
    metaDescription: 'Specialist 1-on-1 GCSE online tuition for UK & international students. Master AQA, Edexcel & OCR Maths, Science, English & Computing. 91% Grade 8-9 rate.',
    primaryKeyword: 'GCSE Online Tuition'
  },

  'a-level': {
    id: 'a-level',
    name: 'A-Level Online Tuition',
    shortName: 'A-Level',
    tagline: 'Elite 1-on-1 Mentorship for UK & International A-Level Exams (A* Focus)',
    grades: 'Years 12 - 13 (Ages 16-19)',
    badge: 'University Gateway Specialist',
    description: 'High-caliber 1-on-1 tuition for GCE A-Levels & International A-Levels (IAL). Master AQA, Edexcel, OCR, and CAIE specifications across Pure Maths, Further Maths, Physics, Chemistry, Biology, Economics, and Computer Science.',
    heroHighlight: '89.4% of our A-Level students achieve A* or A grades, unlocking top choice offers at Oxford, Cambridge, Imperial, UCL, and Ivy League universities.',
    stats: [
      { label: 'A* / A Rate', value: '89.4%' },
      { label: 'Russell Group Offers', value: '96.8%' },
      { label: 'Step / MAT / TMUA Prep', value: 'Available' },
      { label: 'Senior Lecturers', value: 'Top 1.8%' }
    ],
    overview: [
      'A-Levels represent one of the most intellectually demanding secondary school credentials globally, requiring deep theoretical understanding and synoptic problem solving.',
      'Our tutors are Oxford, Cambridge, and Imperial alumni who have achieved straight A*s themselves and possess years of subject coaching mastery.',
      'We combine thorough syllabus coverage with university admissions test preparation (STEP, MAT, TMUA, UCAT, BMAT).'
    ],
    keyFeatures: [
      { title: 'Pure Mathematics & Further Maths Expertise', description: 'Advanced calculus, differential equations, complex numbers, matrices, and hyper-challenging mechanics.' },
      { title: 'Synoptic Science Coaching', description: 'Connecting cross-modular concepts to solve novel 6-mark multi-step application questions.' },
      { title: 'University Admissions Exam Sync', description: 'Integrated coaching for Oxford/Cambridge MAT, TMUA, STEP, and NSAA entrance papers.' },
      { title: 'Personal Statement & Academic Reference Guidance', description: 'Mentorship on wider subject reading and academic projects for UCAS applications.' }
    ],
    curriculumStructure: [
      { stage: 'Year 12 (AS / Year 1 A-Level)', grades: 'Year 12', focus: 'Deep conceptual grounding, transition from GCSE to A-Level rigour, and AS mocks.', keySubjects: ['Pure Maths (Year 1)', 'Statistics & Mechanics', 'Physical & Inorganic Chemistry', 'Foundations in Physics'] },
      { stage: 'Year 13 (A2 / Final A-Level)', grades: 'Year 13', focus: 'Complex A2 topics, synoptic linkages, full past paper series drilling, and university offer securing.', keySubjects: ['Pure Maths (Year 2)', 'Further Pure & Decision Maths', 'Organic Synthesis & Spectroscopy', 'Fields, Nuclear & Particle Physics', 'Macro/Micro Synoptic Economics'] }
    ],
    examHighlights: [
      'Complete mastery of modular (IAL) and linear (UK GCE) exam formats.',
      'Over 20 years of classified exam questions and shadow papers practiced.',
      'Rigorous time-management coaching for 2-hour high-pressure papers.'
    ],
    pedagogyPoints: [
      'Socratic dialogue that challenges students to derive formulas from first principles.',
      'Step-by-step error analysis log tracking every missed method or accuracy mark.',
      'Bi-weekly exam simulations with detailed examiner annotations.'
    ],
    sampleTopics: [
      'Integration by Parts, Substitution & Differential Equations',
      'Complex Numbers, De Moivre’s Theorem & Matrix Transformations',
      'Thermodynamics, Electrode Potentials & NMR Spectroscopy',
      'Gravitational, Electric & Magnetic Fields (Synoptic Physics)',
      'Behavioural Economics & Financial Market Market Failure'
    ],
    faqs: [
      { question: 'Do you teach Further Mathematics for students targeting STEM at Cambridge/Imperial?', answer: 'Yes! We have specialized Further Maths tutors who cover Further Pure 1-4, Further Mechanics, and Decision Maths at an elite level.' },
      { question: 'Do you cover both UK Linear A-Levels and International Modular A-Levels (IAL)?', answer: 'Yes, we have separate syllabus-specific pathways for UK domestic linear exams (AQA/Edexcel/OCR) and International modular sessions (Edexcel IAL / CAIE).' }
    ],
    metaTitle: 'A-Level Online Tuition (A* Focus) | Expert Maths, Science & Economics Tutors',
    metaDescription: 'Premier 1-on-1 A-Level online tuition for UK & International A-Levels. Master AQA, Edexcel & CAIE Pure Maths, Further Maths, Physics & Chemistry. 89% A*/A.',
    primaryKeyword: 'A Level Online Tuition'
  },

  'singapore-curriculum': {
    id: 'singapore-curriculum',
    name: 'Singapore Curriculum Online Tuition',
    shortName: 'Singapore MOE',
    tagline: 'World-Renowned Singapore Math Heuristics, Science & PSLE / O-Level Mastery',
    grades: 'Primary 1 to Secondary 4 / JC',
    badge: 'Global PISA #1 Benchmark',
    description: 'Master the world’s gold standard in mathematics and science education. Specialized 1-on-1 coaching in Singapore Math Bar Model heuristics, MOE Science open-ended answering techniques (C-E-R), PSLE preparation, and GCE O-Level E-Math & A-Math.',
    heroHighlight: 'Our Singapore curriculum students consistently score AL1 in PSLE and distinction A1/A2 in GCE O-Levels.',
    stats: [
      { label: 'PSLE AL1-AL2 Rate', value: '87.6%' },
      { label: 'GCE O-Level A1/A2', value: '91.8%' },
      { label: 'Heuristics Mastered', value: '11 Core Types' },
      { label: 'MOE Syllabus Sync', value: '100%' }
    ],
    overview: [
      'Singapore’s Ministry of Education (MOE) curriculum ranks #1 in the world on global PISA rankings due to its rigorous Concrete-Pictorial-Abstract (CPA) pedagogical framework.',
      'Our Singapore-trained tutors specialize in non-routine problem-solving heuristics (Model Method, Working Backwards, Supposition, Excess & Shortage) that perplex standard tutoring services.',
      'We cater to both local Singapore students and international expatriate families pursuing the Singapore curriculum worldwide.'
    ],
    keyFeatures: [
      { title: 'Singapore Math CPA & Model Drawing Mastery', description: 'Step-by-step visualization of complex word problems using bar models and systematic algebraic representations.' },
      { title: 'MOE Science CER (Claim-Evidence-Reasoning)', description: 'Mastering open-ended questions using precise scientific keywords and deduction structures.' },
      { title: 'Top School Exam Papers Practice (Prelims)', description: 'Direct access to past prelim papers from Raffles, Nanyang, ACS, Tao Nan, and Catholic High.' },
      { title: 'A-Math & E-Math GCE O-Level Rigour', description: 'Advanced trigonometry, logarithmic proofs, and calculus for Secondary 3 and 4 students.' }
    ],
    curriculumStructure: [
      { stage: 'Lower Primary (P1 - P3)', grades: 'Primary 1 to 3', focus: 'Concrete-Pictorial foundations, number bonds, mental math fluency, and basic model drawing.', keySubjects: ['Singapore Primary Math', 'Foundational English & Phonics'] },
      { stage: 'Upper Primary & PSLE (P4 - P6)', grades: 'Primary 4 to 6', focus: 'Advanced heuristics, 4-5 step non-routine word problems, and PSLE exam simulation under new AL scoring.', keySubjects: ['Primary Math (PSLE)', 'Primary Science (Open-Ended CER)', 'English Language (Synthesis & Comprehension)'] },
      { stage: 'Lower Secondary (Sec 1 - 2)', grades: 'Secondary 1 to 2', focus: 'Transition from bar models to formal algebraic manipulation and integrated sciences.', keySubjects: ['Lower Sec Mathematics', 'Lower Sec Science (Physics, Chem, Bio)'] },
      { stage: 'Upper Secondary & O-Levels (Sec 3 - 4)', grades: 'Secondary 3 to 4', focus: 'GCE O-Level Elementary Mathematics (4052), Additional Mathematics (4049), and Pure Sciences.', keySubjects: ['E-Math', 'A-Math', 'Pure Physics', 'Pure Chemistry', 'Pure Biology'] }
    ],
    examHighlights: [
      'Complete mastery of PSLE Paper 2 challenging word problems.',
      'Rigorous training on Singapore GCE O-Level 4052 & 4049 past papers.',
      'Top primary/secondary school preliminary examination series drills.'
    ],
    pedagogyPoints: [
      'Systematic categorization of word problems by heuristic type for intuitive recall.',
      'Real-time digital stylus drawing for visual model construction during live sessions.',
      'Error log pinpointing conceptual misunderstandings vs transfer errors.'
    ],
    sampleTopics: [
      'Constant Difference, Total & Part Unchanged Heuristics',
      'Assumption / Supposition Method (Chicken & Rabbit problems)',
      'Forces, Transfer of Energy & Plant Systems (CER Open-Ended)',
      'Trigonometric Identities, R-Formula & Differentiation (A-Math)',
      'Coordinate Geometry, Binomial Theorem & Logarithms'
    ],
    faqs: [
      { question: 'Do you teach the bar model method for Primary Math word problems?', answer: 'Yes! All our Singapore Math specialists are trained in the CPA approach and bar modeling techniques to simplify even the most challenging 5-mark PSLE questions.' },
      { question: 'Can international students not living in Singapore take Singapore Math tuition?', answer: 'Absolutely! Many parents in the US, UK, and UAE enroll their children in our Singapore Math classes to build superior mathematical reasoning skills.' }
    ],
    metaTitle: 'Singapore Curriculum Online Tuition | Singapore Math & PSLE / O-Level Tutors',
    metaDescription: 'World-class 1-on-1 Singapore Math & MOE Science online tuition. Master Model Method heuristics, PSLE AL1 scoring, and GCE O-Level A-Math with expert tutors.',
    primaryKeyword: 'Singapore Curriculum Tuition'
  },

  'american-curriculum': {
    id: 'american-curriculum',
    name: 'American Curriculum & AP Online Tuition',
    shortName: 'US Common Core / AP',
    tagline: 'Common Core, Honors & Advanced Placement (AP) Score 5 Preparation',
    grades: 'Kindergarten to Grade 12 (K-12)',
    badge: 'US College Board Aligned',
    description: 'Elite 1-on-1 tutoring for US Common Core State Standards (CCSS), NGSS Science, High School Honors courses, and College Board Advanced Placement (AP) exams. Boost GPA, master SAT/ACT testing, and prepare for top US university admissions.',
    heroHighlight: '88.7% of our AP students score a 5 on their May College Board AP exams.',
    stats: [
      { label: 'AP Score 5 Rate', value: '88.7%' },
      { label: 'GPA Improvement', value: '+0.8 Avg' },
      { label: 'SAT Score Boost', value: '+190 Pts' },
      { label: 'College Board Prep', value: '28 AP Subjects' }
    ],
    overview: [
      'The American curriculum emphasizes critical reasoning, project-based inquiry, and standardized academic benchmarks across K-12 schooling.',
      'Our US-specialist educators help students achieve top unweighted and weighted GPAs while mastering challenging AP coursework and standardized tests (SAT, ACT, PSAT).',
      'Classes are scheduled across US timezones (EST, CST, MST, PST) for seamless family convenience.'
    ],
    keyFeatures: [
      { title: 'College Board AP Exam Mastery (Score 5 Focus)', description: 'Targeted preparation for AP Calculus AB/BC, AP Physics 1/C, AP Chemistry, AP Biology, AP Computer Science A, and AP Macro/Micro.' },
      { title: 'Common Core & NGSS Alignment', description: 'Deep standards-based learning for elementary and middle school English Language Arts and Mathematics.' },
      { title: 'High School Honors & GPA Booster', description: 'Comprehensive homework, quiz, and project mentorship to ensure consistent A grades across school transcripts.' },
      { title: 'Digital SAT & ACT Test Prep Integration', description: 'Adaptive testing strategies, Desmos calculator shortcuts, and speed reading tactics for high-scoring standardized test results.' }
    ],
    curriculumStructure: [
      { stage: 'Elementary School (Grades 1-5)', grades: 'Grades 1 to 5', focus: 'Common Core math fluency, phonics, reading comprehension, and introductory earth/life sciences.', keySubjects: ['Common Core Math', 'ELA Reading & Writing', 'NGSS Science', 'Creative Coding (Scratch)'] },
      { stage: 'Middle School (Grades 6-8)', grades: 'Grades 6 to 8', focus: 'Pre-Algebra, Algebra 1, physical/life sciences, and argumentative essay writing.', keySubjects: ['Pre-Algebra & Algebra 1', 'Middle School Science', 'ELA Literature & Essays', 'Python Coding'] },
      { stage: 'High School (Grades 9-10)', grades: 'Grades 9 to 10', focus: 'Geometry, Algebra 2, Honors Chemistry/Biology, and PSAT foundations.', keySubjects: ['Honors Geometry & Algebra 2', 'Honors Biology & Chemistry', 'World History', 'AP Computer Science Principles'] },
      { stage: 'Senior High & APs (Grades 11-12)', grades: 'Grades 11 to 12', focus: 'Pre-Calculus, AP courses, College Board exam drills, and Digital SAT/ACT testing.', keySubjects: ['AP Calculus AB/BC', 'AP Physics 1/C', 'AP Chemistry & Biology', 'AP Computer Science A', 'AP Economics', 'Digital SAT Prep'] }
    ],
    examHighlights: [
      'Classified Free Response Questions (FRQ) and Multiple Choice Question (MCQ) drills for all AP subjects.',
      'College Board scoring rubric alignment to secure full points on FRQs.',
      'Practice on the official Digital SAT Bluebook platform.'
    ],
    pedagogyPoints: [
      'Interactive Socratic instruction encouraging students to articulate hypotheses.',
      'Mastery of TI-84 Plus CE and online Desmos testing calculators.',
      'Regular GPA tracking and milestone assessments shared with parents.'
    ],
    sampleTopics: [
      'AP Calculus: Limits, Derivatives, Integrals & Series Convergence',
      'AP Physics C: Mechanics, Rotational Dynamics & Electromagnetism',
      'AP Chemistry: Equilibrium, Kinetics & Thermodynamics',
      'AP CS A: Java OOP, Recursion, 2D Arrays & Searching/Sorting Algorithms',
      'Digital SAT Math: Advanced Algebra, Problem Solving & Data Analysis'
    ],
    faqs: [
      { question: 'When should my child start preparing for AP exams in May?', answer: 'We recommend starting AP tuition by September/October for year-long support, or January for our intensive 16-week Score-5 AP booster bootcamp.' },
      { question: 'Do you offer flexible scheduling for students in US time zones?', answer: 'Yes! We have full tutoring availability across all US time zones (Eastern, Central, Mountain, and Pacific) after school and on weekends.' }
    ],
    metaTitle: 'American Curriculum & AP Online Tuition | US Common Core & AP Tutors',
    metaDescription: 'Elite 1-on-1 American Curriculum & AP online tuition. Master US Common Core Math, AP Calculus, AP Sciences, AP CS & Digital SAT with top US-aligned tutors.',
    primaryKeyword: 'American Curriculum Tuition'
  }
};
