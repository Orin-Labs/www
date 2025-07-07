import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '../../utils';

interface BlogSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function BlogSection({ title, children, className }: BlogSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("relative", className)}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      {children}
    </motion.div>
  );
}
