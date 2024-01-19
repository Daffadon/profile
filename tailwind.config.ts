import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bold-gray": "#3D3D3D",
        "light-gray": "#F0EFEF",
        "medium-gray": "#CBCAC8",
        "medium-brown": "#BCA98C",
      },
    },
  },
  plugins: [],
};
export default config;
