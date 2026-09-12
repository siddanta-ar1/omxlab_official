import Link from 'next/link';
import { toIsoDate } from '@/lib/registry-date';

type DispatchCategory =
  | 'SYSTEM RELEASE'
  | 'RESEARCH'
  | 'PARTNERSHIP'
  | 'FACILITY'
  | 'COMPLIANCE';

type Dispatch = {
  code: string;
  category: DispatchCategory;
  date: string;
  title: string;
  href: string;
};

// Reverse-chronological. Keep it that way when editing this array.
const DISPATCHES: Dispatch[] = [
  {
    code: '03.13',
    category: 'RESEARCH',
    date: '18 AUG 2026',
    title: 'SAGE Core publishes continuous tensor latent benchmark results',
    href: '/research',
  },
  {
    code: '03.12',
    category: 'FACILITY',
    date: '02 AUG 2026',
    title: 'Evaluation harness certified for reproducible benchmark runs',
    href: '/company',
  },
  {
    code: '03.11',
    category: 'COMPLIANCE',
    date: '19 JUL 2026',
    title: 'OMX Lab attains SOC 2 Type II across all production clusters',
    href: '/company',
  },
  {
    code: '03.10',
    category: 'SYSTEM RELEASE',
    date: '05 JUL 2026',
    title: 'Foundry MOD_02 scales to 16,384 discrete accelerator clusters',
    href: '/products',
  },
  {
    code: '03.09',
    category: 'FACILITY',
    date: '14 JUN 2026',
    title: 'Kathmandu studio opens a second inference rack',
    href: '/company',
  },
  {
    code: '03.08',
    category: 'RESEARCH',
    date: '28 MAY 2026',
    title: 'RUNE Agent formal verification kernels clear independent LLVM audit',
    href: '/research',
  },
  {
    code: '03.07',
    category: 'COMPLIANCE',
    date: '30 APR 2026',
    title: 'Helios Identity Fabric certified EAL6+ under Common Criteria',
    href: '/company',
  },
  {
    code: '03.06',
    category: 'PARTNERSHIP',
    date: '22 JAN 2026',
    title: 'Zurich Capital Apex deploys deterministic KYC under FINMA Tier-1',
    href: '/company',
  },
  {
    code: '03.05',
    category: 'SYSTEM RELEASE',
    date: '08 JAN 2026',
    title: 'OMX Studio ships its adversarial red-teaming module',
    href: '/products',
  },
  {
    code: '03.04',
    category: 'PARTNERSHIP',
    date: '04 NOV 2025',
    title: 'Helvetia Bio-Informatics accelerates protein alignment by 18.4x',
    href: '/company',
  },
  {
    code: '03.03',
    category: 'COMPLIANCE',
    date: '22 OCT 2025',
    title: 'OMX Lab attains HIPAA compliance for healthcare-sector deployments',
    href: '/company',
  },
  {
    code: '03.02',
    category: 'PARTNERSHIP',
    date: '06 OCT 2025',
    title: 'Axis Automation Corp deploys foundry telemetry verification at scale',
    href: '/company',
  },
];

// Achromatic swatch treatments keyed to category. No product swatch colours
// and no Signal Sky here -- this page's one accent is already spent in
// FeaturedDispatch.
const CATEGORY_SWATCH: Record<DispatchCategory, string> = {
  'SYSTEM RELEASE': 'bg-text-primary',
  RESEARCH: 'bg-on-surface-variant',
  PARTNERSHIP: 'bg-border-subtle',
  FACILITY: 'bg-paper-white border border-text-primary',
  COMPLIANCE: 'bg-studio-grey border border-grid-hairline',
};

export function DispatchTable() {
  return (
    <section
      data-anim="" className="w-full bg-studio-grey border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin py-space-2xl">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            FULL REGISTRY
          </span>
          <h2 className="text-headline-md text-text-primary">
            Reverse-chronological, unfiltered.
          </h2>
        </div>

        <ol className="border-t border-b border-grid-hairline divide-y divide-grid-hairline bg-paper-white">
          {DISPATCHES.map((dispatch) => (
            <li key={dispatch.code}>
              <Link
                href={dispatch.href}
                className="group grid grid-cols-1 sm:grid-cols-[64px_180px_104px_1fr_20px] items-start sm:items-center gap-x-space-md gap-y-1.5 px-space-md sm:px-margin py-space-md hover:bg-studio-grey transition-colors duration-100"
              >
                <span className="text-label-code text-text-muted">{dispatch.code}</span>

                <span className="inline-flex items-center gap-2">
                  <span
                    className={`w-[10px] h-[10px] shrink-0 ${CATEGORY_SWATCH[dispatch.category]}`}
                    aria-hidden="true"
                  />
                  <span className="text-[10px] uppercase tracking-[0.1em] text-text-primary border border-grid-hairline px-1.5 py-0.5">
                    {dispatch.category}
                  </span>
                </span>

                <span className="text-label-code text-[11px] text-text-muted">
                  <time dateTime={toIsoDate(dispatch.date)}>{dispatch.date}</time>
                </span>

                <span className="text-body-default text-text-primary">{dispatch.title}</span>

                <span
                  className="lab-link-glyph text-text-muted group-hover:translate-x-[3px] transition-transform hidden sm:inline-block justify-self-end"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default DispatchTable;
