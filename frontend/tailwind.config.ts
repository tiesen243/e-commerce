import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
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
        blue: {
          light: '#6196ff',
          dark: '#004e92',
        },
      },
    },
  },
  plugins: [],
}
export default config
