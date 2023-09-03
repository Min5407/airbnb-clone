import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],

  plugins: [
    createThemes({
      default: {
        default: {
          brandColors: {
            primary: '#7766c6',
            darkPrimary: '#46467A',
            lightPrimary: '#E0DFFD',
            secondary: '#FFC212',
            tertiary: '#F9B0C3',
          },
          bgColors: {
            dark: '#333',
            light: '#f9f9f9',
          },
          white: '#fff',
          dark: '#000',
        },
      },
    }),
  ],
}
export default config
