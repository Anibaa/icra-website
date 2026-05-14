'use client';

import { motion } from 'framer-motion';
import { Check, Award, GraduationCap, Briefcase, AlertCircle, CreditCard, Users, ArrowRight, Calendar } from 'lucide-react';
import { registrationTiers, registrationFeatures, registrationContent, eventConfig, isDeadlinePassed } from '@/lib/data';
import { useState, useEffect } from 'react';

export function Registration() {
  const [isRegistrationExpired, setIsRegistrationExpired] = useState(false);
  const [isProjectExpired, setIsProjectExpired] = useState(false);

  useEffect(() => {
    // Check if deadlines have passed
    setIsRegistrationExpired(isDeadlinePassed(eventConfig.registrationDeadline));
    setIsProjectExpired(isDeadlinePassed(eventConfig.projectSubmissionDeadline));
  }, []);

  const handleRegistration = () => {
    // Open registration form in new tab
    window.open('https://forms.gle/zn9UJpE9Y9CWxW1R9', '_blank');
  };

  return (
    <section id="registration" className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-cyan-600/10 to-red-600/10 blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-red-500/30 mb-3"
          >
            <Award className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              {registrationContent.title}
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            {registrationContent.subtitle}
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
            This year, Tunisia will welcome passionate students, researchers, young professionals, and PhD candidates from across the globe for an exceptional journey into the world of robotics and intelligent technologies. PhD participants are also invited to register and showcase their research through poster presentations, making this an even greater platform to share ideas, connect, and inspire.
          </p>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
            At the intersection of innovation, collaboration, and cultural heritage, the ICRA Satellite School 2026 promises a unique experience designed to inspire the next generation of tech leaders.
          </p>

          {/* Important Notices */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full border border-orange-300 dark:border-orange-700">
              <Users className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              <span className="text-xs font-medium text-orange-700 dark:text-orange-300">
                {registrationContent.limitedSpots}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-300 dark:border-blue-700">
              <CreditCard className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                {registrationContent.paymentNote}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Registration Pricing List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <div className="glass rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500/10 via-purple-500/10 to-cyan-500/10 px-4 py-2.5 border-b border-gray-200 dark:border-white/10">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white text-center">
                Registration Fees
              </h3>
            </div>

            {/* Pricing Items */}
            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {registrationTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 sm:px-5 py-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    {/* Left: Type Info */}
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${
                        tier.category.includes('Student') 
                          ? 'bg-cyan-500/20 text-cyan-500' 
                          : 'bg-purple-500/20 text-purple-500'
                      }`}>
                        {tier.category.includes('Student') ? (
                          <GraduationCap className="w-4 h-4" />
                        ) : (
                          <Briefcase className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base leading-tight truncate">
                          {tier.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {tier.membershipType}
                        </p>
                      </div>
                    </div>

                    {/* Right: Price */}
                    <div className="text-right flex-shrink-0">
                      <div className="flex items-baseline gap-1 justify-end">
                        <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                          {tier.price}
                        </span>
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                          {tier.currency}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        ≈ ${tier.priceUSD} USD
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Conversion Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <div className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              <strong>Note:</strong> {registrationContent.conversionNote}
            </p>
          </div>
        </motion.div>

        {/* Central Registration Button - Dynamic based on deadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          {isRegistrationExpired ? (
            <>
              <motion.div
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gray-400 dark:bg-gray-700 text-white text-sm sm:text-base font-semibold border border-gray-500/50 inline-flex items-center gap-2 shadow-lg opacity-60 cursor-not-allowed"
              >
                <span>Registration Closed</span>
                <AlertCircle className="w-4 h-4" />
              </motion.div>
              <p className="text-xs text-red-600 dark:text-red-400 mt-1.5 font-semibold">
                Registration deadline ({registrationContent.registrationDeadline}) has passed
              </p>
            </>
          ) : (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRegistration}
                style={{ backgroundColor: '#f20136' }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base font-semibold border border-pink-400/50 hover:border-pink-300 brand-red-glow transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-red-500/25"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                Click to open registration form
              </p>
            </>
          )}
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Student Note */}
            <div className="flex items-start gap-2 p-3 glass rounded-lg border border-blue-200 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-900/20">
              <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-blue-800 dark:text-blue-200 mb-0.5">Student Eligibility</h4>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  {registrationContent.studentNote}
                </p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="flex items-start gap-2 p-3 glass rounded-lg border border-green-200 dark:border-green-800/30 bg-green-50/50 dark:bg-green-900/20">
              <CreditCard className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-green-800 dark:text-green-200 mb-0.5">Payment Process</h4>
                <p className="text-xs text-green-700 dark:text-green-300">
                  {registrationContent.paymentNote}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What's Included Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="glass rounded-xl p-5 sm:p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              What&apos;s Included in Your Registration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {registrationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
{/* 
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="glass rounded-xl p-5 sm:p-6 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-3">
                <Award className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Call for Projects</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Call for Projects is Now Open!
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
                ICRA Satellite School 2026
              </p>
            </div>

            <div className="space-y-3 mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                The IEEE ICRA Satellite School 2026 is coming to Hammamet, Tunisia from 1–3 June 2026 and we want to see what <strong>YOU</strong> have been building! We are inviting students, researchers, and innovators to submit their projects and present them to a passionate international robotics community.
              </p>
              
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                This is your chance to showcase your work, share your ideas, and connect with experts and peers from around the world!
              </p>

              <div className="glass rounded-lg p-4 bg-white/50 dark:bg-gray-800/50">
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Why submit?</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>Present your project to a global robotics audience</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>Get valuable feedback from leading experts</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>Build international connections that last beyond the event</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>Be part of an ICRA-style experience right here in Tunisia</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                All submissions will be reviewed, and selected candidates will be contacted with further details regarding participation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-red-100 dark:bg-red-900/30 rounded-full border border-red-300 dark:border-red-700">
                <Calendar className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-xs font-semibold text-red-700 dark:text-red-300">
                  Submission Deadline: <strong>15 May 2026</strong>
                </span>
              </div>
            </div>

            <div className="text-center">
              {isProjectExpired ? (
                <>
                  <motion.div
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-400 dark:bg-gray-700 text-white text-sm font-semibold shadow-lg opacity-60 cursor-not-allowed"
                  >
                    <span>Project Submission Closed</span>
                    <AlertCircle className="w-4 h-4" />
                  </motion.div>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2 font-semibold">
                    Project submission deadline (May 15, 2026) has passed
                  </p>
                </>
              ) : (
                <>
                  <motion.a
                    href="https://forms.gle/ikomGrC1iAxBsDHf8"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-300"
                  >
                    <span>Submit Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Deadline: May 15, 2026 - Don&apos;t miss this opportunity!
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div> */}

        {/* Registration Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-lg p-4 border border-gray-200 dark:border-white/10 max-w-4xl mx-auto">
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2.5">Important Deadlines</h4>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Registration Deadline: <strong>15 May 2026</strong>
                </span>
              </div>
              <div className="hidden sm:block w-6 h-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Project Submission: <strong>15 May 2026</strong>
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2.5">
              Ready to explore, learn, present, and connect? Register now!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}