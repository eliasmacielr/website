/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["CMU Serif", "ui-serif", "serif"],
      sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      mono: ["monospace", "SFMono-Regular", "ui-monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      stone: colors.stone,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
  },
  plugins: [],
};
