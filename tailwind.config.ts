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
        "orange-html": "#FF5733",
        "blue-css": "#264DE4",
        "yellow-js": "#F0DB4F",
        "blue-ts": "#007acc",
        "blue-react": "#61DBFB",
        "purple-vite": "#3D1663",
        "blue-tailwind": "#2596be",
        "blue-mui": "#2596BE",
        "purple-axios": "#5A29E4",
        "blue-mysql": "#00758F",
        "brown-mariadb": "#C0765A",
        "orange-git": "#F54D27",
        "blue-docker": "#1D63ED",
        "pink-laravel": "#F05340",
        "orange-firebase": "#FFA611",
        "blue-go": "#29BEB0",
        "green-mongo": "#4DB33D",
      },
    },
  },
  plugins: [],
};
export default config;
