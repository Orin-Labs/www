"use client";

import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import posthog from 'posthog-js';

import { cn } from '@/utils';

import { FAQItem } from './BlogFAQ';

interface FAQInteractiveProps {
  items: FAQItem[];
}

export function FAQInteractive({ items }: FAQInteractiveProps) {
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
    <div className="space-y-4">
      {items.map(({ question, answer, icon }, index) => (
        <div
          key={index}
          className={cn(
            "flex gap-4 px-1 w-full hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
          )}
          onClick={() => toggleFAQ(index)}
        >
          <div
            className={cn(
              "p-2 border rounded-lg h-fit mt-1 transition-colors duration-200",
              openIndex === index && "bg-gray-900 text-white"
            )}
          >
            <DynamicIcon className="w-4 h-4" name={icon} />
          </div>

          <div className="grow flex flex-col">
            <button className="flex items-center justify-between gap-2 w-full p-2">
              <h3 className="text-lg font-bold text-gray-900 m-0">
                {question}
              </h3>
              <div
                className={cn(
                  "text-left w-fit focus:outline-none",
                  openIndex === index && "rotate-180"
                )}
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
    </div>
  );
}
