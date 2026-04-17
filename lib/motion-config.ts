// Unified Motion Language Configuration
// All animations across the website use these consistent values

export const MOTION_CONFIG = {
  // Unified easing curves
  ease: {
    premium: [0.43, 0.13, 0.23, 0.96], // Main easing for premium feel
    smooth: [0.4, 0, 0.2, 1], // Smooth transitions
    bounce: [0.68, -0.55, 0.265, 1.55], // Subtle bounce (use sparingly)
  },

  // Consistent durations
  duration: {
    instant: 0.15, // Micro-interactions
    fast: 0.3, // Hover states
    normal: 0.5, // Standard transitions
    slow: 0.8, // Panel expansions
    ambient: 3, // Background ambient motion
  },

  // Entrance animations
  entrance: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  // Hover states
  hover: {
    scale: 1.02, // Subtle lift
    y: -4, // Gentle upward movement
    transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  // Click/Tap feedback
  tap: {
    scale: 0.98, // Slight compression
    transition: { duration: 0.15, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  // Glow intensity (for visual comfort)
  glow: {
    soft: { opacity: [0.2, 0.5, 0.2] }, // Subtle pulse
    medium: { opacity: [0.3, 0.7, 0.3] }, // Standard pulse
    strong: { opacity: [0.4, 0.8, 0.4] }, // Prominent (use sparingly)
  },

  // Scan line timing (rare, slow)
  scan: {
    duration: 25, // Very slow sweep
    delay: 10, // Long delay between sweeps
  },

  // Particle motion (ambient)
  particle: {
    duration: [8, 12], // Slow range
    opacity: [0.15, 0.4, 0.15], // Soft visibility
  },
};

// Reduced motion preferences
export const REDUCED_MOTION = {
  entrance: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 1,
    transition: { duration: 0.1 },
  },
};

// Helper to check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get motion config based on user preference
export const getMotionConfig = () => {
  return prefersReducedMotion() ? REDUCED_MOTION : MOTION_CONFIG;
};
