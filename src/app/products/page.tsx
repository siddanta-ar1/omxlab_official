import type { Metadata } from 'next';
import { PROJECTS } from '@/lib/work';
import { PageHero, StatRow } from '@/components/common/PageHero';
import { FeaturedProject } from '@/components/work/ProjectCard';
import { ContactBand } from '@/components/common/ContactBand';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Products made and run by OMX Lab: Sākṣī, KKKhane, UNSAID, NOTEacher, FocuSift, K’s animations and contentkit.',
};

export default function ProductsPage() {
  const own = PROJECTS.filter((p) => p.kind !== 'Client');
  const live = own.filter((p) => p.href && !p.href.includes('github.com')).length;
  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="PRODUCTS"
        title="Products we make and run ourselves."
        lead="We build our own products for problems we know first-hand: guiding visitors at heritage sites, running a restaurant, keeping a journal private, learning, and focus. What we learn from running them goes into the work we do for clients."
      >
        <StatRow
          stats={[
            { label: 'Products', value: own.length },
            { label: 'Live', value: live },
            { label: 'Open source', value: own.filter((p) => p.kind === 'Open source').length },
          ]}
        />
      </PageHero>
      <section className="w-full bg-paper-white border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
          {own.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
      <ContactBand title="Want one of these for your business?" body="KKKhane runs restaurants and hotels today, and our other products can be adapted for you. Tell us what you need." />
    </div>
  );
}
