/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jiro: ["jiro", "opentype"],
        kilo: ["kilo", "opentype"],
      },
      colors: {
        // #FFEF77   Yelow *Corn
        // #FF0066   Reink *Paradise Pink
        // #0033FF   Bluwska *Blue RYB
        // #CFEACE   Greey *Nyanza

        len: {
          Yelow: "#FFEF77",
          Reink: "#FF0066",
          Bluwska: "#0033FF",
          Greey: "CFEACE",
        },
      },
    },
  },
  plugins: [],
};
