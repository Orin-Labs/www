import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '../../utils';

interface BlogCalloutProps {
  children: React.ReactNode;
  variant?: "info" | "warning" | "success" | "gradient";
  className?: string;
}

export function BlogCallout({
  children,
  variant = "info",
  className,
}: BlogCalloutProps) {
  const variants = {
    info: "bg-blue-100 text-blue-800 border-blue-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    success: "bg-green-100 text-green-800 border-green-200",
    gradient: "bg-gradient-to-br from-blue-600 to-purple-600 text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "border",
        "p-6 rounded-lg text-center font-bold relative overflow-hidden",
        "shadow-lg",
        variants[variant],
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
