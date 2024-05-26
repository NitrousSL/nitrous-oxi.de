import defaultTheme from "tailwindcss/defaultTheme";
import colors       from "tailwindcss/colors";

import { nextui }   from "@nextui-org/react";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{ts,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    // rest of the code
  },
  plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors, nextui()],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
