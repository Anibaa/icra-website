'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CircuitBackground } from './circuit-background';
import { Hero3DRobot } from './hero-3d-robot';
import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-8 lg:pb-12 flex items-center justify-center overflow-hidden"
    >
      {/* Mouse follower effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-purple-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out -z-5"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-red-600/10 rounded-full blur-3xl" />
      </div>
      
      {/* Robotic circuit effect */}
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 sm:space-y-4 lg:space-y-6"
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
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1"
          >
            <div className="relative group w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#f20136' }}
                className="w-full px-5 sm:px-6 py-2.5 rounded-full text-sm text-white font-semibold transition-all duration-200 border border-pink-400/40 hover:border-pink-300 brand-red-glow cursor-not-allowed opacity-90"
                title="Registration opens soon"
              >
                Registration Opens Soon
              </motion.button>
              {/* Tooltip popup */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-gray-900 dark:bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                  Coming Soon!
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45" />
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const programSection = document.getElementById('program');
                programSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 glass rounded-full text-sm text-gray-900 dark:text-white font-medium border border-gray-300 dark:border-white/25 hover:border-cyan-400/40 hover:bg-cyan-500/8 transition"
            >
              View Program
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 pt-3 sm:pt-4 border-t border-gray-300 dark:border-white/10"
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

        {/* Right content - 3D Robot Core - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hidden lg:block relative h-96 xl:h-full"
          style={{ perspective: '1000px' }}
        >
          <div className="absolute inset-0 w-full h-full">
            <Hero3DRobot />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
