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
        6: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        1: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        0: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        3: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        5: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      spacing: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
      },
    },
  },
  plugins: [],
};
