import type { Metadata } from 'next';

import { ProjectsHero } from '@/components/sections/ProjectsHero';
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';
import { ServicesCTA } from '@/components/sections/ServicesCTA';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Case studies from platforms, mobile apps, and cloud systems OMX Lab has designed, built, and shipped.',
};

export default async function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{ type?: string }>;
}) {
    // Resolved here rather than in the client component so the filtered list is
    // part of the rendered HTML.
    const { type } = await searchParams;

    return (
        <>
            <ProjectsHero />
            <ProjectsGallery activeType={type} />
            <ServicesCTA />
        </>
    );
}
