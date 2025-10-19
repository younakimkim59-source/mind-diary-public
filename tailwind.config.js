/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'parent-peach': '#FFE4B5',
        'child-sky': '#87CEEB',
        'soft-blue': '#E6F3FF',
        'soft-peach': '#FFF0E6',
      },
      fontFamily: {
        'korean': ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
