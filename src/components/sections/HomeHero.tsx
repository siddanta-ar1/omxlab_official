import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { PROJECTS } from '@/lib/work';
import { RESEARCH } from '@/lib/research';
import { SITE, START_PROJECT_HREF } from '@/lib/site';

/* The home page opens on what OMX Lab is, then shows the three products that
   prove it, each a real link. No animation is needed for it to read. */
export function HomeHero() {
  const featured = PROJECTS.filter((p) => p.featured);
  const clientCount = PROJECTS.filter((p) => p.kind === 'Client').length;

  return (
    <section className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
        <div className="lg:col-span-7" data-anim="">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-md">
            {SITE.legalName.toUpperCase()} · {SITE.tagline.toUpperCase()}
          </span>
          <h1 className="text-headline-xl-mobile md:text-headline-xl text-text-primary max-w-3xl">
            We build software for Nepal, and research how to build it better.
          </h1>
          <p className="mt-space-md max-w-2xl text-body-lead text-on-surface-variant">
            Websites, apps and platforms for businesses, clubs and institutions, and our own products for heritage,
            hospitality and privacy. From Bharatpur, Chitwan, since {SITE.founded}.
          </p>
          <div className="mt-space-xl flex flex-col sm:flex-row gap-space-sm">
            <a
              href={START_PROJECT_HREF}
              className="inline-flex items-center justify-center bg-action text-on-primary px-space-lg py-space-sm text-body-compact font-semibold hover:bg-action-hover transition-colors"
            >
              Start a project
            </a>
            <Link
              href="/work"
              className="inline-flex items-center justify-center border border-grid-hairline px-space-lg py-space-sm text-body-compact text-text-primary hover:bg-studio-grey transition-colors"
            >
              See our work
            </Link>
          </div>
          <dl className="mt-space-2xl grid grid-cols-3 max-w-xl border-t border-grid-hairline pt-space-md">
            {[
              { label: 'Projects shipped', value: PROJECTS.length },
              { label: 'Client projects', value: clientCount },
              { label: 'Research projects', value: RESEARCH.length },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-[12px] text-text-muted">{s.label}</dt>
                <dd className="text-headline-lg text-text-primary font-semibold tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-grid-hairline lg:pl-space-2xl flex flex-col" data-anim="">
          <h2 className="text-[12px] text-text-muted mb-space-sm">Our products, live now</h2>
          <ul className="border-t border-grid-hairline">
            {featured.map((p) => (
              <li key={p.slug} className="border-b border-grid-hairline py-space-lg">
                <div className="flex items-baseline justify-between gap-space-md">
                  <h3 className="text-headline-md text-text-primary font-semibold">{p.name}</h3>
                  <span className="text-[12px] text-text-muted shrink-0">{p.sector}</span>
                </div>
                <p className="mt-space-xs text-body-compact text-on-surface-variant">{p.summary.split('. ')[0]}.</p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-space-sm inline-flex items-center gap-1 text-body-compact text-text-primary underline underline-offset-4 hover:text-action-hover"
                  >
                    {p.linkLabel}
                    <MdArrowOutward aria-hidden="true" size={16} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
