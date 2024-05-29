/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondaryDark: "#1c1c1e",
        secondaryExtraDark: "#0d0d0d",

        bodyTextLight: "#f4f4f4",
        bodyTextDark: "#898989",
        bodyTextExtraDark: "#565656",
        bodyTextGray: "#1c1d1f",

        bodyTitleLight: "#cccccc",
        bodyTitleDark: "#bbbbbb",
      },
    },
  },
  plugins: [],
};
