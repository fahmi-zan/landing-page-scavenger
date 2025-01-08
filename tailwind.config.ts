/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "half-mobile": "url('/src/assets/png/half-mobile.png')",
        "wave-path": "url('../assets/png/compount-path.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    base: true,
    styled: true,
    utils: true,
    logs: true,
    themeRoot: ":root",
    themes: [
      {
        mytheme: {
          primary: "#8d51dd",
          secondary: "#bea2fc",
          accent: "#ff9e2c",
          "yellow-stabilo": "#E9FF00",
          neutral: "#cbcad0",
          "base-100": "#f7f5f8",
          "base-content": "#1f2143",
        },
      },
      "light",
      "acid",
    ],
  },
};
export default config;
