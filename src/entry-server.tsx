import React from 'react';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';
import { getBlogPostBySlug } from './blog/data';

export interface SSRResult {
  html: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    image?: string;
    url: string;
    type: string;
  };
}

export function render(url: string): SSRResult {
  // Extract the path from the URL
  const path = url.split("?")[0];

  // Generate meta tags based on the route
  const meta = generateMetaForRoute(path);

  // Render the app to string
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return { html, meta };
}

function generateMetaForRoute(path: string): SSRResult["meta"] {
  const baseTitle = "Learn with Orin";
  const baseDescription = "Meet Orin, your private tutor.";
  const baseUrl = "https://learnwithorin.com";

  // Default meta for home page
  if (path === "/") {
    return {
      title: `Orin - Unlimited tutoring for middle school math`,
      description: baseDescription,
      keywords:
        "middle school math, tutoring, education, math help, algebra, pre-algebra",
      image: "/og_image.png",
      url: baseUrl,
      type: "website",
    };
  }

  // Blog routes
  if (path.startsWith("/blog")) {
    if (path === "/blog" || path === "/blog/") {
      return {
        title: `Blog - ${baseTitle}`,
        description:
          "Expert guidance for middle school parents navigating academics, assessments, and STEM education.",
        keywords:
          "middle school, education, parents, academic support, blog, math foundations, assessment guide",
        image: "/blog_og.png",
        url: `${baseUrl}/blog`,
        type: "website",
      };
    }

    // Individual blog post
    const slug = path.replace("/blog/", "");
    const blogPost = getBlogPostBySlug(slug);

    if (blogPost) {
      const description =
        blogPost.excerpt.length > 160
          ? blogPost.excerpt.substring(0, 157) + "..."
          : blogPost.excerpt;

      return {
        title: `${blogPost.name} | ${baseTitle}`,
        description,
        keywords: blogPost.keywords.join(", "),
        image: blogPost.image || "/blog_og.png",
        url: `${baseUrl}/blog/${blogPost.slug}`,
        type: "article",
      };
    }
  }

  // Privacy page
  if (path === "/privacy") {
    return {
      title: `Privacy Policy - ${baseTitle}`,
      description: "Privacy policy for Learn with Orin tutoring services.",
      keywords: "privacy policy, data protection, tutoring services",
      url: `${baseUrl}/privacy`,
      type: "website",
    };
  }

  // 404 or unknown routes
  return {
    title: `Page Not Found - ${baseTitle}`,
    description: baseDescription,
    keywords: "404, page not found",
    url: `${baseUrl}${path}`,
    type: "website",
  };
}
