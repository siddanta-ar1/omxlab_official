import type { Metadata } from 'next';

import { CareerHero } from '@/components/sections/CareerHero';
import { WhyJoinUs } from '@/components/sections/WhyJoinUs';
import { ViewFromInside } from '@/components/sections/ViewFromInside';
import { HiringProcess } from '@/components/sections/HiringProcess';
import { OpenRoles } from '@/components/sections/OpenRoles';

export const metadata: Metadata = {
    title: 'Career',
    description:
        'Open roles at OMX Lab, how we hire, and what working here actually looks like day to day.',
};

export default function CareerPage() {
    return (
        <>
            <CareerHero />
            <WhyJoinUs />
            <ViewFromInside />
            <HiringProcess />
            <OpenRoles />
        </>
    );
}
