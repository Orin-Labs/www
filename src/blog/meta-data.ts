// Simplified blog metadata for server-side meta tag generation
// This file contains only the essential metadata without React components

export interface BlogMeta {
  name: string;
  shortName: string;
  excerpt: string;
  keywords: string[];
  image?: string;
  id: string;
  date: Date;
  author: string;
  readingTime: number;
  slug: string;
  subArticles?: BlogMeta[];
  underConstruction?: boolean;
}

export const BLOG_META: BlogMeta[] = [
  {
    id: "academic-assessment-pillar",
    shortName: "MAP & State Tests",
    name: "All About MAP & State Tests in Grades 6-8",
    excerpt:
      "The complete guide to understanding, preparing for, and using assessment data to support your middle schooler.",
    date: new Date("2025-06-17"),
    author: "Education Team",
    readingTime: 15,
    slug: "map-testing-state-assessments-complete-guide",
    keywords: [
      "MAP testing",
      "state assessments",
      "academic assessment",
      "middle school testing",
      "RIT scores",
      "educational assessment",
      "test preparation",
      "academic progress",
      "student evaluation",
      "assessment data",
    ],
    image: "/blog/milad-fakurian-PGdW_bHDbpI-unsplash.jpg",
    subArticles: [
      {
        id: "map-score-ranges-explained",
        shortName: "Score Ranges",
        name: "MAP Score Ranges Explained (RIT 200-250)",
        excerpt:
          "Decode the numbers: Complete guide to MAP score ranges and what they mean for your middle schooler's academic growth.",
        date: new Date("2025-06-18"),
        author: "Education Team",
        readingTime: 8,
        slug: "map-score-ranges-explained",
        keywords: [
          "map test scores chart",
          "RIT scores",
          "MAP score ranges",
          "academic benchmarks",
          "score interpretation",
          "educational measurement",
          "academic achievement",
          "progress tracking",
          "learning assessment",
          "NWEA scores",
        ],
        image: "/blog/pawel-czerwinski-prMn9KINLtI-unsplash.jpg",
      },
      {
        id: "growth-vs-proficiency",
        shortName: "Growth vs Proficiency",
        name: "Growth vs Proficiency—Which Matters?",
        excerpt:
          "Understand percentile vs gain: Which matters more for your student's academic progress and how to use both metrics effectively.",
        date: new Date("2025-06-19"),
        author: "Education Team",
        readingTime: 7,
        slug: "growth-vs-proficiency",
        keywords: [
          "map test growth norms",
          "growth percentiles",
          "achievement percentiles",
          "academic growth",
          "progress measurement",
          "educational assessment",
          "student development",
          "learning metrics",
          "academic progress",
          "assessment data",
        ],
        image: "/blog/pawel-czerwinski-Tyg0rVhOTrE-unsplash.jpg",
      },
      {
        id: "understanding-rit-scores",
        shortName: "RIT Scores",
        name: "Understanding RIT Scores: A Complete Guide for Parents",
        excerpt:
          "Deep dive into what RIT scores really mean and how to use them to support your student's learning journey.",
        date: new Date("2025-06-20"),
        author: "Education Team",
        image: "/blog/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg",
        readingTime: 8,
        slug: "understanding-rit-scores-guide",
        keywords: [
          "RIT scores",
          "MAP testing",
          "academic growth",
          "progress tracking",
          "student assessment",
          "educational measurement",
          "academic achievement",
          "score interpretation",
          "learning progress",
          "NWEA assessment",
        ],
      },
      {
        id: "seventh-grade-map-practice-pdf",
        shortName: "7th Grade Practice",
        name: "Free 7th-Grade MAP Practice PDF",
        excerpt:
          "Free downloadable MAP practice test for 7th graders with printable worksheets to build confidence and test familiarity.",
        date: new Date("2025-06-21"),
        author: "Education Team",
        readingTime: 6,
        slug: "seventh-grade-map-practice-pdf",
        underConstruction: true,
        keywords: [
          "map practice test 7th grade",
          "MAP test prep",
          "practice worksheets",
          "test preparation",
          "printable practice",
          "assessment preparation",
          "test familiarity",
          "study materials",
          "practice tests",
          "academic preparation",
        ],
        image: "/blog/susan-wilkinson-9UlalA_5VYQ-unsplash.jpg",
      },
      {
        id: "nwea-to-state-test-converter",
        shortName: "Score Converter",
        name: "NWEA to State-Test Score Converter",
        excerpt:
          "Interactive tool to convert MAP RIT scores to state test predictions including STAAR, PARCC, and other assessments.",
        date: new Date("2025-06-22"),
        author: "Education Team",
        readingTime: 5,
        slug: "nwea-to-state-test-converter",
        keywords: [
          "map to staar conversion",
          "NWEA converter",
          "state test prediction",
          "score conversion",
          "assessment correlation",
          "test score conversion",
          "educational measurement",
          "academic assessment",
          "score interpretation",
          "test comparison",
        ],
        image: "/blog/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg",
      },
      {
        id: "test-day-nutrition-sleep-checklist",
        shortName: "Test Day Prep",
        name: "Test-Day Nutrition & Sleep Checklist",
        excerpt:
          "Evidence-based nutrition and sleep strategies to optimize your student's test performance with downloadable checklists.",
        date: new Date("2025-06-23"),
        author: "Education Team",
        readingTime: 6,
        slug: "test-day-nutrition-sleep-checklist",
        keywords: [
          "best breakfast before test",
          "test day nutrition",
          "sleep before testing",
          "test preparation",
          "cognitive performance",
          "test anxiety",
          "test day strategies",
          "academic performance",
          "student wellness",
          "test success",
        ],
        image: "/blog/ben-abo-nsvmLnUJOTA-unsplash.jpg",
      },
      {
        id: "discussing-test-results-without-stress",
        shortName: "Discussing Results",
        name: "How to Discuss Results Without Stressing Kids",
        excerpt:
          "Emotional guidance for discussing test scores with your middle schooler in ways that build confidence rather than create anxiety.",
        date: new Date("2025-06-24"),
        author: "Education Team",
        readingTime: 8,
        slug: "discussing-test-results-without-stress",
        keywords: [
          "how to talk about test scores",
          "test anxiety",
          "growth mindset",
          "parent communication",
          "test score discussion",
          "educational psychology",
          "student confidence",
          "academic support",
          "emotional guidance",
          "parent strategies",
        ],
        image: "/blog/susan-wilkinson-Ccf9Pdfo-LA-unsplash.jpg",
      },
      {
        id: "state-test-prep-strategies",
        shortName: "Test Prep",
        name: "State Test Preparation Strategies for Middle School Success",
        excerpt:
          "Evidence-based strategies for preparing middle schoolers for state assessments without the stress.",
        date: new Date("2025-06-25"),
        author: "Education Team",
        readingTime: 10,
        keywords: [
          "state testing",
          "test preparation",
          "assessment strategies",
          "test anxiety",
          "test taking skills",
          "academic confidence",
          "study strategies",
          "test performance",
          "preparation techniques",
          "assessment readiness",
        ],
        image: "/blog/susan-wilkinson-F8tGmG1T2rg-unsplash.jpg",
        slug: "state-test-prep-strategies",
      },
    ],
  },
  {
    id: "math-foundations-pillar",
    shortName: "Math Foundations",
    name: "Middle School Math Foundations: Complete Parent Guide",
    excerpt:
      "Everything parents need to support their middle schooler through the challenging transition to advanced mathematics.",
    date: new Date("2025-07-07"),
    author: "Education Team",
    keywords: [
      "math foundations",
      "middle school math",
      "mathematical concepts",
      "algebra preparation",
      "math skills",
      "mathematical thinking",
      "math support",
      "academic math",
      "math learning",
      "mathematical development",
    ],
    image: "/blog/allison-saeng-mAM2jcU8dvw-unsplash.jpg",
    readingTime: 12,
    slug: "middle-school-math-foundations-guide",
    subArticles: [
      {
        id: "algebra-readiness-checklist",
        shortName: "Algebra Ready?",
        name: "Algebra Readiness Checklist for Middle School Students",
        excerpt:
          "A comprehensive assessment tool to determine if your middle schooler has the foundational skills for algebra success.",
        date: new Date("2025-07-10"),
        image: "/blog/jj-ying-7JX0-bfiuxQ-unsplash.jpg",
        author: "Education Team",
        readingTime: 12,
        underConstruction: true,
        keywords: [
          "algebra readiness",
          "pre-algebra",
          "math preparation",
          "algebra success",
          "mathematical readiness",
          "algebra foundations",
          "math assessment",
          "algebra skills",
          "mathematical prerequisites",
          "algebra transition",
        ],
        slug: "algebra-readiness-checklist-middle-school",
      },
      {
        id: "math-anxiety-solutions",
        shortName: "Math Anxiety",
        name: "Math Anxiety Solutions for Middle School Students",
        excerpt:
          "Practical strategies to help your middle schooler overcome math anxiety and build confidence in mathematics.",
        date: new Date("2025-07-18"),
        author: "Education Team",
        readingTime: 8,
        underConstruction: true,
        keywords: [
          "math anxiety",
          "math confidence",
          "math stress",
          "math fear",
          "math support",
          "math mindset",
          "math help",
          "math strategies",
          "math encouragement",
          "math success",
        ],
        image: "/blog/susan-wilkinson-u8ZT4aQUMhs-unsplash.jpg",
        slug: "math-anxiety-solutions",
      },
      {
        id: "top-youtube-channels-eighth-grade-math",
        shortName: "YouTube Channels",
        name: "Top YouTube Channels for 8th Grade Math",
        excerpt:
          "Curated list of the best YouTube channels for 8th grade math with detailed reviews and recommended playlists.",
        date: new Date("2025-07-21"),
        author: "Education Team",
        readingTime: 7,
        underConstruction: true,
        keywords: [
          "YouTube math channels",
          "8th grade math videos",
          "online math help",
          "math video resources",
          "free math tutorials",
          "math education videos",
          "math learning videos",
          "online math support",
          "math video lessons",
          "educational YouTube",
        ],
        image: "/blog/mithushi-arya-lXOX3-yTvyQ-unsplash.jpg",
        slug: "top-youtube-channels-eighth-grade-math",
      },
      {
        id: "weekly-study-planner-template",
        shortName: "Study Planner",
        name: "Weekly Study Planner Template for Math",
        excerpt:
          "Free downloadable weekly study planner template specifically designed for middle school math organization and success.",
        date: new Date("2025-07-22"),
        author: "Education Team",
        readingTime: 4,
        underConstruction: true,
        keywords: [
          "study planner",
          "math organization",
          "study schedule",
          "math planning",
          "study template",
          "math study guide",
          "organization tools",
          "study habits",
          "math homework",
          "academic planning",
        ],
        image: "/blog/susan-wilkinson-jaExxGtbfFA-unsplash.jpg",
        slug: "weekly-study-planner-template",
      },
    ],
  },
  {
    id: "advanced-academics-pillar",
    shortName: "Advanced Academics",
    name: "STEM Electives & High-School Credit Options in Middle School",
    excerpt:
      "A comprehensive guide to advanced coursework, dual enrollment, and STEM opportunities for middle school students.",
    date: new Date("2025-05-29"),
    author: "Education Team",
    readingTime: 18,
    keywords: [
      "advanced academics",
      "academic acceleration",
      "gifted education",
      "advanced coursework",
      "academic excellence",
      "high-achieving students",
      "educational advancement",
      "academic opportunities",
      "advanced learning",
      "academic enrichment",
    ],
    image: "/blog/john-sin-Q5rtHn9I4oA-unsplash.jpg",
    slug: "advanced-academics-middle-school-guide",
    subArticles: [
      {
        id: "dual-enrollment-guide",
        shortName: "Dual Enrollment",
        name: "Dual Enrollment Guide for Middle School Students",
        excerpt:
          "A comprehensive guide to dual enrollment opportunities for middle school students, covering readiness assessment, application processes, and key considerations for families considering college courses for 6th-8th graders.",
        date: new Date("2025-05-30"),
        author: "Education Team",
        readingTime: 14,
        // underConstruction: false (completed)
        keywords: [
          "dual enrollment",
          "college courses",
          "academic acceleration",
          "high school credit",
          "advanced placement",
          "college-level coursework",
          "educational opportunities",
          "academic advancement",
          "early college",
          "concurrent enrollment",
          "middle school acceleration",
          "college readiness",
        ],
        image: "/blog/sebastian-svenson-LpbyDENbQQg-unsplash.jpg",
        slug: "dual-enrollment-guide-middle-school",
      },
      {
        id: "gifted-program-navigation",
        shortName: "Gifted Programs",
        name: "Gifted Program Navigation Guide for Parents",
        excerpt:
          "A comprehensive guide to understanding, accessing, and maximizing gifted education opportunities.",
        date: new Date("2025-06-05"),
        author: "Education Team",
        readingTime: 11,
        underConstruction: true,
        keywords: [
          "gifted programs",
          "talented and gifted",
          "gifted education",
          "advanced learners",
          "gifted services",
          "educational excellence",
          "gifted identification",
          "advanced learning",
          "gifted advocacy",
          "intellectual giftedness",
        ],
        image: "/blog/laura-vinck-Hyu76loQLdk-unsplash.jpg",
        slug: "gifted-program-navigation",
      },
      {
        id: "algebra-vs-math-8-flowchart",
        shortName: "Algebra vs Math 8",
        name: "Algebra vs Math 8: Decision Flowchart",
        excerpt:
          "Interactive flowchart to help parents decide between Algebra 1 and Math 8 for their middle schooler's optimal math pathway.",
        date: new Date("2025-06-06"),
        author: "Education Team",
        readingTime: 6,
        underConstruction: true,
        keywords: [
          "algebra vs math 8",
          "math pathway",
          "algebra readiness",
          "math acceleration",
          "middle school math",
          "academic planning",
          "course selection",
          "math progression",
          "algebra placement",
          "math curriculum",
        ],
        image: "/blog/yassine-ait-tahit-NDtucHeDnWc-unsplash.jpg",
        slug: "algebra-vs-math-8-flowchart",
      },
      {
        id: "gpa-starts-eighth-grade",
        shortName: "GPA in 8th Grade",
        name: "GPA Starts in 8th Grade: What Parents Need to Know",
        excerpt:
          "Essential guide to understanding how 8th grade GPA impacts high school placement and college preparation.",
        date: new Date("2025-06-07"),
        author: "Education Team",
        readingTime: 7,
        underConstruction: true,
        keywords: [
          "8th grade GPA",
          "high school GPA",
          "academic transcript",
          "college preparation",
          "grade point average",
          "high school placement",
          "academic planning",
          "transcript management",
          "college admissions",
          "academic records",
        ],
        image: "/blog/omid-armin-b50MRxwg_gk-unsplash.jpg",
        slug: "gpa-starts-eighth-grade",
      },
      {
        id: "online-foreign-language-credits",
        shortName: "Online Languages",
        name: "Online Foreign Language Credits for Middle School",
        excerpt:
          "Complete guide to earning high school foreign language credits online during middle school years.",
        date: new Date("2025-06-08"),
        author: "Education Team",
        readingTime: 8,
        underConstruction: true,
        keywords: [
          "online foreign language",
          "language credits",
          "high school credit",
          "language learning",
          "online courses",
          "foreign language requirement",
          "language education",
          "virtual language classes",
          "language programs",
          "credit acceleration",
        ],
        image: "/blog/susan-wilkinson-F8tGmG1T2rg-unsplash.jpg",
        slug: "online-foreign-language-credits",
      },
      {
        id: "pltw-vs-first-robotics",
        shortName: "PLTW vs FIRST",
        name: "PLTW vs FIRST Robotics: Which STEM Path?",
        excerpt:
          "Detailed comparison of Project Lead The Way and FIRST Robotics programs to help choose the best STEM pathway.",
        date: new Date("2025-06-09"),
        author: "Education Team",
        readingTime: 9,
        underConstruction: true,
        keywords: [
          "PLTW vs FIRST robotics",
          "STEM programs",
          "robotics programs",
          "engineering education",
          "STEM pathway",
          "robotics competition",
          "engineering curriculum",
          "STEM electives",
          "robotics teams",
          "engineering skills",
        ],
        image: "/blog/milad-fakurian-PGdW_bHDbpI-unsplash.jpg",
        slug: "pltw-vs-first-robotics",
      },
      {
        id: "stem-portfolio-github-slides",
        shortName: "STEM Portfolio",
        name: "STEM Portfolio: GitHub + Google Slides Guide",
        excerpt:
          "Step-by-step guide to creating a professional STEM portfolio using GitHub and Google Slides for middle school students.",
        date: new Date("2025-06-10"),
        author: "Education Team",
        readingTime: 10,
        underConstruction: true,
        keywords: [
          "STEM portfolio",
          "GitHub portfolio",
          "Google Slides",
          "student portfolio",
          "STEM projects",
          "digital portfolio",
          "coding projects",
          "project showcase",
          "academic portfolio",
          "STEM documentation",
        ],
        image: "/blog/john-sin-Q5rtHn9I4oA-unsplash.jpg",
        slug: "stem-portfolio-github-slides",
      },
      {
        id: "summer-programs-high-school-credit",
        shortName: "Summer Programs",
        name: "Summer Programs for High School Credit",
        excerpt:
          "Comprehensive guide to summer programs that offer high school credit opportunities for middle school students.",
        date: new Date("2025-06-11"),
        author: "Education Team",
        readingTime: 11,
        underConstruction: true,
        keywords: [
          "summer programs",
          "high school credit",
          "summer courses",
          "academic acceleration",
          "summer learning",
          "credit recovery",
          "summer school",
          "enrichment programs",
          "summer academics",
          "educational programs",
        ],
        image: "/blog/laura-vinck-Hyu76loQLdk-unsplash.jpg",
        slug: "summer-programs-high-school-credit",
      },
    ],
  },
];

export function getFullSlug(slug: string): string {
  // Check if this is a top-level pillar article
  for (const pillar of BLOG_META) {
    if (pillar.slug === slug) {
      return slug;
    }
  }

  // Recursively search for sub-articles
  for (const pillar of BLOG_META) {
    if (pillar.subArticles) {
      for (const subArticle of pillar.subArticles) {
        if (subArticle.slug === slug) {
          // Found as a sub-article, return parent-slug/sub-slug
          return `${pillar.slug}/${slug}`;
        }

        // If sub-article has its own sub-articles, search recursively
        if (subArticle.subArticles) {
          const nestedResult = getFullSlugRecursive(
            slug,
            subArticle.subArticles,
            `${pillar.slug}/${subArticle.slug}`
          );
          if (nestedResult) {
            return nestedResult;
          }
        }
      }
    }
  }

  // If not found in any nested structure, return the original slug
  return slug;
}

// Helper function for recursive search in nested sub-articles
function getFullSlugRecursive(
  targetSlug: string,
  articles: BlogMeta[],
  currentPath: string
): string | null {
  for (const article of articles) {
    if (article.slug === targetSlug) {
      return `${currentPath}/${targetSlug}`;
    }

    if (article.subArticles) {
      const nestedResult = getFullSlugRecursive(
        targetSlug,
        article.subArticles,
        `${currentPath}/${article.slug}`
      );
      if (nestedResult) {
        return nestedResult;
      }
    }
  }

  return null;
}
