/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          bg: "#FAF7F2",
          card: "#FFFFFF",
          border: "#E8E2D9",
          text: "#1A1A18",
          muted: "#666158",
          emerald: "#2C5E3B",
          "emerald-hover": "#234B2F",
          price: "#15803D",
        },
      },
    },
  },
  plugins: [],
};
