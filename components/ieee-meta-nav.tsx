'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function IEEEMetaNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hide when scrolled down more than 40px
      setIsVisible(scrollPosition < 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 w-full z-60 bg-black text-white transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex flex-row items-center justify-between py-2 md:py-0 gap-2">
          {/* Left side links */}
          <div className="text-[0.75em] sm:text-[0.9em] leading-[125%] md:py-[11px] flex-1">
            <Link 
              href="https://www.ieee.org/index.html" 
              className="text-white no-underline hover:underline"
              target="_self"
            >
              IEEE.org
            </Link>
            <span className="mx-1 sm:mx-2">|</span>
            <Link 
              href="https://www.ieeexplore.ieee.org/Xplore/guesthome.jsp" 
              className="text-white no-underline hover:underline"
              target="_self"
            >
              <span className="hidden xs:inline">IEEE </span>Xplore<sup className="hidden sm:inline">®</sup>
            </Link>
            <span className="mx-1 sm:mx-2 hidden sm:inline">|</span>
            <Link 
              href="https://standards.ieee.org/" 
              className="text-white no-underline hover:underline hidden sm:inline"
              target="_self"
            >
              Standards
            </Link>
            <span className="mx-2 hidden md:inline">|</span>
            <Link 
              href="https://spectrum.ieee.org/" 
              className="text-white no-underline hover:underline hidden md:inline"
              target="_self"
            >
              Spectrum
            </Link>
            <span className="mx-2 hidden lg:inline">|</span>
            <Link 
              href="https://www.ieee.org/sitemap.html" 
              className="text-white no-underline hover:underline hidden lg:inline"
              target="_self"
            >
              More Sites
            </Link>
          </div>

          {/* Right side - Join IEEE, Donate, and Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="text-[0.75em] sm:text-[0.9em] leading-[125%] md:py-[11px]">
              <Link 
                href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join" 
                className="text-white no-underline hover:underline"
                target="_self"
              >
                <span className="hidden sm:inline">Join IEEE</span>
              </Link>
              <span className="mx-1 sm:mx-2 hidden sm:inline">|</span>
              <Link 
                href="https://www.ieee.org/give" 
                className="text-white no-underline hover:underline hidden sm:inline"
                target="_self"
              >
                Donate
              </Link>
            </div>

            {/* IEEE Logo - upper right, min 100x33px */}
            <Link 
              href="https://www.ieee.org" 
              className="shrink-0"
              target="_self"
              aria-label="IEEE"
            >
              <div className="relative min-w-[80px] min-h-[26px] sm:min-w-[100px] sm:min-h-[33px] md:min-w-[120px] md:min-h-[40px]">
                {mounted && (
                  <Image
                    src="/Logos/ieee-logo.webp"
                    alt="IEEE"
                    width={120}
                    height={40}
                    className="object-contain w-[80px] h-[26px] sm:w-[100px] sm:h-[33px] md:w-[120px] md:h-[40px]"
                    priority
                  />
                )}
                {!mounted && (
                  <div className="w-[80px] h-[26px] sm:w-[100px] sm:h-[33px] md:w-[120px] md:h-[40px] bg-gray-700 animate-pulse rounded" />
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
