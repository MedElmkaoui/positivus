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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      colors : {
        primary :'#B9FF66',
        black :'#191A23',
        gray : '#F3F3F3',
        darkgray : '#292A32',
      },
      fontSize : {
        xs: ['12px', '14px'],
        sm: ['14px', '16px'],
        md: ['18px', '20px'],
        lg: ['22px', '25px'],
        xl: ['25px', '30px'],
      }
    },
  },
  plugins: [],
};
export default config;
