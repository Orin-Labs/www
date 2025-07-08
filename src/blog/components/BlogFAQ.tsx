import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  ChevronDownIcon,
  LucideIcon,
} from 'lucide-react';
import posthog from 'posthog-js';

import { cn } from '@utils';

export interface FAQItem {
  question: string;
  answer: string;
  icon: LucideIcon;
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
    const isOpening = openIndex !== index;
    setOpenIndex(openIndex === index ? null : index);

    // Track FAQ interaction
    posthog.capture("blog_faq_clicked", {
      faq_question: items[index].question,
      faq_index: index,
      faq_action: isOpening ? "open" : "close",
      page_path: window.location.pathname,
      blog_post_id: window.location.pathname.split("/").pop(),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(className, "flex flex-col gap-2")}
    >
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {items.map(({ question, answer, icon: Icon }, index) => (
        <div key={index} className={cn("flex gap-4 w-full")}>
          <div className="p-2 border rounded-lg h-fit border-gray-200 mt-1">
            <Icon className="w-4 h-4" />
          </div>

          <div className="grow flex flex-col">
            <button
              className="flex items-center justify-between gap-2 w-full hover:bg-gray-50 transition-colors duration-200 rounded-lg p-2"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-bold text-gray-900">{question}</h3>
              <div
                className="text-left w-fit focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <ChevronDownIcon className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden px-2"
                >
                  <div className="py-2">
                    <p className="text-gray-600">{answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
