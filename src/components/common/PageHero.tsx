import type { ReactNode } from 'react';

/** The top of every inner page: label, one headline, one sentence, optional extras. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-md">
          {eyebrow}
        </span>
        <h1 className="text-headline-xl-mobile md:text-headline-xl text-text-primary max-w-4xl">{title}</h1>
        <p className="mt-space-md max-w-2xl text-body-lead text-on-surface-variant">{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function StatRow({ stats }: { stats: { label: string; value: number | string }[] }) {
  return (
    <dl className="mt-space-xl grid grid-cols-3 max-w-xl border-t border-grid-hairline pt-space-md">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-[12px] text-text-muted">{stat.label}</dt>
          <dd className="text-headline-lg text-text-primary font-semibold tabular-nums">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default PageHero;
