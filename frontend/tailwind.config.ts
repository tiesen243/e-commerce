import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6190E8',
          light: '#f0f2f5',
          dark: '#18191a',
        },
        secondary: {
          DEFAULT: '#000428',
          light: '#ffffff',
          dark: '#242526',
        },
        hover: {
          light: '#f2f2f2',
          dark: '#3a3b3c',
        },
      },
    },
  },
  plugins: [],
}
export default config
