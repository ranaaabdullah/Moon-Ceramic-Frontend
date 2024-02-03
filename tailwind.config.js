/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3A3845",
          200: "#F7F6F5",
          300: "#595667",
          400:'#F7F6F5'
        },
        secondary: { 100: "#3A3845" ,200:'#CAC9CF'},
        brown: {
          100: "#826F66",
          100: "#826F66",
        },
      },
    },
  },
  plugins: [],
};

