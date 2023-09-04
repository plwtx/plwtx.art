/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "9l": "0px 0px 15px 5px rgba(0, 0, 0, 0.3)",
        "9x": "35px 0px 0px 3px rgba(0, 0, 0, 0.1)",
      },

      ".btn": {
        backgroundColor: "#0033FF",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#3182ce",
        },
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-second": "spin 5s linear infinite",
        "spin-minute": "spin 10s linear infinite",
        "spin-hour": "spin 20s linear infinite",

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
  plugins: [
    // Len's Plugins
    plugin(function ({ addComponents }) {
      addComponents({
        ".poscenter": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%);",
        },
        ".posvertical": {
          position: "absolute",
          top: "50%",
          transform: "translate(-50%);",
        },
        ".poshorizontal": {
          position: "absolute",
          left: "50%",
          transform: "translate(-50%);",
        },
      });
    }),
  ],
};
