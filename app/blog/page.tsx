import { Metadata } from 'next';

import FloatingNav from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';
import Nav from '@/components/Nav';

import { BlogIndexContent } from './components/BlogIndexContent';
import {
  BLOG_REGISTRY,
  flattenPosts,
} from './lib/blog-registry';

export const metadata: Metadata = {
  title: "Orin's Blog - Middle School Education Insights",
  description:
    "Comprehensive guides and expert insights for parents navigating middle school academics.",
  keywords: ["blog", "middle school", "academics", "parenting", "education"],
  openGraph: {
    title: "Orin's Blog - Middle School Education Insights",
    description:
      "Comprehensive guides and expert insights for parents navigating middle school academics.",
    images: ["/images/blog_og.png"],
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = flattenPosts(BLOG_REGISTRY).filter(
    (post) => !post.underConstruction
  );

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <FloatingNav />

      {/* Main Content */}
      <div className="w-full pt-24">
        <main className="mx-auto flex flex-col gap-4 px-4 max-w-6xl">
          <BlogIndexContent posts={posts} />
        </main>

        <Footer className="bg-white mt-24" />
      </div>
    </div>
  );
}
