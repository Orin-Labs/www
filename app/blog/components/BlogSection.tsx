"use client";

import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/utils';

interface BlogSectionProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  className?: string;
}

export function BlogSection({
  title,
  children,
  description,
  className,
}: BlogSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("relative flex flex-col gap-6", className)}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      {children}
    </motion.div>
  );
}
