'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Clock, MapPin, Users, Video, Coffee, Award, Wrench } from 'lucide-react';
import { IEEEMetaNav } from '@/components/ieee-meta-nav';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { IEEEFooter } from '@/components/ieee-footer';
import { detailedProgram, venueInfo } from '@/lib/data-program';

const getSessionIcon = (type?: string) => {
  switch (type) {
    case 'ceremony':
      return Award;
    case 'plenary':
      return Video;
    case 'workshop':
      return Wrench;
    case 'break':
      return Coffee;
    case 'presentation':
      return Users;
    default:
      return Users;
  }
};

const getSessionColor = (type?: string) => {
  switch (type) {
    case 'ceremony':
      return 'text-yellow-500 dark:text-yellow-400';
    case 'plenary':
      return 'text-purple-600 dark:text-purple-400';
    case 'workshop':
      return 'text-cyan-600 dark:text-cyan-400';
    case 'break':
      return 'text-orange-500 dark:text-orange-400';
    case 'presentation':
      return 'text-green-600 dark:text-green-400';
    default:
      return 'text-gray-600 dark:text-gray-400';
  }
};

export default function ProgramDetail() {
  const router = useRouter();
  const params = useParams();
  const dayNum = parseInt(params.day as string) || 1;
  const detail = detailedProgram[dayNum as keyof typeof detailedProgram] || detailedProgram[1];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <IEEEMetaNav />
      <Navbar />

      {/* Hero section */}
      <section className="pt-40 pb-20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Back button */}
            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition text-gray-900 dark:text-white"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </motion.button>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{detail.date}</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">{detail.title}</h1>
              <p className="text-xl text-gray-700 dark:text-gray-400">{detail.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3 glass rounded-lg p-4 border border-gray-200 dark:border-white/10">
                <Users size={24} className="text-red-600 dark:text-red-400" />
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">ORGANIZED BY</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{venueInfo.organizer}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass rounded-lg p-4 border border-gray-200 dark:border-white/10">
                <MapPin size={24} className="text-red-600 dark:text-red-400" />
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">LOCATION</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{venueInfo.name}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Session Schedule</h3>

          <div className="space-y-6">
            {detail.sessions.map((session, index) => {
              const SessionIcon = getSessionIcon(session.type);
              const iconColor = getSessionColor(session.type);
              const isBreak = session.type === 'break';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass rounded-xl p-8 border border-gray-200 dark:border-white/10 hover:border-red-500/30 transition ${isBreak ? 'bg-gray-50 dark:bg-white/5' : ''}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Time */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={20} className="text-red-600 dark:text-red-400" />
                        <span className="text-sm font-mono font-bold text-gray-900 dark:text-white">{session.time}</span>
                      </div>
                      {session.location && (
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-gray-500 dark:text-gray-500" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">{session.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10">
                      <div className="flex items-center gap-3 mb-3">
                        <SessionIcon size={20} className={iconColor} />
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{session.title}</h4>
                      </div>
                      {session.speaker && (
                        <div className="flex items-center gap-2 mb-4">
                          <Users size={16} className="text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{session.speaker}</span>
                        </div>
                      )}
                      <p className="text-gray-700 dark:text-gray-300">{session.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to Join Us?</h3>
            <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Register now for {detail.day} and gain access to world-class training in robotics and automation.
            </p>
            <div className="relative group inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#f20136' }}
                className="px-8 py-4 rounded-lg text-white font-semibold border border-pink-400/50 hover:border-pink-300 brand-red-glow transition cursor-not-allowed opacity-90"
                title="Registration opens soon"
              >
                Registration Opens Soon
              </motion.button>
              {/* Tooltip popup */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-gray-900 dark:bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                  Coming Soon!
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation to other days */}
      <section className="py-20 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Other Days</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((day) => (
              day !== dayNum && (
                <motion.button
                  key={day}
                  onClick={() => router.push(`/program/${day}`)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-red-500/50 transition text-left"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">View Program</p>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Day {day}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">June {day}</p>
                </motion.button>
              )
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <IEEEFooter />
    </div>
  );
}
