import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      exclude: ["node_modules"],
      jsx: "preserve",
    },
  },
  srcDir: "./src/",
  vite: {
    plugins: [],
  },
  css: ["@/assets/css/index.css"],
  build: {
    extractCSS: true,
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
          ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
        },
      },
    },
  },
  ssr: true,
});
