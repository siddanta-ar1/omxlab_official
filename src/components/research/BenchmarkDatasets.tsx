type Dataset = {
  name: string;
  size: string;
  licence: string;
  body: string;
};

const DATASETS: Dataset[] = [
  {
    name: 'OMX-SeqBench 40M',
    size: '40.2M annotated sequences',
    licence: 'CC BY 4.0',
    body: 'Reference sequence-alignment benchmark spanning clinical and environmental sample cohorts.',
  },
  {
    name: 'CryoSpecimen-EM 12K',
    size: '12,480 tilt-series tomograms',
    licence: 'ODC-BY 1.0',
    body: 'Low-dose cryo-EM capture set for reconstruction and density-map validation research.',
  },
  {
    name: 'VariantCall Gold Standard',
    size: '2.1M validated variant calls',
    licence: 'CC0 1.0',
    body: 'Population-scale variant-calling ground truth curated against clinical cohort panels.',
  },
  {
    name: 'AdvCert-Bench 500K',
    size: '512K adversarial probe pairs',
    licence: 'Restricted — Academic Use',
    body: 'Certification benchmark for adversarial robustness and biometric liveness detection models.',
  },
];

export function BenchmarkDatasets() {
  return (
    <section
      data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-2xl lg:py-space-3xl">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            04 / BENCHMARK DATASETS
          </span>
          <h2 className="text-headline-md text-text-primary">
            Released for independent validation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-grid-hairline">
          {DATASETS.map((dataset) => (
            <div key={dataset.name} className="p-space-lg flex flex-col gap-space-sm border-b border-r border-grid-hairline">
              <h3 className="text-body-lead text-[17px] text-text-primary font-semibold">
                {dataset.name}
              </h3>
              <div className="flex flex-col gap-1 pb-space-sm border-b border-grid-hairline">
                <div className="flex items-center justify-between">
                  <span className="text-label-code text-[10px] text-text-muted uppercase tracking-wider">
                    Size
                  </span>
                  <span className="text-body-compact text-text-primary">
                    {dataset.size}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-label-code text-[10px] text-text-muted uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-body-compact text-text-primary">
                    {dataset.licence}
                  </span>
                </div>
              </div>
              <p className="text-body-compact text-on-surface-variant">
                {dataset.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenchmarkDatasets;
