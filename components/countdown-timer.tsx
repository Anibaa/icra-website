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
    <section id="countdown" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
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
          className="mb-8 sm:mb-10 text-center"
        >
          <div className="relative glass rounded-2xl p-5 sm:p-8 lg:p-10 border-2 border-red-500/20 overflow-hidden max-w-2xl mx-auto">
            {/* Background glow */}
            <div
              className="absolute inset-0 blur-2xl opacity-15 -z-10"
              style={{ backgroundColor: '#f20136' }}
            />

            <div className="relative z-10 space-y-5 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight leading-tight">
                  EVENT STARTS IN
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm tracking-widest uppercase">June 1-3 Satellite School</p>
              </div>

              {/* Large Event Countdown */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <motion.div className="glass rounded-lg p-4 sm:p-5 border border-red-500/20">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-mono">
                    {eventCountdown.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-1">Days</div>
                </motion.div>

                <motion.div className="glass rounded-lg p-4 sm:p-5 border border-red-500/20">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-mono">
                    {eventCountdown.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-1">Hours</div>
                </motion.div>

                <motion.div className="glass rounded-lg p-4 sm:p-5 border border-red-500/20">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-mono">
                    {eventCountdown.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-1">Minutes</div>
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
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Accepting registrations</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
