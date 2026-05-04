import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1F1A15",
        "ink-soft": "#3E362D",
        muted: "#7A6F61",
        barn: "#B4381F",
        "barn-deep": "#8C2A14",
        "barn-soft": "#E9C9BE",
        cream: "#FAF5EB",
        "cream-deep": "#F2E9D6",
        tan: "#D9C9A8",
        sage: "#5F7A49",
        "sage-soft": "#D7E1C6",
        paper: "#FFFCF5",
        line: "#E5D9C2",
        gold: "#C89B3C",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "12px",
        lg: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
