/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // purge: [],
  theme: {
    screens: {
      // 'phone': '280px',
      // 'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'phone': '200px',
      // => @media (min-width: 1280px) { ... }

      'laptop': '750px'
    },
  }
};
