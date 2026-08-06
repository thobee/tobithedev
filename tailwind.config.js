export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        editorial: {
          surface: '#ffffff',
          muted: '#f5f5f5',
          dark: '#000000',
          card: '#1a1a1a',
          hero: '#9ca3af',
          accent: '#3b59f8',
          'accent-hover': '#2f4ad4',
          text: '#000000',
          'text-muted': '#888888',
        },
      },
      maxWidth: {
        editorial: '72rem',
      },
      borderRadius: {
        card: '1.5rem',
        'card-lg': '1.75rem',
      },
      spacing: {
        section: '8rem',
        'section-lg': '12rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
