import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          "primary": '#00486C',
          "secondary": '#002639'
        },
        orange: {
          "primary": '#D0B376',
          "secondary": '#B58E3E'
        },
        gray: {
          "primary": '#3A3D45'
        },
        dark:"#212121",
        light:"#838383",
      }
    },
  },
  plugins: [],
};
export default config;
