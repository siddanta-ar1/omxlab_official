import Link from 'next/link';
import { ColourRegister } from '@/components/layout/ColourRegister';

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  eyebrow: string;
  links: FooterLink[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    eyebrow: '01 / Capabilities',
    links: [
      { label: 'Sequence Matrix', href: '/products' },
      { label: 'Protein Folding', href: '/products' },
      { label: 'Cryo-EM Models', href: '/products' },
      { label: 'Variant Calling', href: '/products' },
      { label: 'Batch Analytics', href: '/products' },
    ],
  },
  {
    eyebrow: '02 / Instruments',
    links: [
      { label: 'OMX Synth 4', href: '/products' },
      { label: 'Spectra Core', href: '/products' },
      { label: 'Flow Array 200', href: '/products' },
      { label: 'Calibrator Pro', href: '/products' },
      { label: 'LIMS Bridge', href: '/products' },
    ],
  },
  {
    eyebrow: '03 / Research',
    links: [
      { label: 'Peer Publications', href: '/research' },
      { label: 'Pre-prints (bioRxiv)', href: '/research' },
      { label: 'Benchmark Datasets', href: '/research' },
      { label: 'Clinical Trials', href: '/research' },
      { label: 'Open Science Grant', href: '/research' },
    ],
  },
  {
    eyebrow: '04 / Developers',
    links: [
      { label: 'API Reference', href: '/developers' },
      { label: 'Python SDK', href: '/developers' },
      { label: 'Rust Bindings', href: '/developers' },
      { label: 'Webhooks & Events', href: '/developers' },
      { label: 'Status Register', href: '/developers' },
    ],
  },
  {
    eyebrow: '05 / Governance',
    links: [
      { label: 'Ethics Committee', href: '/company' },
      { label: 'Biosafety Tier III', href: '/company' },
      { label: 'SOC 2 Type II', href: '/company' },
      { label: 'HIPAA Compliant', href: '/company' },
      { label: 'Data Residency', href: '/company' },
    ],
  },
  {
    eyebrow: '06 / Registry',
    links: [
      { label: 'Kathmandu Studio (HQ)', href: '/company' },
      { label: 'Founder', href: '/company' },
      { label: 'Registry Index', href: '/company' },
      { label: 'Careers (6 open)', href: '/company' },
      { label: 'Press Kit', href: '/company' },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: 'PRIVACY POLICY', href: '/company' },
  { label: 'TERMS OF SERVICE', href: '/company' },
  { label: 'SECURITY DISCLOSURE', href: '/company' },
];

export function Footer() {
  return (
    <footer className="w-full bg-studio-grey border-t border-grid-hairline">
      <div className="w-full px-space-md lg:px-margin py-space-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-grid-hairline">
          {FOOTER_COLUMNS.map((column) => (
            <nav
              key={column.eyebrow}
              aria-label={column.eyebrow}
              className="flex flex-col gap-space-sm p-space-md border-b border-r border-grid-hairline"
            >
              <span className="text-micro-eyebrow text-on-surface-variant uppercase tracking-wider">
                {column.eyebrow}
              </span>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  className="link-underline-grow text-body-compact text-on-surface-variant hover:text-on-surface"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="pt-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="text-label-code text-on-surface font-medium">
              OMX LAB
            </span>
            <span className="text-label-code text-on-surface-variant">
              © 2026 ALL RIGHTS RESERVED
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                className="text-label-code text-on-surface-variant hover:text-on-surface"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <span className="text-label-code text-primary font-semibold">
              KATHMANDU · EST. 2026
            </span>
          </div>
        </div>
      </div>
      <ColourRegister />
    </footer>
  );
}

export default Footer;
