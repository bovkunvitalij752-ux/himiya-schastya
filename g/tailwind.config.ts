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
        ink: "#21150f",
        coffee: "#342217",
        cocoa: "#6e5848",
        cream: "#fbf6ec",
        porcelain: "#fffaf2",
        parchment: "#f4efe8",
        caramel: "#d98a45",
        amber: "#ffd58c",
        gold: "#c99843",
        linen: "#ead9be",
        sage: "#8fa998",
      },
      boxShadow: {
        soft: "0 24px 90px rgba(88, 56, 31, 0.10)",
        premium: "0 34px 120px rgba(33, 21, 15, 0.18)",
        glow: "0 18px 50px rgba(217, 138, 69, 0.25)",
      },
      borderRadius: {
        card: "2rem",
        panel: "2.5rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
