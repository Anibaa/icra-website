'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Zap, Globe } from 'lucide-react';
import { use3DTilt } from '@/hooks/use-3d-tilt';
import { MOTION_CONFIG } from '@/lib/motion-config';
import { SensorIndicator } from '@/components/robotic-elements/sensor-indicator';
import { CircuitTexture } from '@/components/robotic-elements/circuit-texture';

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt();
  const IconComponent = feature.icon;

  return (
    <motion.div
      initial={MOTION_CONFIG.entrance.initial}
      whileInView={MOTION_CONFIG.entrance.animate}
      transition={{ ...MOTION_CONFIG.entrance.transition, delay: index * 0.08 }}
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
      className="robot-panel rounded-lg p-4 border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer relative overflow-hidden"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, oklch(0.6 0.22 272 / 0.1), transparent 70%)',
        }}
      />
      
      <div className="flex flex-col gap-2 relative" style={{ transform: 'translateZ(20px)' }}>
        {/* Sensor indicator */}
        <div className="absolute -top-2 -right-2">
          <SensorIndicator variant="cyan" size="sm" />
        </div>
        
        <motion.div 
          className="text-red-500 dark:text-red-400 shrink-0 group-hover:scale-110 transition-transform"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: MOTION_CONFIG.duration.normal }}
        >
          <IconComponent size={22} />
        </motion.div>
        <div>
          <h3 className="text-gray-900 dark:text-white text-sm font-semibold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 transition-all duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{feature.description}</p>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 group-hover:border-cyan-500/50 transition-all duration-300" />
    </motion.div>
  );
}

export function About() {
  const features = [
    {
      title: 'Comprehensive Curriculum',
      description: 'Theory, applications, and emerging technologies.',
      icon: BookOpen,
    },
    {
      title: 'Expert Faculty',
      description: 'Leading researchers and industry pioneers.',
      icon: Users,
    },
    {
      title: 'Practical Experience',
      description: 'Hands-on labs with robotics equipment.',
      icon: Zap,
    },
    {
      title: 'Global Community',
      description: 'Network with professionals worldwide.',
      icon: Globe,
    },
  ];

  return (
    <section className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      {/* Circuit texture background */}
      <CircuitTexture variant="subtle" />
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        
        {/* Robot tech lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
        >
          <motion.line
            x1="5%"
            y1="30%"
            x2="25%"
            y2="30%"
            stroke="oklch(0.6 0.22 272)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.line
            x1="75%"
            y1="70%"
            x2="95%"
            y2="70%"
            stroke="oklch(0.5 0.2 192)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: MOTION_CONFIG.duration.slow, ease: MOTION_CONFIG.ease.premium }}
            className="space-y-5 sm:space-y-6"
          >
            <div>
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-600/12 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-700 dark:text-cyan-300 mb-3 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <SensorIndicator variant="cyan" size="sm" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10">About ICRA Satellite School</span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-[1.1] tracking-tight">
                World-Class Education in Robotics
              </h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              The IEEE International Conference on Robotics and Automation is the world's leading robotics and automation conference, gathering top researchers, industry leaders, and academics to share advances in robotics, AI, intelligent systems, and automation. Held in Vienna in 2026, it serves as a global hub for innovation and research exchange.
            </p>           
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
The ICRA Satellite School is an intensive educational program organized by the IEEE RAS Tunisia Chapter in collaboration with the IEEE RAS Society. It brings together leading minds in robotics to share cutting-edge research and practical knowledge.            </p>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Whether you&apos;re a student, researcher, or industry professional, this program offers a unique opportunity to accelerate your career in robotics and automation.
            </p>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: MOTION_CONFIG.duration.slow, ease: MOTION_CONFIG.ease.premium }}
            className="grid grid-cols-2 gap-3"
            style={{ perspective: '1000px' }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
