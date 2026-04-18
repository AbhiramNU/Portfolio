/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vs-bg': '#1e1e1e',
        'vs-sidebar': '#252526',
        'vs-activity': '#333333',
        'vs-accent': '#007acc',
        'vs-text': '#d4d4d4',
        'vs-text-muted': '#858585',
        'vs-tab-bg': '#2d2d2d',
        'vs-tab-active': '#1e1e1e',
        'vs-border': '#3c3c3c'
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Consolas"', '"Courier New"', 'monospace']
      }
    },
  },
  plugins: [],
}
