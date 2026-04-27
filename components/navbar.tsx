'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#program', label: 'Program' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#committee', label: 'Committee' },
    { href: '#partners', label: 'Partners' },
    { href: '/tunisia', label: 'Tunisia' },
    { href: '/visa', label: 'Visa' },
    { href: '/#travel-grant', label: 'Travel Grant' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Extract the hash from the href
    const hash = href.includes('#') ? href.split('#')[1] : null;
    
    if (hash) {
      e.preventDefault();
      
      // If we're not on the home page, navigate there first
      if (window.location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      
      // Find the element and scroll to it
      const element = document.getElementById(hash);
      if (element) {
        const offset = 100; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without triggering navigation
        window.history.pushState(null, '', `#${hash}`);
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'top-0' : 'top-[40px] md:top-[40px]'
      }`}
    >
      <div className={`glass-dark backdrop-blur-lg border-b transition-all duration-300 ${
        scrolled 
          ? 'border-white/20 dark:border-white/20 shadow-lg shadow-purple-500/10' 
          : 'border-white/10 dark:border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
              {mounted && (
                <motion.div 
                  className="relative h-8 w-24 sm:h-10 sm:w-32"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Image
                    src={theme === 'dark' ? '/Logos/white.png' : '/Logos/black.png'}
                    alt="ICRA Logo"
                    fill
                    className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(153,102,255,0.5)]"
                    priority
                  />
                </motion.div>
              )}
              {!mounted && (
                <div className="h-8 w-24 sm:h-10 sm:w-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
              )}
            </Link>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm relative group hover:text-primary transition-colors"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-purple-500/10 transition-all duration-300 relative group"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-500 group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-700 group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]" />
                  )}
                </motion.button>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-purple-500/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-900 dark:text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-900 dark:text-white" />
                )}
              </motion.button>
              
              {/* Travel Grant Button */}
              {/* <div className="relative group hidden sm:block">
                <motion.a
                  href="https://forms.gle/p4rx7A9jF2LaPsty8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: '#f20136' }}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-semibold border border-pink-400/50 brand-red-glow relative overflow-hidden"
                >
                  <span className="relative z-10">Travel Grant</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.a>
              </div> */}

              {/* Register Button */}
               <div className="relative group hidden sm:block">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: '#f20136' }}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-semibold border border-pink-400/50 brand-red-glow cursor-not-allowed opacity-90 relative overflow-hidden"
                  title="Registration opens soon"
                >
                  <span className="relative z-10">Register</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.button>
         
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  <div className="bg-gray-900 dark:bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                    Coming Soon!
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45" />
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-300 dark:border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setMobileMenuOpen(false);
                      }}
                      className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Travel Grant Button - Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <a
                    href="https://forms.gle/p4rx7A9jF2LaPsty8"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ backgroundColor: '#f20136' }}
                    className="block w-full px-6 py-2.5 rounded-full text-white text-sm font-semibold border border-pink-400/50 brand-red-glow text-center"
                  >
                    Apply for Travel Grant
                  </a>
                </motion.div>
                
                {/* Register Button - Mobile */}
                <div className="relative group">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + 1) * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ backgroundColor: '#f20136' }}
                    className="w-full px-6 py-2.5 rounded-full text-white text-sm font-semibold border border-pink-400/50 brand-red-glow cursor-not-allowed opacity-90"
                    title="Registration opens soon"
                  >
                    Registration Opens Soon
                  </motion.button>
                  {/* Tooltip popup */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    <div className="bg-gray-900 dark:bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                      Coming Soon!
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
