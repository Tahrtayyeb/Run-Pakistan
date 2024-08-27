/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        'extra-loose': '2.0',
      },
      spacing: {
        'extra': '1.5rem',
      },
    },
  },
  plugins: [],
};