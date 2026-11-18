import Link from 'next/link';
import { RESEARCH } from '@/lib/research';

/** Home-page strip: the research behind the products, three at a glance. */
export function ResearchTeaser() {
  const picks = ['humansign', 'nsl', 'saksi-evidence']
    .map((slug) => RESEARCH.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <section className="w-full bg-studio-grey py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-2xl flex flex-col md:flex-row md:items-end md:justify-between gap-space-md">
          <div>
            <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
              RESEARCH
            </span>
            <h2 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-tight">
              We learn before we build.
            </h2>
          </div>
          <Link
            href="/research"
            className="text-body-compact text-text-primary underline underline-offset-4 hover:text-action-hover"
          >
            All {RESEARCH.length} research projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
          {picks.map((r, i) => (
            <Link
              key={r.slug}
              href={`/research#${r.slug}`}
              data-anim=""
              style={{ transitionDelay: `${i * 60}ms` }}
              className="p-space-lg lg:p-space-xl border-r border-b border-grid-hairline flex flex-col gap-space-sm hover:bg-studio-grey transition-colors duration-100"
            >
              <span className="text-[12px] text-text-muted">
                {r.status} · {r.area}
              </span>
              <h3 className="text-headline-md text-text-primary font-semibold">{r.short}</h3>
              <p className="text-body-compact text-on-surface-variant">{r.question}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchTeaser;
