/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F5F0',
        'forest-dark': '#123C32',
        'forest-primary': '#174C3C',
        'forest-secondary': '#5F806F',
        'forest-light': '#DCE8E1',
        'forest-badge': '#315C50',
        'graphite-primary': '#17201D',
        'graphite-secondary': '#59635E',
        'graphite-muted': '#8A938E',
        'surface-white': '#FFFFFF',
        'surface-subtle': '#ECEBE5',
        'border-light': '#DDE1DC',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
        display: ['Space Grotesk', 'Geist', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
