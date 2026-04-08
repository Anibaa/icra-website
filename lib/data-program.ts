// Program-related data for landing page and detailed program pages

// Program availability flag - set to true when detailed program is ready
export const isProgramDetailsAvailable = false;

// Program Session Interface
export interface ProgramSession {
  time: string;
  title: string;
  speaker: string;
  location: string;
  content: string;
  type: 'ceremony' | 'plenary' | 'workshop' | 'break' | 'presentation';
}

// Day Program Interface
export interface DayProgram {
  day: string;
  date: string;
  title: string;
  description: string;
  sessions: ProgramSession[];
}

// Detailed Program Data for individual day pages
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

// Program Overview Cards (for landing page and program overview page)
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

// Program Timeline Data (for landing page timeline component)
export const programDays = [
  {
    day: 'Day 1',
    date: 'June 1',
    title: 'Opening & DL Session',
    sessions: [
      'Opening Ceremony',
      'ICRA Plenary Streaming',
      'DL Session',
      'Poster Session',
    ],
  },
  {
    day: 'Day 2',
    date: 'June 2',
    title: 'Hands-on Workshops',
    sessions: [
      'Hands-on Workshops',
      'ICRA Plenary Streaming',
      'Practical Labs',
      'Interactive Sessions',
    ],
  },
  {
    day: 'Day 3',
    date: 'June 3',
    title: 'Closing & Awards',
    sessions: [
      'DL Session',
      'ICRA Plenary Streaming',
      'Award Ceremony',
      'Closing Ceremony',
    ],
  },
];

// Program Features (for landing page)
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

// Program Content (for landing page)
export const programContent = {
  title: '3-Day Intensive Program',
  description: 'June 1-3: ICRA plenary streaming, deep learning sessions, hands-on workshops, and networking opportunities',
};

// What to Expect Section (for program overview page)
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
