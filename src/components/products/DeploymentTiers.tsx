/**
 * Deployment tier band. Three tiers, no pricing figures -- each cell
 * states what it includes, its isolation model, and its support tier.
 */

type Tier = {
  code: string;
  name: string;
  includes: string;
  isolation: string;
  support: string;
};

const TIERS: Tier[] = [
  {
    code: 'TIER 01',
    name: 'Sandbox',
    includes:
      'Shared multi-tenant compute pool, rate-limited API access, OMX Studio evaluation sandbox.',
    isolation: 'Logical tenant isolation on a shared accelerator pool.',
    support: 'Community and documentation-tier support.',
  },
  {
    code: 'TIER 02',
    name: 'Enterprise',
    includes:
      'Dedicated accelerator allocation, all five modules, private model registry.',
    isolation: 'Dedicated VPC with single-tenant compute nodes.',
    support: '24/7 engineering support with a dedicated solutions architect.',
  },
  {
    code: 'TIER 03',
    name: 'Sovereign',
    includes:
      'On-premises or sovereign-cloud deployment, air-gapped training clusters, full source escrow.',
    isolation: 'Physically isolated hardware with customer-controlled key management.',
    support: 'On-site engineering team with a dedicated compliance liaison.',
  },
];

const TIER_FIELDS: { label: string; key: keyof Pick<Tier, 'includes' | 'isolation' | 'support'> }[] = [
  { label: 'Includes', key: 'includes' },
  { label: 'Isolation model', key: 'isolation' },
  { label: 'Support tier', key: 'support' },
];

export function DeploymentTiers() {
  return (
    <section
      data-anim="" className="w-full bg-paper-white py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            DEPLOYMENT TIERS
          </span>
          <h2 className="text-headline-lg text-text-primary">
            Three ways to run the registry.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid-hairline border border-grid-hairline">
          {TIERS.map((tier) => (
            <div key={tier.code} className="p-space-lg flex flex-col gap-space-md">
              <div>
                <span className="text-label-code text-text-muted uppercase tracking-[0.2em] block mb-space-xs">
                  {tier.code}
                </span>
                <h3 className="text-headline-md text-text-primary">{tier.name}</h3>
              </div>
              <div className="flex flex-col divide-y divide-grid-hairline border-t border-grid-hairline">
                {TIER_FIELDS.map((field) => (
                  <div key={field.key} className="py-space-sm flex flex-col gap-1">
                    <span className="text-label-code text-text-muted uppercase tracking-[0.15em]">
                      {field.label}
                    </span>
                    <span className="text-body-compact text-text-primary">
                      {tier[field.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeploymentTiers;
