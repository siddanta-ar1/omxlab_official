import { toIsoDate } from '@/lib/registry-date';
type CaseModule = {
  code: string;
  name: string;
  swatchClassName: string;
};

type CaseMetric = {
  label: string;
  value: string;
};

type CaseStudy = {
  client: string;
  sector: string;
  date: string;
  description: string;
  metrics: [CaseMetric, CaseMetric, CaseMetric];
  modules: CaseModule[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'AXIS AUTOMATION CORP',
    sector: 'INFRASTRUCTURE',
    date: 'OCT-2025',
    description:
      'Autonomous verification of 4.2M physical telemetry data points daily across high-precision foundry lines.',
    metrics: [
      { label: 'THROUGHPUT', value: '11.3x' },
      { label: 'LATENCY', value: '8ms' },
      { label: 'VOLUME', value: '4.2M/day' },
    ],
    modules: [
      { code: 'MOD_01', name: 'HELIOS', swatchClassName: 'bg-swatch-helios' },
      { code: 'MOD_05', name: 'SAGE CORE', swatchClassName: 'bg-swatch-sage' },
    ],
  },
  {
    client: 'HELVETIA BIO-INFORMATICS',
    sector: 'HEALTHCARE',
    date: 'NOV-2025',
    description:
      'Accelerating protein sequence alignment workloads by 18.4x with zero loss in structural accuracy tolerances.',
    metrics: [
      { label: 'THROUGHPUT', value: '18.4x' },
      { label: 'LATENCY', value: '22ms' },
      { label: 'VOLUME', value: '96K seq/day' },
    ],
    modules: [
      { code: 'MOD_05', name: 'SAGE CORE', swatchClassName: 'bg-swatch-sage' },
      { code: 'MOD_02', name: 'FOUNDRY', swatchClassName: 'bg-swatch-foundry' },
    ],
  },
  {
    client: 'ZURICH CAPITAL APEX',
    sector: 'FINTECH',
    date: 'JAN-2026',
    description:
      'Deterministic real-time KYC identity synthesis pipeline compliant with strict FINMA Tier-1 requirements.',
    metrics: [
      { label: 'THROUGHPUT', value: '9.7x' },
      { label: 'LATENCY', value: '< 12ms' },
      { label: 'VOLUME', value: '640K/day' },
    ],
    modules: [
      { code: 'MOD_01', name: 'HELIOS', swatchClassName: 'bg-swatch-helios' },
      { code: 'MOD_03', name: 'OMX STUDIO', swatchClassName: 'bg-swatch-studio border border-on-primary/30' },
    ],
  },
];

export function DeploymentCaseStudies() {
  return (
    <section
      data-anim="" className="w-full bg-paper-white py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-2xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            REGISTERED DEPLOYMENTS
          </span>
          <h2 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-tight">
            Verified at production scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-on-primary/20 border border-grid-hairline">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.client}
              className="bg-text-primary p-space-lg lg:p-space-xl flex flex-col gap-space-lg"
            >
              <div className="flex items-center justify-between">
                <span className="bg-paper-white text-on-surface text-label-code text-[10px] tracking-[0.1em] px-2 py-0.5 uppercase font-semibold">
                  {item.sector}
                </span>
                <time dateTime={toIsoDate(item.date)} className="text-on-primary/70 text-label-code text-[11px]">{item.date}</time>
              </div>

              <div>
                <h3 className="text-headline-md text-on-primary font-bold tracking-tight uppercase mb-space-sm">
                  {item.client}
                </h3>
                <p className="text-body-default text-on-primary/90">{item.description}</p>
              </div>

              {/* Metrics row: the emotional centre -- large figures, micro labels. */}
              <div className="grid grid-cols-3 divide-x divide-on-primary/20 border-y border-on-primary/20 py-space-md">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-1 px-space-sm first:pl-0">
                    <span className="text-micro-eyebrow text-on-primary/60 uppercase tracking-[0.25em]">
                      {metric.label}
                    </span>
                    <span className="text-headline-lg-mobile md:text-headline-lg text-on-primary font-semibold tracking-tight tabular-nums">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <span className="text-micro-eyebrow text-on-primary/60 uppercase tracking-[0.25em] block mb-space-sm">
                  MODULES DEPLOYED
                </span>
                <div className="flex flex-wrap gap-space-md">
                  {item.modules.map((module) => (
                    <div key={module.code} className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 shrink-0 ${module.swatchClassName}`} aria-hidden="true" />
                      <span className="text-label-code text-on-primary/90 uppercase tracking-[0.1em]">
                        {module.code} · {module.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeploymentCaseStudies;
