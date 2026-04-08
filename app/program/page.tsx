'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, ArrowRight, Video, Users, Coffee, Award } from 'lucide-react';
import { IEEEMetaNav } from '@/components/ieee-meta-nav';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { IEEEFooter } from '@/components/ieee-footer';

const programDays = [
  {
    day: 1,
    date: 'June 1, 2026',
    title: 'Opening & ICRA Plenary',
    description: 'Opening ceremony, plenary sessions streaming from ICRA, and hands-on workshops',
    highlights: ['Opening Ceremony', 'ICRA Plenary Streaming', 'Workshop Sessions', 'Hands-on Labs'],
    color: 'from-purple-500 to-pink-500',
    icon: Video,
  },
  {
    day: 2,
    date: 'June 2, 2026',
    title: 'Workshops & Hands-on',
    description: 'Intensive hands-on workshops with practical robotics applications',
    highlights: ['Advanced Workshops', 'Practical Labs', 'Team Projects', 'Expert Guidance'],
    color: 'from-cyan-500 to-blue-500',
    icon: Users,
  },
  {
    day: 3,
    date: 'June 3, 2026',
    title: 'Workshops & Closing',
    description: 'Final workshops, project presentations, and closing ceremony',
    highlights: ['Final Workshops', 'Project Showcase', 'Awards Ceremony', 'Networking'],
    color: 'from-red-500 to-orange-500',
    icon: Award,
  },
];

export default function ProgramPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <IEEEMetaNav />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="inline-block px-4 py-2 border rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(242, 1, 54, 0.15)', borderColor: 'rgba(242, 1, 54, 0.5)', color: '#f20136' }}>
              <Calendar className="inline-block w-4 h-4 mr-2" />
              June 1-3, 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Event Program
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three days of intensive learning, hands-on workshops, and networking with robotics experts from around the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programDays.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => router.push(`/program/${program.day}`)}
                >
                  <div className="glass rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>{program.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Day {program.day}</h3>
                      <h4 className="text-xl font-semibold text-gray-300 mb-3">{program.title}</h4>
                      <p className="text-gray-400">{program.description}</p>
                    </div>

                    {/* Highlights */}
                    <div className="flex-grow mb-6">
                      <div className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            <span className="text-sm text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      className="flex items-center justify-between p-4 rounded-lg bg-white/5 group-hover:bg-red-500/10 transition-colors"
                    >
                      <span className="text-white font-semibold">View Details</span>
                      <ArrowRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-bold text-white">What to Expect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-xl p-8 border border-white/10">
                <Coffee className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Coffee Breaks</h3>
                <p className="text-gray-400">Regular breaks with refreshments and networking opportunities</p>
              </div>
              
              <div className="glass rounded-xl p-8 border border-white/10">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">1.5 Hour Sessions</h3>
                <p className="text-gray-400">Focused learning blocks with hands-on practice time</p>
              </div>
              
              <div className="glass rounded-xl p-8 border border-white/10">
                <Video className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">ICRA Streaming</h3>
                <p className="text-gray-400">Live plenary sessions from the main ICRA conference</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Ready to Join?</h2>
            <p className="text-xl text-gray-300">
              Secure your spot at the ICRA Satellite School and be part of this transformative experience
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="px-8 py-4 rounded-lg text-white font-semibold border border-pink-400/50 hover:border-pink-300 brand-red-glow transition"
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <IEEEFooter />
    </div>
  );
}
