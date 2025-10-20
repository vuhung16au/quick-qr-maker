import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C1053",
        accent: "#F2120C",
        secondary: "#B51825",
        neutral: "#918B83",
        dark: "#302C2A",
        light: "#F2EFEB",
      },
    },
  },
  plugins: [],
};
export default config;
