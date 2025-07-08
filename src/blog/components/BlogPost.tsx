import {
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';

import {
  FloatingNav,
  Nav,
} from '@components';

interface BlogPostProps {
  title: string;
  date: string;
  author?: string;
  readingTime?: string;
  children: ReactNode;
  className?: string;
}

export function BlogPost({
  title,
  date,
  author = "Orin",
  readingTime,
  children,
  className = "",
}: BlogPostProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Navigation */}
      <FloatingNav isVisible={scrollY > 150} />

      <Nav />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <motion.article
          className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Article Header */}
          <header className="px-8 py-8 border-b border-gray-100">
            <div className="mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <time className="flex items-center gap-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {author}
                </span>
                {readingTime && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      {readingTime}
                    </span>
                  </>
                )}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
          </header>

          {/* Article Content */}
          <div className="px-8 py-8">
            <div className="prose prose-lg prose-gray max-w-none">
              {children}
            </div>
          </div>
        </motion.article>

        {/* Author Bio Section */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-200 mt-8 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {author.charAt(0)}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                About {author}
              </h3>
              <p className="text-gray-600 mb-4">
                We're passionate about helping students and families succeed
                through personalized AI tutoring. Our goal is to make quality
                education accessible and engaging for every learner.
              </p>
              <a
                href="mailto:bryan@learnwithorin.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get in touch
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
