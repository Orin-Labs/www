import React from "react";

import StateTestPrepStrategies from "@blog/pages/academic-assessment/state-test-prep-strategies";
// Import pillar components (placeholders for now)
// Import sub-article components
import UnderstandingRITScores from "@blog/pages/academic-assessment/understanding-rit-scores";
import STEMElectivesGuide from "@blog/pages/advanced-academics";
import DualEnrollmentGuide from "@blog/pages/advanced-academics/dual-enrollment-guide";
import GiftedProgramNavigation from "@blog/pages/advanced-academics/gifted-program-navigation";
import AlgebraReadinessChecklist from "@blog/pages/math-foundations/algebra-readiness-checklist";
import FractionMasteryGuide from "@blog/pages/math-foundations/fraction-mastery-guide";

import MAPStateTestsGuide from "./pages/academic-assessment";
import MathSurvivalGuide from "./pages/math-foundations";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: Date;
  author: string;
  readingTime: number; // in minutes
  slug: string;
  component: React.ComponentType;
  image?: string;
  subArticles?: BlogPost[];
}

// Placeholder pillar posts (to be replaced when content is ready)
export const POSTS: BlogPost[] = [
  {
    id: "academic-assessment-pillar",
    title: "Guide to MAP & State Tests",
    excerpt:
      "The complete guide to understanding, preparing for, and using assessment data to support your middle schooler.",
    date: new Date("2025-06-17"),
    author: "Education Team",
    readingTime: 15,
    slug: "academic-assessment",
    image:
      "https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    component: MAPStateTestsGuide,
    subArticles: [
      {
        id: "understanding-rit-scores",
        title: "Understanding RIT Scores: A Parent's Decoder",
        excerpt:
          "Deep dive into what RIT scores really mean and how to use them to support your student's learning journey.",
        date: new Date("2025-06-20"),
        author: "Education Team",
        readingTime: 8,
        slug: "academic-assessment/understanding-rit-scores",
        component: UnderstandingRITScores,
      },
      {
        id: "state-test-prep-strategies",
        title: "State Test Prep That Actually Works",
        excerpt:
          "Evidence-based strategies for preparing middle schoolers for state assessments without the stress.",
        date: new Date("2025-06-25"),
        author: "Education Team",
        readingTime: 10,
        slug: "academic-assessment/state-test-prep-strategies",
        component: StateTestPrepStrategies,
      },
    ],
  },
  {
    id: "math-foundations-pillar",
    title: "Middle-School Math Playbook",
    excerpt:
      "Everything parents need to support their middle schooler through the challenging transition to advanced mathematics.",
    date: new Date("2025-07-07"),
    author: "Education Team",
    image:
      "https://images.unsplash.com/photo-1706466614730-855420835cdd?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readingTime: 12,
    slug: "math-foundations",
    component: STEMElectivesGuide,
    subArticles: [
      {
        id: "algebra-readiness-checklist",
        title: "Is Your Student Ready for Algebra? The Complete Checklist",
        excerpt:
          "A comprehensive assessment tool to determine if your middle schooler has the foundational skills for algebra success.",
        date: new Date("2025-07-10"),
        author: "Education Team",
        readingTime: 12,
        slug: "math-foundations/algebra-readiness-checklist",
        component: AlgebraReadinessChecklist,
      },
      {
        id: "fraction-mastery-guide",
        title: "Fraction Mastery: From Fear to Fluency",
        excerpt:
          "Transform your student's relationship with fractions using visual strategies and real-world applications.",
        date: new Date("2025-07-15"),
        author: "Education Team",
        readingTime: 9,
        slug: "math-foundations/fraction-mastery-guide",
        component: FractionMasteryGuide,
      },
    ],
  },
  {
    id: "advanced-academics-pillar",
    title: "High School Credit Options in Middle School",
    excerpt:
      "Navigate the complex decisions around academic acceleration and advanced coursework for middle school students.",
    date: new Date("2025-05-29"),
    author: "Education Team",
    readingTime: 18,
    image:
      "https://images.unsplash.com/photo-1741144806007-2a6dd505230a?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "advanced-academics",
    component: MathSurvivalGuide,
    subArticles: [
      {
        id: "dual-enrollment-guide",
        title: "Dual Enrollment in Middle School: Pros, Cons, and Process",
        excerpt:
          "Everything you need to know about dual enrollment opportunities for academically advanced middle schoolers.",
        date: new Date("2025-05-30"),
        author: "Education Team",
        readingTime: 14,
        slug: "advanced-academics/dual-enrollment-guide",
        component: DualEnrollmentGuide,
      },
      {
        id: "gifted-program-navigation",
        title: "Navigating Gifted Education Programs in Middle School",
        excerpt:
          "A comprehensive guide to understanding, accessing, and maximizing gifted education opportunities.",
        date: new Date("2025-06-05"),
        author: "Education Team",
        readingTime: 11,
        slug: "advanced-academics/gifted-program-navigation",
        component: GiftedProgramNavigation,
      },
    ],
  },
];

// Helper function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  // First check direct matches
  const directMatch = POSTS.find((post) => post.slug === slug);
  if (directMatch) return directMatch;

  // Then check sub-articles recursively
  for (const post of POSTS) {
    if (post.subArticles) {
      const subMatch = post.subArticles.find(
        (subPost) => subPost.slug === slug
      );
      if (subMatch) return subMatch;
    }
  }

  return undefined;
};

// Helper function to recursively flatten all blog posts
const flattenBlogPosts = (posts: BlogPost[]): BlogPost[] => {
  const flattened: BlogPost[] = [];

  for (const post of posts) {
    flattened.push(post);
    if (post.subArticles) {
      flattened.push(...flattenBlogPosts(post.subArticles));
    }
  }

  return flattened;
};

export const getReadingTime = (post: BlogPost): number => {
  function helper(post: BlogPost): number {
    if (post.subArticles) {
      return post.subArticles.reduce(
        (acc, subPost) => acc + helper(subPost),
        0
      );
    }
    return post.readingTime;
  }
  return helper(post);
};

// Helper function to get all blog posts sorted by date (newest first)
export const getAllBlogPosts = (): BlogPost[] => {
  const allPosts = flattenBlogPosts(POSTS);

  // Sort by date (newest first)
  return allPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
};
