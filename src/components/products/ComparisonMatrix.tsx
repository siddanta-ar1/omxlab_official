/**
 * The flagship element of /products: a single hairline table comparing all
 * five modules. Numeric columns are right-aligned with tabular figures;
 * status is a dot + label rather than a colour fill, keeping the page's
 * chromaticism budget untouched (bg-primary is the standing status colour
 * used elsewhere in the system -- e.g. Hero's "ONLINE" card -- not the
 * once-per-page Signal Sky accent).
 */

type ModuleStatus = 'ACTIVE' | 'LIMITED ACCESS' | 'RESEARCH PREVIEW';

type MatrixRow = {
  name: string;
  code: string;
  swatchClassName: string;
  classification: string;
  latency: string;
  throughput: string;
  certification: string;
  status: ModuleStatus;
};

const STATUS_DOT_CLASSNAME: Record<ModuleStatus, string> = {
  ACTIVE: 'bg-primary',
  'LIMITED ACCESS': 'border border-text-muted',
  'RESEARCH PREVIEW': 'bg-text-muted',
};

const MATRIX_ROWS: MatrixRow[] = [
  {
    name: 'HELIOS',
    code: 'MOD_01',
    swatchClassName: 'bg-swatch-helios',
    classification: 'Identity & Verification',
    latency: '< 80ms',
    throughput: '12,400 verifications/sec',
    certification: 'ISO 30107-3',
    status: 'ACTIVE',
  },
  {
    name: 'FOUNDRY',
    code: 'MOD_02',
    swatchClassName: 'bg-swatch-foundry',
    classification: 'Distributed Training',
    latency: '< 2μs RDMA hop',
    throughput: '16,384 accelerator clusters',
    certification: 'SOC 2 Type II',
    status: 'ACTIVE',
  },
  {
    name: 'OMX STUDIO',
    code: 'MOD_03',
    swatchClassName: 'bg-swatch-studio border border-grid-hairline',
    classification: 'Model Evaluation Hub',
    latency: '< 340ms per pass',
    throughput: '640 eval runs/hr',
    certification: 'HIPAA',
    status: 'ACTIVE',
  },
  {
    name: 'RUNE AGENT',
    code: 'MOD_04',
    swatchClassName: 'bg-swatch-rune',
    classification: 'Autonomous Code Synthesis',
    latency: '< 1.8s per completion',
    throughput: '94 synthesis ops/min',
    certification: 'EAL6+',
    status: 'LIMITED ACCESS',
  },
  {
    name: 'SAGE CORE',
    code: 'MOD_05',
    swatchClassName: 'bg-swatch-sage',
    classification: 'Foundation Multimodal Model',
    latency: '< 210ms multimodal',
    throughput: '22,000 tokens/sec (BF16/FP8)',
    certification: 'FINMA Tier-1',
    status: 'RESEARCH PREVIEW',
  },
];

export function ComparisonMatrix() {
  return (
    <section
      data-anim="" className="w-full bg-studio-grey py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            MODULE COMPARISON MATRIX
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary">
            Five modules, one calibrated register.
          </h2>
        </div>

        <div className="overflow-x-auto border border-grid-hairline">
          <table className="w-full min-w-[960px] border-collapse">
            <caption className="sr-only">Specification matrix for the five OMX Lab modules: classification, latency, throughput, certification and operational status.</caption>
            <thead>
              <tr className="border-b border-grid-hairline bg-studio-grey">
                <th
                  scope="col"
                  className="text-left px-space-md py-space-sm text-label-code text-text-muted uppercase tracking-[0.1em] font-semibold"
                >
                  Module
                </th>
                <th
                  scope="col"
                  className="text-left px-space-md py-space-sm text-label-code text-text-muted uppercase tracking-[0.1em] font-semibold"
                >
                  Classification
                </th>
                <th
                  scope="col"
                  className="text-right px-space-md py-space-sm text-label-code text-text-muted uppercase tracking-[0.1em] font-semibold"
                >
                  Latency
                </th>
                <th
                  scope="col"
                  className="text-right px-space-md py-space-sm text-label-code text-text-muted uppercase tracking-[0.1em] font-semibold"
                >
                  Throughput
                </th>
                <th
                  scope="col"
                  className="text-left px-space-md py-space-sm text-label-code text-text-muted uppercase tracking-[0.1em] font-semibold"
                >
                  Certification
                </th>
                <th
                  scope="col"
                  className="text-left px-space-md py-space-sm text-label-code text-text-muted uppercase tracking-[0.1em] font-semibold"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-grid-hairline">
              {MATRIX_ROWS.map((row) => (
                <tr key={row.code} className="hover:bg-studio-grey transition-colors">
                  <td className="px-space-md py-space-md align-middle">
                    <div className="flex items-center gap-space-sm">
                      <span
                        className={`w-[10px] h-[10px] shrink-0 ${row.swatchClassName}`}
                        aria-hidden="true"
                      />
                      <div className="flex flex-col leading-tight">
                        <span className="text-body-compact text-text-primary font-semibold uppercase tracking-wide">
                          {row.name}
                        </span>
                        <span className="text-[10px] text-text-muted">{row.code}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-space-md py-space-md text-body-compact text-on-surface-variant">
                    {row.classification}
                  </td>
                  <td className="px-space-md py-space-md text-body-compact text-text-primary text-right tabular-nums whitespace-nowrap">
                    {row.latency}
                  </td>
                  <td className="px-space-md py-space-md text-body-compact text-text-primary text-right tabular-nums whitespace-nowrap">
                    {row.throughput}
                  </td>
                  <td className="px-space-md py-space-md text-[11px] text-text-primary uppercase tracking-wider whitespace-nowrap">
                    {row.certification}
                  </td>
                  <td className="px-space-md py-space-md">
                    <span className="flex items-center gap-2 text-[11px] text-text-primary uppercase tracking-wider whitespace-nowrap">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT_CLASSNAME[row.status]}`}
                        aria-hidden="true"
                      />
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparisonMatrix;
