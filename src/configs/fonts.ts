import { Assistant } from 'next/font/google'

export const assistantFont = Assistant({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-main',
})

export const fonts = {
  assistantFont,
}
