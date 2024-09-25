/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vite: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "logo-black": "#000000",
        "logo-blue": "#1d3665",
        "logo-green": "#08C076",
      },
      dropShadow: {
        img: "0 0 1rem #ffffff",
      },
    },
  },
  plugins: [],
};
