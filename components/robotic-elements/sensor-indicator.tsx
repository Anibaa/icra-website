'use client';

import { motion } from 'framer-motion';
import { MOTION_CONFIG } from '@/lib/motion-config';

interface SensorIndicatorProps {
  variant?: 'purple' | 'cyan' | 'red';
  size?: 'sm' | 'md';
  position?: 'inline' | 'absolute';
  className?: string;
}

export function SensorIndicator({ 
  variant = 'purple', 
  size = 'sm',
  position = 'inline',
  className = '' 
}: SensorIndicatorProps) {
  const colors = {
    purple: 'oklch(0.6 0.22 272)',
    cyan: 'oklch(0.5 0.2 192)',
    red: 'oklch(0.5 0.25 16)',
  };

  const sizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
  };

  return (
    <motion.div
      className={`${sizes[size]} rounded-full ${position === 'absolute' ? 'absolute' : 'inline-block'} ${className}`}
      style={{
        backgroundColor: colors[variant],
        boxShadow: `0 0 8px ${colors[variant]}`,
      }}
      animate={{
        opacity: MOTION_CONFIG.glow.soft.opacity,
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: MOTION_CONFIG.ease.premium,
      }}
    />
  );
}

// Sensor group for multiple indicators
export function SensorGroup({ 
  count = 3, 
  className = '' 
}: { 
  count?: number; 
  className?: string;
}) {
  const variants: Array<'purple' | 'cyan' | 'red'> = ['purple', 'cyan', 'red'];
  
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <SensorIndicator 
          key={i} 
          variant={variants[i % 3]} 
          size="sm"
        />
      ))}
    </div>
  );
}
