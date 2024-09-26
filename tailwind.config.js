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
      backgroundImage: {
        // first: "url('./src/assets/gradient-abstract-background/8163659.jpg')",
        one: "url('./src/assets/one-Photoroom.png')",
        two: "url('./src/assets/two-Photoroom.png')",
        three: "url('./src/assets/three-Photoroom.png')",
        four: "url('./src/assets/four-Photoroom.png')",
        five: "url('./src/assets/five-Photoroom.png')",
        six: "url('./src/assets/six-Photoroom.png')",
      },
      flex: {
        2: "2 2 0%",
      },
      fontWeight: {
        thick: "1000",
      },
      boxShadow: {
        button: "5px 10px #1d3665",
        "button-hover": "7.5px 15px #1d3665",
      },
    },
  },
  plugins: [],
};
