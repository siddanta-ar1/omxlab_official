type ResearchArea = {
  name: string;
  swatchClassName: string;
  body: string;
};


const RESEARCH_AREAS: ResearchArea[] = [
  {
    name: 'Sequence Matrix',
    swatchClassName: 'bg-swatch-helios',
    body: 'High-throughput sequence alignment and assembly pipelines validated against clinical-grade reference panels.',
  },
  {
    name: 'Protein Folding',
    swatchClassName: 'bg-swatch-foundry',
    body: 'Constrained diffusion and structural refinement models producing folding predictions at sub-angstrom deviation.',
  },
  {
    name: 'Cryo-EM Models',
    swatchClassName: 'bg-swatch-studio border border-grid-hairline',
    body: 'Reconstruction and density-map validation from sparse tilt series and low-dose specimen capture.',
  },
  {
    name: 'Variant Calling',
    swatchClassName: 'bg-swatch-rune',
    body: 'Deterministic variant-calling pipelines built for population-scale clinical cohort analysis.',
  },
  {
    name: 'Batch Analytics',
    swatchClassName: 'bg-swatch-sage',
    body: 'Distributed batch inference and telemetry aggregation across multi-facility laboratory instrumentation.',
  },
  {
    name: 'Deterministic Inference',
    swatchClassName: 'bg-swatch-helios',
    body: 'Latency-bounded serving infrastructure with formally verified variance guarantees at production scale.',
  },
];

export function ResearchAreas() {
  return (
    <section className="w-full bg-studio-grey border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-2xl lg:py-space-3xl">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            03 / RESEARCH AREAS
          </span>
          <h2 className="text-headline-md text-text-primary">
            Six active fronts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
          {RESEARCH_AREAS.map((area) => (
            <div
              key={area.name}
              className="p-space-lg flex flex-col gap-space-sm border-b border-r border-grid-hairline transition-colors duration-100 hover:bg-studio-grey"
            >
              <span
                className={`w-[10px] h-[10px] shrink-0 ${area.swatchClassName}`}
                aria-hidden="true"
              />
              <h3 className="text-headline-md text-[18px] text-text-primary font-semibold">
                {area.name}
              </h3>
              <p className="text-body-compact text-on-surface-variant">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchAreas;
