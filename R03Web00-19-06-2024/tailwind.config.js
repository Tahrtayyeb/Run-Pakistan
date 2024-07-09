/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // Example modern font family
      },
      lineHeight: {
        relaxed: '2', // Increase default line height
      },
      spacing: {
        'extra': '1.5rem', // Example spacing utility for margins/paddings
      },
    },
  },
  variants: {},
  plugins: [],
};
