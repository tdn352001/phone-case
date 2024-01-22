import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--color-background))',
        foreground: 'rgba(var(--color-foreground))',
        shadow: 'rgb(var(--color-shadow))',
        button: 'rgb(var(--color-button))',
        'button-text': 'rgb(var(--color-button-text))',
        'secondary-button': 'rgb(var(--color-secondary-button))',
        'secondary-button-text': 'rgb(var(--color-secondary-button-text))',
        link: 'rgb(var(--color-link))',
        'badge-background': 'rgb(var(--color-badge-background))',
        'badge-border': 'rgb(var(--color-badge-border))',
      },
      fontSize: {
        xs: ['1.4rem', '1.8rem'],
        base: ['1.6rem', '2.4rem'],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }: any) {
      addVariant('smu', "@media screen and (max-width: theme('screens.sm'))")
      addVariant('mdu', "@media screen and (max-width: theme('screens.md'))")
    }),
    require('tailwind-scrollbar'),
  ],
}
export default config
