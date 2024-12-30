/** @type {import('tailwindcss').Config} */
import animations from "tailwindcss-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [animations],
};
