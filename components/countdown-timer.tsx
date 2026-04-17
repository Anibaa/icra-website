'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  passed: boolean;
}

export function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [eventCountdown, setEventCountdown] = useState<CountdownData>({
    days: 0,
    hours: 0,
    minutes: 0,
    passed: false,
  });

  const days = [
    { date: '1', month: 'JUN', label: 'Day 1', desc: 'Foundations & Theory' },
    { date: '2', month: 'JUN', label: 'Day 2', desc: 'Hands-on Labs' },
    { date: '3', month: 'JUN', label: 'Day 3', desc: 'Advanced Topics' },
  ];

  const calculateCountdown = (targetDay: number): CountdownData => {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // June dates in 2026
    const target = new Date(currentYear, 5, targetDay, 0, 0, 0, 0); // Month is 0-indexed, so 5 = June
    
    // If date has passed, calculate for next year
    if (target < now) {
      target.setFullYear(currentYear + 1);
    }
    
    const diff = target.getTime() - now.getTime();
    
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, passed: true };
    }
    
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const totalMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return {
      days: totalDays,
      hours: totalHours,
      minutes: totalMinutes,
      passed: false,
    };
  };

  useEffect(() => {
    setMounted(true);
    
    // Calculate initial countdown for event start (June 1)
    const eventCountdown = calculateCountdown(1);
    setEventCountdown(eventCountdown);
    
    // Update every minute
    const interval = setInterval(() => {
      const eventCountdown = calculateCountdown(1);
      setEventCountdown(eventCountdown);
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="countdown" className="relative w-full py-4 sm:py-8 lg:py-12 overflow-hidden">
      {/* Robot background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated grid background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#f20136" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Robot nodes and connections */}
        <motion.div
          className="absolute top-10 left-10 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#f20136' }}
          animate={{ boxShadow: ['0 0 10px #f20136', '0 0 20px #f20136', '0 0 10px #f20136'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-16 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: '#f20136' }}
          animate={{ boxShadow: ['0 0 8px #f20136', '0 0 16px #f20136', '0 0 8px #f20136'] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#f20136' }}
          animate={{ boxShadow: ['0 0 12px #f20136', '0 0 24px #f20136', '0 0 12px #f20136'] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.div
          className="absolute bottom-16 right-1/4 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: '#f20136' }}
          animate={{ boxShadow: ['0 0 10px #f20136', '0 0 20px #f20136', '0 0 10px #f20136'] }}
          transition={{ duration: 2.3, repeat: Infinity, delay: 0.9 }}
        />

        {/* Animated circuit lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
        >
          <motion.line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="20%"
            stroke="#f20136"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.line
            x1="70%"
            y1="30%"
            x2="90%"
            y2="30%"
            stroke="#f20136"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.line
            x1="20%"
            y1="70%"
            x2="40%"
            y2="70%"
            stroke="#f20136"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </motion.svg>

        {/* Horizontal scan lines */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent"
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Event Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-0 text-center"
        >
          <motion.div 
            className="relative glass rounded-2xl p-3 sm:p-5 lg:p-7 border-2 border-red-500/20 overflow-hidden max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 blur-2xl opacity-15 -z-10"
              style={{ backgroundColor: '#f20136' }}
            />

            {/* Robotic corner brackets */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-red-500/60" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-red-500/60" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-red-500/60" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-red-500/60" />

            {/* Animated circuit lines */}
            <motion.div
              className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />

            {/* Pulsing data nodes */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-red-500"
                style={{
                  top: `${20 + i * 20}%`,
                  left: i % 2 === 0 ? '5%' : '95%',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            <div className="relative z-10 space-y-3 sm:space-y-4">
              <div>
                <motion.h2 
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-gray-900 dark:text-white tracking-tight leading-tight"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(242, 1, 54, 0.3)',
                      '0 0 20px rgba(242, 1, 54, 0.5)',
                      '0 0 10px rgba(242, 1, 54, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  EVENT STARTS IN
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm tracking-widest uppercase">June 1-3 Satellite School</p>
              </div>

              {/* Large Event Countdown */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <motion.div 
                  className="glass rounded-lg p-2.5 sm:p-3 md:p-4 border border-red-500/20 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Robotic corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-500/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-500/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-500/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500/50" />
                  
                  {/* Animated scan line */}
                  <motion.div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
                    animate={{ y: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-mono relative z-10">
                    {eventCountdown.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-0.5 sm:mt-1 relative z-10">Days</div>
                </motion.div>

                <motion.div 
                  className="glass rounded-lg p-2.5 sm:p-3 md:p-4 border border-red-500/20 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Robotic corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-500/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-500/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-500/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500/50" />
                  
                  {/* Animated scan line */}
                  <motion.div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
                    animate={{ y: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.3 }}
                  />
                  
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-mono relative z-10">
                    {eventCountdown.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-0.5 sm:mt-1 relative z-10">Hours</div>
                </motion.div>

                <motion.div 
                  className="glass rounded-lg p-2.5 sm:p-3 md:p-4 border border-red-500/20 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Robotic corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-500/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-500/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-500/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500/50" />
                  
                  {/* Animated scan line */}
                  <motion.div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
                    animate={{ y: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.6 }}
                  />
                  
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-mono relative z-10">
                    {eventCountdown.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-0.5 sm:mt-1 relative z-10">Minutes</div>
                </motion.div>
              </div>

              {/* Status indicator */}
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                  style={{ backgroundColor: '#f20136' }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Registration Opens Soon</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
