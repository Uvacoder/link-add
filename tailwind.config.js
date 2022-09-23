/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: theme => ({
        'brand-color':'#5B46F6',
        'brand-secondary-color':'#FD8D1E',
      })
    },
  },
  plugins: [],
}
