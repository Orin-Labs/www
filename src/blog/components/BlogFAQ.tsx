import React, {
  useEffect,
  useState,
} from 'react';

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
  description?: string;
  items: FAQItem[];
  className?: string;
}

export function BlogFAQ({
  title = "Frequently Asked Questions",
  items,
  description,
  className,
}: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate and inject FAQ structured data
  useEffect(() => {
    if (items && items.length > 0) {
      const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };

      // Add the structured data to the page
      updateFAQStructuredData(
        "faq-component-structured-data",
        faqStructuredData
      );
    }

    // Cleanup function to remove structured data when component unmounts
    return () => {
      removeFAQStructuredData("faq-component-structured-data");
    };
  }, [items]);

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
      <p className="text-gray-600">{description}</p>
      {items.map(({ question, answer, icon: Icon }, index) => (
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
            <Icon className="w-4 h-4" />
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
    </motion.div>
  );
}

// Helper function to add FAQ structured data to the page
function updateFAQStructuredData(id: string, data: any) {
  // Remove existing FAQ structured data from SEOHead if it exists
  const existingSEOFAQ = document.querySelector(
    'script[data-id="faq-structured-data"]'
  );
  if (existingSEOFAQ) {
    existingSEOFAQ.remove();
  }

  // Add the new FAQ structured data from the component
  let element = document.querySelector(`script[data-id="${id}"]`);
  if (!element) {
    element = document.createElement("script");
    element.setAttribute("type", "application/ld+json");
    element.setAttribute("data-id", id);
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

// Helper function to remove FAQ structured data when component unmounts
function removeFAQStructuredData(id: string) {
  const element = document.querySelector(`script[data-id="${id}"]`);
  if (element) {
    element.remove();
  }
}
