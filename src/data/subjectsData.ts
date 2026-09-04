import { SubjectInfo, SubjectId } from '../types';

export const SUBJECTS_DATA: Record<SubjectId, SubjectInfo> = {
  maths: {
    id: 'maths',
    name: 'Online Maths Classes',
    iconName: 'Calculator',
    tagline: 'From Mental Math to Advanced Calculus & Olympiad Problem-Solving',
    grades: 'Grade 1 - 12',
    category: 'core',
    description: 'Transform mathematical anxiety into effortless problem-solving mastery. 1-on-1 personalized lessons covering foundational arithmetic, Singapore bar modeling, algebraic reasoning, trigonometry, differential calculus, and competitive Olympiads.',
    heroHighlight: '96.8% of students improve by at least 2 letter grades in Mathematics within 12 weeks of 1-on-1 tuition.',
    stats: [
      { label: 'Grade Jump', value: '+2.1 Grades' },
      { label: 'Problems Solved', value: '1.2M+' },
      { label: 'Olympiad Medals', value: '340+' },
      { label: 'Math Anxiety Drop', value: '98%' }
    ],
    learningOutcomes: [
      'Eliminate calculation errors and build lightning-fast mental math speed.',
      'Master visual bar modeling and Singapore Math heuristics for word problems.',
      'Develop rock-solid understanding of algebraic transformations, geometry proofs, and trigonometry.',
      'Master advanced calculus (derivatives, integrals, vectors) for senior high school and AP/IB DP levels.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 1-5 (Primary)', title: 'Foundational Numeracy & Visual Math', topics: ['Place Value & Number Bonds', 'Fraction Visualisation', 'Singapore Bar Models', 'Time, Money & Geometry', 'Mental Math Strategies'], methodology: 'Concrete-Pictorial-Abstract (CPA) framework with interactive gamified manipulatives.' },
      { gradeRange: 'Grades 6-8 (Middle School)', title: 'Pre-Algebra & Deductive Logic', topics: ['Linear Equations & Inequalities', 'Ratios, Proportions & Percentages', 'Coordinate Geometry', 'Surface Area & Volume', 'Probability & Data'], methodology: 'Step-by-step problem deconstruction connecting real-world scenarios to algebraic equations.' },
      { gradeRange: 'Grades 9-10 (Secondary / Board Prep)', title: 'Advanced Algebra, Geometry & Trig', topics: ['Quadratic Equations & Polynomials', 'Trigonometric Identities & Heights', 'Circle Theorems & Geometric Proofs', 'Statistics & Distributions', 'Past Board Exam Papers'], methodology: 'Timed past paper marathons, error-analysis journals, and marking scheme optimization.' },
      { gradeRange: 'Grades 11-12 (Senior / AP / IB / A-Level)', title: 'Calculus, Vectors & Pure Mathematics', topics: ['Limits, Differentiation & Integration', 'Differential Equations', '3D Geometry & Vectors', 'Complex Numbers & Matrices', 'Mechanics & Probability Distributions'], methodology: 'Rigorous first-principles derivations and graphic display calculator (GDC/Desmos) mastery.' }
    ],
    pedagogyFramework: [
      { title: 'Diagnosis First', description: 'Pinpoint precise gaps from previous years before introducing new complex topics.' },
      { title: 'Socratic Guided Discovery', description: 'Guide the student to uncover mathematical theorems rather than memorizing rote steps.' },
      { title: 'Topical Spaced Repetition', description: 'Weekly interleaved quizzes that retain long-term mathematical fluency.' }
    ],
    boardsCovered: ['CBSE', 'ICSE', 'IGCSE', 'IB (AA & AI)', 'Cambridge', 'GCSE', 'A-Level', 'Singapore MOE', 'US Common Core / AP'],
    tutorProfileHighlight: 'Taught by university math medalists, IITians, and certified international school math department heads.',
    faqs: [
      { question: 'My child struggles with word problems. How do you address this?', answer: 'We apply the proven Singapore Bar Modeling method, teaching students how to draw visual representations of word problem relations before converting them to algebraic equations.' },
      { question: 'Do you prepare students for AMC 8/10, Math Kangaroo, and IMO Olympiads?', answer: 'Yes! We have specialized Olympiad trainers who conduct advanced problem-solving workshops focused on non-routine mathematical reasoning.' }
    ],
    metaTitle: 'Online Maths Tuition Classes | 1-on-1 Tutors | VLearnPro',
    metaDescription: 'Build strong mathematical confidence with personalized 1-on-1 online tuition. Step-by-step problem solving for CBSE, ICSE, IB & IGCSE. Book a free demo.',
    primaryKeyword: 'Online Maths Classes'
  },

  science: {
    id: 'science',
    name: 'Online Science Classes for Kids',
    iconName: 'Sparkles',
    tagline: 'Fostering Scientific Curiosity, Hands-On Reasoning & Inquiry (Grades 1-8)',
    grades: 'Grade 1 - 8',
    category: 'science',
    description: 'Nurture your child’s innate scientific curiosity through inquiry-led science tutoring. Engaging digital simulations, real-world experiments, and conceptual mastery spanning physical, life, and earth sciences.',
    heroHighlight: 'Our science students develop strong deductive hypotheses, lab report structuring, and scientific literacy.',
    stats: [
      { label: 'Interactive Simulations', value: '500+' },
      { label: 'Curiosity Score Boost', value: '98%' },
      { label: 'Science Fair Winners', value: '180+' },
      { label: 'Syllabus Coverage', value: '100%' }
    ],
    learningOutcomes: [
      'Understand the "why" behind everyday natural phenomena rather than memorizing definitions.',
      'Master the scientific inquiry cycle: Hypothesis -> Experiment -> Observation -> Deduction.',
      'Build seamless foundational bridges into separated High School Physics, Chemistry, and Biology.',
      'Excel in NGSS, Cambridge Checkpoint, and school terminal science exams.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 1-3 (Early Primary)', title: 'Exploratory & Natural Science', topics: ['Living vs Non-Living Things', 'Habitats & Animal Adaptations', 'States of Matter (Water Cycle)', 'Light, Shadows & Sound', 'Simple Machines'], methodology: 'Visual storytelling, interactive PhET simulations, and home-safe mini experiments.' },
      { gradeRange: 'Grades 4-5 (Upper Primary)', title: 'Systems & Interdependence', topics: ['Human Digestive & Respiratory Systems', 'Electricity & Circuits', 'Ecosystems & Food Chains', 'Earth, Moon & Solar System', 'Forces & Motion'], methodology: 'Diagrammatic breakdown, hypothesis formulation, and CER (Claim-Evidence-Reasoning) answering.' },
      { gradeRange: 'Grades 6-8 (Middle School)', title: 'Integrated Physical & Life Sciences', topics: ['Cell Biology & Microorganisms', 'Atomic Structure & Chemical Changes', 'Energy Transformations & Heat Transfer', 'Forces, Pressure & Optics', 'Acids, Bases & Neutralization'], methodology: 'Transitioning to structured analytical science reporting, mathematical physics equations, and chemical symbols.' }
    ],
    pedagogyFramework: [
      { title: 'Virtual Laboratory Demonstrations', description: 'Interactive molecular models and circuit builders making invisible science concepts visible.' },
      { title: 'Claim-Evidence-Reasoning (CER)', description: 'Training students to formulate structured scientific answers with supporting data.' }
    ],
    boardsCovered: ['CBSE', 'ICSE', 'Cambridge Primary & Checkpoint', 'IB PYP & MYP', 'US NGSS', 'Singapore MOE Science'],
    tutorProfileHighlight: 'Passionate STEM educators, scientific researchers, and certified middle school science faculty.',
    faqs: [
      { question: 'Do you conduct practical lab experiments online?', answer: 'We utilize state-of-the-art interactive digital science lab simulators (PhET, Gizmos) where students manipulate variables, measure data, and test hypotheses safely in real-time.' }
    ],
    metaTitle: 'Online Science Tuition Classes | Physics & Chem | VLearnPro',
    metaDescription: 'Master Physics, Chemistry & Biology with dedicated 1-on-1 online Science tutors. Clear concepts, numerical practice & board exam prep. Book your free demo.',
    primaryKeyword: 'Online Science Classes'
  },

  physics: {
    id: 'physics',
    name: 'Online Physics Tuition',
    iconName: 'Zap',
    tagline: 'Demystifying Mechanics, Waves, Electromagnetism & Modern Physics',
    grades: 'Grade 8 - 12',
    category: 'science',
    description: 'Master secondary and senior high school Physics with clarity. Deep mathematical grounding, free-body diagram visualization, circuit analysis, and comprehensive past paper exam strategies for AP Physics, IB DP Physics, IGCSE/A-Level, and CBSE/ISC Boards.',
    heroHighlight: '94% of our Physics students score distinction A* / 7 / 95%+ across international board examinations.',
    stats: [
      { label: 'Distinction Achievers', value: '94.2%' },
      { label: 'Free-Body Drills', value: '15,000+' },
      { label: 'Simulations Used', value: '300+' },
      { label: 'Math-Physics Sync', value: '100%' }
    ],
    learningOutcomes: [
      'Master vector resolution and kinematic/Newtonian mechanics problem sets.',
      'Understand wave mechanics, optics, and wave-particle duality conceptually.',
      'Analyze complex DC/AC electrical circuits and electromagnetic induction.',
      'Write examiner-approved multi-step derivations and quantitative physics responses.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 8-10 (Foundation & IGCSE/GCSE)', title: 'Classical Mechanics, Waves & Electricity', topics: ['Kinematics & Newton’s Laws of Motion', 'Energy, Work & Power', 'Light Reflection, Refraction & Lenses', 'Current, Resistance & Circuit Laws', 'Electromagnetism & Motor Effect'], methodology: 'Visualizing physics through dynamic vectors, real-world analogies, and step-by-step formula derivation.' },
      { gradeRange: 'Grades 11-12 (AP / IB DP HL / A-Level / JEE)', title: 'Advanced Calculus-Based Physics', topics: ['Rotational Dynamics & Gravitational Fields', 'Simple Harmonic Motion & Thermodynamics', 'Electric Fields, Capacitance & Induction', 'Quantum, Nuclear & Particle Physics', 'Special Relativity & Astrophysics'], methodology: 'Deriving formulas from first principles, calculus integrations, and 100% past paper question deconstruction.' }
    ],
    pedagogyFramework: [
      { title: 'Free-Body Diagram (FBD) Precision', description: 'Teaching students to draw flawless physical models before applying mathematical equations.' },
      { title: 'Formula-to-Concept Linkage', description: 'Ensuring students understand the physical significance of every variable and constant.' }
    ],
    boardsCovered: ['CBSE (Class 11-12)', 'ISC', 'IGCSE (0625)', 'IB DP (HL/SL)', 'A-Level (AQA/Edexcel/CAIE)', 'AP Physics 1, 2, C'],
    tutorProfileHighlight: 'Senior Physics professors, astrophysicists, and engineering faculty with decades of board exam coaching.',
    faqs: [
      { question: 'Do you teach both AP Physics 1 (Algebra-based) and AP Physics C (Calculus-based)?', answer: 'Yes! We have specialized tutors for both AP Physics 1/2 and calculus-based AP Physics C (Mechanics and Electricity & Magnetism).' }
    ],
    metaTitle: 'Online Physics Tuition (Grades 8-12) | 1-on-1 Physics Tutors',
    metaDescription: 'Expert 1-on-1 online physics tuition for IGCSE, IB DP HL/SL, AP Physics C, A-Level & CBSE Class 11/12. Master mechanics & electromagnetism. Free trial.',
    primaryKeyword: 'Online Physics Tuition'
  },

  chemistry: {
    id: 'chemistry',
    name: 'Online Chemistry Tuition',
    iconName: 'FlaskConical',
    tagline: 'Mastering Organic Mechanisms, Stoichiometry & Physical Chemistry',
    grades: 'Grade 8 - 12',
    category: 'science',
    description: 'Transform complex chemical equations, mole stoichiometry, electron configurations, and organic reaction pathways into crystal-clear conceptual steps. Expert 1-on-1 tutoring for AP Chemistry, IB DP Chemistry, IGCSE/A-Level, and CBSE/ISC boards.',
    heroHighlight: 'Over 93% of our Chemistry students achieve top-tier grades with mastery over mole concepts and organic mechanisms.',
    stats: [
      { label: 'A* / 7 / 95%+ Rate', value: '93.5%' },
      { label: 'Mechanisms Mastered', value: '80+ Types' },
      { label: 'Mole Drills Solved', value: '20,000+' },
      { label: 'Lab Error Analysis', value: '100% Covered' }
    ],
    learningOutcomes: [
      'Master the mole concept, stoichiometry, and quantitative titration calculations without confusion.',
      'Understand orbital hybridization, molecular geometry (VSEPR), and intermolecular forces.',
      'Deconstruct organic reaction mechanisms (SN1, SN2, electrophilic addition, condensation).',
      'Solve equilibrium, thermodynamics, and electrochemical cell problems with precision.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 8-10 (Introductory & IGCSE)', title: 'Foundations of Matter, Bonding & Stoichiometry', topics: ['Atomic Structure & Periodic Trends', 'Ionic, Covalent & Metallic Bonding', 'The Mole Concept & Balanced Equations', 'Acids, Bases & Salt Preparation', 'Metals, Extraction & Rates of Reaction'], methodology: 'Interactive 3D molecular viewers and progressive problem sets from basic balancing to complex titrations.' },
      { gradeRange: 'Grades 11-12 (AP / IB DP HL / A-Level / ISC)', title: 'Advanced Physical, Inorganic & Organic Chemistry', topics: ['Thermodynamics (Enthalpy, Entropy, Gibbs)', 'Chemical Equilibrium & Acid-Base Buffer Systems', 'Electrochemistry & Galvanic Cells', 'Organic Reaction Mechanisms & Synthetic Routes', 'Spectroscopic Identification (NMR, IR, Mass Spec)'], methodology: 'Arrow-pushing organic mechanisms, systematic equilibrium ICE tables, and past examiner question dissection.' }
    ],
    pedagogyFramework: [
      { title: '3D Molecular Visualization', description: 'Utilizing digital molecular orbital models to visualize stereochemistry and chirality.' },
      { title: 'ICE Table Mastery', description: 'Structured step-by-step algorithms for equilibrium and buffer pH calculations.' }
    ],
    boardsCovered: ['CBSE', 'ISC', 'IGCSE (0620)', 'IB DP (HL/SL)', 'A-Level (CAIE/Edexcel/AQA)', 'AP Chemistry'],
    tutorProfileHighlight: 'PhD research chemists, pharmaceutical scientists, and veteran international school chemistry heads.',
    faqs: [
      { question: 'How do you help students with Organic Chemistry reactions?', answer: 'We teach organic chemistry through fundamental reaction mechanisms (electron movements and electronegativity differences) rather than rote memorization of hundreds of isolated reactions.' }
    ],
    metaTitle: 'Online Chemistry Tuition (Grades 8-12) | 1-on-1 Chemistry Tutors',
    metaDescription: 'Premier 1-on-1 online chemistry tuition for AP Chemistry, IB DP Chemistry, IGCSE, A-Level & CBSE Class 11/12. Master stoichiometry & organic reactions.',
    primaryKeyword: 'Online Chemistry Tuition'
  },

  biology: {
    id: 'biology',
    name: 'Online Biology Tuition',
    iconName: 'Dna',
    tagline: 'Cellular Biology, Molecular Genetics, Physiology & Ecology Mastery',
    grades: 'Grade 8 - 12',
    category: 'science',
    description: 'Move beyond passive memorization. Master biological processes through illustrated diagrams, detailed physiological pathways, genetics inheritance squares, and examiner-approved scientific essay frameworks.',
    heroHighlight: 'Our Biology students excel in medical entrance foundations (NEET/UCAT) and international board distinctions.',
    stats: [
      { label: 'Top Grade Ratio', value: '95.1%' },
      { label: 'Anatomy Pathways', value: '150+' },
      { label: 'Data Analysis Drills', value: '10,000+' },
      { label: 'Medical Track Sync', value: 'Available' }
    ],
    learningOutcomes: [
      'Master cellular respiration, photosynthesis, and biochemical pathways.',
      'Solve Mendelian and non-Mendelian genetic crosses and pedigree charts.',
      'Understand human anatomy, physiology, immunology, and neurobiology in depth.',
      'Excel in data-response questions and biological experimental design.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 8-10 (IGCSE / ICSE / Middle School)', title: 'Cell Structure, Human Systems & Ecology', topics: ['Cells, Enzymes & Membrane Transport', 'Plant Nutrition & Transpiration', 'Human Circulatory, Digestive & Nervous Systems', 'Inheritance & Natural Selection', 'Ecosystems & Human Impact'], methodology: 'Annotated visual biological diagrams, mnemonic memory techniques, and structured definitions.' },
      { gradeRange: 'Grades 11-12 (AP Biology / IB DP HL / A-Level / CBSE)', title: 'Molecular Genetics, Evolution & Physiology', topics: ['DNA Replication, Transcription & Translation', 'Cellular Energetics (Krebs Cycle, Calvin Cycle)', 'Gene Expression & CRISPR Biotechnology', 'Immunology & Homeostasis', 'Population Genetics & Cladistics'], methodology: 'Experimental data analysis, statistical tests (Chi-Square, t-test), and long-form analytical essay writing.' }
    ],
    pedagogyFramework: [
      { title: 'Annotated Concept Maps', description: 'Connecting complex biological cascades (like hormone feedback loops) into visual flowcharts.' },
      { title: 'Exam Keyword Precision', description: 'Highlighting exact examiner marking keywords that earn full marks in descriptive answers.' }
    ],
    boardsCovered: ['CBSE', 'ICSE / ISC', 'IGCSE (0610)', 'IB DP (HL/SL)', 'A-Level Biology', 'AP Biology', 'NEET Foundation'],
    tutorProfileHighlight: 'Medical doctors (MBBS), PhD geneticists, and senior international biology examiners.',
    faqs: [
      { question: 'Do you prepare students for pre-med entrance and AP Biology exams?', answer: 'Yes! We offer specialized AP Biology preparation (including the 8 AP curriculum units and FRQs) and foundational medical entrance mentoring.' }
    ],
    metaTitle: 'Online Biology Tuition (Grades 8-12) | 1-on-1 Biology Tutors',
    metaDescription: 'Expert 1-on-1 online biology tuition. Master AP Biology, IB DP Bio HL/SL, IGCSE & A-Level genetics, physiology & cell biology. Book free trial.',
    primaryKeyword: 'Online Biology Tuition'
  },

  english: {
    id: 'english',
    name: 'Online English Classes',
    iconName: 'BookOpen',
    tagline: 'Grammar Precision, Creative Writing & Shakespearean Literature Analysis',
    grades: 'Grade 1 - 12',
    category: 'languages',
    description: 'Cultivate articulate expression, analytical literary criticism, and flawless grammar mechanics. Personalized 1-on-1 tutoring covering reading comprehension, essay writing frameworks, vocabulary expansion, and board literature texts.',
    heroHighlight: 'Our English students develop sophisticated analytical voices, scoring 90%+ in board exams and AP Literature.',
    stats: [
      { label: 'Reading Level Jump', value: '+2.8 Years' },
      { label: 'Essays Reviewed', value: '45,000+' },
      { label: 'Vocabulary Expansion', value: '1,500+ Words' },
      { label: 'Grammar Accuracy', value: '99.2%' }
    ],
    learningOutcomes: [
      'Write compelling narrative, descriptive, persuasive, and argumentative essays.',
      'Master reading comprehension techniques to identify nuance, tone, and implicit bias.',
      'Analyze Shakespearean plays, classic poetry, and modern literature with critical depth.',
      'Eliminate grammatical errors in syntax, punctuation, tense consistency, and vocabulary.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 1-5 (Primary Reading & Phonics)', title: 'Phonics, Vocabulary & Story Crafting', topics: ['Phonics & Word Families', 'Sentence Construction & Punctuation', 'Creative Story Writing & Character Building', 'Reading Comprehension Strategies', 'Parts of Speech & Spelling'], methodology: 'Interactive reader theater, imaginative creative writing prompts, and vocabulary gamification.' },
      { gradeRange: 'Grades 6-8 (Middle School Writing)', title: 'Structural Essays, Tone & Literary Devices', topics: ['PEEL / TEEL Essay Structuring', 'Figurative Language & Poetic Devices', 'Persuasive & Discursive Essays', 'Summary & Paraphrasing Skills', 'Formal Letter & Report Writing'], methodology: 'Line-by-line essay editing, vocabulary enhancement drills, and text-evidence citation.' },
      { gradeRange: 'Grades 9-12 (Board Literature & AP)', title: 'Advanced Literary Analysis & Critical Essays', topics: ['Shakespearean Drama Analysis', 'Comparative Poetry & Unseen Commentary', 'Rhetorical Analysis & Synthesis Essays (AP Lang)', '19th-Century & World Literature Context', 'Board Exam Answer Formats'], methodology: 'Rigorous thematic deconstruction, rubric-aligned thesis formulation, and timed essay simulations.' }
    ],
    pedagogyFramework: [
      { title: 'The PEEL & PETAL Essay System', description: 'Point, Evidence, Explanation, Technique, Analysis, and Link structural mastery.' },
      { title: 'Personalized Writing Portfolios', description: 'Continuous iterative feedback on student essays to build authentic individual voice.' }
    ],
    boardsCovered: ['CBSE', 'ICSE / ISC', 'Cambridge (0500/0510)', 'IB Language A (Lit & Lang)', 'GCSE / A-Level English', 'AP English (Lang & Lit)'],
    tutorProfileHighlight: 'Published authors, Oxford/Cambridge literature graduates, and veteran board examiners.',
    faqs: [
      { question: 'How do you help students prepare for unseen poetry and commentary in IGCSE/IB?', answer: 'We teach a systematic 5-step analysis protocol examining structure, figurative imagery, tone shifts, rhythm/meter, and thematic subtext.' }
    ],
    metaTitle: 'Online English Classes (Grades 1-12) | 1-on-1 English Tutors',
    metaDescription: 'World-class 1-on-1 online English tuition for Grades 1-12. Master essay writing, grammar, comprehension, Shakespeare literature & AP English. Free trial.',
    primaryKeyword: 'Online English Classes'
  },

  coding: {
    id: 'coding',
    name: 'Coding Classes for School Students',
    iconName: 'Code',
    tagline: 'Scratch, Python, Web Development, Java & AP Computer Science A',
    grades: 'Grade 1 - 12 (Ages 6-18)',
    category: 'tech',
    description: 'Transform passive screen time into active creator genius. 1-on-1 interactive coding mentorship covering block-based coding (Scratch), real-world Python programming, web development (HTML/CSS/JS), data structures, algorithms, and AP Computer Science A.',
    heroHighlight: 'Our young coders build real-world games, AI models, mobile apps, and score 5 on AP Computer Science A.',
    stats: [
      { label: 'Apps & Games Built', value: '35,000+' },
      { label: 'AP CS A Score 5', value: '92.4%' },
      { label: 'Languages Taught', value: 'Python, Java, JS' },
      { label: 'Hackathon Winners', value: '120+' }
    ],
    learningOutcomes: [
      'Develop computational thinking, algorithmic logic, and systematic debugging skills.',
      'Build fully functional games, interactive web apps, and machine learning models.',
      'Master object-oriented programming (OOP) in Python and Java.',
      'Excel in school computer science curricula (CBSE/ICSE/IGCSE 0478/AP CS A).'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 1-4 (Ages 6-9: Junior Coders)', title: 'Block Coding, Logic & Game Design', topics: ['Scratch 3.0 Game Development', 'Sequencing, Loops & Conditionals', 'Event-Driven Animations', 'Interactive Storytelling', 'Intro to Algorithms'], methodology: 'Visual block-based drag-and-drop programming creating Arcade games, mazes, and animated stories.' },
      { gradeRange: 'Grades 5-8 (Ages 10-13: Python Explorers)', title: 'Text-Based Python & Web Basics', topics: ['Python Syntax, Variables & Data Types', 'Functions, Lists & Dictionaries', 'Pygame 2D Game Development', 'HTML5, CSS3 & JavaScript Web Pages', 'Intro to Data & AI Concepts'], methodology: 'Hands-on project-based builds where students write real syntax with immediate terminal output.' },
      { gradeRange: 'Grades 9-12 (Ages 14-18: Advanced Software & AP CS)', title: 'Object-Oriented Java, Data Structures & AP CS', topics: ['Java OOP (Classes, Inheritance, Polymorphism)', 'AP Computer Science A Curriculum', 'Recursion, Sorting & Searching Algorithms', 'Full-Stack Web & API Integration', 'Data Science & Machine Learning with Python'], methodology: 'Industry-standard code editors (VS Code, IntelliJ), Git version control, and College Board FRQ drilling.' }
    ],
    pedagogyFramework: [
      { title: 'Project-First Methodology', description: 'Every session produces a tangible, playable game or functional software project.' },
      { title: 'Clean Code & Debugging Culture', description: 'Teaching professional debugging tactics rather than handing out quick solutions.' }
    ],
    boardsCovered: ['AP Computer Science A / Principles', 'CBSE Computer Science (Python)', 'ICSE Java (Computer Applications)', 'Cambridge IGCSE (0478) / A-Level (9618)', 'IB Computer Science'],
    tutorProfileHighlight: 'Software engineers from top tech companies and certified computer science educators.',
    faqs: [
      { question: 'Does my child need prior coding experience to start?', answer: 'No prior coding experience is required! We tailor the starting module to your child’s exact age and experience level, from Scratch to advanced Python.' },
      { question: 'Do students get to build their own portfolio of software projects?', answer: 'Yes! Every student graduates each course with a live GitHub portfolio of 8-12 custom games, web applications, or software tools they can showcase.' }
    ],
    metaTitle: 'Online Coding Classes for Kids & Teens | VLearnPro',
    metaDescription: 'Interactive 1-on-1 online coding classes for kids. Learn Python, Java, Web Development & AI logic with expert software mentors. Schedule a free demo today.',
    primaryKeyword: 'Coding Classes for School Students'
  },

  'spoken-english': {
    id: 'spoken-english',
    name: 'Spoken English Classes',
    iconName: 'MessageSquare',
    tagline: 'Accent Neutralization, Natural Fluency & Confident Conversational Mastery',
    grades: 'Grade 1 - 12 & Teens',
    category: 'languages',
    description: 'Empower your child to speak English fluently, clearly, and naturally with confidence. 1-on-1 conversational immersion targeting accurate pronunciation, phonetics, spontaneous dialogue, idiom usage, and social poise.',
    heroHighlight: '100% of students overcome hesitation and speak English fluently in social and academic settings.',
    stats: [
      { label: 'Fluency Leap', value: '4X Improvement' },
      { label: 'Speaking Hours', value: '80% Per Class' },
      { label: 'Pronunciation Accuracy', value: '98%' },
      { label: 'Global Students', value: '40+ Countries' }
    ],
    learningOutcomes: [
      'Eliminate hesitation, mother-tongue influence (MTI), and stage fright.',
      'Master correct phonetics, vowel length, syllable stress, and natural intonation.',
      'Expand conversational vocabulary, idioms, and contextual phrases.',
      'Engage effortlessly in academic presentations, school debates, and social conversations.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 1-5 (Young Learners)', title: 'Phonetics, Vocabulary & Spontaneous Talk', topics: ['Phonic Sounds & Pronunciation', 'Daily Routine & Social Greetings', 'Expressing Emotions & Opinions', 'Show and Tell Storytelling', 'Vocabulary Building Games'], methodology: 'Gentle, encouraging 1-on-1 dialogue, roleplaying, and picture-prompt storytelling.' },
      { gradeRange: 'Grades 6-12 (Middle & High School)', title: 'Advanced Fluency, Idioms & Discourse', topics: ['Accent Neutralization & Speech Modulation', 'Impromptu Speaking (JAM - Just a Minute)', 'Complex Sentence Structures & Idiomatic English', 'Academic Discussions & Global Affairs', 'Interview & Presentation Mastery'], methodology: 'Debates, mock interviews, extempore speeches, and instant constructive feedback.' }
    ],
    pedagogyFramework: [
      { title: '80/20 Student Speaking Ratio', description: 'The student speaks for 80% of the session time to maximize active oral fluency.' },
      { title: 'Zero Judgment Environment', description: 'Positive reinforcement correcting errors naturally through recast modeling.' }
    ],
    boardsCovered: ['International Schools', 'Bilingual Programs', 'Cambridge ESL', 'IELTS / TOEFL Junior'],
    tutorProfileHighlight: 'Native and internationally certified TEFL/CELTA speech trainers and communication coaches.',
    faqs: [
      { question: 'How quickly will my child show noticeable improvement in spoken English?', answer: 'Most parents observe a dramatic reduction in hesitation and a clear surge in vocabulary usage within the first 6 to 8 weeks of regular 1-on-1 sessions.' }
    ],
    metaTitle: 'Spoken English Classes for Kids & Teens | 1-on-1 Online Fluency Tutors',
    metaDescription: 'Personalized 1-on-1 spoken English classes for students. Overcome hesitation, master phonetics, build vocabulary and speak with global confidence.',
    primaryKeyword: 'English Speaking Classes'
  },

  'communication-skills': {
    id: 'communication-skills',
    name: 'Communication Skills Classes',
    iconName: 'Users',
    tagline: 'Active Listening, Assertive Expression & Academic Articulation',
    grades: 'Grade 1 - 12',
    category: 'skills',
    description: 'Equip your child with the single most critical superpower for 21st-century leadership: exceptional verbal and non-verbal communication. 1-on-1 training in structuring thoughts, active listening, persuasive negotiation, and emotional intelligence.',
    heroHighlight: 'Our students develop remarkable clarity of thought, academic poise, and interpersonal leadership skills.',
    stats: [
      { label: 'Confidence Score', value: '+85%' },
      { label: 'Debate Wins', value: '250+' },
      { label: 'Clarity Rating', value: '4.95 / 5' },
      { label: 'Leadership Skills', value: '10 Core Facets' }
    ],
    learningOutcomes: [
      'Structure thoughts logically before speaking using the PREP and STAR communication frameworks.',
      'Master body language, eye contact, vocal variety, and active listening skills.',
      'Express disagreements respectfully and construct persuasive counter-arguments.',
      'Excel in group discussions, school prefect interviews, and collaborative team leadership.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 1-5 (Foundational Expression)', title: 'Expressive Clarity & Empathetic Listening', topics: ['Clear Articulation & Volume Control', 'Listening Without Interrupting', 'Describing Complex Experiences', 'Expressing Needs Assertively', 'Body Language Awareness'], methodology: 'Interactive storytelling, empathetic roleplay, and collaborative communication challenges.' },
      { gradeRange: 'Grades 6-12 (Leadership Communication)', title: 'Strategic Persuasion, Debating & EQ', topics: ['PREP (Point, Reason, Example, Point) Framework', 'Non-Violent & Assertive Communication', 'Debating Protocols & Rebuttal Formulations', 'Crisis Communication & Conflict Resolution', 'Executive Presentation Delivery'], methodology: 'Structured debate simulations, mock boardroom discussions, and speech recording analysis.' }
    ],
    pedagogyFramework: [
      { title: 'The PREP Structure Protocol', description: 'Teaching students to instantly structure any thought or opinion in under 5 seconds.' },
      { title: 'Video Self-Analysis Review', description: 'Reviewing short speech clips together to refine micro-expressions and tonal pace.' }
    ],
    boardsCovered: ['All Boards', 'Global Leadership Tracks', 'School Prefect / Model UN Prep'],
    tutorProfileHighlight: 'Executive communication coaches, corporate trainers, and international debate adjudicators.',
    faqs: [
      { question: 'How is Communication Skills different from Spoken English?', answer: 'While Spoken English focuses on language mechanics, vocabulary, and accent, Communication Skills focuses on psychology, persuasive structuring, emotional intelligence, active listening, and leadership influence.' }
    ],
    metaTitle: 'Communication Skills Classes for School Students | 1-on-1 Leadership Coaching',
    metaDescription: 'Empower your child with world-class 1-on-1 communication skills classes. Master structured thinking, persuasion, body language and active listening.',
    primaryKeyword: 'Communication Skills Classes'
  },

  'public-speaking': {
    id: 'public-speaking',
    name: 'Public Speaking Classes',
    iconName: 'Mic',
    tagline: 'Stage Presence, Rhetoric, TEDx Style Storytelling & Model UN (MUN) Mastery',
    grades: 'Grade 1 - 12',
    category: 'skills',
    description: 'Transform stage fear into magnetic charisma. 1-on-1 masterclasses in speechwriting, TED-style storytelling, vocal projection, rhetorical devices, Model United Nations (MUN) diplomacy, and competitive oratory.',
    heroHighlight: 'Our public speaking graduates win school elections, Model UN best delegate awards, and deliver standout speeches.',
    stats: [
      { label: 'Stage Fear Reduction', value: '100%' },
      { label: 'MUN Best Delegates', value: '140+' },
      { label: 'Speeches Delivered', value: '28,000+' },
      { label: 'Rhetorical Devices', value: '25 Mastered' }
    ],
    learningOutcomes: [
      'Eliminate stage fright and physical nervousness completely using breathing and anchoring techniques.',
      'Write memorable, high-impact speech hooks and persuasive narrative arcs.',
      'Master vocal modulation: pitch variation, deliberate pauses, emphasis, and projection.',
      'Dominate Model UN conferences as confident delegates drafting resolutions and delivering caucuses.'
    ],
    gradeLevels: [
      { gradeRange: 'Grades 1-5 (Young Orators)', title: 'Storytelling Magic & Confident Posture', topics: ['Overcoming Shyness & Building Smiles', 'Show & Tell to Mini Speeches', 'Vocal Energy & Expressive Hands', 'Story Hooks & Memorable Endings', 'Recitation & Poetry Performance'], methodology: 'Fun theatrical games, character portrayal, and positive encouragement for every performance.' },
      { gradeRange: 'Grades 6-12 (Advanced Rhetoric & Model UN)', title: 'Persuasive Oratory, Rhetoric & MUN Diplomacy', topics: ['Aristotle’s Triad: Ethos, Pathos, and Logos', 'Rhetorical Devices (Anaphora, Tricolon, Antithesis)', 'TEDx-Style Keynote Structuring', 'Model United Nations Rules of Procedure & Resolution Drafting', 'Handling Q&A and Hostile Interrogations'], methodology: 'Simulated UN General Assembly caucuses, speech deconstructions of history’s great orators, and live delivery critiques.' }
    ],
    pedagogyFramework: [
      { title: 'The 3-Second Hook Rule', description: 'Techniques to capture audience attention within the opening 3 seconds of any speech.' },
      { title: 'Vocal Variety Calibration', description: 'Scientific training in diaphragmatic breathing, resonance, pacing, and intentional silence.' }
    ],
    boardsCovered: ['All Boards', 'Model United Nations (MUN)', 'Toastmasters Youth', 'Debating Competitions'],
    tutorProfileHighlight: 'TEDx speakers, national debate champions, and former Model UN Secretary-Generals.',
    faqs: [
      { question: 'My child is extremely shy and avoids speaking in public. Can this help?', answer: 'Yes! Our 1-on-1 private environment provides a completely safe, pressure-free space where shy students gain confidence at their own pace without fear of peer judgment.' }
    ],
    metaTitle: 'Public Speaking Classes for Kids & Teens | 1-on-1 Oratory & MUN Mentorship',
    metaDescription: 'Elite 1-on-1 public speaking classes for school students. Conquer stage fear, master TEDx storytelling, debate & Model UN with champion speech coaches.',
    primaryKeyword: 'Public Speaking Classes'
  },

  'board-exam-prep': {
    id: 'board-exam-prep',
    name: 'Board Exam Preparation & Revision',
    iconName: 'GraduationCap',
    tagline: 'High-Yield Revision Bootcamps, 10-Year Solved Papers & Examiner Techniques',
    grades: 'Grades 10 & 12 (All Boards)',
    category: 'core',
    description: 'Fast-track your Class 10 & 12 Board Exam scores. Intensive 1-on-1 revision bootcamps, past 10 years solved paper marathons, examiner answer-structuring secrets, and stress-free time management coaching.',
    heroHighlight: '98.6% of our Board Exam bootcamp students achieve 90%+ marks and distinction ranks.',
    stats: [
      { label: 'Avg Board Score', value: '94.6%' },
      { label: 'Past Papers Drilled', value: '50,000+' },
      { label: 'Marking Accuracy', value: '99.5%' },
      { label: 'Stress Reduction', value: '90%' }
    ],
    learningOutcomes: [
      'Master high-yield topics that represent 80% of board examination question weightage.',
      'Write answers formatted precisely to official board examiner marking keys to avoid point deductions.',
      'Eliminate exam-hall panic through timed full-length simulated board mock examinations.',
      'Execute a personalized 60-day revision blueprint balancing all core subjects.'
    ],
    gradeLevels: [
      { gradeRange: 'Class 10 Board Revision', title: 'Foundational Board Mastery & Mock Sprints', topics: ['High-Yield Maths Theorems & Formula Sheet', 'Science Diagram Labelling & Concept Flowcharts', 'Social Science 5-Mark Structuring & Map Work', 'Language Grammar & Format Accuracy', 'Past 10 Years Chapter-Wise PYQs'], methodology: 'Topical revision sprints, timed 3-hour mock exams, and line-by-line examiner corrections.' },
      { gradeRange: 'Class 12 Board Revision', title: 'Advanced Board Specialization & High-Scorer Strategy', topics: ['Physics Derivations & Numerical Problem Sets', 'Organic Chemistry Conversions & Mechanisms', 'Maths Calculus & 3D Geometry Drills', 'Biology Flowcharts & Keyword Alignment', 'Economics / Commerce Case Studies'], methodology: 'Masterclass on step-marking, presentation layout, and time allocation per question tier.' }
    ],
    pedagogyFramework: [
      { title: 'The High-Yield 80/20 Strategy', description: 'Prioritizing recurring question archetypes and high-weightage chapters first.' },
      { title: 'Examiner Step-Marking Alignment', description: 'Coaching students on exact points required to capture all method and accuracy marks.' }
    ],
    boardsCovered: ['CBSE (Class 10 & 12)', 'ICSE / ISC', 'Cambridge IGCSE & A-Levels', 'IB DP', 'Singapore GCE O/A-Levels'],
    tutorProfileHighlight: 'Former Board Exam evaluators, national textbook authors, and top rank mentors.',
    faqs: [
      { question: 'When is the best time to enroll in the Board Exam Preparation program?', answer: 'Students typically enroll in our 6-month comprehensive sprint (starting August/September) or our 60-day intensive Pre-Board/Board crash bootcamp (starting November/December).' }
    ],
    metaTitle: 'Board Exam Preparation & Revision Classes (Class 10 & 12) | 1-on-1 Tutors',
    metaDescription: 'Score 95%+ in Class 10 & 12 Board Exams. 1-on-1 revision bootcamps, past 10 years solved papers & examiner strategies for CBSE, ICSE, IGCSE & IB.',
    primaryKeyword: 'Board Exam Preparation'
  }
};
