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
        "blue-deep": "#064273",
        "blue-smoky": "#76B6C4",
        "blue-sky": "#7FCDFF",
        "blue-clear": "#1DA2d8",
        "blue-very-light": "#DEF3F6",
      },
    },
  },
  plugins: [],
};
export default config;
