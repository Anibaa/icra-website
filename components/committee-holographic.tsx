'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { committeeMembers } from '@/lib/data';
import { use3DTilt } from '@/hooks/use-3d-tilt';
import { Shield, Users, Briefcase } from 'lucide-react';
import { MOTION_CONFIG } from '@/lib/motion-config';
import { AnalysisSweep } from '@/components/robotic-elements/data-scanner';
import { SensorIndicator } from '@/components/robotic-elements/sensor-indicator';

// Role-based color system
const getRoleColor = (role: string) => {
  const roleLower = role.toLowerCase();
  if (roleLower.includes('chair')) return { primary: 'oklch(0.5 0.25 16)', secondary: 'red' }; // Red for chairs
  if (roleLower.includes('treasurer') || roleLower.includes('coordinator')) return { primary: 'oklch(0.6 0.22 272)', secondary: 'purple' }; // Purple for coordinators
  if (roleLower.includes('committee') || roleLower.includes('lead')) return { primary: 'oklch(0.5 0.2 192)', secondary: 'cyan' }; // Cyan for committee
  return { primary: 'oklch(0.6 0.22 272)', secondary: 'purple' }; // Default purple
};

const getRoleIcon = (role: string) => {
  const roleLower = role.toLowerCase();
  if (roleLower.includes('chair')) return Shield;
  if (roleLower.includes('coordinator') || roleLower.includes('lead')) return Briefcase;
  return Users;
};

function CommitteeMemberCard({ member, index }: { member: any; index: number }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt();
  const roleColor = getRoleColor(member.role);
  const RoleIcon = getRoleIcon(member.role);

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
      {/* Analysis sweep effect */}
      <AnalysisSweep />
      {/* Holographic effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${roleColor.primary} / 0.1, oklch(0.5 0.2 192 / 0.1))`,
        }}
      />

      {/* Energy corners with role color */}
      <div 
        className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-current transition-all duration-300"
        style={{ color: roleColor.primary }}
      />
      <div 
        className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-transparent group-hover:border-current transition-all duration-300"
        style={{ color: roleColor.primary }}
      />

      <div className="space-y-3 relative" style={{ transform: 'translateZ(30px)' }}>
        {/* System Role Indicator */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <RoleIcon size={12} className={`text-${roleColor.secondary}-600 dark:text-${roleColor.secondary}-400`} />
          <span className="text-[10px] font-mono tracking-wider text-gray-500 dark:text-gray-400">
            SYSTEM ROLE
          </span>
        </div>

        {/* Holographic avatar */}
        <div className="flex justify-center">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <div 
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg relative overflow-hidden ring-4 ring-gray-100 dark:ring-gray-800 group-hover:ring-${roleColor.secondary}-500/20`}
              style={{
                background: `linear-gradient(135deg, ${roleColor.primary}, ${roleColor.primary})`,
              }}
            >
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  quality={100}
                  className="w-full h-full object-cover"
                  priority={index < 6}
                  sizes="(max-width: 640px) 80px, 96px"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <span>
                  {member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                </span>
              )}
              

            </div>

            {/* Orbital ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: `${roleColor.primary} / 0.5` }}
              animate={{ rotate: 360, scale: [1, 1.15, 1] }}
              transition={{ 
                rotate: { duration: 12, repeat: Infinity, ease: 'linear' }, 
                scale: { duration: MOTION_CONFIG.duration.ambient, repeat: Infinity, ease: MOTION_CONFIG.ease.premium } 
              }}
            />

            {/* Status indicator */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900"
              style={{ backgroundColor: roleColor.primary }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: MOTION_CONFIG.duration.ambient, repeat: Infinity, ease: MOTION_CONFIG.ease.premium }}
            />
          </motion.div>
        </div>

        <div className="space-y-2">
          {/* Name */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white  group-hover:bg-clip-text group-hover:bg-gradient-to-r transition leading-tight"

          >
            {member.name}
          </h3>

          {/* Role badge with icon */}
          <div 
            className={`inline-flex items-center gap-1.5 px-3 py-1 bg-${roleColor.secondary}-600/10 border border-${roleColor.secondary}-500/30 rounded-full text-xs font-medium text-${roleColor.secondary}-700 dark:text-${roleColor.secondary}-300`}
          >
            <RoleIcon size={12} />
            <span className="uppercase tracking-wider">{member.role}</span>
          </div>

          {/* Affiliation */}
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            {member.affiliation}
          </p>
        </div>




      </div>
    </motion.div>
  );
}

export function Committee() {
  return (
    <section id="committee" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      {/* Neural background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
        
        {/* Circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
          <defs>
            <pattern id="committee-circuit" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="oklch(0.5 0.25 16)" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="oklch(0.5 0.25 16)" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#committee-circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-500/30 rounded-full text-xs font-medium text-red-700 dark:text-red-300 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={MOTION_CONFIG.hover.transition}
          >
            <Shield size={14} />
            <span>System Leadership</span>
            <SensorIndicator variant="red" size="sm" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight tracking-tight">
            Organizing Committee
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            Distinguished leaders in robotics research overseeing the program
          </p>
        </motion.div>

        {committeeMembers.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-600/10 mb-6 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Shield className="w-12 h-12 text-red-600 dark:text-red-400" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-red-500/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Profiles Initializing
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Committee profiles will be activated as we approach the event
            </p>
          </motion.div>
        ) : (
          <div 
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto" 
            style={{ perspective: '1000px' }}
          >
            {committeeMembers.map((member, index) => (
              <CommitteeMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
