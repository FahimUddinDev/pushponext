/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#6C757D",
          400: "#343434",
          500: "#0F2211",
          600: "#38AF43",
          700: "#D6F0D9",
        },
        borderColor: {
          100: "#BCBCBC",
        },
      },
    },
  },
  plugins: [],
};
