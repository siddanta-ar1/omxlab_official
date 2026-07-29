import type { Metadata } from 'next';

import { services, getServiceById } from '@/data/services';
import { ServiceDetailPage } from '@/views/ServiceDetailPage';

export function generateStaticParams() {
    return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const service = getServiceById(id);

    if (!service) return { title: 'Service not found' };

    return {
        title: service.title,
        description: service.summary,
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ServiceDetailPage id={id} />;
}
