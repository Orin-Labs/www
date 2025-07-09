import { motion } from 'framer-motion';

import {
  BlogCard,
  Odyssey,
} from '@blog/components';
import {
  FloatingNav,
  Footer,
} from '@components';

import { POSTS } from './data';

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation */}
      <FloatingNav isVisible={true} />

      {/* Main Content */}
      <div className="w-full pt-48">
        <main className="mx-auto flex flex-col gap-4 px-4 max-w-6xl">
          {/* Blog Header */}
          <motion.div
            className="text-left flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Orin's Blog
            </h1>
            <p className="text-2xl text-gray-600">
              Comprehensive guides and expert insights for parents navigating
              middle school academics.
            </p>
          </motion.div>

          <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
            <BlogCard post={POSTS[0]} className="col-span-6" />
            <div className="col-span-6 flex flex-col gap-4">
              <BlogCard post={POSTS[1]} />
              <BlogCard post={POSTS[2]} />
            </div>
          </div>

          <Odyssey bg="#00000080" />
        </main>

        <Footer className="bg-white mt-24" />
      </div>
    </div>
  );
}
