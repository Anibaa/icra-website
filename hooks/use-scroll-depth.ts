'use client';

import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export function useScrollDepth() {
  const scrollY = useMotionValue(0);
  const scrollYSpring = useSpring(scrollY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return { scrollY, scrollYSpring };
}
