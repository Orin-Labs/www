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

async function createServer() {
  const app = express();

  // Add compression middleware
  app.use(compression());

  let vite;
  if (!isProduction) {
    // Development mode - use Vite dev server
    const { createServer } = await import("vite");
    vite = await createServer({
      server: { middlewareMode: true },
      appType: "custom",
      base: "/",
    });
    app.use(vite.ssrLoadModule);
  } else {
    // Production mode - serve static files
    app.use(
      "/",
      sirv(path.resolve(__dirname, "dist/client"), {
        extensions: [],
        gzip: true,
        brotli: true,
      })
    );
  }

  // Handle all routes for SSR
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;

      let template;
      let render;

      if (!isProduction) {
        // Development: read template from file system and transform via vite
        template = fs.readFileSync(
          path.resolve(__dirname, "index.html"),
          "utf-8"
        );
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        // Production: use built template and server bundle
        template = fs.readFileSync(
          path.resolve(__dirname, "dist/client/index.html"),
          "utf-8"
        );
        render = (await import("./dist/server/entry-server.js")).render;
      }

      // Render the app to string
      const { html: appHtml, meta } = await render(url);

      // Generate meta tags HTML
      const metaTags = generateMetaTags(meta);

      // Replace placeholders in template
      const html = template
        .replace("<!--ssr-outlet-->", appHtml)
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
      // Handle errors
      if (vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error("SSR Error:", e);
      res.status(500).end("Internal Server Error");
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
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
