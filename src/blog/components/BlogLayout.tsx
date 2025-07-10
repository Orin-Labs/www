// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Construction,
} from 'lucide-react';
import posthog from 'posthog-js';

import { getRelatedPosts } from '@blog/data';
import { FloatingNav } from '@components';
import {
  cn,
  getBySlug,
} from '@utils';

import { BLOG_META } from '../meta-data';
import { BlogCard } from './BlogCard';
import { Breadcrumbs } from './Breadcrumbs';
import { SocialShareButtons } from './SocialShareButtons';

interface BlogLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BlogLayout({ children, className }: BlogLayoutProps) {
  const currentPath = window.location.pathname;
  const currentSlug = currentPath.replace("/blog/", "");
  const entry = getBySlug(currentSlug, BLOG_META);

  useEffect(() => {
    if (entry) {
      posthog.capture("blog_post_viewed", {
        blog_post_id: entry.id,
        blog_post_name: entry.name,
        blog_post_short_name: entry.shortName,
        blog_post_slug: entry.slug,
        blog_post_author: entry.author,
        blog_post_date: entry.date.toISOString(),
        blog_post_reading_time: entry.readingTime,
        blog_post_under_construction: entry.underConstruction || false,
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

      <div className="flex flex-col gap-4 grow h-fit p-16">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto grow">
          <main className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-16 md:px-8 lg:px-16 font-sans flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <Breadcrumbs currentSlug={currentSlug} />

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
              {entry?.image && (
                <motion.div
                  className="w-full aspect-video relative rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${entry?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}

              <div className="flex flex-col gap-4">
                <motion.h1
                  className="text-4xl md:text-5xl"
                  style={{
                    fontFamily: "Gowun Dodum",
                  }}
                >
                  {entry?.name}
                </motion.h1>

                <motion.p>
                  <span className="hidden md:block text-gray-500 italic">
                    By {entry.author}
                  </span>
                </motion.p>
              </div>

              {/* Under Construction Alert */}
              {entry.underConstruction && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <Construction className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-amber-800 font-semibold text-lg mb-2">
                        🚧 Under Construction
                      </h3>
                      <p className="text-amber-700 mb-4">
                        This guide is currently being developed as part of our
                        comprehensive educational resource library. We're
                        working hard to bring you detailed, actionable content
                        that will help you support your middle schooler's
                        academic journey.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-amber-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Expected completion: Coming soon</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href="/blog"
                          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Browse available guides
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Show content only if not under construction */}
              {!entry.underConstruction && children}

              {/* Show preview content if under construction */}
              {entry.underConstruction && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="bg-gray-50 border rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What to Expect
                  </h3>
                  <p className="text-gray-700 mb-4">{entry.excerpt}</p>
                  <p className="text-gray-600 text-sm">
                    This comprehensive guide will include practical strategies,
                    expert insights, and actionable steps to help you navigate
                    this important aspect of your student's education.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Only show social sharing for completed posts */}
            {!entry.underConstruction && (
              <SocialShareButtons
                title={entry?.name}
                url={window.location.href}
                description={entry?.excerpt}
                blogPostId={entry?.slug}
              />
            )}
          </main>
        </div>

        {/* Related Posts */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getRelatedPosts(entry).map((article) => (
            <BlogCard post={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
