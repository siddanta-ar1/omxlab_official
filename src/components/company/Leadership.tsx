/* Founder, and the disciplines the laboratory is built around.

   This section names one real person — the founder — and nothing else. The
   remaining cells describe the practice areas the work sits in, not invented
   officers: a company established in September 2026 does not have a board of
   six, and printing one would be a fabrication rather than a design choice. */

type Discipline = {
  code: string;
  name: string;
  body: string;
  swatch: string;
};

const DISCIPLINES: Discipline[] = [
  {
    code: 'DIS_01',
    name: 'Identity & Verification',
    body: 'Deterministic biometric and credential systems, and the cryptographic boundaries they run inside.',
    swatch: 'bg-swatch-helios',
  },
  {
    code: 'DIS_02',
    name: 'Distributed Compute',
    body: 'Training orchestration, memory pooling and the throughput characteristics of large accelerator fabrics.',
    swatch: 'bg-swatch-foundry',
  },
  {
    code: 'DIS_03',
    name: 'Evaluation & Observability',
    body: 'Measurement of model behaviour under adversarial load, drift, and edge degradation.',
    swatch: 'bg-swatch-studio',
  },
  {
    code: 'DIS_04',
    name: 'Autonomous Synthesis',
    body: 'Formal verification, reproducible builds, and machine-written code that can be audited line by line.',
    swatch: 'bg-swatch-rune',
  },
  {
    code: 'DIS_05',
    name: 'Applied Research',
    body: 'Multimodal reasoning over physical signal, and the publication record that keeps it honest.',
    swatch: 'bg-swatch-sage',
  },
];

export function Leadership() {
  return (
    <section
      data-anim=""
      className="w-full bg-studio-grey border-b border-grid-hairline"
      aria-labelledby="founder-heading"
    >
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            03 / FOUNDER &amp; DISCIPLINES
          </span>
          <h2
            id="founder-heading"
            className="text-headline-lg-mobile md:text-headline-lg text-text-primary"
          >
            Founded, and answerable.
          </h2>
        </div>

        {/* Founder — the one named person on the site. */}
        <div className="border border-grid-hairline bg-paper-white mb-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-grid-hairline">
            <div className="border-r border-grid-hairline px-space-lg py-space-xl">
              <span className="text-label-code uppercase text-text-muted block mb-space-xs">
                REG_001
              </span>
              <h3 className="text-headline-lg-mobile md:text-headline-lg text-text-primary">
                Siddanta Sodari
              </h3>
              <p className="mt-space-xs text-body-default text-text-primary">
                Founder
              </p>
            </div>
            <div className="lg:col-span-2 border-r border-grid-hairline px-space-lg py-space-xl flex flex-col justify-center">
              <p className="text-body-lead text-on-surface-variant max-w-2xl">
                OMX Lab was established in September 2026 as a technology and
                research laboratory. It is early, it is small, and every claim
                on this site is meant to be checkable against something that
                actually runs.
              </p>
            </div>
          </div>
        </div>

        {/* Practice areas, not personnel. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
          {DISCIPLINES.map((discipline) => (
            <div
              key={discipline.code}
              className="border-r border-b border-grid-hairline p-space-lg flex flex-col gap-space-sm transition-colors duration-300 hover:bg-studio-grey"
            >
              <div className="flex items-center gap-space-sm">
                <span
                  className={`w-2.5 h-2.5 shrink-0 ${discipline.swatch}`}
                  aria-hidden="true"
                />
                <span className="text-label-code uppercase text-text-muted tracking-[0.2em]">
                  {discipline.code}
                </span>
              </div>
              <h3 className="text-headline-md text-text-primary">
                {discipline.name}
              </h3>
              <p className="text-body-compact text-on-surface-variant">
                {discipline.body}
              </p>
            </div>
          ))}

          {/* Open cell: the sixth slot is a vacancy, not a person. */}
          <div className="border-r border-b border-grid-hairline p-space-lg flex flex-col gap-space-sm justify-center">
            <span className="text-label-code uppercase text-text-muted tracking-[0.2em]">
              DIS_06
            </span>
            <h3 className="text-headline-md text-text-primary">Unassigned</h3>
            <p className="text-body-compact text-on-surface-variant">
              The sixth discipline is open. If your work belongs here, the
              registry has room for it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
