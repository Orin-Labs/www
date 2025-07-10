import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog metadata directly
const getBlogRoutes = async () => {
  const { BLOG_META } = await import("../src/blog/meta-data.ts");

  const routes = [];

  // Process each pillar
  for (const pillar of BLOG_META) {
    // Add the pillar route
    routes.push(`/blog/${pillar.slug}`);

    // Add sub-article routes if they exist
    if (pillar.subArticles) {
      for (const subArticle of pillar.subArticles) {
        routes.push(`/blog/${pillar.slug}/${subArticle.slug}`);
      }
    }
  }

  return routes;
};

// Define your static routes
const staticRoutes = ["/", "/privacy", "/blog"];

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

// Main function to generate sitemap
const main = async () => {
  try {
    // Get all routes (static + dynamic blog routes)
    const blogRoutes = await getBlogRoutes();
    const allRoutes = [...staticRoutes, ...blogRoutes];

    // Generate and save sitemap
    const baseUrl = "https://learnwithorin.com";
    const sitemapContent = generateSitemap(baseUrl, allRoutes);
    const outputPath = path.join(__dirname, "../public/sitemap.xml");

    fs.writeFileSync(outputPath, sitemapContent);
    console.log("Sitemap generated successfully at ./public/sitemap.xml");
    console.log(`Generated sitemap with ${allRoutes.length} routes`);
    console.log(`Static routes: ${staticRoutes.length}`);
    console.log(`Blog routes: ${blogRoutes.length}`);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
};

main();
