import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-grey": "#F7F7F5",
        "primary-500": "#e36d6e",
        "primary-300": "#E6ADAC",
        
        "secondary-500": "#8BE9E8",
        "secondary-300" : "#BDF2F2"
      },
        fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      },
         // setting up the default breakpoints
  // screens: {
  //   xs: "480px",
  //   sm: "768px",
  //   md: "1060px",
  // },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
