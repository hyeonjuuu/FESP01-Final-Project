/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "320px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
      // 데스크탑
      pc: { min: "1025px", max: "1920px" },
      // 테블릿
      tb: { min: "768px", max: "1024px" },
      // 모바일
      mo: { max: "767px", min: "320px" },
    },
  },
  plugins: [],
};
