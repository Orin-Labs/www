import { motion } from 'framer-motion';

import { BlogCard } from '@blog/components';
import {
  FloatingNav,
  Footer,
} from '@components';
import { flattenItems } from '@utils';

import { BLOG_META } from './meta-data';

function createBlogPattern<T>(array: T[]): T[][] {
  let cycle = 0;
  const itemsLeft = [...array];
  let result: T[][] = [];
  let maxIters = 100;

  while (itemsLeft.length > 0) {
    const item = itemsLeft.shift();
    if (!item) {
      break;
    }

    if (cycle === 0 || cycle === 3) {
      result.push([item]);
    } else if (cycle === 1 || cycle === 2) {
      const item2 = itemsLeft.shift();
      if (!item2) {
        result.push([item]);
        break;
      }
      result.push([item, item2]);
    }

    maxIters--;
    if (maxIters === 0) {
      break;
    }

    cycle++;
    if (cycle === 4) {
      cycle = 0;
    }
  }

  return result;
}

export default function BlogIndex() {
  const blogPattern = createBlogPattern(
    flattenItems(BLOG_META).filter((post) => !post.underConstruction)
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation */}
      <FloatingNav isVisible={true} />

      {/* <SEOHead
        post={{
          name: "Orin's Blog",
          excerpt:
            "Comprehensive guides and expert insights for parents navigating middle school academics.",
          date: new Date(),
          shortName: "Orin's Blog",
          slug: "orin-blog",
          component: () => null,
          keywords: ["blog", "middle school", "academics", "parenting"],
          author: "Orin",
          readingTime: 0,
          id: "orin-blog",
          image: "/images/blog_og.png",
        }}
      /> */}

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
            {blogPattern.map((item, index) => {
              if (item.length === 2) {
                // Render paired posts
                return (
                  <div key={index} className="col-span-6 flex flex-col gap-4">
                    <BlogCard post={item[0]} />
                    <BlogCard post={item[1]} />
                  </div>
                );
              } else {
                // Render individual post
                return (
                  <BlogCard key={index} post={item[0]} className="col-span-6" />
                );
              }
            })}
          </div>
        </main>

        <Footer className="bg-white mt-24" />
      </div>
    </div>
  );
}
