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
      className={cn(
        "bg-white p-6 rounded-lg border-2 border-gray-200 mb-6",
        "shadow-[2px_2px_8px_#00000044,_-2px_-2px_8px_#ffffff99]",
        "dark:shadow-[4px_4px_4px_#00000044,_-4px_-4px_4px_#ffffff22]",
        className
      )}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {description && (
        <p className="mb-4 italic text-gray-600">{description}</p>
      )}

      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.label
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "flex items-center space-x-3 p-2 hover:bg-pink-50 rounded cursor-pointer transition-colors",
              "group"
            )}
          >
            <input
              type="checkbox"
              defaultChecked={item.checked}
              className="scale-125 accent-pink-500"
            />
            <span className="group-hover:text-pink-700 transition-colors">
              {item.text}
            </span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
}
