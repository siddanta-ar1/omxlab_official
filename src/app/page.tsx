import { Hero } from '@/components/sections/Hero';
import { EnterpriseValidation } from '@/components/sections/EnterpriseValidation';
import { BentoConstellation } from '@/components/sections/BentoConstellation';
import { StackIndex } from '@/components/sections/StackIndex';
import { SystemServices } from '@/components/sections/SystemServices';
import { InitiateArchitecture } from '@/components/sections/InitiateArchitecture';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <EnterpriseValidation />
      <BentoConstellation />
      <StackIndex />
      <SystemServices />
      <InitiateArchitecture />
    </div>
  );
}
