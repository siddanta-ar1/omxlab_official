import type { Metadata } from 'next';

import { ServicesHero } from '@/components/sections/ServicesHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { EngagementModels } from '@/components/sections/EngagementModels';
import { EcosystemDiagram } from '@/components/sections/EcosystemDiagram';
import { DeliveryProcess } from '@/components/sections/DeliveryProcess';
import { TechStack } from '@/components/sections/TechStack';
import { ServicesCTA } from '@/components/sections/ServicesCTA';

export const metadata: Metadata = {
    title: 'Services',
    description:
        'Custom software, web and mobile applications, cloud platforms, and the engagement models we deliver them through.',
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <EngagementModels />
            <EcosystemDiagram />
            <DeliveryProcess />
            <TechStack />
            <ServicesCTA />
        </>
    );
}
