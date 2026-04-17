'use client';

import { motion } from 'framer-motion';
import { MOTION_CONFIG } from '@/lib/motion-config';

interface DataScannerProps {
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  variant?: 'purple' | 'cyan' | 'mixed';
  speed?: 'slow' | 'medium';
  className?: string;
}

export function DataScanner({ 
  direction = 'horizontal',
  variant = 'mixed',
  speed = 'slow',
  className = '' 
}: DataScannerProps) {
  const colors = {
    purple: 'linear-gradient(90deg, transparent, oklch(0.6 0.22 272 / 0.15), transparent)',
    cyan: 'linear-gradient(90deg, transparent, oklch(0.5 0.2 192 / 0.15), transparent)',
    mixed: 'linear-gradient(90deg, transparent, oklch(0.6 0.22 272 / 0.12), oklch(0.5 0.2 192 / 0.12), transparent)',
  };

  const durations = {
    slow: 30, // Very slow, rare sweep
    medium: 20,
  };

  const getAnimation = () => {
    switch (direction) {
      case 'horizontal':
        return { y: ['-100%', '200%'] };
      case 'vertical':
        return { x: ['-100%', '200%'] };
      case 'diagonal':
        return { x: ['-100%', '200%'], y: ['-50%', '150%'] };
      default:
        return { y: ['-100%', '200%'] };
    }
  };

  const getGradient = () => {
    if (direction === 'vertical') {
      return colors[variant].replace('90deg', '180deg');
    }
    if (direction === 'diagonal') {
      return colors[variant].replace('90deg', '135deg');
    }
    return colors[variant];
  };

  return (
    <motion.div
      className={`absolute ${direction === 'vertical' ? 'w-px h-full' : 'w-full h-px'} pointer-events-none ${className}`}
      style={{
        background: getGradient(),
        boxShadow: variant === 'purple' 
          ? '0 0 8px oklch(0.6 0.22 272 / 0.15)' 
          : variant === 'cyan'
          ? '0 0 8px oklch(0.5 0.2 192 / 0.15)'
          : '0 0 8px oklch(0.6 0.22 272 / 0.1)',
      }}
      animate={getAnimation()}
      transition={{
        duration: durations[speed],
        repeat: Infinity,
        ease: 'linear',
        repeatDelay: 15, // Long delay between sweeps
      }}
    />
  );
}

// Rare scanner for important modules
export function RareScanEffect({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Horizontal sweep - very rare */}
      <DataScanner 
        direction="horizontal" 
        variant="mixed" 
        speed="slow"
      />
      
      {/* Occasional status blink */}
      <motion.div
        className="absolute top-2 right-2 w-1 h-1 rounded-full"
        style={{
          backgroundColor: 'oklch(0.5 0.2 192)',
          boxShadow: '0 0 6px oklch(0.5 0.2 192)',
        }}
        animate={{
          opacity: [0, 0, 0, 0.6, 0], // Rare blink
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [0, 0.4, 0.45, 0.5, 0.55],
        }}
      />
    </div>
  );
}

// Diagonal analysis sweep for cards
export function AnalysisSweep({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, oklch(0.6 0.22 272 / 0.08) 50%, transparent 100%)',
        }}
        initial={{ x: '-100%', y: '-100%' }}
        animate={{ x: '100%', y: '100%' }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 20, // Very rare
        }}
      />
    </div>
  );
}
