const fs = require("fs");
const path = require("path");

// Read blog data to dynamically generate blog post routes
const getBlogRoutes = () => {
  try {
    const blogDataPath = path.join(__dirname, "../src/blog/data.ts");
    const blogDataContent = fs.readFileSync(blogDataPath, "utf8");

    // Extract all slugs from the blog data file
    // This regex matches: slug: "some-slug" or slug: "category/some-slug"
    const slugMatches = blogDataContent.match(/slug: ["']([^"']+)["']/g);

    if (slugMatches) {
      const slugs = slugMatches.map(
        (match) => match.match(/slug: ["']([^"']+)["']/)[1]
      );
      return slugs.map((slug) => `/blog/${slug}`);
    }

    return [];
  } catch (error) {
    console.warn("Could not read blog data file, using fallback routes");
    return [
      "/blog/academic-assessment",
      "/blog/academic-assessment/understanding-rit-scores",
      "/blog/academic-assessment/state-test-prep-strategies",
      "/blog/math-foundations",
      "/blog/math-foundations/algebra-readiness-checklist",
      "/blog/math-foundations/fraction-mastery-guide",
      "/blog/advanced-academics",
      "/blog/advanced-academics/dual-enrollment-guide",
      "/blog/advanced-academics/gifted-program-navigation",
    ];
  }
};

// Define your static routes
const staticRoutes = ["/", "/privacy", "/blog"];

// Get all routes (static + dynamic blog routes)
const blogRoutes = getBlogRoutes();
const allRoutes = [...staticRoutes, ...blogRoutes];

// Generate sitemap XML
const generateSitemap = (baseUrl, routes) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
};

// Generate and save sitemap
const baseUrl = "https://learnwithorin.com";
const sitemapContent = generateSitemap(baseUrl, allRoutes);
const outputPath = path.join(__dirname, "../public/sitemap.xml");

fs.writeFileSync(outputPath, sitemapContent);
console.log("Sitemap generated successfully at ./public/sitemap.xml");
console.log(`Generated sitemap with ${allRoutes.length} routes`);
console.log(`Static routes: ${staticRoutes.length}`);
console.log(`Blog routes: ${blogRoutes.length}`);
