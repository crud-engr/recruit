/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "#000",
      white: "#fff",
      purple: "#CA61C3",
      orange: "#FFCC33",
      grey: "#979797",
      lightgrey: "rgba(131, 131, 131, 0.08);",
    },
  },
  plugins: [require("daisyui")],
};
