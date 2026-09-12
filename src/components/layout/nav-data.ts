/* ---------------------------------------------------------------------------
   Primary navigation, and the contents of each mega-menu drawer.

   The taxonomy is the footer's: capabilities and instruments under Products,
   verticals under Solutions, the SDK surface under Developers, and the
   institutional registry under Company. Research and News have no sub-tree and
   navigate directly.
   --------------------------------------------------------------------------- */

export type MenuLink = {
  label: string;
  href: string;
  /** One line of supporting copy, shown only in the feature column. */
  detail?: string;
  /** Product swatch class; a flat square, never a background. */
  swatch?: string;
  /** Registry code, e.g. MOD_01. */
  code?: string;
};

export type MenuColumn = {
  eyebrow: string;
  /** The wide first column carries detail copy and swatches. */
  feature?: boolean;
  links: MenuLink[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: MenuColumn[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    columns: [
      {
        eyebrow: '01 / MODULES',
        feature: true,
        links: [
          {
            label: 'Helios',
            href: '/products',
            code: 'MOD_01',
            swatch: 'bg-swatch-helios',
            detail: 'Identity and verification, at sub-80ms.',
          },
          {
            label: 'Foundry',
            href: '/products',
            code: 'MOD_02',
            swatch: 'bg-swatch-foundry',
            detail: 'Distributed training across 16,384 accelerators.',
          },
          {
            label: 'OMX Studio',
            href: '/products',
            code: 'MOD_03',
            swatch: 'bg-swatch-studio',
            detail: 'Evaluation, drift and adversarial probing.',
          },
          {
            label: 'Rune Agent',
            href: '/products',
            code: 'MOD_04',
            swatch: 'bg-swatch-rune',
            detail: 'Autonomous code synthesis, formally verified.',
          },
          {
            label: 'Sage Core',
            href: '/products',
            code: 'MOD_05',
            swatch: 'bg-swatch-sage',
            detail: 'Foundation multimodal reasoning.',
          },
        ],
      },
      {
        eyebrow: '02 / INSTRUMENTS',
        links: [
          { label: 'OMX Synth 4', href: '/products' },
          { label: 'Spectra Core', href: '/products' },
          { label: 'Flow Array 200', href: '/products' },
          { label: 'Calibrator Pro', href: '/products' },
          { label: 'LIMS Bridge', href: '/products' },
        ],
      },
      {
        eyebrow: '03 / DEPLOYMENT',
        links: [
          { label: 'Sandbox tier', href: '/products' },
          { label: 'Enterprise tier', href: '/products' },
          { label: 'Sovereign tier', href: '/products' },
          { label: 'Comparison matrix', href: '/products' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    columns: [
      {
        eyebrow: '01 / VERTICALS',
        feature: true,
        links: [
          {
            label: 'Infrastructure',
            href: '/solutions',
            swatch: 'bg-swatch-foundry',
            detail: 'Telemetry verification across foundry lines.',
          },
          {
            label: 'Healthcare',
            href: '/solutions',
            swatch: 'bg-swatch-sage',
            detail: 'Sequence alignment at 18.4x throughput.',
          },
          {
            label: 'Fintech',
            href: '/solutions',
            swatch: 'bg-swatch-helios',
            detail: 'Deterministic KYC under Tier-1 supervision.',
          },
          {
            label: 'Defence & Sovereign',
            href: '/solutions',
            swatch: 'bg-swatch-rune',
            detail: 'Air-gapped deployment on customer premises.',
          },
        ],
      },
      {
        eyebrow: '02 / EVIDENCE',
        links: [
          { label: 'Case studies', href: '/solutions' },
          { label: 'Compliance strip', href: '/solutions' },
          { label: 'Benchmarks', href: '/research' },
        ],
      },
    ],
  },
  { label: 'Research', href: '/research' },
  {
    label: 'Developers',
    href: '/developers',
    columns: [
      {
        eyebrow: '01 / CLIENTS',
        feature: true,
        links: [
          {
            label: 'Python SDK',
            href: '/developers',
            swatch: 'bg-swatch-foundry',
            detail: 'The reference client, versioned with the API.',
          },
          {
            label: 'Rust bindings',
            href: '/developers',
            swatch: 'bg-swatch-rune',
            detail: 'Zero-copy, for latency-bound callers.',
          },
          {
            label: 'TypeScript SDK',
            href: '/developers',
            swatch: 'bg-swatch-studio',
            detail: 'Browser and server, fully typed.',
          },
        ],
      },
      {
        eyebrow: '02 / REFERENCE',
        links: [
          { label: 'API reference', href: '/developers' },
          { label: 'Quickstart', href: '/developers' },
          { label: 'Webhooks & events', href: '/developers' },
          { label: 'Status register', href: '/developers' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    columns: [
      {
        eyebrow: '01 / THE LABORATORY',
        feature: true,
        links: [
          {
            label: 'Founder',
            href: '/company',
            swatch: 'bg-swatch-helios',
            detail: 'Established September 2026 by Siddanta Sodari.',
          },
          {
            label: 'Registry entry',
            href: '/company',
            swatch: 'bg-swatch-sage',
            detail: 'Kathmandu. 27.7172° N / 85.3240° E.',
          },
          {
            label: 'Open roles',
            href: '/company#open-roles',
            swatch: 'bg-swatch-foundry',
            detail: 'Six entries, hiring slowly and in public.',
          },
        ],
      },
      {
        eyebrow: '02 / GOVERNANCE',
        links: [
          { label: 'Ethics committee', href: '/company' },
          { label: 'Biosafety Tier III', href: '/company' },
          { label: 'SOC 2 Type II', href: '/company' },
          { label: 'Data residency', href: '/company' },
        ],
      },
    ],
  },
  { label: 'News', href: '/news' },
];
