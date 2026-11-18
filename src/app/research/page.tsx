import type { Metadata } from 'next';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { RESEARCH, RESEARCH_AREAS, type ResearchProject } from '@/lib/research';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'OMX Lab research: HumanSign keystroke-dynamics authorship verification, signer-independent Nepali Sign Language recognition, heritage documentation, verifiable privacy, generative media and resilient networks.',
};

const STATUS_STYLE: Record<ResearchProject['status'], string> = {
  Paper: 'bg-action text-on-primary',
  Proposal: 'bg-surface-container-high text-text-primary',
  Prototype: 'bg-surface-container-high text-text-primary',
  'In use': 'bg-signal-orange text-text-primary',
  'Open source': 'bg-secondary-container text-text-primary',
};

function Status({ status }: { status: ResearchProject['status'] }) {
  return <span className={`inline-block text-[11px] px-2 py-0.5 ${STATUS_STYLE[status]}`}>{status}</span>;
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-body-compact text-text-primary underline underline-offset-4 hover:text-action-hover"
    >
      {label}
      <MdArrowOutward aria-hidden="true" size={16} />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default function ResearchPage() {
  const byStatus = (s: ResearchProject['status']) => RESEARCH.filter((r) => r.status === s).length;

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-md">
            RESEARCH
          </span>
          <h1 className="text-headline-xl-mobile md:text-headline-xl text-text-primary max-w-4xl">
            Questions we are working on.
          </h1>
          <p className="mt-space-md max-w-2xl text-body-lead text-on-surface-variant">
            Each project starts from a problem we met while building, in Nepal and for it. Each is labelled with its
            real status: paper, proposal, prototype, open source, or in use.
          </p>
          <dl className="mt-space-xl grid grid-cols-3 max-w-xl border-t border-grid-hairline pt-space-md">
            {[
              { label: 'Projects', value: RESEARCH.length },
              { label: 'In use', value: byStatus('In use') },
              { label: 'Areas', value: RESEARCH_AREAS.length },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[12px] text-text-muted">{stat.label}</dt>
                <dd className="text-headline-lg text-text-primary font-semibold tabular-nums">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Areas: a quick map of the page */}
      <section className="w-full bg-paper-white border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-2xl">
          <h2 className="text-headline-md text-text-primary mb-space-lg">Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline">
            {RESEARCH_AREAS.map((area, i) => (
              <div
                key={area.name}
                data-anim=""
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
                className="p-space-lg flex flex-col gap-space-sm border-b border-r border-grid-hairline hover:bg-studio-grey transition-colors duration-100"
              >
                <h3 className="text-[18px] text-text-primary font-semibold">{area.name}</h3>
                <p className="text-body-compact text-on-surface-variant">{area.body}</p>
                <p className="mt-auto flex flex-wrap gap-x-space-sm gap-y-1 text-[12px]">
                  {area.slugs.map((slug) => {
                    const r = RESEARCH.find((x) => x.slug === slug);
                    return r ? (
                      <a key={slug} href={`#${slug}`} className="text-text-primary underline underline-offset-4 hover:text-action-hover">
                        {r.short}
                      </a>
                    ) : null;
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-full bg-paper-white border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin pt-space-2xl">
          <h2 className="text-headline-lg text-text-primary tracking-tight">Projects</h2>
          <div className="border-t border-grid-hairline mt-space-md">
            {RESEARCH.map((r) => (
              <article
                key={r.slug}
                id={r.slug}
                data-anim=""
                className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg py-space-2xl border-b border-grid-hairline last:border-b-0 scroll-mt-24"
              >
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 text-[12px] text-text-muted mb-space-sm">
                    <Status status={r.status} />
                    <span>{r.area}</span>
                    <span aria-hidden="true">·</span>
                    <span>{r.year}</span>
                  </div>
                  <h3 className="text-headline-md text-text-primary font-semibold">{r.title}</h3>
                  {r.context && <p className="mt-space-xs text-[13px] text-text-muted">{r.context}</p>}
                  <p className="mt-space-md text-body-lead text-on-surface-variant">{r.question}</p>
                  {r.href && (
                    <div className="mt-space-md">
                      <ExternalLink href={r.href} label={r.linkLabel ?? 'Visit'} />
                    </div>
                  )}
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-lg lg:pl-space-xl">
                  <div>
                    <h4 className="text-[12px] text-text-muted mb-space-xs">Approach</h4>
                    <ul className="space-y-space-xs">
                      {r.approach.map((step) => (
                        <li key={step} className="text-body-compact text-text-primary flex gap-space-xs">
                          <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-signal-orange" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-space-lg">
                    <div>
                      <h4 className="text-[12px] text-text-muted mb-space-xs">Where it stands</h4>
                      <p className="text-body-compact text-text-primary">{r.outcome}</p>
                    </div>
                    <div>
                      <h4 className="text-[12px] text-text-muted mb-space-xs">Methods</h4>
                      <ul className="flex flex-wrap gap-1.5" aria-label="Methods">
                        {r.methods.map((m) => (
                          <li key={m} className="text-[12px] text-text-primary bg-surface-container px-2 py-1">
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate */}
      <section className="w-full bg-studio-grey py-space-3xl">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row md:items-center md:justify-between gap-space-lg">
          <div>
            <h2 className="text-headline-lg text-text-primary tracking-tight">Research with us.</h2>
            <p className="mt-space-xs text-body-compact text-on-surface-variant max-w-xl">
              We work with students, universities and institutions on data collection, evaluation and field trials.
              The same research shows up in the products we build for clients.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center justify-center bg-action text-on-primary px-space-lg py-space-sm text-body-compact hover:bg-action-hover transition-colors"
          >
            See it in our work
          </Link>
        </div>
      </section>
    </div>
  );
}
