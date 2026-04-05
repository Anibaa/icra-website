'use client';

import { motion } from 'framer-motion';
import { BookOpen, Cpu, Zap } from 'lucide-react';

const programDays = [
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

export function ProgramTimeline() {
  return (
    <section id="program" className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            3-Day Intensive Program
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            June 1-3: Expert-led workshops covering robotics fundamentals, hands-on labs, and advanced topics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programDays.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group glass rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-white/10 hover:border-red-500/50 transition"
            >
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    {program.day}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{program.date}</div>
                </div>

                <div className="h-px bg-linear-to-r from-red-600/50 to-pink-500/50" />

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-red-600 dark:group-hover:from-red-400 group-hover:to-pink-600 dark:group-hover:to-pink-400 transition">
                    {program.title}
                  </h3>

                  <ul className="space-y-2 sm:space-y-3">
                    {program.sessions.map((session, sessionIndex) => (
                      <motion.li
                        key={sessionIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (sessionIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex gap-2"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 shrink-0">›</span>
                        <span>{session}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={() => window.location.href = `/program/${index + 1}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-3 sm:mt-4 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white border border-red-500/50 rounded-lg hover:bg-red-500/10 hover:border-red-400/70 transition cursor-pointer"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            {
              icon: BookOpen,
              title: 'Expert Instructors',
              description: 'Learn from pioneering researchers and industry leaders',
            },
            {
              icon: Cpu,
              title: 'Hands-on Labs',
              description: 'Interactive sessions with real robotics platforms',
            },
            {
              icon: Zap,
              title: 'Networking',
              description: 'Connect with professionals from around the world',
            },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="glass rounded-lg p-4 sm:p-6 text-center border border-gray-200 dark:border-white/10 hover:border-red-500/30 transition group"
              >
                <div className="text-red-500 dark:text-red-400 mb-3 sm:mb-4 flex justify-center group-hover:scale-110 transition">
                  <IconComponent size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
