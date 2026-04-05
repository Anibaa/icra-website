'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold gradient-text">ICRA</div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Advancing robotics education and research worldwide.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-purple-400 transition text-sm"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Program', 'Speakers', 'Register'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <ul className="space-y-3">
              {['FAQ', 'Contact', 'Privacy Policy', 'Terms'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-3">
              Email: <a href="mailto:info@icra2026.org" className="text-purple-400 hover:underline">info@icra2026.org</a>
            </p>
            <p className="text-gray-400 text-sm mb-3">
              Phone: <a href="tel:+1234567890" className="text-purple-400 hover:underline">+1 (234) 567-890</a>
            </p>
            <p className="text-gray-400 text-sm">
              Location: International Conference Center, Madrid, Spain
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2024 ICRA Satellite School. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-400 transition">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition">Terms</a>
            <a href="#" className="hover:text-purple-400 transition">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
