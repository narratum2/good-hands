import './globals.css';
import { inter, libre } from './fonts';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'Good Hands — Beauty Concierge',
  description: 'Feel understood and taken care of with our curated beauty concierge platform.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable}`}>
      <body className="bg-porcelain text-ink">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}