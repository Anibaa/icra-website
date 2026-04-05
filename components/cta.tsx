'use client';

import { motion } from 'framer-motion';
import { Users, Cpu, Globe } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 via-cyan-600/20 to-red-600/20 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-12 xl:p-16 border border-gray-200 dark:border-white/10 text-center space-y-6 sm:space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Ready to Transform Your Robotics Career?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Join 500+ professionals for an intensive five-day program with world-leading roboticists. Early bird registration is now open with special discounts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8"
          >
            {[
              { icon: Users, text: '50+ Expert Speakers' },
              { icon: Cpu, text: 'Hands-on Labs' },
              { icon: Globe, text: 'Global Network' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} className="space-y-1.5 sm:space-y-2 group">
                  <div className="text-red-500 dark:text-red-400 flex justify-center group-hover:scale-110 transition">
                    <Icon size={28} className="sm:w-8 sm:h-8" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-white font-semibold hover:shadow-2xl transition text-base sm:text-lg border border-pink-400/50 hover:border-pink-300 brand-red-glow"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 glass rounded-lg text-gray-900 dark:text-white font-semibold border border-red-500/30 hover:border-red-400/60 hover:bg-red-500/10 transition text-base sm:text-lg"
            >
              Early Bird Discount
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-2 sm:pt-4"
          >
            Limited seats available. Early registration ends June 15, 2026.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
