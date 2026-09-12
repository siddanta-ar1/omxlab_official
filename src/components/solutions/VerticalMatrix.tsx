type Vertical = {
  sector: string;
  swatchClassName: string;
  title: string;
  body: string;
};

const VERTICALS: Vertical[] = [
  {
    sector: 'INFRASTRUCTURE',
    swatchClassName: 'bg-swatch-foundry',
    title: 'Physical telemetry, verified continuously.',
    body: 'Autonomous verification pipelines calibrated for high-precision foundry and automation lines — zero-drift sensor tolerances at industrial scale.',
  },
  {
    sector: 'HEALTHCARE',
    swatchClassName: 'bg-swatch-helios',
    title: 'Structural accuracy without compromise.',
    body: 'Protein sequence alignment and bio-informatics workloads accelerated under HIPAA-compliant, zero-loss structural tolerance guarantees.',
  },
  {
    sector: 'FINTECH',
    swatchClassName: 'bg-swatch-studio border border-grid-hairline',
    title: 'Deterministic identity, real time.',
    body: 'KYC and identity synthesis pipelines built to strict FINMA Tier-1 standards, deployed with sub-12ms deterministic response latency.',
  },
  {
    sector: 'DEFENCE & SOVEREIGN',
    swatchClassName: 'bg-swatch-sage',
    title: 'Air-gapped, sovereign by design.',
    body: 'Zero-exposure enclave architectures for classified and sovereign workloads, hardware-isolated from every external network boundary.',
  },
  {
    sector: 'SCIENTIFIC RESEARCH',
    swatchClassName: 'bg-swatch-rune',
    title: 'Instrumented for reproducibility.',
    body: 'Cryo-EM and structural modeling pipelines with sub-angstrom resolution limits, engineered for peer-reviewable, reproducible output.',
  },
  {
    sector: 'ADVANCED MANUFACTURING',
    swatchClassName: 'bg-swatch-foundry',
    title: 'Line-rate quality assurance.',
    body: 'Distributed inspection and defect-classification systems running at production line-rate across multi-site manufacturing floors.',
  },
];

export function VerticalMatrix() {
  return (
    <section className="w-full bg-paper-white py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-2xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            SECTOR MATRIX
          </span>
          <h2 className="text-headline-xl text-text-primary tracking-tight">
            Calibrated per compliance boundary.
          </h2>
        </div>
        {/* Hairline matrix: container carries top/left rules, each cell carries
            its own right/bottom rule -- clean edges at every breakpoint. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
          {VERTICALS.map((vertical) => (
            <div
              key={vertical.sector}
              className="p-space-lg lg:p-space-xl border-r border-b border-grid-hairline flex flex-col gap-space-md hover:bg-studio-grey transition-colors duration-100"
            >
              <div className="flex items-center gap-space-sm">
                <span className={`w-[10px] h-[10px] shrink-0 ${vertical.swatchClassName}`} aria-hidden="true" />
                <span className="text-label-code text-text-muted uppercase tracking-[0.2em]">
                  {vertical.sector}
                </span>
              </div>
              <div>
                <h3 className="text-headline-md text-text-primary mb-space-xs font-semibold">
                  {vertical.title}
                </h3>
                <p className="text-body-compact text-on-surface-variant">{vertical.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerticalMatrix;
