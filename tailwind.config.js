/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['EB Garamond', 'Georgia', 'serif'],
      'serif': ['EB Garamond', 'Georgia', 'serif'],
      'garamond': ['EB Garamond', 'Georgia', 'serif'],
      'default': ['EB Garamond', 'Georgia', 'serif'],
    },
    extend: {
      colors: {
        'cuwmc': {
          primary: '#1f2647',
          secondary: '#ffd700',
          accent: '#9a7b1a',
          'primary-transparent': '#1f2647e6',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'slide-up': 'slideUp 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
