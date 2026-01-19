/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // These paths tell Tailwind where to look for your files
    "./index.html",                 // Your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",   // All JS/JSX/TS/TSX files in src folder
  ],
   theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}