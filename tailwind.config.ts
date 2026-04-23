import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050B14",      // Deep Space Black
          teal: "#00F2FF",      // Electric Cyan
          action: "#FF007A",    // Neon Pink/Magenta
          lavender: "#7000FF",  // Deep Electric Purple
          soft: "#0A1128",      // Navy Space
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
