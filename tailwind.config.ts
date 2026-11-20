import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: {
    colors: { ink: "#0F2547", paper: "#FAFBFD", sky: "#E8EFFB", signal: "#2F6BFF", mute: "#52617C" },
    fontFamily: { display: ["var(--font-display)", "serif"], body: ["var(--font-body)", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
