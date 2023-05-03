/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        LineR: ["LineR", "opentype"],
        LineT: ["LineT", "opentype"],
        LineB: ["LineB", "opentype"],
        NJPBlack: ["NJP-Black", "opentype"],
        NJPBold: ["NJP-Bold", "opentype"],
        NJPExtraLight: ["NJP-ExtraLight", "opentype"],
        NJPLight: ["NJP-Light", "opentype"],
        NJPMedium: ["NJP-Medium", "opentype"],
        NJPRegular: ["NJP-Regular", "opentype"],
        NJPSemiBold: ["NJP-SemiBold", "opentype"],
        IMFellEnglishSC: ["IMFellEnglishSC", "opentype"],
      },
      colors: {
        // #FFEF77   Yelow *Corn
        // #FF0066   Reink *Paradise Pink
        // #0033FF   Bluwska *Blue RYB
        // #CFEACE   Greey *Nyanza
        // old bluwska: 0033FF

        len: {
          Yelow: "#FFEF77",
          Reink: "#FF0066",
          Pwurple: "#6c48e2",
          Greey: "#CFEACE",
          BrownlishGreen: "#bfb9a6",
          Bluwska: "#0033FF",

          //Len New colors

          Purple: "#645DDF",
          Green: "#ABFF4F",
          White: "#ffffff",
          Black: "#000000",
        },
      },
    },
  },
  plugins: [],
};
