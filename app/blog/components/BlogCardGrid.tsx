"use client";

import React, { useRef } from 'react';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import posthog from 'posthog-js';
import { useHover } from 'usehooks-ts';

import { cn } from '@/utils';

export interface GridCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  description: string;
  action?: {
    text: string;
    onClick: () => void;
  };
  metadata?: Record<string, string>;
}

function GridCard({ card, index }: { card: GridCardProps; index: number }) {
  const ref = useRef<HTMLButtonElement>(null);
  const isHovered = useHover(ref);

  const handleClick = () => {
    // Track card click
    posthog.capture("blog_card_clicked", {
      card_title: card.title,
      card_subtitle: card.subtitle,
      card_index: index,
      page_path: window.location.pathname,
      blog_post_id: window.location.pathname.split("/").pop(),
    });

    // Execute original action if exists
    if (card.action?.onClick) {
      card.action.onClick();
    }
  };

  return (
    <motion.button
      ref={ref}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      transition={{ duration: 0.4, delay: 0.1 }}
      style={{
        backgroundImage: `url(${card.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={cn(
        "rounded-lg",
        "shadow-[2px_2px_8px_#00000022,_-2px_-2px_8px_#ffffff99]",
        "hover:shadow-[4px_4px_12px_#00000033,_-4px_-4px_12px_#ffffffaa]",
        "hover:-translate-y-1 relative overflow-hidden text-white"
      )}
    >
      <div className="flex flex-col h-full text-left text-gray-100 bg-[#000000bb] p-6">
        <div className="flex-1">
          <h3 className="text-2xl mb-2 text-white">{card.title}</h3>
          {card.subtitle && <p className="text-sm mb-2">{card.subtitle}</p>}
          {card.metadata && (
            <div className="mb-3 space-y-1">
              {Object.entries(card.metadata).map(([key, value]) => (
                <p key={key} className="text-sm">
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </div>
          )}
          <p className="text-sm leading-relaxed">{card.description}</p>
        </div>

        {card.action && (
          <div
            className={cn(
              "ml-auto mt-4 text-white flex justify-between items-center text-sm",
              "px-3 py-2 w-fit transition-colors rounded-lg gap-2"
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
  cards: GridCardProps[];
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
          <GridCard key={index} card={card} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
