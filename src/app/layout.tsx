import type { Metadata, Viewport } from 'next';
import './globals.css';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { PageTransitionLoader } from '@/components/common/PageTransitionLoader';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import { MascotPet } from '@/components/common/MascotPet';

export const metadata: Metadata = {
    title: {
        default: 'OMX Lab — Custom Software Development',
        template: '%s | OMX Lab',
    },
    description:
        'OMX Lab designs and builds custom software, web and mobile applications, and cloud platforms for businesses that have outgrown off-the-shelf tools.',
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
    themeColor: '#1050E0',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ScrollToTop />
                <PageTransitionLoader />
                <SmoothScroll>
                    <div className="min-h-screen flex flex-col bg-body relative">

                        {/* The Cute Random Mascot */}
                        <MascotPet />

                        <div className="relative z-10 flex flex-col min-h-screen w-full">
                            {/* Navbar stays visible on all pages */}
                            <Navbar />

                            <main className="flex-grow">{children}</main>

                            <Footer />
                        </div>
                    </div>
                </SmoothScroll>
            </body>
        </html>
    );
}
