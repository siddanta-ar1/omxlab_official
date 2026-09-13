import { toIsoDate } from '@/lib/registry-date';

type ValidationCase = {
  sector: string;
  date: string;
  client: string;
  description: string;
};

const validationCases: ValidationCase[] = [
  {
    sector: 'INFRASTRUCTURE',
    date: 'OCT-2025',
    client: 'AXIS AUTOMATION CORP',
    description:
      'Autonomous verification of 4.2M physical telemetry data points daily across high-precision foundry lines.',
  },
  {
    sector: 'HEALTHCARE',
    date: 'NOV-2025',
    client: 'HELVETIA BIO-INFORMATICS',
    description:
      'Accelerating protein sequence alignment workloads by 18.4x with zero loss in structural accuracy tolerances.',
  },
  {
    sector: 'FINTECH',
    date: 'JAN-2026',
    client: 'ZURICH CAPITAL APEX',
    description:
      'Deterministic real-time KYC identity synthesis pipeline compliant with strict FINMA Tier-1 requirements.',
  },
];

export function EnterpriseValidation() {
  return (
    <section className="w-full bg-studio-grey py-space-2xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
          <div>
            <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
              ENTERPRISE SCALE VALIDATION
            </span>
            <h2 className="text-headline-md text-text-primary">
              Deployed across mission-critical nodes
            </h2>
          </div>
          {/* The source markup carried a four-pill carousel indicator here, for
              three cells that are all visible at once and never move. An
              indicator that tracks nothing is the decorative noise this system
              explicitly rejects, so it is replaced by the count itself --
              derived from the data, so it cannot drift out of step. */}
          <div className="flex items-center gap-space-sm shrink-0">
            <span className="w-2.5 h-2.5 bg-swatch-helios" aria-hidden="true" />
            <span className="text-micro-eyebrow uppercase text-text-muted tabular-nums">
              {String(validationCases.length).padStart(2, '0')} DEPLOYMENTS ON RECORD
            </span>
          </div>
        </div>

        {/* Hairline matrix: cells separated by rules, not gaps. 3-col desktop
            folds to a 1-col rail below md, divide-y persisting. */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid-hairline border border-grid-hairline">
          {validationCases.map((item, index) => (
            <div
              key={item.client}
              data-anim=""
              style={{ transitionDelay: `${index * 80}ms` }}
              className="relative aspect-[16/10] bg-text-primary overflow-hidden group flex flex-col justify-between p-space-lg"
            >
              <div
                className="absolute inset-0 halftone-invert opacity-[0.14]"
                aria-hidden="true"
              />
              <span
                className="absolute right-space-lg top-1/2 -translate-y-1/2 z-0 text-[120px] leading-none font-bold text-paper-white/[0.07] tabular-nums select-none"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-paper-white text-on-surface text-label-code text-[10px] tracking-[0.1em] px-2 py-0.5 uppercase font-semibold">
                  {item.sector}
                </span>
                <time dateTime={toIsoDate(item.date)} className="text-on-primary/80 text-label-code">
                  {item.date}
                </time>
              </div>
              <div className="relative z-10">
                <div className="h-8 mb-space-xs flex items-center">
                  <span className="text-headline-md text-[20px] tracking-tight font-bold text-on-primary uppercase">
                    {item.client}
                  </span>
                </div>
                <p className="text-body-compact text-on-primary/90 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnterpriseValidation;
