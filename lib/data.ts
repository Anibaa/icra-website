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
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/jinene-ben-said.jpg',
  },
  {
    name: 'Ahmed Aouididi',
    role: 'General Chair',
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/ahmed-aouididi.jpg',
  },
  {
    name: 'Mohamed Amine Louati',
    role: 'Treasurer',
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/mohamed-amine-louati.jpg',
  },
  {
    name: 'Mohamed Amine Ben Hlel',
    role: 'Technical Committee Chair',
    affiliation: 'IEEE RAS Tunisia Chapter',
    image: '/committee/mohamed-amine-ben-hlel.jpg',
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
    affiliation: 'IEEE RAS Tunisia Chapter',
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
    affiliation: 'IEEE IES Tunisia Section Chapter',
    image: '',
  },
  {
    name: 'Yassine Soussi',
    role: 'Industry & Academic Coordinator',
    affiliation: 'IEEE Tunisia Section',
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
    affiliation: 'IEEE Esprit SB',
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
  description: 'Join 500+ professionals for an intensive five-day program with world-leading roboticists. Early bird registration is now open with special discounts.',
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
}> = [
  { name: 'IEEE RAS Tunisia Chapter', category: 'Host' },
  { name: 'IEEE ENICarthage SB', category: 'Organizing Partner' },
  { name: 'IEEE INSAT SB', category: 'Organizing Partner' },
  { name: 'IEEE IES Tunisia Section Chapter', category: 'Organizing Partner' },
  { name: 'IEEE Tunisia Section', category: 'Organizing Partner' },
  { name: 'IEEE ENSIT SB', category: 'Organizing Partner' },
  { name: 'IEEE Esprit SB', category: 'Organizing Partner' },
];

export const partnersContent = {
  title: 'Partners & Sponsors',
  description: 'Supported by leading academic institutions and industry leaders',
  callToAction: 'Interested in becoming a partner or sponsor? We welcome collaboration from organizations committed to advancing robotics research and education.',
};

// Program Timeline Data
export const programDays = [
  {
    day: 'Day 1',
    date: 'June 1',
    title: 'Opening & ICRA Plenary',
    sessions: [
      'Opening Ceremony',
      'ICRA Plenary Streaming',
      'Workshop Sessions',
      'Hands-on Labs',
    ],
  },
  {
    day: 'Day 2',
    date: 'June 2',
    title: 'Workshops & Hands-on',
    sessions: [
      'Advanced Control Systems',
      'Autonomous Navigation',
      'AI & Machine Learning',
      'Sensor Fusion & Perception',
    ],
  },
  {
    day: 'Day 3',
    date: 'June 3',
    title: 'Workshops & Closing',
    sessions: [
      'Swarm Robotics',
      'Human-Robot Interaction',
      'Project Presentations',
      'Closing Ceremony & Awards',
    ],
  },
];

export const programFeatures = [
  {
    title: 'Expert Instructors',
    description: 'Learn from pioneering researchers and industry leaders',
  },
  {
    title: 'Hands-on Labs',
    description: 'Interactive sessions with real robotics platforms',
  },
  {
    title: 'Networking',
    description: 'Connect with professionals from around the world',
  },
];

export const programContent = {
  title: '3-Day Intensive Program',
  description: 'June 1-3: Expert-led workshops covering robotics fundamentals, hands-on labs, and advanced topics',
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

// Detailed Program Schedule for 3 Days
export interface ProgramSession {
  time: string;
  title: string;
  speaker: string;
  location: string;
  content: string;
  type: 'ceremony' | 'plenary' | 'workshop' | 'break' | 'presentation';
}

export interface DayProgram {
  day: string;
  date: string;
  title: string;
  description: string;
  sessions: ProgramSession[];
}

export const detailedProgram: Record<number, DayProgram> = {
  1: {
    day: 'Day 1',
    date: 'June 1, 2026',
    title: 'Opening & ICRA Plenary',
    description: 'Opening ceremony, plenary sessions streaming from ICRA, and hands-on workshops',
    sessions: [
      {
        time: '09:00 - 10:30',
        title: 'Opening Ceremony',
        speaker: 'IEEE RAS Tunisia Chapter',
        location: 'Main Hall',
        content: 'Welcome address, introduction to the satellite school program, and overview of the three-day schedule. Meet the organizing committee and keynote speakers.',
        type: 'ceremony',
      },
      {
        time: '10:30 - 11:00',
        title: 'Coffee Break & Networking',
        speaker: '',
        location: 'Foyer',
        content: 'Refreshments and networking opportunity with fellow participants and speakers.',
        type: 'break',
      },
      {
        time: '11:00 - 12:30',
        title: 'ICRA Plenary Session (Live Streaming)',
        speaker: 'ICRA 2026 Keynote Speakers',
        location: 'Main Hall',
        content: 'Live streaming of plenary sessions from the main ICRA conference. Experience cutting-edge robotics research and innovations from world-renowned experts.',
        type: 'plenary',
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch Break',
        speaker: '',
        location: 'Dining Area',
        content: 'Lunch and informal networking session.',
        type: 'break',
      },
      {
        time: '14:00 - 15:30',
        title: 'Workshop Session 1: Robotics Fundamentals',
        speaker: 'Dr. Ahmed Ben Ali',
        location: 'Lab 1',
        content: 'Hands-on workshop covering robotics fundamentals, kinematics, and control systems. Practical exercises with robotic platforms.',
        type: 'workshop',
      },
      {
        time: '15:30 - 16:00',
        title: 'Coffee Break',
        speaker: '',
        location: 'Foyer',
        content: 'Afternoon refreshments and networking.',
        type: 'break',
      },
      {
        time: '16:00 - 17:30',
        title: 'Hands-on Lab: Programming Robots',
        speaker: 'Dr. Mariem Belhadj',
        location: 'Lab 1',
        content: 'Practical hands-on session programming robotic systems. Work with real hardware and implement basic control algorithms.',
        type: 'workshop',
      },
    ],
  },
  2: {
    day: 'Day 2',
    date: 'June 2, 2026',
    title: 'Workshops & Hands-on',
    description: 'Intensive hands-on workshops with practical robotics applications',
    sessions: [
      {
        time: '09:00 - 10:30',
        title: 'Workshop: Advanced Control Systems',
        speaker: 'Prof. Samir Turki',
        location: 'Lab 1',
        content: 'Deep dive into advanced control theory and implementation. Learn PID control, state-space methods, and adaptive control techniques.',
        type: 'workshop',
      },
      {
        time: '10:30 - 11:00',
        title: 'Coffee Break',
        speaker: '',
        location: 'Foyer',
        content: 'Morning refreshments and networking.',
        type: 'break',
      },
      {
        time: '11:00 - 12:30',
        title: 'Hands-on: Autonomous Navigation',
        speaker: 'Dr. Karim Saleh',
        location: 'Lab 2',
        content: 'Practical workshop on autonomous navigation systems. Implement SLAM algorithms and path planning techniques on mobile robots.',
        type: 'workshop',
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch Break',
        speaker: '',
        location: 'Dining Area',
        content: 'Lunch and informal discussions.',
        type: 'break',
      },
      {
        time: '14:00 - 15:30',
        title: 'Workshop: AI & Machine Learning for Robotics',
        speaker: 'Prof. Leila Khouaja',
        location: 'Lab 1',
        content: 'Hands-on workshop applying machine learning to robotics. Train neural networks for object detection and implement computer vision algorithms.',
        type: 'workshop',
      },
      {
        time: '15:30 - 16:00',
        title: 'Coffee Break',
        speaker: '',
        location: 'Foyer',
        content: 'Afternoon refreshments.',
        type: 'break',
      },
      {
        time: '16:00 - 17:30',
        title: 'Hands-on: Sensor Fusion & Perception',
        speaker: 'Dr. Mohamed Hadj',
        location: 'Lab 2',
        content: 'Practical session on sensor integration and data fusion. Work with cameras, LiDAR, and IMU sensors to build robust perception systems.',
        type: 'workshop',
      },
    ],
  },
  3: {
    day: 'Day 3',
    date: 'June 3, 2026',
    title: 'Workshops & Closing',
    description: 'Final workshops, project presentations, and closing ceremony',
    sessions: [
      {
        time: '09:00 - 10:30',
        title: 'Workshop: Swarm Robotics',
        speaker: 'Dr. Fatima Al-Rashid',
        location: 'Lab 1',
        content: 'Hands-on workshop on multi-robot coordination and swarm intelligence. Program collaborative behaviors and emergent systems.',
        type: 'workshop',
      },
      {
        time: '10:30 - 11:00',
        title: 'Coffee Break',
        speaker: '',
        location: 'Foyer',
        content: 'Morning refreshments and final networking.',
        type: 'break',
      },
      {
        time: '11:00 - 12:30',
        title: 'Hands-on: Human-Robot Interaction',
        speaker: 'Prof. Noureddine Slama',
        location: 'Lab 2',
        content: 'Practical workshop on designing intuitive human-robot interfaces. Implement gesture recognition and natural language processing.',
        type: 'workshop',
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch Break',
        speaker: '',
        location: 'Dining Area',
        content: 'Final lunch and networking opportunity.',
        type: 'break',
      },
      {
        time: '14:00 - 15:30',
        title: 'Project Presentations & Demonstrations',
        speaker: 'Participants',
        location: 'Main Hall',
        content: 'Showcase your work from the three-day program. Present projects, demonstrate implementations, and receive feedback from experts.',
        type: 'presentation',
      },
      {
        time: '15:30 - 16:00',
        title: 'Coffee Break',
        speaker: '',
        location: 'Foyer',
        content: 'Final refreshments before closing ceremony.',
        type: 'break',
      },
      {
        time: '16:00 - 17:30',
        title: 'Closing Ceremony & Awards',
        speaker: 'IEEE RAS Tunisia Chapter',
        location: 'Main Hall',
        content: 'Closing remarks, certificate distribution, awards for best projects, and final networking session. Celebrate achievements and build lasting connections.',
        type: 'ceremony',
      },
    ],
  },
};

// Program Overview Cards (for program page)
export const programOverview = [
  {
    day: 1,
    date: 'June 1, 2026',
    title: 'Opening & ICRA Plenary',
    description: 'Opening ceremony, plenary sessions streaming from ICRA, and hands-on workshops',
    highlights: ['Opening Ceremony', 'ICRA Plenary Streaming', 'Workshop Sessions', 'Hands-on Labs'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    day: 2,
    date: 'June 2, 2026',
    title: 'Workshops & Hands-on',
    description: 'Intensive hands-on workshops with practical robotics applications',
    highlights: ['Advanced Workshops', 'Practical Labs', 'Team Projects', 'Expert Guidance'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    day: 3,
    date: 'June 3, 2026',
    title: 'Workshops & Closing',
    description: 'Final workshops, project presentations, and closing ceremony',
    highlights: ['Final Workshops', 'Project Showcase', 'Awards Ceremony', 'Networking'],
    color: 'from-red-500 to-orange-500',
  },
];

// What to Expect Section
export const programExpectations = [
  {
    title: 'Coffee Breaks',
    description: 'Regular breaks with refreshments and networking opportunities',
  },
  {
    title: '1.5 Hour Sessions',
    description: 'Focused learning blocks with hands-on practice time',
  },
  {
    title: 'ICRA Streaming',
    description: 'Live plenary sessions from the main ICRA conference',
  },
];

// Venue Information
export const venueInfo = {
  name: 'Tunis Conference Center',
  organizer: 'IEEE RAS Tunisia Chapter',
};
