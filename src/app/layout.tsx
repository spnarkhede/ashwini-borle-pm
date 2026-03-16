import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollAnimationProvider from '@/components/providers/ScrollAnimationProvider';

export const metadata: Metadata = {
  title: {
    default: 'Alex Chen — Senior Product Manager',
    template: '%s | Alex Chen',
  },
  description:
    'Senior Product Manager with 8+ years building B2B SaaS, digital health, and fintech products. Specializing in product strategy, cross-functional leadership, and data-driven growth.',
  keywords: [
    'Product Manager',
    'Senior PM',
    'Product Strategy',
    'B2B SaaS',
    'Digital Health',
    'Fintech',
    'Alex Chen',
  ],
  authors: [{ name: 'Alex Chen' }],
  creator: 'Alex Chen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Alex Chen — Senior Product Manager',
    title: 'Alex Chen — Senior Product Manager',
    description:
      'Senior Product Manager with 8+ years building B2B SaaS, digital health, and fintech products.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Chen — Senior Product Manager',
    description:
      'Senior Product Manager with 8+ years building B2B SaaS, digital health, and fintech products.',
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
    <html lang="en" suppressHydrationWarning>
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
