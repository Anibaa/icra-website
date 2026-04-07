'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Clock, MapPin, Users, Video, Coffee, Award, Wrench } from 'lucide-react';

const programDetails = {
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

const getSessionIcon = (type?: string) => {
  switch (type) {
    case 'ceremony':
      return Award;
    case 'plenary':
      return Video;
    case 'workshop':
      return Wrench;
    case 'break':
      return Coffee;
    case 'presentation':
      return Users;
    default:
      return Users;
  }
};

const getSessionColor = (type?: string) => {
  switch (type) {
    case 'ceremony':
      return 'text-yellow-400';
    case 'plenary':
      return 'text-purple-400';
    case 'workshop':
      return 'text-cyan-400';
    case 'break':
      return 'text-orange-400';
    case 'presentation':
      return 'text-green-400';
    default:
      return 'text-gray-400';
  }
};

export default function ProgramDetail() {
  const router = useRouter();
  const params = useParams();
  const dayNum = parseInt(params.day as string) || 1;
  const detail = programDetails[dayNum as keyof typeof programDetails] || programDetails[1];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <motion.button
            onClick={() => router.back()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-white/10 rounded-lg transition"
          >
            <ArrowLeft size={24} className="text-white" />
          </motion.button>
          <div>
            <p className="text-sm text-gray-400">{detail.date}</p>
            <h1 className="text-2xl font-bold text-white">{detail.day}</h1>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{detail.title}</h2>
              <p className="text-xl text-gray-400">{detail.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3 glass rounded-lg p-4">
                <Users size={24} className="text-red-400" />
                <div>
                  <p className="text-xs text-gray-400">ORGANIZED BY</p>
                  <p className="text-sm font-semibold text-white">IEEE RAS Tunisia Chapter</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass rounded-lg p-4">
                <MapPin size={24} className="text-red-400" />
                <div>
                  <p className="text-xs text-gray-400">LOCATION</p>
                  <p className="text-sm font-semibold text-white">Tunis Conference Center</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-12">Session Schedule</h3>

          <div className="space-y-6">
            {detail.sessions.map((session, index) => {
              const SessionIcon = getSessionIcon(session.type);
              const iconColor = getSessionColor(session.type);
              const isBreak = session.type === 'break';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass rounded-xl p-8 border border-white/10 hover:border-red-500/30 transition ${isBreak ? 'bg-white/5' : ''}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Time */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={20} className="text-red-400" />
                        <span className="text-sm font-mono font-bold text-white">{session.time}</span>
                      </div>
                      {session.location && (
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-gray-500" />
                          <span className="text-xs text-gray-400">{session.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10">
                      <div className="flex items-center gap-3 mb-3">
                        <SessionIcon size={20} className={iconColor} />
                        <h4 className="text-xl font-bold text-white">{session.title}</h4>
                      </div>
                      {session.speaker && (
                        <div className="flex items-center gap-2 mb-4">
                          <Users size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-400">{session.speaker}</span>
                        </div>
                      )}
                      <p className="text-gray-300">{session.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Ready to Join Us?</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Register now for {detail.day} and gain access to world-class training in robotics and automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="px-8 py-4 rounded-lg text-white font-semibold border border-pink-400/50 hover:border-pink-300 brand-red-glow transition"
            >
              Register for {detail.day}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Navigation to other days */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8">Other Days</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((day) => (
              day !== dayNum && (
                <motion.button
                  key={day}
                  onClick={() => router.push(`/program/${day}`)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition text-left"
                >
                  <p className="text-sm text-gray-400 mb-2">View Program</p>
                  <h4 className="text-xl font-bold text-white mb-1">Day {day}</h4>
                  <p className="text-sm text-gray-300">June {day}</p>
                </motion.button>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
