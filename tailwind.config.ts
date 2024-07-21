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
        // 'about-us': "url('./src/assets/aboutUsBg.png')",
        'advantage-card': 'linear-gradient( 3deg, rgba(178,139,239,0) 0%, rgba(122,83,218,0.27) 100%)'
      },
    },
  },
  plugins: [],
};
export default config;
