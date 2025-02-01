import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@logics": path.resolve(__dirname, "src/logics"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utilities"),
    },
  },
});
