import React from 'react';

import MAPStateTestsGuide from './MAPStateTestsGuide';
// Import blog post components
import MathSurvivalGuide from './MathSurvivalGuide';
import STEMElectivesGuide from './STEMElectivesGuide';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: Date;
  author: string;
  readingTime: string;
  slug: string;
  component: React.ComponentType;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "stem-electives-guide",
    title: "STEM Electives & High School Credit Options in Middle School",
    excerpt:
      "Navigate the complex decision of taking high school credits in middle school. Learn when to accelerate, when to wait, and how to build a strong STEM foundation that opens doors to advanced opportunities.",
    date: new Date("2025-05-29"),
    author: "Education Team",
    readingTime: "18 min read",
    slug: "stem-electives-guide",
    component: STEMElectivesGuide,
  },
  {
    id: "map-state-tests-guide",
    title: "The Complete MAP & State Tests Guide for Grades 6-8",
    excerpt:
      "Master MAP scores, RIT numbers, and state test predictions with this comprehensive guide. Learn what the numbers mean, how to support growth, and turn testing anxiety into confident preparation.",
    date: new Date("2025-06-17"),
    author: "Education Team",
    readingTime: "15 min read",
    slug: "map-state-tests-guide",
    component: MAPStateTestsGuide,
  },
  {
    id: "math-survival-guide",
    title: "Middle School Math Survival Guide for Parents",
    excerpt:
      "A comprehensive guide to help parents support their middle schoolers through the challenging transition from elementary to middle school math, including practical strategies, tools, and resources.",
    date: new Date("2025-07-07"),
    author: "Education Team",
    readingTime: "12 min read",
    slug: "math-survival-guide",
    component: MathSurvivalGuide,
  },
];

// Helper function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find((post) => post.slug === slug);
};

// Helper function to get all blog posts sorted by date (newest first)
export const getAllBlogPosts = (): BlogPost[] => {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
