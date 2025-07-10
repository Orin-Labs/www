import React from 'react';

import { flattenItems } from '@/utils/nest';

import {
  BLOG_META,
  BlogMeta,
} from './meta-data';
import {
  AlgebraReadinessChecklist,
  AlgebraVsMath8Flowchart,
  DualEnrollmentGuide,
  FractionMasteryGuide,
  FractionsWithPizzaSlicesVideo,
  GiftedProgramNavigation,
  GPAStartsEighthGrade,
  GrowthVsProficiency,
  IntegerRulesCheatSheet,
  MAPScoreRangesExplained,
  MAPStateTestsCompleteGuide,
  MathAnxietySolutions,
  OnlineForeignLanguageCredits,
  OrderOfOperationsGames,
  PLTWVsFirstRobotics,
  PreAlgebraVocabularyFlashcards,
  SeventhGradeMAPPracticePDF,
  STEMPortfolioGitHubSlides,
  SummerProgramsHighSchoolCredit,
  TopYouTubeChannelsEighthGradeMath,
  UnderstandingRITScores,
  WeeklyStudyPlannerTemplate,
} from './pages/index';

export interface BlogPost extends BlogMeta {
  component: React.ComponentType;
}

export const RENDER_MAP: Record<string, React.ComponentType> = {
  "map-testing-state-assessments-complete-guide": MAPStateTestsCompleteGuide,
  "map-testing-state-assessments-complete-guide/map-score-ranges-explained":
    MAPScoreRangesExplained,
  "map-testing-state-assessments-complete-guide/growth-vs-proficiency":
    GrowthVsProficiency,
  "map-testing-state-assessments-complete-guide/understanding-rit-scores-guide":
    UnderstandingRITScores,
  "map-testing-state-assessments-complete-guide/seventh-grade-map-practice-pdf":
    SeventhGradeMAPPracticePDF,
  "middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school":
    AlgebraReadinessChecklist,
  "middle-school-math-foundations-guide/fraction-mastery-guide-middle-school":
    FractionMasteryGuide,
  "middle-school-math-foundations-guide/fractions-with-pizza-slices-video":
    FractionsWithPizzaSlicesVideo,
  "middle-school-math-foundations-guide/integer-rules-cheat-sheet":
    IntegerRulesCheatSheet,
  "middle-school-math-foundations-guide/math-anxiety-solutions":
    MathAnxietySolutions,
  "middle-school-math-foundations-guide/order-of-operations-games":
    OrderOfOperationsGames,
  "middle-school-math-foundations-guide/pre-algebra-vocabulary-flashcards":
    PreAlgebraVocabularyFlashcards,
  "middle-school-math-foundations-guide/top-youtube-channels-eighth-grade-math":
    TopYouTubeChannelsEighthGradeMath,
  "middle-school-math-foundations-guide/weekly-study-planner-template":
    WeeklyStudyPlannerTemplate,
  "advanced-academics-middle-school-guide/dual-enrollment-guide-middle-school":
    DualEnrollmentGuide,
  "advanced-academics-middle-school-guide/gifted-program-navigation-guide":
    GiftedProgramNavigation,
  "stem-electives-high-school-credit-middle-school/algebra-vs-math-8-flowchart":
    AlgebraVsMath8Flowchart,
  "stem-electives-high-school-credit-middle-school/gpa-starts-eighth-grade":
    GPAStartsEighthGrade,
  "stem-electives-high-school-credit-middle-school/online-foreign-language-credits":
    OnlineForeignLanguageCredits,
  "stem-electives-high-school-credit-middle-school/pltw-vs-first-robotics":
    PLTWVsFirstRobotics,
  "stem-electives-high-school-credit-middle-school/stem-portfolio-github-slides":
    STEMPortfolioGitHubSlides,
  "stem-electives-high-school-credit-middle-school/summer-programs-high-school-credit":
    SummerProgramsHighSchoolCredit,
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
