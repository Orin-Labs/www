import { motion } from 'framer-motion';

import { Footer } from '../components/Footer';
import Nav from '../components/Nav';
import { Odyssey } from '../components/Odyssey';
import { getAllBlogPosts } from './blog-data';

export default function BlogIndex() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Main Content */}
      <div className="border-t border-gray-200 w-full pt-16 bg-gray-50">
        <main className="mx-auto flex flex-col gap-12 px-4 py-8 pb-24 max-w-6xl">
          {/* Blog Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Orin's Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Helpful insights, tips, and resources for parents of middle school
              students on their learning journey.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => (window.location.href = `/blog/${post.slug}`)}
              >
                {/* Post Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
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
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-gray-300">•</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {post.author}
                      </span>
                    </div>

                    <span className="text-blue-600 hover:text-blue-800 transition-colors font-medium flex items-center gap-1">
                      Read more
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <Odyssey />
        </main>

        <Footer className="bg-white" />
      </div>
    </div>
  );
}
