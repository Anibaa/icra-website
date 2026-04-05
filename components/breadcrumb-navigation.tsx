'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function BreadcrumbNavigation() {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      
      // Format label
      let label = path.charAt(0).toUpperCase() + path.slice(1);
      
      // Handle dynamic routes
      if (!isNaN(Number(path))) {
        label = `Day ${path}`;
      }
      
      breadcrumbs.push({
        label,
        href: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isFirst = index === 0;

          return (
            <motion.li
              key={crumb.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              {!isFirst && (
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              )}
              
              {isLast ? (
                <span 
                  className="text-gray-900 dark:text-white font-medium"
                  aria-current="page"
                >
                  {isFirst && <Home className="w-4 h-4 inline mr-1" />}
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition flex items-center gap-1"
                >
                  {isFirst && <Home className="w-4 h-4" />}
                  {crumb.label}
                </Link>
              )}
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}
