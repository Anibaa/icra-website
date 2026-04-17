'use client';

import { motion } from 'framer-motion';

interface CircuitTextureProps {
  variant?: 'subtle' | 'medium';
  className?: string;
}

export function CircuitTexture({ variant = 'subtle', className = '' }: CircuitTextureProps) {
  const opacity = variant === 'subtle' ? 0.02 : 0.04;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Circuit pattern SVG */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        style={{ opacity }}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern 
            id={`circuit-pattern-${variant}`} 
            x="0" 
            y="0" 
            width="80" 
            height="80" 
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal lines */}
            <line x1="0" y1="20" x2="80" y2="20" stroke="oklch(0.6 0.22 272)" strokeWidth="0.5" />
            <line x1="0" y1="60" x2="80" y2="60" stroke="oklch(0.5 0.2 192)" strokeWidth="0.5" />
            
            {/* Vertical lines */}
            <line x1="20" y1="0" x2="20" y2="80" stroke="oklch(0.6 0.22 272)" strokeWidth="0.5" />
            <line x1="60" y1="0" x2="60" y2="80" stroke="oklch(0.5 0.2 192)" strokeWidth="0.5" />
            
            {/* Circuit nodes */}
            <circle cx="20" cy="20" r="1.5" fill="oklch(0.6 0.22 272)" opacity="0.6" />
            <circle cx="60" cy="20" r="1.5" fill="oklch(0.5 0.2 192)" opacity="0.6" />
            <circle cx="20" cy="60" r="1.5" fill="oklch(0.5 0.2 192)" opacity="0.6" />
            <circle cx="60" cy="60" r="1.5" fill="oklch(0.6 0.22 272)" opacity="0.6" />
            
            {/* Micro details */}
            <rect x="18" y="18" width="4" height="4" fill="none" stroke="oklch(0.6 0.22 272)" strokeWidth="0.3" opacity="0.4" />
            <rect x="58" y="58" width="4" height="4" fill="none" stroke="oklch(0.5 0.2 192)" strokeWidth="0.3" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#circuit-pattern-${variant})`} />
      </svg>

      {/* Subtle animated overlay for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, oklch(0.6 0.22 272 / 0.01) 50%, transparent 100%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

// Panel engraving variant - for cards and panels
export function PanelEngraving({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.015]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern 
            id="panel-engraving" 
            x="0" 
            y="0" 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            {/* Diagonal lines for engraved look */}
            <line x1="0" y1="0" x2="40" y2="40" stroke="oklch(0.6 0.22 272)" strokeWidth="0.3" opacity="0.5" />
            <line x1="0" y1="20" x2="20" y2="40" stroke="oklch(0.5 0.2 192)" strokeWidth="0.3" opacity="0.5" />
            <line x1="20" y1="0" x2="40" y2="20" stroke="oklch(0.5 0.2 192)" strokeWidth="0.3" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#panel-engraving)" />
      </svg>
    </div>
  );
}
