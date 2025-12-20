/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B66C5A',
        'primary-hover': '#9A5A4A',
        secondary: '#4A3A3A',
        'secondary-hover': '#3A2A2A',
        sidebar: '#F5EBE8',
        'sidebar-hover': '#E8D5D5',
      }
    }
  },
  plugins: []
};