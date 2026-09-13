type Certification = {
  name: string;
  scope: string;
};

const CERTIFICATIONS: Certification[] = [
  { name: 'FINMA TIER-1', scope: 'Swiss financial market supervisory authority, institutional scope.' },
  { name: 'HIPAA', scope: 'US health information privacy and security safeguard compliance.' },
  { name: 'SOC 2 TYPE II', scope: 'Independently audited operational controls, continuous monitoring.' },
  { name: 'ISO 30107-3', scope: 'Biometric presentation attack detection, liveness assurance standard.' },
  { name: 'EAL6+', scope: 'Common Criteria semiformally verified design, hardware enclave assurance.' },
  { name: 'BIOSAFETY TIER III', scope: 'Containment protocol for high-risk biological research environments.' },
];

export function ComplianceStrip() {
  return (
    <section
      data-anim="" className="w-full bg-studio-grey border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin py-space-2xl">
        <h2 className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-lg">
          COMPLIANCE REGISTRY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 border-t border-l border-grid-hairline bg-paper-white">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="p-space-md border-r border-b border-grid-hairline flex flex-col gap-1"
            >
              <span className="text-label-code text-text-primary font-semibold uppercase tracking-[0.1em]">
                {cert.name}
              </span>
              <p className="text-body-compact text-on-surface-variant">{cert.scope}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComplianceStrip;
