/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#080808",
          secondary: "#101010",
          card: "#151515",
          elevated: "#1C1C1C",
          border: "#292929",
          borderHover: "#404040",
        },
        red: {
          primary: "#E50914",
          bright: "#FF2633",
          deep: "#8B0000",
          glow: "rgba(229, 9, 20, 0.25)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B3B3B3",
          muted: "#777777",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
        'soft-md': '0 4px 14px 0 rgba(0, 0, 0, 0.6)',
        'soft-xl': '0 20px 40px -10px rgba(0, 0, 0, 0.8)',
        'glow-red-sm': '0 0 15px -3px rgba(229, 9, 20, 0.35)',
        'glow-red-md': '0 0 30px -5px rgba(229, 9, 20, 0.45)',
        'glow-red-lg': '0 0 50px -10px rgba(229, 9, 20, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      backgroundImage: {
        'tech-grid': "radial-gradient(circle, rgba(229, 9, 20, 0.08) 1px, transparent 1px)",
        'gradient-crimson': 'linear-gradient(135deg, #E50914 0%, #8B0000 100%)',
        'gradient-dark-red': 'linear-gradient(180deg, rgba(229, 9, 20, 0.15) 0%, rgba(8, 8, 8, 0) 100%)',
      },
    },
  },
  plugins: [],
}
