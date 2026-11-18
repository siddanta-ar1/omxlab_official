import type { Metadata } from 'next';
import { PROJECTS } from '@/lib/work';
import { FeaturedProject, ProjectCell } from '@/components/work/ProjectCard';
import { ContactBand } from '@/components/common/ContactBand';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Products and client projects built by OMX Lab: Sākṣī, KKKhane, UNSAID, e-commerce stores, community and event apps across Nepal.',
};

export default function WorkPage() {
  const featured = PROJECTS.filter((p) => p.featured);
  const ownMore = PROJECTS.filter((p) => !p.featured && p.kind !== 'Client');
  const clientWork = PROJECTS.filter((p) => p.kind === 'Client');
  const clients = new Set(PROJECTS.filter((p) => p.kind === 'Client').map((p) => p.client)).size;
  const live = PROJECTS.filter((p) => p.href && !p.href.includes('github.com')).length;

  return (
    <div className="flex flex-col w-full">
      <section data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-md">
            WORK
          </span>
          <h1 className="text-headline-xl-mobile md:text-headline-xl text-text-primary max-w-4xl">
            Shipped, in use, and ours to show.
          </h1>
          <p className="mt-space-md max-w-2xl text-body-lead text-on-surface-variant">
            Our own products and the sites and apps we build for businesses, clubs and institutions in Nepal. Where
            a project is public, the link goes to the real thing.
          </p>
          <dl className="mt-space-xl grid grid-cols-3 max-w-xl border-t border-grid-hairline pt-space-md">
            {[
              { label: 'Projects', value: PROJECTS.length },
              { label: 'Clients', value: clients },
              { label: 'Live sites', value: live },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[12px] text-text-muted">{stat.label}</dt>
                <dd className="text-headline-lg text-text-primary font-semibold tabular-nums">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="w-full bg-paper-white">
        <div className="max-w-[1600px] mx-auto px-space-md md:px-margin pt-space-2xl">
          <h2 className="text-headline-lg text-text-primary tracking-tight">Our products</h2>
          <div className="border-t border-grid-hairline mt-space-md">
            {featured.map((project, i) => (
              <FeaturedProject key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-paper-white py-space-2xl border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
          <h2 className="text-headline-lg text-text-primary tracking-tight">More products and open source</h2>
          <p className="mt-space-xs mb-space-lg text-body-compact text-on-surface-variant max-w-2xl">Apps, platforms and tools we build and run ourselves.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline">
            {ownMore.map((project, i) => (
              <ProjectCell key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-paper-white py-space-2xl border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
          <h2 className="text-headline-lg text-text-primary tracking-tight">Client work</h2>
          <p className="mt-space-xs mb-space-lg text-body-compact text-on-surface-variant max-w-2xl">Sites and apps for businesses, clubs and institutions across Nepal.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline">
            {clientWork.map((project, i) => (
              <ProjectCell key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </div>
  );
}
