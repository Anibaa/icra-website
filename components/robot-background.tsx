'use client';

import { motion } from 'framer-motion';

export function RobotBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
        <defs>
          <pattern id="robot-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#f20136" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#robot-grid)" />
      </svg>

      {/* Floating nodes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full"
        style={{ backgroundColor: '#f20136' }}
        animate={{
          boxShadow: ['0 0 15px #f20136', '0 0 30px #f20136', '0 0 15px #f20136'],
          y: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full"
        style={{ backgroundColor: '#f20136' }}
        animate={{
          boxShadow: ['0 0 12px #f20136', '0 0 25px #f20136', '0 0 12px #f20136'],
          x: [0, 15, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: '#f20136' }}
        animate={{
          boxShadow: ['0 0 18px #f20136', '0 0 35px #f20136', '0 0 18px #f20136'],
          y: [0, 25, 0],
        }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full"
        style={{ backgroundColor: '#f20136' }}
        animate={{
          boxShadow: ['0 0 14px #f20136', '0 0 28px #f20136', '0 0 14px #f20136'],
          x: [0, -20, 0],
        }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 1.5 }}
      />

      {/* Scanning lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #f20136, transparent)',
        }}
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Animated circuit paths */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
      >
        <motion.polyline
          points="10% 20%, 20% 30%, 30% 20%"
          fill="none"
          stroke="#f20136"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.polyline
          points="70% 70%, 80% 60%, 90% 70%"
          fill="none"
          stroke="#f20136"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </motion.svg>
    </div>
  );
}
