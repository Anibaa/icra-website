// Program-related data for landing page and detailed program pages

// Program availability flag - set to true when detailed program is ready
export const isProgramDetailsAvailable = true;

// Program status note
export const programNote = "⚠️ This program is a draft and is subject to change. Final details will be confirmed closer to the event date.";

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

// Online Boot Camp Sessions (Pre-Event)
export interface BootCampSession {
  date: string;
  time: string;
  title: string;
  description: string;
  speakers: string;
}

export const bootCampSessions: BootCampSession[] = [
  {
    date: 'May 21, 2026',
    time: '8:00 PM - 9:30 PM',
    title: 'Online Boot Camp Day 1',
    description: 'Kick off the event and first talk & Introduction to Science and research + Panel',
    speakers: 'Daminos',
  },
  {
    date: 'May 22, 2026',
    time: '8:00 PM - 9:30 PM',
    title: 'Online Boot Camp Day 2',
    description: 'Online Session 2',
    speakers: 'TBA',
  },
  {
    date: 'May 23, 2026',
    time: '8:00 PM - 9:30 PM',
    title: 'Online Boot Camp Day 3',
    description: 'Online Session 3',
    speakers: 'TBA',
  },
];

// Detailed Program Data for individual day pages
export const detailedProgram: Record<number, DayProgram> = {
  1: {
    day: 'Day 1',
    date: 'June 1, 2026',
    title: 'Opening & Workshops',
    description: 'Event check-in, opening ceremony, panel discussion, and hands-on workshops',
    sessions: [
      {
        time: '08:00 - 10:00',
        title: 'Event Check-in',
        speaker: '',
        location: 'Hammamet Garden Resort & Spa - Main Lobby',
        content: 'Registration and welcome package distribution. Meet fellow participants and get oriented with the venue.',
        type: 'ceremony',
      },
      {
        time: '10:00 - 10:45',
        title: 'Opening Ceremony',
        speaker: 'IEEE RAS Tunisia Chapter',
        location: 'Main Hall',
        content: 'Welcome address, introduction to the satellite school program, and overview of the three-day schedule.',
        type: 'ceremony',
      },
      {
        time: '10:45 - 11:45',
        title: 'Panel Discussion: "Robotics in Tunisia"',
        speaker: 'TBD',
        location: 'Main Hall',
        content: 'Industry leaders discuss the state of robotics in Tunisia, challenges, opportunities, and future directions.',
        type: 'plenary',
      },
      {
        time: '12:00 - 14:00',
        title: 'Lunch + Hotel Check-in',
        speaker: '',
        location: 'Dining Area',
        content: 'Lunch and hotel room check-in for participants.',
        type: 'break',
      },
      {
        time: '14:00 - 15:00',
        title: 'Round Tables',
        speaker: 'TBA',
        location: 'Conference Rooms',
        content: 'Interactive round table discussions on various robotics topics.',
        type: 'workshop',
      },
      {
        time: '15:00 - 15:30',
        title: 'Ice Break Activities',
        speaker: 'TBD',
        location: 'Main Hall',
        content: 'Interactive and fun Mentimeter session with facts about RAS, ICRA, Robotics and research.',
        type: 'break',
      },
      {
        time: '15:30 - 17:00',
        title: 'Mobile Robots Workshop',
        speaker: 'TBA',
        location: 'Workshop Area',
        content: 'Hands-on workshop on mobile robotics platforms and autonomous navigation.',
        type: 'workshop',
      },
      {
        time: '17:00 - 19:00',
        title: 'Poster Sessions & Projects Showcase',
        speaker: 'Participants',
        location: 'Exhibition Hall',
        content: 'Present your research posters and projects. Best poster & best project awards will be announced.',
        type: 'presentation',
      },
      {
        time: '17:00 - 19:00',
        title: 'Robotic Arms Workshop',
        speaker: 'TBD',
        location: 'Workshop Area',
        content: 'Parallel session: Hands-on workshop on robotic arm manipulation and control.',
        type: 'workshop',
      },
      {
        time: '19:00 - 21:00',
        title: 'Dinner & Networking Activities/Party',
        speaker: '',
        location: 'Dining Area & Social Space',
        content: 'Evening dinner followed by networking activities and social gathering.',
        type: 'break',
      },
    ],
  },
  2: {
    day: 'Day 2',
    date: 'June 2, 2026',
    title: 'Hands-on Workshops & ICRA Streaming',
    description: 'Intensive parallel hands-on workshops, ICRA plenary streaming, and DL sessions',
    sessions: [
      {
        time: '07:00 - 08:30',
        title: 'Breakfast',
        speaker: '',
        location: 'Dining Area',
        content: 'Morning breakfast at the hotel.',
        type: 'break',
      },
      {
        time: '08:30 - 12:00',
        title: 'Parallel Hands-on Workshop 1',
        speaker: 'TBA',
        location: 'Multiple Workshop Rooms',
        content: 'Three parallel workshop tracks covering different robotics topics (details TBD).',
        type: 'workshop',
      },
      {
        time: '12:00 - 13:00',
        title: 'Lunch',
        speaker: '',
        location: 'Dining Area',
        content: 'Lunch break.',
        type: 'break',
      },
      {
        time: '13:00 - 14:00',
        title: 'ICRA Plenary (Streaming)',
        speaker: 'ICRA 2026 Keynote Speakers',
        location: 'Main Hall',
        content: 'Live streaming of plenary sessions from the main ICRA conference.',
        type: 'plenary',
      },
      {
        time: '14:00 - 15:00',
        title: 'DL Session',
        speaker: 'TBA',
        location: 'Main Hall',
        content: 'Deep Learning session with expert speaker.',
        type: 'plenary',
      },
      {
        time: '15:00 - 15:30',
        title: 'Networking Break',
        speaker: '',
        location: 'Foyer',
        content: 'Coffee break and networking opportunity.',
        type: 'break',
      },
      {
        time: '15:30 - 17:00',
        title: 'Keynote Streaming',
        speaker: 'ICRA 2026',
        location: 'Main Hall',
        content: 'Live streaming of keynote presentations from ICRA 2026.',
        type: 'plenary',
      },
      {
        time: '17:00 - 17:30',
        title: 'Networking Break',
        speaker: '',
        location: 'Foyer',
        content: 'Afternoon refreshments and networking.',
        type: 'break',
      },
      {
        time: '17:30 - 19:30',
        title: 'Parallel Hands-on Workshop 2',
        speaker: 'TBA',
        location: 'Multiple Workshop Rooms',
        content: 'Three parallel workshop tracks covering different robotics topics (details TBD).',
        type: 'workshop',
      },
      {
        time: '19:30 - 21:00',
        title: 'Dinner',
        speaker: '',
        location: 'Dining Area',
        content: 'Evening dinner.',
        type: 'break',
      },
    ],
  },
  3: {
    day: 'Day 3',
    date: 'June 3, 2026',
    title: 'Final Workshops & Closing',
    description: 'Final hands-on workshops, panel discussions, ICRA streaming, and closing ceremony',
    sessions: [
      {
        time: '07:00 - 09:00',
        title: 'Breakfast and Check Out',
        speaker: '',
        location: 'Dining Area',
        content: 'Morning breakfast and hotel check-out.',
        type: 'break',
      },
      {
        time: '09:00 - 11:30',
        title: 'Parallel Hands-on Workshop 3',
        speaker: 'TBA',
        location: 'Multiple Workshop Rooms',
        content: 'Three parallel workshop tracks covering different robotics topics (details TBD).',
        type: 'workshop',
      },
      {
        time: '11:30 - 12:00',
        title: 'Coffee Break',
        speaker: '',
        location: 'Foyer',
        content: 'Morning refreshments.',
        type: 'break',
      },
      {
        time: '12:00 - 13:00',
        title: 'Panel with Outstanding Participants',
        speaker: 'TBA',
        location: 'Main Hall',
        content: 'Panel discussion featuring the outstanding participants from each workshop track.',
        type: 'plenary',
      },
      {
        time: '13:00 - 14:00',
        title: 'Plenary (Streaming)',
        speaker: 'ICRA 2026',
        location: 'Main Hall',
        content: 'Live streaming of plenary session from ICRA 2026.',
        type: 'plenary',
      },
      {
        time: '14:00 - 15:00',
        title: 'Closing Ceremony',
        speaker: 'IEEE RAS Tunisia Chapter',
        location: 'Main Hall',
        content: 'Closing remarks, certificate distribution, awards ceremony, and final networking session.',
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
    title: 'Opening & Workshops',
    description: 'Event check-in, opening ceremony, panel discussion on Robotics in Tunisia, and hands-on workshops',
    highlights: ['Opening Ceremony', 'Panel: Robotics in Tunisia', 'Mobile Robots Workshop', 'Poster Sessions & Awards'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    day: 2,
    date: 'June 2, 2026',
    title: 'Hands-on Workshops & ICRA Streaming',
    description: 'Intensive parallel hands-on workshops, ICRA plenary streaming, and DL sessions',
    highlights: ['3 Parallel Workshop Tracks', 'ICRA Plenary Streaming', 'DL Session', 'Keynote Streaming'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    day: 3,
    date: 'June 3, 2026',
    title: 'Final Workshops & Closing',
    description: 'Final hands-on workshops, panel with outstanding participants, and closing ceremony',
    highlights: ['Final Workshop Sessions', 'Outstanding Participants Panel', 'ICRA Streaming', 'Closing Ceremony & Awards'],
    color: 'from-red-500 to-orange-500',
  },
];

// Program Timeline Data (for landing page timeline component)
export const programDays = [
  {
    day: 'Day 1',
    date: 'June 1',
    title: 'Opening & Workshops',
    sessions: [
      'Opening Ceremony',
      'Panel: Robotics in Tunisia',
      'Mobile Robots Workshop',
      'Poster Sessions & Projects',
    ],
  },
  {
    day: 'Day 2',
    date: 'June 2',
    title: 'Hands-on Workshops',
    sessions: [
      'Parallel Workshops (EmoBot, Drones, RoboDog)',
      'ICRA Plenary Streaming',
      'DL Session',
      'Keynote Streaming',
    ],
  },
  {
    day: 'Day 3',
    date: 'June 3',
    title: 'Closing & Awards',
    sessions: [
      'Final Workshop Sessions',
      'Outstanding Participants Panel',
      'ICRA Plenary Streaming',
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
  name: 'Hammamet Garden Resort & Spa',
  location: 'Hammamet, Tunisia',
  organizer: 'IEEE RAS Tunisia Chapter',
};
