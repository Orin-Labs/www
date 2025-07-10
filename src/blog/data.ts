import React from 'react';

import { flattenItems } from '@/utils/nest';

import {
  BLOG_META,
  BlogMeta,
  getFullSlug,
} from './meta-data';
import {
  AlgebraReadinessChecklist,
  AlgebraVsMath8Flowchart,
  DiscussingTestResultsWithoutStress,
  DualEnrollmentGuide,
  GiftedProgramNavigation,
  GPAStartsEighthGrade,
  GrowthVsProficiency,
  MAPScoreRangesExplained,
  MAPStateTestsCompleteGuide,
  MathAnxietySolutions,
  MathSurvivalGuide,
  NWEAToStateTestConverter,
  OnlineForeignLanguageCredits,
  PLTWVsFirstRobotics,
  SeventhGradeMAPPracticePDF,
  StateTestPrepStrategies,
  STEMElectivesGuide,
  STEMPortfolioGitHubSlides,
  SummerProgramsHighSchoolCredit,
  TestDayNutritionSleepChecklist,
  TopYouTubeChannelsEighthGradeMath,
  UnderstandingRITScores,
  WeeklyStudyPlannerTemplate,
} from './pages/index';

export interface BlogPost extends BlogMeta {
  component: React.ComponentType;
}

export type RenderMap = { [key: string]: React.ComponentType | RenderMap };

export const RENDER_MAP: RenderMap = {
  // Academic Assessment Pillar
  "map-testing-state-assessments-complete-guide": {
    index: MAPStateTestsCompleteGuide,
    "map-score-ranges-explained": MAPScoreRangesExplained,
    "growth-vs-proficiency": GrowthVsProficiency,
    "understanding-rit-scores-guide": UnderstandingRITScores,
    "seventh-grade-map-practice-pdf": SeventhGradeMAPPracticePDF,
    "nwea-to-state-test-converter": NWEAToStateTestConverter,
    "test-day-nutrition-sleep-checklist": TestDayNutritionSleepChecklist,
    "discussing-test-results-without-stress":
      DiscussingTestResultsWithoutStress,
    "state-test-prep-strategies": StateTestPrepStrategies,
  },

  // Math Foundations Pillar
  "middle-school-math-foundations-guide": {
    index: MathSurvivalGuide,
    "algebra-readiness-checklist-middle-school": AlgebraReadinessChecklist,
    "math-anxiety-solutions": MathAnxietySolutions,
    "top-youtube-channels-eighth-grade-math": TopYouTubeChannelsEighthGradeMath,
    "weekly-study-planner-template": WeeklyStudyPlannerTemplate,
  },

  // STEM Electives / Advanced Academics Pillar
  "advanced-academics-middle-school-guide": {
    index: STEMElectivesGuide,
    "dual-enrollment-guide-middle-school": DualEnrollmentGuide,
    "gifted-program-navigation": GiftedProgramNavigation,
    "algebra-vs-math-8-flowchart": AlgebraVsMath8Flowchart,
    "gpa-starts-eighth-grade": GPAStartsEighthGrade,
    "online-foreign-language-credits": OnlineForeignLanguageCredits,
    "pltw-vs-first-robotics": PLTWVsFirstRobotics,
    "stem-portfolio-github-slides": STEMPortfolioGitHubSlides,
    "summer-programs-high-school-credit": SummerProgramsHighSchoolCredit,
  },
};

export const getRenderMap = (
  slug: string,
  map: RenderMap | React.ComponentType = RENDER_MAP
): React.ComponentType | undefined => {
  if (typeof map !== "object") {
    return map as React.ComponentType;
  }
  const parts = slug.split("/");
  if (parts.length === 0 || !parts[0]) {
    // If slug is empty, return undefined
    return undefined;
  }
  const [first, ...rest] = parts;
  const next = (map as RenderMap)[first === "" ? "index" : first];
  if (next === undefined) {
    return undefined;
  }
  if (rest.length === 0) {
    // If no more parts, return the found component or nested map
    if (typeof next === "function") {
      return next as React.ComponentType;
    }
    // If next is a nested map, return its "index" if available
    if (typeof next === "object" && next !== null && "index" in next) {
      return (next as RenderMap)["index"] as React.ComponentType;
    }
    return undefined;
  }
  // Recurse for the rest of the slug
  return getRenderMap(rest.join("/"), next);
};

export const getRelatedPosts = (post: BlogMeta): BlogMeta[] => {
  // Get all posts flattened
  const allPosts = flattenItems(BLOG_META);

  // Remove the current post from consideration
  const candidatePosts = allPosts.filter(
    (p) => p.id !== post.id && !p.underConstruction
  );

  // Find the parent pillar post of the current post (if it's a subarticle)
  let parentPillar: BlogMeta | undefined;
  let siblings: BlogMeta[] = [];

  for (const pillarPost of BLOG_META) {
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
    else if (BLOG_META.some((pillar) => pillar.id === candidatePost.id)) {
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

// Make sure that every slug from metadata is in the render map
const allSlugs = flattenItems(BLOG_META).map((post) => getFullSlug(post.slug));

// Recursively extract all slug paths from the render map
const extractRenderMapSlugs = (
  map: RenderMap | React.ComponentType,
  basePath: string = ""
): string[] => {
  if (typeof map === "function") {
    return [basePath];
  }

  const slugs: string[] = [];

  for (const [key, value] of Object.entries(map as RenderMap)) {
    const currentPath = basePath ? `${basePath}/${key}` : key;

    if (key === "index") {
      // For index, use the basePath without the "/index" suffix
      slugs.push(basePath);
    } else if (typeof value === "function") {
      // For components, add the full path
      slugs.push(currentPath);
    } else {
      // For nested objects, recurse
      slugs.push(...extractRenderMapSlugs(value, currentPath));
    }
  }

  return slugs;
};

const allRenderMapSlugs = extractRenderMapSlugs(RENDER_MAP);
const missingSlugs = allSlugs.filter(
  (slug) => !allRenderMapSlugs.includes(slug)
);

if (missingSlugs.length > 0) {
  console.error("Missing slugs in render map:", missingSlugs);
}
