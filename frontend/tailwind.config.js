/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFB703",
        blue: "#023047",
        grey: "#EEECE7",
        red: "#BD2E2E",
        green: "#1B5816",
        white: "#fff",
      },
      backgroundImage: {
        background: "url('/assets/background_img.jpg')",
      },
    },
  },
  plugins: [],
};
