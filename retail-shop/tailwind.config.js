/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', 
  content: [
    "./index.html", // Include your HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

