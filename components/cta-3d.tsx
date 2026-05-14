'use client';

import { motion } from 'framer-motion';
import { Users, Cpu, Globe, AlertCircle } from 'lucide-react';
import { MOTION_CONFIG } from '@/lib/motion-config';
import { CircuitTexture } from '@/components/robotic-elements/circuit-texture';
import { SensorGroup } from '@/components/robotic-elements/sensor-indicator';
import { eventConfig, isDeadlinePassed, registrationContent } from '@/lib/data';
import { useState, useEffect } from 'react';

export function CTA() {
  const [isRegistrationExpired, setIsRegistrationExpired] = useState(false);

  useEffect(() => {
    setIsRegistrationExpired(isDeadlinePassed(eventConfig.registrationDeadline));
  }, []);
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Circuit texture */}
      <CircuitTexture variant="subtle" />
      
      {/* Intense background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.5 0.25 16 / 0.15), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: MOTION_CONFIG.duration.ambient * 1.5, repeat: Infinity, ease: MOTION_CONFIG.ease.premium }}
        />
      </div>

      {/* Robotic hand/energy core visualization */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 opacity-20 pointer-events-none">
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          {/* Robotic arm segments */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.g key={i}>
              <motion.line
                x1="100"
                y1="100"
                x2={100 + Math.cos((angle * Math.PI) / 180) * 80}
                y2={100 + Math.sin((angle * Math.PI) / 180) * 80}
                stroke="#f20136"
                strokeWidth="2"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
              <motion.circle
                cx={100 + Math.cos((angle * Math.PI) / 180) * 80}
                cy={100 + Math.sin((angle * Math.PI) / 180) * 80}
                r="4"
                fill="#f20136"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            </motion.g>
          ))}
          <motion.circle
            cx="100"
            cy="100"
            r="15"
            fill="none"
            stroke="#f20136"
            strokeWidth="2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="robot-panel rounded-2xl p-6 sm:p-10 lg:p-12 border border-red-500/20 text-center space-y-6 sm:space-y-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Corner brackets with sensor indicators */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-500/50">
            <SensorGroup count={2} className="absolute top-1 left-1" />
          </div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-500/50" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-500/50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-500/50" />

          {/* Pulsing energy lines */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #f20136, transparent)',
            }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight"
          >
            Ready to Transform Your Robotics Career?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Join 100+ professionals for an intensive three-day program with world-leading roboticists. Early bird registration is now open with special discounts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-6 my-8"
          >
            {[
              { icon: Users, text: '10+ Expert Speakers', color: 'purple' },
              { icon: Cpu, text: 'Hands-on Labs', color: 'red' },
              { icon: Globe, text: 'Global Network', color: 'cyan' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="space-y-3 group relative"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <motion.div
                    className={`flex justify-center relative`}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: MOTION_CONFIG.duration.slow }}
                  >
                    <div className={`p-3 rounded-full ${
                      item.color === 'purple' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' :
                      item.color === 'red' ? 'bg-red-500/10 text-red-600 dark:text-red-400' :
                      'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: item.color === 'purple' ? '0 0 20px oklch(0.6 0.22 272 / 0.5)' :
                                   item.color === 'red' ? '0 0 20px oklch(0.5 0.25 16 / 0.5)' :
                                   '0 0 20px oklch(0.5 0.2 192 / 0.5)',
                      }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0.8, 1.4, 0.8],
                      }}
                      transition={{ duration: MOTION_CONFIG.duration.ambient, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            {isRegistrationExpired ? (
              <motion.div
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gray-400 dark:bg-gray-700 text-white font-bold text-base border-2 border-gray-500/50 relative overflow-hidden inline-flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
              >
                <span className="relative z-10">Registration Closed</span>
                <AlertCircle className="w-4 h-4 relative z-10" />
              </motion.div>
            ) : (
              <motion.a
                href="https://forms.gle/zn9UJpE9Y9CWxW1R9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#f20136' }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-bold transition text-base border-2 border-pink-400/50 hover:border-pink-300 relative overflow-hidden inline-block text-center"
              >
                <span className="relative z-10">Register Now</span>
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(242, 1, 54, 0.5)',
                      '0 0 40px rgba(242, 1, 54, 0.8)',
                      '0 0 20px rgba(242, 1, 54, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const programSection = document.getElementById('program');
                programSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold border-2 border-red-500/40 hover:border-red-400/60 hover:bg-red-500/10 transition text-base relative overflow-hidden group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="relative z-10 text-gray-900 dark:text-white">View Program</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`text-sm pt-4 font-semibold ${isRegistrationExpired ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}
          >
            {isRegistrationExpired ? (
              `Registration deadline (${registrationContent.registrationDeadline}) has passed`
            ) : (
              <>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚡
                </motion.span>
                {' '}Limited seats available. Deadline: {registrationContent.registrationDeadline}
              </>
            )}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
