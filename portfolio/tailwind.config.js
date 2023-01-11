/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jiro: ["jiro", "opentype"],
        Kilo: ["kilo", "opentype"],
        Digi: ["Digi", "opentype"],
        Cry: ["Cry", "opentype"],
        BSP: ["BSP", "opentype"],
        Chin: ["Chin", "opentype"],
        Hexa: ["Hexa", "opentype"],

        LineR: ["LineR", "opentype"],
        LineT: ["LineT", "opentype"],
        LineB: ["LineB", "opentype"],
        Makinas: ["Makinas", "opentype"],
        Kirieiji: ["Kirieiji", "opentype"],
        UIJP: ["UIJP", "opentype"],
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
          Greey: "#CFEACE",

          //Len New colors

          Purple: "#645DDF",
          Green: "#ABFF4F",
          White: "#E9F1F7",
          Black: "#131B23",
        },
      },
    },
  },
  plugins: [],
};
