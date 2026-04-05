'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  count?: number;
}

export function Skeleton({ 
  className = '', 
  variant = 'rectangular',
  width,
  height,
  count = 1
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-800';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl',
  };

  const style = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%'),
  };

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={style}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="glass rounded-xl p-6 border border-gray-200 dark:border-white/10">
      <div className="space-y-4">
        <Skeleton variant="circular" width={64} height={64} />
        <div className="space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
        <Skeleton variant="text" count={3} />
        <Skeleton variant="rectangular" height={40} />
      </div>
    </div>
  );
}

export function SpeakerSkeleton() {
  return (
    <div className="glass rounded-lg p-6 border border-gray-200 dark:border-white/10">
      <div className="space-y-4">
        <Skeleton variant="circular" width={80} height={80} />
        <div className="space-y-2">
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="50%" />
          <Skeleton variant="text" width="40%" />
        </div>
        <Skeleton variant="text" count={2} />
        <Skeleton variant="rectangular" height={36} />
      </div>
    </div>
  );
}

export function ProgramSkeleton() {
  return (
    <div className="glass rounded-xl p-6 border border-gray-200 dark:border-white/10">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={80} />
        </div>
        <div className="h-px bg-gray-200 dark:bg-gray-800" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" count={4} />
        <Skeleton variant="rectangular" height={40} />
      </div>
    </div>
  );
}
