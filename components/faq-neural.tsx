'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { MOTION_CONFIG } from '@/lib/motion-config';
import { SensorIndicator } from '@/components/robotic-elements/sensor-indicator';
import { RareScanEffect } from '@/components/robotic-elements/data-scanner';

const faqs = [
  {
    question: 'Who should attend the ICRA Satellite School?',
    answer: 'The program is designed for graduate students, researchers, industry professionals, and anyone interested in advancing their knowledge in robotics and automation. Whether you\'re new to the field or an experienced practitioner, our workshops cater to various skill levels.',
    queryId: 'QUERY_001',
  },
  {
    question: 'Will I receive a certificate of completion?',
    answer: 'Yes! All participants who attend the full program will receive an official certificate of completion from IEEE RAS Tunisia Chapter. This certificate is recognized internationally and can be added to your professional credentials.',
    queryId: 'QUERY_002',
  },
  {
    question: 'What is included in the registration fee?',
    answer: 'Your registration includes access to all workshops and sessions, hands-on lab materials, coffee breaks and lunch for all three days, networking events, course materials and resources, and a certificate of completion. Accommodation is not included.',
    queryId: 'QUERY_003',
  },
  {
    question: 'Will the sessions be recorded?',
    answer: 'Selected plenary sessions and keynotes will be recorded and made available to registered participants after the event. However, hands-on workshops are live-only to ensure interactive learning.',
    queryId: 'QUERY_004',
  },
  {
    question: 'Will there be networking opportunities?',
    answer: 'Absolutely! We\'ve built in dedicated networking sessions during coffee breaks, lunches, and a special networking event on Day 2 evening. You\'ll have opportunities to connect with speakers, fellow participants, and industry representatives.',
    queryId: 'QUERY_005',
  },
  {
    question: 'What equipment do I need to bring?',
    answer: 'Please bring your laptop with the required software installed (we\'ll send a detailed setup guide before the event). All robotics hardware and lab equipment will be provided.',
    queryId: 'QUERY_006',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [processing, setProcessing] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex !== index) {
      setProcessing(index);
      setTimeout(() => {
        setOpenIndex(index);
        setProcessing(null);
      }, 600);
    } else {
      setOpenIndex(null);
    }
  };

  return (
    <section id="faq" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      {/* Neural background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        {/* Circuit mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
          <defs>
            <pattern id="faq-circuit" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="oklch(0.5 0.2 192)" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="oklch(0.5 0.2 192)" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-circuit)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-600/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-700 dark:text-cyan-300 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={MOTION_CONFIG.hover.transition}
          >
            <Terminal size={14} />
            <span>Neural Query System</span>
            <SensorIndicator variant="cyan" size="sm" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight tracking-tight">
            Knowledge Terminal
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            Query the system for information about the ICRA Satellite School
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="robot-panel rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden relative group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Rare scan effect */}
              <RareScanEffect />
              {/* Processing indicator */}
              {processing === index && (
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}

              {/* Corner indicators */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300" />

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 flex items-start justify-between text-left hover:bg-cyan-500/5 transition-all duration-300 relative"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex-1 pr-4">
                  {/* Query ID */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 tracking-wider">
                      {faq.queryId}
                    </span>
                    <motion.div
                      className="w-1 h-1 rounded-full bg-cyan-500"
                      animate={{ opacity: openIndex === index ? [0.3, 1, 0.3] : 0.3 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* Question */}
                  <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white block group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                </div>

                {/* Expand indicator */}
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 90 : 0,
                    scale: processing === index ? [1, 1.15, 1] : 1,
                  }}
                  transition={{ duration: MOTION_CONFIG.duration.fast }}
                  className="shrink-0 mt-1"
                >
                  <ChevronRight 
                    className={`w-5 h-5 transition-colors ${
                      openIndex === index 
                        ? 'text-cyan-500' 
                        : 'text-gray-400 dark:text-gray-500'
                    }`} 
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: MOTION_CONFIG.duration.normal, ease: MOTION_CONFIG.ease.premium }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 border-t border-cyan-500/20 relative">
                      {/* Terminal-style response */}
                      <div className="space-y-3">
                        {/* Response header */}
                        <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
                          <span>RESPONSE</span>
                          <motion.div
                            className="flex gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span>{'>'}</span>
                            <motion.span
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              _
                            </motion.span>
                          </motion.div>
                        </div>

                        {/* Answer with typing effect simulation */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-4 border-l-2 border-cyan-500/30"
                        >
                          {faq.answer}
                        </motion.p>

                        {/* Status indicator */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-2 text-[10px] font-mono text-green-600 dark:text-green-400"
                        >
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-green-500"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span>QUERY RESOLVED</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom indicators */}
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Contact Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 robot-panel rounded-xl p-6 sm:p-8 border border-cyan-500/20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,194,255,0.05) 0%, rgba(0,194,255,0.02) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Scan line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Direct System Query
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              Query not found in knowledge base? Contact our support terminal for direct assistance.
            </p>
            <motion.a
              href="mailto:icra-tep@ieee.tn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white border-2 border-cyan-500/50 hover:border-cyan-400 transition-all relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, oklch(0.5 0.2 192 / 0.2), oklch(0.5 0.2 192 / 0.1))',
              }}
            >
              <span className="relative z-10">Initialize Contact</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
