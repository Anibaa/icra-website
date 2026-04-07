'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'IEEE RAS', category: 'Organizing Partner' },
  { name: 'MIT CSAIL', category: 'Academic Partner' },
  { name: 'Stanford Robotics', category: 'Academic Partner' },
  { name: 'CMU RI', category: 'Academic Partner' },
  { name: 'Boston Dynamics', category: 'Industry Partner' },
  { name: 'KUKA Robotics', category: 'Industry Partner' },
  { name: 'ABB Robotics', category: 'Sponsor' },
  { name: 'Universal Robots', category: 'Sponsor' },
];

export function Partners() {
  return (
    <section id="partners" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight tracking-tight">
            Partners & Sponsors
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Supported by leading academic institutions and industry leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-white/10 hover:border-cyan-500/20 transition flex flex-col items-center justify-center text-center min-h-28 sm:min-h-32"
            >
              <div className="space-y-1.5">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{partner.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">{partner.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl mx-auto px-4">
            Interested in becoming a partner or sponsor? We welcome collaboration from organizations committed to advancing robotics research and education.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#f20136' }}
            className="px-5 sm:px-6 py-2.5 rounded-lg text-sm text-white font-semibold hover:shadow-xl transition border border-pink-400/40 brand-red-glow"
          >
            Partnership Inquiries
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
