'use client';

import { motion } from 'framer-motion';

const committeeMembers = [
  {
    name: 'Chair',
    title: 'Dr. Juan Carlos Arevalo',
    affiliation: 'University of Madrid',
  },
  {
    name: 'Co-Chair',
    title: 'Dr. Lucia Pallottino',
    affiliation: 'University of Pisa',
  },
  {
    name: 'Treasurer',
    title: 'Dr. Antonio Franchi',
    affiliation: 'Technical University of Munich',
  },
  {
    name: 'Program Committee',
    title: 'Dr. Marco Dorigo',
    affiliation: 'Université Libre de Bruxelles',
  },
  {
    name: 'Program Committee',
    title: 'Dr. Sandra Hirche',
    affiliation: 'Technical University of Munich',
  },
  {
    name: 'Program Committee',
    title: 'Dr. Kaspar Althoefer',
    affiliation: 'Queen Mary University',
  },
];

export function Committee() {
  return (
    <section id="committee" className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Organizing Committee
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Distinguished leaders in robotics research overseeing the program
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-4 sm:p-6 border border-white/10 text-center hover:border-red-500/30 transition"
            >
              <div className="inline-block px-2.5 py-1 sm:px-3 sm:py-1 bg-red-600/20 border border-red-500/50 rounded-full text-xs font-semibold text-red-300 mb-3 sm:mb-4 uppercase tracking-wider">
                {member.name}
              </div>

              <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">{member.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{member.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
