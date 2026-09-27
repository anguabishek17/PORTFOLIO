/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#09090b',
        'surface-elevated': '#121215',
        'surface-border': '#27272a',
        'surface-border-subtle': '#1e1e24',
        accent: '#ffffff',
        'accent-muted': '#a1a1aa',
        'accent-dim': '#71717a',
        'tech-cyan': '#22d3ee',
        'tech-emerald': '#34d399',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
        display: ['Space Grotesk', 'Geist', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0)',
        'mesh-gradient': 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
