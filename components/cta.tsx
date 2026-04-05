'use client';

import { motion } from 'framer-motion';
import { Users, Cpu, Globe } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-red-600/20 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 md:p-16 border border-white/10 text-center space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Ready to Transform Your Robotics Career?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Join 500+ professionals for an intensive five-day program with world-leading roboticists. Early bird registration is now open with special discounts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8"
          >
            {[
              { icon: Users, text: '50+ Expert Speakers' },
              { icon: Cpu, text: 'Hands-on Labs' },
              { icon: Globe, text: 'Global Network' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} className="space-y-2 group">
                  <div className="text-red-400 flex justify-center group-hover:scale-110 transition">
                    <Icon size={32} />
                  </div>
                  <p className="text-gray-300 font-medium">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="px-10 py-4 rounded-lg text-white font-semibold hover:shadow-2xl transition text-lg border border-pink-400/50 hover:border-pink-300 brand-red-glow"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass rounded-lg text-white font-semibold border border-red-500/30 hover:border-red-400/60 hover:bg-red-500/10 transition text-lg"
            >
              Early Bird Discount
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-400 pt-4"
          >
            Limited seats available. Early registration ends June 15, 2026.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
