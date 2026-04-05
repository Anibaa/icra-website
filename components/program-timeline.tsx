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
    <section id="program" className="relative w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            3-Day Intensive Program
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            June 1-3: Expert-led workshops covering robotics fundamentals, hands-on labs, and advanced topics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programDays.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group glass rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                    {program.day}
                  </div>
                  <div className="text-xs text-gray-500">{program.date}</div>
                </div>

                <div className="h-px bg-gradient-to-r from-red-600/50 to-pink-500/50" />

                <div>
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 transition">
                    {program.title}
                  </h3>

                  <ul className="space-y-3">
                    {program.sessions.map((session, sessionIndex) => (
                      <motion.li
                        key={sessionIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (sessionIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-300 flex gap-2"
                      >
                        <span className="text-cyan-400 flex-shrink-0">›</span>
                        <span>{session}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={() => window.location.href = `/program/${index + 1}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 px-4 py-2 text-sm font-medium text-white border border-red-500/50 rounded-lg hover:bg-red-500/10 hover:border-red-400/70 transition cursor-pointer"
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
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
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
                className="glass rounded-lg p-6 text-center border border-white/10 hover:border-red-500/30 transition group"
              >
                <div className="text-red-400 mb-4 flex justify-center group-hover:scale-110 transition">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
