import type { Metadata } from 'next';

import { initiatives, getInitiativeById } from '@/data/initiatives';
import { InitiativeDetailPage } from '@/views/InitiativeDetailPage';

export function generateStaticParams() {
    return initiatives.map((initiative) => ({ id: initiative.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const initiative = getInitiativeById(id);

    if (!initiative) return { title: 'Initiative not found' };

    return {
        title: initiative.title,
        description: initiative.summary,
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <InitiativeDetailPage id={id} />;
}
