'use client';

import { motion } from 'framer-motion';

export function CircuitBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated circuit lines */}
      <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {/* Horizontal lines */}
        <motion.line
          x1="0"
          y1="200"
          x2="1200"
          y2="200"
          stroke="#ff3b3b"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line
          x1="0"
          y1="400"
          x2="1200"
          y2="400"
          stroke="#ff3b3b"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <motion.line
          x1="0"
          y1="600"
          x2="1200"
          y2="600"
          stroke="#ff3b3b"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        />

        {/* Vertical lines */}
        <motion.line
          x1="300"
          y1="0"
          x2="300"
          y2="800"
          stroke="#00c2ff"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
        <motion.line
          x1="600"
          y1="0"
          x2="600"
          y2="800"
          stroke="#00c2ff"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 0.3 }}
        />
        <motion.line
          x1="900"
          y1="0"
          x2="900"
          y2="800"
          stroke="#00c2ff"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 3.3, repeat: Infinity, delay: 0.7 }}
        />
      </svg>

      {/* Corner nodes */}
      {[
        { x: '10%', y: '10%' },
        { x: '90%', y: '10%' },
        { x: '10%', y: '90%' },
        { x: '90%', y: '90%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-red-500"
          style={{ left: pos.x, top: pos.y }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}
