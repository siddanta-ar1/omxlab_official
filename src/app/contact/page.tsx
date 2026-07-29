import type { Metadata } from 'next';

import { ContactPage } from '@/views/ContactPage';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Tell us what you are building. Start a project, ask about a role, or arrange a call with the OMX Lab team.',
};

export default function Page() {
    return <ContactPage />;
}
