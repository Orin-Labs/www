"use client";

import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Construction,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';

import FloatingNav from '@/components/FloatingNav';
import { cn } from '@/utils';

import { BlogMeta } from '../lib/types';
import { Breadcrumbs } from './Breadcrumbs';
import { SocialShareButtons } from './SocialShareButtons';

interface BlogLayoutProps {
  children: React.ReactNode;
  className?: string;
  blogMeta: BlogMeta;
}

export function BlogLayout({ children, className, blogMeta }: BlogLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (blogMeta) {
      posthog.capture("blog_post_viewed", {
        blog_post_id: blogMeta.id,
        blog_post_name: blogMeta.name,
        blog_post_short_name: blogMeta.shortName,
        blog_post_slug: blogMeta.slug,
        blog_post_author: blogMeta.author,
        blog_post_date: blogMeta.date.toISOString(),
        blog_post_reading_time: blogMeta.readingTime,
        blog_post_under_construction: blogMeta.underConstruction || false,
        page_path: pathname,
        referrer: document.referrer,
      });
    }
  }, [blogMeta, pathname]);

  if (!blogMeta) {
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
              <Breadcrumbs currentSlug={blogMeta.slug} />

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <time dateTime={blogMeta.date.toISOString()}>
                  {blogMeta.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{blogMeta.readingTime}m read</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-12"
            >
              {blogMeta?.image && (
                <motion.div
                  className="w-full aspect-video relative rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${blogMeta?.image})`,
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
                  {blogMeta?.name}
                </motion.h1>

                <motion.p>
                  <span className="hidden md:block text-gray-500 italic">
                    By {blogMeta.author}
                  </span>
                </motion.p>
              </div>

              {/* Under Construction Alert */}
              {blogMeta.underConstruction && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3"
                >
                  <Construction className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-yellow-800 font-semibold text-sm mb-1">
                      Under Construction
                    </h3>
                    <p className="text-yellow-700 text-sm">
                      This article is currently being developed. Check back soon
                      for the complete guide!
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Back to Blog Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors w-fit"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Show content only if not under construction */}
              {!blogMeta.underConstruction && children}

              {/* Show preview content if under construction */}
              {blogMeta.underConstruction && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="bg-gray-50 border rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What to Expect
                  </h3>
                  <p className="text-gray-700 mb-4">{blogMeta.excerpt}</p>
                  <p className="text-gray-600 text-sm">
                    This comprehensive guide will include practical strategies,
                    expert insights, and actionable steps to help you navigate
                    this important aspect of your student's education.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Only show social sharing for completed posts */}
            {!blogMeta.underConstruction && (
              <SocialShareButtons
                title={blogMeta?.name}
                description={blogMeta?.excerpt}
                blogPostId={blogMeta.slug}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
