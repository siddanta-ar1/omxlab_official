/**
 * Page header band for /products, built to the same 70/30 split as the
 * landing Hero: left column carries the eyebrow, h1 and one-line lead;
 * right rail carries a registry spec block in the same idiom as the
 * landing Hero's "INST. SPEC" card and metric ledger.
 *
 * Signal Sky (Signal Orange) is spent exactly once on this page: the italic
 * "registry." in the h1 below. Nowhere else on /products uses it.
 */

type RegistryMetric = {
  label: string;
  value: string;
};

const REGISTRY_METRICS: RegistryMetric[] = [
  { label: 'Modules catalogued', value: '05' },
  { label: 'Instruments listed', value: '05' },
  { label: 'Deployment tiers', value: '03' },
];

export function ProductsHeader() {
  return (
    <section
      data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto border-l border-r border-grid-hairline">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left column (70%) */}
          <div className="w-full lg:w-[70%] flex flex-col justify-center p-space-md sm:p-space-lg lg:p-space-xl">
            <div className="flex items-center gap-space-sm mb-space-md">
              <span className="w-2.5 h-2.5 bg-swatch-sage" aria-hidden="true" />
              <span className="text-micro-eyebrow text-on-surface-variant uppercase tracking-[0.25em]">
                PRODUCT REGISTRY
              </span>
            </div>
            <h1 className="text-headline-xl-mobile sm:text-headline-xl sm:text-[60px] text-text-primary tracking-[-0.03em] leading-[0.95] max-w-3xl">
              The full instrumentation{' '}
              <span className="accent-mark font-semibold">registry.</span>
            </h1>
            <p className="text-body-lead text-on-surface-variant mt-space-md max-w-2xl">
              Five modules, five certified instruments, three deployment tiers &mdash;
              specified to the millisecond.
            </p>
          </div>

          {/* Right rail (30%) */}
          <div className="w-full lg:w-[30%] bg-studio-grey border-t lg:border-t-0 lg:border-l border-grid-hairline p-space-lg lg:p-space-xl flex flex-col justify-center gap-space-lg">
            <div className="flex flex-col divide-y divide-grid-hairline border-y border-grid-hairline">
              {REGISTRY_METRICS.map((metric) => (
                <div key={metric.label} className="py-space-md flex items-center justify-between">
                  <span className="text-body-compact text-on-surface-variant">{metric.label}</span>
                  <span className="text-headline-md text-text-primary font-medium tabular-nums">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-space-md bg-paper-white border border-grid-hairline">
              <div className="flex items-center justify-between mb-space-xs">
                <span className="text-label-code text-on-surface font-semibold">
                  REGISTRY REF 04.512P
                </span>
                <span className="text-label-code text-[10px] text-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                  SYNCHRONIZED
                </span>
              </div>
              <p className="text-body-compact text-on-surface-variant text-[12px]">
                Comparison values below are audited against live cluster
                telemetry as of the most recent registry sync.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsHeader;
