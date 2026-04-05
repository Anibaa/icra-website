'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="glass-dark backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold gradient-text">ICRA</div>
              <div className="text-sm text-gray-400">Satellite School 2026</div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/program" className="text-sm hover:text-primary transition">
                Program
              </Link>
              <Link href="#speakers" className="text-sm hover:text-primary transition">
                Speakers
              </Link>
              <Link href="#committee" className="text-sm hover:text-primary transition">
                Committee
              </Link>
              <Link href="#partners" className="text-sm hover:text-primary transition">
                Partners
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#f20136' }}
              className="px-6 py-2 rounded-full text-white text-sm font-semibold hover:border border-pink-400/50 brand-red-glow"
            >
              Register
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
