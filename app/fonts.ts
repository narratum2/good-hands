import { Inter, Libre_Baskerville } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif'
});