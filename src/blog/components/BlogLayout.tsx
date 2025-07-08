// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import posthog from "posthog-js";

import { getBlogPostBySlug } from "@blog/data";
import { FloatingNav } from "@components";
import { cn } from "@utils";

import { BlogCard } from "../";
import { BlogSidebar } from "./BlogSidebar";
import { SocialShareButtons } from "./SocialShareButtons";

interface BlogLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BlogLayout({ children, className }: BlogLayoutProps) {
  const currentPath = window.location.pathname;
  const currentSlug = currentPath.replace("/blog/", "");
  const entry = getBlogPostBySlug(currentSlug);

  useEffect(() => {
    if (entry) {
      posthog.capture("blog_post_viewed", {
        blog_post_id: entry.id,
        blog_post_title: entry.title,
        blog_post_slug: entry.slug,
        blog_post_author: entry.author,
        blog_post_date: entry.date.toISOString(),
        blog_post_reading_time: entry.readingTime,
        page_path: window.location.pathname,
        referrer: document.referrer,
      });
    }
  }, [entry]);

  if (!entry) {
    return null;
  }

  return (
    <div
      className={cn("min-h-screen relative flex flex-col h-screen", className)}
    >
      {/* Floating Navigation */}
      <FloatingNav isVisible={true} />

      <div className="flex gap-4 pt-16 grow min-h-0 border-t border-gray-200">
        {/* Floating Sidebar - positioned outside main content flow */}
        <BlogSidebar />

        {/* Main Content - with left margin to avoid sidebar overlap */}
        <div className="flex-1 overflow-y-auto grow">
          <main className="relative z-10 max-w-5xl mx-auto px-4 py-8 md:py-16 md:px-8 lg:px-16 font-sans flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <button
                className={cn(
                  "flex items-center gap-2 text-sm text-gray-500 transition-all duration-300",
                  "hover:text-gray-700 hover:bg-gray-100 rounded-md p-2"
                )}
                onClick={() => {
                  // Track back button click
                  if (entry) {
                    posthog.capture("blog_post_back_clicked", {
                      blog_post_id: entry.id,
                      blog_post_title: entry.title,
                      blog_post_slug: entry.slug,
                    });
                  }
                  window.history.back();
                }}
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Back to Blog
              </button>

              {entry && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <time dateTime={entry.date.toISOString()}>
                    {entry.date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{entry.readingTime}m read</span>
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-2">
                <motion.h1
                  className="text-4xl md:text-5xl"
                  style={{
                    fontFamily: "Gowun Dodum",
                  }}
                >
                  {entry?.title}
                </motion.h1>

                {entry && (
                  <motion.p>
                    <span className="hidden md:block">
                      By <i>{entry.author}</i>
                    </span>
                  </motion.p>
                )}
              </div>

              {children}
            </motion.div>

            <SocialShareButtons
              title={entry?.title}
              url={window.location.href}
              description={entry?.excerpt}
              blogPostId={entry?.slug}
            />

            {/* Related Posts */}
            {entry?.subArticles && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {entry.subArticles.map((article) => (
                  <BlogCard post={article} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
