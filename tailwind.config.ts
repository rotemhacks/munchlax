import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        munchlax: {
          primary: "#0e7490",
          secondary: "#06b6d4",
          accent: "#fbbf24",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#e5e7eb",
          success: "#34d399",
          warning: "#fcd34d",
          error: "#991b1b",
        },
      },
    ],
  },
} satisfies Config;
