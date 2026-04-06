'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Who should attend the ICRA Satellite School?',
    answer: 'The program is designed for graduate students, researchers, industry professionals, and anyone interested in advancing their knowledge in robotics and automation. Whether you\'re new to the field or an experienced practitioner, our workshops cater to various skill levels.',
  },
  {
    question: 'Will I receive a certificate of completion?',
    answer: 'Yes! All participants who attend the full program will receive an official certificate of completion from IEEE RAS Tunisia Chapter. This certificate is recognized internationally and can be added to your professional credentials.',
  },
  {
    question: 'What is included in the registration fee?',
    answer: 'Your registration includes access to all workshops and sessions, hands-on lab materials, coffee breaks and lunch for all three days, networking events, course materials and resources, and a certificate of completion. Accommodation is not included.',
  },
  {
    question: 'Will the sessions be recorded?',
    answer: 'Selected plenary sessions and keynotes will be recorded and made available to registered participants after the event. However, hands-on workshops are live-only to ensure interactive learning.',
  },
  {
    question: 'Will there be networking opportunities?',
    answer: 'Absolutely! We\'ve built in dedicated networking sessions during coffee breaks, lunches, and a special networking event on Day 2 evening. You\'ll have opportunities to connect with speakers, fellow participants, and industry representatives.',
  },
  {
    question: 'What equipment do I need to bring?',
    answer: 'Please bring your laptop with the required software installed (we\'ll send a detailed setup guide before the event). All robotics hardware and lab equipment will be provided.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
            Everything you need to know about the ICRA Satellite School
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-white/5 transition"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-red-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2">
                      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 text-center glass rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-white/10"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 glass rounded-lg text-sm font-medium text-gray-900 dark:text-white border border-red-500/30 hover:border-red-400/60 hover:bg-red-500/10 transition"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
