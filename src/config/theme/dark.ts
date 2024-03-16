/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  name: "dark",
  extend: {
    backgroundColor: {
      background: colors.gray[950],
    },
    textColor: {
      display: colors.white,
      body: colors.gray[200],
    },
    borderColor: {
      primary: colors.gray[800],
      DEFAULT: colors.gray[800],
    },
  },
};
