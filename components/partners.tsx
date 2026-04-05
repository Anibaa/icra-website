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
    <section id="partners" className="relative w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Partners & Sponsors
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Supported by leading academic institutions and industry leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass rounded-lg p-6 border border-white/10 hover:border-cyan-500/30 transition flex flex-col items-center justify-center text-center min-h-32"
            >
              <div className="space-y-2">
                <h3 className="font-bold text-white">{partner.name}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{partner.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Interested in becoming a partner or sponsor? We welcome collaboration from organizations committed to advancing robotics research and education.
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#f20136' }}
            className="px-8 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition border border-pink-400/50 brand-red-glow"
          >
            Partnership Inquiries
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
