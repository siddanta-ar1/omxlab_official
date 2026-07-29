import type { Metadata } from 'next';

import { projects, getProjectById } from '@/data/projects';
import { ProjectDetailPage } from '@/views/ProjectDetailPage';

export function generateStaticParams() {
    return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) return { title: 'Project not found' };

    return {
        title: project.title,
        description: project.summary,
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ProjectDetailPage id={id} />;
}
