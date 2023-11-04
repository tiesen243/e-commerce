import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f0f2f5',
          dark: '#18191a',
        },
        secondary: {
          light: '#ffffff',
          dark: '#242526',
        },
        tertiary: {
          light: '#f2f2f2',
          dark: '#3a3b3c',
        },
        quaternary: {
          light: '#e4e6e9',
          dark: '#4e4f50',
        },
        blue: {
          light: '#ebf5ff',
          dark: '#232e3b',
        },
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        carousel: 'marquee 60s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
