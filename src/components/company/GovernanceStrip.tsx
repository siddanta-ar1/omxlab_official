type GovernanceItem = {
  code: string;
  name: string;
  scope: string;
  cadence: string;
};

// Canon lifted verbatim from the footer's "05 / Governance" column.
const GOVERNANCE_ITEMS: GovernanceItem[] = [
  {
    code: 'GOV_01',
    name: 'Ethics Committee',
    scope: 'Reviews human-subject and biometric data protocols prior to deployment.',
    cadence: 'QUARTERLY REVIEW',
  },
  {
    code: 'GOV_02',
    name: 'Biosafety Tier III',
    scope: 'Containment classification governing any wet-lab collaboration.',
    cadence: 'ANNUAL AUDIT',
  },
  {
    code: 'GOV_03',
    name: 'SOC 2 Type II',
    scope: 'Independently attested controls over security, availability, confidentiality.',
    cadence: 'ANNUAL AUDIT',
  },
  {
    code: 'GOV_04',
    name: 'HIPAA Compliant',
    scope: 'Safeguards governing protected health information across engagements.',
    cadence: 'CONTINUOUS MONITORING',
  },
  {
    code: 'GOV_05',
    name: 'Data Residency',
    scope: 'Enforces jurisdictional storage and processing boundaries per mandate.',
    cadence: 'CONTINUOUS MONITORING',
  },
];

export function GovernanceStrip() {
  return (
    <section
      data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            04 / GOVERNANCE
          </span>
          <h2 className="text-headline-md text-text-primary">The compliance ledger.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-grid-hairline">
          {GOVERNANCE_ITEMS.map((item) => (
            <div
              key={item.code}
              className="border-r border-b border-grid-hairline p-space-lg flex flex-col gap-space-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-label-code text-text-muted uppercase tracking-[0.2em]">
                  {item.code}
                </span>
                <span
                  className="w-1.5 h-1.5 bg-on-surface-variant"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-body-default font-medium text-text-primary">{item.name}</h3>
              <p className="text-body-compact text-on-surface-variant">{item.scope}</p>
              <span className="mt-auto pt-space-sm text-micro-eyebrow text-text-muted uppercase">
                {item.cadence}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GovernanceStrip;
