/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  name: "light",
  extend: {
    backgroundColor: {
      background: colors.orange[50],
    },
    textColor: {
      display: colors.black,
      body: colors.gray[800],
    },
    borderColor: {
      primary: colors.gray[200],
      DEFAULT: colors.gray[200],
    },
  },
};
