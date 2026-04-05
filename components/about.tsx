'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Zap, Globe } from 'lucide-react';

export function About() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        {/* Robot tech lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
        >
          <motion.line
            x1="5%"
            y1="30%"
            x2="25%"
            y2="30%"
            stroke="#f20136"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.line
            x1="75%"
            y1="70%"
            x2="95%"
            y2="70%"
            stroke="#f20136"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <div>
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-600/20 border border-cyan-500/50 rounded-full text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 mb-3 sm:mb-4">
                About ICRA Satellite School
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                World-Class Education in Robotics
              </h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              The ICRA Satellite School is an intensive educational program organized by the IEEE Robotics and Automation Society. It brings together the brightest minds in robotics to share cutting-edge research and practical knowledge.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Whether you&apos;re a student, researcher, or industry professional, this program offers a unique opportunity to accelerate your career in robotics and automation.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4"
            >
              {[
                { number: '15+', label: 'Years of Excellence' },
                { number: '10,000+', label: 'Alumni Worldwide' },
                { number: '100+', label: 'Research Partners' },
                { number: '$5M+', label: 'Industry Support' },
              ].map((stat, index) => (
                <div key={index} className="space-y-0.5 sm:space-y-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 dark:from-purple-400 to-cyan-600 dark:to-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {[
              {
                title: 'Comprehensive Curriculum',
                description: 'Covering theory, practical applications, and emerging technologies in robotics.',
                icon: BookOpen,
              },
              {
                title: 'Expert Faculty',
                description: 'Learn from leading researchers and industry pioneers.',
                icon: Users,
              },
              {
                title: 'Practical Experience',
                description: 'Hands-on labs with state-of-the-art robotics equipment.',
                icon: Zap,
              },
              {
                title: 'Global Community',
                description: 'Network with professionals and students from around the world.',
                icon: Globe,
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-white/10 hover:border-red-500/30 transition group"
                >
                  <div className="flex gap-3 sm:gap-4">
                    <div className="text-red-500 dark:text-red-400 shrink-0 group-hover:scale-110 transition">
                      <IconComponent size={28} className="sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
