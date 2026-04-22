'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function IEEEFooter() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="w-full border-t-[3px] border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-950">
      {/* IEEE RAS and IEEE RAS Tunisia Logos */}
      {/* <div className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            
            <div className="flex items-center gap-3">
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Organized by:</span>
              {mounted && (
                <>
                  <div className="relative h-12 w-32 sm:h-14 sm:w-40">
                    <Image
                      src={theme === 'dark' ? '/Logos/logo.webp' : '/Logos/logo.webp'}
                      alt="IEEE RAS Tunisia Chapter"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-12 w-32 sm:h-14 sm:w-40">
                    <Image
                      src={theme === 'dark' ? '/Logos/ras_logo.jpg.webp' : '/Logos/ras_tunisia.webp'}
                      alt="IEEE RAS"
                      fill
                      className="object-contain"
                    />
                  </div>
                </>
              )}
              {!mounted && (
                <>
                  <div className="h-12 w-32 sm:h-14 sm:w-40 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
                  <div className="h-12 w-32 sm:h-14 sm:w-40 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
                </>
              )}
            </div>
          </div>
        </div>
      </div> */}

      {/* IEEE Required Administrative Links */}
      <div className="w-full bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 py-6">
          <nav className="text-[0.9em] leading-[120%] text-gray-900 dark:text-gray-300 mb-4">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center">
              <Link 
                href="/" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline"
              >
                Home
              </Link>
              <span className="text-gray-400">|</span>
              
              <a 
                href="/#travel-grant" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline"
              >
                Travel Grant
              </a>
              <span className="text-gray-400">|</span>
              
              <Link 
                href="/visa" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline"
              >
                Visa Requirements
              </Link>
              <span className="text-gray-400">|</span>
              
              <a 
                href="https://www.ieee.org/sitemap.html" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline"
                target="_self"
              >
                Sitemap
              </a>
              <span className="text-gray-400">|</span>
              
              <a 
                href="mailto:icra-tep@ieee.tn" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline"
              >
                Contact & Support
              </a>
              <span className="text-gray-400">|</span>
              
              <a 
                href="https://www.ieee.org/accessibility_statement.html" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline"
                target="_self"
              >
                Accessibility
              </a>
              <span className="text-gray-400">|</span>
              
              <a 
                href="https://www.ieee.org/nondiscrimination" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline"
                target="_self"
              >
                Nondiscrimination Policy
              </a>
              <span className="text-gray-400 hidden sm:inline">|</span>
              
              <a 
                href="http://www.ieee-ethics-reporting.org" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline hidden sm:inline"
                target="_self"
              >
                IEEE Ethics Reporting
              </a>
              <span className="text-gray-400 hidden sm:inline">|</span>
              
              <a 
                href="https://privacy.ieee.org/policies" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline hidden sm:inline"
                target="_self"
              >
                IEEE Privacy Policy
              </a>
              <span className="text-gray-400 hidden md:inline">|</span>
              
              <a 
                href="https://www.ieee.org/site_terms_conditions.html" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline hidden md:inline"
                target="_self"
              >
                Terms & Disclosures
              </a>
              <span className="text-gray-400 hidden md:inline">|</span>
              
              <a 
                href="https://www.ieee.org/about/feedback-ieee-site.html" 
                className="text-gray-900 dark:text-gray-300 no-underline hover:underline hidden md:inline"
                target="_self"
              >
                Feedback
              </a>
            </div>
          </nav>

          {/* Copyright and Descriptor */}
          <div className="text-[0.9em] leading-[120%] text-gray-600 dark:text-gray-400 text-center space-y-2">
            <p className="mb-2">
              &copy; Copyright {currentYear} IEEE - All rights reserved.
            </p>
            <p className="text-sm">
              A public charity, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
