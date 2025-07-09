import React from 'react';

import {
  AlgebraReadinessChecklist,
  DualEnrollmentGuide,
  FractionMasteryGuide,
  GiftedProgramNavigation,
  MAPStateTestsCompleteGuide,
  MathSurvivalGuide,
  StateTestPrepStrategies,
  STEMElectivesGuide,
  UnderstandingRITScores,
} from './pages';

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
    title: "Guide to MAP and State Tests",
    excerpt:
      "The complete guide to understanding, preparing for, and using assessment data to support your middle schooler.",
    date: new Date("2025-06-17"),
    author: "Education Team",
    readingTime: 15,
    slug: "academic-assessment",
    image:
      "https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    component: MAPStateTestsCompleteGuide,
    subArticles: [
      {
        id: "understanding-rit-scores",
        title: "Decode RIT Scores",
        excerpt:
          "Deep dive into what RIT scores really mean and how to use them to support your student's learning journey.",
        date: new Date("2025-06-20"),
        author: "Education Team",
        image:
          "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGFic3RyYWN0fGVufDB8fDB8fHww",
        readingTime: 8,
        slug: "academic-assessment/understanding-rit-scores",
        component: UnderstandingRITScores,
      },
      {
        id: "state-test-prep-strategies",
        title: "State Test Prep",
        excerpt:
          "Evidence-based strategies for preparing middle schoolers for state assessments without the stress.",
        date: new Date("2025-06-25"),
        author: "Education Team",
        readingTime: 10,
        image:
          "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "academic-assessment/state-test-prep-strategies",
        component: StateTestPrepStrategies,
      },
    ],
  },
  {
    id: "math-foundations-pillar",
    title: "Math Playbook",
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
        title: "Algebra Readiness",
        excerpt:
          "A comprehensive assessment tool to determine if your middle schooler has the foundational skills for algebra success.",
        date: new Date("2025-07-10"),
        image:
          "https://images.unsplash.com/photo-1561212044-bac5ef688a07?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Education Team",
        readingTime: 12,
        slug: "math-foundations/algebra-readiness-checklist",
        component: AlgebraReadinessChecklist,
      },
      {
        id: "fraction-mastery-guide",
        title: "Fraction Mastery",
        excerpt:
          "Transform your student's relationship with fractions using visual strategies and real-world applications.",
        date: new Date("2025-07-15"),
        author: "Education Team",
        image:
          "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        readingTime: 9,
        slug: "math-foundations/fraction-mastery-guide",
        component: FractionMasteryGuide,
      },
    ],
  },
  {
    id: "advanced-academics-pillar",
    title: "Advanced Academics",
    excerpt:
      "A concise guide to academic acceleration and advanced coursework in middle school.",
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
        title: "Dual Enrollment",
        excerpt:
          "Everything you need to know about dual enrollment opportunities for academically advanced middle schoolers.",
        date: new Date("2025-05-30"),
        author: "Education Team",
        readingTime: 14,
        image:
          "https://images.unsplash.com/photo-1549241520-425e3dfc01cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGFic3RyYWN0fGVufDB8fDB8fHww",
        slug: "advanced-academics/dual-enrollment-guide",
        component: DualEnrollmentGuide,
      },
      {
        id: "gifted-program-navigation",
        title: "Gifted Programs",
        excerpt:
          "A comprehensive guide to understanding, accessing, and maximizing gifted education opportunities.",
        date: new Date("2025-06-05"),
        author: "Education Team",
        readingTime: 11,
        image:
          "https://plus.unsplash.com/premium_photo-1669042646106-827cf2484ea9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFic3RyYWN0fGVufDB8fDB8fHww",
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

export const getRelatedPosts = (post: BlogPost): BlogPost[] => {
  // Get all posts flattened
  const allPosts = flattenBlogPosts(POSTS);

  // Remove the current post from consideration
  const candidatePosts = allPosts.filter((p) => p.id !== post.id);

  // Find the parent pillar post of the current post (if it's a subarticle)
  let parentPillar: BlogPost | undefined;
  let siblings: BlogPost[] = [];

  for (const pillarPost of POSTS) {
    if (pillarPost.subArticles) {
      const foundSubArticle = pillarPost.subArticles.find(
        (sub) => sub.id === post.id
      );
      if (foundSubArticle) {
        parentPillar = pillarPost;
        siblings = pillarPost.subArticles.filter((sub) => sub.id !== post.id);
        break;
      }
    }
  }

  // If current post is a pillar post, its subarticles are the siblings
  if (post.subArticles && post.subArticles.length > 0) {
    siblings = post.subArticles;
  }

  // Create scored posts with proximity ranking
  const scoredPosts = candidatePosts.map((candidatePost) => {
    let score = 0;

    // Score 1: Siblings (highest priority)
    if (siblings.some((sibling) => sibling.id === candidatePost.id)) {
      score = 1000;
    }
    // Score 2: Parent pillar post (if current post is a subarticle)
    else if (parentPillar && candidatePost.id === parentPillar.id) {
      score = 500;
    }
    // Score 3: Subarticles of current post (if current post is a pillar)
    else if (
      post.subArticles &&
      post.subArticles.some((sub) => sub.id === candidatePost.id)
    ) {
      score = 1000; // Same as siblings
    }
    // Score 4: Other pillar posts
    else if (POSTS.some((pillar) => pillar.id === candidatePost.id)) {
      score = 100;
    }
    // Score 5: Subarticles of other pillar posts (lowest priority)
    else {
      score = 10;
    }

    return {
      post: candidatePost,
      score,
    };
  });

  // Sort by score (highest first) and return the posts
  return scoredPosts.sort((a, b) => b.score - a.score).map((item) => item.post);
};
