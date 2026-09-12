type RegistryCount = {
  label: string;
  value: string;
};

const REGISTRY_COUNTS: RegistryCount[] = [
  { label: 'Publications', value: '74' },
  { label: 'Pre-prints', value: '31' },
  { label: 'Datasets', value: '19' },
  { label: 'Citations', value: '3,482' },
];

export function ResearchHeader() {
  return (
    <section className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-2xl lg:py-space-3xl">
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="w-2.5 h-2.5 bg-swatch-sage" aria-hidden="true" />
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em]">
            RESEARCH REGISTRY
          </span>
        </div>

        <h1 className="text-headline-xl-mobile md:text-headline-xl text-text-primary tracking-[-0.025em] max-w-4xl">
          Published findings, indexed.
        </h1>

        <p className="text-body-lead text-on-surface-variant mt-space-md max-w-2xl">
          Every capability shipped by OMX Lab traces back to a{' '}
          <span className="accent-mark">reviewed</span> publication, a
          pre-print under embargo, or a released benchmark dataset.
        </p>

        <div className="mt-space-xl grid grid-cols-2 md:grid-cols-4 border-t border-l border-grid-hairline">
          {REGISTRY_COUNTS.map((count) => (
            <div
              key={count.label}
              className="p-space-md flex flex-col gap-space-xs border-b border-r border-grid-hairline"
            >
              <span className="text-headline-md text-text-primary font-medium">
                {count.value}
              </span>
              <span className="text-body-compact text-text-muted">
                {count.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchHeader;
