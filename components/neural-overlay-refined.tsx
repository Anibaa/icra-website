'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Unified easing for all animations
const EASE = [0.43, 0.13, 0.23, 0.96]; // Custom ease for premium feel

export function NeuralOverlay() {
  // Reduced node count for visual comfort
  const nodes = useMemo(() => {
    const nodeArray = [];
    for (let i = 0; i < 20; i++) { // Reduced from 30 to 20
      nodeArray.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1 + 0.5, // Smaller, more subtle
        delay: Math.random() * 8, // Longer delays
        duration: Math.random() * 6 + 6, // Slower (6-12s instead of 4-8s)
      });
    }
    return nodeArray;
  }, []);

  // Fewer connections for cleaner look
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only connect very nearby nodes, with probability
        if (distance < 20 && Math.random() > 0.5) { // Reduced from 25, added probability
          lines.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            delay: Math.random() * 5,
          });
        }
      }
    }
    return lines;
  }, [nodes]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Neural mesh SVG - more subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.6 0.22 272)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="oklch(0.5 0.2 192)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.6 0.22 272)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Connection lines - calmer animation */}
        {connections.map((conn, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="url(#neural-gradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.15, 0.3, 0.15], // Reduced opacity range
            }}
            transition={{ 
              pathLength: { duration: 3, delay: conn.delay, ease: EASE },
              opacity: { duration: 8, repeat: Infinity, delay: conn.delay, ease: EASE }, // Slower pulse
            }}
          />
        ))}

        {/* Neural nodes - softer glow */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill={i % 3 === 0 ? 'oklch(0.6 0.22 272)' : i % 3 === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)'}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2], // Reduced from 0.3-0.8
              scale: [1, 1.15, 1], // Reduced from 1-1.3
            }}
            transition={{ 
              duration: node.duration, 
              repeat: Infinity, 
              delay: node.delay,
              ease: EASE,
            }}
          />
        ))}
      </svg>

      {/* Reduced floating particles - only 8 instead of 15 */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full" // Smaller particles
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 ? 'oklch(0.6 0.22 272)' : i % 3 === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)',
          }}
          animate={{
            y: [0, -40, 0], // Reduced movement
            x: [0, Math.sin(i) * 20, 0], // Reduced movement
            opacity: [0.15, 0.4, 0.15], // Softer opacity
          }}
          transition={{
            duration: 8 + Math.random() * 4, // Slower (8-12s)
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: EASE,
          }}
        />
      ))}

      {/* Rare, slow scanning beams - less frequent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, oklch(0.6 0.22 272 / 0.15), oklch(0.5 0.2 192 / 0.15), transparent)',
          boxShadow: '0 0 8px oklch(0.6 0.22 272 / 0.2)', // Softer glow
        }}
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} // Slower (was 15s)
      />

      <motion.div
        className="absolute top-0 left-0 bottom-0 w-px"
        style={{
          background: 'linear-gradient(180deg, transparent, oklch(0.5 0.2 192 / 0.15), oklch(0.6 0.22 272 / 0.15), transparent)',
          boxShadow: '0 0 8px oklch(0.5 0.2 192 / 0.2)', // Softer glow
        }}
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 10 }} // Slower (was 20s)
      />

      {/* Micro LED indicators - calmer pulse */}
      <div className="absolute top-4 left-4 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`led-tl-${i}`}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: i === 0 ? 'oklch(0.6 0.22 272)' : i === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)' }}
            animate={{ opacity: [0.2, 0.6, 0.2] }} // Softer pulse
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: EASE }} // Slower
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`led-tr-${i}`}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: i === 0 ? 'oklch(0.5 0.25 16)' : i === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.6 0.22 272)' }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 + 0.7, ease: EASE }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-4 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`led-bl-${i}`}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: i === 0 ? 'oklch(0.5 0.2 192)' : i === 1 ? 'oklch(0.6 0.22 272)' : 'oklch(0.5 0.25 16)' }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 + 1.4, ease: EASE }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`led-br-${i}`}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: i === 0 ? 'oklch(0.6 0.22 272)' : i === 1 ? 'oklch(0.5 0.25 16)' : 'oklch(0.5 0.2 192)' }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 + 2.1, ease: EASE }}
          />
        ))}
      </div>
    </div>
  );
}
