'use client';

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:rounded-lg focus:text-white focus:font-semibold focus:shadow-xl transition"
      style={{ backgroundColor: '#f20136' }}
    >
      Skip to main content
    </a>
  );
}
