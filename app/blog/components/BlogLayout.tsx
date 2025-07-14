"use client";

import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';

import FloatingNav from '@/components/FloatingNav';
import Nav from '@/components/Nav';
import { cn } from '@/utils';
import { Breadcrumbs } from '@blog/components/Breadcrumbs';
import { SocialShareButtons } from '@blog/components/SocialShareButtons';

import { OrinMetadata } from '../utils';

interface BlogLayoutProps {
  children: React.ReactNode;
  className?: string;
  blogMeta: OrinMetadata;
}

export function BlogLayout({ children, className, blogMeta }: BlogLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (blogMeta) {
      posthog.capture("blog_post_viewed", {
        blog_post_slug: blogMeta.title,
        blog_post_author: blogMeta.authors,
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
      <FloatingNav />
      <Nav />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto grow">
        <main className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-16 md:px-8 lg:px-16 font-sans flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Breadcrumbs />

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <time
                dateTime={new Date(
                  blogMeta.openGraph.publishedTime
                ).toISOString()}
              >
                {new Date(blogMeta.openGraph?.publishedTime).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
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
            <motion.div
              className="w-full aspect-video relative rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${blogMeta.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            <div className="flex flex-col gap-4">
              <motion.h1
                className="text-4xl md:text-5xl"
                style={{
                  fontFamily: "Gowun Dodum",
                }}
              >
                {blogMeta.title}
              </motion.h1>

              <motion.p>
                <span className="hidden md:block text-gray-500 italic">
                  By {blogMeta.authors.map((author) => author.name).join(", ")}
                </span>
              </motion.p>
            </div>

            {/* Back to Blog Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {children}
          </motion.div>

          <SocialShareButtons
            title={blogMeta.title}
            description={blogMeta.description}
            blogPostId={blogMeta.title}
          />
        </main>
      </div>
    </div>
  );
}
