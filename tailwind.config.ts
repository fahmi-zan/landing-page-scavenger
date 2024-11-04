/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [typography, daisyui],
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
          "base-100": "var(--base-color)",
        },
      },
    ],
  },
};
export default config;
