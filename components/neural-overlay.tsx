'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function NeuralOverlay() {
  // Generate random neural nodes
  const nodes = useMemo(() => {
    const nodeArray = [];
    for (let i = 0; i < 30; i++) {
      nodeArray.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
      });
    }
    return nodeArray;
  }, []);

  // Generate connections between nearby nodes
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only connect nearby nodes
        if (distance < 25) {
          lines.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            delay: Math.random() * 3,
          });
        }
      }
    }
    return lines;
  }, [nodes]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Neural mesh SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
        <defs>
          {/* Gradient for connections */}
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.6 0.22 272)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="oklch(0.5 0.2 192)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.6 0.22 272)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
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
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ 
              pathLength: { duration: 2, delay: conn.delay },
              opacity: { duration: 4, repeat: Infinity, delay: conn.delay },
            }}
          />
        ))}

        {/* Neural nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill={i % 3 === 0 ? 'oklch(0.6 0.22 272)' : i % 3 === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)'}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: node.duration, 
              repeat: Infinity, 
              delay: node.delay,
            }}
          />
        ))}
      </svg>

      {/* Floating data particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 ? 'oklch(0.6 0.22 272)' : i % 3 === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(i) * 30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Scanning beams (rare, slow) */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, oklch(0.6 0.22 272), oklch(0.5 0.2 192), transparent)',
          boxShadow: '0 0 10px oklch(0.6 0.22 272)',
        }}
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute top-0 left-0 bottom-0 w-[1px]"
        style={{
          background: 'linear-gradient(180deg, transparent, oklch(0.5 0.2 192), oklch(0.6 0.22 272), transparent)',
          boxShadow: '0 0 10px oklch(0.5 0.2 192)',
        }}
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 5 }}
      />

      {/* Micro LED indicators (corners) */}
      <div className="absolute top-4 left-4 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`led-tl-${i}`}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: i === 0 ? 'oklch(0.6 0.22 272)' : i === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.5 0.25 16)' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`led-tr-${i}`}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: i === 0 ? 'oklch(0.5 0.25 16)' : i === 1 ? 'oklch(0.5 0.2 192)' : 'oklch(0.6 0.22 272)' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 0.5 }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-4 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`led-bl-${i}`}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: i === 0 ? 'oklch(0.5 0.2 192)' : i === 1 ? 'oklch(0.6 0.22 272)' : 'oklch(0.5 0.25 16)' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 1 }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`led-br-${i}`}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: i === 0 ? 'oklch(0.6 0.22 272)' : i === 1 ? 'oklch(0.5 0.25 16)' : 'oklch(0.5 0.2 192)' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 1.5 }}
          />
        ))}
      </div>
    </div>
  );
}
