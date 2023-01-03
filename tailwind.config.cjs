/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": "Nunito, sans-serif",
        "roboto": "Roboto', sans-serif",
      },
    },
    colors: {
      "light": {
        "100": "#FFFFFF",
        "200": "#F9F9F9",
        "300": "#E7E7E7",
        "400": "#F3F3F3",
      },

      "dark": {
        "100": "#232323",
        "200": "#2E2E2E",
        "300": "#383838",
        "400": "#545454",
        "500": "#151515",
      },

      "blue": {
        "100": "#1E93FF",
      },

      "grey": {
        "100": "#B4B4B4",
        "200": "#C1C1C1",
        "300": "#D9D9D9",
      }

    }
  },
  plugins: [],
}