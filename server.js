import compression from 'compression';
import express from 'express';
import fs from 'fs';
import path from 'path';
import sirv from 'sirv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

// Import blog data for meta generation
let getBlogPostBySlug;
if (isProduction) {
  // In production, we need to import the built module
  try {
    const blogModule = await import("./dist/server/entry-server.js");
    getBlogPostBySlug = blogModule.getBlogPostBySlug || (() => null);
  } catch (e) {
    console.warn("Could not load blog data for meta generation:", e.message);
    getBlogPostBySlug = () => null;
  }
} else {
  // In development, import directly from source
  try {
    const blogModule = await import("./src/blog/data.ts");
    getBlogPostBySlug = blogModule.getBlogPostBySlug || (() => null);
  } catch (e) {
    console.warn("Could not load blog data for meta generation:", e.message);
    getBlogPostBySlug = () => null;
  }
}

async function createServer() {
  const app = express();

  // Add compression middleware
  app.use(compression());

  if (isProduction) {
    // Production mode - serve static files
    app.use(
      "/",
      sirv(path.resolve(__dirname, "dist/client"), {
        extensions: [],
        gzip: true,
        brotli: true,
      })
    );
  } else {
    // Development mode - serve public files
    app.use(express.static("public"));
  }

  // Handle all routes for meta tag injection
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;

      let template;
      if (!isProduction) {
        // Development: read template from file system
        template = fs.readFileSync(
          path.resolve(__dirname, "index.html"),
          "utf-8"
        );
      } else {
        // Production: use built template
        template = fs.readFileSync(
          path.resolve(__dirname, "dist/client/index.html"),
          "utf-8"
        );
      }

      // Generate meta tags based on route
      const meta = generateMetaForRoute(url);

      // Generate meta tags HTML
      const metaTags = generateMetaTags(meta);

      // Replace meta tags in template (keep the app as client-side)
      const html = template
        .replace("<!--ssr-meta-->", metaTags)
        .replace(
          "<title>Orin - Unlimited tutoring for middle school math</title>",
          `<title>${meta.title}</title>`
        )
        .replace(
          '<meta name="description" content="Meet Orin, your private tutor." />',
          `<meta name="description" content="${meta.description}" />`
        )
        .replace(
          '<meta name="title" content="Orin - Unlimited tutoring for middle school math" />',
          `<meta name="title" content="${meta.title}" />`
        )
        .replace(
          '<meta property="og:title" content="Orin - Unlimited tutoring for middle school math" />',
          `<meta property="og:title" content="${meta.title}" />`
        )
        .replace(
          '<meta property="og:description" content="Meet Orin, your private tutor." />',
          `<meta property="og:description" content="${meta.description}" />`
        )
        .replace(
          '<meta property="twitter:title" content="Orin - Unlimited tutoring for middle school math" />',
          `<meta property="twitter:title" content="${meta.title}" />`
        )
        .replace(
          '<meta property="twitter:description" content="Meet Orin, your private tutor." />',
          `<meta property="twitter:description" content="${meta.description}" />`
        );

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      console.error("Meta injection error:", e);
      // Fallback to serving the file as-is
      next();
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

function generateMetaForRoute(path) {
  const baseTitle = "Learn with Orin";
  const baseDescription = "Meet Orin, your private tutor.";
  const baseUrl = "https://learnwithorin.com";

  // Extract the path from the URL
  const cleanPath = path.split("?")[0];

  // Default meta for home page
  if (cleanPath === "/") {
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
  if (cleanPath.startsWith("/blog")) {
    if (cleanPath === "/blog" || cleanPath === "/blog/") {
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
    const slug = cleanPath.replace("/blog/", "");
    const blogPost = getBlogPostBySlug ? getBlogPostBySlug(slug) : null;

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
  if (cleanPath === "/privacy") {
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
    url: `${baseUrl}${cleanPath}`,
    type: "website",
  };
}

function generateMetaTags(meta) {
  const tags = [
    `<meta name="keywords" content="${meta.keywords}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:url" content="${meta.url}" />`,
    `<meta property="twitter:card" content="summary_large_image" />`,
    `<meta property="twitter:url" content="${meta.url}" />`,
    `<link rel="canonical" href="${meta.url}" />`,
  ];

  if (meta.image) {
    tags.push(`<meta property="og:image" content="${meta.image}" />`);
    tags.push(`<meta property="twitter:image" content="${meta.image}" />`);
  }

  return tags.join("\n    ");
}

createServer().catch(console.error);
