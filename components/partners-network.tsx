'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState, useMemo } from 'react';
import { partners, partnersContent } from '@/lib/data';
import { MOTION_CONFIG } from '@/lib/motion-config';
import { SensorIndicator } from '@/components/robotic-elements/sensor-indicator';

export function Partners() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generate connection lines between nodes
  const connections = useMemo(() => {
    if (partners.length < 2) return [];
    const lines = [];
    for (let i = 0; i < partners.length; i++) {
      for (let j = i + 1; j < partners.length; j++) {
        if (Math.random() > 0.5) { // Random connections
          lines.push({ from: i, to: j });
        }
      }
    }
    return lines;
  }, [partners.length]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="partners" className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-3xl" />
        
        {/* Animated mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none">
          <defs>
            <pattern id="partner-mesh" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="oklch(0.6 0.22 272)" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="2" fill="oklch(0.6 0.22 272)" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partner-mesh)" />
        </svg>

        {/* Floating data particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-600/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={MOTION_CONFIG.hover.transition}
          >
            <SensorIndicator variant="purple" size="sm" />
            <span>Connected Robotics Ecosystem</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight tracking-tight">
            {partnersContent.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            {partnersContent.description}
          </p>
        </motion.div>

        {partners.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-600/10 mb-6 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Network Initializing
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Partner nodes will be activated as we approach the event
            </p>
          </motion.div>
        ) : (
          <div className="relative">
            {/* Connection lines (SVG overlay) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {connections.map((conn, i) => {
                const fromCol = conn.from % 3;
                const fromRow = Math.floor(conn.from / 3);
                const toCol = conn.to % 3;
                const toRow = Math.floor(conn.to / 3);
                
                const isActive = hoveredIndex === conn.from || hoveredIndex === conn.to;
                
                return (
                  <motion.line
                    key={i}
                    x1={`${(fromCol + 0.5) * 33.33}%`}
                    y1={`${(fromRow + 0.5) * 50}%`}
                    x2={`${(toCol + 0.5) * 33.33}%`}
                    y2={`${(toRow + 0.5) * 50}%`}
                    stroke={isActive ? 'oklch(0.6 0.22 272)' : 'oklch(0.6 0.22 272 / 0.15)'}
                    strokeWidth={isActive ? '2' : '1'}
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: isActive ? 0.8 : 0.3,
                      strokeDashoffset: isActive ? [0, -10] : 0,
                    }}
                    transition={{ 
                      pathLength: { duration: 1, delay: i * 0.1 },
                      opacity: { duration: 0.3 },
                      strokeDashoffset: isActive ? { duration: 1, repeat: Infinity, ease: 'linear' } : {},
                    }}
                  />
                );
              })}
            </svg>

            {/* Partner nodes grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative"
              style={{ zIndex: 1 }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative group"
                >
                  {/* Node activation ripple */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-purple-500"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        exit={{ scale: 1, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Partner card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="robot-panel rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 hover:border-purple-500/40 transition-all flex flex-col items-center justify-center relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Pulse indicator with sensor */}
                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      <SensorIndicator 
                        variant="purple" 
                        size="sm"
                      />
                    </div>

                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/60 transition-all duration-300" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-500/0 group-hover:border-purple-500/60 transition-all duration-300" />

                    {/* Logo Container */}
                    <div className="w-full aspect-3/2 relative mb-6 flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                      {partner.logo && mounted ? (
                        <div className="relative w-full h-full p-4">
                          <Image
                            src={partner.logo === '/Logos/white.png' && theme === 'light' ? '/Logos/black.png' : partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : partner.logo && !mounted ? (
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
                      ) : null}

                      {/* Scan line effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
                        animate={{ y: hoveredIndex === index ? ['-100%', '200%'] : '-100%' }}
                        transition={{ duration: 1.5, ease: 'linear' }}
                      />
                    </div>
                    
                    {/* Text Content */}
                    <div className="space-y-2 text-center relative z-10">
                      <h3 className="font-bold text-base text-gray-900 dark:text-white leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {partner.name}
                      </h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/10 border border-purple-500/30 rounded-full">
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-purple-500"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs text-purple-700 dark:text-purple-300 uppercase tracking-wider font-medium">
                          {partner.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Network Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            {partnersContent.callToAction}
          </p>
          <div className="relative group inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="px-8 py-3 rounded-full text-base text-white font-semibold transition border-2 border-pink-400/50 cursor-not-allowed opacity-90 relative overflow-hidden"
              title="Registration opens soon"
            >
              <span className="relative z-10">Registration Opens Soon</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.button>
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-gray-900 dark:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
                Coming Soon!
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
