import type { Metadata } from 'next';

import { TeamPage } from '@/views/TeamPage';

export const metadata: Metadata = {
    title: 'Team',
    description: 'The engineers, designers, and researchers behind OMX Lab.',
};

export default function Page() {
    return <TeamPage />;
}
