import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "page-2",
      filename: "page-2.js",
      exposes: {
        "./Page2": "./src/Page2",
      },
      remotes: {
        footer: "http://localhost:11110/footer.js",
        header: "http://localhost:11111/header.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    assetsDir: "",
  },
});
