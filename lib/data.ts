// Centralized data for all components

// About Section Data
export const aboutStats = [
  { number: '15+', label: 'Years of Excellence' },
  { number: '10,000+', label: 'Alumni Worldwide' },
  { number: '100+', label: 'Research Partners' },
  { number: '$5M+', label: 'Industry Support' },
];

export const aboutFeatures = [
  {
    title: 'Comprehensive Curriculum',
    description: 'Covering theory, practical applications, and emerging technologies in robotics.',
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from leading researchers and industry pioneers.',
  },
  {
    title: 'Practical Experience',
    description: 'Hands-on labs with state-of-the-art robotics equipment.',
  },
  {
    title: 'Global Community',
    description: 'Network with professionals and students from around the world.',
  },
];

// Committee Data
export const committeeMembers = [
  {
    name: 'Yassine Aniba',
    role: 'General Chair',
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/yassine-aniba.jpg',
  },
  {
    name: 'Jinene Ben Said',
    role: 'General Chair',
    affiliation: 'IEEE RAS SAC',
    image: '/committee/jinene-ben-said.png',
  },
  {
    name: 'Ahmed Aouididi',
    role: 'General Chair',
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/ahmed-aouididi.png',
  },
  {
    name: 'Mohamed Amine Louati',
    role: 'Treasurer',
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/mohamed-amine-louati.jpg',
  },
  {
    name: 'Mohamed Amine Ben Helal',
    role: 'Technical Committee Chair',
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/mohamed-amine-ben-hlel.jpeg',
  },
  {
    name: 'Wyssem Neila',
    role: 'Social Media Lead',
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/wyssem-neila.jpg',
  },
  {
    name: 'Azizi Hbaili',
    role: 'Branding Lead',
    affiliation: 'IEEE ESPRIT SB',
    image: '/committee/azizi-hbaili.jpg',
  },
  {
    name: 'Maryem Yousfi',
    role: 'Logistics Committee',
    affiliation: 'IEEE ENICarthage SB',
    image: '',
  },
  {
    name: 'Ahmed hihi',
    role: 'Logistics Committee',
    affiliation: 'IEEE INSAT SB',
    image: '',
  },
  {
    name: 'Yessmine Sallemi',
    role: 'Participants Coordinator',
    affiliation: 'IEEE ENETCOM SB',
    image: '',
  },
  {
    name: 'Yassine Soussi',
    role: 'Industry & Academic Coordinator',
    affiliation: 'IEEE ENIT SB',
    image: '',
  },
  {
    name: 'Baha eddine Hammou',
    role: 'Program Committee',
    affiliation: 'IEEE ENSIT SB',
    image: '',
  },
  {
    name: 'Mohamed Aziz Ben Slima',
    role: 'Program Committee',
    affiliation: 'IEEE ESPRIT SB',
    image: '',
  },
  {
    name: 'Nadine Jellali',
    role: 'Secretary',
    affiliation: 'IEEE Tunisia Section',
    image: '',
  },
];

// Countdown Timer Data
export const eventDays = [
  { date: '1', month: 'JUN', label: 'Day 1', desc: 'Foundations & Theory' },
  { date: '2', month: 'JUN', label: 'Day 2', desc: 'Hands-on Labs' },
  { date: '3', month: 'JUN', label: 'Day 3', desc: 'Advanced Topics' },
];

// CTA Data
export const ctaFeatures = [
  { text: '50+ Expert Speakers' },
  { text: 'Hands-on Labs' },
  { text: 'Global Network' },
];

export const ctaContent = {
  title: 'Ready to Transform Your Robotics Career?',
  description: 'Join 100+ professionals for an intensive three-day program with world-leading roboticists. Early bird registration is now open with special discounts.',
  registrationDeadline: 'Limited seats available. Early registration ends June 15, 2026.',
};

// Speakers Data
export const speakers: Array<{
  name: string;
  role: string;
  specialty: string;
  bio: string;
}> = [];

// Partners Data
export const partners: Array<{
  name: string;
  category: string;
  logo?: string;
}> = [
  { name: 'IEEE RAS', category: 'Partner', logo: '/Logos/ras_logo.jpg.webp' },
  { name: 'IEEE RAS Tunisia Chapter', category: 'Host', logo: '/Logos/ras_tunisia.webp' },
];

export const partnersContent = {
  title: 'Partners & Sponsors',
  description: 'Supported by leading academic institutions and industry leaders',
  callToAction: 'Interested in becoming a partner or sponsor? We welcome collaboration from organizations committed to advancing robotics research and education.',
};

// Hero Data
export const heroContent = {
  badge: {
    primary: 'June 1-3, 2026 • 3 Days',
    secondary: 'Organized by IEEE RAS Tunisia Chapter',
  },
  title: 'ICRA Satellite School',
  description: 'Join world-leading roboticists for an intensive program covering advanced topics in robotics, control systems, and autonomous systems.',
  stats: [
    { value: '3 Days', label: 'intensive training' },
    { value: '10+', label: 'expert speakers' },
    { value: '8', label: 'key topics' },
  ],
};

// Event Configuration
export const eventConfig = {
  startDate: { year: 2026, month: 6, day: 1 }, // June 1, 2026
  endDate: { year: 2026, month: 6, day: 3 }, // June 3, 2026
  registrationDeadline: { year: 2026, month: 6, day: 15 }, // June 15, 2026
  location: 'Tunisia',
  organizer: 'IEEE RAS Tunisia Chapter',
};
