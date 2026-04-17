'use client';

import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function MouseTracker() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Custom cursor follower */}
      <div
        className="fixed w-8 h-8 border-2 border-cyan-500/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s ease-out',
        }}
      />
      
      {/* Mouse trail effect */}
      <div
        className="fixed w-2 h-2 bg-purple-500/70 rounded-full pointer-events-none z-[9998] blur-sm"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out',
        }}
      />

      {/* Coordinates display (optional - for debugging) */}
      <div
        className="fixed px-3 py-1.5 bg-black/80 text-white text-xs rounded-lg pointer-events-none z-[9999] font-mono"
        style={{
          left: `${mousePosition.x + 20}px`,
          top: `${mousePosition.y + 20}px`,
        }}
      >
        X: {Math.round(mousePosition.x)} Y: {Math.round(mousePosition.y)}
      </div>
    </>
  );
}
