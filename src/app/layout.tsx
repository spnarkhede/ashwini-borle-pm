import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollAnimationProvider from '@/components/providers/ScrollAnimationProvider';

export const metadata: Metadata = {
  title: {
    default: 'Ashwini Borle — Senior Technical Product Manager',
    template: '%s | Ashwini Borle',
  },
  description:
    'Senior Technical Product Manager with 14+ years in global fintech, data platforms and AI-driven automation. Specializing in data platform strategy, PCI/PII compliance and scalable enterprise systems.',
  keywords: [
    'Technical Product Manager',
    'Senior TPM',
    'Data Platform',
    'Fintech',
    'Mastercard',
    'AI Automation',
    'Ashwini Borle',
    'Product Strategy',
    'PCI Compliance',
  ],
  authors: [{ name: 'Ashwini Borle' }],
  creator: 'Ashwini Borle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ashwini Borle — Senior Technical Product Manager',
    title: 'Ashwini Borle — Senior Technical Product Manager',
    description:
      'Senior Technical Product Manager with 14+ years in global fintech, data platforms and AI-driven automation at Mastercard, IBM and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashwini Borle — Senior Technical Product Manager',
    description:
      'Senior Technical Product Manager with 14+ years in global fintech, data platforms and AI-driven automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <ThemeProvider>
          <ScrollAnimationProvider>
            {/* Skip to main content for accessibility */}
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            <Navigation />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </ScrollAnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
