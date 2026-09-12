import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

/* The system calls for Söhne's proportions and optical density; Hanken
   Grotesk is the freely licensed face that sits closest. Italics carry the
   Signal Sky inflections, so the italic axis is loaded too. */
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://omxlab.com'),
  title: {
    default: 'OMX Lab — Frontier AI Infrastructure',
    template: '%s | OMX Lab',
  },
  description:
    'Building foundational models, high-throughput training platforms, and applied intelligence for the physical world.',
  applicationName: 'OMX Lab',
  authors: [{ name: 'Siddanta Sodari' }],
  keywords: [
    'AI infrastructure',
    'distributed training',
    'biometric verification',
    'model evaluation',
    'sovereign deployment',
  ],
  openGraph: {
    type: 'website',
    siteName: 'OMX Lab',
    title: 'OMX Lab — Frontier AI Infrastructure',
    description:
      'Building foundational models, high-throughput training platforms, and applied intelligence for the physical world.',
    locale: 'en',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMX Lab — Frontier AI Infrastructure',
    description:
      'Building foundational models, high-throughput training platforms, and applied intelligence for the physical world.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#EFEAE4',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="bg-surface text-on-surface antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="w-full pt-[49px] bg-surface min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
