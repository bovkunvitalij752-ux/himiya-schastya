import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        mist: "#f4f7f5",
        sage: "#8fa998",
        forest: "#1f4635",
        coral: "#d86f5d",
        gold: "#c99843",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(31, 70, 53, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
