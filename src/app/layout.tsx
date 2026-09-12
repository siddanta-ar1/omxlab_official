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

/* One observer for the whole page, rather than a client component per element.

   Scroll entry has no business depending on React hydration: it is a visual
   nicety, and if it fails the page must still render. This runs as a plain
   inline script, arms every [data-anim] element, and only then adds the
   `js-anim` class that switches the hidden state on -- so the parked state can
   never outlive the thing that un-parks it. A 2s failsafe reveals everything
   regardless, and reduced-motion readers never arm at all. */
const ANIM_SCRIPT = `
(function () {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    var root = document.documentElement;
    var reveal = function (el) { el.setAttribute('data-in', ''); };

    var start = function () {
      var nodes = document.querySelectorAll('[data-anim]');
      if (!nodes.length) return;
      root.classList.add('js-anim');

      var io = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            reveal(entries[i].target);
            io.unobserve(entries[i].target);
          }
        }
      }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

      for (var i = 0; i < nodes.length; i++) {
        var r = nodes[i].getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) reveal(nodes[i]);
        else io.observe(nodes[i]);
      }

      setTimeout(function () {
        var all = document.querySelectorAll('[data-anim]:not([data-in])');
        for (var i = 0; i < all.length; i++) reveal(all[i]);
        io.disconnect();
      }, 2000);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  } catch (e) { /* leave the page visible */ }
})();
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
        <script dangerouslySetInnerHTML={{ __html: ANIM_SCRIPT }} />
      </body>
    </html>
  );
}
