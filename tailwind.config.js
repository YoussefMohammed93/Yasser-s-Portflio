/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1025px", // Redefine lg breakpoint to start at 1025px
      },
    },
  },
  plugins: [],
};
