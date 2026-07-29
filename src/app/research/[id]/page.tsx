import type { Metadata } from 'next';

import { publications, getPublicationById } from '@/data/research';
import { ResearchDetailPage } from '@/views/ResearchDetailPage';

export function generateStaticParams() {
    return publications.map((paper) => ({ id: paper.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const paper = getPublicationById(id);

    if (!paper) return { title: 'Publication not found' };

    return {
        title: paper.title,
        description: paper.abstract,
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ResearchDetailPage id={id} />;
}
