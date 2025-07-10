import { useEffect } from 'react';

import { BlogPost } from '@blog/data';

interface SEOHeadProps {
  post: BlogPost;
  isSubArticle?: boolean;
  parentPillar?: BlogPost;
}

export function SEOHead({
  post,
  isSubArticle = false,
  parentPillar,
}: SEOHeadProps) {
  useEffect(() => {
    const baseTitle = "Learn with Orin";
    const siteName = "Learn with Orin";
    const baseUrl = "https://learnwithorin.com";

    // Generate SEO-optimized title
    const seoTitle =
      isSubArticle && parentPillar
        ? `${post.name} - ${parentPillar.name} | ${baseTitle}`
        : `${post.name} | ${baseTitle}`;

    // Generate description
    const description =
      post.excerpt.length > 160
        ? post.excerpt.substring(0, 157) + "..."
        : post.excerpt;

    // Generate keywords from post data and parent if applicable
    const keywords = generateKeywordsFromData(post, isSubArticle, parentPillar);

    // Current URL
    const currentUrl = `${baseUrl}/blog/${post.slug}`;

    // Update document title
    document.title = seoTitle;

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", post.author);
    updateMetaTag("name", "robots", "index, follow");

    // Open Graph tags
    updateMetaTag("property", "og:title", seoTitle);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:type", "article");
    updateMetaTag("property", "og:url", currentUrl);
    updateMetaTag("property", "og:site_name", siteName);
    if (post.image) {
      updateMetaTag("property", "og:image", post.image);
      updateMetaTag("property", "og:image:alt", `${post.name} - ${siteName}`);
    }

    // Twitter Card tags
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", seoTitle);
    updateMetaTag("name", "twitter:description", description);
    if (post.image) {
      updateMetaTag("name", "twitter:image", post.image);
    }

    // Article-specific tags
    updateMetaTag("property", "article:author", post.author);
    updateMetaTag(
      "property",
      "article:published_time",
      post.date.toISOString()
    );
    updateMetaTag(
      "property",
      "article:section",
      isSubArticle && parentPillar ? parentPillar.name : "Education"
    );
    updateMetaTag("property", "article:tag", post.keywords[0] || "education"); // Use first keyword as primary tag

    // Canonical URL
    updateLinkTag("canonical", currentUrl);

    // Main Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.name,
      description: description,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
      datePublished: post.date.toISOString(),
      dateModified: post.date.toISOString(),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": currentUrl,
      },
      image: post.image ? [post.image] : [],
      articleSection:
        isSubArticle && parentPillar ? parentPillar.name : "Education",
      keywords: keywords,
      wordCount: post.readingTime * 200, // Approximate word count
      timeRequired: `PT${post.readingTime}M`,
      isPartOf: {
        "@type": "Blog",
        name: `${siteName} Blog`,
        url: `${baseUrl}/blog`,
      },
    };

    // Organization Schema (for publisher)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
      sameAs: [
        // Add your social media profiles here
        // "https://twitter.com/learnwithorin",
        // "https://facebook.com/learnwithorin"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    };

    // HowTo Schema for guide articles
    if (
      post.slug.includes("guide") ||
      post.slug.includes("checklist") ||
      post.slug.includes("strategies")
    ) {
      const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.name,
        description: description,
        image: post.image ? [post.image] : [],
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: "0",
        },
        supply: [],
        tool: [],
        totalTime: `PT${post.readingTime}M`,
        step: generateHowToSteps(post),
      };

      updateStructuredData("howto-structured-data", howToSchema);
    }

    // Note: FAQ Schema is now handled by the BlogFAQ component itself
    // This ensures we use the actual FAQ content rather than generic placeholders

    // Educational Organization Schema for academic content
    if (
      post.slug.includes("academic") ||
      post.slug.includes("assessment") ||
      post.slug.includes("math")
    ) {
      const educationalOrgSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: siteName,
        url: baseUrl,
        description: "Personalized middle school academic support and tutoring",
        areaServed: "United States",
        educationalCredentialAwarded: "Academic Support Certification",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Academic Support Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Math Tutoring",
                description:
                  "Personalized math support for middle school students",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Academic Assessment Analysis",
                description: "MAP testing and academic assessment guidance",
              },
            },
          ],
        },
      };

      updateStructuredData(
        "educational-org-structured-data",
        educationalOrgSchema
      );
    }

    // Add breadcrumb structured data if it's a sub-article
    if (isSubArticle && parentPillar) {
      const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            item: `${baseUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: parentPillar.name,
            item: `${baseUrl}/blog/${parentPillar.slug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.name,
            item: currentUrl,
          },
        ],
      };

      updateStructuredData(
        "breadcrumb-structured-data",
        breadcrumbStructuredData
      );
    }

    // Add all schemas
    updateStructuredData("article-structured-data", articleSchema);
    updateStructuredData("organization-structured-data", organizationSchema);
  }, [post, isSubArticle, parentPillar]);

  return null; // This component doesn't render anything
}

function generateKeywordsFromData(
  post: BlogPost,
  isSubArticle: boolean,
  parentPillar?: BlogPost
): string {
  // Start with base keywords that apply to all posts
  const baseKeywords = [
    "middle school",
    "education",
    "parents",
    "academic support",
  ];

  // Get keywords from the current post
  const postKeywords = post.keywords || [];

  // Add parent pillar keywords if this is a sub-article
  const parentKeywords =
    isSubArticle && parentPillar ? parentPillar.keywords || [] : [];

  // Combine all keywords and remove duplicates
  const allKeywords = [...baseKeywords, ...postKeywords, ...parentKeywords];
  const uniqueKeywords = Array.from(new Set(allKeywords));

  return uniqueKeywords.join(", ");
}

function generateHowToSteps(post: BlogPost) {
  // Generate generic steps based on post type
  const steps = [];

  if (post.slug.includes("rit-scores")) {
    steps.push(
      {
        "@type": "HowToStep",
        name: "Understand RIT Score Basics",
        text: "Learn what RIT scores measure and how they differ from percentiles",
        url: `https://learnwithorin.com/blog/${post.slug}#understanding-rit-scores`,
      },
      {
        "@type": "HowToStep",
        name: "Interpret Your Child's Scores",
        text: "Review your child's RIT score report and identify growth patterns",
        url: `https://learnwithorin.com/blog/${post.slug}#interpreting-scores`,
      },
      {
        "@type": "HowToStep",
        name: "Take Action Based on Results",
        text: "Use RIT score insights to support your child's learning journey",
        url: `https://learnwithorin.com/blog/${post.slug}#taking-action`,
      }
    );
  } else if (post.slug.includes("test-prep")) {
    steps.push(
      {
        "@type": "HowToStep",
        name: "Create a Preparation Schedule",
        text: "Develop a structured approach to test preparation",
        url: `https://learnwithorin.com/blog/${post.slug}#preparation-schedule`,
      },
      {
        "@type": "HowToStep",
        name: "Practice Test-Taking Strategies",
        text: "Build confidence with proven test-taking techniques",
        url: `https://learnwithorin.com/blog/${post.slug}#test-strategies`,
      }
    );
  } else {
    // Generic steps for other guide types
    steps.push(
      {
        "@type": "HowToStep",
        name: "Assess Current Situation",
        text: "Evaluate your child's current academic standing",
        url: `https://learnwithorin.com/blog/${post.slug}#assessment`,
      },
      {
        "@type": "HowToStep",
        name: "Implement Strategies",
        text: "Apply the recommended strategies and techniques",
        url: `https://learnwithorin.com/blog/${post.slug}#implementation`,
      }
    );
  }

  return steps;
}

function updateMetaTag(attribute: string, name: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function updateStructuredData(id: string, data: any) {
  let element = document.querySelector(`script[data-id="${id}"]`);
  if (!element) {
    element = document.createElement("script");
    element.setAttribute("type", "application/ld+json");
    element.setAttribute("data-id", id);
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}
