'use client';

import { motion } from 'framer-motion';
import { speakers } from '@/lib/data';

export function Speakers() {
  return (
    <section id="speakers" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            Featured Speakers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
            Learn from the world&apos;s leading robotics researchers and industry pioneers
          </p>
        </motion.div>

        {speakers.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-600/10 mb-4">
              <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Will be announced soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Speakers will be revealed as we approach the event
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group glass rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition text-center"
              >
                <div className="space-y-3">
                  {/* Avatar placeholder - centered */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300">
                      {speaker.name.charAt(0)}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 dark:group-hover:from-purple-400 group-hover:to-cyan-600 dark:group-hover:to-cyan-400 transition leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">{speaker.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{speaker.specialty}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{speaker.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 px-4">
            {speakers.length === 0 ? 'Stay tuned for speaker announcements' : 'More speakers to be announced as we approach the event'}
          </p>
          <motion.a
            href="https://forms.gle/zn9UJpE9Y9CWxW1R9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#f20136' }}
            className="inline-block px-5 sm:px-6 py-2.5 rounded-full text-sm text-white font-semibold transition border border-pink-400/40 hover:border-pink-300 brand-red-glow"
          >
            Register Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
