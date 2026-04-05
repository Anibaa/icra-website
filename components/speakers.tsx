'use client';

import { motion } from 'framer-motion';

const speakers = [
  {
    name: 'Dr. Daniela Rus',
    role: 'MIT CSAIL Director',
    specialty: 'Autonomous Systems',
    bio: 'Leading researcher in robotics and AI',
  },
  {
    name: 'Dr. Stefan Schaal',
    role: 'USC Professor',
    specialty: 'Robot Learning',
    bio: 'Pioneer in humanoid robotics',
  },
  {
    name: 'Dr. Anibal Ollero',
    role: 'University of Seville',
    specialty: 'Aerial Robotics',
    bio: 'Expert in aerial and multi-robot systems',
  },
  {
    name: 'Dr. Takeo Kanade',
    role: 'CMU Robotics Professor',
    specialty: 'Computer Vision',
    bio: 'Founder of CMU Robotics Institute',
  },
  {
    name: 'Dr. Oussama Khatib',
    role: 'Stanford Professor',
    specialty: 'Human-Robot Interaction',
    bio: 'Leader in collaborative robotics',
  },
  {
    name: 'Dr. Jitendra Malik',
    role: 'UC Berkeley',
    specialty: 'Perception & Learning',
    bio: 'Computer vision and AI researcher',
  },
];

export function Speakers() {
  return (
    <section id="speakers" className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Featured Speakers
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Learn from the world&apos;s leading robotics researchers and industry pioneers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group glass rounded-lg p-4 sm:p-6 border border-white/10 hover:border-purple-500/50 transition"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-xl sm:text-2xl font-bold text-white">
                  {speaker.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition">
                    {speaker.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-400 font-medium">{speaker.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{speaker.specialty}</p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300">{speaker.bio}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white border border-red-500/50 rounded-lg hover:bg-red-500/10 hover:border-red-400/70 transition mt-3 sm:mt-4"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 px-4">Speakers to be announced as we approach the event</p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#f20136' }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base text-white font-semibold hover:shadow-2xl transition border border-pink-400/50 hover:border-pink-300 brand-red-glow"
          >
            View Full Speaker List
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
