/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF4757",
        yellow: "#EFBA39",
        gold: "#C89999",
        dark_gray: "#626262",
        gray: "#D9D9D9",
        light_gray: "#F8F8F8",
        black: "#000",
      },
      screens: {
        "2xl": "1280px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        default: "0 5px 17px rgb(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
