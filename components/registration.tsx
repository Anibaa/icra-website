'use client';

import { motion } from 'framer-motion';
import { Check, Award, GraduationCap, Briefcase, AlertCircle, CreditCard, Users, ArrowRight } from 'lucide-react';
import { registrationTiers, registrationFeatures, registrationContent } from '@/lib/data';

export function Registration() {
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
            {registrationContent.description}
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

        {/* Central Registration Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
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

        {/* Registration Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-lg p-4 border border-gray-200 dark:border-white/10 max-w-4xl mx-auto">
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2.5">Registration Timeline</h4>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Opens: <strong>{registrationContent.registrationOpenDate}</strong>
                </span>
              </div>
              <div className="hidden sm:block w-6 h-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Deadline: <strong>{registrationContent.registrationDeadline}</strong>
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2.5">
              {registrationContent.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}