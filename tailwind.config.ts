import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blush: "#ff5d8f",
        grape: "#6d28d9",
        mist: "#fdf2f8",
      },
      boxShadow: {
        romantic: "0 20px 60px rgba(255, 93, 143, 0.25)",
      },
      backgroundImage: {
        "valentine-glow":
          "radial-gradient(circle at 15% 20%, rgba(255, 93, 143, 0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(109, 40, 217, 0.32), transparent 40%), radial-gradient(circle at 50% 100%, rgba(236, 72, 153, 0.28), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
