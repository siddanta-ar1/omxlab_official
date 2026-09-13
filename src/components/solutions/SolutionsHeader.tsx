type HeaderMetric = {
  label: string;
  value: string;
};

const HEADER_METRICS: HeaderMetric[] = [
  { label: 'Verticals Live', value: '6' },
  { label: 'Certifications Held', value: '6' },
  { label: 'Deterministic Latency', value: '< 12ms' },
];

export function SolutionsHeader() {
  return (
    <section
      data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin py-space-2xl lg:py-space-3xl">
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="w-2.5 h-2.5 bg-swatch-sage shrink-0" aria-hidden="true" />
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em]">
            DEPLOYMENT VERTICALS
          </span>
        </div>
        <h1 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-[-0.02em] leading-none max-w-4xl">
          Six verticals. One{' '}
          <span className="accent-mark font-semibold">deterministic</span> core.
        </h1>
        <p className="text-body-lead text-on-surface-variant mt-space-md max-w-2xl">
          The same five modules, hardware-validated once and re-certified per
          sector — deployed against the compliance boundary your industry
          actually enforces.
        </p>

        {/* Metrics strip: hairline-bordered, no shadows, no gaps. */}
        <div className="mt-space-2xl grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-grid-hairline border-y border-grid-hairline">
          {HEADER_METRICS.map((metric) => (
            <div key={metric.label} className="py-space-md sm:px-space-lg flex flex-col gap-1">
              <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em]">
                {metric.label}
              </span>
              <span className="text-headline-md text-text-primary font-medium tabular-nums">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsHeader;
