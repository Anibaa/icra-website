'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="glass-dark backdrop-blur-lg border-b border-white/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="text-xl sm:text-2xl font-bold gradient-text">ICRA</div>
              <div className="hidden sm:block text-xs sm:text-sm text-gray-600 dark:text-gray-400">Satellite School 2026</div>
            </Link>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
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

            <div className="flex items-center gap-3">
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-700" />
                  )}
                </motion.button>
              )}
              
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#f20136' }}
                className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-semibold hover:border border-pink-400/50 brand-red-glow"
              >
                Register
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
