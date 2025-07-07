import React from 'react';

import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';

import { BLOG_POSTS } from '@/blog/blog-data';

import { cn } from '../../utils';
import { Footer } from '../Footer';
import Nav from '../Nav';

interface BlogLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BlogLayout({ children, className }: BlogLayoutProps) {
  const slug = window.location.pathname.split("/").pop();
  const entry = BLOG_POSTS.find((post) => post.slug === slug);
  console.log("entry", entry);

  return (
    <div
      className={cn("min-h-screen relative flex flex-col h-screen", className)}
    >
      <Nav className="bg-white" />

      <div className="flex-grow overflow-y-auto w-full border-t border-gray-200">
        <main className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-16 font-sans flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <button
              className={cn(
                "flex items-center gap-2 text-sm text-gray-500 transition-all duration-300",
                "hover:text-gray-700 hover:bg-gray-100 rounded-md p-2"
              )}
              onClick={() => {
                window.history.back();
              }}
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </button>

            {entry && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="hidden md:block">
                  By <i>{entry.author}</i>
                </span>
                <span className="hidden md:block">•</span>

                <time dateTime={entry.date.toISOString()}>
                  {entry.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{entry.readingTime}</span>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-12"
          >
            {children}
          </motion.div>
        </main>

        <Footer className="bg-white" />
      </div>
    </div>
  );
}
