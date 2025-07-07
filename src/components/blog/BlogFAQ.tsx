import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import { cn } from '../../utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

export function BlogFAQ({
  title = "Frequently Asked Questions",
  items,
  className,
}: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(className)}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "border border-gray-200 rounded-lg overflow-hidden",
              "shadow-[2px_2px_4px_#00000022,_-2px_-2px_4px_#ffffff99]",
              "dark:shadow-[2px_2px_2px_#00000044,_-2px_-2px_2px_#ffffff22]"
            )}
          >
            <button
              className={cn(
                "w-full text-left bg-white hover:bg-gray-50 p-4 font-bold transition-colors relative",
                "focus:outline-none border-b flex items-center justify-between"
              )}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <motion.span
                className="text-2xl"
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white overflow-hidden"
                >
                  <div className="p-4">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
