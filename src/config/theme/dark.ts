/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  name: "dark",
  extend: {
    backgroundColor: {
      background: colors.gray[950],
      secondary: colors.gray[900],
    },
    textColor: {
      display: colors.gray[50],
      body: colors.gray[200],
      subdued: colors.gray[400],
      brand: colors.pink[400],
    },
    borderColor: {
      primary: colors.gray[900],
      DEFAULT: colors.gray[900],
    },
    fontSize: {
      "clamp-xl": "clamp(2rem, 5vw + 1rem, 5rem)",
      "clamp-lg": "clamp(1rem, 5vw + 1rem, 3rem)",
    },
    borderWidth: {
      xs: "0.1px",
    },
  },
};
