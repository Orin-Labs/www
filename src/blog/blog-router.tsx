import React from 'react';

import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { getBlogPostBySlug } from './blog-data';
import BlogIndex from './index';

export default function BlogRouter() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<BlogIndex />} />
      <Route path="/:slug" element={<BlogPost />} />
    </Routes>
  );
}

function BlogPost() {
  const location = useLocation();
  const slug = location.pathname.split("/").pop();
  const blogPost = getBlogPostBySlug(slug || "");

  if (blogPost) {
    const PostComponent = blogPost.component;
    return <PostComponent />;
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
