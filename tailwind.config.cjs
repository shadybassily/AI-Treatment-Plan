/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            // Configure your color palette here
            transparent: 'transparent',
            current: 'currentColor',
            main: ' #1a99b5',
            secondary: '#00896d',
            lighter: 'rgba(97, 181, 164, 0.5)',
            accent: 'rgba(201, 227, 221, 0.85)',
            black: '#0e0f11',
            gradient : "linear-gradient(to right, #073c3266, transparent)"
         },
      },
   },
   plugins: [],
};

