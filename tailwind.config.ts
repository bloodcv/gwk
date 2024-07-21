import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'advantage-card': 'linear-gradient( 3deg, rgba(230,73,33,0) 0%, rgba(230,73,33,0.27) 100%);',
        'about-us-tip': "linear-gradient( 175deg, #FFA771 0%, #E64921 100%)"
      },
    },
  },
  plugins: [],
};
export default config;
