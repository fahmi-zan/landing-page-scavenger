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
    theme: [
      {
        mytheme: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          "yellow-stabilo": "#E9FF00",
          "base-100": "var(--base-color)",
        },
      },
    ],
  },
};
export default config;
