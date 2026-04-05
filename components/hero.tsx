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
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-red-600/15 rounded-full blur-3xl" />
      </div>
      
      {/* Robotic circuit effect */}
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6 lg:space-y-8"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-2 sm:space-y-3">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm font-semibold" style={{ backgroundColor: 'rgba(242, 1, 54, 0.15)', borderColor: 'rgba(242, 1, 54, 0.5)', color: '#f20136' }}>
              June 1-3, 2026 • 3 Days
            </div>
            <div className="block px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs font-semibold bg-slate-500/10 dark:bg-slate-500/10 border-slate-500/30 dark:border-slate-500/30 text-slate-600 dark:text-slate-400">
              Organized by IEEE RAS Tunisia Chapter
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            ICRA Satellite School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            Join world-leading roboticists for an intensive program covering advanced topics in robotics, control systems, and autonomous systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base text-white font-semibold hover:shadow-2xl transition-all duration-200 border border-pink-400/50 hover:border-pink-300 brand-red-glow"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 glass rounded-lg text-sm sm:text-base text-gray-900 dark:text-white font-medium border border-gray-300 dark:border-white/30 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-300 dark:border-white/10"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold" style={{ color: '#f20136' }}>3 Days</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">intensive training</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400">10+</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">expert speakers</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">8</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">key topics</div>
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
