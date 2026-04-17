'use client';

import { motion } from 'framer-motion';
import { speakers } from '@/lib/data';
import { use3DTilt } from '@/hooks/use-3d-tilt';
import { MOTION_CONFIG } from '@/lib/motion-config';
import { SensorIndicator } from '@/components/robotic-elements/sensor-indicator';
import { AnalysisSweep } from '@/components/robotic-elements/data-scanner';

function SpeakerCard({ speaker, index }: { speaker: any; index: number }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt();

  return (
    <motion.div
      initial={MOTION_CONFIG.entrance.initial}
      whileInView={MOTION_CONFIG.entrance.animate}
      transition={{ ...MOTION_CONFIG.entrance.transition, delay: index * 0.04 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: MOTION_CONFIG.hover.y,
        scale: MOTION_CONFIG.hover.scale,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group robot-panel rounded-lg p-5 border border-gray-200 dark:border-white/10 hover:border-purple-500/40 transition-all text-center cursor-pointer relative overflow-hidden"
    >
      {/* Rare analysis sweep */}
      <AnalysisSweep />
      {/* Holographic effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, oklch(0.6 0.22 272 / 0.1), oklch(0.5 0.2 192 / 0.1))',
        }}
      />

      {/* Energy corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/70 transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/70 transition-all duration-300" />

      <div className="space-y-3 relative" style={{ transform: 'translateZ(30px)' }}>
        {/* Holographic avatar */}
        <div className="flex justify-center">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg relative overflow-hidden">
              {speaker.name.charAt(0)}
              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            {/* Orbital ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-500/50"
              animate={{ rotate: 360, scale: [1, 1.15, 1] }}
              transition={{ 
                rotate: { duration: 12, repeat: Infinity, ease: 'linear' }, 
                scale: { duration: MOTION_CONFIG.duration.ambient, repeat: Infinity, ease: MOTION_CONFIG.ease.premium } 
              }}
            />
          </motion.div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 transition leading-tight">
            {speaker.name}
          </h3>
          <div className="inline-block px-3 py-1 bg-purple-600/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300">
            {speaker.role}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">{speaker.specialty}</p>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{speaker.bio}</p>
      </div>
    </motion.div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-600/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={MOTION_CONFIG.hover.transition}
          >
            <SensorIndicator variant="purple" size="sm" />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ●
            </motion.span>
            {' '}World-Class Faculty
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight tracking-tight">
            Featured Speakers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            Learn from the world&apos;s leading robotics researchers and industry pioneers
          </p>
        </motion.div>

        {speakers.length === 0 ? (
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
              Will be announced soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Speakers will be revealed as we approach the event
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} index={index} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
            {speakers.length === 0 ? 'Stay tuned for speaker announcements' : 'More speakers to be announced as we approach the event'}
          </p>
          <div className="relative group inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="px-8 py-3 rounded-full text-white font-semibold transition border-2 border-pink-400/50 cursor-not-allowed opacity-90 relative overflow-hidden"
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
