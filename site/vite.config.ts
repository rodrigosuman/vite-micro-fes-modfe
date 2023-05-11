import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        footer: "http://localhost:11110/footer.js",
        header: "http://localhost:11111/header.js",
        home: "http://localhost:11112/home.js",
        page1: "http://localhost:11113/page-1.js",
        page2: "http://localhost:11114/page-2.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
