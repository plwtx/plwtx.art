/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "trigger-fast": "pulse 0.0666s ease-in-out infinite",
        "trigger-medium": "pulse 0.5s ease-in-out infinite",
      },

      fontFamily: {
        NJPBlack: ["NJP-Black", "opentype"],
        NJPBold: ["NJP-Bold", "opentype"],
        NJPExtraLight: ["NJP-ExtraLight", "opentype"],
        NJPLight: ["NJP-Light", "opentype"],
        NJPMedium: ["NJP-Medium", "opentype"],
        NJPRegular: ["NJP-Regular", "opentype"],
        NJPSemiBold: ["NJP-SemiBold", "opentype"],
        IMFellEnglishSC: ["IMFellEnglishSC", "opentype"],
        MatissePro: ["MatissePro", "opentype"],
      },
      colors: {
        // #FFEF77   Yelow *Corn
        // #FF0066   Reink *Paradise Pink
        // #0033FF   Bluwska *Blue RYB
        // #CFEACE   Greey *Nyanza
        // old bluwska: 0033FF

        len: {
          White: "#ffffff",
          Black: "#000000",
        },
      },
    },
  },
  plugins: [],
};
