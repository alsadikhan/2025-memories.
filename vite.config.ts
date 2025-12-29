import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // 🔴 GitHub repo name
  base: "/2025-memories./",

  plugins: [
    react(),
    tailwindcss(),
  ],

  root: path.resolve(__dirname, "client"),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    // 🔴 dist এর ভিতরে index.html আসবে
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
