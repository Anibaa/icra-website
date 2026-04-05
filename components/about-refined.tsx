'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Zap, Globe } from 'lucide-react';

export function About() {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-18 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div>
              <div className="inline-block px-3 py-1.5 bg-cyan-600/12 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-700 dark:text-cyan-300 mb-3">
                About ICRA Satellite School
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight tracking-tight">
                World-Class Education in Robotics
              </h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              The ICRA Satellite School is an intensive educational program organized by the IEEE Robotics and Automation Society. It brings together the brightest minds in robotics to share cutting-edge research and practical knowledge.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Whether you&apos;re a student, researcher, or industry professional, this program offers a unique opportunity to accelerate your career in robotics and automation.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { number: '15+', label: 'Years Excellence' },
                { number: '10,000+', label: 'Alumni' },
                { number: '100+', label: 'Partners' },
                { number: '$5M+', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 dark:from-purple-400 to-cyan-600 dark:to-cyan-400">
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
