'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Users, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 400], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show bar after scrolling 400px
      setIsVisible(window.scrollY > 400);
      
      // Hide bar when reaching bottom (within 200px of footer)
      setIsAtBottom(scrollPosition >= documentHeight - 200);
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show if not visible or at bottom
  if (!isVisible || isAtBottom) return null;

  return (
    <motion.div
      style={{ opacity }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 glass-dark backdrop-blur-xl border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Info */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-400" />
              <span className="text-gray-700 dark:text-gray-300">📍 Tunisia • June 1-3, 2026</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-700 dark:text-gray-300">Limited Seats</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300">Early Bird Ends Soon</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const programSection = document.getElementById('program');
                programSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 glass rounded-full text-sm font-medium text-gray-900 dark:text-white border border-red-500/30 hover:border-red-400/60 hover:bg-red-500/10 transition"
            >
              View Program
            </motion.button>
            <motion.a
              href="https://forms.gle/p4rx7A9jF2LaPsty8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-semibold text-white border border-pink-400/50 hover:border-pink-300 brand-red-glow transition text-center relative overflow-hidden"
              aria-label="Apply for Travel Grant"
            >
              <span className="relative z-10">Travel Grant</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
