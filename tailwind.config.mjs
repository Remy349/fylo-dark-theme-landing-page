/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-blue-d': 'hsl(217, 28%, 15%)',
        'dark-blue-m': 'hsl(218, 28%, 13%)',
        'dark-blue-f': 'hsl(216, 53%, 9%)',
        'dark-blue-t': 'hsl(219, 30%, 18%)',
        'cyan-g': 'hsl(176, 68%, 64%)',
        'blue-g': 'hsl(198, 60%, 50%)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', ' sans-serif'],
      },
    },
  },
  plugins: [],
}
