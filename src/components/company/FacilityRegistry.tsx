/* The registry entry for the company itself.

   OMX Lab was established in September 2026 and operates from Kathmandu — the
   coordinates the rest of the site already carries (27.7172° N / 85.3240° E).
   One real entry, stated plainly, rather than a roster of facilities the
   company does not have. */

type RegistryFact = {
  label: string;
  value: string;
};

const FACTS: RegistryFact[] = [
  { label: 'COORDINATES', value: '27.7172° N / 85.3240° E' },
  { label: 'ESTABLISHED', value: 'SEPTEMBER 2026' },
  { label: 'FOUNDER', value: 'SIDDANTA SODARI' },
  { label: 'CLASSIFICATION', value: 'TECHNOLOGY & RESEARCH' },
];

export function FacilityRegistry() {
  return (
    <section
      className="w-full bg-paper-white border-b border-grid-hairline"
      aria-labelledby="registry-heading"
    >
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            02 / REGISTRY ENTRY
          </span>
          <h2
            id="registry-heading"
            className="text-headline-lg-mobile md:text-headline-lg text-text-primary"
          >
            One address, stated plainly.
          </h2>
        </div>

        <div className="border border-grid-hairline">
          {/* Entry head */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-xs px-space-lg py-space-md border-b border-grid-hairline bg-studio-grey">
            <div className="flex items-center gap-space-sm">
              <span
                className="w-2.5 h-2.5 bg-swatch-helios shrink-0"
                aria-hidden="true"
              />
              <span className="text-label-code uppercase text-text-muted">
                FAC_01
              </span>
              <h3 className="text-headline-md text-text-primary">
                Kathmandu Studio
              </h3>
            </div>
            <span className="text-label-code uppercase text-text-muted border border-grid-hairline bg-paper-white px-2 py-1">
              HQ · ACTIVE
            </span>
          </div>

          {/* Facts matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-grid-hairline">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="border-r border-b border-grid-hairline px-space-lg py-space-md flex flex-col gap-space-xs"
              >
                <span className="text-micro-eyebrow uppercase text-text-muted">
                  {fact.label}
                </span>
                <span className="text-body-default text-text-primary">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>

          <p className="px-space-lg py-space-md text-body-default text-on-surface-variant max-w-2xl">
            Kathmandu, Nepal. The laboratory is young by design — every system
            described on this site was built after September 2026, and the
            registry grows only as fast as the work it records.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FacilityRegistry;
