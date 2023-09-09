import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-black-fade': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))',
        'gradient-purple-fade': 'linear-gradient(to bottom, rgba(28,11,30), rgba(0, 0, 0, 0.7))',
        'circle': 'url("/images/IMG_0790.png")',
        'purple-guy': 'url("/images/IMG_0269.png")',
        'gold-guy': 'url("/images/IMG_0030.png")',
        'space': 'url("/images/space.jpeg")',
        'gems': 'url("/images/gems.jpeg")'
      },
      colors: {
        'purple': 'rgba(28,11,84, 0.8)',
        'purple-full': 'rgba(28,11,84)',
        'purple-dark': 'rgba(28,11,30)',
        'mid-purple': '#ab09cb',
        'gold': '#ebff06',
        'gold-2': '#ffd700',
        'light-pink': '#FCF7FF',
        'light-purple': '#9A89B4',
        'light-cream': '#FFFADE',
        'black-900': 'rgba(0, 0, 0, 0.9)',
        'black-transparent': 'rgba(0, 0, 0, 0.7)',
        'green': '#1fd600',
        'new': '#045DFF'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-light': 'pulseLight 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        pulseLight: {
          '0%, 100%': {opacity: '1'},
          '50%': {opacity: '0.5'}
        }
      },
      listStyleImage: {
        'bluegem': "url('/images/blue-gem.jpg')",
        'yellowgem': "url('/images/yellow-gem.jpg')",
        'redgem': "url('/images/red-gem.jpg')"
      }
    },
  },
  plugins: [],
}
export default config
