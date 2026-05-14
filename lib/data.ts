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
    image: '/committee/Maryem Yousfi.jpg',
  },
  {
    name: 'Ahmed hihi',
    role: 'Logistics Committee',
    affiliation: 'IEEE INSAT SB',
    image: '/committee/Ahmed Hihi.jpg',
  },
  {
    name: 'Yessmine Sallemi',
    role: 'Participants Coordinator',
    affiliation: 'IEEE ENETCOM SB',
    image: '/committee/Yessmine_Sallemi.jpg',
  },
  {
    name: 'Yassine Soussi',
    role: 'Industry & Academic Coordinator',
    affiliation: 'IEEE ENIT SB',
    image: '/committee/Yassine Soussi Photo.jpg',
  },
  {
    name: 'Baha eddine Hammou',
    role: 'Program Committee',
    affiliation: 'IEEE ENSIT SB',
    image: '/committee/Baha Eddine Hammou.jpg',
  },
  {
    name: 'Mohamed Aziz Ben Slima',
    role: 'Program Committee',
    affiliation: 'IEEE ESPRIT SB',
    image: '/committee/Mohamed Aziz Ben Slima.jpg',
  },
  {
    name: 'Nadine Jellali',
    role: 'Secretary',
    affiliation: 'IEEE Tunisia Section',
    image: '/committee/Nadine Jellali.jpg',
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
  registrationDeadline: 'Limited seats available.',
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
  { name: 'IEEE RAS', category: 'Partner', logo: '/Logos/global.png' },
  { name: 'IEEE RAS Tunisia Chapter', category: 'Host', logo: '/Logos/tunisia.png' },
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

// Registration Data
export const registrationTiers = [
  {
    id: 'ieee-ras-student',
    title: 'IEEE RAS Student',
    price: 280,
    priceUSD: 97,
    currency: 'TND',
    category: 'IEEE RAS Student',
    membershipType: 'IEEE RAS Member',
  },
  {
    id: 'ieee-student',
    title: 'IEEE Student',
    price: 310,
    priceUSD: 107,
    currency: 'TND',
    category: 'IEEE Student',
    membershipType: 'IEEE Member',
  },
  {
    id: 'non-ieee-student',
    title: 'Student Non IEEE Member',
    price: 330,
    priceUSD: 114,
    currency: 'TND',
    category: 'Non-IEEE Student',
    membershipType: 'Non-IEEE Member',
  },
  {
    id: 'ieee-professional',
    title: 'Professional IEEE Member',
    price: 350,
    priceUSD: 121,
    currency: 'TND',
    category: 'IEEE Professional',
    membershipType: 'IEEE Member',
  },
  {
    id: 'non-ieee-professional',
    title: 'Non IEEE Member',
    price: 380,
    priceUSD: 131,
    currency: 'TND',
    category: 'Non-IEEE Professional',
    membershipType: 'Non-IEEE Member',
  },
];

export const registrationFeatures = [
  'Full 3-day access to all sessions',
  'All workshop materials and resources',
  'Certificate of completion',
  'Networking sessions and coffee breaks',
  'Lunch and refreshments for all 3 days',
  'Access to exclusive robotics demonstrations',
  'Digital proceedings and presentation slides',
  'Welcome kit with conference materials',
];

export const registrationContent = {
  title: 'Registration',
  subtitle: 'Choose your registration tier',
  description: 'Join us for an intensive 3-day robotics program. Select the tier that best fits your profile.',
  note: 'All prices are in Tunisian Dinars (TND). Registration includes full access to all sessions, materials, and refreshments.',
  studentNote: 'IEEE Student includes graduate students and undergraduate students.',
  limitedSpots: 'Limited spots available - Register early to secure your place!',
  paymentNote: 'Payment instructions will be sent after registration confirmation.',
  conversionNote: 'USD conversion based on exchange rate between 2.8 and 3.0 TND/USD',
  registrationOpenDate: 'April 29, 2026',
  registrationDeadline: '15 May 2026',
  registrationExpired: false, // Will be checked dynamically
};

// Event Configuration
export const eventConfig = {
  startDate: { year: 2026, month: 6, day: 1 }, // June 1, 2026
  endDate: { year: 2026, month: 6, day: 3 }, // June 3, 2026
  registrationDeadline: { year: 2026, month: 5, day: 15 }, // May 15, 2026 - EXTENDED
  travelGrantDeadline: { year: 2026, month: 4, day: 30 }, // April 30, 2026 - EXPIRED
  projectSubmissionDeadline: { year: 2026, month: 5, day: 15 }, // May 15, 2026 - EXTENDED
  location: 'Hammamet, Tunisia',
  venue: 'Hammamet Garden Resort & Spa',
  organizer: 'IEEE RAS Tunisia Chapter',
  trainingLocation: 'Hammamet Garden Resort & Spa',
  trainingDuration: '3 Days',
};

// Helper function to check if a deadline has passed
export const isDeadlinePassed = (deadline: { year: number; month: number; day: number }): boolean => {
  const deadlineDate = new Date(deadline.year, deadline.month - 1, deadline.day, 23, 59, 59);
  const now = new Date();
  return now > deadlineDate;
};
