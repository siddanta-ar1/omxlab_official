import type { Metadata } from 'next';

import { InitiativesHero } from '@/components/sections/InitiativesHero';
import { InitiativesGrid } from '@/components/sections/InitiativesGrid';
import { ServicesCTA } from '@/components/sections/ServicesCTA';

export const metadata: Metadata = {
    title: 'Initiatives',
    description:
        'Fellowships, open-source work, and community programmes run by OMX Lab.',
};

export default async function InitiativesPage({
    searchParams,
}: {
    searchParams: Promise<{ focus?: string }>;
}) {
    // Resolved here rather than in the client component so the filtered list is
    // part of the rendered HTML.
    const { focus } = await searchParams;

    return (
        <>
            <InitiativesHero />
            <InitiativesGrid activeFocus={focus} />
            <ServicesCTA />
        </>
    );
}
