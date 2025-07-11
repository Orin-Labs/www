import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@blog": path.resolve(__dirname, "src/blog"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
  // SSR configuration
  ssr: {
    // Don't externalize these packages in SSR
    noExternal: ["react-router-dom", "react-router", "lucide-react"],
    // Externalize problematic packages for SSR
    external: [
      "framer-motion",
      "motion",
      "@paper-design/shaders-react",
      "fsevents",
    ],
  },
  optimizeDeps: {
    // Force optimization of these packages
    include: ["react", "react-dom", "react-router-dom"],
  },
});
