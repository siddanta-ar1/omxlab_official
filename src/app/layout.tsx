import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollAnimator } from '@/components/common/ScrollAnimator';

/* The system calls for Söhne's proportions and optical density; Hanken
   Grotesk is the freely licensed face that sits closest.

   No `weight` array: Hanken Grotesk is a variable font, so every weight
   resolves to the same file and listing six of them bought zero download
   bytes -- it only emitted 48 @font-face rules where 8 would do, and clamped
   the axis to 300-800. Four headings ask for `font-black` (900) and were
   silently rendering at 800 because of that clamp. Omitting the array gives
   the real 100-900 axis and fixes them.

   Italic is split into its own non-preloaded instance. It is worth exactly one
   word per page -- the six `.accent-mark` usages -- and preloading it put
   ~35KB of high-priority font data in front of the render-blocking stylesheet
   for that one word. Loaded lazily it no longer competes with first paint. */
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

const hankenItalic = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken-italic',
  display: 'swap',
  style: ['italic'],
  preload: false,
});

/* Runs before first paint. Without it the page renders in the system theme
   and then snaps to the stored choice -- a flash of the wrong ground. */
const THEME_SCRIPT = `
(function(){try{var t=localStorage.getItem('omx-theme');
if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
`;

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
      // The SVG is served to browsers that take it, so the mark stays crisp
      // at any density; the PNGs remain for everything else.
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EFEAE4' },
    { media: '(prefers-color-scheme: dark)', color: '#0F2427' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning covers the pre-paint theme script below, which
    // must set data-theme on <html> before React runs or the page flashes the
    // wrong ground. It relaxes attribute checking on this element only.
    <html
      lang="en"
      className={`${hanken.variable} ${hankenItalic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="bg-surface text-on-surface antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="w-full pt-[49px] bg-surface min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
