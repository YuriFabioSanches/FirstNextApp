import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],

  plugins: [require("daisyui")],

  daisyui: {
    theme: ['light', 'dark', 'winter']
  },
} satisfies Config

export default config