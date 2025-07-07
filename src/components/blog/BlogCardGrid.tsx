import React, { useRef } from 'react';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useHover } from 'usehooks-ts';

import { cn } from '../../utils';

interface BlogCardProps {
  title: string;
  subtitle?: string;
  description: string;
  action?: {
    text: string;
    onClick: () => void;
  };
  metadata?: Record<string, string>;
}

function BlogCard({ card }: { card: BlogCardProps }) {
  const ref = useRef<HTMLButtonElement>(null);
  const isHovered = useHover(ref);

  return (
    <motion.button
      ref={ref}
      onClick={card.action?.onClick}
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={cn(
        "bg-white border border-gray-200 backdrop-blur-sm rounded-lg",
        "shadow-[2px_2px_8px_#00000022,_-2px_-2px_8px_#ffffff99]",
        "hover:shadow-[4px_4px_12px_#00000033,_-4px_-4px_12px_#ffffffaa]",
        "dark:shadow-[4px_4px_4px_#00000044,_-4px_-4px_4px_#ffffff22]",
        "dark:hover:shadow-[6px_6px_8px_#00000055,_-6px_-6px_8px_#ffffff33]",
        "hover:-translate-y-1"
      )}
    >
      <div className="flex flex-col h-full text-left">
        <div className="flex-1 p-6">
          <h4 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h4>
          {card.subtitle && (
            <p className="text-sm text-gray-600 mb-2">{card.subtitle}</p>
          )}
          {card.metadata && (
            <div className="mb-3 space-y-1">
              {Object.entries(card.metadata).map(([key, value]) => (
                <p key={key} className="text-sm text-gray-500">
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </div>
          )}
          <p className="text-sm text-gray-700 leading-relaxed">
            {card.description}
          </p>
        </div>

        {card.action && (
          <div
            className={cn(
              "w-full shadow-none flex justify-between items-center text-white",
              "border-gray-200 border-t p-3 transition-colors rounded-b-lg",
              isHovered ? "bg-gray-900" : "bg-gray-800"
            )}
          >
            {card.action.text}
            <ArrowRight
              className={cn(
                "w-4 h-4 transition-transform duration-200",
                isHovered ? "translate-x-1" : "-translate-x-1"
              )}
            />
          </div>
        )}
      </div>
    </motion.button>
  );
}

interface BlogCardGridProps {
  title?: string;
  cards: BlogCardProps[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function BlogCardGrid({
  title,
  cards,
  columns = 3,
  className,
}: BlogCardGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(className)}
    >
      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      )}

      <div className={cn("grid gap-6", gridCols[columns])}>
        {cards.map((card, index) => (
          <BlogCard key={index} card={card} />
        ))}
      </div>
    </motion.div>
  );
}
