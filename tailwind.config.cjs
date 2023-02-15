/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            // Configure your color palette here
            transparent: 'transparent',
            current: 'currentColor',
            main: '#1A99B5',
            lighter: '#b2dbd2',
            accent: '#e7f3f0',
            secondary: '#00896d',
            dark: '#0e4551',
            gradient: 'linear-gradient(to right, #073c3266, transparent)',
         },
         fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
         },
         
      },
   },
   plugins: [],
};
