/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  name: "light",
  extend: {
    backgroundColor: {
      background: colors.orange[50],
      secondary: colors.gray[200],
      brand: colors.pink[600],
    },
    textColor: {
      display: colors.gray[950],
      body: colors.gray[800],
      subdued: colors.gray[400],
      brand: colors.pink[600],
    },
    borderColor: {
      primary: colors.gray[200],
      DEFAULT: colors.gray[200],
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
