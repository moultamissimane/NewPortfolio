/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces, darkest to lightest
        ink: {
          950: '#12141d',
          900: '#171a26',
          800: '#1e2233',
          700: '#2a3046',
        },
        // Text
        mist: {
          100: '#f1f4fa',
          300: '#c5cad8',
          500: '#8a91a6',
        },
        // The single accent colour
        glow: {
          DEFAULT: '#a5f0fb',
          dim: '#5fd3e6',
        },
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '68rem',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgb(0 0 0 / 0.55)',
        glow: '0 0 0 1px rgb(165 240 251 / 0.35), 0 12px 32px -12px rgb(165 240 251 / 0.35)',
      },
    },
  },
  plugins: [],
};
