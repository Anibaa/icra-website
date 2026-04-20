'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative w-full border-t border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand - Full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-3 sm:col-span-1"
          >
            <Link href="/" className="flex items-center mb-3 sm:mb-4">
              {mounted && (
                <div className="relative h-8 w-24 sm:h-10 sm:w-32">
                  <Image
                    src={theme === 'dark' ? '/Logos/white.png' : '/Logos/black.png'}
                    alt="ICRA Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {!mounted && (
                <div className="h-8 w-24 sm:h-10 sm:w-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
              )}
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
              Advancing robotics education and research worldwide.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href="https://www.instagram.com/icrasatellite/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm"
              >
                Instagram
              </motion.a>
              <motion.a
                href="http://linkedin.com/company/icra-satellite-school"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://www.facebook.com/ICRAschool"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm"
              >
                Facebook
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1"
          >
            <h4 className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm">
                  Program
                </Link>
              </li>
              <li>
                <a 
                  href="#speakers" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm cursor-pointer"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a 
                  href="#committee" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('committee')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm cursor-pointer"
                >
                  Committee
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1"
          >
            <h4 className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold mb-3 sm:mb-4">Information</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/visa" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm">
                  Visa Requirements
                </Link>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="mailto:icra-tep@ieee.tn" 
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#partners" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm cursor-pointer"
                >
                  Partners
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-xs sm:text-sm cursor-pointer"
                >
                  About
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact - Third column on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1"
          >
            <h4 className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold mb-3 sm:mb-4">Contact</h4>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
              Email: <a href="mailto:icra-tep@ieee.tn" className="text-purple-600 dark:text-purple-400 hover:underline">icra-tep@ieee.tn</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
              Phone: <a href="tel:+21690552146" className="text-purple-600 dark:text-purple-400 hover:underline">+216 90 552 146</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              Location: Tunis, Tunisia
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 mb-6 sm:mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4"
        >
          <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm text-center md:text-left">
            &copy; 2026 ICRA Satellite School. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            <a href="mailto:icra-tep@ieee.tn" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Contact</a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition cursor-pointer"
            >
              About
            </a>
            <a 
              href="#partners" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition cursor-pointer"
            >
              Partners
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
