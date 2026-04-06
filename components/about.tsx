'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Zap, Globe } from 'lucide-react';

export function About() {
  return (
    <section className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        
        {/* Robot tech lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
        >
          <motion.line
            x1="5%"
            y1="30%"
            x2="25%"
            y2="30%"
            stroke="#f20136"
            strokeWidth="0.5"
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
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 sm:space-y-6"
          >
            <div>
              <div className="inline-block px-3 py-1.5 bg-cyan-600/12 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-700 dark:text-cyan-300 mb-3">
                About ICRA Satellite School
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-[1.1] tracking-tight">
                World-Class Education in Robotics
              </h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              The ICRA Satellite School is an intensive educational program organized by the IEEE Robotics and Automation Society. It brings together the brightest minds in robotics to share cutting-edge research and practical knowledge.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Whether you&apos;re a student, researcher, or industry professional, this program offers a unique opportunity to accelerate your career in robotics and automation.
            </p>

          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {[
              {
                title: 'Comprehensive Curriculum',
                description: 'Theory, applications, and emerging technologies.',
                icon: BookOpen,
              },
              {
                title: 'Expert Faculty',
                description: 'Leading researchers and industry pioneers.',
                icon: Users,
              },
              {
                title: 'Practical Experience',
                description: 'Hands-on labs with robotics equipment.',
                icon: Zap,
              },
              {
                title: 'Global Community',
                description: 'Network with professionals worldwide.',
                icon: Globe,
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-lg p-4 border border-gray-200 dark:border-white/10 hover:border-red-500/20 transition-all group"
                >
                  <div className="flex gap-3">
                    <div className="text-red-500 dark:text-red-400 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white text-sm font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{feature.description}</p>
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
