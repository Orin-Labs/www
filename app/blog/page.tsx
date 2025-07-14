import { Metadata } from 'next';

import {
  metadata as academicAssessmentMetadata,
} from '@/blog/academic-assessment/page';
import FloatingNav from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';
import Nav from '@/components/Nav';

import { BlogIndexContent } from './components/BlogIndexContent';

export const metadata: Metadata = {
  title: "Orin's Blog",
  description:
    "Comprehensive guides and expert insights for parents navigating middle school academics.",
  keywords: ["blog", "middle school", "academics", "parenting", "education"],
  openGraph: {
    title: "Orin's Blog",
    description:
      "Comprehensive guides and expert insights for parents navigating middle school academics.",
    images: ["/images/blog_og.png"],
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <FloatingNav />

      <div className="w-full pt-24">
        <div className="mx-auto flex flex-col gap-4 px-4 max-w-6xl">
          <BlogIndexContent posts={[academicAssessmentMetadata]} />
        </div>

        <Footer className="bg-white mt-24" />
      </div>
    </div>
  );
}
