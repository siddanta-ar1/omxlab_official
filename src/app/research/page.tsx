import type { Metadata } from 'next';

import { ResearchHero } from '@/components/sections/ResearchHero';
import { ResearchAreas } from '@/components/sections/ResearchAreas';
import { ResearchPublications } from '@/components/sections/ResearchPublications';
import { ResearchProcess } from '@/components/sections/ResearchProcess';
import { ResearchCollaborate } from '@/components/sections/ResearchCollaborate';

export const metadata: Metadata = {
    title: 'Research',
    description:
        'Papers, reports, and open-source releases from the OMX Lab research group, across agents, machine learning, systems, and security.',
};

export default async function ResearchPage({
    searchParams,
}: {
    searchParams: Promise<{ topic?: string }>;
}) {
    // Resolved here rather than in the client component so the filtered list is
    // part of the rendered HTML.
    const { topic } = await searchParams;

    return (
        <>
            <ResearchHero />
            <ResearchAreas />
            <ResearchPublications activeTopic={topic} />
            <ResearchProcess />
            <ResearchCollaborate />
        </>
    );
}
