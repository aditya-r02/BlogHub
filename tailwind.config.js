/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'nav-light': '0 2px 5px -2px gray',
        'nav-dark': '0 2px 5px -2px aqua',
        'foot-light': '0 2px 4px 2px gray',
        'foot-dark' : '0 2px 4px 2px aqua'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
