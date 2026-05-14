'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { partners, partnersContent } from '@/lib/data';

export function Partners() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section id="partners" className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            {partnersContent.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
            {partnersContent.description}
          </p>
        </motion.div>

        {partners.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-600/10 mb-4">
              <svg className="w-10 h-10 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Will be announced soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Partners and sponsors will be revealed as we approach the event
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 hover:border-cyan-500/30 transition flex flex-col items-center justify-center"
              >
                {/* Logo Container - Fixed aspect ratio */}
                <div className="w-full aspect-3/2 relative mb-4 sm:mb-6 flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg">
                  {partner.logo && mounted ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo === '/Logos/white.png' && theme === 'light' ? '/Logos/black.png' : partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  ) : partner.logo && !mounted ? (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
                  ) : null}
                </div>
                
                {/* Text Content */}
                <div className="space-y-1 sm:space-y-2 text-center">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-tight">{partner.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider font-medium">{partner.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Partnership Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-2xl mx-auto px-4">
            {partnersContent.callToAction}
          </p>
          <motion.a
            href="https://forms.gle/zn9UJpE9Y9CWxW1R9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#f20136' }}
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base text-white font-semibold transition border border-pink-400/50 brand-red-glow"
          >
            Register Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
