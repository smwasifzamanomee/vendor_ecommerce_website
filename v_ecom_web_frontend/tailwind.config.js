/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add our colors
        primary: "#808080",
        secondary: "#FFFFFF",
      },
      screens: {
        //Add our screen sizes
        'sm': {'min': '360px','max': '768px'},
        'md': {'min': '769px', 'max': '992px'},
        'lg': {'min': '993px' },
        'xl': { 'min': '1300px'}
      }
    },
  },
  plugins: [],
}
