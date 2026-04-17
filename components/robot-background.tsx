'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function RobotBackground() {
  // Generate neural network nodes
  const nodes = useMemo(() => {
    const nodeArray = [];
    for (let i = 0; i < 20; i++) {
      nodeArray.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 3,
      });
    }
    return nodeArray;
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Neural network grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
        <defs>
          <pattern id="neural-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#grid-gradient)" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1.5" fill="oklch(0.6 0.22 272)" opacity="0.4" />
          </pattern>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.6 0.22 272)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="oklch(0.5 0.2 192)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.6 0.22 272)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
      </svg>

      {/* Floating neural nodes with connections */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            backgroundColor: i % 3 === 0 ? 'oklch(0.6 0.22 272)' : i % 3 === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)',
          }}
          animate={{
            boxShadow: [
              `0 0 ${node.size * 8}px ${i % 3 === 0 ? 'oklch(0.6 0.22 272)' : i % 3 === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)'}`,
              `0 0 ${node.size * 15}px ${i % 3 === 0 ? 'oklch(0.6 0.22 272)' : i % 3 === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)'}`,
              `0 0 ${node.size * 8}px ${i % 3 === 0 ? 'oklch(0.6 0.22 272)' : i % 3 === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)'}`,
            ],
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
          }}
          transition={{ duration: node.duration, repeat: Infinity, delay: node.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Scanning lines - multiple layers */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, oklch(0.6 0.22 272), oklch(0.5 0.2 192), transparent)',
          boxShadow: '0 0 20px oklch(0.6 0.22 272)',
        }}
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, oklch(0.5 0.2 192), transparent)',
          boxShadow: '0 0 15px oklch(0.5 0.2 192)',
        }}
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 2 }}
      />

      {/* Animated circuit paths - enhanced */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
      >
        {/* Horizontal data flows */}
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="oklch(0.6 0.22 272)"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 100 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="oklch(0.5 0.2 192)"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 100 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
        <motion.line
          x1="0%"
          y1="80%"
          x2="100%"
          y2="80%"
          stroke="oklch(0.6 0.22 272)"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 100 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
        />

        {/* Vertical data flows */}
        <motion.line
          x1="25%"
          y1="0%"
          x2="25%"
          y2="100%"
          stroke="oklch(0.5 0.2 192)"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 100 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.line
          x1="75%"
          y1="0%"
          x2="75%"
          y2="100%"
          stroke="oklch(0.6 0.22 272)"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 100 }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'linear', delay: 0.8 }}
        />

        {/* Circuit nodes at intersections */}
        <motion.circle
          cx="25%"
          cy="20%"
          r="3"
          fill="oklch(0.6 0.22 272)"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="75%"
          cy="50%"
          r="3"
          fill="oklch(0.5 0.2 192)"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="25%"
          cy="80%"
          r="3"
          fill="oklch(0.6 0.22 272)"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.svg>

      {/* Depth layers - parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </div>
  );
}
