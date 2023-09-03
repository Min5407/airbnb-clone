import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      tiny: 'clamp(12px, 1.5vw, 14px)',
      small: 'clamp(14px, 2vw, 16px)',
      base: 'clamp(16px, 2.5vw, 20px)',
      large: 'clamp(20px, 3vw, 24px)',
      xlarge: 'clamp(24px, 3.5vw, 28px)',
      xxlarge: 'clamp(28px, 4vw, 32px)',
      xxxlarge: 'clamp(32px, 4.5vw, 36px)',
    },

    extend: {
      spacing: {
        tiny: '0.25rem',
        small: '0.5rem',
        base: '0.75rem',
        large: '1rem',
        xLarge: '2rem',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },

  plugins: [
    createThemes({
      default: {
        brandColors: {
          red: '#FF5A5F',
          green: '#00A699',
          orange: '#FC642D',
          dark: '#484848',
          gray: '#767676',
        },
        white: '#fff',
        dark: '#000',
      },
    }),
  ],
}
export default config
