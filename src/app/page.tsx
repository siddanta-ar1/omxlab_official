import { HomeHero } from '@/components/sections/HomeHero';
import { SystemServices } from '@/components/sections/SystemServices';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { ResearchTeaser } from '@/components/sections/ResearchTeaser';
import { ContactBand } from '@/components/common/ContactBand';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HomeHero />
      <SystemServices />
      <SelectedWork />
      <ResearchTeaser />
      <ContactBand />
    </div>
  );
}
