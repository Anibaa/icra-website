'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { committeeMembers } from '@/lib/data';

export function Committee() {
  return (
    <section id="committee" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-red-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            Organizing Committee
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
            Distinguished leaders in robotics research overseeing the program
          </p>
        </motion.div>

        {committeeMembers.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600/10 mb-4">
              <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Will be announced soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Committee members will be revealed as we approach the event
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {committeeMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative glass rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-white/10 hover:border-red-500/40 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-b from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top colored bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative text-center">
                  {/* Avatar at top center */}
                  <div className="flex justify-center mb-3">
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-red-500/40 transition-all duration-300 overflow-hidden ring-4 ring-gray-100 dark:ring-gray-800 group-hover:ring-red-500/20">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={80}
                            height={80}
                            quality={95}
                            className="w-full h-full object-cover"
                            priority={index < 4}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <span>
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content stacked below */}
                  <div className="space-y-2">
                    {/* Name */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {member.name}
                    </h3>

                    {/* Role badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/10 border border-red-500/25 rounded-full text-xs font-medium text-red-700 dark:text-red-300 uppercase tracking-wider group-hover:bg-red-600/20 group-hover:border-red-500/40 transition-colors">
                      {member.role}
                    </div>

                    {/* Organization info */}
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {member.affiliation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
