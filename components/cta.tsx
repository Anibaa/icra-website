'use client';

import { motion } from 'framer-motion';
import { Users, Cpu, Globe } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 via-cyan-600/15 to-red-600/15 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-5 sm:p-8 lg:p-10 border border-gray-200 dark:border-white/10 text-center space-y-5 sm:space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight"
          >
            Ready to Transform Your Robotics Career?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Join 100+ professionals for an intensive three-day program with world-leading roboticists. Early bird registration is now open with special discounts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-4 my-5 sm:my-6"
          >
            {[
              { icon: Users, text: '10+ Expert Speakers' },
              { icon: Cpu, text: 'Hands-on Labs' },
              { icon: Globe, text: 'Global Network' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} className="space-y-2 group">
                  <div className="text-red-500 dark:text-red-400 flex justify-center group-hover:scale-105 transition">
                    <Icon size={22} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center pt-3"
          >
            <div className="relative group w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://forms.gle/zn9UJpE9Y9CWxW1R9', '_blank')}
                style={{ backgroundColor: '#f20136' }}
                className="w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-semibold transition text-sm border border-pink-400/40 hover:border-pink-300 brand-red-glow cursor-pointer"
              >
                Register Now
              </motion.button>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const programSection = document.getElementById('program');
                programSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 glass rounded-full text-gray-900 dark:text-white font-semibold border border-red-500/30 hover:border-red-400/50 hover:bg-red-500/10 transition text-sm"
            >
              View Program
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-2"
          >
            Limited seats available.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
