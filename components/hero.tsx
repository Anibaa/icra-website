'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CircuitBackground } from './circuit-background';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-16 sm:pt-20 flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-red-600/10 rounded-full blur-3xl" />
      </div>
      
      {/* Robotic circuit effect */}
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 sm:space-y-6 lg:space-y-7"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-2">
            <div className="inline-block px-3 py-1.5 border rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(242, 1, 54, 0.12)', borderColor: 'rgba(242, 1, 54, 0.4)', color: '#f20136' }}>
              June 1-3, 2026 • 3 Days
            </div>
            <div className="inline-block px-3 py-1.5 border rounded-full text-xs font-medium bg-slate-500/8 dark:bg-slate-500/8 border-slate-500/25 dark:border-slate-500/25 text-slate-600 dark:text-slate-400">
              IEEE RAS Tunisia Chapter
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 dark:text-white tracking-tight"
          >
            ICRA Satellite School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            Join world-leading roboticists for an intensive program covering advanced topics in robotics, control systems, and autonomous systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-lg text-sm text-white font-semibold hover:shadow-xl transition-all duration-200 border border-pink-400/40 hover:border-pink-300 brand-red-glow"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 glass rounded-lg text-sm text-gray-900 dark:text-white font-medium border border-gray-300 dark:border-white/25 hover:border-cyan-400/40 hover:bg-cyan-500/8 transition"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 sm:gap-6 lg:gap-8 pt-5 sm:pt-6 border-t border-gray-300 dark:border-white/10"
          >
            <div>
              <div className="text-lg sm:text-xl font-bold" style={{ color: '#f20136' }}>3 Days</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">intensive training</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400">10+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">expert speakers</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400">8</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">key topics</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right content - Logo/Image area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 sm:h-80 lg:h-96 xl:h-full flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 25, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Glowing circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 border border-purple-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border border-cyan-500/20 rounded-full"
              />
            </div>

            {/* Logo content */}
            <div className="relative z-10 text-center space-y-2 sm:space-y-4">
              <div className="inline-block px-4 py-3 sm:px-6 sm:py-4 lg:px-8 glass rounded-xl sm:rounded-2xl">
                {mounted && (
                  <div className="relative h-16 w-32 sm:h-20 sm:w-40 lg:h-24 lg:w-48 mx-auto mb-2 sm:mb-3">
                    <Image
                      src={theme === 'dark' ? '/Logos/white.png' : '/Logos/black.png'}
                      alt="ICRA Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
                {!mounted && (
                  <div className="h-16 w-32 sm:h-20 sm:w-40 lg:h-24 lg:w-48 mx-auto mb-2 sm:mb-3 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
                )}
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Satellite School 2026</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
