'use client';

import { motion } from 'framer-motion';
import { BookOpen, Cpu, Zap } from 'lucide-react';
import { programDays, programFeatures, programContent, isProgramDetailsAvailable } from '@/lib/data-program';

export function ProgramTimeline() {
  return (
    <section id="program" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight tracking-tight">
            {programContent.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            {programContent.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {programDays.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group glass rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-white/10 hover:border-red-500/20 transition"
            >
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    {program.day}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{program.date}</div>
                </div>

                <div className="h-px bg-linear-to-r from-red-600/40 to-pink-500/40" />

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-red-600 dark:group-hover:from-red-400 group-hover:to-pink-600 dark:group-hover:to-pink-400 transition">
                    {program.title}
                  </h3>

                  <ul className="space-y-2">
                    {program.sessions.map((session, sessionIndex) => (
                      <motion.li
                        key={sessionIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.08) + (sessionIndex * 0.04) }}
                        viewport={{ once: true }}
                        className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex gap-2"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 shrink-0">›</span>
                        <span>{session}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {isProgramDetailsAvailable && (
                  <motion.button
                    onClick={() => window.location.href = `/program/${index + 1}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full mt-3 px-4 py-2 text-xs font-medium text-gray-900 dark:text-white border border-red-500/30 rounded-lg hover:bg-red-500/10 hover:border-red-400/50 transition cursor-pointer"
                  >
                    View Details
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Program Coming Soon Notice - only show when details are not available */}
        {!isProgramDetailsAvailable && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/10 border border-cyan-500/25 text-sm text-cyan-700 dark:text-cyan-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Detailed program will be shared soon</span>
            </div>
          </motion.div>
        )}

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-5"
        >
          {programFeatures.map((feature, index) => {
            const icons = [BookOpen, Cpu, Zap];
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="glass rounded-lg p-4 text-center border border-gray-200 dark:border-white/10 hover:border-red-500/20 transition group"
              >
                <div className="text-red-500 dark:text-red-400 mb-3 flex justify-center group-hover:scale-105 transition">
                  <IconComponent size={22} />
                </div>
                <h3 className="text-gray-900 dark:text-white text-sm font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
