import React, {
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';

import { cn } from '../../utils';
import FloatingNav from '../FloatingNav';
import Nav from '../Nav';

interface BlogHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  speed?: number;
}

export function BlogHero({
  title,
  subtitle,
  children,
  className = "",
  speed = 0.2,
}: BlogHeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[60vh] flex flex-col overflow-hidden">
      {/* Floating Navigation */}
      <FloatingNav isVisible={scrollY > 150} />

      <Nav />

      <div
        className={cn(
          "flex-1 flex items-center justify-center relative",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
