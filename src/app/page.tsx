import { HeroSection } from '@/components/sections/HeroSection';
import { AnimatedAppIcons } from '@/components/sections/AnimatedAppIcons';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { WhatWeBuild } from '@/components/sections/WhatWeBuild';
import { CompaniesSecured } from '@/components/sections/CompaniesSecured';
import { ViewFromInside } from '@/components/sections/ViewFromInside';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { StudentAmbassador } from '@/components/sections/StudentAmbassador';
import { OpenRoles } from '@/components/sections/OpenRoles';
import { EcosystemDiagram } from '@/components/sections/EcosystemDiagram';
import { CustomerTestimonials } from '@/components/sections/CustomerTestimonials';
import { HaKomxClub } from '@/components/sections/HaKomxClub';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AnimatedAppIcons />
            <EcosystemDiagram />
            <TrustedBy />
            <WhatWeBuild />
            <HowWeWork />
            <CompaniesSecured />
            <ViewFromInside />
            <CustomerTestimonials />
            <StudentAmbassador />
            <HaKomxClub />
            <OpenRoles />
        </>
    );
}
