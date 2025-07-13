import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '@utils';

interface ChecklistItem {
  id: string;
  text: string;
  checked?: boolean;
}

interface BlogChecklistProps {
  title: string;
  items: ChecklistItem[];
  description?: string;
  className?: string;
}

export function BlogChecklist({
  title,
  items,
  description,
  className,
}: BlogChecklistProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("p-6 rounded-lg border shadow-md", className)}
    >
      <h3 className="text-xl lg:text-2xl font-bold mb-1">{title}</h3>
      {description && <p className="mb-4 text-gray-600">{description}</p>}

      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.label
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "flex items-center space-x-3 p-2 px-3 rounded-lg cursor-pointer transition-colors",
              "group hover:bg-pink-100"
            )}
          >
            <input
              type="checkbox"
              defaultChecked={item.checked}
              className="scale-125 accent-pink-500"
            />
            <span className="group-hover:text-pink-600 transition-colors">
              {item.text}
            </span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
}
