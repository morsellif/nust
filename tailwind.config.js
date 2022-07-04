// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const brandColor = colors.fuchsia;

module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,vue}",
    "./src/composables/**/*.{js,ts,vue}",
    "./src/layouts/**/*.{js,ts,vue}",
    "./src/pages/**/*.{js,ts,vue}",
    "./src/public/**/*.{js,ts,vue}",
    "./src/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        brand: brandColor,
      },
      ringColor: {
        DEFAULT: brandColor["500"],
      },
    },
  },
  plugins: [],
};
