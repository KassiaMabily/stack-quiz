import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navy: {
          DEFAULT: 'var(--navy)',
          dark: 'var(--dark-navy)',
          light: 'var(--light-grey)',
          grey: 'var(--grey-nayy)',
        },
        bluish: 'var(--light-bluish)',
        primary: {
          DEFAULT: 'var(--purple)',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        success: {
          DEFAULT: 'var(--green)',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: 'var(--red)',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-rubik)', 'sans-serif'],
      },
      backgroundImage: {
        'background-desktop':
          "url('/patterns/pattern-background-desktop-light.svg')",
        'background-desktop-dark':
          "url('/patterns/pattern-background-desktop-dark.svg')",
        'background-mobile':
          "url('/patterns/pattern-background-mobile-light.svg')",
        'background-mobile-dark':
          "url('/patterns/pattern-background-mobile-dark.svg')",
        'background-tablet':
          "url('/patterns/pattern-background-tablet-light.svg')",
        'background-tablet-dark':
          "url('/patterns/pattern-background-tablet-dark.svg')",
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
