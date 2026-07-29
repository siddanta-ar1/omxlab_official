import type { Metadata } from 'next';

import { AboutPage } from '@/views/AboutPage';

export const metadata: Metadata = {
    title: 'About',
    description:
        'How OMX Lab works with businesses on digital transformation — custom software, modern web applications, and scalable cloud solutions.',
};

export default function Page() {
    return <AboutPage />;
}
