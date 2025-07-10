import React, { useEffect } from 'react';

import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { getBySlug } from '@/utils';
import BlogIndex from '@blog/index';
import { BLOG_META } from '@blog/meta-data';

import { getRenderMap } from './data';

export function ScrollToTop({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return children;
}

export default function BlogRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ScrollToTop>
            <BlogIndex />
          </ScrollToTop>
        }
      />
      <Route
        path="/*"
        element={
          <ScrollToTop>
            <BlogPost />
          </ScrollToTop>
        }
      />
    </Routes>
  );
}

function BlogPost() {
  const location = useLocation();
  // Remove '/blog/' from the path to get the slug
  const slug = location.pathname.replace("/blog/", "");
  const blogPost = getBySlug(slug, BLOG_META);
  console.log(blogPost);

  if (blogPost) {
    const Component = getRenderMap(blogPost.slug);
    if (Component) {
      return <Component />;
    } else {
      return null;
    }
  }

  // If no blog post found, show 404 or redirect to blog index
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-6">Blog post not found</p>
        <a
          href="/blog"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </a>
      </div>
    </div>
  );
}
