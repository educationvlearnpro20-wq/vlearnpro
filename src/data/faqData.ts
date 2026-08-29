export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'tutors' | 'classes' | 'pricing' | 'tech';
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    category: 'general',
    question: 'What makes VLearnPro Education different from typical online tuition apps?',
    answer: 'Unlike generic apps that use pre-recorded videos or crowded group classrooms of 30+ students, VLearnPro provides genuine 1-on-1 live interactive mentorship with top 1.8% verified subject specialists. Every session is custom-tailored to your child’s school syllabus, pace, and individual learning gaps, backed by real-time progress analytics and 24/7 doubt resolution.'
  },
  {
    category: 'tutors',
    question: 'How do you select and vet your tutors?',
    answer: 'We maintain an uncompromising 4-stage vetting process with a 1.8% acceptance rate. Tutors undergo rigorous subject competency exams, live pedagogical teaching evaluations by senior examiners, psychological background screening (including identity safeguarding checks), and continuous student satisfaction reviews.'
  },
  {
    category: 'classes',
    question: 'How do live 1-on-1 online classes work?',
    answer: 'Classes take place in our interactive HD virtual classroom equipped with dual-way digital whiteboards, screen sharing, scientific graphing calculators (Desmos/GeoGebra), and collaborative code editors. Every session is recorded in HD video and stored in your child’s private portal for unlimited revision before school exams.'
  },
  {
    category: 'classes',
    question: 'What if my child needs to reschedule a class?',
    answer: 'We understand family schedules fluctuate. You can reschedule any session up to 6 hours before class time directly through the portal or your dedicated Academic Coordinator with zero penalty.'
  },
  {
    category: 'pricing',
    question: 'Is there a free trial class before committing to a plan?',
    answer: 'Yes! We provide a 100% free, no-obligation 45-minute 1-on-1 diagnostic trial class. This includes a personalized student strength assessment and a tailored learning roadmap from the educator.'
  },
  {
    category: 'pricing',
    question: 'What is your satisfaction and refund guarantee?',
    answer: 'If you are ever unsatisfied with a tutor for any reason, we will switch your tutor immediately or refund 100% of your remaining unused session balance—no questions asked.'
  },
  {
    category: 'tech',
    question: 'What equipment does my child need for online classes?',
    answer: 'All you need is a laptop, desktop, or tablet (iPad/Android) with a stable internet connection, a working microphone, and a webcam. A digital stylus or graphic tablet is recommended for senior mathematics and science subjects but not mandatory.'
  },
  {
    category: 'general',
    question: 'Do you help students who are struggling or falling behind in school?',
    answer: 'Absolutely. A major part of our mission is turning around academic struggles. We start with a diagnostic baseline test to identify earlier grade prerequisites that were missed, rebuild conceptual confidence gently, and accelerate the student back to the top of their school class.'
  }
];
